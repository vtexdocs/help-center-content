---
title: 'Recomendaciones de productos (beta)'
id: 2QIexbD2FSXBxELUnFtg7g
status: PUBLISHED
createdAt: 2025-06-27T20:37:59.368Z
updatedAt: 2025-07-04T13:01:10.919Z
publishedAt: 2025-07-04T13:01:10.919Z
firstPublishedAt: 2025-06-27T20:41:49.041Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: product-recommendations-beta
legacySlug: recomendaciones-de-productos-beta
locale: es
subcategoryId: 6WyZwZfn89IsnNFNkTAi8d
---

> ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si ya eres cliente VTEX y deseas adoptar esta funcionalidad en tu negocio, ponte en contacto con nuestro [Soporte comercial](es/docs/tracks/soporte-comercial). Pueden aplicarse cargos adicionales. Si aún no eres cliente, pero te interesa esta solución, llena el <a [formulario de contacto](https://vtex.com/es-mx/contacto/).

La funcionalidad Recomendaciones de productos permite que las tiendas ofrezcan experiencias personalizadas a los consumidores, mediante sugerencias de ítems basadas en diferentes estrategias de recomendación. Además, permite mostrar productos relevantes o complementarios y aumentar la tasa de conversión y el ticket promedio de la operación.

![delivery-options-es](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/recomendacoes-de-produtos-beta_1.png)

## Prerrequisitos

Para activar las recomendaciones de productos es necesario que la tienda esté implementada con [Store Framework](https://developers.vtex.com/docs/guides/store-framework), [FastStore](https://developers.vtex.com/docs/guides/faststore) o con el modelo [headless](https://developers.vtex.com/docs/guides/headless-commerce).

## Estrategias de recomendación

A continuación se describen las estrategias de recomendación disponibles desarrolladas directamente por VTEX.

| Nombre                                           | Descripción                                                                                          | Requisitos y funcionamiento                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Más populares                                    | Productos con mayor número de vistas.                                                | -                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Sugerencias para ti                              | Recomendaciones personalizadas basadas en el perfil y el comportamiento del usuario. | Mínimo de 1000 compras con más de 1 ítem en el carrito. El algoritmo analiza los patrones de compra de los clientes.                                                                                                                                                                                                                                                                                         |
| Productos similares                              | Productos parecidos a un producto específico.                                        | La similitud se determina principalmente por pertenecer a la misma categoría del catálogo. Si esto no es suficiente, el sistema también puede considerar las especificaciones de los productos. La calidad depende de la organización de tu catálogo. Si deseas personalizar las reglas de similitud, ponte en contacto con el [Soporte VTEX](/es/docs/tracks/soporte-vtex). |
| Comprados juntos (cross-sell) | Productos complementarios a un producto específico que suelen comprarse en conjunto. | Mínimo de 1000 compras con más de 1 ítem en el carrito. Identifica productos complementarios en función de la cantidad de veces que se compran juntos en el carrito.                                                                                                                                                                                                                                         |
| Más vendidos                                     | Productos más vendidos de la tienda.                                                 | -                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Vistos recientemente                             | Productos vistos recientemente por el usuario.                                       | -                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Interacciones recientes                          | Productos con mayor probabilidad de interacción futura por el usuario.               | -                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Productos visualmente similares                  | Productos visualmente parecidos a un producto específico.                            | Utiliza tecnología de reconocimiento de imagen para identificar productos con apariencia visual similar, analizando características como colores, formas y patrones.                                                                                                                                                                                                                                                         |
| Colección manual                                 | Recomendaciones a partir de una colección definida manualmente.                      | -                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Implementación

Para solicitar la activación de la funcionalidad de recomendaciones de productos en tu tienda, abre un ticket con nuestro [Soporte comercial](/es/docs/tracks/soporte-vtex) que incluya las estrategias que deseas activar. VTEX analizará la solicitud y se pondrá en contacto contigo.

### Store Framework

Para tiendas implementadas con Store Framework, utiliza el componente [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf), que permite mostrar estanterías de productos recomendados en diferentes páginas de la tienda.

### FastStore

Para tiendas implementadas con FastStore, consulta la documentación [Implementing product recommendations in FastStore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore) para integrar las APIs de recomendaciones de productos en tu tienda.

### Headless

Para implementaciones headless, usa las APIs de Recomendaciones de productos de VTEX para utilizar las estrategias de recomendación y mostrar productos en tu aplicación personalizada. Consulta la documentación [Integrating product recommendations in headless stores](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores) para más información sobre cómo integrar las APIs.