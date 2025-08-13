---
title: 'Seller Portal: Como Funciona o Catálogo'
id: 7pMB6YOt6YQDQQbzFB4Pxp
status: PUBLISHED
createdAt: 2021-02-02T22:30:31.929Z
updatedAt: 2021-10-01T19:27:02.367Z
publishedAt: 2021-10-01T19:27:02.367Z
firstPublishedAt: 2021-09-15T20:53:40.080Z
contentType: tutorial
productTeam: Channels
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-the-seller-portal-catalog-works
legacySlug: seller-portal-como-funciona-o-catalogo
locale: pt
subcategoryId: 4hisB47iAVZk4r3SEmMoG
---

O Catálogo do Seller Portal é o módulo onde você configura o sortimento de produtos da sua loja. Para que o seu cliente veja os seus produtos no marketplace, você precisa configurá-los por meio do Catálogo. 

## Arquitetura do Catálogo

A arquitetura do Catálogo do Seller Portal se baseia em alguns conceitos fundamentais distribuídos na seguinte hierarquia:

![ilustra-catalogo](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Sellers/seller-portal/seller-portal-como-funciona-o-catalogo_1.png)

- **Categorias:**  formas de organizar os seus produtos. Não é possível adicionar suas próprias Categorias, o marketplace é quem define as categorias disponíveis para enquadrar seus produtos. Cada produto estará obrigatoriamente relacionado a uma categoria já criada pelo marketplace.   
- **Marcas:**  fazem parte dos atributos que caracterizam os Produtos da sua loja. Desta maneira, seus clientes também podem encontrar o que buscam de forma mais específica. Não é possível adicionar suas próprias marcas, as marcas na aba `Marcas` já foram importadas do marketplace.    
- **Produtos:** os itens ofertados na vitrine do marketplace.  Podemos entendê-los como uma definição mais genérica dos itens que são vendidos em sua loja.    
- **Produtos Compartilhados:** os produtos em comum entre seu catálogo e o que já  é ofertado no marketplace. Não é necessário fazer o cadastro desses produtos, você pode definir apenas seu preço e estoque no módulo de Produtos Compartilhados. O painel de produtos compartilhados te informa automaticamente todos os produtos que o marketplace disponibilizou especificamente para sua loja, como seller. Saiba mais em nosso artigo sobre [produtos compartilhados](https://help.vtex.com/pt/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu).           
- **Especificações:** propriedades adicionais que podem ser aplicadas aos produtos da sua loja. A especificação de produto geralmente é utilizada para criar filtros de navegação no marketplace ou para exibir uma informação adicional na tela do produto.    
-  **Variações:** contêm as características que definem um tipo específico de produto e o diferenciam das outras opções ofertadas pela sua loja. São os itens que os consumidores realmente compram e que existem efetivamente no seu estoque.   
- **Anúncios:**  anúncios são produtos ou variações de um seller, com condições próprias de preço e estoque, e que foram enviados para um canal, o marketplace. Saiba mais em [Anúncios](https://help.vtex.com/pt/tutorial/anuncios-y-envio-de-productos-al-marketplace--3RwSj7AyBoPtFbXkS7REiu). 

## Exemplos de categoria, produto e variações 

### Moda

Vamos utilizar como exemplo uma loja do segmento de Moda. O catálogo desta loja pode ter um produto chamado *Camiseta masculina com estampa*. Para que o cliente consiga comprar o item que deseja, ele precisa escolher o tamanho da camiseta. Assim, as variações vinculadas a este produto podem ser:

- Camiseta masculina com estampa - Tamanho P  
- Camiseta masculina com estampa - Tamanho M  
- Camiseta masculina com estampa - Tamanho G  

O Produto é aquilo que é *ofertado* na vitrine do marketplace. Quando se oferta um item, um marketplace não costuma exibir em sua vitrine detalhes específicos de um produto, como o tamanho da camiseta. O que se *vende* é a "Camiseta masculina com estampa", mas o que o cliente *compra* é a "Camiseta masculina com estampa - Tamanho M". Um cliente não irá comprar apenas uma "Camiseta". Na verdade, a **unidade física do produto** enviada para o endereço de entrega será, por exemplo, uma "Camiseta Vermelha Tamanho M".

O entendimento do conceito de produto influencia diretamente na estratégia de exibição de itens na vitrine do marketplace. Os produtos é que são exibidos nas vitrines, enquanto as variações são selecionadas pelo cliente já dentro da página do produto.

### Eletrodomésticos

Agora, vamos analisar o cenário de eletrodomésticos. Um dos departamentos mais comuns de um marketplace desse setor é o de artigos para "Cozinha". Uma das divisões desse departamento é a **categoria** "Micro-ondas".

Contudo, existem vários tipos diferentes de micro-ondas. Desse modo, você pode escolher, por exemplo, um “Micro-ondas com Painel Integrado”, com a possibilidade deste eletrodoméstico ser “127V” ou “220V”. Desse modo, podemos entender a voltagem como a especificação que diferencia as variações do produto "Micro-ondas com Painel Integrado".

## Artigos Relacionados

- [Seller Portal: Produtos Compartilhados](https://help.vtex.com/pt/tutorial/seller-portal-produtos-compartilhados--6vUGj2UmOuLzQTK9pj04lu)      
- [Seller Portal: Detalhes do produto](https://help.vtex.com/pt/tutorial/seller-portal-detalhes-do-produto--K0WWsERWj7aQtmZinhYoP)      
- [Seller Portal: Primeiros Passos](https://help.vtex.com/pt/tutorial/seller-portal-primeiros-passos--6w1vBdRH2uuBGmUqgNQjwK)    
[Seller Portal: Anúncios e o Envio de Produtos para o Marketplace](/admin/app/docs/seller-portal/tutorials/3RwSj7AyBoPtFbXkS7REiu)    

