---
title: 'Gerenciar inventário'
id: tutorials_139
status: PUBLISHED
createdAt: 2017-04-27T22:17:21.085Z
updatedAt: 2023-03-31T00:44:36.047Z
publishedAt: 2023-03-31T00:44:36.047Z
firstPublishedAt: 2017-04-27T23:00:44.889Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slug: gerenciar-itens-em-estoque
locale: pt
legacySlug: gerenciar-itens-em-estoque
subcategory: 3PQwnyOcNyYgawy06oe6gE
---

Na VTEX, o inventário é a relação entre os itens de venda de uma loja e os locais onde esses itens estão armazenados. Acesse o Admin VTEX e clique em **Catálogo > Estoque > Gerenciamento de inventário** para visualizar os SKUs cadastrados no [catálogo](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3rA2tTpIoEXdv2nzC27zxR) e seus respectivos [estoques](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb). 

Outras ações possíveis na página **Gerenciamento de inventário** são:

* [Acompanhar o histórico de movimentações do inventário](https://help.vtex.com/pt/tutorial/como-analisar-o-historico-de-movimentacoes-do-estoque--5AM7xbmMzmKSEQewakamc2).
* Conferir se os SKUs têm [unidades reservadas](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92#como-acompanhar-o-status-da-reserva).
* [Atualizar a quantidade de SKUs que estão disponíveis para venda](https://help.vtex.com/pt/tutorial/atualizar-quantidade-de-skus-em-estoque--IKMWjOjMcMqKusSGko8c0). 

<div class="alert alert-info"> 
Lembre-se de que <b>estoque</b> é a identificação dos locais físicos de armazenamento de produtos da loja, e <b>inventário</b> é a relação dos estoques com os SKUs disponíveis para venda.
</div>

Esse artigo contém as informações do inventário no Admin VTEX utilizando a seção `Gerenciamento de inventário`. Entenda como:

* [As informações do inventário estão divididas](#informacoes-do-inventario).
* [Os filtros de busca estão dispostos para facilitar a procura de SKUs específicos.](#filtros-de-busca).

<div class="alert alert-info"> 
Para acessar o inventário utilizando SKUs, docas ou estoques via API, utilize a <a href="https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-"> Inventory API </a>.
</div>

## Informações do inventário

No Admin VTEX, acesse **Catálogo > Estoque > Gerenciamento de inventário**, ou digite **Gerenciamento de inventário** na barra de busca no topo da página.

Uma tabela ficará disponível com os SKUs e seus respectivos estoques. A tabela está organizada da seguinte forma:

* **Linhas**: cada linha contém as informações de um SKU e de um estoque. Assim, é possível conferir os detalhes de cada SKU por estoque. 
* **Colunas**: identificam diferentes aspectos do SKU em um estoque e estão dividas em:
    * **Produtos:** o nome do produto.
    * **Estoque**: em qual estoque da loja o SKU está.
    * **ID do SKU:** código identificador do SKU.
    * **Última atualização**: número de unidades do SKU mais recente registrado na plataforma VTEX. <p>É possível clicar nos valores desse campo para conferir o **Registro de atualizações**, com informações sobre os usuários que atualizaram esse campo, as datas em que ocorreram as alterações, e as quantidades antes e depois das atualizações</p>
    * **Reservados:** unidades de itens do SKU reservados. Os pedidos dessas reservas ainda não estão com o pagamento aprovado. 
    Ao clicar nos valores dessa coluna para conferir detalhes sobre os dados das reservas do SKU,  você será redirecionado para o gerenciamento de pedidos. Para saber mais sobre como consultar uma reserva, veja [Como acompanhar o status da reserva](https://help.vtex.com/pt/tutorial/how-does-reservation-work--tutorials_92#como-acompanhar-o-status-da-reserva)
    * **Enviados:** unidades despachadas do SKU. Os itens desta coluna são de pedidos com status `Pagamento aprovado`, `Preparando entrega` ou `Faturado`. <p>Ao clicar nos itens da coluna para conferir detalhes de SKUs enviados, você será redirecionado para o gerenciamento de pedidos.</p>
    * **Disponíveis:** unidades do SKU disponíveis para venda.
    * **Atualizar contagem:** campo para atualização manual da quantidade disponível de itens do SKU. Para saber mais sobre como atualizar a contagem, confira o artigo [Atualizar quantidade de SKUs em estoque](https://help.vtex.com/pt/tutorial/atualizar-quantidade-de-skus-em-estoque--IKMWjOjMcMqKusSGko8c0)
    * **Estoque infinito:** permite registrar unidades infinitas do SKU, fazendo com que ele esteja sempre disponível para o checkout da sua loja. Isso descarta a necessidade de atualização da contagem desse SKU.

<div class="alert alert-warning">
Para garantir que os itens adicionados ao estoque fiquem disponíveis para venda na loja, o ID dos SKUs não deve conter o número zero à esquerda. O sistema não reconhece, por exemplo, IDs no formato <code>01, 02, 021,</code> pois é esperado o formato<code> 1, 2, 21</code>.
</div>

### Filtros de busca

EM **Gerenciamento de inventário**, você pode pesquisar SKUs na barra de busca e também utilizar filtros de busca.

Para realizar uma busca pela barra, basta digitar o nome ou o ID do SKU e clicar na lupa <i class="fa-solid fa-magnifying-glass"></i>. Para utilizar os filtros, veja os filtros disponíveis:

*   **Última atualização:** retorna a quantidade atualizada de itens em estoque. É possível inserir um valor `Maior que, ou igual a`, `Menor que, ou igual a` ou `Entre` uma faixa de itens. Quando nenhum valor é inserido, `Todos` os itens são mostrados na tabela.

*   **Reservados:** retorna a quantidade de itens reservados em estoque. É possível inserir um valor `Maior que, ou igual a`, `Menor que, ou igual a` ou `Entre` uma faixa de itens. Quando nenhum valor é inserido, `Todos` os itens são mostrados na tabela.

*   **Disponível:** retorna a quantidade de itens disponíveis em estoque. É possível inserir um valor `Maior que, ou igual a`, `Menor que, ou igual a` ou `Entre` uma faixa de itens. Quando nenhum valor é inserido, `Todos` os itens são mostrados na tabela.

*   **Estoque:** selecione um ou mais estoques desejados para retornar todos os itens presentes.

<div class="alert alert-danger">
A lista do inventário é limitada em até dez mil linhas. Isso significa que, mesmo que um SKU não esteja disponível na lista, ele pode ser encontrado ou acessado utilizando os filtros. O limite de linhas para o inventário melhorar a performance das consultas. Para acessar um SKU que não está disponível na página, busque ou utilize os filtros para maior precisão na busca.
</div>

## Artigos relacionados

* [Atualização da quantidade de itens em estoque](https://help.vtex.com/pt/tutorial/como-atualizar-estoque--2MDwYV1COA6YuoiY22AyGo)
* [Como a reserva funciona](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92)
* [SKU com unidades positivas no inventário, mas indisponível para venda](https://help.vtex.com/pt/faq/sku-com-unidades-positivas-no-inventario-mas-indisponivel-para-venda--6HIEgJSYM8S05IyWHnIcOn)
* [Por que meu estoque está negativo?](https://help.vtex.com/pt/faq/por-que-meu-estoque-esta-negativo--frequentlyAskedQuestions_159)
