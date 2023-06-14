---
title: 'UI informs that there is no SLA for address that had previously available SLA'
id: 2xXtoKl1OBiiyPyTVeUTrg
status: PUBLISHED
createdAt: 2022-05-24T21:48:17.537Z
updatedAt: 2022-11-25T21:49:17.360Z
publishedAt: 2022-11-25T21:49:17.360Z
firstPublishedAt: 2022-05-24T21:48:18.159Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: ui-informs-that-there-is-no-sla-for-address-that-had-previously-available-sla
kiStatus: Fixed
internalReference: 585249
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando o usuário logado chega à fase de envio, com o endereço já pré-selecionado e com o SLA disponível para aquele local, ao editar seu endereço com exatamente as mesmas informações preenchidas anteriormente, a UI informa que não há entrega disponível. Mesmo a resposta API sendo que existe sim SLA disponível (já que é o mesmo endereço).



## Simulação


Ter um usuário com um endereço registrado, e este endereço tem entrega disponível, ao ir para a etapa de envio, editar o endereço com as mesmas informações. Logo após a edição da mensagem é que não há mais SLA disponível.




## Workaround


N/A

