---
title: "La vista previa del envío muestra erróneamente los artículos como no disponibles"
id: 7fuBZqoKnQTMcoEGPntSrl
status: PUBLISHED
createdAt: 2025-03-14T19:41:01.606Z
updatedAt: 2025-03-14T19:41:02.515Z
publishedAt: 2025-03-14T19:41:02.515Z
firstPublishedAt: 2025-03-14T19:41:02.515Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: la-vista-previa-del-envio-muestra-erroneamente-los-articulos-como-no-disponibles
locale: es
kiStatus: Backlog
internalReference: 1194442
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


En algunos casos, el componente de vista previa de envío puede mostrar información no sincronizada del carro, lo que lleva a un estado incorrecto que muestra los artículos disponibles como no disponibles para la entrega.

Al recargar la página, se corrige la información de la vista previa de envío.


##

## Simulación


El problema puede presentarse en diferentes contextos, pero puede reproducirse de forma fiable siguiendo los pasos que se indican a continuación:

- Configure un `maxNumberOfWhiteLabelSellers` de `1`;
- Añada un artículo `X` al carrito entregado por el vendedor `A`;
- Añada la dirección al componente de vista previa de envío;
- Añada un artículo al carro que pueda ser entregado por un vendedor distinto de `A` que también pueda entregar el artículo `X` ;
- Se seleccionará un nuevo vendedor que pueda entregar ambos artículos;
- La vista previa de envío mostrará un artículo como no disponible para entrega.



## Workaround


NO DISPONIBLE





