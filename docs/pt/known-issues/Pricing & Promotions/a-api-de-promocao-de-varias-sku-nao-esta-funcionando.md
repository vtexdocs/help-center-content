---
title: "A API de promoção de várias sku não está funcionando"
id: 38CLe2oIWHGNgjL4L0uIxz
status: PUBLISHED
createdAt: 2023-01-09T21:18:05.077Z
updatedAt: 2024-10-04T16:48:08.291Z
publishedAt: 2024-10-04T16:48:08.291Z
firstPublishedAt: 2023-01-09T21:18:05.807Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: a-api-de-promocao-de-varias-sku-nao-esta-funcionando
locale: pt
kiStatus: No Fix
internalReference: 729990
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Apesar das informações de retorno de sucesso nas APIs e no e-mail, a promoção não é criada no administrador (API de criação) ou realmente atualizada (API de atualização).

Documentos da API:
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#post-/api/rnb/pvt/import/calculatorConfiguration
https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api#put-/api/rnb/pvt/import/calculatorConfiguration/-promotionId-

## Simulação



1. Segui as etapas nos documentos mencionados acima para criar/atualizar várias promoções de sku;
2. Recebeu um e-mail de confirmação sobre a criação da promoção ou um código de status de sucesso na API, como 202.
3. Verificar no administrador que a promoção nunca foi criada/atualizada.



## Workaround


Não há solução alternativa.




