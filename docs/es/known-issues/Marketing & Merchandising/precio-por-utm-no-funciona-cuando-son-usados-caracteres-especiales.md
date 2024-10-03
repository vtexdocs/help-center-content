---
title: 'Precio por UTM no funciona cuando son usados caracteres especiales'
id: 5vQnjYgbE48426q2e6GMUY
status: PUBLISHED
createdAt: 2017-06-05T12:24:57.621Z
updatedAt: 2022-12-22T15:17:56.083Z
publishedAt: 2022-12-22T15:17:56.083Z
firstPublishedAt: 2017-06-05T12:32:16.311Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Catalog,Pricing & Promotions
slugEN: price-by-utm-doesnt-work-when-using-special-characters
locale: es
kiStatus: Backlog
internalReference: 
---

## Sumario

La posibilidad de crear diferentes precios es una característica muy usada en VTEX. Es un recurso bueno para practicar diferentes valores de acuerdo con el parcero comercial de su tienda, como, por ejemplo, asociar un valor de un producto que se muestra en el Buscapé.

Precio normal: 549,00
Precio UTM buscapé: 449,00

Sin embargo, al utilizar caracteres especiales en el momento de registrar la **utm\_campaign**, la plataforma no reconoce el término y el valor no se aplica.

## Simulación

1. Crear una nueva entrada en la tabla de valores
2. Asociar el nuevo valor a una UTM y en el valor de **utm\_campaign** utilizar un carácter especial, por ejemplo: `bp+`
3. Guardar

## Workaround

Sólo tiene que quitar cualquier carácter especial del campo UTM

