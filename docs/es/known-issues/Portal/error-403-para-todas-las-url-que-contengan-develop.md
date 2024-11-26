---
title: 'Error 403 para todas las URL que contengan develop-.'
id: X6JDmLhD0StgHPGXJd9cZ
status: PUBLISHED
createdAt: 2024-02-01T13:46:53.024Z
updatedAt: 2024-11-11T15:19:34.574Z
publishedAt: 2024-11-11T15:19:34.574Z
firstPublishedAt: 2024-02-01T13:46:54.008Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slugEN: 403-error-for-all-urls-containing-develop
locale: es
kiStatus: Backlog
internalReference: 975182
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Se espera que una URL pueda contener cualquier palabra sin generar un error, pero la palabra "**desarrollar "** seguida del carácter "**-**" genera un error 403 automático.
Por ejemplo, un producto con un enlace de texto `how-to-develop-a-culture-of-customer-centricity` mostrará un error 403 ya que contiene la cadena "develop-".


##

## Simulación



1. Poner la cadena "desarrollar-" en un enlace de texto
2. Cargar el producto
3. Ver el error 403



## Workaround


No utilice la cadena "develop-"





