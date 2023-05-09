---
title: O checkout não tem clareza sobre as divergências entre o cliente identificado e o cliente conectado
id: 3TorBnBvCbqLB5AUG8oWp0
createdAt: 2023-05-03T21:54:48.509Z
updatedAt: 2023-05-08T18:32:02.939Z
publishedAt: 2023-05-08T18:32:02.939Z
firstPublishedAt: 2023-05-03T21:54:49.041Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: o-checkout-nao-tem-clareza-sobre-as-divergencias-entre-o-cliente-identificado-e-o-cliente-conectado
status: Backlog
internalReference: 442267
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Enquanto estiver no checkout, você precisará fazer login para ver/alterar informações pessoais e, em alguns casos, até mesmo concluir a compra. O processo de login é desconectado do formulário de pedido, portanto, você pode fazer login com qualquer e-mail e ser identificado com outro e-mail no fluxo de compra.

O problema é que as divergências entre os dois e-mails não serão apresentadas claramente no checkout e não permitirão que você realize a ação esperada (ver/editar informações ou concluir a compra); nesse contexto, você será visto como desconectado.

## Simulação



- Crie qualquer carrinho e identifique-se como um cliente recorrente (que terá suas informações automaticamente preenchidas e mascaradas);
- Tente editar algumas informações, o que exigirá que você faça login;
- Faça o processo de login com um e-mail diferente do anterior (especialmente usando o Google/Facebook como provedores de identidade);
- Você será conectado com sucesso no contexto do VTEX ID, mas será desconectado no contexto do checkout

## Workaround


N/A




