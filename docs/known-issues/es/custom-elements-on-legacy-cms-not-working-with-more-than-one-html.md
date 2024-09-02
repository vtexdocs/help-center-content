---
title: 'Elementos personalizados en cms heredados no funcionan con más de un HTML'
id: 6hGraRq2ffsw5c3jJ8nwh0
status: PUBLISHED
createdAt: 2023-07-31T16:35:04.392Z
updatedAt: 2023-07-31T16:35:05.018Z
publishedAt: 2023-07-31T16:35:05.018Z
firstPublishedAt: 2023-07-31T16:35:05.018Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: elementos-personalizados-en-cms-heredados-no-funcionan-con-mas-de-un-html
locale: es
kiStatus: Backlog
internalReference: 871480
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Cuando se crea un elemento personalizado con más de un elemento HTML, sólo se carga el primero en la plantilla.


##

## Simulación



1. Crear un elemento personalizado con tipo HTML;
2. Crea al menos 2 códigos html sobre este elemento personalizado;
3. Compruebe que la plantilla que tiene este elemento personalizado sólo carga el primer HTML.



## Workaround


Reúne todos los htmls en un solo elemento sobre el elemento personalizado.





