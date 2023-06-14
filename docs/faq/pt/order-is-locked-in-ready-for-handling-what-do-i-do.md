---
title: 'Pedido está travado em "Pronto para manuseio". O que fazer?'
id: frequentlyAskedQuestions_771
status: PUBLISHED
createdAt: 2017-04-27T22:27:37.057Z
updatedAt: 2022-08-11T19:29:35.680Z
publishedAt: 2022-08-11T19:29:35.680Z
firstPublishedAt: 2017-04-27T23:02:34.947Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_84
slug: pedido-esta-travado-em-pronto-para-manuseio-o-que-fazer
locale: pt
legacySlug: meus-pedidos-estao-travados-em-pronto-para-manuseio
---

Quando uma loja tem algum pedido travado no status **Pronto para Manuseio**, isto significa que é necessário que o ERP informe que consultou o pedido e iniciou seu manuseio.

Isso acontece porque, dentro do fluxo de pedidos, o status **Pronto para manuseio** é o status em que os pedidos devem ser consultados pelo ERP.

Quando o ERP consulta e insere este pedido em sua base, é preciso que ele informe à VTEX que o pedido pode seguir com seu fluxo. Esse aviso pode ser feito de duas maneiras, descritas abaixo.

- [ERP informa por API](https://developers.vtex.com/vtex-rest-api/reference/starthandling): este é o modo mais comum de atualização.
- **Lojista informa manualmente**: neste caso, a loja não possui um ERP e é preciso informar manualmente que o pedido deve seguir o fluxo.

> Para isso, clique no símbolo de seta acima do box **Iniciar manuseio**, conforme indicado no diagrama de fluxo de pedidos abaixo.

![ProntoParaManuseio](//images.contentful.com/alneenqid6w5/5VSeCrxvSogcI46mgkYkm8/84ea107934684ada917d6a8163aeae34/ProntoParaManuseio.png)

> É necessário ter um [perfil de acesso com permissão OMS - Full access](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc#oms-full-access "Perfis de acesso - OMS Full access") para realizar esta ação.

<div class="alert alert-warning">
<p>Se o pedido passar do status <b>Iniciar manuseio</b> manualmente, não será possível enviar o pedido para o ERP posteriormente.</p>
</div>
