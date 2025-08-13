---
title: 'Campo Código de vendedor en el Checkout'
id: 6hiRCXt5Cz250o7hBnN2Tp
status: PUBLISHED
createdAt: 2023-06-20T12:18:18.542Z
updatedAt: 2023-06-20T21:50:57.120Z
publishedAt: 2023-06-20T21:50:57.120Z
firstPublishedAt: 2023-06-20T15:04:21.346Z
contentType: tutorial
productTeam: Shopping
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: sales-associate-code-field-at-checkout
legacySlug: campo-codigo-de-vendedor-en-el-checkout
locale: es
subcategoryId: 
---

En VTEX, puedes crear un campo para registrar el código de vendedor en el Checkout. Este campo te permite:
- Asociar un determinado pedido de compra a un vendedor.
- Ofrecer descuentos exclusivos al consumidor.
- Gestionar el desempeño de tus vendedores, extrayendo datos como número de ventas o ticket promedio por vendedor y ranking para comisiones de ventas, entre otros.

> ⚠️ El campo **Código de vendedor** no sustituye el campo **Cupón de descuento** (que es nativo en la plataforma VTEX). Al realizar la configuración que se describe en este artículo, puedes utilizar los dos para ofrecer descuentos.

Para crear el campo y agregarlo a la pantalla del Checkout de tu tienda, debes completar tres pasos:

1. [Crear una nueva entidad de datos](#crear-una-nueva-entidad-de-datos)
2. [Crear una promoción Código de vendedor](#crear-una-promocion-codigo-de-vendedor)
3. [Personalizar la pantalla del Checkout](#personalizar-la-pantalla-del-checkout)

## Crear una nueva entidad de datos

El campo **Código de Vendedor** se debe registrar en [Master Data](https://help.vtex.com/es/tutorial/master-data--4otjBnR27u4WUIciQsmkAw) como una nueva entidad. Para crear la entidad de datos, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Master Data** o escribe **Master Data** en la barra de búsqueda en la parte superior de la página.
2. Crea una nueva [entidad de datos](https://help.vtex.com/es/tutorial/criando-entidade-de-dados--tutorials_1265#como-configurar) con el nombre *codigovendedor*.
3. Dentro da nova entidade de dados, crie os seguintes campos:
    - **Código do vendedor**: código con un valor máximo de 10 caracteres (tipo Varchar10).
    - **Email**: dirección de email del vendedor (tipo Email).
    - **Nombre**: nombre del vendedor (tipo Text).
    - **Status**: indica si el vendedor está activo o inactivo (tipo Boolean).
    - **Tienda**: identificación de la tienda en la que el vendedor trabaja (tipo Text).
    - Otros campos (según sea necesario).

<blockquote><ui>4. Registra la información de cada vendedor en los campos creados en el paso anterior.</ui>

<blockquote><ui>5. Crea un [formulario](https://help.vtex.com/es/tutorial/creando-formulario-en-master-data--tutorials_1047) para acceder a la información de la nueva entidad *codigovendedor* a través de la interfaz de Master Data.</ui>

## Crear una promoción Código de vendedor

Después de crear la entidad *codigovendedor*, debes asociarla a una promoción. Para crear una promoción, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Promociones > Promociones**, o escribe **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Crea una nueva [promoción regular](https://help.vtex.com/es/tracks/promociones--6asfF1vFYiZgTQtOzwJchR/2a2D0K85Ahvs4hLnL3Ag7N). Rellena la información de **Resumen de la promoción** y **¿A qué ítems se aplicará esta promoción?** según lo desees.

> ℹ️ Si deseas utilizar el campo Código de vendedor para ofrecer un descuento en el valor de la compra, rellena la información de **¿Cuál es el tipo y valor del descuento?**.

<blockquote><ui>3. En **¿Cuáles son las condiciones para que la promoción sea válida?**, haz clic en la opción **utm_campaign** e ingresa *codigovendedor* en el campo.</ui>

![utm campaign codigovendedor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/uncategorized/unknown-subcategory/campo-codigo-de-vendedor-en-el-checkout_1.PNG)

<blockquote><ui>4. En **Restricciones y limitaciones de uso**, agrega las demás restricciones disponibles, si así lo deseas. Selecciona la opción **Aplicar con otras promociones**.</ui>

<blockquote><ui>5. Haz clic en **Guardar**.</ui>

## Personalizar la pantalla del Checkout

El último paso es configurar la pantalla del Checkout para permitir que se muestre el campo **Código de vendedor**.

Para realizar la personalización, debes ponerte en contacto con la agencia partner responsable de la creación de tu tienda y solicitar que agreguen el nuevo campo para que el cliente pueda añadir el código del vendedor y se muestre el nombre.

También debes completar los siguientes pasos:

1. Al simular una compra e ingresar el código del vendedor en la pantalla del Checkout, asegúrate de que la llamada GET [Search Documents](https://developers.vtex.com/docs/api-reference/master-data-api-v2#get-/api/dataentities/-dataEntityName-/search) realice la búsqueda en la entidad `codigovendedor` y devuelva toda la información registrada de dicho vendedor. Ejemplo de llamada: https://{accountName}.{environment}.com.br/api/dataentities/codigovendedor/search?codigovendedor=12345.

> ⚠️ El campo **status** debe devolver el valor **true** para indicar que el código del vendedor es válido.

<blockquote><ui>2. Realiza la llamada POST [Update orderForm configuration](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pvt/configuration/orderForm) para incluir la siguiente información en el [orderForm](https://developers.vtex.com/docs/guides/orderform-fields) de tu tienda</ui>:

<blockquote><blockquote>- **marketingData**: ingresa *"codigovendedor"* en *"utmCampaign"*. Si no se describe esta información, la promoción (código de vendedor) no se aplicará al carrito y no se mostrará el campo.

  <blockquote><blockquote>- **openTextField** (opcional): ingresa observaciones o comentarios como, por ejemplo, información para filtros de comisiones.

> ⚠️ En la pantalla del Checkout solo debe aparecer el nombre del vendedor.

Después de ejecutar todos los pasos descritos anteriormente, el campo **Código de vendedor** estará disponible en la pantalla del Checkout.

![Código de vendedor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/uncategorized/unknown-subcategory/campo-codigo-de-vendedor-en-el-checkout_2.png)
