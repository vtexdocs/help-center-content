---
title: 'Los usuarios con más de un pedido registrado en la entidad BK con diferentes correos electrónicos no pueden ver los pedidos en la página Mi cuenta'
id: 43NLxAbOtyVzOCdS9Dns8c
status: PUBLISHED
createdAt: 2024-02-21T22:30:42.218Z
updatedAt: 2024-02-21T22:30:43.137Z
publishedAt: 2024-02-21T22:30:43.137Z
firstPublishedAt: 2024-02-21T22:30:43.137Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: los-usuarios-con-mas-de-un-pedido-registrado-en-la-entidad-bk-con-diferentes-correos-electronicos-no-pueden-ver-los-pedidos-en-la-pagina-mi-cuenta
locale: es
kiStatus: Backlog
internalReference: 986324
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Debido a la unificación de perfiles algunos usuarios pueden tener pedidos con diferentes emails, y esto es un problema para mostrar los pedidos en la página de mi cuenta (mis pedidos).

Mis pedidos solicita esta información en la entidad BK de Datos Maestros para eliminar el impacto del retraso de indexación, pero el BK tiene el historial y los pedidos con diferentes correos electrónicos. Pero el OMS tiene la línea de código para comprobar si el correo electrónico devuelto es correcto, comprobando el correo electrónico del consultor y el correo electrónico registrado en los pedidos.


##

## Simulación


Dos pedidos creados con diferentes correos electrónicos, por ejemplo joao@gmail.com y joao2@gmail.com, cuando este usuario tiene el perfil de unificación sólo un correo electrónico será válido.
Después si el joao2@gmail.com entra en la página de mi cuenta, no será posible ver los pedidos porque hay un pedido antiguo sin el carácter "2" en el email, por lo que la clave principal (email.) es diferente.





## Workaround


Por ahora no hay solución.





