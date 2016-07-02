var express = require('express');
var router = express.Router();
var request = require("request");
var categoryDao = require('../dao/categoryDao');

function getPackage(packageName, cb) {
  var registryUrl = 'https://registry.npmjs.org';
  var url = [registryUrl, packageName].join('/');

  request(url, function (error, response, body) {
    cb(error, response, body)
  });
}

//新增分类
router.post('/add', function(req, res, next) {
  res.set({'Content-Type':'text/json','Encodeing':'utf8'});
  //新增分类
  categoryDao.add(req, res, next);
  //查询出分类
  var data = categoryDao.queryAll(req, res, next);
  //统一返回json
  res.json(data);

});

//删除分类
router.post('/delete', function(req, res, next) {
  res.set({'Content-Type':'text/json','Encodeing':'utf8'});
  categoryDao.delete(req, res, next);
});

//查询分类
router.get('/list', function(req, res, next) {
  var myData = [
    {
      priority:'这是一个优先级priority',
      status:'这是一个状态status',
      parentId:'这是一个父级分类',
      name:'test',
      readme:'1.0,这是一个测试页面',
      author: {
          name: "Fraser Xu",
          email: "xvfeng123@gmail.com",
          url: "https://fraserxu.me"
      }
    },{
      priority:'这是一个优先级priority',
      status:'这是一个状态status',
      parentId:'这是一个父级分类',
      name:'test',
      readme:'1.0,这是一个测试页面',
      author: {
          name: "Fraser Xu",
          email: "xvfeng123@gmail.com",
          url: "https://fraserxu.me"
      }
    }
  ]
  res.json({ categories: myData})
});

router.get('/', function(req, res, next) {
  console.log("请求接口-------------/api/category")
  var packageName = req.query['npmPackage'] || '';

  var myData = {
    priority:'这是一个优先级priority',
    status:'这是一个状态status',
    parentId:'这是一个父级分类',
    name:'test',
    readme:'1.0,这是一个测试页面',
    author: {
        name: "Fraser Xu",
        email: "xvfeng123@gmail.com",
        url: "https://fraserxu.me"
    }
  }

  //js 只能通过回调
  //categoryDao.queryAll(req, res, next);
  res.json({ category: myData})

});

router.get('/id', function(req, res, next) {
  console.log("请求接口-------------/api/category/id")
  var id = req.query['id'] || '';
  console.log(id);

  var myData = {
    priority:'这是一个优先级priority',
    status:'这是一个状态status',
    parentId:'这是一个父级分类',
    name:'test',
    readme:'1.0,这是一个测试页面',
    author: {
        name: "Fraser Xu",
        email: "xvfeng123@gmail.com",
        url: "https://fraserxu.me"
    }
  }

  //js 只能通过回调
  //categoryDao.queryAll(req, res, next);
  res.json({ category: myData})

});

module.exports = router;
