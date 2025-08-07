---
title: "Los caracteres especiales en la consulta de búsqueda rompen el comportamiento de búsqueda de Store Framework"
id: QEWCb3zac7EmrB1FfdFma
status: PUBLISHED
createdAt: 2025-05-26T18:26:29.544Z
updatedAt: 2025-05-26T18:28:35.586Z
publishedAt: 2025-05-26T18:28:35.586Z
firstPublishedAt: 2025-05-26T18:26:30.298Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: los-caracteres-especiales-en-la-consulta-de-busqueda-rompen-el-comportamiento-de-busqueda-de-store-framework
locale: es
kiStatus: Backlog
internalReference: 1232881
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando una consulta de búsqueda incluye caracteres especiales como # o ?, se ignora el resto del nombre del producto. Además, el parámetro map se reconoce incorrectamente, lo que da lugar a una búsqueda vacía o a una página "No encontrado" si el indicador `enable404OneSegment` está establecido como verdadero.


##

## Simulación



1. Vaya a la página de búsqueda de la tienda (Store Framework-based).
2. Realiza una búsqueda de un producto con caracteres especiales, como `Produto#123` o `Produto?123`.
3. Observe que sólo se tiene en cuenta la parte del término anterior al carácter especial.
4. El parámetro `map` no se tiene en cuenta, lo que conduce a un resultado de búsqueda roto o vacío.



## Workaround


N/A




