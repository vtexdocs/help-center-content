---
title: 'La búsqueda no devuelve el documento cuando el valor contiene un símbolo + (más).'
id: 7oWiN8Esh9iKy8144Tpglx
status: PUBLISHED
createdAt: 2024-07-08T18:52:21.794Z
updatedAt: 2024-07-08T21:46:18.259Z
publishedAt: 2024-07-08T21:46:18.259Z
firstPublishedAt: 2024-07-08T18:52:22.908Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slug: la-busqueda-no-devuelve-el-documento-cuando-el-valor-contiene-un-simbolo-mas
locale: es
kiStatus: No Fix
internalReference: 828170
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando se busca un documento utilizando un valor de campo que incluye el símbolo "+", la búsqueda no devuelve el documento. Esto ocurre porque el símbolo "+" se interpreta incorrectamente, lo que provoca que el valor de búsqueda no coincida con el valor existente.
Este problema ocurre tanto en la API como en el CRM_.


##

## Simulación



1. Utiliza la API de búsqueda para consultar un campo que incluya un símbolo "+".
2. La búsqueda devolverá un array vacío. Ejemplo:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=+5512345678901&_fields=id,userId,email,homePhone,firstName


En la interfaz de usuario de CRM:
Si se busca un email que contiene el símbolo "+" se devuelve un error.

    Se ha producido un error inesperado. Inténtelo de nuevo. Si el problema persiste, póngase en contacto con el servicio de asistencia.




## Workaround


Hay dos formas de solucionar este problema:
Codifique el símbolo "+" en "%2B", de modo que la consulta de búsqueda se convierta en:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=%2B5512345678901&_fields=id,userId,email,homePhone,firstName


Utilice el símbolo "*" como comodín, que permitirá que la búsqueda coincida con cualquier carácter anterior al valor especificado:

    https://{accountName}.environment.com.br/api/dataentities/{entity}/search?_where=homePhone=*12345678901&_fields=id,userId,email,homePhone,firstName

Este problema surge al buscar documentos utilizando valores de campo que incluyen el símbolo "+". La API de búsqueda no interpreta correctamente el símbolo "+", lo que provoca que la búsqueda falle al no coincidir con los valores existentes. Este problema no se limita al campo "homePhone", sino que puede ocurrir con otros campos, como el correo electrónico, que pueden incluir caracteres especiales.
Para solucionar este problema, puede codificar el símbolo "+" como "%2B" en la consulta de búsqueda o utilizar el símbolo "*" como comodín para asegurarse de que la búsqueda recupera los documentos correctos.


