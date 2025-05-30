// //outoput = spaceELspacespacePP SPACESPACEA

// function reverseSytring(){

//     let result:string = "";
//     const str:string = " ab  cd  Apple"
//     let newStr = str.trimStart();

//     for(let i =newStr.length-1; i>=0;i--){

//         result = result + newStr.charAt(i);
//     }
//     let spaces = str.length - newStr.length;

//     for(let i =0; i<spaces;i)

//     console.log("reversed String is",result);

// }






//"programming"
// "progamin"
function removeDuplciates(value:string){

    let str:string="";
    const sset = new Set();
    
    for(let i = 0 ; i<value.length; i++)
    {
        
    if(!sset.has(value.charAt(i))){
    
        str = str.concat(value.charAt(i)) ;
        sset.add(value.charAt(i));
    }
    
    }
    console.log(str);
    
    }
    removeDuplciates("  hello  ");


