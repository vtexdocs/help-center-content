---
title: 'El plan de suscripción está "atascado" en la "importación" después de cargar la hoja de cálculo de la asociación de SKUs'
id: 4BVj2X44OZMttG57vUryHb
status: PUBLISHED
createdAt: 2022-05-03T00:28:48.118Z
updatedAt: 2022-11-25T22:02:55.949Z
publishedAt: 2022-11-25T22:02:55.949Z
firstPublishedAt: 2022-05-03T00:28:48.887Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-plan-de-suscripcion-esta-atascado-en-la-importacion-despues-de-cargar-la-hoja-de-calculo-de-la-asociacion-de-skus
locale: es
kiStatus: Fixed
internalReference: 571080
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Es importante tener en cuenta que la sección **Planes** dentro del módulo **Suscripciones** es relativamente nueva y todavía está en la fase **Beta**.

Dentro de las opciones de **Planes** para las suscripciones, tenemos una funcionalidad que permite importar desde una hoja de cálculo Excel todas aquellas SKUs que se quieran asociar a un plan específico.

Para la importación, la hoja de cálculo base indicada muestra dos columnas con ejemplos de los valores que se deben colocar. En la primera columna el ID de la SKU y en la segunda el valor que define si esta SKU está asociada o no. A continuación se muestra un ejemplo de cómo se muestra:

 ![](https://vtexhelp.zendesk.com/attachments/token/64TRpBZfKZcCRKRouDVWJPSGq/?name=image.png)

En este caso, el problema se produce porque **nuestro servicio** **actualmente sólo acepta un valor numérico en la columna "asociado "**, es decir, sólo **0 para falso** o **1 para verdadero**. Al cargar la hoja de cálculo con texto en la columna "**asociado**", el plan permanecerá en el estado "**importando**" indefinidamente, lo que actualmente bloquea la posibilidad de editar o cargar una nueva hoja de cálculo.



## Simulación



Para simularlo, puedes:

1. Cargar la hoja de cálculo con el texto indicado ("**TRUE**") en la columna "**asociado**".
2. Validar el estado del plan que quedará "**importando**".
3. No podrá editar el Plan específico.



## Workaround



Para evitar este comportamiento, se recomienda **cargar la hoja de cálculo con el formato numérico indicado (0 o 1) en la columna "asociado "** y asegurarse de que esta celda está efectivamente en formato numérico. He aquí un ejemplo:

 ![](https://vtexhelp.zendesk.com/attachments/token/nsnccGKCNs13yG1X3uOgr3pfM/?name=image.png)

En caso de que el plan esté "bloqueado", la idea es que por el momento se abra un ticket para que el equipo de **Gestión de Pedidos**, intente "desbloquear" el Plan específico.

