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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
    }
    UserComponent.prototype.authenticate = function (email, password) {
        var _this = this;
        this.userService.authenticate(email, password).then(function (user) {
            localStorage.setItem('user', JSON.stringify(user));
            _this.loggedIn = true;
            _this.user = user;
        });
    };
    UserComponent.prototype.register = function (email, password) {
        var _this = this;
        this.userService.register(email, password).then(function (user) {
            _this.user = user;
        });
    };
    UserComponent.prototype.logout = function () {
        localStorage.removeItem('user');
        this.loggedIn = false;
    };
    UserComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            var user = JSON.parse(localStorage.getItem('user'));
            if (user)
                this.loggedIn = true;
        }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: 'app/user.component.html',
        styleUrls: ['app/user.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map