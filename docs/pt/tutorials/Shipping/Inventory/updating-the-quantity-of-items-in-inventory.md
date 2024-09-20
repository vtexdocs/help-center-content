---
title: 'Atualização da quantidade de itens em estoque'
id: 2MDwYV1COA6YuoiY22AyGo
status: PUBLISHED
createdAt: 2017-08-01T14:43:39.074Z
updatedAt: 2023-03-31T00:56:34.367Z
publishedAt: 2023-03-31T00:56:34.367Z
firstPublishedAt: 2017-08-01T15:02:40.977Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: atualizacao-da-quantidade-de-itens-em-estoque
locale: pt
legacySlug: como-atualizar-estoque, atualizar-quantidade-de-skus-em-estoque
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

A atualização de itens em [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) ocorre quando a loja altera, para mais ou para menos, a  quantidade de unidades de um SKU. Essa atualização ocorre por meio do **[Inventário ](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139)** na plataforma VTEX.

Há três formas de realizar a atualização de itens em estoque:

* **Via API:** utilizando o endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).
* **Via Admin, por planilha:** utilizando a planilha de estoque gerada pela plataforma VTEX, através da exportação e importação da planilha atualizada. Essa opção possibilita a atualização massiva de dados. Saiba mais em [Importar e exportar planilha de estoque](https://help.vtex.com/pt/tutorial/importando-e-exportando-planilha-de-estoque--tutorials_2034).
* **Via Admin, manualmente:** atualizando de forma manual um SKU por vez, conforme as orientações a seguir.

É importante ressaltar que a atualização do estoque ocorre caso exista alguma diferença na nova quantidade de itens. Para que haja uma alteração do estoque, tanto via Admin VTEX ou via API, a quantidade de itens após a modificação deve ser diferente da quantidade de itens disponíveis no momento. A plataforma também aceita a atualização quando o inventário tem uma [reserva reconhecida,](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-reconhecida) mesmo quando a quantidade de itens disponíveis é igual à da atualização.

Para realizar a atualização de itens em estoque de forma manual pelo Admin, siga os passos abaixo.

1. No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário**, ou digite *Gerenciamento de inventário* na barra de busca no topo da página.  
2. Busque por um produto na barra de busca ou combine filtros para encontrar os itens desejados. Saiba mais sobre como utilizar os filtros em [Gerenciar inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139#filtros).  
3. Insira a quantidade atualizada no campo `Atualizar contagem`.   
4. Uma prévia da atualização ficará disponível. Confira a contagem.   
5. Clique no botão `Salvar`.

Para que os SKUs fiquem disponíveis, inclua as unidades disponíveis de cada SKU para cada estoque correspondente. Além disso, a atualização deve corresponder à quantidade de itens disponíveis no seu estoque. Assim você garante que os SKUs disponíveis na sua loja estão realmente disponíveis para envio. 

Um pedido pode ter uma reserva ativa de SKU. Caso o produto não tenha sido despachado, será considerado apenas como **item reservado**. [Entenda mais sobre pedidos faturados e reservas](https://help.vtex.com/pt/faq/por-que-meu-pedido-foi-faturado-e-o-produto-continua-reservado). Os pedidos com SKUs reservados continuarão listados como reservados e a sua venda continuará indisponível. [Entenda como funcionam as reservas](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona/).

## Estoque negativo

Pode ser que exista um número negativo de unidades de SKUs no inventário. Se houver um número negativo na coluna **Disponível** da página **Gerenciamento de inventário**, isso significa que o estoque do item está negativo, ou seja, existem mais itens reservados do que a quantidade total inserida no inventário.

_Unidades disponíveis = unidades da última atualização - unidades reservadas_

O estoque negativo normalmente ocorre quando há atualização na quantidade de itens de um SKU de um pedido em que os produtos já estavam reservados no inventário. Para evitar essa situação, é importante que a atualização da quantidade de SKUs ocorra com pedidos com status posterior a `Preparando entrega`. Dessa forma, a [reserva já terá sido reconhecida](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona/#reserva-reconhecida) e não haverá conflito entre os itens do inventário com os itens que de fato estão disponíveis para venda.

![gerenciar inventario](//images.ctfassets.net/alneenqid6w5/384hm6LEhpNrvqGITDwzZ1/9ce03695fdd2173d9fa079ab2887eb68/gerenciar_inventario.gif)

## Artigos relacionados

* [Gerenciar inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139)
* [Como a reserva funciona](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92)
