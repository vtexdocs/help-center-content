---
title: 'Registrar proveedores de pago y antifraude'
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2026-10-15T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: registering-gateway-affiliations
locale: es
hidden: false
---

En VTEX puedes configurar diversos tipos de proveedores, como gateways, adquirentes, subadquirentes, orquestadores y proveedores de servicios de pago (PSPs), que permiten ofrecer diferentes medios y condiciones de pago a tus clientes, además de servicios de protección antifraude. Antes, estas configuraciones eran conocidas como "afiliaciones de gateway" en nuestro sistema.

> ℹ️ Para más detalles sobre las funciones de cada entidad involucrada en las operaciones de pago consulta [Agentes financieros en el flujo de pago](/es/docs/tutorials/agentes-financieros-en-el-flujo-de-pago).

En la página de gestión de proveedores puedes:

- [Registrar un nuevo proveedor](#registrar-proveedor)
- [Ver proveedores registrados](#ver-proveedores-registrados)
- [Editar configuración de proveedores](#editar-configuracion-de-proveedores)

![interface_provedor_ES_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/proveedores-de-pago/afiliaciones-de-gateway_1.JPG)

## Registrar proveedor

Para agregar un nuevo proveedor de pago o de antifraude a tu tienda sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores** o ingresa **Proveedores** en la barra de búsqueda en la parte superior de la página.

2. Haz clic en `Nuevo proveedor`.

3. Ingresa el nombre del proveedor de pago o de antifraude deseado en la barra de búsqueda y haz clic en él.

4. Llena los campos **Clave de aplicación** y **Token de aplicación** con la información indicada por el proveedor de pago.

   > ⚠️ En algunos conectores se mostrará un mensaje que solicita la instalación de la aplicación. Si se muestra haz clic en `Instalar aplicación` y sigue las instrucciones.

5. Haz clic en `Guardar`.

> ℹ️ Algunos proveedores requieren otros campos además de la **Clave de aplicación** y el **Token de aplicación** (paso 4) o la instalación de una aplicación. En estos casos, configura el proveedor según el tutorial específico, disponible en la [Lista de proveedores de pago por país](/es/docs/tutorials/lista-de-proveedores-de-pago-por-pais).

> ❗ Las credenciales utilizadas para llenar los campos **Clave de aplicación** y **Token de aplicación** las debe informar el proveedor de pago para identificar la tienda. No se deben utilizar las [credenciales generadas en el Admin](/es/docs/tutorials/claves-de-api), que empiezan por `vtexappkey-`.

Al guardar, el proveedor se muestra en la pantalla de gestión de proveedores. Luego debes definir en [Condiciones de pago](/es/docs/tutorials/condiciones-de-pago) los medios de pago que se van a procesar y, si es necesario, configura [condiciones especiales](/es/docs/tutorials/condiciones-especiales) para esos medios.

![interface_provedor_ES_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/proveedores-de-pago/afiliaciones-de-gateway_2.JPG)

## Ver proveedores registrados

La pantalla principal de gestión de proveedores, disponible en el Admin VTEX en **Configuración de la tienda > Pago > Proveedores**, muestra todos los proveedores de pago o de antifraude registrados en una tienda. Para acceder rápidamente a un proveedor específico puedes buscarlo por nombre o aplicar filtros.

### Buscar proveedores

Para buscar proveedores por nombre, accede a la página de gestión de proveedores e ingresa el nombre del proveedor deseado.

![interface_provedor_ES_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/proveedores-de-pago/afiliaciones-de-gateway_3.JPG)

### Filtrar proveedores

Para filtrar la lista de proveedores accede a la página de gestión de proveedores y aplica uno o más de los filtros indicados a continuación, según el resultado deseado.

- **Tipo**: selecciona la vista de proveedores de pago, proveedores de antifraude o ambos.

![interface_provedor_ES_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/proveedores-de-pago/afiliaciones-de-gateway_5.JPG)

- **Entorno**: selecciona la vista de proveedores por tipo de entorno de operación registrado (producción o prueba).

![interface_provedor_ES_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/proveedores-de-pago/afiliaciones-de-gateway_6.JPG)

> ❗ Para remover los filtros aplicados y ver todos los proveedores registrados en la tienda haz clic en el botón `Limpiar todo`.

## Editar configuración de proveedores

Para editar la configuración de un proveedor de pago o de antifraude registrado en la tienda sigue los pasos a continuación:

1. En el Admin VTEX accede a **Configuración de la tienda > Pago > Proveedores**, o ingresa **Proveedores** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el proveedor de pago o de antifraude deseado.
3. En la pantalla de configuración del proveedor haz clic en `Editar`.
4. Realiza los cambios necesarios y haz clic en `Guardar`.

![interface_provedor_ES_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/proveedores-de-pago/afiliaciones-de-gateway_7.JPG)

> ❗ Los cambios en la configuración, como las credenciales de **Clave de aplicación** y **Token de aplicación**, el modo de procesamiento, el tipo de reembolso o la opción **Activar modo de prueba**, afectan los pagos que el proveedor procesa en la tienda. Antes de guardar, confirma con el proveedor que la nueva información es correcta.
