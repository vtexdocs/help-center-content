---
title: 'As alterações feitas no Editor do site são salvas, mas não refletem na página'
id: 2peoCL4YJTTike5XPwrxWT
status: PUBLISHED
createdAt: 2023-04-06T18:58:03.576Z
updatedAt: 2023-04-06T18:58:03.993Z
publishedAt: 2023-04-06T18:58:03.993Z
firstPublishedAt: 2023-04-06T18:58:03.993Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: changes-made-in-site-editor-are-saved-but-dont-reflect-on-the-page
locale: pt
kiStatus: Backlog
internalReference: 786145
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Quando você cria uma nova página em Páginas e depois muda seu caminho para algo diferente, a rotaId não muda. Portanto, quando você cria outra página com o mesmo caminho que a primeira, a rotaId permanecerá a mesma. E então o editor do site terá problemas para salvar o conteúdo destas duas páginas devido a conflitos em suas rotas.


##

## Simulação


1 - Criar uma nova página
2 - Mude o caminho desta página
3 - Criar outra página com o mesmo caminho que a primeira (o caminho original, antes de mudá-lo)
4 - Tente fazer mudanças nessas páginas no editor do site


##

## Workaround


Eliminar o caminho mais antigo e tentar não mudá-lo novamente. Se você precisar mudá-lo, é melhor apagá-lo e criar um novo.





