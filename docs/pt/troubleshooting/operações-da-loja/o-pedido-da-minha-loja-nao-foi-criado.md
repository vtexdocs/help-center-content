---
title: 'O pedido da minha loja não foi criado'
id: 7xQZqkMHXkHCEEZl5UlX8I
status: PUBLISHED
createdAt: 2024-07-18T20:10:20.933Z
updatedAt: 2024-11-08T18:57:41.671Z
publishedAt: 2024-11-08T18:57:41.671Z
firstPublishedAt: 2024-07-18T20:56:20.706Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: my-store-order-was-not-created
legacySlug: o-pedido-da-minha-loja-nao-foi-criado
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Pedidos
  - Integração
  - Integração XML
  - Produto
  - Estoque
---

Quando um cliente tenta realizar uma compra e ocorre um erro na criação do pedido, isso pode acontecer por diferentes razões, como problemas de pagamento, de logística ou de [integração do backend](https://help.vtex.com/pt/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/7euXDZR5CCnVFSrXyczIhu) com ERPs (Enterprise Resource Planning). 

Antes de considerar motivos complexos para erros com pedidos não criados, aplique os processos de resolução de problemas (troubleshooting) apresentados neste artigo. Alguns dos cenários de erro mais comuns são:

* O item não tinha [estoque](https://help.vtex.com/pt/tutorial/inventory-management--tutorials_139) disponível e a loja não estava configurada para vender produtos sem estoque. 
* A integração XML não foi configurada para enviar informações sobre produtos sem estoque.

## Soluções

Considere os seguintes processos de resolução de problemas para erros na criação de pedidos:

* [Gerenciar inventário](#gerenciar-inventario): se o produto não constar no inventário e a loja não estiver configurada para vender produtos sem estoque.
* [Revisar integração XML](#revisar-integracao-xml): se a sua integração XML não estiver configurada para enviar informações sobre produtos sem estoque. 

### Gerenciar inventário

Há duas formas de gerenciar seu inventário:

* **Via API:** utilizando o endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).
* **Via Admin VTEX:** acessando _Catálogo > Inventário > Gerenciamento de inventário_.

As soluções abaixo são voltadas para o gerenciamento de inventário via Admin VTEX:

* **Atualizar a contagem do inventário:** na linha correspondente ao SKU e estoque desejados, digite o número de itens disponíveis para venda na coluna Atualizar contagem e clique em `Salvar`. Este número não pode ser negativo, caso contrário o [estoque será negativo](https://help.vtex.com/pt/faq/why-is-my-stock-negative--frequentlyAskedQuestions_159).
* **Configurar o estoque infinito:** na linha correspondente ao SKU e estoque desejados, na coluna Estoque infinito, clique no botão de ativação e depois em `Salvar`. Quando essa configuração é ativada, o item passa a ser considerado sempre disponível para vendas e a loja nunca fica sem estoque dele.

> ℹ️ Para configurar os produtos sem estoque a serem exibidos no seu storefront, acesse **Catálogo > Todos os produtos** no Admin VTEX e, na página de configuração do produto, na aba **Produto**, marque a opção **Sim** no campo *Mostrar produto esgotado*.

### Revisar integração XML

O XML é uma linguagem de marcação que define e armazena dados de forma partilhável. Se a [integração XML da sua loja](https://help.vtex.com/pt/tutorial/configurando-xml--tutorials_242) não estiver definida para determinadas configurações, pode ser que não seja possível exportar as informações do produto. 

Quando o produto não tem estoque e a integração não está configurada para enviar produtos sem estoque, pode ocorrer um erro com a falta de informações do produto. Para ativar a configuração, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Canais > Integração XML** ou digite **Integração XML** na barra de busca na parte superior da página.
2. Na linha da integração XML desejada, clique em `Editar`.
3. Na aba `Editar XML`, na opção **Exibir SKUs indisponíveis**, marque a caixa de seleção `Exibir SKUs fora de estoque (esgotados) entre os resultados`.
4. Clique em `Salvar`. 

> ⚠️ Podem ocorrer erros ao tentar faturar um pedido com informações XML incorretas ou faltantes.

