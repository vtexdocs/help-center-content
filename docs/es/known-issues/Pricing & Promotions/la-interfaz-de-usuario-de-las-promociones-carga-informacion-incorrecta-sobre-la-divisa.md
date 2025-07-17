---
title: "La interfaz de usuario de las promociones carga información incorrecta sobre la divisa"
id: 7liSZOtS1Hs2P84bXzRrG9
status: PUBLISHED
createdAt: 2022-12-19T14:41:51.129Z
updatedAt: 2024-02-15T12:11:06.893Z
publishedAt: 2024-02-15T12:11:06.893Z
firstPublishedAt: 2022-12-19T14:41:51.903Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: la-interfaz-de-usuario-de-las-promociones-carga-informacion-incorrecta-sobre-la-divisa
locale: es
kiStatus: Fixed
internalReference: 718908
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al abrir el módulo de Promociones muy rápidamente y muchas veces seguidas aparece un comportamiento erróneo en la UI.

El campo "Restringir esta promoción a los productos del vendedor" no carga el marcador de posición correcto, en su lugar carga el marcador de posición "GLOBAL SELECCIONA UN VENDEDOR..."

La información de la moneda se carga como R$ (real)

Al Guardar la promoción el valor final no es el esperado por el cliente.


##

## Simulación


No hay una manera fácil de reproducir este escenario. A veces, al abrir el módulo de promociones en diferentes pestañas muy rápidamente se produce este comportamiento.
Compruebe si el campo "Restringir esta promoción a los productos del vendedor" es diferente para saber que ha llegado al escenario.



## Workaround


Cierre la interfaz de usuario de promociones actual y abra una nueva en la que no se produzca el comportamiento.





