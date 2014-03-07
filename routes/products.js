
/*
 * GET home page.
 */

exports.index = function(req, res){
	var mysql = require('mysql');
	var cnf = require('../config')
	var db = mysql.createConnection(cnf.db);
	db.connect();

	var sql ="SELECT products.*,brands.name AS brand_name FROM products left join brands on brands.id=products.brand_id";
	db.query(sql,function(errors,rows){
		// 将数据渲染至jade模板中
	    res.render('products', { title: '产品列表',products:rows });
		console.log(rows)
	});

};
