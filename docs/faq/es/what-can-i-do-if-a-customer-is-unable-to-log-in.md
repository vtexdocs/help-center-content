---
title: 'Qué hacer cuando un cliente no logra hacer el login'
id: 1DISDN4tFaSSccu2WK2amG
status: PUBLISHED
createdAt: 2017-05-09T13:46:57.095Z
updatedAt: 2019-12-31T14:25:13.615Z
publishedAt: 2019-12-31T14:25:13.615Z
firstPublishedAt: 2017-05-09T13:48:52.807Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_35
slug: que-hacer-cuando-el-cliente-no-logra-hacer-el-login
legacySlug: que-hacer-cuando-el-cliente-no-logra-hacer-el-login
---

VTEX ID posee una regla para evitar que usuarios intenten usar el login de otra persona de forma maliciosa, por lo que tras 3 intentos sin éxito, el email es bloqueado por __1 hora__.

El desbloqueo es automático después de este tiempo y no es posible hacerlo manualmente.

Esto se aplica tanto a los clientes de una tienda como al acceso administrativo e incluso a las APIs.

---

Hay otro escenario similar en el que el usuario no excedió los intentos, pero no recibe la notificación de recuperación de contraseña. En ese caso, es probable que el usuario esté incluido en la lista de Supresión de Amazon Web Service. Vea [aquí](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppression-list.html) la información suministrada por AWS respecto de esa lista.

El Amazon SES mantiene una lista de supresión de direcciones de email de destinatarios que recientemente causaron un salto brusco de rechazo (bounce) para cualquier cliente del Amazon SES. Ésa es una operación automática por cuenta de Amazon y no significa que el email permanecerá en una blacklist. Esto puede ocurrir debido a que el proveedor que envió el email puede estar siendo usado de forma maliciosa por otros usuarios.

Pero como en VTEX usamos la misma plataforma para todos los clientes la lista de supresiones de rechazo cuenta para la misma cuota de envío y tasa de rechazo. Una dirección de email puede permanecer en la lista de supresión por hasta 14 días.

En el caso de que quede constatado que el cliente no recibe el email y no está en el primer escenario descrito arriba, es necesario ponerse en contacto con el soporte VTEX para solicitar la remoción del email de la lista de supresión.

Desafortunadamente, Amazon no posee una forma automática para que esto se haga. El proceso todavía es manual.
