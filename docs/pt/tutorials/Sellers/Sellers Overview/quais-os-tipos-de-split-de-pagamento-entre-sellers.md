---
title: 'Quais são os tipos de split de pagamento?'
id: frequentlyAskedQuestions_5174
status: ARCHIVED
createdAt: 2019-01-24T20:46:02.419Z
updatedAt: 2021-09-09T21:57:07.118Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:12:12.544Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: what-types-of-payment-split-are-there
locale: pt
legacySlug: quais-os-tipos-de-split-de-pagamento-entre-sellers
subcategoryId: 5tlIjp0ZkAU4EIk4OgyEmm
---

Neste artigo, explicamos os tipos de split de pagamento entre sellers na VTEX. Há três cenários possíveis:

## Modelo Convencional com marketplace responsável pelo pagamento

Num cenário em que o marketplace é o responsável pelo pagamento, nenhum split é realizado. Os pagamentos são realizados diretamente para o gateway do marketplace, que tem a responsabilidade de repassar os valores devidos a cada um dos sellers envolvidos na transação.

## Modelo Split com Sellers responsáveis pelo pagamento

Num cenário em que os sellers são responsáveis pelo pagamento, dois casos podem ocorrer:

- No primeiro, temos produtos de apenas um seller no carrinho. Com isso, os pagamentos são realizados diretamente para o gateway do seller, que tem a responsabilidade de repassar os valores devidos ao seu marketplace.
- No segundo, temos produtos de diferentes sellers no carrinho. Quando isto ocorre, o checkout realiza o split dos pagamentos para os respectivos sellers. Caso os sellers possuam condições de pagamento diferentes entre si, serão exibidas no Checkout as condições de pagamento que existam em comum entre ambos.

## Modelo Split Híbrido: Convencional + Split

Combina as duas modalidades expostas acima. Neste modelo, parte do pagamento fica no marketplace e a outra parte é enviada diretamente aos sellers. 

Esta modalidade ocorre quando é utilizado um vale do marketplace como meio de pagamento e quando temos apenas um seller no carrinho. 

Para que isto ocorra, é necessário que o marketplace preencha a opção "Desejo incluir minhas formas de pagamento" no momento do cadastro do seller no admin da VTEX. Para configurar esta feature, o lojista deve:

1. Acesse o __Admin__ VTEX
2. Clique no módulo __Marketplace__
3. Clique em __Gerenciamento__
4. Para alterar a configuração de um seller já existente, clique em **Alterar/Visualizar**. Se for criar um novo seller, basta clicar no botão **Novo Seller**.
5. Selecione a opção **Desejo incluir minhas formas de pagamento**.
