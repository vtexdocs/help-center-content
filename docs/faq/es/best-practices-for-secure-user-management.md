---
title: 'Mejores prácticas de seguridad para gestión de usuarios'
id: 15YDwC9jGgqWi3rvcDaiGM
status: PUBLISHED
createdAt: 2019-09-13T18:00:13.670Z
updatedAt: 2021-12-10T02:40:08.930Z
publishedAt: 2021-12-10T02:40:08.930Z
firstPublishedAt: 2019-09-14T02:54:29.210Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: 1E4UkWguFZAXjkguvNHPIv
slug: mejores-practicas-de-seguridad-para-gestion-de-usuarios
legacySlug: metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja
---

Permitir que diversos usuarios accedan a la tienda puede brindar más practicidad. Sin embargo, es extremadamente importante tener precaución en la gestión de los permisos de estos usuarios. La mala gestión de los permisos de acceso a la tienda puede tener graves consecuencias para su operación. 

Los usuarios sin el debido entrenamiento o malintencionados con permiso de acceso a servicios críticos pueden causar una pérdida irreparable de datos, desajustes en las reglas de negocio, interrupción de integraciones, daño de plantillas y otros efectos nocivos que, en última instancia,  afectarán sus ventas.

Para evitar esto, separamos algunas orientaciones y buenas prácticas de gestión de usuarios que lo ayudarán a proteger su tienda. Siguiendo estos consejos, mantiene su tienda aún más segura.

## Revise con frecuencia todos los permisos de usuario

Se recomienda una revisión periódica de los [perfiles de acceso](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc) a la plataforma. Las prácticas del mercado sugieren __como mínimo una revisión anual__. Sin embargo, también se puede adoptar una frecuencia mayor. Algunas empresas, por ejemplo, hacen una revisión de los usuarios internos semestralmente. 

## Utilice login corporativo para facilitar la gestión de usuarios

El uso de [login corporativo (SSO)](https://developers.vtex.com/docs/login-integration-guide) para la autenticación tiende a facilitar la autorización y desautorización de usuarios en procesos vinculados a la admisión y despido de trabajadores.  

## Restringe el uso del perfil de acceso Super Admin

No conceda el [perfil de acceso Super Admin](https://help.vtex.com/es/tutorial/perfiles-de-acceso--7HKK5Uau2H6wxE1rH5oRbc#creando-un-perfil-de-acceso) a un gran número de usuarios. Este perfil de acceso tiene el poder para realizar alteraciones críticas en la tienda. Es importante restringir el número de usuarios que pueden conceder o retirar autorizaciones. Para cada uno de los usuarios, adopte el principio de "menor permiso necesario", evitando un número elevado de usuarios con acceso demasiado privilegiado.

## Utilice correos electrónicos corporativos siempre que sea posible

No registre correos electrónicos personales de dominios genéricos en la tienda (@gmail o @hotmail, por ejemplo). Prefiera correos electrónicos corporativos. Hay más control sobre estos dominios y están sujetos a las políticas de autenticación de la empresa, por eso son más seguros.

## Mantenga el usuário Master da conta con el responsable por la seguridad

Asigne el [usuario Titular](https://help.vtex.com/es/tutorial/que-es-el-usuario-master--3oPr7YuIkEYqUGmEqIMSEy) solo a alguien con papel real de verificar constantemente la creación y alteración de usuarios. Y asegúrese de que esta verificación realmente suceda.

## Activa 2FA al utilizar el login de Google

Ofrecer login por Google será mucho más seguro si la autenticación por dos factores es obligatoria. Evite permitir este tipo de acceso sin 2FA. Consulte la documentación para instrucciones acerca de cómo [habilitar autenticación de dos factores (2FA)](https://help.vtex.com/es/tracks/cuentas-y-permisos--5PxyAgZrtiYlaYZBTlhJ2A/1ccQYubR9DvRJ08RgO8JW8).

