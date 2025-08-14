---
title: 'Arquitectura del sistema de Precios'
id: 7GptzvlPDVM11ojEjywIQx
status: PUBLISHED
createdAt: 2019-07-04T13:51:00.418Z
updatedAt: 2024-04-22T19:20:30.485Z
publishedAt: 2024-04-22T19:20:30.485Z
firstPublishedAt: 2019-07-17T19:40:40.258Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: pricing-system-architecture
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugEN: precios-101
---

## Definición 

La arquitectura del módulo de precios está organizada a partir de **tres conceptos fundamentales**:

- Precios
- Tablas de precios
- Contextos para la aplicación de las tablas de precios.

Los **precios** son las informaciones de los valores de venta de sus SKUs. Estos precios se almacenan en **tablas de precios**. A su vez, estas tablas de precios se pueden aplicar a diferentes **contextos**. 

Estos pueden ser:

- una **política comercial**
- en grupo de **clientes autenticados** en su tienda
- el **origen del tráfico** para su tienda (UTMs)
- las **condiciones de una promoción**

A continuación, vemos un esquema de cómo se relacionan los conceptos de *precios*, *tabla de precios* y *contextos*:

![Architecture-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/precios-101/arquitectura-del-sistema-de-precios_1.svg)

## Precio calculado

Hay algunos criterios que se tienen en cuenta en la decisión del sistema sobre cuál debe ser el **precio de venta de un SKU para una determinada tabla de precio**. Este precio de venta se denomina **precio calculado**.

El módulo de precios considera 4 criterios para calcular el precio calculado para una tabla de precios:

- Precio Base
- Regla de Precio
- Redondeo de Precios
- Precio Fijo

1. Si el SKU tiene apenas registrado el *precio base*, el precio calculado para una determinada tabla de precios será igual al **precio base**.
![rule1-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/precios-101/arquitectura-del-sistema-de-precios_2.svg) 

2. Si el SKU tiene el *precio base* y una *regla de precio* configurada para una determinada tabla de precios, el precio calculado será igual al **precio base modificado por la regla de precio**.
![rule2-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/precios-101/arquitectura-del-sistema-de-precios_3.svg) 

3. En otro escenario, vamos a considerar un SKU con *precio base*, *regla de precio* y *redondeo de precios*. **El precio calculado para una determinada tabla de precio se calculará mediante una combinación de estos tres factores**. Primero, el precio base se modificará por la regla de precio. Después de esto, se producirá el redondeo por la regla de precio psicológico.
![rule3-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/precios-101/arquitectura-del-sistema-de-precios_4.svg)

4. Finalmente, si un SKU tiene un *precio fijo* registrado, **el precio calculado para una determinada tabla de precios será igual al precio fijo**. Este precio tiene un peso superior a los otros precios. De esta manera, el módulo de precios *ignora los otros precios* si encuentra un precio fijo asociado a un SKU.
![rule4-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/precios-101/arquitectura-del-sistema-de-precios_5.svg)

## Validar precio calculado

Para verificar el precio de venta de un SKU en una determinada tabla de precios, puede consultar el **valor del precio computado** en la sección de **Lista de precios** del admin de VTEX. En el siguiente ejemplo, vemos que el precio computado del **SKU 14** para la **tabla de la política comercial 1** es igual a **334.62**:

![computed-price-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/precios-101/arquitectura-del-sistema-de-precios_6.png)

También puede verificar cuál es el precio computado de un SKU en una tabla de precios **haciendo una llamada por API**. Para esto, debe hacer un **GET** en el endpoint [Get Computed Price by price table or trade policy](https://developers.vtex.com/docs/api-reference/pricing-api#get-/pricing/prices/-itemId-/computed/-priceTableId-).

Esta llamada devuelve el `sellingPrice` de un SKU en la tabla de precio `1`. **Esta es la información que *Pricing* entrega como *precio de venta* del SKU**.

En los siguientes pasos de esta guía, detallaremos cada uno de los conceptos presentados en este artículo y cómo registrar los precios de sus SKUs en la plataforma.

