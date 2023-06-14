---
title: 'Definir la política comercial'
id: 3AqbcsWrge8zLt0BC5CtGd
status: PUBLISHED
createdAt: 2021-04-14T17:58:41.545Z
updatedAt: 2022-12-08T21:04:01.815Z
publishedAt: 2022-12-08T21:04:01.815Z
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

Si su política comercial tiene precios de/por (lo que VTEX llama [precio de lista](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#precio-de-lista) y [precio calculado](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#precio-calculado)), se enviará a Google Shopping el precio calculado, es decir, el precio «por».

Cuando hay varios _[sellers](https://help.vtex.com/es/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w)_ vinculados a un producto de su tienda, la regla para Google Shopping es anunciar la mejor oferta disponible.
