---
title: "Las promociones con valor mínimo y condiciones de regalo no muestran el regalo en el carro"
id: oUDvaZPL0fjbN3v18QQIM
status: PUBLISHED
createdAt: 2022-07-25T19:29:19.209Z
updatedAt: 2024-12-19T19:20:23.403Z
publishedAt: 2024-12-19T19:20:23.403Z
firstPublishedAt: 2022-07-25T19:29:19.674Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: las-promociones-con-valor-minimo-y-condiciones-de-regalo-no-muestran-el-regalo-en-el-carro
locale: es
kiStatus: Backlog
internalReference: 445569
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


El problema se produce al combinar una promoción con una condición de valor mínimo y un artículo de regalo. En estos casos, el regalo no se muestra al usuario en la interfaz de usuario del proceso de pago. Aunque la promoción se aplica técnicamente, el usuario no puede ver ni seleccionar el regalo, lo que genera confusión.



## Simulación


Este problema no se produce sistemáticamente en todas las pruebas, por lo que es más difícil de reproducir. Sin embargo, los pasos generales para reproducirlo son los siguientes:

1. Cree una promoción que combine una condición de valor mínimo de pedido con un artículo de regalo.
2. Añada artículos elegibles al carrito para cumplir la condición de valor mínimo de la promoción.
3. 3. Realice el pago.
4. Observe si el artículo de regalo se muestra o se puede seleccionar en la interfaz de usuario de pago. En algunos casos, la promoción parece aplicarse en el pedido, pero el regalo no aparece en la interfaz de usuario.



## Workaround


No hay ninguna solución disponible para este problema.





