---
title: 'Registrar proveedores de pagos y antifraude'
id: tutorials_444
status: PUBLISHED
createdAt: 2017-04-27T22:05:18.209Z
updatedAt: 2024-01-22T20:37:11.273Z
publishedAt: 2024-01-22T20:37:11.273Z
firstPublishedAt: 2017-04-27T23:03:24.823Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: afiliaciones-de-gateway
locale: es
legacySlug: afiliaciones-de-gateway
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

En VTEX puedes configurar diversos proveedores como gateways, adquirentes, subadquirentes, [orquestadores](https://www.y.uno/en) o [PSP](https://en.wikipedia.org/wiki/Payment_service_provider) que te permiten ofrecer diferentes medios y condiciones de pago a tus clientes, así como servicios de protección antifraude. Antes, estas configuraciones eran conocidas como "afiliaciones de gateway" en nuestro sistema.

En la página de gestión de proveedores puedes:

- [Registrar un nuevo proveedor](#registrar-proveedor)
- [Ver los provedores registrados](#ver-proveedores-registrados)
- [Editar la configuración de proveedores](#editar-configuracion-de-un-proveedor)  
![interface_provedor_ES_1](https://images.ctfassets.net/alneenqid6w5/6721j5gbs4JkxAFJ9QPQve/776404f95b88a2baef59270471016a6d/interface_provedor_ES_1.JPG)

## Registrar proveedor

Para agregar un nuevo proveedor de pago o antifraude a tu tienda, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pagos > Proveedores__ o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Nuevo proveedor`.
3. Haz clic en el proveedor de pago de tu preferencia.
4. Rellena los campos __Clave de aplicación__ y __Token de aplicación__ con la información indicada por el proveedor de pagos.
5. Si aparece un mensaje de alerta que diga que se debe instalar la aplicación, haz clic en el botón __Instalar aplicación__ y sigue las instrucciones de instalación. El mensaje solo se muestra en algunos tipos de proveedores de gateway.
6. Haz clic en `Guardar`.

>ℹ️ Si hay otros campos que rellenar además de Clave de aplicación y Token de aplicación (paso 6), la configuración del proveedor de gateway se debe llevar a cabo siguiendo el tutorial correspondiente. Para más información, consulta la subsección [Configuración de Pagos](https://help.vtex.com/es/subcategory/configuracion-de-pagos--3tDGibM2tqMyqIyukqmmMw).

>❗ Las credenciales utilizadas para rellenar los campos Clave de aplicación y Token de aplicación las debe informar el proveedor de pago para identificar la tienda. No se deben utilizar las credenciales [generadas en el Admin](https://help.vtex.com/es/tutorial/claves-de-aplicacion--2iffYzlvvz4BDMr6WGUtet), que empiezan por `vtexappkey-`.

Para configurar los medios de pago que el proveedor escogido procesará, accede a [Configurar condiciones de pago](https://help.vtex.com/es/tutorial/condiciones-de-pago--tutorials_455). 

Para definir condiciones especiales para los medios de pago, accede a [Configurar condiciones especiales de Pago](https://help.vtex.com/es/tutorial/condiciones-especiales--tutorials_456).

![interface_provedor_ES_2](https://images.ctfassets.net/alneenqid6w5/2uzCrSICV4zlbieq13Vky0/eb61a668aee146f72207b08ff3f93b3a/artigo_interface_provedor_ES_2.JPG)

## Ver proveedores registrados

La pantalla principal de gestión de proveedores, disponible en __Configuración de la tienda > Pagos > Proveedores__ en el Admin VTEX, muestra todos los proveedores de pago o antifraude registrados en la tienda. Para acceder rápidamente a la información de proveedores específicos, puedes realizar una búsqueda o utilizar un filtro.

### Buscar proveedores

Para buscar proveedores por nombre, accede a la página de gestión de proveedores e ingresa el nombre del proveedor deseado.

![interface_provedor_ES_3](https://images.ctfassets.net/alneenqid6w5/1AVxMc8gzpBLTaoOM3DqJt/f8ab3035ab037e74c6b08e5f4054f686/interface_provedor_ES_3.JPG)

### Filtrar proveedores

Para cambiar la lista de proveedores usando filtros, accede a la página de gestión de proveedores y aplica uno o más de los filtros indicados a continuación, según el resultado deseado.

- __Nombre__: filtra la lista de proveedores de pago por el nombre al marcar la casilla o ingresándolo en la barra de búsqueda del menú.

![interface_provedor_ES_4](https://images.ctfassets.net/alneenqid6w5/3HWuAtg2Ei867PMhqqXTpZ/966cf9c4d726bb4e3fe3f140b4205472/interface_provedor_ES_4.JPG)

- __Tipo__: filtra la lista de proveedores por tipo, ya sea antifraude o de pago, o ambos.

![interface_provedor_ES_5](https://images.ctfassets.net/alneenqid6w5/34wou6AALCHGCAMSufWpxZ/76411e11c78028aac232b9b8d8a79534/interface_provedor_ES_5.JPG)

- __Entorno__: filtra la lista de proveedores por tipo de entorno de operación registrado (producción o prueba).

![interface_provedor_ES_6](https://images.ctfassets.net/alneenqid6w5/36BloW94uLYLN7qGFO1HeP/5aae0659cf9128a58fe3ce02d03a6023/interface_provedor_ES_6.JPG)

>❗ Para remover los filtros aplicados y ver todos los proveedores registrados en la tienda, haz clic en el botón `Limpiar todo`.

## Editar configuración de un proveedor

Para editar la configuración de un proveedor de pago o antifraude registrado en la tienda, sigue los pasos a continuación:

1. En el Admin VTEX, accede a __Configuración de la tienda > Pagos > Proveedores__ o ingresa __Proveedores__ en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el proveedor de pago o antifraude deseado.
3. En la pantalla de configuración del proveedor, haz clic en `Editar`.
4. Realiza los cambios necesarios y haz clic en `Guardar`.

![interface_provedor_ES_7](https://images.ctfassets.net/alneenqid6w5/49bqIpjzfjB6VGrjwMiYEK/4931462bfe35657876f4a5e6c63d5386/artigo_interface_provedor_ES_7.JPG)

>❗ Antes de editar la configuración de un proveedor, como datos de autorización, modo de procesamiento o tipo de reembolso, asegúrate de verificar que la nueva información no afecte el rendimiento operativo de la tienda.
