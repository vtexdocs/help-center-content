---
title: "'¿Cuántas veces se aplicará su beneficio en su tienda?' Guardar incorrectamente en la interfaz del formulario de promoción"
id: 6vT0rYIry3cGx1nG5BPkmx
status: PUBLISHED
createdAt: 2022-06-28T19:23:30.074Z
updatedAt: 2022-11-25T22:12:21.814Z
publishedAt: 2022-11-25T22:12:21.814Z
firstPublishedAt: 2022-06-28T19:23:30.406Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: how-many-times-will-your-benefit-be-applied-in-your-store-saving-incorrectly-on-promotion-form-interface
locale: es
kiStatus: Backlog
internalReference: 268304
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



En la primera casilla de la sección "Restricciones y limitaciones de uso" del formulario de la promoción regular, cuando se guarda la primera casilla con un valor distinto de ilimitado y todas las demás casillas están marcadas, así:

 ![](https://vtexhelp.zendesk.com/attachments/token/XPIZEznRNirizqLBs0Bk3F2ns/?name=inline1741007227.png)

Y vuelves a visitar la promoción después de guardarla, los datos se "mueven" a la casilla de abajo:

 ![](https://vtexhelp.zendesk.com/attachments/token/QH2S7TuWMuQ2DRdr78J2YbZvS/?name=inline137244708.png)



## Simulación


Como se ha descrito anteriormente, basta con ir a un formulario de promoción normal y guardar una promoción rellenando sólo la primera casilla de la sección #4.

Después de eso, abra el formulario de promoción de nuevo.



## Workaround


Hay 3 soluciones:


**1)** Simplemente no guarde el beneficio de nuevo. Los datos se guardan correctamente en el backend en la primera acción de guardar.

Cuando vuelvas a visitar la promoción, ésta se "moverá" hacia abajo en el formulario y al guardarla de nuevo hará que la información se guarde incorrectamente.


**2)** Rellenar la segunda casilla con datos sustitutivos de "ilimitado" (es decir, un número alto como 9999999) también funciona:

 ![](https://vtexhelp.zendesk.com/attachments/token/7J5orWNE31sV3vzBFhy6pwWXs/?name=inline-1533850111.png) ![](https://vtexhelp.zendesk.com/attachments/token/vZMkrn7uS56cywlx1nDO3g7vz/?name=inline-468944681.png)

3) Finalmente, la última solución sería guardar directamente a través de la API, en nuestra solicitud SaveBenefit documentada en nuestro centro de ayuda: https://developers.vtex.com/reference/benefits#createorupdatecalculatorconfiguration

