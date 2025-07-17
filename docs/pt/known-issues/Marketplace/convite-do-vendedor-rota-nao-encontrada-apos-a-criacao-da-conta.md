---
title: "[Convite do vendedor] Rota não encontrada após a criação da conta"
id: esM1LVJaR3ZiJaozfJJtf
status: PUBLISHED
createdAt: 2025-01-22T16:10:13.405Z
updatedAt: 2025-01-22T16:10:14.208Z
publishedAt: 2025-01-22T16:10:14.208Z
firstPublishedAt: 2025-01-22T16:10:14.208Z
contentType: knownIssue
productTeam: Marketplace
author: 2mXZkbi0oi061KicTExNjo
tag: Marketplace
slugEN: convite-do-vendedor-rota-nao-encontrada-apos-a-criacao-da-conta
locale: pt
kiStatus: Backlog
internalReference: 1167493
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Nesse processo, geramos uma conta VTEX para esses vendedores, que é o Portal do Vendedor. A criação da conta é um processo de autoatendimento, ou seja, o próprio vendedor fornece os dados por meio de um formulário e, ao enviá-los, criamos a conta. Uma vez criada a conta, o vendedor é imediatamente redirecionado para seu administrador.

## Simulação




- vá para o fluxo de convite ao vendedor em: https://VTEX.myvtex.com/admin/seller-invite/
- registrar uma nova conta no Portal do Vendedor.
- concluir o registro de uma conta do Portal do Vendedor

**ERRO

    {"code": "NotFound", "message": "Route test21nov2569.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=/admin&email=andrei.basoc+test21nov2@vtex.com not found", "source": "Vtex.Kube.Router", "requestId": "f19875630eac47a588b2e32250292f4a"}


 ![](https://vtexhelp.zendesk.com/attachments/token/aoT6ZHSmrHyO7Te9aKKN1pRCQ/?name=image.png

## Workaround


Há um atraso no provisionamento da conta, pois, após algum tempo, esse erro se normaliza, ou seja, a conta se torna acessível ao vendedor.





