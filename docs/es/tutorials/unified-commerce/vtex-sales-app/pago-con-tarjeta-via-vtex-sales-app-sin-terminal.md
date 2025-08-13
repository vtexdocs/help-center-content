---
title: 'Pago con tarjeta vía VTEX Sales App (sin terminal)'
id: 48OR7InFvdLW6hekvfESs3
status: PUBLISHED
createdAt: 2025-03-28T15:33:24.822Z
updatedAt: 2025-04-10T19:05:57.726Z
publishedAt: 2025-04-10T19:05:57.726Z
firstPublishedAt: 2025-03-28T16:09:38.187Z
contentType: tutorial
productTeam: Shopping
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sales-app-card-entry-without-payment-terminal
legacySlug: pago-con-tarjeta-via-vtex-sales-app
locale: es
subcategoryId: 4T6qfa6gNO6g4sAUIa6s2G
---

La funcionalidad **Pago con tarjeta vía Sales App** permite que la tienda realice ventas mediante tarjetas de crédito, pero sin necesidad de terminales de pago. La solución posibilita el pago con tarjeta a través de **VTEX Sales App** y permite el escaneo automático de la tarjeta o el ingreso manual de los datos. El proceso es seguro, ya que los datos se enmascaran y la información no se almacena.

Con esta funcionalidad, la compra se procesa a través del mismo gateway de la tienda de ecommerce, lo que garantiza que su configuración de checkout se mantenga válida. Una vez completada la venta, la confirmación del pago se realiza a través de la propia **VTEX Sales App**.

Este artículo presenta la solución **Pago con tarjeta vía VTEX Sales App** y se estructura en las siguientes secciones:

- [Características](#caracteristicas)
- [Beneficios](#beneficios) 
- [Casos de uso](#casos-de-uso)
- [Configuración](#configuracion)
- [Cómo utilizar la solución](#como-utilizar-la-solucion)

## Características

El **Pago con tarjeta vía VTEX Sales App** consta de las siguientes características:

- ✅ Permite pagos con las mismas redes de tarjetas de crédito utilizadas en la tienda de ecommerce.
- ✅ Incluye las mismas [condiciones de pago](https://help.vtex.com/es/tutorial/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento--3azJenhGFyUy2gsocms42Q) y cuotas disponibles en la tienda de ecommerce.
- ✅ Cumple con la [normativa PCI](https://help.vtex.com/es/tutorial/o-que-e-o-pci-ssc), es decir, protege los datos de los clientes y no almacena información sensible.

La funcionalidad presenta algunas restricciones:

- ❌ No admite [tarjetas de tienda ](https://help.vtex.com/es/tutorial/configurar-pagamentos-com-cartoes-de-loja-bandeira-propria--428FgVdSGQUeAOoogkaIw4)(private label) de terceros.
- ❌ No permite el uso de varias tarjetas en una misma compra.

## Beneficios

La tabla a continuación presenta las principales ventajas del **Pago con tarjeta vía VTEX Sales App**:

| **Tema** | **Descripción** |
| :---: | :--- |
| **Rapidez y practicidad** | La lectura de la tarjeta del cliente y la opción de llenado automático (o manual) agilizan y facilitan la finalización de la compra. |
| **Experiencia integrada y sin fricciones** | La realización de la compra y la confirmación del pago tienen lugar en **VTEX Sales App**, lo que elimina la necesidad de múltiples entornos para completar la venta y promueve una experiencia continua. |
| **Compras seguras** | Durante la compra, el cliente sigue el escaneo de la tarjeta y el llenado (automático o manual) de los datos, que permanecen enmascarados y no se almacenan una vez finalizada la compra. |
| **Soporte para tarjetas virtuales** | El **Pago con tarjeta vía VTEX Sales App** acepta tanto tarjetas físicas con número de identificación ([código BIN](https://help.vtex.com/es/tutorial/cadastrar-informacoes-de-bins--7xvo4JJ53WM7aLzufdC4au)) como tarjetas virtuales, lo que amplía las opciones de pago disponibles para los clientes. |
| **Kit de inicio de pago** | Además de la opción [carrito compartido (social selling)](https://help.vtex.com/es/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy), con el **Pago con tarjeta vía Sales App** los retailers que están comenzando a utilizar **VTEX Sales App** pueden integrar la solución sin necesidad de contratar un adquirente adicional. |

## Casos de uso

Al utilizar el **Pago con tarjeta vía VTEX Sales App** en ventas de [pasillo infinito](https://help.vtex.com/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/40KMlmGI5tN0r0KPCDWgGn) con envío predeterminado (más de 24 horas), la compra se procesa a través del mismo flujo de checkout de la tienda de ecommerce y se clasifica como un caso de tarjeta no presente, un término técnico que indica que el pago no se realizó con una tarjeta física.

> ❗ Las transacciones realizadas con esta funcionalidad están sujetas a las reglas de antifraude. Cuando la autorización de compra pasa por el flujo antifraude, su aprobación puede demorar hasta 24 horas. Por este motivo, no se recomienda utilizar el **Pago con tarjeta vía VTEX Sales App** en los siguientes escenarios:<ul><li>Ventas con envío express</li><li>Ventas de stock local (On Hands)</li></ul>

Si tu tienda física tiene una [política comercial](https://help.vtex.com/es/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) para **VTEX Sales App** independiente de tu tienda de ecommerce y cuenta con una revisión exclusiva de las reglas antifraude, puedes utilizar el **Pago con tarjeta vía VTEX Sales App** para ventas con stock local (On Hands) o envío express.

## Configuración

La configuración necesaria para activar la funcionalidad es distinta para tiendas que ya usan **VTEX Sales App** y para las que van a empezar a utilizar la solución.

> ⚠️ Antes de activar la funcionalidad, asegúrate de que tu tienda tenga una integración con un partner de pagos y pueda procesar ventas con tarjeta de crédito.

### Tiendas que comienzan a utilizar VTEX Sales App

Al [configurar VTEX Sales App](https://help.vtex.com/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO), en la etapa de habilitar medios de pago, mantén activa la opción <i class="fas fa-toggle-on" aria-hidden="true"></i> **Pago con tarjeta vía Sales App.**

### Tiendas que utilizan VTEX Sales App

Para utilizar el **Pago con tarjeta vía Sales App** hay dos configuraciones principales que deben estar activas, una en Checkout y otra en Pagos.

#### Configuración en Checkout 

Los IDs de las redes de tarjetas de crédito deben estar activados como medios de pago en la configuración de pagos de VTEX Sales App. Para comprobar que estén activos, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Storefront > Checkout**, o ingresa **Checkout** en la barra de búsqueda en la parte superior de la página.
2. Haz clic en el ícono de <i class="fas fa-cog" alt="engrenagem azul" aria-hidden="true"></i> engranaje en `Default`.
3. Haz clic en la pestaña **Código**.
4. En **Archivos**, haz clic en `checkout-instore-custom.js`.
5. Revisa la información y, si agregas un nuevo ID de pago, haz clic en `Guardar`. 

#### Configuración en Pago

Los IDs de las redes de la tarjeta de crédito deben estar habilitados para pagos en esta modalidad. Sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Configuración de la tienda > Pago > Configuración**, o ingresa **Configuración** en la barra de búsqueda en la parte superior de la página.
2. Confirma si los ID de las redes de tarjeta de crédito tienen el status `Activo`. Si no lo tienen, continúa al siguiente paso.
3. Configura una [condición de pago](https://help.vtex.com/es/tutorial/condicoes-de-pagamento--tutorials_455) de tarjeta de crédito para tu tienda.

## Cómo utilizar la solución

Después de realizar la [configuración](#configuracion) del sistema, sigue las instrucciones a continuación para empezar a vender utilizando el **Pago con tarjeta vía VTEX Sales App**.

### Antes de la venta

Autoriza el funcionamiento de la cámara en la aplicación de **VTEX Sales App**. Puedes hacerlo desde la configuración de la aplicación o en el primer acceso al **Pago con tarjeta vía VTEX Sales App**. Esta configuración es necesaria para el escaneo de tarjetas.

### Finalizar la venta

Sigue los pasos a continuación para finalizar pedidos utilizando **Pago con tarjeta vía Sales App**:

1. En el checkout de **VTEX Sales App**, en el paso `Selecciona un medio de pago`, haz clic en `Ingresar tarjeta`.
2. Selecciona la opción para escanear la tarjeta o ingresa los datos manualmente.
3. Captura automáticamente los datos de la tarjeta con la pantalla de captura o llena los datos de forma manual. Es necesario escanear la parte delantera y trasera de la tarjeta.
4. Después de la aprobación del pago, la confirmación de la compra se realiza en **VTEX Sales App**.

> ℹ️ Los clientes pueden realizar el escaneo de la tarjeta o el ingreso manual de los datos ellos mismos si así lo desean.

## Más información

- [VTEX Sales App: preguntas frecuentes](https://help.vtex.com/es/tutorial/vtex-sales-app-faq--3CRKQHzflSW0DXenEHUpP5)
- [Compartir el carrito utilizando VTEX Sales App Social Selling](https://help.vtex.com/es/tracks/instore-usando-o-app--4BYzQIwyOHvnmnCYQgLzdr/6deiffo22iKkY27PkfstXy)
- [Prerrequisitos para utilizar VTEX Sales App](https://help.vtex.com/es/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/1wtAanSRA3g2316dw7bw8u)
