---
title: Trigger não funciona
id: 4dX1C5BVnkobCV7VrwRiD4
status: PUBLISHED
createdAt: 2019-04-01T22:06:02.199Z
updatedAt: 2019-12-31T15:18:25.369Z
publishedAt: 2019-12-31T15:18:25.369Z
firstPublishedAt: 2019-04-01T22:09:33.094Z
contentType: knownIssue
productTeam: Master Data
author: 3aBBTLS9ZKO6IcY0Goe2y2
tag: Master Data
slug: trigger-nao-funciona
kiStatus: Fixed
internalReference: 
---

## Sumário

Alguns campos de configuração de trigger podem afetar negativamente sua experiência com os Triggers V1 do MasterData.

Estes campos podem ser encontrados dentro da aba `Ações em caso de positivo` e __devem permanecer vazios__:

- E-mail para notificação de erros
- Destinatário do e-mail no modo de teste
- E-mail de origem
- Nome de exibição do e-mail de origem


Também recomendamos que `Ações em caso negativo` e Status: `Teste` não sejam usados.

## Simulação

Este erro pode ser simulado preenchendo os seguintes campos:

- E-mail para notificação de erros
- Destinatário do e-mail no modo de teste
- E-mail de origem
- Nome de exibição do e-mail de origem


## Workaround

Conforme mencionado acima, deixe os seguintes campos vazios:

- E-mail para notificação de erros
- Destinatário do e-mail no modo de teste
- E-mail de origem
- Nome de exibição do e-mail de origem

