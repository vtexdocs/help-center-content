---
title: 'Gerenciar inventário'
id: tutorials_139
status: PUBLISHED
createdAt: 2017-04-27T22:17:21.085Z
updatedAt: 2024-11-04T21:16:13.814Z
publishedAt: 2024-11-04T21:16:13.814Z
firstPublishedAt: 2017-04-27T23:00:44.889Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: managing-stock-items
legacySlug: gerenciar-itens-em-estoque
locale: pt
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

Na VTEX, [estoque](/pt/docs/tutorials/estoque) é a identificação dos locais físicos de armazenamento de produtos da loja, e inventário é a relação dos estoques com os SKUs disponíveis para venda. Para visualizar os SKUs cadastrados no seu [catálogo](/pt/docs/tracks/catalogo-definicao-de-conceito) e respectivos estoques, acesse o Admin VTEX em **Catálogo > Inventário > Gerenciamento de inventário**.

Este artigo contém informações sobre a página **Gerenciamento de inventário**. Aprenda como:

* [As informações do inventário estão divididas](#informacoes-do-inventario).
* [Os filtros de busca estão dispostos para facilitar a procura de SKUs específicos](#filtros-de-busca).

> ℹ️ Para acessar o inventário utilizando SKUs, docas ou estoques via API, utilize a [ Inventory API ](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

Outras ações possíveis na página **Gerenciamento de inventário** são:

* [Acompanhar o histórico de movimentações do inventário](/pt/docs/tutorials/historico-de-movimentacoes-do-inventario).
* Conferir se os SKUs têm [unidades reservadas](/pt/docs/tutorials/como-a-reserva-funciona#como-acompanhar-o-status-da-reserva).
* [Atualizar a quantidade de SKUs que estão disponíveis para venda](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque). 

## Informações do inventário

No Admin VTEX, acesse **Catálogo > Inventário > Gerenciamento de inventário**, ou digite **Gerenciamento de inventário** na barra de busca no topo da página. Uma tabela ficará disponível com os SKUs e seus respectivos estoques. A tabela está organizada da seguinte forma:

* **Linhas**: cada linha contém as informações de um SKU e de um estoque. Assim, é possível conferir os detalhes de cada SKU por estoque. 
* **Colunas**: identificam diferentes aspectos do SKU em um estoque e estão dividas em:
    * **Produtos:** o nome do produto.
    * **Estoque**: em qual estoque da loja o SKU está.
    * **ID do SKU:** código identificador do SKU.
    * **Última atualização**: número de unidades do SKU mais recente registrado na plataforma VTEX.> ℹ️ Ao clicar em qualquer valor da coluna **Última atualização**, a janela [Registro de atualizações](/pt/docs/tutorials/historico-de-movimentacoes-do-inventario) ficará disponível com a tabela das alterações. Cada linha corresponde a um registro de atualização, e as colunas contêm o usuário que realizou a alteração, a data da atualização e a quantidade de itens antes e depois da atualização. Só é possível consultar até as últimas 50 movimentações de um SKU.
    * **Reservados:** unidades de itens do SKU reservados. Os pedidos dessas reservas ainda não estão com o pagamento aprovado. 
    Ao clicar nos valores dessa coluna para conferir detalhes sobre os dados das reservas do SKU,  você será redirecionado para o gerenciamento de pedidos. Para saber mais sobre como consultar uma reserva, veja [Como acompanhar o status da reserva](/pt/docs/tutorials/como-a-reserva-funciona#como-acompanhar-o-status-da-reserva)
    * **Enviados:** unidades despachadas do SKU. Os itens desta coluna são de pedidos com status `Pagamento aprovado`, `Preparando entrega` ou `Faturado`. Ao clicar nos itens da coluna para conferir detalhes de SKUs enviados, você será redirecionado para o gerenciamento de pedidos.
    * **Disponíveis:** unidades do SKU disponíveis para venda.
    * **Atualizar contagem:** campo para atualização manual da quantidade disponível de itens do SKU. Para saber mais sobre como atualizar a contagem, confira o artigo [Atualizar quantidade de SKUs em estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque)
    * **Estoque infinito:** permite registrar unidades infinitas do SKU, fazendo com que ele esteja sempre disponível para o checkout da sua loja. Isso descarta a necessidade de atualização da contagem desse SKU.
    * **Lead time (dias):** configuração opcional do tempo de envio a nível de SKU. Defina um tempo para o SKU de um estoque e ele será considerado no [cálculo](/pt/docs/tutorials/como-funciona-o-calculo-de-envio) do tempo de envio do pedido. Por padrão, o [lead time](/pt/docs/tutorials/lead-time-tempo-de-envio-a-nivel-de-sku) vem definido como zero dias e sua contagem é feita em dias úteis. Você pode alterar a [contagem para dias corridos](/pt/docs/tutorials/lead-time-tempo-de-envio-a-nivel-de-sku#configurar-a-contagem-do-lead-time-em-dias-do-calendario-opcional) e, se desejar configurar horas, minutos e segundos, pode usar o endpoint [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

> ⚠️ Para garantir que os itens adicionados ao estoque fiquem disponíveis para venda na loja, o ID dos SKUs não deve conter o número zero à esquerda. O sistema não reconhece, por exemplo, IDs no formato `01, 02, 021,` pois é esperado o formato` 1, 2, 21`.

A quantidade total de itens na página **Gerenciamento de inventário** é atualizada em tempo real, mas pode haver um atraso de até 1 hora para a informação aparecer no [registro de atualizações](/pt/docs/tutorials/historico-de-movimentacoes-do-inventario).

### Filtros de busca

Na **Gerenciamento de inventário**, para realizar uma busca pela barra, basta digitar o nome ou o ID do SKU e clicar na lupa <i class="fa-solid fa-magnifying-glass"></i>. Para utilizar os filtros, veja os filtros disponíveis:

*   **Última atualização:** retorna a quantidade atualizada de itens em estoque. É possível inserir um valor `Maior que, ou igual a`, `Menor que, ou igual a` ou `Entre` uma faixa de itens. Quando nenhum valor é inserido, `Todos` os itens são mostrados na tabela.

*   **Reservados:** retorna a quantidade de itens reservados em estoque. É possível inserir um valor `Maior que, ou igual a`, `Menor que, ou igual a` ou `Entre` uma faixa de itens. Quando nenhum valor é inserido, `Todos` os itens são mostrados na tabela.

*   **Disponível:** retorna a quantidade de itens disponíveis em estoque. É possível inserir um valor `Maior que, ou igual a`, `Menor que, ou igual a` ou `Entre` uma faixa de itens. Quando nenhum valor é inserido, `Todos` os itens são mostrados na tabela.

*   **Estoque:** selecione um ou mais estoques desejados para retornar todos os itens presentes.

> ❗ A lista do inventário é limitada em até dez mil linhas. Isso significa que, mesmo que um SKU não esteja disponível na lista, ele pode ser encontrado ou acessado utilizando os filtros. O limite de linhas para o inventário melhorar a performance das consultas. Para acessar um SKU que não está disponível na página, busque ou utilize os filtros para maior precisão na busca.

## Artigos relacionados

* [Atualização da quantidade de itens em estoque](/pt/docs/tutorials/atualizacao-da-quantidade-de-itens-em-estoque)
* [Como a reserva funciona](/pt/docs/tutorials/como-a-reserva-funciona)
* [SKU com unidades positivas no inventário, mas indisponível para venda](/pt/faq/sku-com-unidades-positivas-no-inventario-mas-indisponivel-para-venda)
* [Por que meu estoque está negativo?](/pt/troubleshooting/meu-estoque-esta-negativo)
