---
title: 'El analizador de palabras de la Búsqueda Inteligente no normaliza el género en las palabras portuguesas'
id: 2oVUQnXZK6FNXg7co88C1B
status: PUBLISHED
createdAt: 2024-07-26T22:55:32.746Z
updatedAt: 2024-07-26T22:55:46.558Z
publishedAt: 2024-07-26T22:55:46.558Z
firstPublishedAt: 2024-07-26T22:55:33.875Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: el-analizador-de-palabras-de-la-busqueda-inteligente-no-normaliza-el-genero-en-las-palabras-portuguesas
locale: es
kiStatus: Backlog
internalReference: 1072003
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Se espera que los términos buscados se normalicen entre sus diferentes formas (plural/singular, género y otras posibilidades), un proceso formalmente llamado stemming. El analizador es diferente para cada idioma para ajustarse a sus necesidades.

El analizador para el portugués no normaliza el género de las palabras.


##

## Simulación


Considere una palabra registrada en diferentes productos con diferentes géneros, como "camiseta listrada" y "vestido listrado".

Aunque "listrada" y "listrado" son la misma palabra pero en formas de distinto género, la búsqueda de "listrada" no devolverá los "vestidos", y viceversa.



## Workaround


Registre sinónimos bidireccionales para palabras con variaciones de género relevantes.





