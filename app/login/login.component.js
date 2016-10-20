"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var config_service_1 = require('../services/config.service');
var auth_service_1 = require('../services/auth.service');
var LoginComponent = (function () {
    function LoginComponent(route, router, config, auth) {
        this.route = route;
        this.router = router;
        this.config = config;
        this.auth = auth;
        this.username = "";
        this.password = "";
        this.message = "";
    }
    LoginComponent.prototype.login = function () {
        if (this.username == "" || this.password == "") {
            this.message = "username & password must not be empty!";
            return;
        }
        if (this.auth.Login(this.username, this.password)) {
            this.router.navigate(['/admin/query']);
        }
        else {
            this.username = "";
            this.password = "";
            this.message = "username or password is not correct，please retry!";
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-component',
            templateUrl: "app/login/login.component.html"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, config_service_1.ConfigService, auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map