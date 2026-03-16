---
title: 'Sugerencia de precios en la integración con Amazon'
id: 5cJ7w2kLQ9mNx3bR8pVzYd
status: PUBLISHED
createdAt: 2026-03-06T18:30:00.000Z
updatedAt: 2026-03-06T18:30:00.000Z
publishedAt: 2026-03-06T18:30:00.000Z
firstPublishedAt: 2026-03-06T18:30:00.000Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amazon-price-suggestion
legacySlug: sugerencia-de-precios-amazon
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

La funcionalidad **Sugerencia de precios** analiza información de competitividad del SKU en Amazon, como el precio actual, el costo de envío y el precio del seller que está ganando la buybox.

Con base en estos datos, el sistema genera una sugerencia de precio competitivo que puede ayudar al seller a evaluar si el SKU está bien posicionado frente a los competidores.

ℹ️ La sugerencia de precio es solo una referencia de competitividad y no cambia automáticamente el precio del SKU.

Con esta funcionalidad, el seller puede visualizar, por SKU, el precio actual, la situación de la buybox y una referencia de precio competitivo para orientar ajustes.

## Acceder a las sugerencias

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Precios**.
2. Escribe **suggestions** en la barra de búsqueda para filtrar los logs o filtra por **SKU ID**.
3. Haz clic en el log deseado para ver los detalles de la sugerencia.

Al abrir un log de sugerencia, el seller encontrará la siguiente información:

- **Precio actual:** precio actual del SKU, con indicación de si está ganando o perdiendo la buybox.
- **Flete actual:** valor de envío considerado en el análisis.
- **Precio del ganador de la buybox:** valor de referencia del competidor.
- **Precio competitivo:** sugerencia de precio para aumentar la competitividad.

> ⚠️ El dato **Precio del ganador de la buybox** solo se muestra cuando estás perdiendo la buybox.

Consulta un ejemplo en la siguiente imagen:

![Ejemplo de lectura de sugerencia de precios en Amazon](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/integrações/configurações-de-integrações/sugestao-de-precos-amazon_1.png)
