---
title: ''
id: 6eZyxCGns8hRp4DPzGuF1b
status: DRAFT
createdAt: 2021-08-05T14:48:43.638Z
updatedAt: 2021-08-05T14:59:55.412Z
publishedAt: 
firstPublishedAt: 
contentType: trackArticle
productTeam: Shopping
slug: instore
locale: es
trackId: 
trackSlugES: 
---

Este artículo tiene como objetivo demostrar las fases del flujo de uso de inStore, una vez instalado y configurado, y señalar sus funcionalidades principales.

Aquí usted puede ver el comportamiento del app en cada etapa de interacción con el vendedor. Algunos de los pasos descritos son opcionales (como la captura de carrito), pero representan el conjunto básico de funcionalidades de inStore.

## 1. Iniciar sesión

El primer contacto entre el vendedor de la tienda física y el inStore se produce al iniciar sesión en la aplicación.

Aquí, se debe utilizar el correo electrónico y la contraseña creados para el vendedor en el paso de [Configuración Básica](https://help.vtex.com/es/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/4L5SoLxE8O3YkxF7FKymrO). Recuerde que no está permitido usar correos electrónicos que ya tengan acceso al panel administrativo de las tiendas VTEX.

![31. inStore - Product Overview - 1 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/35HU0Wz5eJp53X7JSebBgx/608f3fa8cef774bee9106a997de71567/31._inStore_-_Product_Overview_-_1_-_EN.png_h_250)

Al iniciar sesión, el vendedor accede al inStore específico de una cuenta VTEX. Aunque no es un escenario común, el mismo vendedor puede estar vinculado a más de una cuenta. Si necesita cambiar de cuenta, simplemente cierre sesión y, en la pantalla de inicio de sesión, haga clic en __Cambiar tienda__.

También recuerde que si el vendedor aún no tiene credenciales para iniciar sesión, debe comunicarse con los administradores de la cuenta.

## 2. Identificación del cliente

Al iniciar sesión, el vendedor es llevado directamente a la pantalla de identificación del cliente.

inStore es una aplicación que ayuda a los vendedores a realizar ventas en la tienda física. Y tener información sobre el cliente desde la interacción inicial es un recurso valioso, especialmente teniendo en cuenta que el contexto que muestra inStore se refiere no solo a las interacciones del cliente con esa tienda específica, sino con todos los canales de venta de la marca.

El cliente puede ser identificado por uno de estos métodos:
- Email
- CPF (en Brasil)
- Teléfono
- Código QR

Usted puede [configurar qué métodos de identificación desea habilitar](https://help.vtex.com/es/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/3AU7dicoaj3OVaprS6Wh2W) y en qué orden deben aparecer.

En el ejemplo de la imagen a continuación, E-mail y CPF están habilitados.

![31. inStore - Product Overview - 2 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/2YKc9S2FehS7eA2zTskL33/f15d5d5556b31f7ce78eb3d77994c722/31._inStore_-_Product_Overview_-_2_-_EN.png_h_250)

Ingrese uno de estos datos en el campo y haga clic en el botón __Confirmar__.

Alternativamente, si ha habilitado Usuario anónimo, es posible continuar sin identificar al cliente. Para hacer esto, haga clic en __Continuar sin identificación__.

<div class="alert alert-info">
Aunque es posible atender a los clientes sin identificarlos, siempre recomendamos hacerlo, ya que esto le brinda al vendedor una serie de información contextual que aumenta las posibilidades de conversión.
</div>

## 3. Búsqueda omnicanal

La barra superior de la aplicación de inStore ofrece algunas opciones utilizadas frecuentemente por el vendedor. Una de ellas es la búsqueda de SKU, disponible en la esquina superior derecha.

![31. inStore - Product Overview - 3 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/5zBP54Dt2s7P6514vC1K8z/f0680a6383e525a329089eb247501d4d/31._inStore_-_Product_Overview_-_3_-_EN.png_h_250)

La búsqueda de inStore es omnicanal. Es decir, cuando realiza una búsqueda en la aplicación, el vendedor busca tanto en el stock local (de la tienda física en sí) como en el catálogo de otras tiendas físicas y del e-commerce.

![31. inStore - Product Overview - 4 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/5jBZMQOVW1n0ObtiwMYDtV/37bc53a81fea4d2db3cc61e5ccc0dd51/31._inStore_-_Product_Overview_-_4_-_EN.png_h_250)

Las opciones de disponibilidad de entrega y recogida se mostrarán más adelante, en la etapa de entrega.

## 4. Lectura de código de barras

Después de identificar al cliente, el vendedor es llevado directamente al carrito. Allí, si está utilizando la versión para computadora de inStore, conectada a un lector de código de barras, simplemente lea los productos para que aparezcan en el carrito.

![31. inStore - Product Overview - 5 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/5QbuILII93SyE4j7ovXed5/0390993518b96fb07f68c19345470413/31._inStore_-_Product_Overview_-_5_-_EN.png_h_250)

Si el vendedor está usando un tablet o smartphone, verá un botón de lectura de código de barras en la barra superior de la aplicación.

![31. inStore - Product Overview - 6 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/4yAzpm3JHk9Ksjku7FbVcO/b1b41cfb9a3cfb9266383011e793c175/31._inStore_-_Product_Overview_-_6_-_EN.png_h_250)

Al hacer clic en él, el vendedor puede usar la cámara para emitir leer un producto y, con eso, pasar automáticamente a la pantalla de detalles de ese producto.

## 5. Carrito omnicanal

Como la consulta del catálogo realizada por inStore trae productos no solo del stock local, sino de todo el catálogo compartido entre canales, el carrito en inStore es omnicanal: puede contener productos que existen en el stock de la tienda, pero también otros que existen en otros almacenes.

Es como si el vendedor tuviera acceso al mismo checkout del e-commerce, pero también a los stocks de las tiendas físicas. El checkout de inStore trae para el contexto de la tienda física los mismos datos que tendría en el e-commerce:
- Datos de SKU del Catálogo
- Promociones y gift cards del módulo de promociones
- Precios y SLA del fulfillment
- Cuotas del módulo de pagos
- SLAs de entrega del módulo de logística
- Tasas del servicio de tasas

## 6. Acceso al último carrito del cliente

Después de que el vendedor identifica al cliente, inStore busca información sobre ese cliente que pueda ayudarlo en la venta. Una de estas informaciones muestra el último carrito no terminado por el cliente.

Al tener acceso a esta información, el vendedor puede intentar completar la venta de los artículos que estaban en ese carrito, es decir, puede intentar recuperar el carrito abandonado.

Simplemente haga clic en __Acceso__ para ver los productos en el carrito abandonado.

## 7. Perfil del cliente

En el carrito, el vendedor puede hacer clic en __Resumen del pedido__ y luego en el nombre del cliente. Esto le da acceso a información relevante del cliente para la venta:
- Número de días desde la última visita del cliente a una tienda o al e-commerce de la marca (considerando, por supuesto, que fue identificado en esa visita)
- Datos del cliente, como correo electrónico, teléfono y número de documento
- Direcciones del cliente
- Último carrito creado por el cliente en el e-commerce
- Historial de pedidos

En el cuadro que muestra el último carrito, el vendedor puede recuperar ese carrito con solo un botón: __Recuperar carrito__.

En el cuadro de cada uno de los últimos pedidos realizados por el cliente, el vendedor puede copiar el carrito, también presionando un solo botón: __Copiar carrito__.

Es bueno recordar que toda esta información se refiere no solo a la experiencia del cliente en la tienda física actual, sino también a las interacciones de ese cliente en el comercio electrónico o en cualquier tienda de la marca donde un vendedor haya identificado al cliente con inStore.

## 8. Detalles del producto

Al hacer clic en los detalles de un producto que aparece en los resultados de búsqueda de inStore, o al leer el código de un producto, el vendedor se dirige a la pantalla de detalles del producto.

![31. inStore - Product Overview - 7 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/fSLOfLn7bnpFyAfujZ8GN/52e0133e7222676d105e4444ce83ea96/31._inStore_-_Product_Overview_-_7_-_EN.png_h_250)

Esta pantalla muestra el nombre del producto, su galería de fotos, variaciones, descripción y disponibilidad. El vendedor puede, en esta pantalla, agregar el producto al carrito.

Tenga en cuenta que si usted configuró su tienda para [forzar disponibilidad de stock](https://help.vtex.com/es/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/2SgRUekV8FO4lg2aO6YTmh), el vendedor podrá agregar el producto al carrito, incluso si no está disponible en ningun almacén.

## 9. Recomendación de producto

Tanto en los detalles del producto como en el carrito, inStore muestra sugerencias de productos de forma predeterminada. Estas recomendaciones se realizan de acuerdo con las características del producto que se está viendo actualmente o los artículos que componen el carrito.

Es posible deshabilitar la recomendación de producto. Para esto, consulte el artículo [Habilitar recomendación de producto](https://help.vtex.com/es/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/321NRjb9YjABQPReJJ5wr2).

## 10. Transferencia de carrito

InStore permite [habilitar una funcionalidad de transferencia de carrito](https://help.vtex.com/es/tracks/instore-customizations--1z9kBm12oBPyVNDo1ivVc2/1PqUW2NuQzaVxTJp0lBK0r). Esta funcionalidad permite que una compra iniciada en un dispositivo se complete en cualquier otro dispositivo presente en el flujo de compra, sin la necesidad de leer los productos nuevamente.

Una vez en un carrito, el vendedor tiene acceso al botón __Transferir__. Al hacer clic en este botón, la aplicación muestra un código QR y un código numérico de cuatro dígitos.

![31. inStore - Product Overview - 8 - EN.png?h=250](//images.ctfassets.net/alneenqid6w5/4DIaRH9gE7NVSsFMQINg4x/2531727e3528f275e02919c9939c5c09/31._inStore_-_Product_Overview_-_8_-_EN.png_h_250)

Otro vendedor vinculado a la misma tienda puede capturar ese carrito y continuar la venta desde su dispositivo.

Para capturar un carrito, ingrese al menú principal de inStore y haga clic en __Capturar carrito__. Alternativamente, en la pantalla de inicio de la aplicación, el vendedor simplemente puede arrastrar la pantalla hacia la derecha.

Luego debe ingresar el código numérico que se muestra en el dispositivo del vendedor que transfirió el carrito o hacer clic en __Leer código QR__ y luego usar la cámara en su dispositivo para leer el código QR generado en el dispositivo del primer vendedor.

Una vez hecho esto, el carrito se transferirá a este segundo dispositivo, desde donde la venta puede proceder normalmente.

## 11. Entrega

Cuando se hace clic en __Ir a entrega__, inStore muestra las direcciones disponibles del cliente. Es decir, si el cliente ha registrado en algún momento más de una dirección de entrega, todas las opciones de dirección ya informadas aparecerán aquí. Alternativamente, el vendedor puede ingresar un código postal.

La siguiente pantalla muestra las opciones de entrega. Como inStore tiene acceso al catálogo de varias tiendas, existen varias posibilidades para organizar la entrega, dependiendo de dónde se encuentren los productos en el carrito.

El siguiente ejemplo muestra dos opciones: recibir todos los artículos en casa a través de una entrega económica o recogerlos en otra tienda física dentro de 5 días hábiles.

![31. inStore - Product Overview - 10](//images.ctfassets.net/alneenqid6w5/621Dlpel880kPOoL8Ur6id/476f54c1dba26c76fc90a691f33baa0c/31._inStore_-_Product_Overview_-_10.png)

### Puntos de recogida

Para los puntos de recogida, el sistema selecciona las tiendas que tienen los SKUs en stock y muestra la tienda más cercana al código postal del cliente, como sugerencia. Si el vendedor quiere cambiar la tienda donde el cliente recogerá los productos, solo hay que hacer clic en el botón __Cambiar punto de recogida__.

![31. inStore - Product Overview - 11](//images.ctfassets.net/alneenqid6w5/2lmJceEfryZV6OBtgGc3Tq/167a7c3f169dab3ffbf49c30d670702e/31._inStore_-_Product_Overview_-_11.png)

Al hacer clic en ese botón, el vendedor primero tiene acceso al punto de recogida sugerido por el sistema. Para ver todos los puntos de recogida disponibles, hay que hacer clic en __Ver todos los puntos de recogida__.

![31. inStore - Product Overview - 12](//images.ctfassets.net/alneenqid6w5/1ZUGWgHe2jI2ROLpIZ1HnN/e6a59ee600f6ae05a2d3e2a27cc8501e/31._inStore_-_Product_Overview_-_12.png)

La aplicación mostrará la lista de puntos de recogida ordenados por la distancia más corta desde el código postal del cliente. También es posible elegir el punto de recogida en el mapa.

![31. inStore - Product Overview - 13](//images.ctfassets.net/alneenqid6w5/uT46sKKgmyT4Lmh8usLO3/3aa559f183e4d5dda3254844aac2fd19/31._inStore_-_Product_Overview_-_13.png)

## 12. Pago

En el paso de pago, las [opciones de pago que se han configurado](https://help.vtex.com/es/tracks/instore-payments--43B4Nr7uZva5UdwWEt3PEy) aparecerán en su tienda.

Una feature importante permitida por inStore son los pagos múltiples. Por ejemplo, al elegir Efectivo y luego hacer clic en __Agregar otro pago__, el vendedor puede cobrar parte del importe en efectivo y parte con tarjeta de crédito.

![31. inStore - Product Overview - 14](//images.ctfassets.net/alneenqid6w5/1Kka7eQvf03YXWR5DA2NEJ/6701ce986792dce02f88bfc4a18c0d9d/31._inStore_-_Product_Overview_-_14.png)

La barra superior de la pantalla de pago le permite agregar cupones y gift cards. También permite cambiar el número de identificación del cliente que aparecerá en la factura.

![31. inStore - Product Overview - 15](//images.ctfassets.net/alneenqid6w5/3CymGlJlWQ9I9w5tiheXQk/577fb68901d2e0a8b17ae11fb55ed98f/31._inStore_-_Product_Overview_-_15.png)

## 13. Pedido completado

El vendedor puede ver esta misma pantalla haciendo clic en __Pedidos completos__ en el menú principal de inStore, y buscando el pedido por número de pedido o cliente.

![31. inStore - Product Overview - 16](//images.ctfassets.net/alneenqid6w5/1WzildtkElOIkalZuY3hkI/3bda7ef00a309b1e57081ad805adb889/31._inStore_-_Product_Overview_-_16.png)

## 14. Impresión de factura

Con inStore, usted puede vender productos de su tienda física recibiendo pagos con la máquina de tarjetas y generando inmediatamente la factura.

Si el dispositivo de impresión se ha [configurado correctamente](https://help.vtex.com/es/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/12GPLA7JdjXEZFLV3HokZU), la factura se imprimirá automáticamente tan pronto como se complete el pedido.

## 15. Imprimir resumen de pedido

Además de la factura, es posible imprimir un resumen del pedido cuando se completa la venta.

Usted puede configurar inStore para [imprimir el resumen del pedido automáticamente](https://help.vtex.com/es/tracks/instore-setting-up--zav76TFEZlAjnyBVL5tRc/12GPLA7JdjXEZFLV3HokZU), una vez que se complete el pedido. Pero, por defecto, no lo hace.

Sin embargo, si el vendedor aún desea imprimir el resumen del pedido, simplemente hay que hacer clic en el botón __Imprimir pedido__ en la pantalla del pedido finalizado, siempre que el dispositivo de impresión esté configurado correctamente para imprimir pedidos.
