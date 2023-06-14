---
title: Como exibir vitrine com produtos de um único seller
id: 6mMXWCrxGEYegIoSkSmiOQ
status: DRAFT
createdAt: 2019-01-10T14:06:30.745Z
updatedAt: 2020-07-28T16:48:10.306Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:21:39.211Z
contentType: tutorial
productTeam: Shopping
author: authors_35
slug: como-exibir-vitrine-com-produtos-de-um-unico-seller
legacySlug: como-exibir-vitrine-com-produtos-de-um-unico-seller
subcategory: 54gbzsku02c4bKmgFbp3v3
---

__Trabalhando com VTEX Session e o conceito de Região para prover uma navegação customizada__

Agora é possível determinar uma Região que considera um seller específico, ou um conjunto de sellers.

RESTRIÇÃO

Essa região inclui necessariamente o seller principal (e-commerce).
É necessário ter o VTEX Session instalado

Contudo é possível não considerar na vitrine o estoque desse seller principal. Usando o recurso da política comercial o lojista pode configurar a navegação para uma nova política comercial onde o estoque do seller principal nao existe para essa politica.

Assim, quando a cliente estiver navegando será exibido os produtos disponíveis na politica comercial X para a regiao

__[ seller principal, seller escolhido ]__

Como o `seller principal` nao terá estoque para essa política, vamos estar considerando apenas o *seller escolhido*.

Essa funcionalidade é restrita para sellers que usam o recurso White Label.

--

Exemplo de uso:

Um varejista gostaria de permitir seus clientes selecionarem uma loja específica para navegarem.

Digamos que uma família está indo ao shopping e de antemão poderia navegar nos produtos dispomíveis para aquela loja

Esse cenário implica que ao entrar no se-commerce do varejista existiria a opção de escolher a loja (seller).

No momento que o usuário escolhe o site também deve carregar a nova política comercial.

Aqui ainda pode exisitr mais customizações, como uma UI específica através do recurso de multiloja - loja.varejista.com.br

No momento da escolha da loja o front deve carregar o site passando um parâmetro da querystring `?regionId={{valor}}`
onde o valor deve ser encodado base64 e seguir o padrão

*SW#sellerPrincipal;sellerEscolhido*

Essa querystring será reconhecida pelo app do VTEX Session. O Session faz toda a gestao da sessão e possui dois cookies. Segment e Session.

Temos um artigo que explica no detalhe o VTEX Session.

Uma das funções do Session, ao criar a Região, é informar o Portal as condições de exibição de produtos e dessa forma o Portal irá exibir apenas os produtos disponíveis para a regiao definida.

A simulação que o Portal faz ao checkout é similar a essa:

__POST__ http://{{accountName}}.vtexcommercestable.com.br/api/checkout/pub/orderForms/simulation?rnbBehavior=0&sc=2

    {
  "items": [ 
  {
  "id": "61628",
  "quantity": 1,
  "seller": "1" 
  }
       ],
  "country": "BRA",
   "postalCode": "22291070",
  "geoCoordinates": [],
  "shippingData": {

      "logisticsInfo": [
  {
      "itemIndex": 0,
      "regionId": "U1cjbG9qYWFuaW1hbGU7YW5pbWFsZW9zY2FyZnJlaXJl"
  }
      ]

     }
}

No exemplo acima o SKU 61628 possui estoque apenas no seller. Na loja principal, para o sc=2 esse produto nao tem estoque disponível
