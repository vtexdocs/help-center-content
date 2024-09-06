---
title: 'Configurar o subadquirente MoipV2'
id: 4BipUcTxQ7cq2BiYzUDmEH
status: ARCHIVED
createdAt: 2021-12-03T16:57:26.876Z
updatedAt: 2022-12-23T20:35:19.599Z
publishedAt: 
firstPublishedAt: 2021-12-14T14:39:34.847Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-o-subadquirente-moipv2
locale: pt
legacySlug: configurar-o-subadquirente-moipv2
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O MoipV2 é um [subadquirente](/pt/tutorial/o-que-e-um-subadquirente) que oferece uma integração única para conectar sua loja a todas as partes envolvidas no fluxo de pagamento oferecendo proteção contra fraudes e uma solução de [checkout transparente](/pt/tutorial/o-que-e-checkout-transparente) (sem redirecionamentos). Além dos recursos do conector Moip, o MoipV2 permite o [Split de pagamentos](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx?&utm_source=autocomplete#).

## Configurar afiliação de gateway MoipV2

Para configurar o MoipV2, siga os passos abaixo:

1. Acesse o __Admin__ VTEX.
2. Em __Pagamentos__, clique em __Configurações__.
3. Na aba __Afiliações de Gateways__, clique no botão __+__.
4. Clique no conector __MoipV2__.
5. Em __Click to authorize VTEX to make payments__, clique em __Autorizar__. Neste momento, você será redirecionado para a página do Moip, onde deverá acessar a sua conta Moip e autorizar a conexão da VTEX.
6. Após a autorização, você retornará automaticamente para o Admin da VTEX, e os campos __Application Key__, __Application Token__, __Application Id__ já estarão preenchidos.
7. Clique em __Salvar__.

## Configurar condição de pagamento

Ao finalizar todos os passos indicados, o MoipV2 estará configurado na sua loja. Dessa forma, ao cadastrar uma condição de pagamento, ele estará disponível no campo __Processar com a afiliação__ (desde que o meio de pagamento seja compatível com o MoipV2). 

Para saber como definir condições de pagamento, acesse a documentação [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

