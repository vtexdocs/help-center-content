---
title: "La tarjeta de memoria no funciona cuando la 3DS2 está activa"
id: 6rq9ndcI52WEW1onvc1uNd
status: PUBLISHED
createdAt: 2024-12-03T18:20:53.391Z
updatedAt: 2024-12-03T18:20:54.319Z
publishedAt: 2024-12-03T18:20:54.319Z
firstPublishedAt: 2024-12-03T18:20:54.319Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: la-tarjeta-de-memoria-no-funciona-cuando-la-3ds2-esta-activa
locale: es
kiStatus: Backlog
internalReference: 319708
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando los clientes intentan añadir una nueva tarjeta de crédito en la sección MiCuenta de las tiendas que utilizan la autenticación 3DS (V1 o V2), pueden encontrarse con un mensaje de error que dice: "Se ha producido un error al intentar guardar la tarjeta". Este error se produce porque la tarjeta de crédito aún no ha sido validada.

Para validar la tarjeta, es necesario asociarla a una condición de pago. Una vez establecida esta asociación, se efectuará un cargo de 1,50 USD en la tarjeta. Sin embargo, esta transacción se cancela posteriormente, y la tarjeta se valida en el proceso.

En los comercios en los que las entidades adquirentes emplean la autenticación 3DS, esta transacción activa el proceso de autenticación y solicita la validación de la tarjeta. Sin embargo, como no se trata de una compra real, el paso de "desafío" de la autenticación 3DS no puede completarse, lo que provoca el error mencionado al intentar guardar la tarjeta.



## Simulación


Para simular los pasos que conducen al error, sigue las instrucciones que se indican a continuación:


1. Acceda a la plataforma VTEX Admin.
2. Configure una entidad adquirente que utilice la autenticación 3DS. Para V1, asegúrese de que está correctamente configurada. Para la V2, consulte nuestro artículo "Configuración del flujo de autenticación 3DS 2" para obtener instrucciones más detalladas.
3. Configure un método de pago con tarjeta de crédito (por ejemplo, Mastercard, Visa, American Express) para que lo procese la entidad adquirente configurada.
4. Visite la página de inicio de su tienda.
5. Inicie sesión proporcionando su dirección de correo electrónico y contraseña.
6. Haz clic en "MiCuenta" para acceder a la configuración de tu cuenta.
7. Navegue hasta la sección "Tarjetas de crédito".
8. Selecciona la opción de "Añadir nueva tarjeta".
9. Rellena todos los campos obligatorios con la información necesaria de la tarjeta.
10. Pulsa en "Guardar nueva tarjeta" para proceder a guardar los datos de la tarjeta.
11. Siguiendo este proceso se devolverá un error, indicando el problema encontrado durante la adición de la tarjeta.



## Workaround


Puede resolver este error añadiendo una condición de pago para una tarjeta de crédito asociada a una entidad adquirente que no utilice 3-D Secure (V1 o V2)






