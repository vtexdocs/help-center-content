---
title: 'Error 403 para todas las URL que contengan develop-.'
id: X6JDmLhD0StgHPGXJd9cZ
status: PUBLISHED
createdAt: 2024-02-01T13:46:53.024Z
updatedAt: 2024-02-01T13:46:54.008Z
publishedAt: 2024-02-01T13:46:54.008Z
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
Por ejemplo, un producto con el enlace de texto `how-to-develot-a-culture-of-custumer-centricity` mostrará un error 403, ya que contiene la cadena "develop-".


##

## Simulación



1. Poner la cadena "desarrollar-" en un enlace de texto
2. Cargar el producto
3. Ver el error 403



## Workaround


No utilizar la cadena "develop-"





