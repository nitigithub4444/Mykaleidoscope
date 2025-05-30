"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageManager = void 0;
const login_1 = require("./userauth/object-repository/login");
const signup_1 = require("./userauth/object-repository/signup");
const user_details_1 = require("./application/object-repository/user-details");
const activity_form_1 = require("./application/object-repository/activity-form");
class PageManager {
    constructor(page) {
        this.login = new login_1.Login(page);
        this.signIn = new signup_1.SignUp(page);
        this.userDetails = new user_details_1.UserDetails(page);
        this.activityForm = new activity_form_1.ActivityForm(page);
    }
    static getPageManagerInstance(page) {
        if (!PageManager.obj) {
            PageManager.obj = new PageManager(page);
        }
        return PageManager.obj;
    }
    getLoginInstance() {
        return this.login;
    }
    getSignUp() {
        return this.signIn;
    }
    getUserDetails() {
        return this.userDetails;
    }
    getActivityForm() {
        return this.activityForm;
    }
}
exports.PageManager = PageManager;
