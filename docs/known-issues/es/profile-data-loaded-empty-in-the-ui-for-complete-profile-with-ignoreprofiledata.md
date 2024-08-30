---
title: "Los datos del perfil se cargan vacíos en la interfaz de usuario para un perfil completo con 'ignoreProfileData'."
id: 10B1QKgN42sjapDEALmKOp
status: PUBLISHED
createdAt: 2024-04-15T11:41:06.841Z
updatedAt: 2024-04-15T11:41:07.691Z
publishedAt: 2024-04-15T11:41:07.691Z
firstPublishedAt: 2024-04-15T11:41:07.691Z
contentType: knownIssue
productTeam: Checkout
author: 2mXZkbi0oi061KicTExNjo
tag: Checkout
slug: los-datos-del-perfil-se-cargan-vacios-en-la-interfaz-de-usuario-para-un-perfil-completo-con-ignoreprofiledata
locale: es
kiStatus: Backlog
internalReference: 1016582
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Al configurar 'ignoreProfileData' a través de la API Ignorar datos de perfil en el pago, si el comprador tiene un perfil completo pero no ha iniciado sesión, los datos se cargarán vacíos en la interfaz de usuario.



## Simulación



- Enviar ignoreProfileData vía API Ignorar los datos de perfil en el pago;
- Añadir un artículo al carrito;
- Añadir un correo con un perfil completo; no se cargarán datos y requerirá inicio de sesión.

 ![](https://vtexhelp.zendesk.com/attachments/token/jVk0tmcR7R4BmaEkDcCedJgBP/?name=image.png)


##

## Workaround


N/A




