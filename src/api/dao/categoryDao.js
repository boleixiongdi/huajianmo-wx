/**
 * Created by leijiwen on 11/22/15.
 */

// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var categorySql = require('./categorySqlMapping');
var utils = require('../util/utils');
var mysqlConf = require('../conf/mysqldb');
// 使用连接池，提升性能
var pool  = mysql.createPool(utils.extend({}, mysqlConf.mysql));
//var moment = require("moment");

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        console.log(ret);
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数
            //var param = req.query || req.params;
            var param = req.body;
            console.log(param);
            // 建立连接，向表中插入值
            //var regiterTime = moment().format('YYYY-MM-DD HH:mm:ss');
            //console.log(regiterTime);
            //insert into category(id, name, status, parentId, priority) VALUES(0,?,?,?,?)
            connection.query(categorySql.insert, [param.name, param.status, param.parentId, param.priority], function(err, result) {
                console.log(err);
                console.log(result);
            });
            // 释放连接
            connection.release();
        });
    },

    delete: function (req, res, next) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = +req.query.id;
            connection.query(categorySql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        // 为了简单，要求同时传name和age两个参数
        var param = req.body;
        if(param.name == null || param.age == null || param.id == null) {
            jsonWrite(res, undefined);
            return;
        }

        pool.getConnection(function(err, connection) {
            connection.query(categorySql.update, [param.name, param.age, +param.id], function(err, result) {
                // 使用页面进行跳转提示
                if(result.affectedRows > 0) {
                    res.render('suc', {
                        result: result
                    }); // 第二个参数可以直接在jade中使用
                } else {
                    res.render('fail',  {
                        result: result
                    });
                }

                connection.release();
            });
        });

    },
    queryById: function (req, res, next) {
        var id = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query(categorySql.queryById, id, function(err, result) {
                connection.release();
                console.log(result);
                return result;
            });
        });
    },
    queryAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query(categorySql.queryAll, function(err, result) {
                console.log(result);
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};
