---
title: 'Configurar Estoque Futuro (Beta)'
id: UMSGjooqRfkRbeoh94kS4
status: DRAFT
createdAt: 2020-09-21T21:53:10.713Z
updatedAt: 2022-04-06T17:28:53.703Z
publishedAt: 
firstPublishedAt: 2020-09-21T22:32:34.864Z
contentType: tutorial
productTeam: Post-purchase
author: authors_24
slug: configurar-estoque-futuro
legacySlug: configurar-estoque-futuro
subcategory: 32vrn4K2ZscjUaIBe6w5fm
---

<div class="alert alert-info">
<p>Essa funcionalidade está em fase closed Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href="https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

Para algumas operações de e-commerce, é útil ter a capacidade de vender um item que não esteja disponível para pronta entrega, mas que tenha data prevista de chegada ao estoque. A feature de __Estoque Futuro__ permite exatamente isso.

## Como funciona o Estoque Futuro

<div class="alert alert-warning">
Atualmente a configuração de Estoque Futuro está disponível somente <a target="_blank" href="https://developers.vtex.com/reference/inventory#savesupplylot">via API</a>.
</div>

A API de Estoque Futuro permite cadastrar um __Lote de Abastecimento__. Esse lote representa o estoque futuro e carrega duas informações principais:
- Quantidade de itens.
- Data de chegada dos itens ao estoque.

Ao receber um request com essas informações, a API registra a disponibilidade futura dos itens. Ainda que eles não estejam atualmente disponíveis no estoque, o checkout passa a mostrar esses itens como disponíveis.

Neste caso, compras desses SKUs irão consumir os itens disponíveis no lote de abastecimento. E quando o frete for calculado usando esses itens do lote de abastecimento, o prazo para recebimento do lote será acrescido ao tempo final de entrega.

>Tempo final de entrega = SLA de entrega + prazo de recebimento do lote de abastecimento

<div class="alert alert-info">
Caso a data do recebimento seja anterior à data do cálculo do frete, o tempo adicional será 0 (zero), já que - neste caso - o lote de abastecimento já foi recebido.</div>

Veja a documentação do endpoint usado para salvar um Estoque Futuro:
[Save Supply Lot](https://developers.vtex.com/reference/inventory#savesupplylot)

## Consultar estoques futuros

Para consultar os estoques futuros de um determinado SKU, você pode usar o endpoint [Get Supply Lots](https://developers.vtex.com/reference/inventory#getsupplylots). A resposta a essa requisição mostra a lista de estoques futuros de um SKU em um estoque específico.

## Restrições e cuidados

Ao usar a API de Estoque Futuro, fique atento às seguintes restrições:

- Permitiremos o cadastro de até 10 lotes de entrega de um item por estoque. Lotes com data de abastecimento vencida - ou seja, anterior à data atual - continuam sendo considerados no limite de 10 lotes.
- A ordem de consumo do inventário é: primeiro as unidades à pronta entrega e depois os lotes ordenados por data de abastecimento.

## Transferência para pronta entrega

É possível transferir inventário de um lote de abastecimento para o estoque de pronta entrega. Essa transferência faz com que os itens passem a ser considerados imediatamente disponíveis. Com isso, deixa de haver adição de prazo ao tempo de entrega para eles.

<div class="alert alert-info">
A transferência para pronta entrega libera espaço para o cadastro de um novo lote. Ou seja, se sua loja tem 10 lotes cadastrados (limite permitido) e transfere 2 deles para pronta entrega, você passa a ter 8 lotes cadastrados e dois espaços disponíveis.
</div>

Veja a documentação do endpoint usado para transferir um Estoque Futuro para pronta entrega:
[Transfer Supply Lot](https://developers.vtex.com/reference/inventory#transfersupplylot)

## Vencimento do prazo de abastecimento

Por meio da API, é possível definir se um lote deve continuar a ser utilizado caso vença o prazo de abastecimento e não seja realizada a transferência para o estoque de pronta entrega.

Essa configuração é feita por meio do campo `keepSellingAfterExpiration`. Se o valor for `true`, o lote continuará sendo usado. Se for `false`, ele deixará de ser usado.
