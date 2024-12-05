---
title: '¿Cómo solicitar un anticipo de cuentas por cobrar?'
id: O82Cw3Tirmr7cxqRhy90s
status: ARCHIVED
createdAt: 2020-03-09T23:05:49.988Z
updatedAt: 2023-01-27T01:12:24.044Z
publishedAt: 
firstPublishedAt: 2020-03-11T22:59:24.795Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: how-to-request-receivables-anticipation
locale: es
legacySlug: como-solicitar-un-anticipo-de-cuentas-por-cobrar-mediante-vtex-payment
subcategoryId: 6J5IKNejpAxT1Ie23PDtU4
---

El primer paso es comprobar si su cuenta tiene saldo disponible para este tipo de operación.

Hay dos maneras de hacer esto. La primera es a través de la propia página de Anticipo en el Admin.

Es muy simple:

1. Acceda al __Admin VTEX__.
2. Haga clic en el módulo __VTEX Payment__.
3. Luego, haga clic en __Resumen de la Cuenta__.
4. En la sección “Próximos valores a recibir de las ventas”, haga clic en el botón __Anticipar__.
5. Debajo de “Valor deseado”, verifique el __valor__ informado en __“Disponible para anticipar”__.

Ahora que ha verificado el saldo, es importante tener en cuenta que el valor mínimo que se puede anticipar es el menor valor que puede recibir la tienda. 

Por ejemplo, si el menor valor que puede recibir es R$10, ese es el valor mínimo que puede anticipar. El valor máximo se informa en el propio Admin - el saldo que usted acaba de verificar - en la página "Anticipar cuentas por cobrar". 

![antecipação](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/VTEX%20Payment/Financial%20operations/como-solicitar-un-anticipo-de-cuentas-por-cobrar_1.png)

>ℹ️ **Atención**: las cuentas por cobrar en disputa o programadas para el siguiente día hábil no pueden ser anticipadas.

Por lo tanto, verifique el procedimiento para solicitar el anticipo:

1. Acceda al __Admin VTEX__.
2. Del lado izquierdo de la pantalla, haga clic en __VTEX Payment__.
3. Haga clic en __Resumen de la Cuenta__.
4. Al lado de Próximos valores a recibir de las ventas, haga clic en el botón __Anticipar__.
5. Verifique el __saldo disponible__.
6. Digite el valor en el campo __Valor deseado__.  
7. Haga clic en el botón gris __Simular__.

Luego, el Admin presentará una propuesta de anticipo. En esta, puede consultar: 

- Las __tasas__ correspondientes.
- __Fecha de pago__ del valor líquido que se recibirá.  
- __Saldos__ tanto el valor disponible en su cuenta como el total de cuentas por cobrar.

Después de validar la información de la propuesta, haga clic en el botón azul "Confirmar anticipo".

Finalmente, verá una pantalla que informa el status del anticipo, si fue exitoso o no.

El valor anticipado entrará en su cuenta al siguiente día hábil a partir de las 16h. Digamos que, si el anticipo se solicita un viernes, el cliente solo la recibirá el lunes por la tarde.

Si desea volver al Admin, basta hacer clic en el botón azul "Cerrar".
