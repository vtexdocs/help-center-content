---
title: 'Instalar uma app de um Registro privado'
id: 1Tkvy9EXlK0uuyiykGWg6a
status: ARCHIVED
createdAt: 2017-11-22T14:02:21.883Z
updatedAt: 2020-03-06T13:58:06.135Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 
slugEN: install-an-app-from-a-private-registry
locale: pt
legacySlug: instalar-uma-app-de-um-registro-privado
subcategoryId: unknown-subcategory
---

Por padrão, quando você instala uma app por meio do comando `vtex install`, o que está fazendo é buscar essa app no Registro público, acessível a qualquer usuário.

Mas também é possível instalar uma app de um Registro privado.

Para isso, basta usar um dos dois comandos abaixo, substituindo `{conta}` pelo nome da conta do Registro desejado.

`vtex install -r {conta}` ou `vtex install --registry {conta}`
