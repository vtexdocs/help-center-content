---
title: 'Controle para desabilitar a tag canonical'
id: 6A8OVhzqc8qYYmecUu68kk
status: DRAFT
createdAt: 2019-01-24T20:45:37.943Z
updatedAt: 2022-09-08T16:44:24.945Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:03:32.817Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slug: controle-para-desabilitar-a-tag-canonical
locale: pt
legacySlug: controle-para-desabilitar-a-tag-canonical
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

## O que é a tag canonical

Ao usar o controle de meta tags, explicado no artigo [Como usar o controle de meta tags](/pt/faq/como-usar-o-controle-de-meta-tags), uma das tags inseridas no head da página é a __tag canonical__:

`<link rel="canonical" href="http://{AccountName}.com.br/{page}">`

A tag canonical permite evitar __conteúdo duplicado__, ou seja, cenários em que duas páginas do site exibem conteúdo idêntico ou quase idêntico. Um exemplo são as três seguintes URLs:
- {AccountName}.com
- {AccountName}.com.br
- {AccountName}.com/

Todas as URLs acima exibem o mesmo conteúdo, mas, para os buscadores, a simples adição de uma barra ao final do endereço pode caracterizar uma página diferente, o que é péssimo para fins de __SEO__.

Para evitar cenários como esse, a tag canonical informa aos buscadores qual é a versão preferencial de uma página web.

Por meio dela, um motor de busca consegue decidir se duas páginas têm conteúdo duplicado e, caso decida que sim, repassar os méritos de indexação para a versão preferencial.

## Desabilitar a tag canonical para uma página

Embora a tag canonical seja útil para fins de SEO, pode ser que você não queira usá-la para páginas específicas.

Como ela é inserida automaticamente pelo controle de meta tags, se estiver usando este controle, você precisa informar ao sistema que ele deve excluir apenas a tag canonical. Isto é feito por meio do seguinte controle:

`<vtex.cmc:canonicalPage disable="true"/>`

O valor `true` passado ao parâmetro `disable` desse controle faz com que a tag canonical __não__ seja usada para aquele template.
