---
title: '¿Cómo solicitar un anticipo de cuentas por cobrar mediante VTEX Payment?'
id: 5FlkHEgb0LTmVby0wsrGIQ
status: DRAFT
createdAt: 2020-03-04T19:09:47.000Z
updatedAt: 2020-03-05T22:03:00.536Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 
slug: como-solicitar-un-anticipo-de-cuentas-por-cobrar-mediante-vtex-payment
legacySlug: como-solicitar-un-anticipo-de-cuentas-por-cobrar-mediante-vtex-payment
subcategory: 
---

El primer paso es comprobar si su cuenta tiene saldo disponible para este tipo de operación.

Hay dos maneras de hacer esto. La primera es a través de la propia página de Anticipación en el Admin.

Es muy simple:

1. Acceda al __Admin VTEX__.
2. Haga clic en el módulo __VTEX Payment__.
3. Luego, haga clic en __Resumen de la Cuenta__.
4. En la sección “Próximos valores a recibir de las ventas”, haga clic en el botón __Anticipar__.
5. Debajo de “Valor deseado”, verifique el valor informado en __“Disponible para anticipar”__.

Ahora que ha verificado el saldo, es importante tener en cuenta que el valor mínimo que se puede anticipar es el menor valor que puede recibir la tienda. 

Por ejemplo, si el menor valor que puede recibir es R$10, ese es el valor mínimo que puede anticipar. El valor máximo se informa en el propio Admin - el saldo que usted acabó de verificar - en la página "Anticipar cuentas por cobrar".

![anteciparpaymentES.png h 250?h=250](//images.ctfassets.net/alneenqid6w5/2tIGxzUGlbr3JwUMKFIKqu/57222cbc6c044d15be5e3a46f583e3e1/anteciparpaymentES.png_h_250_h_250)

<div class=”alert alert-info”>
<strong>Atención</strong>: las cuentas por cobrar en disputa o programadas para el siguiente día hábil no pueden ser anticipadas.
</div>

Por lo tanto, verifique el procedimiento para solicitar la anticipación:

1. Acceda al __Admin VTEX__.
2. Del lado izquierdo de la pantalla, haga clic en __VTEX Payment__.
3. Haga clic en __Resumen de la Cuenta__.
4. Al lado de __Próximos valores a recibir de las ventas__, haga clic en el botón Anticipar.
5. Verifique el __saldo disponible__.
6. Digite el valor en el campo __Valor deseado__.  
7. Haga clic en el botón gris __Simular__. 

Luego, el Admin presentará una propuesta de anticipación. En esta, puede consultar: 

- Las __tasas__ correspondientes. 
- __Fecha de pago__ del valor líquido que se recibirá.  
- __Saldos__ tanto el valor disponible en su cuenta como el total de cuentas por cobrar.

Después de validar la información de la propuesta, haga clic en el botón azul "Confirmar anticipación".

Finalmente, verá una pantalla que informa el status de la anticipación, si fue exitosa o no.

El valor anticipado entrará en su cuenta al siguiente día hábil a partir de las 16h. Digamos que, si la anticipación se solicita un viernes, el cliente solo la recibirá el lunes por la tarde.

Si desea volver al Admin, basta hacer clic en el botón azul "Cerrar".
