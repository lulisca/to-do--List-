const { createElement } = require("react")

console.log("deu bom")
/* lista de tarefas 
[x]saber quando o botão foi clicado
[x] pegar a ação que tá dentro do input
 []colocar o texto na tela
 []deletar depois que completar 
 vc escreve "document toda vez que quiser chamar o html" 
 */ 

function addTarefa(){
    let guardar = document.querySelector("input").value;
    let li = document.createElement("li");
    li.innerHTML = guardar + ' <span onclick="addTarefa()">❌</span>';
    document.querySelector("ul").appendChild(li); 
    guardar =""
}
function dellTarefa(){

}