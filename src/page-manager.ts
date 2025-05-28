import { Page } from "playwright";
import { Login } from "./userauth/object-repository/login";
import { SignUp } from "./userauth/object-repository/signup";

export class PageManager{


    private static obj:PageManager;
    login:Login
    signIn:SignUp

    private constructor(page:Page){

        this.login = new Login(page);
        this.signIn = new SignUp(page)




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


}