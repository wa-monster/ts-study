"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = require("express");
var app_1 = __importDefault(require("./utils/app"));
var biquke_1 = __importDefault(require("./utils/biquke"));
var uril_1 = require("./utils/uril");
var router = express_1.Router();
var checkLogin = function (req, res, next) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        next();
    }
    else {
        res.json(uril_1.getResponseData(null, '请先登录'));
    }
};
router.get("/", function () { });
router.get("/logout", function (req, res) {
    if (req.session) {
        req.session.login = undefined;
    }
    res.json(uril_1.getResponseData(true));
});
router.post("/login", function (req, res) {
    var isLogin = req.session ? req.session.login : false;
    if (isLogin) {
        res.json(uril_1.getResponseData(true));
    }
    else {
        if (req.body.password == "123") {
            if (req.session) {
                req.session.login = true;
                res.json(uril_1.getResponseData(true, '登陆成功'));
            }
            else {
                res.json(uril_1.getResponseData(false, '登陆失败'));
            }
        }
        else {
            res.json(uril_1.getResponseData(false, '登陆失败'));
        }
    }
});
router.get("/getData", checkLogin, function (req, res) {
    try {
        var analyzer = biquke_1.default.getInstance();
        var url = "http://www.xbiquge.la/";
        new app_1.default(analyzer, url);
        res.json(uril_1.getResponseData(true, '爬取成功'));
    }
    catch (error) {
        res.json(uril_1.getResponseData(false, '爬取失败'));
    }
});
router.get("/showData", checkLogin, function (req, res) {
    try {
        var position = path_1.default.resolve(__dirname, '../data/course.json');
        var result = fs_1.default.readFileSync(position, 'utf8');
        res.json(uril_1.getResponseData(JSON.parse(result)));
    }
    catch (error) {
        res.json(uril_1.getResponseData(false, '未爬取到内容'));
    }
});
exports.default = router;
