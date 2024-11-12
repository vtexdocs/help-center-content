---
title: 'Como usar a classe de produto indisponível do controle de seleção de SKUs'
id: 62t7maHVvyAsqkSmi62g82
status: PUBLISHED
createdAt: 2018-01-18T18:10:19.780Z
updatedAt: 2023-03-29T01:05:52.326Z
publishedAt: 2023-03-29T01:05:52.326Z
firstPublishedAt: 2018-01-22T12:58:23.819Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-use-the-unavailable-product-class
locale: pt
legacySlug: como-usar-a-classe-de-produto-indisponivel
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

## O que é a classe de produto indisponível

O controle de seleção de SKUs (`<vtex.cmc:skuSelection />`) permite que o usuário da loja selecione um dos SKUs de um produto. Geralmente é aplicado no carrinho, para que o cliente da loja escolha, por exemplo, uma camisa entre as opções de tamanho P, M ou G; uma geladeira de 110v ou 220v; ou um teclado branco ou preto.

Ou seja, dada uma especificação do SKU (tamanho, voltagem, cor etc.), o seletor de SKU exibe as opções de valores disponíveis para escolha do usuário da loja.

__Caso um SKU com determinada especificação não esteja disponível em estoque, a loja pode informar essa indisponibilidade visualmente.__

No exemplo abaixo, os tamanhos P e G do produto não estão disponíveis.

![classeIndisponivel](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

## Incluir a classe de produto indisponível

Quando o controle de seleção de SKUs (`<vtex.cmc:skuSelection />`) é incluído em uma página de produto, a classe de produto indisponível passa a ser automaticamente adicionada sempre que um SKU estiver indisponível.

Por exemplo: um cliente da sua loja entrou na página do produto Calça Jeans, e para esse produto estão disponíveis em estoque os SKUs com especificações de tamanho 38 e 40, mas não o de tamanho 42.

Se o template da sua página de produto atualmente ativa tem o controle de seleção de SKUs, o SKU com especificação de tamanho 42 receberá automaticamente a classe de indisponibilidade.

Você pode customizar seu arquivo CSS para que essa classe exiba, por exemplo, o número cortado, ou cinza, ou como você desejar. 

## Determinar a qual especificação será atribuída a classe

>⚠️ A classe de produto indisponível apenas é atribuída à especificação que aparece **por último** na lista de especificações do SKU, no módulo Catalog.

Por exemplo, se a especificação `Tamanho` aparecer por último, ela receberá a classe de indisponibilidade.

Se, neste caso, você desejasse que - em vez dela - a especificação `Faixa` recebesse a classe, bastaria inverter a ordem das especificações.
