---
title: 'El OrderForm no puede ser recuperado después de modificar los anexos del artículo en el catálogo'
id: 5T3UBM0eCUVlKZ7ThQwFZU
status: PUBLISHED
createdAt: 2022-09-28T14:04:26.176Z
updatedAt: 2022-11-25T21:49:45.319Z
publishedAt: 2022-11-25T21:49:45.319Z
firstPublishedAt: 2022-09-28T14:04:26.777Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: el-orderform-no-puede-ser-recuperado-despues-de-modificar-los-anexos-del-articulo-en-el-catalogo
locale: es
kiStatus: Backlog
internalReference: 320044
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Después de cambiar (actualizar o eliminar) algunos anexos de artículos en el catálogo de productos, si ya tiene algún carro/formulario de pedido que hace referencia a artículos con el anexo específico, el formulario de pedido ya no se puede cargar.

La página de carrito/comprobación presentará un "error de comunicación con el vendedor", ya que los archivos adjuntos de los artículos provienen del servicio de cumplimiento dentro de la tubería de la comprobación. En Splunk, los registros de error (que pueden ser filtrados por su operationId) detallarán el mensaje de excepción "_Some item attachments are not available_".



## Simulación


- para tener un artículo con campos adjuntos
- insertar este artículo en un carrito y rellenar los campos de anexos
- cambiar/eliminar algunos de estos campos en el catálogo de productos
- volver a la cesta (esperar algún caché en la información del catálogo para ver los cambios)
- el carrito no se carga y genera el error mencionado



## Workaround


N/A

