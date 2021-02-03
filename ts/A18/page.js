define("component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Footer = exports.Body = exports.Header = void 0;
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement("div");
            ele.innerHTML = "我来组成头部";
            document.body.appendChild(ele);
        }
        return Header;
    }());
    exports.Header = Header;
    var Body = /** @class */ (function () {
        function Body() {
            var ele = document.createElement("div");
            ele.innerHTML = "我来组成身体s";
            document.body.appendChild(ele);
        }
        return Body;
    }());
    exports.Body = Body;
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement("div");
            ele.innerHTML = "我来组成尾巴";
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    exports.Footer = Footer;
});
// }
define("demo", ["require", "exports", "component"], function (require, exports, component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // namespace Home {
    var Page = /** @class */ (function () {
        function Page() {
            var a = {
                name: "",
            };
            new component_1.Header();
            new component_1.Body();
            new component_1.Footer();
        }
        return Page;
    }());
    exports.default = Page;
});
// }
