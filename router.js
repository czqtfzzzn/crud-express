/**
 * router.js 路由模块
 * 职责：
 *		处理路由
 * 		根据不同的请求方法 + 请求路径设置具体的请求处理函数
 *	模块职责要单一，不要乱写
 *  我们划分模块的目的就是为了增强项目代码的可维护性
 *  提升开发效率
 */

var fs = require('fs')
var Student = require('./student')

var express = require('express')

// 1.创建一个路由容器
var router = express.Router()

// 2. 把路由挂载到 router 路由容器中
router.get('/', function(req, res) {
	Student.findAll(function (err, students) {
		if(err) {
			return res.status(500).send('Server error')
		}
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子'
			],
			students: students
		})
	})
})

router.get('/students', function(req, res) {
	fs.readFile('./db.json', 'utf8', function(err, data) {
		if(err) {
			return res.status(500).send('Server error')
		}
		var students = JSON.parse(data).students
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子'
			],
			students: students
		})
	})
})

router.get('/students/new', function(req, res) {
	res.render('new.html')
})

router.post('/students/new', function(req, res) {
	console.log(req.body)
})

router.get('/students/edit', function(req, res) {
	
})

router.post('/students/edit', function(req, res) {
	
})

router.get('/students/delete', function(req, res) {
	
})

// 3. 把router 导出
module.exports = router
