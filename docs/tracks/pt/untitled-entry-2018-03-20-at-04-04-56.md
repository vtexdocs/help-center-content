---
title: '[SkyHub] Fluxo de preços'
id: 1VgGyIX7l2QYK2M0OakGYi
status: DRAFT
createdAt: 2018-03-20T16:04:56.198Z
updatedAt: 2020-01-09T15:47:48.317Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: Channels
slug: skyhub-fluxo-de-precos
locale: pt
trackId: 
trackSlugPT: 
---

# 3. Preços

A integração envia o preço final de acordo com a simulação de fulfillment. Em um cenário padrão, o preço enviado será sempre o determinado para a política comercial associada à integração. Porém, existem fatores que podem influenciar no preço final, como __promoções__ e __preços fixos__.

>Ex1: promoção de 10% de desconto para determinada categoria

</br>
>Ex2: SKU X está R$ 10,00 na política comercial usada na SkyHub e tem um preço fixo de R$ 15,00 para essa mesma política. A integração enviará R$ 15,00.

</br>
Os preços são enviados sempre que o produto é indexado. Ao alterar o preço de um SKU, a indexação ocorrerá automaticamente. No entanto, para preços com validade, quando a data expira o sistema não ativa a reindexação. Desta forma, o preço base só será enviado na próxima indexação do produto (seja por conta de alguma alteração no cadastro do produto, seja por atualização de estoque, ou até por uma reindexação agendada mesmo, etc...).

<div class="alert alert-warning">
OBS: como a forma de pagamento é feita no marketplace, as regras de pagamento são determinadas por ele. Por conta disto, não conseguimos enviar preços diferenciados em função da forma de pagamento.
</br>
<em>Ex: se na VTEX existem juros configurados para pagamentos parcelados, o preço enviado continuará sendo o que a simulação de fulfillment retorna.</em>
</div>
