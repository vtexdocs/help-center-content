---
title: 'La preferencia de inicio de sesión con contraseña no se puede deshacer en Admin.'
id: 5OPVJusw14TQzKdAVS71wx
status: PUBLISHED
createdAt: 2024-04-22T13:30:15.401Z
updatedAt: 2024-05-06T20:40:26.631Z
publishedAt: 2024-05-06T20:40:26.631Z
firstPublishedAt: 2024-04-22T13:30:16.436Z
contentType: knownIssue
productTeam: Identity
author: 2mXZkbi0oi061KicTExNjo
tag: Identity
slug: la-preferencia-de-inicio-de-sesion-con-contrasena-no-se-puede-deshacer-en-admin
locale: es
kiStatus: Backlog
internalReference: 1020548
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Cuando un usuario se conecta a la plataforma VTEX por primera vez (Admin), se le pide que elija su preferencia de inicio de sesión para la próxima vez que se conecte. A continuación, puede elegir entre introducir su dirección de correo electrónico y contraseña, o introducir un código que se le enviará a su dirección de correo electrónico;

Sin embargo, cuando el usuario elige introducir su dirección de correo electrónico y contraseña, no puede deshacer esta elección, ya que es una elección irrevocable a nivel de la interfaz de usuario, y se requiere una acción sistémica para deshacer esta elección.



## Simulación


**NOTA**: Para simular este escenario, debe iniciar sesión por primera vez;

Iniciar sesión en admin

Introduzca su dirección de correo electrónico y cree una contraseña;

En este punto se le preguntará si desea seguir recibiendo el código de acceso o si desea que el sistema le pida siempre su dirección de correo electrónico y contraseña.

Solicite que el sistema le pida siempre su dirección de correo electrónico y su contraseña.

La próxima vez que se conecte, no podrá deshacer su elección de inicio de sesión y siempre se le pedirá su dirección de correo electrónico y contraseña.



## Workaround


Para que el usuario pueda realizar una nueva elección, es necesario solicitar al equipo de ingeniería que revoque la preferencia guardada en el perfil del usuario, de modo que en su próximo inicio de sesión se le vuelva a preguntar por su preferencia de inicio de sesión y pueda realizar una nueva elección.





