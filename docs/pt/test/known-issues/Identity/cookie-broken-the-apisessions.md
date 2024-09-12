---
title: 'Cookie quebrou a API/Sessões'
id: 5knDMVZabZRYaEtITjkDbE
status: PUBLISHED
createdAt: 2023-03-27T19:54:42.696Z
updatedAt: 2024-03-20T20:34:36.743Z
publishedAt: 2024-03-20T20:34:36.743Z
firstPublishedAt: 2023-03-27T19:54:43.232Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: cookie-quebrou-a-apisessoes
locale: pt
kiStatus: Backlog
internalReference: 779014
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando há um script que gera um cookie para rastrear os usuários e seu cookie interrompe a chamada para /api/sessions, por exemplo, porque ele tem um caractere especial no cookie de valor. Então, precisamos descartar esses cookies malformados do nosso lado e manter todos os outros, para que isso não afete o comportamento.

## Simulação



O cenário foi mapeado no Facebook:

Quando você entra na página a partir de um anúncio do Facebook, a página é carregada automaticamente no navegador META nativo e, quando você chega à página de checkout, ela não é carregada corretamente e, portanto, não é possível finalizar a compra.

O Facebook costumava redirecionar para os navegadores, mas não faz mais isso porque integrou o navegador ao aplicativo

## Workaround


N/A





