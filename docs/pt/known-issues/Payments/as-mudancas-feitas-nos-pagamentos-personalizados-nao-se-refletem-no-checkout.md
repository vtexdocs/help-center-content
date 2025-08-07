---
title: "As mudanças feitas nos pagamentos personalizados não se refletem no checkout"
id: 22ot22mIyR9v8b2vXYn8VW
status: PUBLISHED
createdAt: 2022-03-27T17:59:14.988Z
updatedAt: 2022-11-25T22:05:21.028Z
publishedAt: 2022-11-25T22:05:21.028Z
firstPublishedAt: 2022-03-27T17:59:15.384Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: as-mudancas-feitas-nos-pagamentos-personalizados-nao-se-refletem-no-checkout
locale: pt
kiStatus: Backlog
internalReference: 276250
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o cliente tenta modificar as configurações feitas para pagamentos personalizados que já têm uma regra de pagamento associada, as mudanças não são refletidas no checkout.
O problema acontece devido a um cache que precisa ser sobregravado pelas alterações feitas na configuração de pagamentos personalizados.



## Simulação



1. Ir para a VTEX **Admin***.
2. Estabeleça um pagamento personalizado.
3. Estabeleça uma condição de pagamento para processar o pagamento personalizado.
4. Volte para a configuração de pagamento Personalizado e mude a descrição lá.
5. Vá até o checkout e observe que a atualização não refletiu as mudanças feitas.



## Workaround


Você pode contornar esta questão economizando a condição de pagamento que está associada ao pagamento personalizado

