---
title: 'Error en el método de pago duplicado'
id: 1wdiEae6sehlnTDnanWT7n
status: PUBLISHED
createdAt: 2023-11-02T12:23:14.027Z
updatedAt: 2023-11-02T12:23:15.109Z
publishedAt: 2023-11-02T12:23:15.109Z
firstPublishedAt: 2023-11-02T12:23:15.109Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: error-en-el-metodo-de-pago-duplicado
locale: es
kiStatus: Backlog
internalReference: 929428
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al duplicar una forma de pago que no tiene fraccionamiento, el operador recibe en pantalla el siguiente mensaje: "El sistema de pago actual no permite opciones de fraccionamiento". Esto sucede porque al crear el cuerpo de la solicitud de creación de la nueva regla, se insertan por defecto algunos campos, entre ellos installmentOptions, pero este campo no existe para pagos en efectivo como débito y boleto(Brasil).


##

## Simulación



1. Accede a la pantalla de condiciones de pago
2. Selecciona una forma de pago que no tenga plazos.
3. Haga clic en el botón para duplicar la regla.
4. Aparecerá en pantalla el siguiente mensaje de error: "El sistema de pago actual no permite opciones de pago a plazos"



## Workaround


Tenemos dos maneras de evitar este problema:

1. 1. Crea otro con la misma configuración que el que quieres duplicar;
2. Crear la regla a través de la API, `https://.myvtex.com/api/payments/pvt/rules/`, eliminando el campo installmentOptions del cuerpo.





