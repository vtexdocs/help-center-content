---
title: 'Seguridad de SmartCheckout'
id: 3SrJuuhrqwePUg1rp1exfB
status: PUBLISHED
createdAt: 2022-05-12T21:08:03.866Z
updatedAt: 2022-11-14T18:27:54.308Z
publishedAt: 2022-11-14T18:27:54.308Z
firstPublishedAt: 2022-05-12T21:10:56.246Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: seguridad-de-smartcheckout
locale: es
legacySlug: seguridad-de-smartcheckout
subcategory: 2TNXiKzLZOPxjMTyGiEeJu
---

SmartCheckout™ es una herramienta desarrollada para aumentar las ventas sin comprometer la seguridad. Esto es posible debido a que SmartCheckout™ permite que el cliente inicie su compra únicamente con su dirección de email. Los datos solicitados al cliente son los esenciales para el envío, la facturación y la comunicación.

De esa forma, las tiendas VTEX se pueden beneficiar con:
- Una experiencia de compra más fluida y ágil.
- Un aumento en la tasa de recompra.
- Más conversiones.
- Mayor seguridad y menos preocupación por las contraseñas.

## ¿Esta funcionalidad es segura?

Para explicar mejor cómo funciona SmartCheckout™ desde el punto de vista de la seguridad, pensemos en dos personajes:
- El cliente, que ya tiene sus datos registrados en la plataforma.
- El estafador, que tiene la intención de hacer la compra con los datos de otra persona.

La hipótesis de vulnerabilidad indica que basta con que el estafador tenga la dirección de email del cliente para poder acceder a los datos de sus tarjetas y a su dirección y, en consecuencia, usar los datos del cliente para comprar. Sin embargo, eso no es posible porque la autenticación vía email se realiza a través del envío de un código de acceso temporal que llega a la dirección que suministró el cliente. Por lo tanto, se necesita tener acceso a la bandeja de entrada del email utilizado.

Esto significa que, al intentar realizar una compra con un email ajeno, el estafador necesitará realizar una autenticación, ya sea mediante el inicio de sesión o el ingreso del código de acceso enviado por email. Sin la autenticación, tampoco es posible acceder ni editar los datos de una cuenta, como las direcciones de entrega, la información de pago o el email. Para compras con tarjeta de crédito, también se necesita ingresar el código de seguridad de la tarjeta (CVV).

Además, la forma en la que la información aparece enmascarada en el checkout está certificada por el estándar [PCI-DSS] (https://help.vtex.com/pt/tutorial/what-is-the-pci-ssc--4jo3Vkox3amSO2w4qIWa0E#) de seguridad de pagos. Según este estándar, no hace falta ocultar los últimos dígitos de una tarjeta. La forma en la que se exhibe la información es suficiente para reconocer el medio de pago, pero no sirve para realizar compras.

<div class = "alert alert-info">
<p>Con Smartcheckout™ de VTEX, la seguridad está en primer lugar. Siempre que se reconoce un email, todos los datos se completan de manera tal que se garantiza que solo el propietario del email reconocerá su información.</p><p>Al acceder a la tienda a través del dominio restringido <code>myvtex.com</code>, los operadores de la tienda pueden ver los datos no enmascarados en SmartCheckout para realizar pruebas. El acceso a este dominio está restringido a los administradores de la tienda con el debido nivel de acceso y las credenciales correspondientes.</p>
</div>

