function display(num){
    var inp=document.querySelector("#btn");
    var val=inp.value;
     inp.value=val+num;
}

function evalu(){
    let numbers=document.querySelector("#btn").value;
    let res=eval(numbers);
    document.querySelector("#btn").value=res;
}
// function evalu(){
//     let num=document.querySelector("#btn").value;
//     alert(num)
// }
function cle(){
    document.querySelector("#btn").value=""
}
// function dele(){
//      let dig=document.querySelector("#btn").value
//     lis=[]
//     for(let j of dig){
//         lis.push(j)
//     }
//     lis.pop(-1)
//     str="";
//     for(let i of lis){
//         str+=i;
//     }
//     document.querySelector("#btn").value=str
// }
function dele(){
    var inp=document.querySelector("#btn").value
     inp=inp.slice(0,-1)
     document.querySelector("#btn").value=inp

}