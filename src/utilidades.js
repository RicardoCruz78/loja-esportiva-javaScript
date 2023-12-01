
export const catalogo  = [
  {

    
        id: "1",
        
        nome: 'Chuteira Branca',
        marca: 'Nike', 
          preco: 300, 
        imagem: "product-1.jpg",
          calcado: true,
          },
          { id: "2", 
        marca: 'Topper',
          nome: 'Chuteira Preta',
          preco: 85, 
        imagem: 'product-2.jpg',
        calcado: true,
          },
          {
          id: "3", 
        marca: 'Adidas', 
        nome: 'Chuteira Laranja',
          preco: 60, 
        imagem: 'product-3.jpg',
        calcado: true,
          },
          { 
        id: "4",
          marca: 'Nike',
          nome: 'Camisa Oficial Flamengo', 
        preco: 260,
          imagem: 'product-4.jpg', 
          calcado: false,
          }, 
        { 
        id: "5",
          marca: 'Rhumel', 
        nome: 'Camisa Oficial do Crisciuma',
          preco: 210, 
        imagem: 'product-5.jpg',
        calcado: false, 
        },
          { 
        id: "6", 
        marca: 'Nike',
          nome: 'Shorts',
          preco: 170,
          imagem: 'product-6.jpg',
          calcado: false,
          },
          {
          id: "7",
          marca: 'Nike',
          nome: 'Boné da Nike',
          preco: 75,
          imagem: 'product-7.jpg',
          calcado: false,
          }, 
        { 
        id: "8",
          marca: 'Referee',
          nome: 'Apito Referee', 
        preco: 88, 
        imagem: 'product-8.jpg', 
        calcado: false, 
        },
        ];

          export function salvarLocalStorage (chave,informacao){
          localStorage.setItem(chave,JSON.stringify(informacao));
          
        }

        export function lerLocalStorage (chave){
        return JSON.parse(localStorage.getItem(chave));
          
        }

        export function apagarDoLocalStorage(chave){
          localStorage.removeItem(chave);
        }

        export function desenharProdutoCarrinhoSimples(
          idProduto, 
          idContainerHtml,
          quantidadeProduto
          
          ){
          
          const produto = catalogo.find((p)=> p.id === idProduto);

          
          const containerProdutosCarrinho =document.getElementById(idContainerHtml);
          
          const elementoArticle = document.createElement("artticle");
          const articleClasses = [
              "flex",
              "bg-stone-200",
              "rounded-lg",
              "p-1",
              "relative",
              "mb-2",
              "w-96"
          ];
      
            for (const articleClass of articleClasses) {
              elementoArticle.classList.add(articleClass);
      
            }
          
          const cartaoProdutoCarrinho = `
          <img 
          src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="h-24 rounded-lg"/>
          <div class="p-2 flex flex-col justify-between">   
          <p class="text-slate-900 text-sm">
          ${produto.nome}
          </p>
          <p class="text-slate-400 text-xs">Número: 39</p>
          <p class="text-green-700 text-lg">$${produto.preco}</p>
        </div>
        <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
          
          <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
          
          
        </div>`;
        
        //article class="flexbg-slate-100 rounded-lg p-1 relative">codigo do cartão produto</article>
      
        elementoArticle.innerHTML = cartaoProdutoCarrinho;
          containerProdutosCarrinho.appendChild(elementoArticle);
      
          
      }
      