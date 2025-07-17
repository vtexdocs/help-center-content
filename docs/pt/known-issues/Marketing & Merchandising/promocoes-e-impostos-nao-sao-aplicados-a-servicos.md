---
title: "Promoções e impostos não são aplicados a serviços"
id: 4u12zyfc387daNQamFohA2
status: PUBLISHED
createdAt: 2019-02-15T18:52:59.074Z
updatedAt: 2019-12-31T15:17:43.910Z
publishedAt: 2019-12-31T15:17:43.910Z
firstPublishedAt: 2019-02-15T18:55:22.623Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_4
tag: Checkout
slugEN: promocoes-e-impostos-nao-sao-aplicados-a-servicos
locale: pt
kiStatus: Closed
internalReference: 
---

## Sumário

Ao incluir um serviço em um item do carrinho, promoções e impostos não são aplicadas, mantendo o serviço sempre com o seu preço original.

## Simulação

1. Cadastrar uma promoção e/ou imposto sem nenhuma condição específica, para ter ampla aplicação na loja;
2. Inserir um produto com serviço no carrinho;
3. Notar que o preço do produto será modificado mas o preço do serviço se manterá o mesmo.

## Workaround

Este cenário é uma limitação da arquitetura de serviços disponível hoje, sendo assim o ideal é que estes produtos sejam SKUs normais.

Através de implementações de front-end no checkout é possível verificar quais são os produtos que foram inseridos no carrinho e ofertar serviços específicos que, por sua vez, irão inserir tais SKUs que correspondem ao serviço.

