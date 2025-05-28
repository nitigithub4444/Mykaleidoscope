import { Page } from "playwright";
import { Login } from "./userauth/object-repository/login";

export class PageManager{


    private static obj:PageManager;
    login:Login

    private constructor(page:Page){

        this.login = new Login(page)




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


}