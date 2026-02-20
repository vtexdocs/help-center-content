---
title: 'Configurar Tarjeta de regalo'
id: tutorials_995
status: PUBLISHED
createdAt: 2017-04-27T21:57:54.816Z
updatedAt: 2024-10-22T19:25:17.816Z
publishedAt: 2024-10-22T19:25:17.816Z
firstPublishedAt: 2017-04-27T23:03:42.674Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: gift-card
legacySlug: gift-card
locale: es
subcategoryId: 3qWeS7abxCyC0G0GMq42gA
---

Gift card, tarjeta de regalo o vale de compra es uno de los recursos del Módulo de Pagos que puede funcionar de dos maneras:

- Medio de pago para compras.
- Programa de fidelidad que el administrador de la tienda puede conectar con el sistema VTEX.

Para conocer más detalles sobre la segunda opción de uso, consulte nuestra documentación técnica sobre [cómo integrar con gift card](/es/tutorial/integrando-com-gift-card).

## Cómo crear el vale de compra por el Admin

Por estándar VTEX, el vale de compra se considera una forma de pago. Este producto tiene un valor nominal que puede utilizarse en el momento de la compra para reducir parte del valor de un pedido.

Para crear un nuevo vale de compra, siga los pasos a continuación:

1. En el Admin VTEX, accede a **Promociones > Tarjetas de regalo**, o escribe **Tarjetas de regalo** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón azul **Nuevo vale**.

> ℹ️ En la pantalla de creación del vale, el campo **Vale** es llenado automáticamente por el sistema VTEX con el código ID del nuevo vale. Este es el código que debe ingresar el cliente en la pantalla de checkout para aplicar el vale al carrito y reducir el valor de pago del pedido.

3. Complete los campos presentados de acuerdo con las orientaciones que se indican a continuación:
   - **Valor**: valor nominal que se concederá para el uso del vale.
   - **Código de moneda**: moneda en la que se creará el vale. Las opciones disponibles para la selección se presentan de acuerdo con las políticas comerciales de cada tienda.
   - **Fecha de vencimiento**: es la fecha de vigencia de uso del vale.
   - **Doc. de identificación**: dato que identifica y define el vale para un cliente específico.
   - **Colección**: determina la colección de productos que define los ítems a los que se puede aplicar el vale.

> ⚠️ **Atención**: los campos “Valor” y “Fecha de vencimiento” deben completarse de forma **obligatoria**. De lo contrario, el vale no se guardará.

> ❗ La funcionalidad de creación de tarjetas de regalo por colecciones de productos no está funcionando. Hay más información sobre este problema en el artículo [Collection functionality doesn't work on Giftcard](https://help.vtex.com/en/known-issues/collection-functionality-doesnt-work-on-giftcard).

Después de completar los campos correctamente, el usuario puede seleccionar hasta tres opciones de configuración:
   - **Restricto**: solo el cliente que hace referencia al CPF o CNPJ informado anteriormente puede usar este vale.
   - **Recargable**: mientras este vale esté disponible, su saldo puede alterarse.
   - **Reutilizable**: puede hacer nuevas compras con este vale hasta que su valor sea utilizado en su totalidad.

4. Por último, haga clic en el botón **Guardar**.

> ℹ️ La creación de cupones no tiene límite, sin embargo, solo se pueden exportar 8000 cupones a la vez.

## Cómo crear un lote de vales de compra por el Admin

Para crear más de un nuevo vale de compra al mismo tiempo (un lote), siga los pasos a continuación:

1. En el Admin VTEX, accede a **Promociones > Tarjetas de regalo**, o escribe **Tarjetas de regalo** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en el botón azul **Nuevos vales en masa**.
3. Complete los campos presentados de acuerdo con las orientaciones que se indican a continuación:
   - **Cantidad de vales**: este es el número de vales que desea crear como lote. Se puede crear un máximo de 500 (quinientos) vales por lote.
   - **Valor**: valor nominal que se concederá a todos los vales de este lote.
   - **Código de moneda**: moneda en la que se agruparán los vales. Las opciones disponibles para la selección se presentan de acuerdo con las políticas comerciales de cada tienda.
   - **Fecha de vencimiento**: es la fecha de vigencia de uso de todos los vales de este lote.
   - **Colección**: determina la colección de productos que define los ítems a los que se pueden aplicar los vales.

> ⚠️ **Atención**: los campos “Cantidad de vales”, “Valor” y “Fecha de vencimiento” deben completarse de forma **obligatoria**. De lo contrario, los vales no se guardarán.

> ❗ La funcionalidad de creación de tarjetas de regalo por colecciones de productos no está funcionando. Hay más información sobre este problema en el artículo [Collection functionality doesn't work on Giftcard](https://help.vtex.com/es/known-issues/collection-functionality-doesnt-work-on-giftcard).

   - **Recargable**: mientras estos vales estén disponibles, sus saldos pueden alterarse.
   - **Reutilizable**: puede hacer nuevas compras con estos vales hasta que sus valores sean utilizados en su totalidad.

4. Haga clic en el botón **Guardar**.

Aparecerá una nueva pantalla confirmando que se ha generado el número solicitado de vales y también se mostrarán sus identificaciones.

5. Por último, haga clic en el botón **Volver**.

> ℹ️ La creación de cupones no tiene límite, sin embargo, solo se pueden exportar 8000 cupones a la vez.

## Cómo configurar un Vale de Compra como un método de pago

Después de crear el vale de compra, debe configurarse como método de pago. De esta manera, sus clientes podrán usarlo en el Checkout.

Siga los pasos a continuación para configurar el vale de compra:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Proveedores**, o escribe **Proveedores** en la barra de búsqueda en la parte superior de la página..
2. En la pantalla de proveedores, haga clic en el botón `Nuevo proveedor`.
3. Escriba el nombre **GiftCard HUB** en la barra de búsqueda y haga clic en el nombre del proveedor.
4. En **Tipo de reembolso** y **Liquidación anticipada**, seleccione las opciones deseadas.
5. Haga clic en `Salvar`.
6. Accede a **Configuración de la tienda > Pago > Configuración**, o escribe **Configuración** en la barra de búsqueda en la parte superior de la página.
7. En la pestana **ondiciones de proveedor**, haga clic en el botón `+`.
8. Haga clic en conector **Vale**.
9. Al inicio de la página, cree un **nombre** para esta condición de pago.
10. Active la condición en el campo **Status**.
11. En **Procesar con afiliación**, seleccione el proveedor de giftcard deseado.
12. Si desea utilizar un sistema antifraude, seleccione la opción **Utilizar antifraude**.
13. Si desea, puede [configurar condiciones especiales de pago](https://help.vtex.com/es/docs/tutorials/condiciones-especiales).
14. Haga clic en `Salvar`.

## Cómo gestionar el vale

Una vez creado el vale, puede ser gestionado de algunas formas a través del Admin. De este modo, el usuario puede:

- Agregar o quitar valor, siempre y cuando el vale sea "Recargable".
- Ver el estado de cuenta.
- Consultar en cuál compra se utilizó el vale.
- Cancelar un vale.
