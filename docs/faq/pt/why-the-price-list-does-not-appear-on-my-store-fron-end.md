---
title: Por que o Preço de Lista não aparece no front-end da minha loja?
id: 7zB1S10crK6QXiWcDTUFtE
status: CHANGED
createdAt: 2019-03-25T20:41:57.520Z
updatedAt: 2020-11-27T19:40:10.985Z
publishedAt: 2019-12-31T14:24:12.007Z
firstPublishedAt: 2019-03-25T20:46:55.655Z
contentType: frequentlyAskedQuestion
productTeam: Marketing & Merchandising
author: 6JCq5z9N5xvlHKhhoEcvjM
slug: por-que-o-preco-de-lista-nao-aparece-no-front-end-da-minha-loja
legacySlug: por-que-o-preco-de-lista-nao-aparece-no-front-end-da-minha-loja
---

Eventualmente, o Preço de Lista pode não ser exibido no front-end da loja. Isso acontece por conta de erros na configuração do módulo [Preços](https://help.vtex.com/pt/tutorial/lista-de-precos-v2--tutorials_4394 "Preços"). 

O Preço de Lista é apenas uma das configurações possíveis ao estabelecer um preço de um SKU. Em geral, as primeiras regras definidas são o Preço Base, o Preço de Custo e o Markup.

Agora, o que acontece é que, ao fixarmos um preço para um SKU, essa configuração se sobrepõe às demais regras de modificação de preço antes cadastradas. Ou seja, os preço de lista ou preço base são “apagados” uma vez que o lojista aplica um preço fixo a um SKU.

Para fazer com que o Preço de Lista seja exibido novamente no front-end da loja é preciso remover o preço fixo das configurações.

Dito isso, siga o passo a passo: 

1. Acesse o módulo __Produtos__ 
2. Clique em __Preços__
3. Clique em __Lista de Preços__ 
4. Digite na busca pelo __Nome, Id__ ou __SKU__ do produto que deseja configurar.

Uma vez que o produto apareça na busca, basta clicar em cima de qualquer um dos cards que indicam o preço e o markup do item.  

Em seguida, irá aparecer uma aba no lado esquerdo da tela apresentando algumas especificações quanto ao preço.  

Desse modo, continue com o processo:

5. Acesse a sessão __Preços Fixos__
6. Apague o(s) __Preço(s) Fixo(s)__  
7. Salve as configurações clicando __Enter__

Pronto! Seus SKUs serão exibidos novamente na loja. 
