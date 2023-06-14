---
title: 'Qué hacer cuando el cliente no recibe el token de recuperación de contraseña'
id: 5jyaHYpuvK4uMuG0ksUKsa
status: DRAFT
createdAt: 2017-08-22T15:09:27.634Z
updatedAt: 2023-04-28T00:08:14.045Z
publishedAt: 
firstPublishedAt: 2017-08-22T15:13:14.166Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_35
slug: que-hacer-cuando-el-cliente-no-recibe-la-notificacion-de-recuperacion-de
legacySlug: que-hacer-cuando-el-cliente-no-recibe-la-notificacion-de-recuperacion-de
---

A veces el usuario no excedió los intentos de contraseña, pero no recibe la notificación de recuperación. En ese caso, es probable que el usuario esté incluido en la lista de Supresión de Amazon Web Service. Vea [aquí](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppression-list.html) la información suministrada por AWS respecto de esa lista.

El Amazon SES mantiene una lista de supresión de direcciones de email de destinatarios que recientemente causaron un salto brusco de rechazo (bounce) para cualquier cliente del Amazon SES. Ésa es una operación automática por cuenta de Amazon y no significa que el email permanecerá en una blacklist. Esto puede ocurrir debido a que el proveedor que envió el email puede estar siendo usado de forma maliciosa por otros usuarios.

Pero como en VTEX usamos la misma plataforma para todos los clientes la lista de supresiones de rechazo cuenta para la misma cuota de envío y tasa de rechazo. Una dirección de email puede permanecer en la lista de supresión por hasta 14 días.

En el caso de que quede constatado que el cliente no recibe el email y no está en el primer escenario descrito arriba, es necesario ponerse en contacto con el soporte VTEX para solicitar la remoción del email de la lista de supresión.

Desafortunadamente, Amazon no posee una forma automática para que esto se haga. El proceso todavía es manual.
