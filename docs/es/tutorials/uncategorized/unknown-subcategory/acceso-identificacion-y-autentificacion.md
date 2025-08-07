---
title: 'Acceso, identificación y autentificación'
id: 1b4FKvA5KxN7kwBLfmZbUe
status: DRAFT
createdAt: 2022-05-26T13:40:23.357Z
updatedAt: 2022-05-26T13:42:14.099Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: access-identification-and-authentication
legacySlug: acceso-identificacion-y-autentificacion
locale: es
subcategoryId: 
---

Vea el [FAQ de seguridad]() completo.
## ¿Tiene VTEX una política de gestión de accesos lógicos? Describir en términos generales cómo funcionan sus procesos de gestión de acceso.

VTEX controla y monitorea constantemente el acceso a los entornos de producción. 
Esta política se alinea a nuestra práctica del principio de mínimo privilegio y la segregación de funciones, donde el acceso se concede con base en una necesidad legítima. Además, adoptamos procesos periódicos de revisión de acceso y perfiles. 
Cada vez que se produce una desvinculación laboral, nuestro proceso de revocación se activa de forma oportuna. 

## ¿Tiene VTEX una política de contraseñas? En caso afirmativo, ¿cuáles son los criterios considerados?

Adoptamos configuraciones seguras y una política de contraseñas robusta para el acceso a nuestros sistemas, como el número mínimo de caracteres y caracteres especiales, la periodicidad del cambio de contraseñas, la no utilización de contraseñas anteriores, el control y la inactividad de la sesión. Se presenta un ejemplo a continuación. 
- Longitud mínima de dieciséis caracteres.
- Deben estar formadas por una combinación de letras, mayúsculas y minúsculas, números y caracteres especiales (%, #, $, @, &, entre otros).
- No deben utilizarse números o letras repetidos, en secuencia o formando series evidentes como: «aaaabbbb», «12345678», «asdfghjk».
- Se debe utilizar un cifrado complejo para que todas las credenciales de autenticación sean ilegibles durante la transmisión y el almacenamiento en todos los componentes del sistema.
- La opción de cambiar la contraseña en el primer acceso debe estar activada.
- No se debe reutilizar contraseñas utilizadas anteriormente.

## En su entorno corporativo, ¿cómo se operacionaliza el otorgamiento de acceso a los sistemas internos de VTEX?

El proceso de gestión de accesos (desde la concesión hasta la revocación) en el entorno corporativo pasa por una celda de trabajo centralizada responsable de definir las métricas de concesión de acceso. Dentro de la celda, hay grupos responsables de cada sistema de la empresa, por lo que un colaborador envía una solicitud a través de nuestro canal de atención y los responsables realizan una evaluación para entender el motivo de la solicitud y si ese empleado puede tener el acceso solicitado. El flujo del proceso pasa por varias etapas de autenticación y validación de la solicitud hasta que se concede el acceso. 

## ¿Limita el acceso de acuerdo con el principio de privilegio mínimo?

Sí, VTEX brinda acceso a nuestros entornos de producción (codificación, fusión e implementación de canalización, bases de datos e infraestructura de la nube de AWS) de acuerdo con el Principio de mínimo privilegio y segregación de funciones: el acceso se otorga y monitorea en función de la necesidad legítima. Además, adoptamos procesos periódicos de revisión de accesos y perfiles.

## ¿Cómo funciona el proceso de recuperación de contraseñas de la empresa?

De forma nativa, por email o por el número de celular. Utilizamos inicio de sesión por email, autenticación 2 FA, VPN, entre otros, para que solo las personas autorizadas tengan acceso a su trabajo.

