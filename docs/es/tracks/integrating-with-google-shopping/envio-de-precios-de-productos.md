---
title: 'Envío de precios de productos'
id: 1wZhEoyuWujmj0lKaWO71X
status: PUBLISHED
createdAt: 2024-09-13T18:31:27.381Z
updatedAt: 2024-09-13T18:42:39.217Z
publishedAt: 2024-09-13T18:42:39.217Z
firstPublishedAt: 2024-09-13T18:42:39.217Z
contentType: trackArticle
productTeam: Channels
slugEN: submitting-product-prices
locale: es
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugES: integracion-con-google-shopping
---

El [precio](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) de su producto en Google Shopping es determinado por la selección de la política comercial. Es importante prestar atención a algunos puntos.

Si su política comercial tiene precios de/por (lo que VTEX llama [precio de lista](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#precio-de-lista) y [precio calculado](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#precio-calculado)), se enviará a Google Shopping el precio calculado, es decir, el precio «por». Para que estas promociones figuren en Google Shopping los productos deben cumplir los siguientes requisitos en Google Merchant Center:  

- Se debe haber cobrado el precio base, o un precio superior, durante un periodo de 30 días (consecutivos o no) en los últimos 200 días.  
- El precio base debe ser válido.  
- El precio de oferta debe ser inferior al de base.  
- El descuento de la oferta debe ser superior al 5% e inferior al 90%.  

Si tus productos cumplen todos los requisitos anteriores, la herramienta aplica el valor promocional previamente configurado en VTEX en las vistas de Google Shopping.  

## Descuento vinculado a medio de pago

La activación del descuento vinculado a un medio de pago se lleva a cabo en dos etapas: la [configuración del descuento y el medio de pago]((#configurar-descuento) y posteriormente la activación de descuentos en la [configuración del conector](https://help.vtex.com/es/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl).  

### Configurar descuento  

Para configurar un descuento vinculado a un medio de pago debes considerar la información contenida en los artículos a continuación:

1. [Set a discount using the checkout API](https://developers.vtex.com/docs/guides/set-a-discount-using-the-checkout-api) para ingresar el medio de pago deseado en la variable `paymentSystemToCheckFirstInstallment` y simular un carrito de compras para comprobar si el medio de pago se ha actualizado.  
2.  [Configurar descuento de precio al contado](https://help.vtex.com/es/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt) para vincular el SKU al método de pago.  
3. [Configurar descuento del precio al contado para Google Shopping](https://help.vtex.com/es/tutorial/configurar-desconto-de-preco-a-vista-para-google-shopping--40K3R5d4NogMvCzIWdWt3e).  

Una vez realizados los pasos anteriormente descritos, la activación deberá realizarse a través de la [configuración del conector](https://help.vtex.com/es/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl).

>⚠️ En caso de que haya varios sellers vinculados a un producto de tu tienda, Google Shopping aplicará la regla de anunciar la mejor oferta disponible.

  >❗ Para que el descuento se envíe a Google Shopping, cada promoción creada solo puede tener vinculado un medio de pago.
