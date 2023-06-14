---
title: 'Arquitectura del sistema de Precios'
id: 7GptzvlPDVM11ojEjywIQx
status: PUBLISHED
createdAt: 2019-07-04T13:51:00.418Z
updatedAt: 2022-07-27T20:39:31.113Z
publishedAt: 2022-07-27T20:39:31.113Z
firstPublishedAt: 2019-07-17T19:40:40.258Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: arquitectura-del-sistema-de-precios
locale: es
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugES: precios-101
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

![Architecture-ES](https://images.ctfassets.net/alneenqid6w5/6bnxEox2mBlC6eFRoXv2B2/c8275d94ff8ec1867467a22eeed50464/Architecture__3_.svg)

## Precio calculado

Hay algunos criterios que se tienen en cuenta en la decisión del sistema sobre cuál debe ser el **precio de venta de un SKU para una determinada tabla de precio**. Este precio de venta se denomina **precio calculado**.

El módulo de precios considera 4 criterios para calcular el precio calculado para una tabla de precios:

- Precio Base
- Regla de Precio
- Redondeo de Precios
- Precio Fijo

1. Si el SKU tiene apenas registrado el *precio base*, el precio calculado para una determinada tabla de precios será igual al **precio base**.
![rule1-ES](https://images.ctfassets.net/alneenqid6w5/4R46AGzDiANh7Qvki4aAFb/585544b840165564ed86a740ae90850d/rule1__2_.svg) 

2. Si el SKU tiene el *precio base* y una *regla de precio* configurada para una determinada tabla de precios, el precio calculado será igual al **precio base modificado por la regla de precio**.
![rule2-ES](https://images.ctfassets.net/alneenqid6w5/6G50mQEFbvLdoS0GshmqrZ/45c8762d46b0cca57ec96505db2b708f/rule2__2_.svg) 

3. En otro escenario, vamos a considerar un SKU con *precio base*, *regla de precio* y *redondeo de precios*. **El precio calculado para una determinada tabla de precio se calculará mediante una combinación de estos tres factores**. Primero, el precio base se modificará por la regla de precio. Después de esto, se producirá el redondeo por la regla de precio psicológico.
![rule3-ES](https://images.ctfassets.net/alneenqid6w5/3FEUQbPoblkpqqQpBrzUjC/cb730b634996a8f57356b794353f63d2/rule3__2_.svg)

4. Finalmente, si un SKU tiene un *precio fijo* registrado, **el precio calculado para una determinada tabla de precios será igual al precio fijo**. Este precio tiene un peso superior a los otros precios. De esta manera, el módulo de precios *ignora los otros precios* si encuentra un precio fijo asociado a un SKU.
![rule4-ES](https://images.ctfassets.net/alneenqid6w5/1IO167lvTydJX8UqYSgdWi/58103cb411586d9bbe924ecc11680155/rule4__3_.svg)

## Validar precio calculado

Para verificar el precio de venta de un SKU en una determinada tabla de precios, puede consultar el **valor del precio computado** en la sección de **Lista de precios** del admin de VTEX. En el siguiente ejemplo, vemos que el precio computado del **SKU 14** para la **tabla de la política comercial 1** es igual a **334.62**:

![computed-price-es](https://images.ctfassets.net/alneenqid6w5/4bUfMSdT0nD8ySiMZ5QztD/6e34043f53fbb6296a3d82c9d6892aa4/computed-price-es.png)

También puede verificar cuál es el precio computado de un SKU en una tabla de precios **haciendo una llamada por API**. Para esto, debe hacer un **GET** en el endpoint [Get Computed Price by price table or trade policy](https://developers.vtex.com/vtex-rest-api/reference/getcomputedpricebypricetable).

Esta llamada devuelve el `sellingPrice` de un SKU en la tabla de precio `1`. **Esta es la información que *Pricing* entrega como *precio de venta* del SKU**.

En los siguientes pasos de esta guía, detallaremos cada uno de los conceptos presentados en este artículo y cómo registrar los precios de sus SKUs en la plataforma.

