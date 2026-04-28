---
title: 'Cómo se maneja el apilamiento'
id: tutorials_124
status: PUBLISHED
createdAt: 2017-04-27T22:18:33.952Z
updatedAt: 2023-02-28T01:53:40.922Z
publishedAt: 2023-02-28T01:53:40.922Z
firstPublishedAt: 2017-04-27T23:00:43.968Z
contentType: tutorial
productTeam: Post-purchase
author: authors_84
slugEN: how-does-stacking-work
legacySlug: como-se-maneja-el-apilamiento
locale: es
subcategoryId: 7fTH6bP0C4IaM8qWi0kkQC
---

Cuando se calcula la suma de las medidas de más de un SKU, el sistema posee una inteligencia de Apilamiento que permite que dos medidas se mantengan con igual valor y sólo una de ellas es multiplicada por la cantidad. Esta medida será siempre el menor lado, vea como se hace el cálculo:

`(Menor lado x Cantidad de SKUs) + Ancho + Largo`

Sólo se permitirá la quiebra de paquetes caso esté configurada la división de carga. [Sepa cómo configurar en nuestro artículo](/es/docs/tutorials/como-se-maneja-el-reparto-de-carga).

## Medida de la arista más grande

Esta funcionalidad permite limitar que sólo se pueda montar un paquete caso ninguna de las medidas sobrepase este valor.

### Ejemplos

Medida de la mayor arista catastrada: 80 cm.

- Compra de 1 unidad con altura de 20 cm = entrega en 1 remesa (1 envío).
- Compra de 8 unidades con altura total en 160 cm = entrega en 2 remesas (2 envíos).
- Compra de 1 unidad de otro producto, con altura de 100 cm = la compra no podrá ser finalizada, pues no es posible la entrega de esas dimensiones (altura máxima permitida = 80, altura del producto = 100).
