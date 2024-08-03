---
title: '[Giftlist] La fecha del evento guardada en la UI no es la misma que se refleja en la bd'
id: 6PUBzRdtno8ypsPMg97B6K
status: PUBLISHED
createdAt: 2022-07-25T17:45:12.568Z
updatedAt: 2024-02-16T20:28:47.100Z
publishedAt: 2024-02-16T20:28:47.100Z
firstPublishedAt: 2022-07-25T17:45:13.009Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: giftlist-la-fecha-del-evento-guardada-en-la-ui-no-es-la-misma-que-se-refleja-en-la-bd
locale: es
kiStatus: No Fix
internalReference: 402134
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al guardar el evento de la lista de regalos con fecha 31/12/2021, se registra en la interfaz de usuario 30/12/2021, pero es 31/12/2021 en la exportación (la fecha correcta)



## Simulación


1- Ir al enlace https://account.myvtex.com/_secure/giftlist/create
2- Crea una nueva lista con el evento y utiliza la fecha 31/12/2021
3- Comprueba en la UI la fecha y en la exportación otra fecha



## Workaround


n/a

