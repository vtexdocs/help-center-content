---
title: 'Faststores no funciona correctamente en el modo privado de Firefox'
id: 3SMQiZFYt8SSVlOJLIMYvH
status: PUBLISHED
createdAt: 2023-05-19T14:56:53.172Z
updatedAt: 2023-05-19T14:56:53.938Z
publishedAt: 2023-05-19T14:56:53.938Z
firstPublishedAt: 2023-05-19T14:56:53.938Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slug: faststores-no-funciona-correctamente-en-el-modo-privado-de-firefox
locale: es
kiStatus: Backlog
internalReference: 828685
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



Hay un bug en Mozilla Firefox, especialmente en modo privado que afecta al almacenamiento de indexedDB, y Faststore depende de eso para funcionar correctamente. Con eso, toda la web no va a funcionar porque depende de la información de indexedDB para su correcto uso.

Aquí hay algunas preguntas frecuentes relacionadas con el problema:

https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=1267582
https://bugzilla.mozilla.org/show_bug.cgi?id=1639542
https://bugzilla.mozilla.org/show_bug.cgi?id=781982



##

## Simulación




- Abre una tienda en Faststore en la pestaña de incógnito.
- Puedes validar que existe una limitación en la creación del almacenamiento indexedDB, lastrando el funcionamiento del store.



## Workaround


No





