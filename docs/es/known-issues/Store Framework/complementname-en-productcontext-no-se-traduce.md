---
title: 'complementName en productContext no se traduce'
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
locale: es
kiStatus: Backlog
internalReference: 1095907
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Dado que la API de traducción de documentos de búsqueda del catálogo no traduce el campo de descripción breve llamado complementName, el contexto del producto muestra el texto original en las tiendas internacionalizadas.


##

## Simulación



- Traducir una descripción corta (complementName) en una tienda internacionalizada. Puede ser a través de Messages o Catalog Translation app.
- Comprueba el productContext para ese producto en un idioma diferente usando React Dev Tools o consultando el productContext.
- Verás que su valor no está traducido.

- Puedes comprobar que la API del catálogo no trae este valor traducido: `curl --location 'http://api.vtexinternal.com/api/search-documents/documents/translations/?an=&decompress=true' \`



##

## Workaround


Ninguna aplicación nativa VTEX utiliza este campo. Pero si lo utiliza en una aplicación personalizada, puede crear un nuevo SKU o especificación de producto para utilizarlo como complementName o consultar la traducción en su aplicación personalizada.





