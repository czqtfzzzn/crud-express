/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
var fs = require('fs')
var dbPath = './db.json'
/**
 * 获取所有学生列表
 *  callback 中的参数
 * 		第一个参数是 err
 * 			成功是 null
 * 			错误是 错误对象
 * 		第二个参数是 data
 * 			成功是 数组
 * 			错误是 undefined
 */
exports.findAll = function (callback) {
	fs.readFile(dbPath, 'uft8', function (err, data) {
		if(err) {
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}
/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
	fs.readFile(dbPath, 'uft8', function (err, data) {
		if(err) {
			return callback(err)
		}
		var students = JSON.parse(data).students
		student.id = students.length + 1
		students.push(student)
		var fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(dbPath,fileData, function (err) {
			if(err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

/**
 * 更新学生
 */
exports.update = function () {
	
}
/**
 * 删除学生
 */
exports.delete = function () {
	
}