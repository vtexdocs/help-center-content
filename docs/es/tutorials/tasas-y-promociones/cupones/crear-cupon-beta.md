---
title: 'Crear cupón'
id: 7lMk3MmhNp2IEccyGApxU
status: PUBLISHED
createdAt: 2022-04-28T20:25:24.998Z
updatedAt: 2025-09-04T19:47:20.177Z
publishedAt: 2025-09-04T19:47:20.177Z
firstPublishedAt: 2022-04-28T20:42:45.525Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-a-coupon-beta
legacySlug: crear-cupon-beta
locale: es
subcategoryId: 1TXh7VjDSIGA2eSI0CmUsi
---

Un [cupón](/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL) es un código promocional formado por una secuencia de letras y números. Puedes usar cupones para aplicar promociones sobre el valor del carrito: al informar el código de un cupón válido al momento de la compra, tus clientes pueden obtener descuentos sobre el valor del pedido.

Para crear un cupón en el Admin VTEX, sigue las instrucciones a continuación:

1. En el Admin VTEX, ingresa en **Promociones > Cupones**.
2. Haz clic en `Crear cupón`.
3. Rellena el formulario con la [información del cupón](#informacion-del-cupon), desde la sección [General](#general).
4. Haz clic en `Guardar`.

Para ser utilizado, el cupón debe estar asociado con al menos una promoción. Consulta la sección [Asociar el cupón con una promoción](#asociar-el-cupon-con-una-promocion) para saber cómo realizar esta configuración.

Si creaste un [lote de cupones](/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL#lotes-de-cupones), luego de guardarlo, verás una pantalla con los cupones que se generaron. Para más información, consulta la sección [Cupones existentes](#cupones-existentes). Si creaste un [cupón sencillo](/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL#cupones-sencillos), serás redirigido directamente a la [lista de cupones](/es/tutorial/lista-de-cupones-beta--5z5ya3IonsC2W4B5h4JrsZ).

## Información del cupón

El formulario para crear o editar un cupón consta de las siguientes secciones:

- [Uso del cupón y promociones asociadas](#uso-del-cupon-y-promociones-asociadas)
- [General](#general)
- [Restricciones](#restricciones)

### Uso del cupón y promociones asociadas

El panel superior del formulario de creación y edición del cupón, ilustrado a continuación, muestra el número de usos del cupón y el número de promociones vinculadas a él.

![crear-cupon-1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/cupones/crear-cupon-beta_1.png)

Al hacer clic sobre cualquier información del panel, tendrás acceso a la ventana __Ver detalles de uso__, donde aparecen los datos que se describen a continuación.

* **Promociones asociadas:** muestra los nombres de las promociones asociadas al cupón, en caso de que haya alguna. Al hacer clic en el nombre de una promoción, serás redireccionado a la página de edición de la promoción.

    El cupón solo estará disponible cuando esté asociado con, por lo menos, una promoción. Para establecer dicho vínculo, es necesario usar la misma [utm_source o utm_campaign](/es/tutorial/que-son-utm-source-utm-campaign-y-utm-medium--2wTz7QJ8KUG6skGAoAQuii) que se usó en el registro del cupón y en el registro de la promoción. Consulta la sección [Asociar el cupón con una promoción](#asociar-el-cupon-con-una-promocion) para saber cómo realizar esta configuración.

* **Uso**: muestra el número de usos del cupón y el número de usos restantes, en caso de que hayas limitado la cantidad de usos.

    Si el cupón es sencillo, Esta sección muestra la lista de pedidos en que se usó el cupón y permite buscar por número de pedido. Al hacer clic en el número de un pedido, serás redirigido a la página de detalles del pedido en **Gestión de pedidos**.

    ![ver-detalles-de-uso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/cupones/crear-cupon-beta_2.png)

    Si se trata de un grupo de cupones, esta sección muestra la lista de códigos del grupo de cupones y permite buscar un código específico. Al hacer clic en un código, se accede a la lista de pedidos en los que se ha utilizado el código y se puede buscar un número de pedido. Al hacer clic en un número de pedido, accederá a la página de detalles del pedido en **Gestión de pedidos**.

![selecciona-el-codigo-lotes-cupones](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/cupones/crear-cupon-beta_3.PNG)

### General

La sección **General** muestra los campos que debes completar con la información general de tu cupón:

* **Código del cupón:** código que deberán ingresar los clientes de tu tienda durante el _checkout_ para aplicar el descuento del cupón. No podrás usar el código de un cupón ya existente. Solo están permitidos letras, números y guiones, y el código puede tener hasta 300 caracteres. Este campo es obligatorio.
* **Fuente UTM:** permite vincular el cupón a una determinada `utm_source`. La `utm_source` representa el origen del tráfico, es decir, de qué sitio, anunciante o publicación vino el usuario. Ejemplo: puedes definir que siempre que un usuario llegue a tu tienda por hacer clic en un anuncio de Facebook, la URL incluirá el parámetro `utm_source=fb` y se aplicará el cupón. Para más información, consulta [Qué son utm_source, utm_campaign y utm_medium](/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii).
* **Campaña UTM:** permite vincular el cupón a determinada `utm_campaign`, es decir, una campaña que define un contexto de marketing. Ejemplos: `navidad`, `díadelpadre`.  Para más información, consulta [Qué son utm_source, utm_campaign y utm_medium](/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii).
* <i class="fas fa-toggle-on"></i> **Generando cupones en lote:** al mantener desactivada esta opción, optas por crear un cupón único. Al activarla, creas un [lote de cupones](/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL#lotes-de-cupones) y podrás ver los siguientes recursos. 
    * **Número de cupones:** permite definir la cantidad de códigos que se generarán a partir del prefijo definido en **Código del cupón**. La cantidad máxima es de 1000.
    * **Exportar cupones:** botón que permite exportar los códigos del cupón múltiple. Esta opción está disponible solo cuando se editan cupones ya existentes.

> ⚠️ Se debe definir al menos una de las UTM, es decir que es obligatorio rellenar la **Fuente UTM** o la **Campaña UTM**. También se pueden rellenar ambos campos.

### Restricciones

En esta sección del formulario, puedes configurar las siguientes restricciones de uso del cupón:

* <i class="fas fa-toggle-on"></i> **Limitar el uso del cupón en mi tienda:** al activar esta opción, debes informar cuántas veces se podrá usar el cupón utilizando los botones <i class="fas fa-minus"></i> y <i class="fas fa-plus"></i> o escribiendo la cantidad deseada. El número mínimo es 1 y no hay un número máximo.

  Al mantener desactivada esta opción, el cupón podrá usarse ilimitadamente.

  > ⚠️ En caso de que se cancele un pedido con un cupón de uso limitado, se recalculará el límite. Esto significa que los pedidos con status **Cancelado** no cuentan en el límite de veces que se podrá usar el cupón.

## Cupones existentes

Si creaste un [lote de cupones](/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL#lotes-de-cupones), luego de guardarlo, verás una pantalla con los códigos que se generaron. Esa pantalla tiene dos opciones disponibles:

* <i class="far fa-clone"></i> **Copiar todos:** permite copiar los códigos generados a su área de transferencia. Luego, si lo deseas, puedes pegarlos en un editor de planillas como Excel o Google Sheets. También puedes copiar cada código haciendo clic sobre él.
* **Exportar:** permite exportar los códigos generados a un archivo CSV. El archivo exportado tiene una columna con un código por línea.

![cupons-gerados-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/tasas-y-promociones/cupones/crear-cupon-beta_4.gif)

### Generar cupones masivamente
La [creación de cupones](#crear-cupón) para promociones se debe realizar a través del módulo Tasas y Promociones. Sin embargo, pueden presentarse casos en los que se necesita crear muchos cupones a la vez, debido a alguna campaña o acción de marketing.

La creación masiva de cupones no se puede realizar por el Admin VTEX, solo por la [Promotions & Taxes API](https://developers.vtex.com/docs/api-reference/promotions-and-taxes-api). Vea cómo generar cupones de forma masiva en la guía [Creating and managing coupons with Promotions API](https://developers.vtex.com/docs/guides/creating-and-managing-coupons-with-promotions-api).

## Asociar el cupón con una promoción

Se debe asociar un cupón con una promoción para activarlo. Para hacerlo, sigue los pasos a continuación. Un cupón se puede asociar a cualquier tipo de promoción, excepto a una [Promoción de campaña](/es/tutorial/promocion-de-campana--1ChYXhK2AQGuS6wAqS8Ume).

1. En el Admin VTEX, accede a *Promociones > Promociones*, o escribe *Promociones* en la barra de búsqueda en la parte superior de la página.
2. Haz clic en la promoción existente en la que quieras insertar el cupón o crea una promoción haciendo clic en el botón `Nueva promoción`.
3. Si optas por crear una nueva promoción, haz clic en el tipo de promoción que deseas crear.
4. En la sección **¿Cuáles son las condiciones para que la promoción sea válida?**, rellena los campos **utm_source** o **utm_campaign** con los mismos valores del cupón creado.
5. Haz clic en `Guardar` para terminar.

Luego de realizar estas configuraciones, el cupón estará activo y disponible para ser usado en tu tienda.

## Utilizar múltiples cupones

Puedes permitir que los clientes de tu tienda utilicen más de un cupón en una compra. Para activar esta funcionalidad, debes utilizar uno de los endpoints a continuación. Esta funcionalidad solo está disponible mediante API. Esta funcionalidad solo está disponible a través de API y hay un límite de 20 cupones por compra.

Ambos endpoints rellenan el campo `marketingData` del cuerpo de la respuesta y no hay diferencia en la activación. Sigue estos pasos para activar la funcionalidad:

1. Utiliza uno de los endpoints para activar esta funcionalidad:
   - [POST Add coupons to the cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/coupons)
   - [POST Add marketing data](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/attachments/marketingData)
2. [Personaliza](https://developers.vtex.com/docs/guides/checkout-customization-guide#customizing-checkout-ui-admin-vtex) el storefront de tu tienda par permitir múltiples cupones.
   - Si tu tienda utiliza Checkout v5, usa `checkout5-custom.js checkout5-custom.css`.
   - Si tu tienda utiliza Checkout v6, usa `checkout6-custom.js checkout6-custom.css`.
3. Después de la personalización, debes solicitar la liberación de la funcionalidad mediante un [ticket con el soporte VTEX](/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).
4. Marca la opción <i class="fas fa-check-square"></i> Aplicar con otras promociones en la [configuración de promociones](/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricciones-y-limitaciones-de-uso) asociada a los cupones para permitir que los cupones activen más de una promoción en la misma compra. Así, se [acumularán](/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#acumulacion) los descuentos concedidos por las diferentes promociones.

## Más información

* [Cupones](/es/tutorial/cupones-beta--1aAEN3ADpz19ss5JCIEBdL)
* [Lísta de Cupones](/es/tutorial/lista-de-cupones-beta--5z5ya3IonsC2W4B5h4JrsZ)

