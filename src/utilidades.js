
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