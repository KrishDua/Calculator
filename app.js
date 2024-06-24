let inp = document.querySelector("#inp");
let number = document.querySelectorAll(".num");
// let operator = document.querySelectorAll(".op");
let btn = document.querySelectorAll("button");
// console.log(btn[0].classList.contains("num") || btn[0].classlist.contains("op"));
let x = "";
for(let i = 0;i < btn.length;i++){
    // if(btn[i].classList.contains("num")){
        btn[i].addEventListener("click",function(){
            let btntext =  btn[i].innerText;
            if(btntext === "AC"){
                inp.value  = "";
            }else if(btntext === "="){
                try{
                    inp.value = eval(inp.value);
                }
                catch(e){
                    inp.value = "reult invalid";
                }
            }else{
                inp.value += btn[i].innerText;
            }
        })
    // }
}

