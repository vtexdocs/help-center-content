---
title: 'Control de acceso'
id: 4rM3gyiWqtkim4Q8hOvLTC
status: DRAFT
createdAt: 2023-11-30T16:29:30.077Z
updatedAt: 2023-11-30T21:42:00.250Z
publishedAt: 
firstPublishedAt: 2023-11-30T21:40:59.550Z
contentType: tutorial
productTeam: Identity
author: 1malnhMX0vPThsaJaZMYm2
slugEN: access-control
locale: es
legacySlug: control-de-acceso
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

## Más información

* [Roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc)
* [Crear nuevo rol](https://help.vtex.com/pt/tutorial/crear-nuevo-rol--qGtNQpKSSAduX94l2WZBW)
