---
title: 'VTEX Ad Network (Beta)'
id: 2cgqXcBuJmXN2livQvClur
status: PUBLISHED
createdAt: 2024-04-23T17:38:07.378Z
updatedAt: 2024-08-09T21:21:48.620Z
publishedAt: 2024-08-09T21:21:48.620Z
firstPublishedAt: 2024-04-23T19:11:42.313Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slug: vtex-ad-network-beta
locale: es
legacySlug: vtex-ad-network-beta
subcategoryId: 2AksvvAtAsbAfE7HsBIVDU
---

>ℹ️ VTEX Ad Network se encuentra en fase beta, lo que significa que estamos trabajando para mejorarlo. Si ya eres cliente de VTEX y deseas adoptar esta funcionalidad para tu negocio, por favor, póngate en contacto con el [Soporte Comercial](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ). Si aún no es cliente pero estás interesado(a) en esta solución, por favor, completa el [formulario de contacto](https://vtex.com/co-es/contacto/).

**VTEX Ad Network** conecta a retailers VTEX con marcas interesadas en anunciar sus productos. Con esta conexión, anunciantes y retailers VTEX pueden impulsar su negocio:

- **Anunciantes:** marcas que pueden crear campañas de anuncios para promocionar productos en storefronts de tiendas VTEX que tengan esos mismos productos en sus catálogos, incrementando las ventas.
- **Retailers:** son retailers que tienen tiendas VTEX que pueden ofrecer espacios en sus storefronts para que los anunciantes promocionen sus productos. Estos retailers recibirán una valor por cada clic recibido en anuncios de su tienda.

## Campañas

Una campaña de **VTEX Ad Network** tiene las siguientes características:

- Productos promocionados.
- Presupuesto total.
- Oferta, que es el costo por clic (CPC), es decir, el valor que el anunciante está dispuesto a pagar por cada clic recibido en el anuncio. Este valor también determina la [prioridad de diferentes anuncios](#priorizacion-de-anuncios) para el mismo espacio de visualización. Este valor se define por producto.
- Duración.
- Cobertura, que determina si la campaña se desarrollará en toda la red de Ad Network o en tiendas específicas.

Al crear una campaña, el anunciante define uno o varios códigos EAN (códigos de barras) asociados a los productos que desea promocionar. De esta forma, VTEX podrá mostrar estos anuncios en todas las tiendas que vendan ese producto y que se hayan adherido a **VTEX Ad Network**. O, si lo prefiere, el anunciante puede seleccionar en qué tiendas desea mostrar su campaña, de entre las posibles.

## Formato del anuncio

Actualmente, VTEX ofrece un único formato de anuncio: productos patrocinados. Esto significa que los productos promocionados por los anunciantes pueden aparecer en un lugar destacado en algunos contextos en los que hay listas de productos:

- Resultados de búsqueda.
- Páginas de categorías.

Consulta a continuación un ejemplo del modo de exhibición de este formato:

![vtex_ad_network_sponsored_ES](//images.ctfassets.net/alneenqid6w5/1PlUii3Hd3Tma9trnhqnLS/bfec823e3960cac69bf878395437cdec/vtex_ad_network_sponsored.png)

Los retailers participantes en **VTEX Ad Network** podrán [configurar la cantidad de espacios para anuncios](https://help.vtex.com/es/tutorial/anunciando-com-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse#crear-campana) que disponibilizarán en cada uno de estos contextos en la tienda.

## Priorización de anuncios

Cada vez que un cliente navega a una página de una tienda que tiene espacio de anuncios disponible, **VTEX Ad Network** determina los anuncios que se mostrarán.

Este proceso de priorización se desarrolla en tres etapas:

#### 1. Selección

- **VTEX Ad Network** tiene en cuenta el contexto de navegación del cliente, es decir, término de búsqueda, categoría o vitrina, y selecciona campañas que contienen productos que se ajustan a este contexto. La plataforma también considera una puntuación mínima de relevancia, para garantizar que solo se muestren anuncios que puedan interesar al cliente.
- En esta etapa, VTEX también tiene en cuenta la compatibilidad desde el punto de vista de la [configuración de la campaña](#campanas), como cobertura y términos de búsqueda negativos.

#### 2. Definición del presupuesto diario promedio

- En esta etapa, VTEX pondera el presupuesto de las campañas, excluyendo las que no tienen presupuesto disponible y optimizando gastos en función de la probabilidad de clics y conversión.

#### 3. Subasta

- A partir de los candidatos seleccionados en las etapas anteriores, **VTEX Ad Network** determina los productos promocionados para ocupar los espacios disponibles.
- La plataforma clasifica los anuncios en función de su oferta de costo por clic (CPC) y [nivel de calidad](#nivel-de-calidad).
- También hay un factor aleatorio en el cálculo de la subasta para evitar sesgos. Por lo tanto, a medida que aumenta el valor del CPC y el nivel de calidad, aumenta la probabilidad de que un anuncio obtenga una mejor clasificación, aunque no hay garantía de que siempre sea así.

Una vez determinados los anuncios que se muestran en la página, se determina el valor de las ofertas. La oferta ganadora de la subasta tendrá el valor final de la segunda mayor oferta más USD 0.01.

>❗ Puede ocurrir que no se seleccione ningún anuncio con el proceso de priorización si no hay productos promocionados que se ajusten al contexto de navegación, a la cobertura de la tienda o que no tienen presupuesto disponible.

### Nivel de calidad

El nivel de calidad de los anuncios es una medida que tiene en cuenta distintos criterios de evaluación e influye en la etapa de subasta en el proceso de [Priorización de anuncios](#priorizacion-de-anuncios). Cuanto más alto sea el nivel de calidad, más probabilidades habrá de que un determinado anuncio obtenga una buena clasificación en la subasta.

### Ejemplo de priorización

Considera los siguientes anuncios, de campañas diferentes, que compiten en una misma tienda.

| **Anuncio** | **Producto** | **Nivel de calidad** | **Oferta** | **Presupuesto** |
| :---: | :---: | :---: | :---: | :---: |
| 1 | Perfume A | 10 % | 1.00 USD | 0 USD |
| 2 | Perfume B | 1 % | 2.00 USD | 10 USD |
| 3 | Perfume C | 10 % | 0.90 USD | 10 USD |
| 4 | Champú A | 5 % | 0.50 USD | 10 USD |

Por ejemplo, si un cliente de esta tienda accede a la página de la categoría **Perfumes**, que contiene 300 productos, el proceso de priorización sería el siguiente:

1. En la etapa de redirección, la plataforma descarta el anuncio 4 porque no se ajusta al contexto de navegación del cliente.
2. Al evaluar el ritmo, la plataforma descarta el anuncio 1, ya que este no tiene presupuesto disponible.
3. En la subasta, el producto 3 tiene más posibilidades de ocupar el primer puesto, teniendo en cuenta la **Oferta** y el **Porcentaje de conversiones**.

## Ventana de atribución

La ventana de atribución de **VTEX Ad Network** es de 15 días. Esto significa que si un cliente hace clic en un anuncio de un producto y compra ese producto en los 15 días siguientes al clic, VTEX Ad Network atribuye esta venta al anuncio.

Sin embargo, en caso de que el cliente lo compre después de este periodo, la venta no se atribuirá al anuncio.

## Cómo formar parte de VTEX Ad Network

Consulta a continuación cómo puedes formar parte de **VTEX Ad Network** ya sea como [retailer](#retailers) que muestra anuncios o como [anunciante](#anunciantes).

### Retailers

>⚠️ Por el momento, solamente tiendas desarrolladas con [Store Framework](https://help.vtex.com/es/tracks/vtex-store-overview--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework) pueden ofrecer espacios para anuncios.

Para disponibilizar espacios para anuncios en tu tienda, debe ponerse en contacto con el [Soporte Comercial](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar la instalación de la aplicación VTEX Ad Network para tiendas en su cuenta VTEX.

Para saber más sobre las funcionalidades para tiendas, consulta el artículo [Mostrar anuncios con VTEX Ad Network en tu tienda (Beta)](https://help.vtex.com/es/tutorial/exibindo-anuncios-do-vtex-ad-network-na-sua-loja-beta--6gWgZrMLcS5FDFFdl5LETA).

### Anunciantes

Cualquier anunciante interesado en promocionar productos que ya se venden en las tiendas VTEX puede anunciar utilizando **VTEX Ad Network**. Para ello, debes ponerte en contacto con el [Soporte Comercial](https://help.vtex.com/es/tracks/soporte-en-vtex--4AXsGdGHqExp9ZkiNq9eMy/3KQWGgkPOwbFTPfBxL7YwZ) para solicitar la instalación de la aplicación __VTEX Ad Network__ en tu cuenta VTEX.

Aprende más sobre las funcionalidades disponibles para los anunciantes en el artículo [Anunciar con VTEX Ad Network (Beta)](https://help.vtex.com/es/tutorial/advertising-with-vtex-ad-network-beta--5WoXcJzHc7EQElpPjziqse).
