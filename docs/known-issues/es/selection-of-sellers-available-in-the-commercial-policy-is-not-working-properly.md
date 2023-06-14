---
title: 'La selección de sellers disponible en la política comercial no funciona correctamente'
id: 1w656dzgvHG8yIvPfFdGBX
status: PUBLISHED
createdAt: 2022-02-01T20:55:24.960Z
updatedAt: 2022-11-25T21:49:00.089Z
publishedAt: 2022-11-25T21:49:00.089Z
firstPublishedAt: 2022-02-01T20:55:25.329Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-seleccion-de-sellers-disponible-en-la-politica-comercial-no-funciona-correctamente
locale: es
kiStatus: Backlog
internalReference: 515480
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El cambio de disponibilidad de un vendedor en una póliza comercial no está siendo reconocido correctamente en el catálogo. Esto puede causar dos escenarios: un producto de un vendedor no seleccionado pasa a estar disponible o un producto de un vendedor seleccionado pasa a no estar disponible



## Simulación


Escenario 1
- Eliminar un vendedor de una política comercial a través de la interfaz de usuario `/admin/Site/StoreForm.aspx?Id={SC}}
- Comprobar mediante la ruta `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` si se ha eliminado la póliza comercial del campo _availableSalesChannel_

Situación 2
- Añadir un vendedor de una política comercial a través de la interfaz de usuario
- Compruebe mediante la ruta `http://portal.vtexcommercestable.com.br/api/seller-register/pvt/sellers/?an=` si la política comercial está disponible en el campo _availableSalesChannel_



## Workaround


Guarde la configuración de la política comercial de nuevo desde la interfaz de usuario

