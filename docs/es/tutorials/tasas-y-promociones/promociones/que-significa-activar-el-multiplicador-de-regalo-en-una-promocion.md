---
title: 'Multiplicador de regalos en promociones'
id: 1gydgkmjEWcoo2CskUwuYK
status: PUBLISHED
createdAt: 2019-01-24T20:45:34.467Z
updatedAt: 2025-09-24T11:13:38.983Z
publishedAt: 2025-09-24T11:13:38.983Z
firstPublishedAt: 2019-01-24T22:13:50.154Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: what-does-it-mean-to-activate-a-gift-multiplier-on-a-promotion
legacySlug: que-significa-activar-el-multiplicador-de-regalo-en-una-promocion
locale: es
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Al configurar una promoción Compra uno y lleva uno gratis o Regular, puedes agregar el Multiplicador de regalos. Esta opción ajusta automáticamente la cantidad máxima de regalos que el cliente puede seleccionar en el carrito, según la cantidad de SKUs elegibles.

## Configurar en el Admin
1. En el Admin VTEX, accede a Promociones > Promociones, o ingresa Promociones  en la barra de búsqueda en la parte superior de la página.
2. Haz clic en `Crear promoción`.
3. Elige el tipo de promoción:
    - Regular
    - Compra uno y lleva uno gratis
4. En el menú `Configurar beneficio`, selecciona Regalo.
5. Selecciona los SKUs que activarán el regalo.
6. En el campo **Cantidad máxima de regalos**, define cuántos regalos podrá seleccionar el cliente.
7. En el selector contiguo, selecciona Por carrito o **Por ítem elegible**.
8. Completa los demás campos de la promoción y haz clic en **Guardar**.

Consulta a continuación cómo se aplica el multiplicador en cada escenario y cómo configurarlo en el Admin VTEX.

## Comportamiento del multiplicador de regalos
En el panel lateral `Configurar beneficio > Regalo`, hay un selector que define cómo se aplicará la cantidad máxima de regalos que ofrece dos opciones:

### Por carrito
La cantidad máxima de regalos se aplica una sola vez, independientemente de la cantidad de SKUs elegibles en el carrito.

- Ejemplo:

    - Cantidad máxima de regalos: `2`
    - SKUs elegibles en el carrito: `3`
    - Regalos disponibles: `2`

### Por ítem elegible 
La cantidad máxima de regalos es multiplicada por el número de SKUs elegibles para definir la cantidad total de regalos disponibles.

- Ejemplo:

    - Cantidad máxima de regalos: `2`
    - SKUs elegibles en el carrito: `3`
    - Regalos disponibles: `6` (2 × 3)

