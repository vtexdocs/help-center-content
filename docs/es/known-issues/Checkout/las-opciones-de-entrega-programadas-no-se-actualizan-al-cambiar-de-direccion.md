---
title: 'Las opciones de entrega programadas no se actualizan al cambiar de dirección o de vendedor'
id: z1sjFNyZVUJAR7G95itfT
status: PUBLISHED
createdAt: 2023-06-12T12:07:06.920Z
updatedAt: 2023-06-12T12:14:23.384Z
publishedAt: 2023-06-12T12:14:23.384Z
firstPublishedAt: 2023-06-12T12:12:13.214Z
contentType: knownIssue
productTeam: Checkout
author: 3iOk6R6XYZ9O18JHFLPk43
tag: Checkout
slugEN: schedule-delivery-options-are-not-updated-when-changing-address-or-seller
locale: es
kiStatus: Backlog
internalReference: 288574
---

## Sumario

__Situación 1:__ En un carro identificado (pero no registrado), con una dirección enmascarada en el paso de envío, al cambiar entre las direcciones disponibles, las opciones de ventana de entrega no se recalculan en la interfaz de usuario. 

__Situación 2:__ En un carro en el que dos vendedores de marca blanca están configurados con el mismo Id. de SLA, pero diferentes opciones de ventana de entrega. Después de cambiar la opción de entrega seleccionada y se cambia el vendedor, las opciones de ventana de entrega no se recalculan en la interfaz de usuario.

Hay una petición a la API, que vuelve con el "deliveryWindow", pero la UI no actualiza el componente. Al seleccionar una ventana de entrega no válida, no es posible ir al paso de pago para finalizar la compra.

## Simulación

__Escenario 1:__

- Registrar un comprador con dos direcciones;
- Montar un carrito y cambiar entre las direcciones disponibles en el paso de envío;
- Seleccione la ventana de entrega.

__Escenario 2:__

- Configure dos vendedores de marca blanca diferentes con el mismo Id. de SLA para entrega programada pero con diferentes ventanas de entrega;
- Cada uno de los vendedores de marca blanca debe tener también su propia opción de entrega programada;
- Seleccione la entrega programada específica para uno de los vendedores;
- Cambie a la entrega programada con el mismo Id. de SLA y seleccione la ventana de entrega.

## Workaround

__Escenario 1:__ N/A

__Escenario 2:__ Configure la misma ventana de entrega para todos los vendedores de marca blanca o cambie el Id. de SLA.

