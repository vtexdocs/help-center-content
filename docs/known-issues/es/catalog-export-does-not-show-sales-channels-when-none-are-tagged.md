---
title: "La exportación de catálogos no muestra los canales de venta cuando se marca 'ninguno'."
id: 10Bozz8ai3fAvu1m9Ex2Gk
status: PUBLISHED
createdAt: 2022-12-23T13:38:32.114Z
updatedAt: 2022-12-23T13:38:32.766Z
publishedAt: 2022-12-23T13:38:32.766Z
firstPublishedAt: 2022-12-23T13:38:32.766Z
contentType: knownIssue
productTeam: Catalog
author: 2mXZkbi0oi061KicTExNjo
tag: Catalog
slug: la-exportacion-de-catalogos-no-muestra-los-canales-de-venta-cuando-se-marca-ninguno
locale: es
kiStatus: Backlog
internalReference: 722001
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


Actualmente, los canales de venta que se comprueban en la interfaz de usuario del producto tienen una lógica de "si no se marca ninguno, todos están disponibles".

A pesar de que esta lógica es razonable en la interfaz de usuario del catálogo, la hoja de exportación Productos y SKU puede inducir a error, ya que muestra la columna con los respectivos canales de venta como "vacía".

Una mejor solución sería listar todos los canales de venta en esta columna o, incluso mejor, un texto "todos" si no hay ninguno marcado.



## Simulación


Etiquetar un producto sin canales de venta e intentar exportar el catálogo, comprobando la columna relativa a estos datos.



## Workaround


Sabiendo de antemano que las columnas vacías pueden significar que se han seleccionado todos los canales de venta.

