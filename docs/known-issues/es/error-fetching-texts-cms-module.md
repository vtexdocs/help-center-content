---
title: Error al buscar textos - Módulo CMS
id: 7g9e4G7i12CSs4OK0YgCi4
status: PUBLISHED
createdAt: 2017-08-17T20:44:25.357Z
updatedAt: 2022-12-22T20:55:13.797Z
publishedAt: 2022-12-22T20:55:13.797Z
firstPublishedAt: 2017-08-17T20:59:07.751Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5V92cmF9jG8KG600EwUgEg
tag: Portal (CMS)
slug: error-al-buscar-textos-modulo-cms
kiStatus: Backlog
internalReference: 
---

## Sumario

Detectamos un comportamiento no esperado al intentar realizar el cambio/traducción de un texto en el área de Configuraciones - Texto de la tienda. Este comportamiento genera un error al buscar la palabra para ser traducida o cambiada. En algunos casos no genera el error y no devuelve el resultado.

## Simulación

1. Entrar en CMS -> Configuraciones -> Textos de la tienda.
2. Buscar la palabra "gama".
3. Al hacer la búsqueda, el sistema no filtra solamente las páginas que contienen esta palabra. Otras veces genera un error.

## Workaround

Colocar la palabra en el campo de búsqueda, luego elegir la variable que desea cambiar. Ejemplo: "FaixaPreco". Así el sistema traerá la palabra en el campo de resultado.

