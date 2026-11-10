---
title: 'VTEX Sales App: configurar el archivo checkout-instore-custom.js'
createdAt: 2026-11-10T21:43:00.000Z
updatedAt: 2026-11-10T21:43:00.000Z
contentType: tutorial
productTeam: Shopping
slugEN: vtex-sales-app-configuring-the-checkout-instore-custom-js-file
locale: es
---

`checkout-instore-custom.js` es el archivo usado para personalizar la configuración de **VTEX Sales App**. Este artículo describe las propiedades disponibles en ese archivo y cómo definirlas. Para ubicarlo sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout** o ingresa **Checkout** en el campo de búsqueda.
2. Haz clic en el engranaje de la cuenta principal en la que se instaló **Sales App**.
3. Haz clic en la pestaña **Código**.
4. En la sección **Archivos** puedes ver el archivo `checkout-instore-custom.js`.

## Idioma y configuración regional

- `window.LOCALE_MESSAGES.locale`: define el idioma y la configuración regional usados en **Sales App**, como español de España (`'es-es'`), portugués de Brasil (`'pt-br'`) e inglés de EE. UU. (`'en-us'`).

## Configuración por cuenta

- `window.INSTORE_CONFIG_BY_ACCOUNT`: objeto que mapea tiendas y cuentas a configuraciones específicas.
  - **Clave:** ID y nombre de la tienda (ej.: `"1"` y `"nombredelatienda"`).
  - `name`: nombre de la cuenta VTEX.
- `accounts`: ubicado dentro de `INSTORE_CONFIG`, recibe el valor de `window.INSTORE_CONFIG_BY_ACCOUNT` y asocia **Sales App** a las tiendas configuradas.

## Autenticación

- `auth.oAuthProviderName`: define el proveedor de autenticación OAuth usado para iniciar sesión en **Sales App** (ej.: `'Google'`).

## Flujo de checkout y navegación

- `enableNewCheckout`: activa el nuevo flujo de checkout de **Sales App**. El valor predeterminado de esta flag es `false`. Cuando el retailer completa la configuración inicial, esta flag se guarda como `true` en la tienda.

  > ⚠️ No cambies el valor de `enableNewCheckout`. **Sales App** guarda este valor automáticamente después de la configuración inicial, y un cambio manual puede interrumpir el flujo del checkout y generar problemas al finalizar pedidos.

- `enableExplore`: activa la pantalla con la experiencia **Explorar** (vitrina y anuncios).

- `initialPage`: define la página que se abre primero después de iniciar sesión. Los valores aceptados son:

  | Valor              | Ruta                       | Qué abre                                                       |
  | :----------------- | :------------------------- | :------------------------------------------------------------- |
  | `'advertisements'` | `/checkout/advertisements` | Vitrina y anuncios (la página **Explorar**) |
  | `'sale'`           | `/sale`                    | Flujo de venta (ruta descontinuada)         |
  | `'turn-list'`      | `/turn-list`               | Seguimiento de vendedores                                      |
  | `'b2b'`            | `/b2b`                     | Página de inicio B2B                                           |

- `pathAfterLogin`: determina la ruta interna a la que se dirige al usuario después de iniciar sesión (ej: `'/sale'`). Esta flag se descontinuó y se reemplazó por `initialPage`. Aún tiene precedencia sobre `initialPage`. Si la tienda tiene `pathAfterLogin` en el archivo, `initialPage` se ignora.

  > ⚠️ Usa `initialPage` en lugar de `pathAfterLogin`.

- `topbarTitle`: define el texto que se muestra en la barra superior de **Sales App** (ej: `'Nombre de la tienda'`).

- `enableChangePrice`: cuando se configura como `true`, permite que el vendedor cambie el precio manualmente en **Sales App**. Cuando es `false`, no lo permite. Está relacionado con el campo `manualPrice` del [OrderForm](https://developers.vtex.com/docs/guides/orderform-fields).

## Ventas y seguimiento

- `sales.enabled`: activa la funcionalidad de venta en **Sales App**.

- `salesAssociateTracking.enabled`: activa el seguimiento de ventas por vendedor, de forma que los pedidos se asocien a un código de vendedor.

  > ⚠️ Tanto `sales.enabled` como `salesAssociateTracking.enabled` tienen que estar configuradas como `true` para que **Sales App** funcione correctamente.

- `salesPerformance.enabled`: cuando está configurado como `true`, muestra el monitor de desempeño de la tienda en el nuevo menú de **Sales App**. Cuando es `false`, no se muestra.

- `enableStorePerformance`: cuando está configurado como `true`, muestra el desempeño de la tienda en la barra lateral de la versión anterior de **Sales App**. Cuando es `false`, no se muestra. Esta flag es independiente de `salesPerformance.enabled`.

- `showItemOriginSeller`: cuando está configurado como `true`, muestra el texto **tienda partner** en los ítems vendidos por un seller externo. Cuando es `false`, no se muestra.

## Búsqueda de productos (`search`)

- `search.vtexSearch`: cuando está configurado como `true`, usa [**Intelligent Search**](/es/docs/tutorials/intelligent-search-vision-general). Cuando es `false` o no aparece en el archivo, usa [**VTEX Search (Legado)**](/es/docs/tutorials/como-funciona-vtex-search-legado). Los filtros facetados (`search.filtersEnabled`) y la regionalización (`search.regionalizationEnabled`) dependen de que esta flag esté configurada como `true`.
- `search.filtersEnabled`: activa filtros facetados en la interfaz de búsqueda. Solo tiene efecto cuando `search.vtexSearch` está configurada como `true`.
- `search.regionalizationEnabled`: activa la [búsqueda regionalizada](/es/docs/tutorials/regionalizacion). Solo tiene efecto cuando `search.vtexSearch` está configurada como `true`.
- `search.alternateIdRegex`: expresión regular (regex) usada para reconocer IDs alternativos de SKU, como códigos de barras.

## Stock y venta cuando no hay stock

- `sellWithoutStockInHands`: permite vender productos sin stock local en tiendas con configuración de ventas de stock local (**On Hands**).
- `showStock`: cuando está configurado como `true`, muestra la cantidad en stock en las pantallas de producto y de búsqueda. Cuando es `false`, no se muestra.

## Anexos y servicios

- `enableAttachments`: activa servicios y anexos en el flujo de venta (por ejemplo, empaque para regalo).
- `giftPackagingName`: nombre que se muestra para el servicio o anexo (por ejemplo, `'empaque'`).

## Social Selling

- `socialShare.vendorType`: determina la identificación del vendedor en los links de [**Social Selling**](/es/docs/tracks/compartir-el-carrito-utilizando-vtex-sales-app-social-selling) (ej.: `'code'` para usar el código del vendedor).
- `socialShare.hostName`: define la dirección del sitio web que aparece en el link compartido con el cliente. **Sales App** usa, en este orden, el valor definido en esta propiedad (`socialShare.hostName`), la dirección ya guardada para compartir (`share.hostName`) y, por último, la dirección de la página en la que el vendedor se encuentra (`window.location.host`).

## Código del vendedor (`noteAsVendorCode`)

- `noteAsVendorCode.type`: define el tipo de campo del código del vendedor. Solo el valor `'select'` crea una lista de selección. Los demás valores muestran un campo abierto de texto. Los valores aceptados son:

  | Valor      | Resultado                                                                                                                                                                                                    |
  | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `'select'` | Lista de selección con los vendedores de la tienda del vendedor que inició sesión. La lista se completa mediante `getVendorsByStore` a partir del `storeId` de ese vendedor. |
  | `'input'`  | Campo de texto (`TextBox`).                                                                                                                                               |
  | `'text'`   | Campo de texto (`TextBox`).                                                                                                                                               |

- `noteAsVendorCode.skipValidation`: controla si el código del vendedor es obligatorio y la consulta a [Master Data](/es/docs/tutorials/master-data-es).

  | Valor                    | Resultado                                                                                                     |
  | :----------------------- | :------------------------------------------------------------------------------------------------------------ |
  | `false`                  | Hace que el campo sea obligatorio.                                                            |
  | `true`                   | Guarda el código sin consultar **Master Data**.                                               |
  | Flag ausente del archivo | El campo no es obligatorio, pero **Sales App** aún valida si el código informado es correcto. |

- `noteAsVendorCode.autofill`: define si el código del vendedor se autocompleta en el link compartido. Esta flag solo funciona si `socialShare` está definido. Consulta [Social Selling](#social-selling).

  | Valor                    | Resultado                                                                  |
  | :----------------------- | :-------------------------------------------------------------------------- |
  | `false`                  | No autocompleta el código.                                 |
  | `true`                   | Autocompleta el código del vendedor en el link compartido. |
  | Flag ausente del archivo | El valor predeterminado es `true`.                         |

- `noteAsVendorCode.mask`: expresión regular (regex) que valida el formato del código del vendedor.

  | Valor                    | Resultado                                                                                                                          |
  | :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
  | Regex configurada        | Valida el formato del código del vendedor. Se ignora cuando `noteAsVendorCode.type` es `'select'`. |
  | Flag ausente del archivo | La expresión regular (regex) permanece vacía y el campo acepta cualquier formato.               |

Consulta a continuación un ejemplo de cómo configurar `noteAsVendorCode`:

```js
noteAsVendorCode: {
  type: 'input',
  mask: '^LL.{0,8}$',
  skipValidation: true,
  autofill: false,
}
```

## Cliente anónimo

- `allowAnonymousUser`: cuando se configura como `true`, permite finalizar pedidos sin identificar al cliente. Cuando es `false`, no lo permite. Se usa para ventas de stock local (**On Hands**).

## Registro y perfil del cliente

- `customerProfile.isCorporate`: define si la venta para persona jurídica está disponible en el registro del cliente. Además de `true` y `false`, la flag acepta el objeto `{ optional: true }`.

  | Valor                | Resultado                                                                                      |
  | :------------------- | :----------------------------------------------------------------------------------------------- |
  | `false`              | Desactiva la venta para persona jurídica.                                      |
  | `true`               | Hace obligatorio identificar la venta como persona jurídica.                   |
  | `{ optional: true }` | Mantiene disponible la venta para persona jurídica, pero el campo es opcional. |

## Tipos de identificación del cliente

- `enableIdentificationTypes`: define qué tipos de identificación del cliente están disponibles en **Sales App**. Configura cada propiedad como `true` para habilitar el método o como `false` para deshabilitarlo.
  - `QRCode`: cuando se configura como `true`, permite que el cliente se identifique usando el código QR. Cuando es `false`, no lo permite.
  - `CPF`: cuando se configura como `true`, permite que el cliente se identifique usando el CPF (Brasil). Cuando es `false`, no lo permite.
  - `Email`: cuando se configura como `true`, permite que el cliente se identifique usando el email. Cuando es `false`, no lo permite.
  - `Phone`: cuando se configura como `true`, permite que el cliente se identifique usando el número de teléfono. Cuando es `false`, no lo permite.

Consulta a continuación un ejemplo sobre cómo configurar `enableIdentificationTypes`:

```js
enableIdentificationTypes: {
  QRCode: false,
  CPF: false,
  Email: true,
  Phone: false,
}
```

## Pagos

- `challengeDrivenPaymentWorkflow`: activa un flujo de pago con validaciones adicionales, como [cartera digital (ewallet)](/es/docs/tracks/cartera-digital-e-wallet), [Payment Apps](https://developers.vtex.com/docs/guides/payments-integration-payment-app) y [POS (Point of Sale)](https://developers.vtex.com/docs/guides/payments-integration-ppp-applied-to-pos).
- `payments.filters`: lista los IDs de los medios de pago (`paymentSystemId`) que pueden mostrarse en el checkout de **Sales App** (ej: `'1'`, `'4'`, `'125'`, `'202'`, `'44'`, `'45'`, `'207'`, `'208'`, `'209'`).

## Cancelación del pedido

- `isCancelOrderAlwaysVisible`: cuando se configura como `true`, mantiene siempre visible en la interfaz la opción de cancelar el pedido. Cuando es `false`, no la mantiene visible.

## Dispositivos e impresora

- `printedOrderExtraText`: texto adicional impreso en el comprobante del pedido.
- `enablePrintButton`: cuando se configura como `true`, muestra el botón de imprimir en el pedido. Cuando es `false`, no lo muestra. El valor predeterminado es `true`.
