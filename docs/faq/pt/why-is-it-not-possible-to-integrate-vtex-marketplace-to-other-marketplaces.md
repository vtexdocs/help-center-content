---
title: 'Por que não consigo integrar um marketplace VTEX com outro marketplace?'
id: frequentlyAskedQuestions_4801
status: PUBLISHED
createdAt: 2017-04-27T22:23:24.680Z
updatedAt: 2019-12-31T14:24:50.344Z
publishedAt: 2019-12-31T14:24:50.344Z
firstPublishedAt: 2017-04-27T23:02:44.630Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_35
slug: por-que-nao-consigo-integrar-um-marketplace-vtex-com-outro-marketplace
legacySlug: por-que-nao-consigo-integrar-um-marketplace-vtex-com-outro-marketplace
---

Isso acontece por alguns motivos:

- Em primeiro lugar, existe um motivo relacionado a regras de negócio: um marketplace vendendo em outro marketplace implicaria uma loja com produtos de terceiros vender em um canal sem autorização.
- Existem também questões técnicas que impedem essa integração, como a inexistência de uma tabela de valores no catálogo. Mesmo que ela fosse criada, teria que existir uma gestão cuidadosa para que toda alteração feita no seller refletisse no catálogo.
- Outro motivo é o fato de o marketplace VTEX poder configurar a venda para ser transacionada com meios próprios, meios do seller ou ainda uma mistura de ambos. O marketplace externo não consegue fazer uma consulta em duas camadas, o que impediria, por exemplo, as condições de parcelamento do seller.

