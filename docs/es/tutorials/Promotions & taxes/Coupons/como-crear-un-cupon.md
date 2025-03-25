---
title: 'Crear cupón'
id: tutorials_319
status: ARCHIVED
createdAt: 2017-04-27T22:09:06.076Z
updatedAt: 2024-08-12T18:24:48.074Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:14.329Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: creating-a-coupon
locale: es
legacySlug: como-crear-un-cupon
subcategoryId: 1TXh7VjDSIGA2eSI0CmUsi
---

Un cupón es un código que permite aplicar una promoción en el carrito. El cupón solo puede utilizarse después de estar asociado a una promoción.

En este artículo trataremos:

- [Cómo crear un cupón](#como-crear-un-cupon)
  - [Campos de registro del cupón](#campos-de-registro-del-cupon)
    1. [Cupón](#cupon)
    2. [Restricciones y limitaciones de uso](#restricciones-y-limitaciones-de-uso)
- [Cómo vincular un cupón a una promoción](#como-vincular-un-cupon-a-una-promocion)
- [Cómo archivar un cupón](#como-archivar-un-cupon)
- [Escenario de aplicación](#escenario-de-aplicacion)
- [Utilizar múltiples cupones](#utilizar-multiples-cupones)

## Cómo crear un cupón

>⚠️ Hay un límite en la cantidad de cupones activos. Se recomienda reutilizar los cupones, ya que un número elevado puede comprometer el rendimiento del módulo **Tasas y Promociones**.

Para crear un cupón, siga los pasos a continuación.

1. En el Admin VTEX, ingresa en **Promociones > Cupones**.
3. Haga clic en `Nuevo cupón`.
4. Rellene los [campos de registro del cupón](#campos-de-registro-del-cupon).
5. Haga clic en el botón `Guardar`.

>ℹ️ Solo se puede crear un cupón a la vez en el Admin. Para crear cupones de forma masiva, lea el artículo [Creating and managing coupons with Promotions API](https://developers.vtex.com/vtex-rest-api/docs/creating-and-managing-coupons-with-promotions-api).

### Campos de registro del cupón

#### 1. Cupón

En esta sección se definirá la información general del cupón.

- **Cupón:** el código de activación del cupón. No hay límite de caracteres y el campo es obligatorio.

>⚠️ No se puede utilizar caracteres especiales (solo letras, números y guiones).

- **utm_source:** la utm de origen.
- **utm_campaign:** la utm de la campaña.

#### 2. Restricciones y limitaciones de uso

En esta sección se registran las posibles restricciones del cupón.

- **El cliente puede comprar hasta X productos utilizando este cupón en una o más compras:**el número de productos que se pueden comprar con este cupón, independientemente de cuántas compras se realicen para alcanzar este número.
- **Renovar cada uso del cupón después de X días:** la validez del cupón se renueva después de la cantidad de días seleccionada en este campo.

>ℹ️ Para limitar el cupón a un solo uso, debe [restringir el número de aplicaciones de la promoción en su tienda y por cliente](https://help.vtex.com/pt/tutorial/promocao-regular--tutorials_327#4-restricoes-e-limitacoes-de-uso).

Cuando se realiza una compra con una promoción que tiene una limitación y esa compra se cancela, este uso de la promoción vuelve a ser válido.

## Cómo vincular un cupón a una promoción

El cupón puede asociarse a todos los tipos de promoción, excepto a la **Promoción de Campaña**. Un mismo cupón puede estar asociado a varias promociones.

Para activar el cupón y vincularlo a una promoción, siga los pasos a continuación.

1. En el Admin VTEX, accede a *Promociones > Promociones*, o escribe *Promociones* en la barra de búsqueda en la parte superior de la página.
2. Haga clic en la promoción en la que desea introducir el cupón o cree una promoción haciendo clic en el botón `Crear Promoción`.
3. En la sección **¿Cuáles son las condiciones para que la promoción sea válida?**, rellene el campo **utm_source** o **utm_campaign** con los mismos valores del cupón que ha creado.
4. Haga clic en `Guardar`.

## Cómo archivar un cupón

Para desactivar un cupón es necesario archivarlo. Para archivar un cupón, siga los pasos a continuación.

1. En el Admin VTEX, ingresa en **Promociones > Cupones**.
2. Seleccione el cupón que desea archivar.
3. En la página de edición del cupón, haga clic en el botón `Archivar`.

>⚠️ Los cupones no pueden ser eliminados, solo archivados. Solo se puede archivar un cupón a la vez. Puede editar y reutilizar un cupón, pero el **código del cupón** no se puede cambiar.

## Escenario de aplicación

Debe crear una promoción y divulgarla en un <i>newsletter</i>. Sin embargo, la promoción sólo se activará mediante un código que estará en el email. Para crear este escenario, debe realizar el siguiente paso a paso.

1. [Crear un cupón](#como-crear-un-cupon).
2. [Crear una promoción](https://help.vtex.com/es/tutorial/como-crear-promociones--tutorials_320).
3. Utilizar la misma `utm_source` o `utm_campaign` del cupón al configurar la promoción.
4. Introducir el código del cupón en el <i>newsletter</i>.
5. La promoción se activará en el carrito solo cuando el cliente rellene el campo **Cupón de descuento** y lo aplique.

>ℹ️ También es posible configurar los enlaces del <i>newsletter </i>directamente con la **utm_source** y **utm_campaign** y prescindir del uso del cupón.

## Utilizar múltiples cupones

Puedes permitir que los clientes de tu tienda utilicen más de un cupón en una compra. Para activar esta funcionalidad, debes utilizar uno de los endpoints a continuación. Esta funcionalidad solo está disponible mediante API. Esta funcionalidad solo está disponible a través de API y hay un límite de 20 cupones por compra.

Ambos endpoints rellenan el campo `marketingData` del cuerpo de la respuesta y no hay diferencia en la activación. Sigue estos pasos para activar la funcionalidad:

1. Utiliza uno de los endpoints para activar esta funcionalidad:
   - [POST Add coupons to the cart](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/coupons)
   - [POST Add marketing data](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForm/-orderFormId-/attachments/marketingData)
2. [Personaliza](https://developers.vtex.com/docs/guides/checkout-customization-guide#customizing-checkout-ui-admin-vtex) el storefront de tu tienda par permitir múltiples cupones.
   - Si tu tienda utiliza Checkout v5, usa `checkout5-custom.js checkout5-custom.css`.
   - Si tu tienda utiliza Checkout v6, usa `checkout6-custom.js checkout6-custom.css`.
3. Después de la personalización, debes solicitar la liberación de la funcionalidad mediante un [ticket con el soporte VTEX](https://help.vtex.com/es/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM).
4. Marca la opción <i class="fas fa-check-square"></i> Aplicar con otras promociones en la [configuración de promociones](https://help.vtex.com/es/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#4-restricciones-y-limitaciones-de-uso) asociada a los cupones para permitir que los cupones activen más de una promoción en la misma compra. Así, se [acumularán](https://help.vtex.com/es/tutorial/entendendo-a-concorrencia-de-promocoes--tutorials_2270#acumulacion) los descuentos concedidos por las diferentes promociones.
