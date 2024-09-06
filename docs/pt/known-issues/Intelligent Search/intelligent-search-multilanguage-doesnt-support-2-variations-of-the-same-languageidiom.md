---
title: 'O Intelligent Search multilíngue não é compatível com duas variações do mesmo idioma/idioma'
id: 2Qr9uJWwlr20NG29VU4tn2
status: PUBLISHED
createdAt: 2023-06-09T20:41:32.227Z
updatedAt: 2024-08-28T17:03:13.933Z
publishedAt: 2024-08-28T17:03:13.933Z
firstPublishedAt: 2023-06-09T20:41:32.884Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: o-intelligent-search-multilingue-nao-e-compativel-com-duas-variacoes-do-mesmo-idiomaidioma
locale: pt
kiStatus: Backlog
internalReference: 841704
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando usarmos mais de uma localidade na conta, a tradução será feita com base no idioma ao qual a localidade se refere, e se usarmos mais de uma localidade na conta, a tradução será feita com base no idioma ao qual a localidade se refere.

Quando duas variações diferentes de localidade do mesmo idioma forem usadas (por exemplo, `en-US` e `en-GB` ou `en-CA`), as traduções no Intelligent Search não funcionarão corretamente porque consideraremos todas elas como o mesmo idioma (`english`). Somente os valores de um deles (geralmente o que vem primeiro) serão usados.

Há apenas duas exceções:

- `pt-BR` e `pt-PT`
- `es-ES` e `es-CA`

## Simulação


Se você tiver uma lista de Binding com vários idiomas e tentar usar a internacionalização para o mesmo idioma raiz, isso não funcionará.



## Workaround


N/A





