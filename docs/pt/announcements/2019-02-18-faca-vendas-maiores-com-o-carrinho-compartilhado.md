---
title: 'Faça vendas maiores com o carrinho compartilhado'
id: 1gvY2p1Rc9hjkfyVvOHY2C
status: PUBLISHED
createdAt: 2019-02-18T21:26:10.613Z
updatedAt: 2019-12-31T15:13:41.446Z
publishedAt: 2019-12-31T15:13:41.446Z
contentType: updates
productTeam: Shopping
author: 245tA425AIeioKAk2eaiwS
slugEN: 2019-02-18-close-bigger-deals-with-the-shared-cart
locale: pt
legacySlug: faca-vendas-maiores-com-o-carrinho-compartilhado
announcementImageID: ''
announcementSynopsisPT: 'O carrinho compartilhado já está disponível para todas as lojas, permitindo que mais de um cliente interaja com ele.'
---

Acabamos de lançar em stable o carrinho compartilhado, funcionalidade que permite a mais de um cliente adicionar, retirar ou atualizar produtos e dados de um mesmo carrinho. Assim, sua loja pode realizar vendas maiores e ganhar maior eficiência operacional, enquanto seus clientes podem ser organizar para aproveitar promoções.


## Conveniência para seus clientes, eficiência para sua loja
Com o carrinho compartilhado, seus clientes têm a opção de compartilhar suas compras antes de fechar o pedido. Isso quer dizer que mais de uma pessoa vai poder visualizar, adicionar ou retirar itens do carrinho. 

Através de um novo parâmetro na URL do carrinho, é possível compartilhar seu link. Assim, as pessoas podem se organizar para comprar juntas na sua loja, aproveitando promoções que incidem em pedidos com um número maior de itens. Do lado da loja, há um ganho de eficiência na operação com:

- Oportunidade de vendas maiores.
- Menor esforço de logística.
- Fluxo de pedido único.

Mais do que isso: seu televendas pode montar um carrinho e compartilhar com o cliente, para que ele complete com suas informações. Isso elimina a necessidade de repassar dados sensíveis, como o CVV do cartão, por telefone.


## Segurança em primeiro lugar
As informações sensíveis, como dados de usuário e endereço, __só são visíveis para o real dono da informação (e apenas se ele estiver logado)__. Quem recebe o link do carrinho não consegue ler essas informações, que aparecem mascaradas na tela.


## O que você precisa fazer
O carrinho compartilhado só é possível por causa da inclusão de um novo parâmetro nas URLs do checkout: o `orderFormId`. Por isso, é necessário que, caso decida usar a funcionalidade, você:

- Adeque os serviços de rastreamento (Google Analytics, por exemplo) para fazer a leitura correta do novo parâmetro.
- Use as [APIs da VTEX](https://github.com/vtex/vtex.js/tree/master/docs/checkout#getorderformexpectedorderformsections) para obter o ID do carrinho.
- Customize a página do carrinho para que o link passe a contar com o ID.

<div class="alert alert-warning">
Lembramos que o carrinho compartilhado é opcional e as mudanças citadas aqui devem se feitas <strong>apenas pelas lojas que desejam usar a feature</strong>.
</div>

Leia o [artigo sobre o carrinho compartilhado](/pt/tutorial/o-que-e-o-carrinho-compartilhado) e conheça melhor a nova funcionalidade. 
