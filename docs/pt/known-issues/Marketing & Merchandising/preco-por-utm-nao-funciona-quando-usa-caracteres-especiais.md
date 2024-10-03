---
title: 'Preço por UTM não funciona quando se usam caracteres especiais'
id: 5vQnjYgbE48426q2e6GMUY
status: PUBLISHED
createdAt: 2017-06-05T12:24:57.621Z
updatedAt: 2022-12-22T15:17:56.083Z
publishedAt: 2022-12-22T15:17:56.083Z
firstPublishedAt: 2017-06-05T12:32:16.311Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Catalog,Pricing & Promotions
slugEN: price-by-utm-doesnt-work-when-using-special-characters
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

A possibilidade de criar diferentes preços é uma feature muito usada na VTEX. É um recurso ótimo para praticar diferentes valores de acordo com o parceiro comercial de sua loja, como, por exemplo, associar um valor de um produto ser exibido no Buscapé.

Preço normal: 549,00 
Preço UTM Buscapé: 449,00

Contudo, ao usar caracteres especiais no momento de cadastrar a **utm\_campaign**, a plataforma não reconhece o termo e o valor não é aplicado.

## Simulação

1. Criar uma nova entrada na Tabela de Valores
2. Associar o novo valor a uma UTM e no valor da **utm\_campaign** usar um caractere especial, por exemplo: `bp+`
3. Salvar

## Workaround

Basta remover qualquer caracter especial do campo UTM

