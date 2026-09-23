---
title: 'Personalizar el SMTP de VTEX'
id: tutorials_2733
status: PUBLISHED
createdAt: 2017-04-27T21:52:41.580Z
updatedAt: 2022-10-11T16:07:08.378Z
publishedAt: 2022-10-11T16:07:08.378Z
firstPublishedAt: 2017-04-27T23:03:54.566Z
contentType: tutorial
productTeam: Post-purchase
author: authors_3
slugEN: customizing-the-vtex-smtp
legacySlug: personalizando-el-smtp-de-vtex
locale: es
subcategoryId: 1wsCJz4swMsK4QSsGeIgic
---

VTEX pone a disposición un servidor de emails que puede usar la tienda sin costos. 
Además, es posible configurar que los emails sean enviados con la dirección de la tienda en vez del email estándar de VTEX. Para realizar esa configuración, siga los pasos a continuación.

1. Acceda al módulo **Message Center**.
2. Haga clic en la pestaña **Remitentes**.
3. Haga clic en el botón **Nuevo Remetente** y luego en la opción **Propio**.
4. Cree un nombre para llenar en el campo **Identificación de remitente** que será usado para identificar el remitente en la pantalla de Remitentes y asociar el SMTP a usar en los templates que quiera usar.
5. En el campo **Nombre**, use el nombre que será usado asociado al email.
6. En el campo **Email**, complete con el correo electrónico que va a usar su tienda para comunicación con el cliente.
7. No marque la flag **Este es el remitente predeterminado** hasta que usted finalice el registro y se asegurese de que el remitente creado realmente está enviando los emails.
8. Haga clic en **Guardar**.
9. Será enviada a su email una confirmación de registro de SMTP realizada con éxito.
10. Edite el remitente para marcarlo como **Predeterminado** y guardar modificaciones.

Cada vez que realice un cambio en el remitente y guarde, se enviará un e-mail de confirmación de SMTP registrado con éxito a la dirección registrada. __Es necesario hacer clic en el enlace__. En caso contrario, no se enviará ningún e-mail referente al e-mail registrado. Usted también puede probar si el envío está normal haciendo clic en el botón __Testar__ en su remitente en __Message Center__> __Remitentes__.
