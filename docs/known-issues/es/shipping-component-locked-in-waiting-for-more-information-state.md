---
title: 'Componente de expedición bloqueado en estado "Esperando más información".'
id: 7HHlJdZvZ31NgsB7lTShAz
status: PUBLISHED
createdAt: 2023-03-29T19:26:05.971Z
updatedAt: 2023-03-29T20:51:39.432Z
publishedAt: 2023-03-29T20:51:39.432Z
firstPublishedAt: 2023-03-29T19:26:06.470Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: componente-de-expedicion-bloqueado-en-estado-esperando-mas-informacion
locale: es
kiStatus: Backlog
internalReference: 780673
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Checkout UI no renderiza el componente de envío cuando se accede a la página de checkout directamente a través de un paso específico en la URL (excepto para /cart y /shipping), el "shippingData" está incompleto, y hay un incremento de latencia en las peticiones a la API orderForm. Verá el mensaje "Esperando más información" y no podrá continuar con la compra.


##

## Simulación



- Añade un producto al carrito;
- Rellene el perfil, y dejar la información de envío vacía;
- Dado que depende en el aumento de la latencia para experimentar el problema, considere el uso de una extensión como URL Throttler para añadir un retraso en las solicitudes API orderForm;
- Ir a una nueva pestaña y acceder a la caja directamente en un paso específico a través de URL, por ejemplo, utilizando "_www.store.com_/checkout/#/payment";
- Verá el mensaje "Esperando más información" en el componente de envío.



## Workaround


Recargue la página o acceda a la caja utilizando específicamente el paso de envío (_www.store.com_/checkout/#/shipping).




