---
title: La configuración avanzada de la tienda se registra globalmente en lugar de por vinculación
id: 6RQtg8QEaaY25hdEh9KvBD
status: PUBLISHED
createdAt: 2023-04-04T03:15:55.537Z
updatedAt: 2023-04-04T03:15:56.015Z
publishedAt: 2023-04-04T03:15:56.015Z
firstPublishedAt: 2023-04-04T03:15:56.015Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slug: la-configuracion-avanzada-de-la-tienda-se-registra-globalmente-en-lugar-de-por-vinculacion
kiStatus: Backlog
internalReference: 783835
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Al guardar la configuración avanzada dividida por binding, el sistema se registra para todos ellos, pero, al solicitar estos valores para renderizar en tiempo de ejecución, obtenemos los valores del binding y no del contexto global:

https://github.com/vtex-apps/store/blob/46e3df3ecba20170fc3a6eebf12370969e3b5abf/react/components/ProductTitleAndPixel.tsx#L186


##

## Simulación



Necesitará una tienda con enlace múltiple y habilitar el enlace para la configuración de la tienda en admin/cms/store:

 ![](https://vtexhelp.zendesk.com/attachments/token/CNgIedTpUI7LPWqCEfA10HIxz/?name=image.png)

Guarde su configuración avanzada y compruebe la configuración de su tienda vtex:

https://infra.io.vtex.com/apps/v0///apps/vtex.store/settings

Observará que los ajustes avanzados estarán fuera de los contextos de los enlaces.




## Workaround



Añade la configuración que desees a través de un PUT en la clave settings dentro de uno de los objetos del binding:

 ![](https://vtexhelp.zendesk.com/attachments/token/JYKSnxOk9qHdm8RGGp9IutNB3/?name=image.png)




