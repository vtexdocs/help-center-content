---
title: 'Exportar datos de organizaciones (B2B Suite)'
createdAt: '2026-08-10T12:00:00.000Z'
updatedAt: '2026-08-10T12:00:00.000Z'
contentType: tutorial
productTeam: B2B
slugEN: exporting-organizations-data
legacySlug: exportar-datos-de-organizaciones
locale: es
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

> ⚠️ Esta documentación aplica únicamente a B2B Suite.

La exportación de datos te permite descargar en plantillas la información de las organizaciones compradoras, centros de costos, direcciones y usuarios registrados en tu tienda. De esta forma, puedes auditar estas configuraciones en masa sin necesidad de revisar cada organización individualmente en el Admin VTEX. La exportación es útil, por ejemplo, para verificar si registraste los datos correctamente después de una [importación en masa](https://help.vtex.com/es/docs/tutorials/configurar-la-importacion-en-masa-de-datos-de-organizaciones-y-centros-custo).

## Antes de comenzar

La exportación de datos requiere que la aplicación [B2B Organizations](https://developers.vtex.com/docs/apps/vtex.b2b-organizations) esté actualizada a la versión más reciente.

> ⚠️ Solo los usuarios con permiso de acceso al menú **Organizaciones** pueden exportar datos. Más información en [Gestionar permisos en B2B Suite](https://help.vtex.com/es/docs/tutorials/gestionar-permisos-en-b2b-suite).

## Datos exportados

Al iniciar una exportación, elige cuáles de los cuatro tipos de datos deseas descargar:

- **Organizaciones:** las organizaciones compradoras registradas en la tienda y sus configuraciones, como status, colecciones, tablas de precios, condiciones de pago y políticas comerciales. Más información en [Gestión de organizaciones B2B](https://help.vtex.com/es/docs/tutorials/gestion-de-organizaciones-b2b).

- **Centros de costos:** las divisiones de cada organización compradora. Más información en [Gestión de centros de costos en B2B](https://help.vtex.com/es/docs/tutorials/gestion-de-centros-de-costos-en-b2b).

- **Usuarios:** las personas autorizadas a acceder a la plataforma en nombre de una organización. Más información en [Gestión de usuarios en organizaciones B2B](https://help.vtex.com/es/docs/tutorials/gestion-de-usuarios-en-organizaciones-b2b).

- **Direcciones:** las direcciones de envío asociadas a los centros de costos.

El sistema exporta los datos en formato XLSX y procesa por separado cada tipo de dato seleccionado. Además, permite descargar el archivo desde la ventana de exportación mediante la opción `Descargar archivo`.

No hay límite de registros por exportación. El tiempo de generación de los archivos depende del volumen de datos exportados.

## Instrucciones

Consulta a continuación una descripción general de los pasos a seguir para exportar los datos:

Exportar datos
Monitorear y descargar la exportación

### Exportar datos

Para exportar datos de organizaciones, centros de costos, direcciones y usuarios sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Apps > Organizaciones y centros de costos B2B > Organizaciones** o ingresa **Organizaciones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la pestaña **Organizaciones**.
3. Haz clic en `Nuevo` y selecciona la opción `Exportar`.
4. Marca las casillas de los tipos de datos que deseas exportar: `Organizaciones`, `Centros de costos`, `Usuarios` y `Direcciones`. Para exportar todos los tipos de datos, marca `Seleccionar todo`.
5. Haz clic en `Exportar`.

### Monitorear y descargar la exportación

Después de iniciar la exportación, la ventana muestra una tabla con una fila para cada tipo de dato seleccionado, donde se indica el progreso de la exportación, el status y la acción disponible.

Cada fila de la tabla puede presentar uno de los siguientes status:

- **Generando...**: el sistema está generando el archivo.
- **Listo**: el archivo está listo y la acción `Descargar archivo` está disponible en la misma fila.

Cuando el sistema concluye la exportación, el Admin VTEX muestra el mensaje **Exportación completa. Descarga iniciada**. Para guardar el archivo de un tipo de dato, haz clic en `Descargar archivo` en la fila correspondiente. El sistema también envía un email con los archivos exportados, por lo que no necesitas mantener abierta la pestaña del Admin para descargarlos.

## Limitaciones

- Esta forma de exportación de datos está disponible solo para tiendas que utilizan B2B Suite.
- La exportación solo permite descargar los datos. Para crear nuevos registros en masa utiliza [Configurar la importación en masa de datos de organizaciones y centros de costos](https://help.vtex.com/es/docs/tutorials/configurar-la-importacion-en-masa-de-datos-de-organizaciones-y-centros-custo).

## Más información

Este tutorial presentó el proceso para exportar datos de organizaciones, centros de costos, usuarios y direcciones en B2B Suite. Para continuar configurando tu tienda, consulta los siguientes artículos:

- [Gestión de organizaciones B2B](https://help.vtex.com/es/docs/tutorials/gestion-de-organizaciones-b2b)
- [Configurar la importación en masa de datos de organizaciones y centros de costos](https://help.vtex.com/es/docs/tutorials/configurar-la-importacion-en-masa-de-datos-de-organizaciones-y-centros-custo)
- [Gestión de centros de costos en B2B](https://help.vtex.com/es/docs/tutorials/gestion-de-centros-de-costos-en-b2b)
- [Gestión de usuarios en organizaciones B2B](https://help.vtex.com/es/docs/tutorials/gestion-de-usuarios-en-organizaciones-b2b)
- [Gestionar permisos en B2B Suite](https://help.vtex.com/es/docs/tutorials/gestionar-permisos-en-b2b-suite)
- [B2B Suite - Información general](https://help.vtex.com/es/docs/tutorials/b2b-suite-vision-general)
