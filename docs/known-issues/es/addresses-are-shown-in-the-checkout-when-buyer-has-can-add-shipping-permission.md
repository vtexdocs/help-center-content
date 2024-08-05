---
title: "Las direcciones se muestran en la caja cuando el comprador tiene permiso para 'Añadir envío'."
id: 2ssiTryGJ6kGoZWxWkGnFF
status: PUBLISHED
createdAt: 2024-05-21T22:03:55.172Z
updatedAt: 2024-05-21T22:03:56.435Z
publishedAt: 2024-05-21T22:03:56.435Z
firstPublishedAt: 2024-05-21T22:03:56.435Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slug: las-direcciones-se-muestran-en-la-caja-cuando-el-comprador-tiene-permiso-para-anadir-envio
locale: es
kiStatus: Backlog
internalReference: 1037067
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando un rol tiene el permiso "Puede añadir envío" en la Configuración de Pago B2B y un comprador tiene direcciones registradas en el Sistema de Perfiles, al hacer clic en "Entregar en otra dirección" en el paso de envío y hacer clic en "Volver a la lista de direcciones" se muestran las direcciones del Sistema de Perfiles.


##

## Simulación



- Añada a un rol el permiso "Puede añadir envío" en la Configuración de Pago B2B a través del administrador;
- Añadir el rol a un comprador;
- Accede a la tienda y monta un carrito;
- Después de acceder a la caja, haga clic en "Cambiar opciones de envío"
- Haga clic en "Entregar en otra dirección" en el paso de envío y haga clic en "Volver a la lista de direcciones",
- Diferentes direcciones del centro de costes están en el carrito.



## Workaround


Habilite la opción Guardar datos de usuario para que no se añadan direcciones al Sistema de perfiles.




