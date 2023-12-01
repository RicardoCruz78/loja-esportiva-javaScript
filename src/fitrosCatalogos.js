const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos(){
const produtosEscondidos =
Array.from  (catalogoProdutos.getElementsByClassName("hidden")        
);
for (const produto of produtosEscondidos  ){
        produto.classList.remove("hidden");
}
}

function esconderCalcados() {
exibirTodos();
const produtosCalcados =
Array.from(catalogoProdutos.getElementsByClassName("calcado")

);
for (const produto of produtosCalcados) {
    produto.classList.add("hidden");
}
}

function esconderAcessorio() {
exibirTodos();
const produtosAcessorios =
    Array.from(catalogoProdutos.getElementsByClassName("acessorio")
    
    );
    for (const produto of produtosAcessorios) {
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros() {
document.getElementById("exibir-todos")
.addEventListener("click",exibirTodos);

document.getElementById("exibir-calcado")
.addEventListener("click",esconderAcessorio);

document.getElementById("exibir-acessorio")
.addEventListener("click",esconderCalcados);
}