---
title: 'Cookie quebrou a API/Sessões'
id: 5knDMVZabZRYaEtITjkDbE
status: PUBLISHED
createdAt: 2023-03-27T19:54:42.696Z
updatedAt: 2023-03-27T19:54:43.232Z
publishedAt: 2023-03-27T19:54:43.232Z
firstPublishedAt: 2023-03-27T19:54:43.232Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: cookie-quebrou-a-apisessoes
kiStatus: Backlog
internalReference: 779014
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando há um script que gera um cookie para rastrear os usuários e seu cookie quebrou a chamada para /api/sessões, por exemplo, porque ele tem uma carta especial no cookie de valor. Então precisamos descartar esses cookies mal-formados de nosso lado e manter todos os outros, para que isso não afete o comportamento.


##

## Simulação



O cenário foi mapeado no Facebook:

Quando você entra na página de um anúncio no Facebook, automaticamente carrega a página no navegador META nativo e quando você chega à página de checkout não carrega corretamente, portanto, não é possível finalizar a compra.

O Facebook costumava redirecionar para os navegadores, mas eles não o fazem mais porque integraram seu navegador ao seu aplicativo.


##

## Workaround


N/A





