---
title: 'Derechos de los titulares de datos personales'
id: 6imchxTx09icupKMbzHVIM
status: PUBLISHED
createdAt: 2023-04-26T18:56:45.938Z
updatedAt: 2026-08-24T13:58:46.000Z
publishedAt: 2023-06-22T21:47:26.569Z
firstPublishedAt: 2023-04-26T19:50:54.254Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: data-subject-rights
legacySlug: derechos-de-los-titulares-de-datos-personales
locale: es
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

Al realizar un pedido en una tienda virtual, el comprador debe ingresar sus datos personales para realizar el pago, envío, emisión de factura, inscripción en promociones, entre otras acciones. En este contexto, cada persona tiene derecho a conocer y decidir cómo se utilizan sus datos personales y el objetivo de dicho uso.

Es importante que conozcas los derechos de los titulares de datos y estés preparado para ayudar a tus clientes a ejercerlos.

En este artículo, aprenderás cómo cumplir con los siguientes derechos de los titulares de datos:
- [Acceso y portabilidad](#acceso-y-portabilidad).
- [Rectificación](#rectificacion).
- [Consentimiento](#consentimiento).
- [Eliminación](#eliminacion).

> ❗ VTEX no es responsable por datos personales que los sistemas integrados con tu tienda almacenen, tales como: ERP, marketplaces externos, sellers externos, aplicaciones de terceros disponibles en la [VTEX App Store](/es/docs/tutorials/vision-general-apps) o personalizaciones implementadas por tu equipo de desarrollo. Debes dar seguimiento a estos datos y garantizar que se apliquen los derechos de los titulares de datos personales en dichas instancias, además de aplicar los procesos descritos aquí.

## Acceso y portabilidad

El derecho de acceso permite a los clientes obtener una copia de sus datos personales almacenados por tu tienda. El derecho de portabilidad permite a los clientes solicitar la transferencia de sus datos personales a otro responsable del tratamiento.

Si recibes una solicitud de un cliente, puedes utilizar el Admin VTEX para acceder a los datos y exportarlos. De esta manera, puedes compartir la información con el cliente o transferirla a otro responsable del tratamiento de datos según sea el caso.

### Acceder y exportar datos de clientes

Al procesar una solicitud de acceso o portabilidad, es importante que garantices que has accedido a y exportado todos los datos referentes a la persona almacenados por tu tienda. Hay diferentes módulos en los que puedes ver la información y debes consultar todos los que se apliquen según la arquitectura de datos de tu tienda. A continuación, se detalla cómo consultar cada módulo.

#### Master Data v1

Puedes utilizar la [API de Master Data v1](https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search) o el Admin VTEX para acceder a y exportar los datos de clientes almacenados en [Master Data v1](/es/docs/tutorials/master-data).

Si deseas utilizar la API, tu equipo de desarrollo debe usar el [endpoint de búsqueda de Master Data v1](https://developers.vtex.com/docs/api-reference/masterdata-api#get-/api/dataentities/-acronym-/search) y buscar en las entidades de datos de clientes (**CL**), direcciones (**AD**) y cualquier otra que hayas configurado para recibir datos personales de tus clientes. Filtra y busca por email del cliente.

Para exportar datos de Master Data v1 a través del dashboard del Admin, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. Haz clic en la pestaña **Applications**.
3. Haz clic en el ícono de visualizar (derecha) de la entidad de datos deseada.
![Master Data botón](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/seguridad/seguridad-para-comerciantes/derechos-de-los-titulares-de-datos-personales_1.png)
4. Utiliza el [filtro de Master Data v1](/es/docs/tutorials/filtrar-datos-en-el-master-data) para obtener solo los datos del usuario deseado. Utiliza `email` o `User ID` como campo del filtro.
5. Haz clic en el botón `Export XLS`.
6. Selecciona la opción `Select all fields`.
7. Si lo deseas, cambia el email donde quieres recibir el informe.
8. Haz clic en el botón `Export`.

Repite estos pasos para las entidades de datos de clientes (**CL**), direcciones (**AD**) y cualquier otra que hayas configurado para recibir datos personales de los clientes.

> ℹ️ Aprende más sobre cómo [filtrar datos](/es/docs/tutorials/filtrar-datos-en-el-master-data) y [exportar datos](/es/docs/tutorials/exportacion-de-datos) en la interfaz de Master Data v1.

#### Master Data v2

Para obtener datos de clientes almacenados en Master Data v2, tu equipo de desarrollo debe utilizar la [API de búsqueda de Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/search) y buscar en las entidades de datos de clientes, direcciones y cualquier otra en la que hayas configurado recibir datos personales. Filtra y busca por email del cliente.

#### Gestión de pedidos

El módulo de gestión de pedidos de VTEX almacena el historial de pedidos de tus clientes. Esto significa que también puede contener datos personales. Para acceder al módulo y exportar el historial de pedidos de un cliente, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Pedidos > Todos los pedidos** o escribe **Todos los pedidos** en la barra de búsqueda en la parte superior de la página. 
2. Ingresa la dirección de email del cliente deseado en el campo de búsqueda.
3. Pulsa `Intro`.
4. Haz clic en el botón `Exportar` en la parte superior derecha de la pantalla.

Recibirás un informe con el historial de pedidos por email.

## Rectificación

El derecho de rectificación permite que los clientes soliciten cambios a sus datos personales cuando, por ejemplo, estén incorrectos o incompletos.

Tus clientes pueden ejercer su derecho de consentimiento y rectificación de datos personales a través de la página **Mi cuenta** disponible en tu tienda. En esta página, el cliente de tu tienda puede realizar acciones como:

- Ver el historial de sus pedidos.
- Ver y editar su información de registro.
- Ver y editar sus direcciones registradas.
- Ver y editar sus medios de pago registrados.

> ℹ️ Aprende más sobre la [página Mi Cuenta](/es/docs/tutorials/como-funciona-mi-cuenta).

## Consentimiento

> ℹ️ Las siguientes indicaciones reflejan prácticas comunes adoptadas por las tiendas VTEX, pero no sustituyen un análisis jurídico sobre la base legal aplicable a tu operación.

El derecho de consentimiento les proporciona a tus clientes la oportunidad de expresar la aceptación, usualmente documentada por una marca en una casilla, del tratamiento de sus datos y el objetivo de su uso.

El consentimiento es una de las bases legales previstas para el tratamiento de datos personales, pero no es la única aplicable a toda situación. Para finalidades como la ejecución de un pedido (nombre, dirección, forma de pago) o la emisión de una factura (nro. de identificación fiscal, ítems de la compra), pueden aplicarse otras bases legales, como la ejecución de un contrato o el cumplimiento de una obligación legal, según el análisis de tu operación.

Aun así, el consentimiento suele adoptarse como buena práctica en algunas funcionalidades de la tienda, descritas a continuación. Recomendamos que evalúes, con apoyo jurídico, cuál es la base legal más adecuada para cada finalidad de tratamiento de datos en tu tienda.

### Inscripción en el newsletter

Al finalizar una compra en el checkout VTEX, tus clientes pueden elegir suscribirse al newsletter de tu tienda. Si después desean cambiar su elección, pueden gestionar la inscripción en la sección [Mi cuenta](/es/docs/tutorials/como-funciona-mi-cuenta) de tu tienda en la pestaña **Perfil**. Esta es una opción nativa de las tiendas VTEX.

De ser necesario, tu equipo de desarrollo puede [ajustar directamente la opción de inscripción de un cliente específico](https://developers.vtex.com/docs/guides/newsletter-inclusion-master-data-v1) mediante la API de Master Data v1.

> ℹ️ Aprende más sobre la página Mi cuenta[7] . Observa también cómo tu equipo de desarrollo puede [ajustar directamente la inscripción de un cliente en el newsletter](https://developers.vtex.com/docs/guides/newsletter-inclusion-master-data-v1).

### Carrito abandonado

La plataforma VTEX permite [configurar una automatización de carrito abandonado](/es/docs/tutorials/configurar-carrito-abandonado). En otras palabras, se puede configurar el envío automático de emails a los clientes que hayan accedido a tu tienda y hayan agregado productos al carrito y terminado la sesión sin comprar.

Como buena práctica, recomendamos [configurar tu automatización de carrito abandonado](http://help.vtex.com/es/docs/tutorials/configurar-carrito-abandonado) para habilitar el envío de emails solo a clientes [inscritos en el newsletter de la tienda](#inscripcion-en-el-newsletter), es decir, clientes que tienen el campo `isNewsletterOptIn` configurado como `true` en la entidad **CL** de [Master Data v1](http://help.vtex.com/es/docs/tutorials/master-data). Esta configuración ayuda a alinear esta comunicación con una práctica de consentimiento, pero recomendamos evaluar con tu equipo jurídico cuál es la base legal más adecuada para esta finalidad en tu operación.

### Avísame

La función [Avísame](/es/docs/tutorials/configurar-la-opcion-avisame) permite que las personas se inscriban para recibir una notificación por email cuando un ítem de su interés vuelva a estar en stock.

Cualquier persona puede gestionar el consentimiento de [Avísame](/es/docs/tutorials/configurar-la-opcion-avisame) en la propia página del producto de interés.

### Guardar datos de perfil o pago al momento de una compra

El derecho de consentimiento permite que las personas realicen compras en tu tienda sin que la tienda almacene sus datos personales para uso futuro.

Ponte en contacto con tu equipo de desarrollo para proporcionar esta opción según la guía [Activar la opción de guardar datos del usuario](https://developers.vtex.com/docs/guides/enable-the-save-user-data-opt-in).

> ℹ️ Aprende más sobre la [automatización de carritos abandonados](/es/docs/tutorials/configurar-carrito-abandonado).

## Eliminación

El derecho de eliminación permite que los clientes soliciten la eliminación de sus datos personales de la plataforma.

Si un cliente solicita la eliminación de sus datos de tu tienda, puedes cumplir con este derecho siguiendo la guía [Eliminación de los datos de clientes](/es/docs/tutorials/eliminacion-de-los-datos-de-clientes).

