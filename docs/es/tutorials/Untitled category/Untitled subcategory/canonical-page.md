---
title: 'Canonical Page'
id: 3o6Iww1emQG4mSw8cwaOmi
status: ARCHIVED
createdAt: 2017-07-22T02:16:53.087Z
updatedAt: 2019-12-31T15:24:28.147Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:22:17.766Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: untitled-entry-2017-07-22-at-02-16-53
locale: es
legacySlug: canonical-page
subcategoryId: unknown-subcategory
---

Un problema que ittttttem muitas reclamações na comunidade da VTEX é a questão da canonical tag. O Portal adiciona uma tag automaticamente e muitas vezes a URL gerada é incorreta.
Isso gera um problema de SEO pra várias lojas. Até ontem não havia condição de contorno pra esse caso.
Agora é possível sobrescrever a tag que é inserida automaticamente pelo sistema. 
Basta adicionar uma canonical tag no template desejado. 
Ex: <link rel="canonical" href="http://www.meudominio.com.br"/>
Para evitar que a canonical tag seja incluída sem precisar informar outra, basta adicionar no template o controle "canonicalPage" atribuindo o valor "true" ao campo "disable".
Ex: <vtex.cmc:canonicalPage disable="true"/>
Eu respondi os posts sobre o assunto na comunidade mas estou avisando aqui porque pode ter algum ticket relacionado a esse problema.
É importante observar que as tags automáticas, inclusive as incorretas, continuarão sendo geradas da mesma forma.
