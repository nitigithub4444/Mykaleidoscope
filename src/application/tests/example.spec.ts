import {test,request} from "playwright/test";

test("apitest", async({page})=>{


const apiContext = await request.newContext()
  const apiresponse = apiContext.put("https:www.abc.com", {

    headers:{

      "content-type":"application-json"
    }
  })

  
})


aw