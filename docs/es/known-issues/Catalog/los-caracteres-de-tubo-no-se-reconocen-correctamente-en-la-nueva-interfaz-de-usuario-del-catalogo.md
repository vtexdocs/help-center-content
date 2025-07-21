---
title: "Los caracteres de tubo no se reconocen correctamente en la nueva interfaz de usuario del catálogo."
id: 4iKfIy23VbkugNknlUkfrm
status: PUBLISHED
createdAt: 2025-02-11T16:20:47.923Z
updatedAt: 2025-02-11T16:20:48.678Z
publishedAt: 2025-02-11T16:20:48.678Z
firstPublishedAt: 2025-02-11T16:20:48.678Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: los-caracteres-de-tubo-no-se-reconocen-correctamente-en-la-nueva-interfaz-de-usuario-del-catalogo
locale: es
kiStatus: Backlog
internalReference: 1177654
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se utiliza la nueva interfaz de catálogo, que es accesible a través de https://mystore.myvtex.com/admin/catalog-products, si el usuario tiene un Producto y un SKU que tienen el mismo nombre y/o parte del mismo nombre, estos datos no se muestran si el usuario añade un tubo ( | ) al nombre del SKU: cualquier cosa después de este carácter se oculta.


##

## Simulación



1. Crear un producto con el nombre "Prueba del problema conocido"
2. Crear un SKU con el nombre "| esto es una Prueba para el problema conocido"
3. El nombre SKU, cuando se muestra en la nueva interfaz de usuario del catálogo se mostrará como "| esto es un"



## Workaround


-





