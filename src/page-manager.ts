
export class PageManager{


    static obj:PageManager;

    private constructor(){




    }

    getPageManagerInstance():PageManager{

        if(!PageManager.obj){
           PageManager.obj = new PageManager();
        }
        return PageManager.obj

    }

}