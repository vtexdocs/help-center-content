---
title: 'Buenas prácticas de gestión de acceso para tiendas'
id: MKR5OuTTAn90UTMcrHHsr
status: PUBLISHED
createdAt: 2025-03-19T16:20:54.370Z
updatedAt: 2025-03-19T16:22:33.155Z
publishedAt: 2025-03-19T16:22:33.155Z
firstPublishedAt: 2025-03-19T16:22:33.155Z
contentType: tutorial
productTeam: Others
author: 1malnhMX0vPThsaJaZMYm2
slugEN: best-practices-for-store-access-management
legacySlug: buenas-practicas-de-gestion-de-acceso-para-tiendas
locale: es
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Gestionar correctamente el acceso a tu tienda es esencial para garantizar la seguridad y la continuidad operativa. Es necesario tener cuidado en la gestión de los permisos de los usuarios para evitar riesgos y garantizar que cada usuario tenga solamente los accesos necesarios para realizar sus funciones.

Permitir que varios usuarios accedan a tu tienda puede ser práctico, pero una gestión inadecuada de los permisos puede traer graves consecuencias para tu operación, como pérdidas de datos, fallos en los procesos, interrupciones en las integraciones e impacto en las ventas.

Para evitar estos riesgos, sigue estas buenas prácticas para la gestión de accesos y mantén tu tienda protegida.

## Restringir el uso del rol Admin Super

El [rol Admin Super](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) permite realizar cambios críticos en la tienda, por lo que debe limitarse su uso al menor número posible de usuarios. Es importante restringir el número de usuarios que pueden conceder o retirar permisos.

## Revisar con frecuencia los permisos de usuario y las claves de API

Revisa por lo menos una vez al año los [roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) de usuarios administrativos de tu tienda y claves de API. Este proceso garantiza que solo los usuarios y las claves necesarias conserven sus permisos de acceso.

Adopta el **principio de privilegio mínimo**, que consiste en otorgar a cada usuario o clave solo los permisos estrictamente necesarios para ejecutar sus funciones. Esto disminuye el riesgo de accesos no autorizados y reduce el impacto de errores operativos o acciones malintencionadas. 

La segregación de funciones contribuye a un entorno más seguro, permitiendo que cada usuario o clave tenga los permisos compatibles con su función en la organización.

Crea diferentes roles, con accesos compatibles con los permisos necesarios para cada función. Para aprender a crear roles personalizados, consulta el artículo [Crear nuevo rol](https://help.vtex.com/es/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW#rol-personalizado).

## Utilizar el inicio de sesión único (SSO)

El [inicio de sesión único (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide) para autenticación simplifica la gestión de accesos, permitiendo automatizar la concesión y revocación de permisos de acuerdo con los cambios en la estructura del personal de la empresa.

## Utilizar emails corporativos siempre que sea posible

No registres emails personales de dominios genéricos en el Admin (`@gmail` o `@hotmail`, por ejemplo). Utiliza emails corporativos, que al estar sujetos a las políticas de autenticación de la empresa, ofrecen mayor control y seguridad.

## Evitar el uso compartido de cuentas de emails genéricos

Evita el uso de cuentas compartidas, como un email genérico cuyas credenciales se comparten entre varios usuarios. Por ejemplo, no utilices `admin@empresa.com`: opta por `juana@empresa.com`, un email con acceso exclusivo para cada empleado. Cada usuario debe tener una cuenta en el Admin, con permisos configurados conforme a su nivel de acceso.

Las cuentas compartidas dificultan el uso de la autenticación multifactor (MFA), una capa adicional de seguridad altamente recomendada. El MFA exige una confirmación por parte del usuario, ya que la cuenta se vincula a una persona o dispositivo. El MFA puede activarse para cada usuario sin que se vea afectado el acceso utilizando cuentas y roles segregados. Consulta cómo activar el MFA en el artículo [Habilitar inicio de sesión por autenticación de dos factores](https://help.vtex.com/es/tutorial/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores--4Ae1fcQi12g8u4SkQKCqWQ).

## Definir un usuario titular responsable de la seguridad de la cuenta

Asigna el [usuario titular](https://help.vtex.com/es/tutorial/que-es-el-usuario-titular--3oPr7YuIkEYqUGmEqIMSEy) únicamente a personas con responsabilidad directa en la gestión de accesos, es decir, encargadas de verificar de forma constante la creación y modificación de usuarios. La persona encargada debe revisar regularmente los permisos y garantizar que solo usuarios autorizados mantengan accesos.

## Exigir verificación en dos pasos (2FA) para iniciar sesión con Google

Si la tienda permite el inicio de sesión a través de Google, exige la verificación en dos pasos (2FA). Esta capa adicional de seguridad reduce significativamente los riesgos de accesos no autorizados. Consulta el artículo [Habilitar inicio de sesión por verificación en dos pasos](https://help.vtex.com/es/tutorial/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores--4Ae1fcQi12g8u4SkQKCqWQ)) para saber cómo activar este recurso.

## Más información

* [Control de acceso](https://help.vtex.com/es/subcategory/control-de-acceso--1HSqkejwuYcQSMC400uY84)  
* [Roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)  
* [Login (SSO)](https://developers.vtex.com/docs/guides/login-integration-guide)   
* [Habilitar inicio de sesión por autenticación de dos factores](https://help.vtex.com/es/tutorial/habilitar-inicio-de-sesion-por-autenticacion-de-2-factores--4Ae1fcQi12g8u4SkQKCqWQ))
