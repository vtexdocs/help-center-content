---
title: 'Cadastrar condição comercial'
id: tutorials_445
status: PUBLISHED
createdAt: 2017-04-27T22:05:10.617Z
updatedAt: 2023-03-23T20:05:31.411Z
publishedAt: 2023-03-23T20:05:31.411Z
firstPublishedAt: 2017-04-27T23:03:25.137Z
contentType: tutorial
productTeam: Others
author: authors_84
slug: como-cadastrar-condicao-comercial
legacySlug: como-cadastrar-condicao-comercial
subcategory: 6312YEqn0AGYCsOOESSIQM
---

A condição comercial é um agrupador de SKUs que servirá para criar cenários diferentes de pagamento.

A configuração da condição comercial é realizada em três partes: 

1. Criar condição comercial.
2. Associar SKU.
3. Associar condição de pagamento.

## Criar condição comercial

1. No Admin VTEX, acesse __Configurações da Loja__.
2. Em __Produtos__, clique em __Condições comerciais__.
5. Clique no botão `Nova condição comercial`.
6. No campo __Nome__, digite o nome da condição comercial a ser criada.
7. Defina se essa condição será padrão através da seleção do campo __Default__.
8. Clique no botão `Salvar`.

Se a condição comercial for definida como padrão, os novos produtos que forem cadastrados na loja estarão com essa condição pré-selecionada.

## Associar SKU

1. No Admin VTEX, acesse o __Catálogo__.
2. Clique em __Produtos e SKUs__.
3. Busque o SKU com o qual você deseja fazer a associação e clique nele.
4. Ao editar o SKU, selecione a condição comercial desejada no campo __Código condição comercial__, 
7. Clique no botão `Salvar`.

## Associar condição de pagamento

1. No Admin VTEX, acesse __Configurações da Loja__.
2. Em __Pagamentos__, clique em __Configurações__.
3. Clique na aba __Condições de pagamento__.
4. Clique na condição de pagamento que deseja incluir a condição comercial.
5. Clique no botão __Adicionar condição especial__.
6. Selecione a opção __Condição Comercial__.
7. Selecione a condição comercial desejada.
8. Você pode definir um critério para que essa condição de pagamento apareça no checkout. Este critério é o percentual de itens com esta condição comercial incluídos no carrinho. Para isso, basta preencher o campo __Quando o percentual de SKUs dessa condição for maior que__ com o percentual desejado.
9. Clique no botão `Salvar`.
