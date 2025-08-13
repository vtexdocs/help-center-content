---
title: 'Roles'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: PUBLISHED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2024-11-22T14:18:05.867Z
publishedAt: 2024-11-22T14:18:05.867Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: roles
legacySlug: como-crear-perfil-de-acceso, perfiles-de-acceso
locale: es
subcategoryId: 1HSqkejwuYcQSMC400uY84
---


Cada acción en VTEX, como acceder a una página en el Admin o hacer una llamada de API, implica un request a nuestra infraestructura. Para garantizar la seguridad de estas operaciones, existe **License Manager**, el sistema encargado de comprobar si un usuario tiene los permisos adecuados para realizar una acción en la plataforma.

Para facilitar la gestión de estos permisos, License Manager se basa en [recursos](#recursos) y [roles](#roles). Consulta a continuación más información sobre estos conceptos.

## Recursos

Un **recurso** es una entidad asociada a una acción o información dentro de nuestra infraestructura. Por ejemplo, el recurso _Product management_ permite a un usuario acceder y editar el formulario de registro de productos en el Catálogo. Para obtener más detalles sobre cada recurso disponible consulta [Recursos de License Manager](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3).

Cada request pasa por un análisis de seguridad para comprobar que el usuario dispone de los recursos necesarios, es decir, del permiso necesario para llevar a cabo esa acción. Sin los recursos necesarios, el request no podrá completarse.

## Roles

Los **roles** determinan el conjunto de recursos a los que un grupo de usuarios puede acceder en VTEX. Cada usuario administrativo puede ser asociado a uno o varios roles.

Dado que al Admin suelen acceder múltiples colaboradores, es importante limitar el acceso a las acciones críticas dentro de una cuenta, para así minimizar disrupciones en la operación de la tienda y garantizar que cada usuario tenga acceso únicamente a las acciones necesarias para desempeñar su función.

Por ejemplo, un equipo de operadores de televentas solo necesita acceso a la información de los pedidos, por lo que no debería tener acceso a otros ajustes de la plataforma. En este caso, el rol solo debe contener recursos relacionados con la lectura de información de pedidos.

Para gestionar los roles registrados en tu tienda y los usuarios asociados a ellos, accede a la [lista de roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc).

Consulta a continuación los diferentes tipos de roles que puedes registrar en la tienda.

### Tipos de rol

Al [crear un nuevo rol](https://help.vtex.com/es/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW), tienes la opción de utilizar uno de los predefinidos que proporciona VTEX o crear uno personalizado, seleccionando cada recurso necesario.

El administrador necesita tener un rol con el [recurso](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) _Save access profile_ para crear roles en License Manager.

#### Predefinidos

Los roles predefinidos son conjuntos de recursos predeterminados por VTEX que cubren los casos de uso más comunes. Consulta la lista completa de [roles predefinidos](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy) y sus permisos asociados.

#### Personalizados

Además de utilizar roles predefinidos, puedes [crear roles personalizados](https://help.vtex.com/pt/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW#rol-personalizado) con los recursos necesarios para un grupo de usuarios administrativos de tu tienda.

Por ejemplo, un equipo encargado de mantener actualizado el catálogo de la tienda generalmente lleva a cabo un conjunto de tareas bien definidas, como registrar y editar productos, categorías y marcas. En este caso, un administrador de cuenta puede crear un rol personalizado con todos los recursos necesarios para estos colaboradores.

Consulta la lista completa de [recursos de License Manager](https://help.vtex.com/es/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) que se pueden utilizar.

## Gestionar roles

Los roles de acceso pueden ser gestionados a través del Admin VTEX.  Para acceder a esta sección, en la barra superior de VTEX Admin, haz clic en el **avatar de tu perfil**, marcado con la inicial de tu correo electrónico, y luego en **Configuración de la cuenta** > **Roles de usuario**.

![Lista roles](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/account-management/access-control/roles_1.png)

Esta pantalla muestra una lista de todos los roles registrados para la cuenta, que puede editar o eliminar desde la columna **Acciones**.

En una cuenta recién creada, apenas el rol de *Owner (Admin Super)* se listará. Este perfil da al usuario acceso sin restricciones a todos los recursos de la plataforma.

> ⚠️ La cantidad de usuarios con el rol *Owner (Admin Super)* debe ser la menor posible. Además, debe asegurarse de tener visibilidad y control sobre quién recibe este acceso. El uso sin restricciones de roles muy permisivos aumenta el riesgo de ataques en las tiendas por la fuga de credenciales de acceso.

## Crear roles

En el caso de los usuarios que no deben tener acceso sin restricciones a la plataforma, es importante crear roles que limiten los recursos disponibles solo a los estrictamente necesarios para aquel tipo de usuario. Para ello, consulte la guía [Crear nuevo rol](https://help.vtex.com/es/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW).

Puede crear un nuevo perfil basándose en los [roles predefinidos](https://help.vtex.com/es/tutorial/roles-de-usuario-predefinidos--jGDurZKJHvHJS13LnO7Dy) o de forma personalizada seleccionando los [recursos del License Manager](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) necesarios.

## Más información

* [Roles predefinidos](https://help.vtex.com/es/tutorial/perfis-de-acesso-predefinidos--jGDurZKJHvHJS13LnO7Dy)
* [Crear nuevo rol](https://help.vtex.com/pt/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW)
* [Recursos del License Manager](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3).

