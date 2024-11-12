---
title: "O pedido da minha loja está parado no status 'Verificando nota fiscal'"
id: 2YY7ILOOd0lEjpiT7SSgag
status: PUBLISHED
createdAt: 2024-08-16T18:32:15.867Z
updatedAt: 2024-11-08T19:29:24.003Z
publishedAt: 2024-11-08T19:29:24.003Z
firstPublishedAt: 2024-08-16T18:52:24.803Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: my-stores-order-still-has-the-status-verifying-invoice
locale: pt
legacySlug: o-pedido-da-minha-loja-esta-parado-no-status-verificando-nota-fiscal
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
---

**Tags:** Pedidos, Status do pedido, Fatura

Ao acompanhar o [fluxo dos pedidos](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196) da sua loja, você pode se deparar com um pedido que permanece no status `Verificando nota fiscal` por mais tempo do que o esperado. Nesse status, a plataforma checa se o pagamento foi liquidado e se a nota fiscal do pedido foi incluída corretamente, sendo estas condições necessárias para que o pedido avance no fluxo.

Quando o pedido permanece no status `Verificando nota fiscal`, isso em geral ocorre pelos seguintes motivos:

* Houve um problema com a [liquidação do pagamento](https://help.vtex.com/pt/tutorial/configurar-tempo-maximo-para-captura-automatica--7dwcaxrcgcFJUk7umqPBw2).
* A nota fiscal não foi corretamente incluída no pedido ou a [fatura](https://help.vtex.com/pt/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v) foi feita apenas parcialmente. 

## Solução

Com relação à liquidação do pagamento, o pedido permanece em `Verificando nota fiscal` até que o [gateway](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/kdPbEIWf8Xq8tESQvViMB#gateway) confirme a liquidação do pagamento, o que é sinalizado pelo status `Settled` do [fluxo de transação](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG/1xjzgJZvqwaI1rfxLMCC3Y). Transcorrido algum tempo, caso a liquidação não ocorra, será necessário criar outro pedido, pois se trata de um problema do gateway e não da plataforma.

Com relação à nota fiscal, é necessário garantir que o valor total do pedido foi faturado e que as informações enviadas estavam corretas, conforme apresentado na seção abaixo.

### Faturar pedido

Confira a seguir casos comuns de erros de fatura de pedidos e conheça as formas de resolvê-los:

* **A nota inserida referencia somente parte dos itens:** insira uma nova nota fiscal com o valor que falta até atingir o valor total do pedido.
* **A nota fiscal contém erros:** ajuste as informações da nota fiscal e garanta que estão corretas. Alguns dos campos obrigatórios que podem ter sido preenchidos incorretamente são o número e a URL da nota fiscal. Lembrando que cada nota fiscal deve ter um número único.
* **Há um problema na integração que está afetando o envio da nota fiscal:** envie uma nova nota fiscal manualmente.

Para faturar o pedido (total ou parcialmente) ou ajustar os dados da nota fiscal pelo Admin VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique no pedido desejado. Você pode buscá-lo [utilizando os filtros](https://help.vtex.com/pt/tutorial/como-filtrar-pedidos--tutorials_192).
3. Na seção **A faturar**, clique em `Faturar`.
4. Clique na opção desejada, seja ela enviar a nota fiscal avulsa ou referenciando os itens.
5. Preencha os campos da tela.
6. Clique em `Salvar nota fiscal`.

>ℹ️ Você encontra o passo a passo detalhado sobre o envio de nota fiscal pelo Admin VTEX no artigo [Como faturar um pedido](https://help.vtex.com/pt/tutorial/faturar-um-pedido-manualmente--7p1h852V5t54KyscpgxE2v). Caso deseje faturar o pedido via API, use o endpoint [Order invoice notification](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/invoice).

>ℹ️ Se for necessário realizar ajustes no pedido, é possível [alterar o pedido pelo Admin VTEX](https://help.vtex.com/pt/tutorial/como-alterar-pedidos-beta--7btlG91rb6sHpW1dkd2kBw).

