---
title: 'Gestión de organizaciones B2B'
id: 1UwNCWhML3BsV6anpoUvVZ
status: PUBLISHED
createdAt: 2024-06-12T17:24:48.991Z
updatedAt: 2024-06-12T17:36:48.744Z
publishedAt: 2024-06-12T17:36:48.744Z
firstPublishedAt: 2024-06-12T17:36:48.744Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: managing-b2b-organizations
legacySlug: gestion-de-organizaciones-b2b
locale: es
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---


La aplicación **B2B Organizations** permite agrupar a los usuarios B2B en organizaciones. Pueden asignarse a cada organización medios de pago específicos, tablas de precios y colecciones de productos, lo que permite que todos los usuarios de la organización compartan las mismas condiciones comerciales. Cada organización está segmentada en uno o varios centros de costos, con sus propias direcciones de envío.

## Acceso a la organización compradora

Accede a la organización compradora desde el Admin VTEX, en **Apps > Organizaciones y Centros de costos B2B > Organizaciones** o ingresa **Organizaciones** en la barra de búsqueda de la parte superior de la página.

Para acceder a la organización, sigue estos pasos:

1. Haz clic en la pestaña **Organizaciones**.

2. Haz clic en el nombre de la organización compradora.

En esta sección se incluye una lista de todas las organizaciones creadas en tu tienda y sus respectivos status, y permite a los administradores de la tienda:

- Agregar nuevas organizaciones.

- Acceder a la página de detalles de la organización, que incluye datos de la organización, centros de costos, colecciones, condiciones de pago, tablas de precios y usuarios.

## Status de las organizaciones

La pestaña **Status de las organizaciones** permite ver y monitorear el status de las solicitudes de registro de las organizaciones.

Puedes utilizar la barra de búsqueda para encontrar una organización por nombre o filtrar las organizaciones por status.

Los status son los siguientes:

- **Activo:** la organización ha sido aprobada por los administradores de la tienda y está actualmente activa.

- **En espera:** la organización está actualmente en pausa, lo que significa que sus usuarios no pueden completar compras en este momento.

- **Inactivo:** la organización ha sido desactivada por los administradores de la tienda, por lo que sus usuarios no podrán iniciar sesión.

![Status- ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/organizaciones-b2b/gestion-de-organizaciones-b2b_1.gif)

## Agregar una nueva organización 

Para agregar una nueva organización accede al Admin VTEX, Apps > Organizaciones y Centros de costos B2B > Organizaciones o ingresa Organizaciones en la barra de búsqueda de la parte superior de la página y sigue los pasos a continuación:

1. Haz clic en la pestaña Organizaciones.

2. Haz clic en el botón `Nuevo` y selecciona la opción Agregar individualmente.

3. Rellena la información requerida sobre la nueva organización:
    - **Nombre de la organización:** nombre de la organización que deseas crear.
    - **Nombre del centro de costos:** nombre del centro de costos inicial asociado a la organización.
    - **País:** país donde se encuentra el centro de costos.
    - **Código postal:** código postal del centro de costos.
    - **Dirección:** nombre de la calle donde se ubica el centro de costos.
    - **Número:** número de la dirección donde se encuentra el centro de costos.
    - **Información adicional:** información que puede complementar la dirección del centro de costos.
    - **Barrio:** nombre del barrio donde se ubica el centro de costos.
    - **Ciudad:** ciudad donde se encuentra el centro de costos. Se rellena automáticamente en función del código postal informado.
    - **Estado:** estado donde se encuentra el centro de costos. Se rellena automáticamente en función del código postal informado.
    - **Destinatario:** nombre de la persona que recibirá los pedidos en la dirección informada.
4. Haz clic en el botón `Agregar`.

![Adiconar organização- ES](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/b2b/organizaciones-b2b/gestion-de-organizaciones-b2b_2.gif)

## Notificaciones por email

La aplicación **B2B Organizations** proporciona un conjunto de plantillas de emails para enviar a los usuarios de la organización, que se activan automáticamente en función de cambios específicos.

| Nombre de la plantilla      | Destinatario                          | Activación                                                     |
|-----------------------------|---------------------------------------|----------------------------------------------------------------|
| Organization created        | Usuario con rol de Sales Admin        | Cuando se crea la organización.                                |
| Organization approved       | Usuario con rol de Organization Admin | Cuando se aprueba la solicitud de creación de la organización. |
| Organization declined       | Usuario con rol de Organization Admin | Cuando se rechaza la solicitud de creación de la organización. |
| Organization status changed | Usuario con rol de Organization Admin | Cuando el status de la organización cambia.                    |

Para ver o personalizar cualquiera de estas plantillas, sigue los pasos que se indican a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Plantillas de email > Plantillas**.

2. En la barra de búsqueda, ingresa Organizaciones.

3. Haz clic en el modelo que deseas ver o editar.

4. Realiza los cambios deseados en el modelo.

5. Haz clic en `Guardar`.

Para más información sobre la edición de plantillas de email, consulta nuestro artículo[Crear o editar plantillas de email transaccional](/es/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/335JZKUYgvYlGOJgvJYxRO).
