"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrowllerController = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var index_1 = require("../decorator/index");
var uril_1 = require("../utils/uril");
var app_1 = __importDefault(require("../utils/app"));
var biquke_1 = __importDefault(require("../utils/biquke"));
//中间件
var checkLogin = function (req, res, next) {
    console.log('checkLogin');
    var isLogin = !!(req.session ? req.session.login : false);
    if (isLogin) {
        next();
    }
    else {
        res.json(uril_1.getResponseData(null, '请先登录'));
    }
};
var test = function (req, res, next) {
    console.log('test');
    next();
};
var CrowllerController = /** @class */ (function () {
    function CrowllerController() {
    }
    CrowllerController.prototype.getData = function (req, res) {
        try {
            var analyzer = biquke_1.default.getInstance();
            var url = "http://www.xbiquge.la/";
            new app_1.default(analyzer, url);
            res.json(uril_1.getResponseData(true, '爬取成功'));
        }
        catch (error) {
            res.json(uril_1.getResponseData(false, '爬取失败'));
        }
    };
    CrowllerController.prototype.showData = function (req, res) {
        try {
            var position = path_1.default.resolve(__dirname, '../../data/course.json');
            var result = fs_1.default.readFileSync(position, 'utf8');
            res.json(uril_1.getResponseData(JSON.parse(result)));
        }
        catch (error) {
            res.json(uril_1.getResponseData(false, '未爬取到内容'));
        }
    };
    __decorate([
        index_1.get('/getData'),
        index_1.use(checkLogin)
    ], CrowllerController.prototype, "getData", null);
    __decorate([
        index_1.get('/showData'),
        index_1.use(checkLogin),
        index_1.use(test)
    ], CrowllerController.prototype, "showData", null);
    CrowllerController = __decorate([
        index_1.controller('/')
    ], CrowllerController);
    return CrowllerController;
}());
exports.CrowllerController = CrowllerController;
