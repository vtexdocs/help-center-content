---
title: 'Campos no marcados como obligatorios en Master Data conducen a un error de pago'
id: 1iB9Zy7FPH2ge6L7AVyHxN
status: PUBLISHED
createdAt: 2019-09-17T21:45:28.631Z
updatedAt: 2022-12-22T20:45:54.022Z
publishedAt: 2022-12-22T20:45:54.022Z
firstPublishedAt: 2019-09-24T14:41:50.884Z
contentType: knownIssue
productTeam: Shopping
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slugEN: fields-not-marked-as-mandatory-in-master-data-lead-to-checkout-error
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

Al obtener las direcciones que puede tener un cliente, el checkout no valida los registros que no tienen los campos obligatorios, principalmente, el campo "País". Esto significa que, cuando se muestran las opciones para seleccionar la dirección, se genera un error en el momento en que el cliente elige una dirección sin los datos, por ejemplo, de "País". Lo que causa confusión al cliente que se ve directamente perjudicado por este comportamiento.


Mensaje: no se permiten varios países en las direcciones

Recuerde que, en la entidad de datos “direcciones” (AD) dentro del Master Data,  estos campos son abiertos; es decir, pueden colocarse como no obligatorios y pueden estar vacíos. Entonces, en los momentos en que esta información es alimentada a través de integraciones (utilizando nuestras APIs), la puerta se abre para tener registros que no tienen, por ejemplo, los datos de "País", lo que termina en el error mencionado anteriormente.


__Comportamiento esperado__

Impedir que este error ocurra, garantizando en algún momento la naturaleza obligatoria de este tipo de campo, por ejemplo, del campo "País", ya sea en el momento de la alimentación de las entradas del registro en el Master Data o cuando el checkout obtenga las informaciones de la dirección, o ignorar direcciones inconsistentes.

__Comportamiento actual__

El checkout recibe las informaciones de las direcciones asociadas a dicho cliente/perfil  para mostrarlas al informar las opciones de envío (../checkout/#/shipping/).

Se muestran las opciones y, aunque no tiene datos del país dentro del JSON (country) del OrderForm (selectedAddresses.[0].country), en la interfaz de usuario, las direcciones muestran el país. Esto significa que el cliente o el gerente de la tienda no pueden darse cuenta fácilmente de que se requiere algunas informaciones críticas para continuar con la compra.

## Simulación

Ex.:
1. Identifique un usuario que tenga más de una dirección de datos maestros asociada y que no tenga información de país registrada.
2. Agregue cualquier producto a su carrito e identifíquese con el correo electrónico de ese cliente.
3. Intente modificar los datos de envío, es decir, juegue con la selección de dirección (suponiendo que el usuario tenga más de uno).
4. Cuando se selecciona la dirección que no tiene el campo del país, aparecerá el error.

## Workaround

Asegúrese de que las direcciones en Master Data tengan el campo del país con la información correspondiente, es decir, no deben estar vacías o sin información válida.

Tenga en cuenta que el país debe expresarse en el estándar de 3 dígitos del Código ISO.

