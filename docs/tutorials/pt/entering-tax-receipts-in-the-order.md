---
title: Inserir nota fiscal no pedido
id: tutorials_193
status: DRAFT
createdAt: 2017-04-27T22:14:57.365Z
updatedAt: 2023-03-29T23:52:24.585Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:00:47.395Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slug: como-inserir-a-nota-fiscal
legacySlug: como-inserir-a-nota-fiscal
subcategory: 2t00bBkcAwIkgSCGKsMOwY
---

Inserir a nota fiscal no pedido é um passo obrigatório para que o status passe para o status de __Faturado__. É possível fazer isso pelo módulo de __Gerenciamento de pedidos__ no Admin ou [pela API de Orders](https://developers.vtex.com/vtex-developer-docs/reference/invoice "Invoice").

Para fazer manualmente pelo **Gerenciamento de pedidos**, basta clicar no botão `Faturar pacote`, como na imagem abaixo.

![faturar-pedido-ex pt](https://images.ctfassets.net/alneenqid6w5/1IOORyWRjC4eEayM8iW6OG/0e49ae3568ea66ed18b5b8ab6f90d414/ex_1_pt.png)

Com a inserção da nota fiscal com o valor completo do pedido, o mesmo passará para o status **Faturado**.

Também é possível a inserção da nota fiscal parcial, quando são necessárias várias notas fiscais para atingir o valor total da compra. 

<div class="alert alert-info">
  <p>Somente após atingir o valor total do pedido o status será alterado para <strong>Faturado</strong>.</p>
</div>

A nota fiscal demanda atenção nos seguintes pontos:

- **Número da nota fiscal**: esse número deve ser único por nota fiscal por pedido, pois, caso sejam inseridas duas notas com o mesmo número, o sistema entenderá como uma alteração de nota.
- **Número de rastreio**: esse número, juntamente com a URL de rastreio, possibilita o acompanhamento da entrega pelo cliente, por meio dos e-mails que são enviados a cada alteração nesse rastreio.
- **Chave de acesso:** é a chave de acesso para consulta da NF-e na internet. Este campo pode ser preenchido somente em casos de nota fiscal eletrônica.

Quando a URL e o código de rastreio estão inseridos, a cada atualização do status da entrega o cliente receberá um email com a notificação de que a entrega está mais próxima.

O **Conversation Tracker** depende da inserção de algum valor nesses campos. Caso não tenha um número de rastreamento, basta inserir um valor qualquer para ativar o sistema de notificação.

<div class="alert alert-danger">
É possível inserir mais de uma nota fiscal no pedido, no entanto a soma total dos valores das notas deve coincidir com o valor total do pedido.
</div>
