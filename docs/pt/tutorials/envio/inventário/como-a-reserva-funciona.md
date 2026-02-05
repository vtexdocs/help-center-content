---
title: 'Como a reserva funciona'
id: tutorials_92
status: PUBLISHED
createdAt: 2017-04-27T22:19:56.753Z
updatedAt: 2024-09-03T17:29:38.830Z
publishedAt: 2024-09-03T17:29:38.830Z
firstPublishedAt: 2017-04-27T23:00:42.751Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: how-does-reservation-work
legacySlug: como-a-reserva-funciona, como-analisar-as-reservas-de-um-produto
locale: pt
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

A reserva é uma solução VTEX que impede que um mesmo item seja vendido mais de uma vez. Após a finalização de uma compra, o item comprado é subtraído do inventário disponível e, internamente, passa para o status **Reservado**.

> ℹ️ Na VTEX, Estoque é o local físico onde os itens são armazenados. Para poder identificar de qual estoque os itens serão retirados pelas transportadoras, é preciso cadastrar os estoques na plataforma. Consulte o artigo [Estoque](/pt/docs/tutorials/estoque) para saber mais.  O inventário é a relação dos itens que sua loja possui em estoque. Você pode adicionar e acompanhar os itens disponíveis na sua loja pelo Gerenciamento de Inventário. Consulte o artigo [Gerenciar inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque) para saber mais.

Após ser vendido, um item passa pelos seguintes status no inventário da sua loja:

1. **[Reserva autorizada:](/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-autorizada)** após a finalização da compra.
2. **[Reserva confirmada:](/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-confirmada)** após a aprovação do pagamento.
3. **[Reserva reconhecida:](/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-reconhecida)** quando o status do pedido muda para **Preparando entrega** no módulo **Pedidos**.
4. **[Baixa no estoque:](/pt/tutorial/como-a-reserva-funciona--tutorials_92#baixa-no-estoque)** pedido em transporte para entrega.

É possível acompanhar o status da reserva dos itens pelo Admin VTEX, [como descrito ao final deste artigo.](/pt/tutorial/como-a-reserva-funciona--tutorials_92#como-acompanhar-o-status-da-reserva)

> ⚠️ Produtos inseridos no carrinho não geram reserva ou prioridade. Um item só passa para o status de Reserva autorizada após o cliente finalizar o pedido.

## Reserva autorizada

O item comprado passa a ter o status **Reserva autorizada** no inventário da sua loja após o  cliente finalizar o pedido. Esse status indica internamente que a unidade de estoque está reservada e não pode ser vendida novamente. Nesse estágio, o item ainda não saiu do estoque e o pagamento ainda não foi aprovado.

O item permanece nesse status por um determinado tempo, e caso o pagamento não seja confirmado, volta a ficar disponível para venda. O tempo de validade da reserva é calculado da seguinte forma:

_Tempo de expiração do pagamento + tempo de reserva no estoque_

* **Tempo de expiração do pagamento:** tempo (em dias) definido para a realização do pagamento. No caso do pagamento por [boleto](/pt/tutorial/em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado--frequentlyAskedQuestions_300#prazo-de-validade-do-boleto) ou [promissória](/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ#configurar-promissoria), esse prazo pode ser configurado no módulo **[Pagamentos](/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB)**. Para os demais meios de pagamento, como cartão de crédito e wallet, não é possível configurar um prazo para a expiração do pagamento. O fluxo de pagamento é iniciado logo após o checkout, e a aprovação ou negação dele ocorrerá em diferentes períodos de tempo, conforme o meio de pagamento selecionado.
* **Tempo de reserva no estoque:** é definido automaticamente, seguindo as regras abaixo.
    * **quatro dias corridos:** quando o dia de expiração do pagamento for domingo, segunda ou terça.
    * **cinco dias corridos:** quando o dia de expiração do pagamento for quarta, quinta ou sexta.
    * **seis dias corridos:** quando o dia de expiração do pagamento for sábado.

> ❗ Pedidos incompletos podem ter o tempo de reserva de 11 dias corridos. Para saber mais, confira o artigo [Como funcionam os pedidos incompletos](/pt/tutorial/entendendo-os-pedidos-incompletos).

Para marketplace externo, se a informação do tempo da reserva for enviada pelo campo `lockTTL`, o tempo de reserva não será calculado pela plataforma VTEX, e sim determinado pelo prazo no campo. Isso é feito pela chamada [Place order](https://developers.vtex.com/docs/api-reference/checkout-api#put-/api/checkout/pub/orders).

## Reserva confirmada

O item passa ao status **Reserva confirmada** após a aprovação do pagamento do pedido, o que significa que a reserva não estará mais sujeita ao prazo de validade.

Caso o pedido seja cancelado, a reserva também será, e o item voltará a aparecer como disponível no inventário.

## Reserva reconhecida

O status **Reserva reconhecida** ocorre quando o status do pedido que gerou a reserva muda de **Iniciar Manuseio** para **Preparando Entrega** no módulo **Pedidos** — ou seja, o manuseio deste item já foi iniciado e o item não existe mais no estoque físico. 

A plataforma VTEX não desconta automaticamente os itens do inventário. Os itens vendidos continuarão com o status **Reserva reconhecida** até que o lojista ou o ERP atualizem a [quantidade de itens no inventário](#baixa-no-estoque).

## Baixa no estoque

A baixa no estoque é a atualização da quantidade de itens disponíveis para venda. Essa ação deve ser realizada exclusivamente pelo lojista ou pelo ERP, por meio do [gerenciamento de inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque) ou da [API de atualização do inventário](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

A VTEX não atualiza a quantidade de itens que um SKU possui do histórico de movimentações.

Cuidados com a baixa no estoque:

- Para realizar a baixa no estoque, é necessário atualizar o valor total de itens em seu inventário, sempre se baseando no estoque físico disponível para venda.
- Quando a loja atualiza a quantidade de itens que um SKU possui, as reservas reconhecidas desse SKU são zeradas. 
- No entanto, atente-se ao momento de fazer a atualização do inventário. Pedidos que possuem SKUs reservados, podem ter as reservas desconsideradas se a atualização do inventário for feita depois do manuseio do pedido (depois do pedido passar pelo status `Iniciar manuseio`). Isso ocorre porque a VTEX não controla os itens que a loja assumiu o manuseio. É recomendado que a atualização da quantidade de itens no inventário ocorra após o pedido faturado.

### Exemplo

O inventário de uma loja possui três unidades de um item. Um cliente faz uma compra e, depois do pedido finalizado, uma unidade do item passa para o status de reservado. A partir de então, há dois itens disponíveis e um item reservado. Após a confirmação do pagamento, o status do item passa para **Reserva confirmada**. Depois que o manuseio é iniciado, o pedido tem a **Reserva reconhecida**. 

Quando o lojista ou o ERP atualizarem a quantidade desse item no inventário  retirando a quantidade vendida (atualizando com duas unidades), a plataforma atualiza a quantidade de itens disponíveis, o que pode ser interpretado como uma baixa no estoque. A plataforma, nesse caso, mantém apenas duas unidades do item no inventário e nenhuma unidade reservada.

> ❗ Ao confirmar o início do manuseio, o seller assume a responsabilidade da reserva dos itens do pedido. A partir desse momento, se houver qualquer atualização no inventário, a plataforma VTEX desconsidera a reserva destes SKUs. Portanto, atualize o inventário para SKUs de um dado pedido apenas quando este for faturado. Dessa forma evita-se divergência de inventário dependendo da interação com a [integração de backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) da sua loja.

## Como acompanhar o status da reserva

1. No Admin VTEX, acesse **Catálogo > Estoque > Gerenciamento de inventário**, ou digite **Gerenciamento de inventário** na barra de busca no topo da página.
2. Uma lista com os itens da loja que é apresentada, identifique o item desejado.
3. Na coluna `Reservados`, clique no número que aparece em azul. Caso não haja número em azul nesta coluna, isso significa que não há unidades reservadas para este item.
4. Na nova janela que será aberta, visualize a reserva dos itens de mesmo SKU. Na coluna `Status`, você encontra o status da reserva.

Como descrito acima, a baixa no estoque é uma consequência da atualização do inventário pelo lojista. Portanto, não é possível visualizar esse status na plataforma. É possível apenas conferir a quantidade de itens disponíveis para venda e a movimentação dos itens pelo [Gerenciamento de inventário](/pt/docs/tutorials/gerenciar-itens-em-estoque).

> ℹ️ É importante lembrar que todos os status aqui descritos são internos e exclusivos da VTEX para o controle de venda de itens. O status da reserva é consequência do status do pedido. Algumas mudanças dependem de atitudes do comprador, e outras, de atualização manual ou do ERP.

