---
title: 'VTEX Insurance'
id: 2aF3SDIj5t2qGe3bWKCjLD
status: ARCHIVED
createdAt: 2023-05-23T20:15:25.639Z
updatedAt: 2024-01-11T20:01:57.317Z
publishedAt: 
firstPublishedAt: 2023-05-26T17:46:59.436Z
contentType: tutorial
productTeam: B2B
author: 5l3eEiSz8MpcppCxcnijGz
slugEN: vtex-insurance
locale: es
legacySlug: vtex-insurance
subcategoryId: unknown-subcategory
---

**VTEX Insurance** es una aplicación que permite al administrador de la tienda vincular los productos que vende con ofertas de seguros de la aseguradora partner [Assurant] (https://www.assurant.com.br/). Esta funcionalidad permite que tu tienda ofrezca a tu cliente un seguro personalizado, que le brinda protección financiera en caso de fallos o defectos en el producto o servicio adquirido. Al adquirir una garantía extendida, el consumidor puede optar por una capa adicional de seguridad. 

Una vez aprobado el pago, tu cliente recibirá un email de nuestro equipo de soporte con el documento del seguro adquirido. Este documento es el comprobante de que el producto está asegurado y contiene toda la información que describe el seguro contratado, así como las instrucciones para ponerse en contacto con la aseguradora.

Consulta en la siguiente tabla los tipos de seguros que ofrece VTEX Insurance.

Código   | Tipo de seguro
--------- | ------
EW | Garantía extendida
TH | Robo y hurto agravado
RQ | Robo y daño accidental
QA | Daño accidental

Para configurar VTEX Insurance en tu tienda, debes:

1. <a href="#prerrequisitos-para-vtex-insurance">Instalar la aplicacion VTEX Insurance.</a>
2. <a href="#preparar-el-catalogo">Preparar el catálogo de la tienda para incluir los tipos de seguros disponibles.</a>
3. <a href="#configurar-insurance">Configurar Insurance.</a>

## Prerrequisitos para VTEX Insurance
Para empezar a configurar VTEX Insurance sigue los pasos a continuación:

1. En el Admin VTEX, haz clic en **Configuración de la cuenta> Usuarios** o ingresa **Usuarios** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Nuevo`. 
Introduce el email de la tienda responsable de la instalación de VTEX Insurance en el campo **Email**.
En caso de que el email introducido no sea identificado, haz clic en `Agregar roles`. En esta página debes seleccionar un rol predeterminado como **Owner** o **Desarrollador** (en caso de que el perfil no exista, deberá crearse).
3. Haz clic en `Guardar`. 

El email registrado recibirá un mensaje de nuestro soporte con el acceso a la aplicación VTEX Insurance.

## Preparar el catálogo
Después de instalar VTEX Insurance, necesitas preparar el catálogo para incluir los planes de seguros y vincularlos a tus productos. Para realizar la configuración, sigue los pasos a continuación:

1. Registra [Assurant como un seller de tu tienda](https://help.vtex.com/es/tutorial/agregar-seller--tutorials_392).
2. [Crea una colección](https://help.vtex.com/es/tutorial/registrar-colecciones-beta--yJBHqNMViOAnnnq4fyOye) y agrupa un conjunto de productos a los que vincular los seguros. Es necesario crear una colección específica para cada tipo de seguro, ya que dicha colección se utilizará para definir en qué póliza se encuadran los productos.
3. [Crea un grupo de especificaciones (campos) en una categoría](https://help.vtex.com/es/tutorial/crear-grupo-de-especificaciones-en-una-categoria--tutorials_246) para incluir las garantías del fabricante en tu catálogo, como Garantía, por ejemplo. 
4. [Crea una especificación de producto](https://help.vtex.com/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106) con la información del seguro que deseas ofrecer, como por ejemplo, Garantía extendida.
5. Después de crear el campo **Garantía del fabricante**, establece el período de garantía deseado. En el campo **Valor predeterminado**, se recomienda el valor 12, que representa un rango de 12 meses.
6. [Crea una categoría]https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3UYjVS03JbleGPh0Ckpic1) específica para el producto del seguro. 
7. [Crea el producto](https://help.vtex.com/es/tutorial/productos-y-skus-beta--2ig7TmROlirWirZjFWZ3B) del seguro.
8. [Crea los SKU](https://help.vtex.com/es/tutorial/campos-de-registro-de-sku--21DDItuEQc6mseiW8EakcY) del seguro. Se recomienda crear más de tres SKU para cada seguro.![Valores Permitidos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)
9. [Vincula los SKU](https://help.vtex.com/es/tutorial/vinculos-de-sku--1SmrVgNwjJX17hdqwLa0TX) creados con el seller de Assurant.
10. [Vincula el seguro con el producto](https://help.vtex.com/es/tutorial/registrar-especificaciones-o-campos-de-producto--tutorials_106) deseado.

>ℹ️ Este proceso debe repetirse en todas las categorías y productos en los que se ofrezca algún tipo de seguro.

## Configurar Insurance

Una vez preparado el catálogo, los productos de tu tienda ya estarán vinculados con el seguro. En **Seguros** > **Configuración**, realizarás la configuración del registro de VTEX Insurance. 

Sigue los pasos a continuación para configurar la aplicación VTEX Insurance.

### Información de la empresa
![Insurance Configuration](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)
1. Rellena los siguientes campos:
- **Email**: email de la tienda
- **Nombre**: nombre de la tienda
- **Teléfono**: teléfono de la tienda
- **Valor del markup**: margen de beneficio a obtener. Debe rellenarse con el valor 0 (cero) 
- **Nombre de la calle**: calle de la tienda u oficina
- **Ciudad**: ciudad de la tienda u oficina
- **Estado o provincia**: dependiendo del país, estado o provincia donde se encuentra la tienda u oficina
- **Código postal**: código postal de la tienda u oficina
- **País**: país de la tienda u oficina
2. Haz clic en `Enviar`.

### Ítems vinculados a seguros
![Items Bound to Source Items](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

1. Selecciona los códigos que representan los tipos de seguro deseados para la colección creada. 

2. Vincula los SKU creados con los tipos del seguro: debes incluir el tipo de seguro seguido del SKU ID. Ejemplo: al vincular el tipo de seguro **Garantía extendida** (Código **EW**) con el SKU creado para ese mismo tipo de seguro (ID **357**), el vínculo se representará de la siguiente forma:EW|357** (sin espacios).
Si deseas vincular más de un tipo de seguro, como el de **Robo y hurto agravado** (Código **TH**) al SKU creado (ID **358**), vínculo **TH|358**, el campo se rellenará como sigue: **EW|357, TH|358**
3. Haz clic en `Enviar`.

### Nombre del campo de la garantía
![Warranty Field Name](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

1. En el campo de garantía del fabricante ingresa el nombre de la garantía utilizado en el catálogo.
2. Haz clic en `Enviar`.

### Configuración de anexos VTEX Insurance 
![Attachement Setup](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

1. [Crea un anexo](https://help.vtex.com/es/tutorial/registrar-un-anexo--7zHMUpuoQE4cAskqEUWScU) para Assurant con la información enviada por el equipo de soporte al contratar el servicio.

2. En **Seguros> Configuración**, haz clic en `Adjuntar anexo` en la sección **Seguros** **Configuración de anexos**.

3. En la página **Anexos**, haz clic en el botón `Editar` referente al anexo **assurant.seguro**.

4. Para cada elemento de la tabla, haz clic en `Editar` y elimina todos los valores del campo **Valores permitidos**.

5. Haz clic en `Guardar`.

### Configuración de precios manual

![Manual Pricing](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

1. [Activa la configuración de precios manual](https://help.vtex.com/es/tutorial/cambiar-el-precio-de-un-item-en-el-carrito-de-compras--7Cd37aCAmtL1qmoZJJvjNf) en tu tienda.
2. Haz clic en `Continuar`.

