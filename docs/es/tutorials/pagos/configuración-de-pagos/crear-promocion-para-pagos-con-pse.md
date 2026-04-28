---
title: 'Crear promoción para pagos con PSE'
id: 6YIp1fJ76gq667PQWjuj5T
status: PUBLISHED
createdAt: 2024-09-30T13:01:24.631Z
updatedAt: 2024-09-30T15:14:12.455Z
publishedAt: 2024-09-30T15:14:12.455Z
firstPublishedAt: 2024-09-30T14:20:52.605Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: creating-promotions-for-pse-payments
legacySlug: crear-promocion-para-pagos-con-pse
locale: es
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

[PSE (Pagos Seguros en Línea)](/es/docs/tutorials/configurar-pago-con-pse) es un medio de pago disponible en las tiendas VTEX para transacciones en Colombia. Si utilizas PSE en tu tienda y deseas ofrecer una condición especial de pago al cliente según el tipo de banco seleccionado, puedes crear una promoción regular para PSE.

Para configurar promociones por banco con PSE, debes:

- [Identificar el código del banco](#identificar-el-codigo-del-banco)
- [Crear una promoción para PSE](#crear-una-promocion-para-pse)

## Identificar el código del banco

Cada banco que realiza transacciones de pago asociadas a PSE tiene un código específico de identificación. Para obtener el código de banco que luego te permitirá crear una nueva promoción regular, sigue los pasos a continuación:

1. Accede al checkout de tu tienda.
2. En la sección de pago, haz clic en la opción __PSE__.
3. Abre la página __Web Developer Tools__ de tu navegador. Si tienes dudas sobre cómo acceder a esta página, consulta a continuación las instrucciones de cada tipo de navegador:
   - [Google Chrome](https://developer.chrome.com/docs/devtools/open#inspect)
   - [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)
   - [Safari](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html)

4. Haz clic en la pestaña __Red__.
5. Actualiza la página presionando la tecla __F5__ o el botón de actualizar el navegador.
6. Escribe __operationName=Banks__ en la barra de búsqueda.
7. Haz clic sobre el resultado mostrado en la columna __Nombre__.
8. Haz clic en la pestaña __Vista previa__.
9. En el componente data, selecciona el componente __banks__.
10. Haz clic en el nombre del banco para el que deseas crear la promoción y anota el número de 4 dígitos que se muestra en el campo __code__.

![PSE Dev Tool es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/pagos/configuración-de-pagos/crear-promocion-para-pagos-con-pse_1.png)

## Crear una promoción para PSE

Después de obtener el código del banco, crea la promoción regular siguiendo los pasos a continuación:

1. En el Admin VTEX, accede a **Promociones > Promociones** o escribe **Promociones** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el botón **Crear promoción**.
3. Selecciona la opción **Regular**.
4. En el campo **Nombre**, ingresa el nombre con el que deseas identificar la promoción.
5. En **Fecha de vencimiento**, define el periodo en el que los clientes recibirán descuento por utilizar PSE con el banco configurado.
6. En **¿Cuál es el tipo y valor del descuento?**, define el tipo de descuento de la promoción e indica su valor.

> ℹ️ El tipo de promoción "Porcentual" es más común para promociones de bancos.

7. En la sección **¿A qué ítems se aplicará esta promoción?**, selecciona si el descuento por pago con el banco deseado a través de PSE se debe aplicar a todos los productos de la tienda o si solo se aplica a algunos tipos de productos. Si deseas restringir la promoción, configura los demás campos de esta sección.
8. En la sección **¿Cuáles son las condiciones para que la promoción sea válida?**, marca Tags de marketing y escribe **pse-discount-for-bank-code-XXXX**, sustituyendo **XXXX** por el código del banco deseado.
9. Marca la opción **Medio de pago** y selecciona **PSE**.
10. En la sección **Restricciones y limitaciones de uso** puedes marcar la opción **Aplicar con otras promociones** para que la promoción se pueda acumular con otras promociones.

> ⚠️ La promoción de PSE siempre se agregará al carrito si la opción **Aplicar con otras promociones** está marcada y se han aplicado otras promociones a los productos. Si la opción **Aplicar con otras promociones** no está marcada, el checkout solo aplicará la promoción que permita el mayor descuento sobre los productos.

11. Haz clic en **Guardar**.