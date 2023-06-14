---
title: 'PDP no carga cuando se pasan caracteres especiales en el enlace'
id: 442RD31ld9TYWHAECLjTmu
status: PUBLISHED
createdAt: 2023-03-14T17:13:19.750Z
updatedAt: 2023-03-14T17:13:20.317Z
publishedAt: 2023-03-14T17:13:20.317Z
firstPublishedAt: 2023-03-14T17:13:20.317Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: pdp-no-carga-cuando-se-pasan-caracteres-especiales-en-el-enlace
locale: es
kiStatus: Backlog
internalReference: 770893
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Hay algunos casos especiales en los que la tienda tiene un enlace a una página en la que se pasa un carácter especial como '#' para pasar una propiedad, por ejemplo, el color del artículo, que hace que el PDP no cargue a la primera, sino que sigue intentando cargar, pero cuando se refresca la página sí carga correctamente.

Este comportamiento no debería bloquear la carga de la página debido a algunas configuraciones que la tienda pueda realizar, como por ejemplo, mostrar los colores de un producto en las páginas de búsqueda.


##

## Simulación


Compruebe si una tienda que tiene una configuración como el color establecido en la configuración de búsqueda para ser dividido y ellos van a la página de búsqueda de algún producto y llegar a la PDP de ella, si la propiedad se pasa en la URL se bloqueará debido al vínculo creado.



## Workaround


Actualmente la tienda puede eliminar la división en la parte de búsqueda.





