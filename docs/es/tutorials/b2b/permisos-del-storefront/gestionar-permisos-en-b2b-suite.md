---
title: 'Gestionar permisos en B2B Suite'
id: 2PLR7mIFxgbmsGq84paLeA
status: PUBLISHED
createdAt: 2024-06-05T18:01:03.375Z
updatedAt: 2024-06-07T13:37:21.121Z
publishedAt: 2024-06-07T13:37:21.121Z
firstPublishedAt: 2024-06-06T10:57:21.290Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: permissions-management-in-b2b-suite
legacySlug: gestionar-permisos-en-b2b-suite
locale: es
subcategoryId: 1qGLxbxcX8kwKSWESbLZca
---

En una organización, el Organization Admin (usuario principal) gestiona el acceso de diferentes personas en una tienda B2B utilizando el sistema de permisos de B2B Suite.

Esta aplicación permite:

- **Configuración inicial:** el administrador establece las características de los roles predefinidos y los permisos asociados a los mismos.

- **Asociación de roles y permisos:** los roles predefinidos se asocian a las diferentes funciones y responsabilidades dentro de la organización. Cada rol tiene sus propios permisos específicos.

- **Sincronización automática de la información:** la aplicación se comunica automáticamente con otras aplicaciones de B2B Suite, como [B2B Organizations](https://developers.vtex.com/docs/apps/vtex.b2b-organizations), para habilitar diferentes funciones de gestión de organización según el rol de cada usuario.

- **Verificación de permisos:** cuando un usuario realiza una acción en la tienda, como realizar un pedido o acceder a una determinada funcionalidad, la aplicación comprueba si ese usuario tiene los permisos necesarios para llevar a cabo esa acción en función del rol que se le haya asignado previamente.

- **Gestión de permisos:** la aplicación opera en segundo plano (background), almacenando los roles predefinidos.

## Roles y permisos

La aplicación Storefront Permissions permite que cada usuario dentro de una organización pueda tener roles distintos, como el de comprador, quien realiza pedidos dentro de límites presupuestarios establecidos para un centro de costos específico, o el de gestor, encargado de revisar y aprobar pedidos. Estos roles pueden estar asociados a múltiples permisos, dependiendo de las acciones que el usuario necesite desempeñar.

Roles

La siguiente tabla muestra los roles disponibles, sus claves y descripciones.

| Rol                   | Clave                | Descripción                                                                                                                                                                                    |
|-----------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Store Admin           | store-admin          | Usuario administrador que accede al Admin VTEX y gestiona la tienda.                                                                                                                           |
| Sales Admin           | sales-admin          | Usuario administrador que puede gestionar todos los usuarios de ventas.                                                                                                                        |
| Sales Manager         | sales-manager        | Usuario gerente de ventas que puede gestionar usuarios de ventas de la misma organización, así como asistir a compradores y simular compras en una tienda.                                     |
| Sales Representative  | sales-representative | Usuario representante que puede ayudar en las compras o simular compras en una tienda.                                                                                                         |
| Organization Admin    | customer-admin       | Usuario principal de la organización que gestiona la información de la empresa, así como sus miembros y centros de costos.                                                                     |
| Organization Approver | customer-approver    | Usuario de la organización que puede recuperar un carrito o cotización previamente guardada por un comprador de la organización y crear un nuevo pedido.                                       |
| Organization Buyer    | customer-buyer       | Usuario de la organización que puede agregar ítems al carrito. Si la aplicación [B2B Quotes & Carts](https://developers.vtex.com/docs/apps/vtex.b2b-quotes) está instalada, también puede guardar el carrito para un uso futuro o crear una cotización. |

## Configuración o gestión de roles

Para gestionar roles y permisos de aplicaciones, configura los permisos siguiendo los pasos que se indican a continuación en la interfaz Permisos del storefront.

1. Accede al Admin VTEX > Apps > Apps Instaladas > Permisos del storefront, o ingresa Permisos del storefront en la barra de búsqueda de la parte superior de la página.

2. Haz clic en uno de los roles disponibles.

3. Haz clic en una de las aplicaciones de la lista.

4. Selecciona los permisos que deseas activar para ese rol.

5. Haz clic en `Guardar`.

![Gerenciamento de permissões - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/permisos-del-storefront/gestionar-permisos-en-b2b-suite_1.gif)

Después de asociar los perfiles con los roles deseados, puedes atribuir funciones a los usuarios. Para más información, consulta [B2B Organizations](https://developers.vtex.com/docs/guides/vtex-b2b-organizations#users).
