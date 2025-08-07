---
title: "La hoja de cálculo de imágenes no se exporta cuando la cuenta tiene demasiados skus"
id: 61QPFKVJfCSIMyX1iLuJbQ
status: PUBLISHED
createdAt: 2022-08-02T19:05:25.641Z
updatedAt: 2022-11-25T21:44:08.083Z
publishedAt: 2022-11-25T21:44:08.083Z
firstPublishedAt: 2022-08-02T19:05:26.808Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slugEN: la-hoja-de-calculo-de-imagenes-no-se-exporta-cuando-la-cuenta-tiene-demasiados-skus
locale: es
kiStatus: Backlog
internalReference: 623183
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


A pesar del mensaje de éxito en el Admin de que la hoja de cálculo de imágenes se está procesando y que pronto se enviará al correo electrónico, el informe nunca llega realmente.
Este comportamiento ocurre debido a un tiempo de espera que depende de si la cantidad de skus que se exportan supera el límite de 10k sugerido.



## Simulación



1. Intenta exportar un informe de hoja de cálculo de imágenes con más de 10.000 skus;
2. Verifique que el mensaje en el admin sea exitoso;
3. 3. Compruebe si el correo electrónico llega realmente.



## Workaround


Utilice las API para obtener la información necesaria:
https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-sku-file
https://developers.vtex.com/vtex-rest-api/reference/catalog-api-get-product-variations

