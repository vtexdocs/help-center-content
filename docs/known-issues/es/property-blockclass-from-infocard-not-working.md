---
title: 'Propiedad blockClass de infoCard no funciona'
id: LTEEWCaZx2unBWSEJFDw6
status: PUBLISHED
createdAt: 2023-01-31T19:02:03.835Z
updatedAt: 2024-07-01T18:48:42.227Z
publishedAt: 2024-07-01T18:48:42.227Z
firstPublishedAt: 2023-01-31T19:02:04.299Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: propiedad-blockclass-de-infocard-no-funciona
locale: es
kiStatus: No Fix
internalReference: 743730
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Infocard tiene una propiedad llamada blockClass para añadir clases personalizadas en el componente, pero esta propiedad no funciona


##

## Simulación



Abra su componente infoCard, añada la propiedad blockClass
Comprueba tus elementos en el DOM y no encontrarás ningún elemento infocard con la clase añadida


##

## Workaround


Construye tu propia infocard con nuestros componentes vtex.flex-layout, vtex.image y vtex.rich-text, esto te dará más flexibilidad para construir tu infocard





