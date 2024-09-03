---
title: 'Definir la política comercial'
id: 3AqbcsWrge8zLt0BC5CtGd
status: PUBLISHED
createdAt: 2021-04-14T17:58:41.545Z
updatedAt: 2024-08-06T17:51:23.468Z
publishedAt: 2024-08-06T17:51:23.468Z
firstPublishedAt: 2021-04-15T17:41:14.352Z
contentType: trackArticle
productTeam: Channels
slug: definir-la-politica-comercial-google-shopping
locale: es
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugES: integracion-con-google-shopping
---

Después de crear su cuenta en Google Merchant Center, el próximo paso de la integración es definir la [política comercial](https://help.vtex.com/es/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) que utilizará. Al [Configurar la política comercial para marketplace](https://help.vtex.com/es/tutorial/configurando-a-politica-comercial-para-marketplace/), usted define qué productos se enviarán a Google Shopping y los precios que tendrán en la plataforma.

En la mayoría de los casos, recomendamos escoger la política comercial principal (ID: 1), ya que los resultados de Google Shopping dirigen al comprador para realizar la compra en las tiendas de los anunciantes. Así, la integración enviará a Google todos los productos que están disponibles en su tienda, y con los mismos precios anunciados.

Tendrá que solicitar la creación de una nueva política comercial solo si:
- Desea ofrecer una selección de productos distinta en Google Shopping.
- Necesita enviar diferentes precios a Google Shopping.

Para [contratar políticas comerciales adicionales](https://help.vtex.com/es/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), solo tiene que rellenar el [formulario de política comercial adicional](https://docs.google.com/forms/d/e/1FAIpQLSe9qCGB_KM_xsV5e9uNe06JE8tMZrWcv6EuHUOmqTiM8oRW7w/viewform). Si tiene alguna duda, póngase en contacto con nuestro equipo de Growth Operations en *[Soporte](https://help.vtex.com/es/support)* seleccionando la opción **Comercial** y el tipo de solicitud `Creación de Política Comercial`.
La contratación de políticas comerciales adicionales para integración con un [conector nativo](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-nativo-vtex), un [conector certificado (partner)](https://help.vtex.com/es/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-con-un-conector-certificado-partner) u otras tiendas VTEX está exenta de la cuota mensual.

## Envío de precios de productos

El [precio](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) de su producto en Google Shopping es determinado por la selección de la política comercial. Es importante prestar atención a algunos puntos.

Si su política comercial tiene precios de/por (lo que VTEX llama [precio de lista](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#precio-de-lista) y [precio calculado](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#precio-calculado)), se enviará a Google Shopping el precio calculado, es decir, el precio «por». Para que estas promociones figuren en Google Shopping los productos deben cumplir los siguientes requisitos en Google Merchant Center:  

- Se debe haber cobrado el precio base, o un precio superior, durante un periodo de 30 días (consecutivos o no) en los últimos 200 días.  
- El precio base debe ser válido.  
- El precio de oferta debe ser inferior al de base.  
- El descuento de la oferta debe ser superior al 5 % e inferior al 90 %.  

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
