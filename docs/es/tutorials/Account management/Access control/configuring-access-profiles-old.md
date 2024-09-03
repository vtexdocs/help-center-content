---
title: 'Configurar perfiles de acceso'
id: tutorials_526
status: ARCHIVED
createdAt: 2017-04-27T22:02:22.057Z
updatedAt: 2021-03-23T22:52:05.757Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:28.800Z
contentType: tutorial
productTeam: Post-purchase
author: authors_4
slug: como-crear-perfil-de-acceso-old
locale: es
legacySlug: guia-para-crear-perfiles-de-usuario
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Para organizar los permisos de los usuarios que tienen acceso al ambiente administrativo de su tienda VTEX, el License Manager trabaja con perfiles de acceso.

Los perfiles de acceso definen las funciones que el usuario puede ver y/o cambiar dentro de cada módulo de la plataforma.

## Perfiles predeterminados

VTEX ya trae varios perfiles creados, que suelen satisfacer la mayoría de las necesidades, pero siempre es posible tener un perfil nuevo y totalmente personalizado.

Vea algunos perfiles útiles:

- __Admin Super:__ concede acceso a toda la tienda.
- __Admin Portal:__ concede acceso a los ambientes que permiten la edición del front-end (layout, HTML, CSS, JS y afines).
- __Admin - Página Inicial:__ acceso básico, para ver la página inicial del Admin. Es un perfil básico para todo usuario. Si un usuario no tiene este acceso, tendrá un mensaje de acceso denegado al acceder al Admin sin ser directamente por el enlace del módulo a que tiene acceso.
- __2- Televendas:__ permite solamente que el usuario acceda a la tienda y cierre compras como un cliente final. No puede acceder a ningún módulo del Admin.
- __Admin Televendas:__ permite que el usuario haga pedidos como televenta y acceda al OMS.
- __Admin Televendas - Sem totalizadores:__ lo mismo que el anterior, pero no permite que el usuario vea los totalizadores de pedidos en el OMS.
- __Financeiro:__ concede acceso al submódulo Financiero, dentro del License Manager, permitiendo ver boletos y NFs relativos al pago del servicio VTEX.
- __Webservice:__ permite que el usuario acceda a los métodos del webservice, necesarios para algunas integraciones (en general, con el catálogo).

>⚠️ **Atención**: los perfiles de televenta bloquean el acceso al módulo Catalog. Es decir, no pueden acceder al registro de productos, por ejemplo. Si es necesario acceder a este módulo, el usuario debe trabajar con dos logins diferentes.

## Creando nuevos perfiles

Si ninguno de los perfiles existentes le responde, usted puede crear nuevos perfiles.

1. En el menú lateral del nuevo Admin, haga clic en __Gestión de la cuenta__ y, a continuación, en __Perfiles de acceso__.
2. Haga clic en el botón __Nuevo Perfil__.
3. Rellene el __Nombre del perfil__.
4. En el campo __Elija un producto__, añada las aplicaciones pertinentes.
5. Seleccione, dentro de las aplicaciones añadidas, las funciones que tendrá este perfil.
6. Usted también puede agregar los correos electrónicos de los usuarios que estarán vinculados a este perfil de acceso.
7. Haga clic en el botón __Guardar__.

Hecho esto, basta [asociar el perfil a los usuarios](/es/tutorial/administrar-usuarios/).
