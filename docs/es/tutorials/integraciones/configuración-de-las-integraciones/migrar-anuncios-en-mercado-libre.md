---
title: 'Migrar anuncios en Mercado Libre'
id: 2TuhYgqZr2CAAi2oQaWQcO
status: PUBLISHED
createdAt: 2018-10-24T12:23:06.634Z
updatedAt: 2023-03-28T22:25:13.780Z
publishedAt: 2023-03-28T22:25:13.780Z
firstPublishedAt: 2018-10-24T13:49:54.100Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: migrating-ads-in-mercado-livre
legacySlug: migrar-anuncios-en-mercado-libre
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

Cuando una tienda ya vende sus productos en Mercado Libre, incluso antes de realizar la integración a través de VTEX, se deben migrar los anuncios existentes para que no pierdan su relevancia en el marketplace. Esto se aplica principalmente a las tiendas que utilizaban otras plataformas de ecommerce  o que ya utilizaban VTEX, pero recurrían a otro integrador.

Dado que se trata de un procedimiento muy delicado, la migración de anuncios se debe hacer de forma manual. Usaremos una plantilla y una función «de/para» para hacer la migración de tus anuncios en Mercado Libre y tus SKU en VTEX.

Para migrar los anuncios, debes seguir los pasos a continuación. 

1. [Configurar la integración con Mercado Libre](#1-configurar-la-integracion-con-mercado-libre)
2. [Descargar la plantilla de migración](#2-descargar-la-plantilla-de-migracion)
3. [Rellenar la plantilla de migración de los anuncios](#3-rellenar-la-plantilla-de-migracion-de-los-anuncios)
4. [Abrir un ticket en Soporte VTEX](#4-abrir-un-ticket-en-soporte-vtex)
5. [Esperar la confirmación de la migración de los anuncios](#5-esperar-la-confirmacion-de-la-migracion-de-los-anuncios)

## 1. Configurar la integración con Mercado Libre 

El primer paso para migrar tus anuncios de Mercado Libre es configurar la integración con el marketplace. Para hacerlo, sigue las instrucciones en el artículo [Integración con Mercado Libre](/es/tracks/configurar-integracao-do-mercado-livre).

Durante la etapa [Registro del conector de Mercado Libre](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq), deberás rellenar el campo `ID de política comercial` con el número 0. De esta manera, los anuncios que se migrarán de la plantilla no se duplicarán en la plataforma de Mercado Libre

> ❗ Si usas el ID de una política comercial ya existente, la integración creará nuevos anuncios en Mercado Libre y tu catálogo se duplicará. La única forma de resolver este problema será desactivando manualmente los anuncios duplicados en el panel de Mercado Libre.

## 2. Descargar la plantilla de migración 

En esta etapa, deberás hacer la equivalencia entre tus anuncios en Mercado Libre y los SKU de tu tienda. Esta información se envía a través de la plantilla de migración.

Primero, descarga la [plantilla de migración](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/es/tutorials/integraciones/configuración-de-las-integraciones/Planilha_de_Migrac__a__o_de_Anu__ncios_-_Mercado_Livre_BR.xlsx) y usa este archivo como modelo para rellenarla. Esta es la plantilla que rellenarás y enviarás a Mercado Libre.

El producto registrado en VTEX solo se podrá mapear con un anuncio en Mercado Libre. En el caso de los [anuncios Clásicos y Premium](/es/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/2MR2USqcvDGaoAkGNdCfGi), el mismo producto podrá anunciarse en ambos tipos de anuncios, ya que tienen configuraciones separadas.

> ℹ️ La integración entre VTEX y Mercado Libre permite asociar un SKU registrado en VTEX a un único anuncio en Mercado Libre por vez. Por lo tanto, es necesario separar los anuncios Clásicos de los Premium cuando se rellena la plantilla de migración.

## 3. Rellenar la plantilla de migración de los anuncios

La plantilla contiene las siguientes columnas:

| **Columna** | **Descripción** | **Contenido** |
| ---------- | ---------- | ---------- |
| **ID del anuncio** | Identificación del anuncio en la plataforma de Mercado Libre | Rellena la columna con el ID del anuncio de Mercado Libre. Encontrarás el ID (con o sin guion) en la URL del anuncio en Mercado Libre. Para los clientes de Brasil, el código tendrá las iniciales MLB seguido de una secuencia numérica en el siguiente formato: MLBXXXXXXXX (sin guion). Por ejemplo, la URL de un producto en Mercado Libre es [https://www.mercadolibre.com.co/apple-airpods-pro-blanco/p/MCO15306525](https://www.mercadolibre.com.co/apple-airpods-pro-blanco/p/MCO15306525). En este caso, el ID del anuncio que se usará en esta columna de la plantilla es `MCO15306525`. Los clientes de LATAM tienen iniciales distintas. Si tienes alguna duda, consulta el admin de tu tienda en Mercado Libre |
| **ID del SKU** | Identificación del SKU en la plataforma VTEX | Rellena la columna con el ID del SKU anunciado en Mercado Libre. Para ver el **ID del SKU**, accede al Admin VTEX y haz clic en *PRODUCTOS > Catálogo > Productos y SKU*. Verás una secuencia numérica que corresponde al ID del SKU en la columna **SKU**, entre paréntesis |
| **ID de la variación** | Identificación de las variaciones de los SKU en la plataforma de Mercado Libre | Rellena la columna con la variación del SKU en Mercado Libre. Si un producto tiene una especificación de SKU, por ejemplo, Color, Tamaño o Voltaje en VTEX, debes [crear una variación del producto en la plataforma de Mercado Libre](https://developers.mercadolibre.com.ar/variaciones#Agregar-nuevas-variaciones). Puedes encontrar este ID a través de la siguiente ruta de la API de Mercado Libre substituyendo `(ID_anuncio)` por el ID del anuncio de Mercado Libre. En respuesta a esta acción, el ID de la variación corresponderá al valor en el parámetro `variations`. `https://api.mercadolibre.com/items/{ID_anúncio}?include_attributes=all` |

### Ejemplo de cómo rellenar

| **ID do Anúncio** | **ID do SKU**  | **ID da Variação** |
| ----------    | ---------- | ----------     |
| MCO9999999999 | 123        | 29999999930    |
| MCO9999999999 | 124        | 29999999931    |
| MCO9999999999 | 125        | 29999999932    |
| MCO6666666666 | 333        |                |

## 4. Abrir un ticket en Soporte VTEX

Para migrar los anuncios que se mapearon en la etapa anterior, es necesario abrir un ticket en el [Soporte VTEX](/es/support) con el asunto **"Mercado Libre - Migración de anuncios"** y adjuntar la [plantilla de migración rellenada](#2-descargar-la-plantilla-de-migracion).

Recomendamos que la migración se realice para todos los productos a la vez. Si el anuncio de algún producto no se mapeó, la integración no lo migrará. 

Solo se tendrán en cuenta los anuncios mapeados en la plantilla de migración, es decir, aunque el anuncio exista en Mercado Libre, si no está mapeado en la plantilla, la integración no podrá actualizar la información del producto, del precio y del stock, y no se se podrán integrar los pedidos realizados en Mercado Libre.
Si hay más de un anuncio de un mismo producto en Mercado Libre, cada anuncio con una variación, y quieres unirlos, sugerimos que los mantengas separados. En caso de que quieras unirlos de todos modos, te recomendamos ponerte en contacto con el equipo de CX de VTEX a través del [Soporte VTEX](/es/support).

## 5. Esperar la confirmación de la migración de los anuncios

Tras enviar la plantilla de migración al Soporte VTEX, espera que el equipo de soporte te contacte para confirmar la migración de los anuncios.

Si algunos anuncios no se pueden migrar debido a errores cometidos al rellenar la plantilla, deberás revisar y volver a enviar la plantilla al Soporte VTEX.
