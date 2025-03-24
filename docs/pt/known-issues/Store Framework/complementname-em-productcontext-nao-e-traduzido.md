---
title: 'complementName em productContext não é traduzido'
id: 6Gol274XThpldM99pDuHAC
status: PUBLISHED
createdAt: 2024-09-10T18:15:06.126Z
updatedAt: 2024-09-10T18:15:07.916Z
publishedAt: 2024-09-10T18:15:07.916Z
firstPublishedAt: 2024-09-10T18:15:07.916Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: complementname-in-productcontext-is-not-translated
locale: pt
kiStatus: Backlog
internalReference: 1095907
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Como a API de tradução de documentos de pesquisa do catálogo não traduz o campo de descrição curta chamado complementName, o contexto do produto mostra o texto original em lojas internacionalizadas.

## Simulação



- Traduza uma descrição curta (complementName) em uma loja internacionalizada. Isso pode ser feito por meio do aplicativo Messages ou Catalog Translation.
- Verifique o productContext para esse produto em um idioma diferente usando o React Dev Tools ou consultando o productContext.
- Você verá que seu valor não está traduzido.

- Você pode verificar se a API do catálogo não traz esse valor traduzido: `curl --location 'http://api.vtexinternal.com/api/search-documents/documents/translations/?an=&decompress=true' \`

## Workaround


Nenhum aplicativo nativo da VTEX usa esse campo. Mas se estiver usando em um aplicativo personalizado, você pode criar uma nova SKU ou especificação de produto para usar como complementName ou consultar a tradução em seu aplicativo personalizado.





