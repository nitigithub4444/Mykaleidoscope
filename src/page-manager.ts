import { Page } from "playwright";
import { Login } from "./userauth/object-repository/login";
import { SignUp } from "./userauth/object-repository/signup";
import { UserDetails } from "./application/object-repository/user-details";
import { ActivityForm } from "./application/object-repository/activity-form";

export class PageManager{


    private static obj:PageManager;
    login:Login
    signIn:SignUp
    userDetails:UserDetails
    activityForm:ActivityForm

    private constructor(page:Page){

        this.login = new Login(page);
        this.signIn = new SignUp(page)
        this.userDetails = new UserDetails(page);
        this.activityForm = new ActivityForm(page);

    }

   static getPageManagerInstance(page:Page):PageManager{

        if(!PageManager.obj){
           PageManager.obj = new PageManager(page);
        }
        return PageManager.obj

    }

    getLoginInstance():Login{

        return this.login;
    }

    getSignUp():SignUp{

        return this.signIn;
    }

    getUserDetails():UserDetails{

        return this.userDetails;
    }

    getActivityForm():ActivityForm{

        return this.activityForm;
    }


}