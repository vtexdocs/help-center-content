---
title: 'No se pueden cargar imágenes de hojas de cálculo con servicios de host que utilizan el protocolo de cifrado SSL1.3'
id: sqoXJSms7bhmdNe0Id111
status: PUBLISHED
createdAt: 2023-06-28T12:23:54.884Z
updatedAt: 2023-06-28T12:25:18.545Z
publishedAt: 2023-06-28T12:25:18.545Z
firstPublishedAt: 2023-06-28T12:23:55.364Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: no-se-pueden-cargar-imagenes-de-hojas-de-calculo-con-servicios-de-host-que-utilizan-el-protocolo-de-cifrado-ssl13
locale: es
kiStatus: Backlog
internalReference: 851911
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando el host de imágenes de la hoja de cálculo utiliza un protocolo de encriptación SSL1.3, aparece un error al intentar subir la hoja de cálculo:

"Fallo al procesar el registro. Asegúrese de que los datos de la hoja de cálculo son coherentes e inténtelo de nuevo. Detalles del error: Se ha producido un error al enviar la solicitud".

Este error se produce porque nuestro servicio windows sólo permite versiones antiguas como 1.2 o 1.1.



##

## Simulación



1. Utiliza un host con una versión de protocolo más reciente;
2. Intenta subir una imagen, usando hoja de cálculo, que esté alojada allí;
3. 3. Compruebe que aparece el mensaje de error.



## Workaround


Utilice un host diferente o valide con el host para utilizar una versión anterior.





