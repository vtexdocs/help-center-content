---
title: 'El filtro de pedidos no funciona correctamente debido a la presencia de comillas dobles (") en el nombre de la promoción o del SKU.'
id: 4Qm0akQTQXR8sSbkTDiBL7
status: PUBLISHED
createdAt: 2024-06-06T15:42:19.747Z
updatedAt: 2024-06-06T15:42:20.627Z
publishedAt: 2024-06-06T15:42:20.627Z
firstPublishedAt: 2024-06-06T15:42:20.627Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: el-filtro-de-pedidos-no-funciona-correctamente-debido-a-la-presencia-de-comillas-dobles-en-el-nombre-de-la-promocion-o-del-sku
locale: es
kiStatus: Backlog
internalReference: 1045623
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El sistema de filtrado de pedidos actualmente no devuelve los pedidos con promociones que contienen comillas dobles `"` en sus nombres, esto también se aplica al nombre SKU.


##

## Simulación


Para reproducir este escenario, siga los siguientes pasos.

1. Cree una promoción/sku con comillas dobles `"` en el nombre;
Ejemplo: Nombre de la promoción como `10% de descuento usando o cupom "DIAGEO" (8)`.
2. Crear un pedido de prueba:

  1. En el entorno de la tienda (storefront), seleccione un artículo y añádalo al carrito;
  2. Asegúrate de que se aplica la promoción;
  3. Vaya a la caja y realice el pedido.
3. Vaya a **Pedidos > Gestión de pedidos**;
4. Haga clic en `Todos los pedidos`;
5. Utiliza el **filtro** para seleccionar la promoción que has añadido;
6. Observe que no se encuentran pedidos con el filtro seleccionado, y el mensaje devuelto en la interfaz de usuario es: `Nenhum pedido encontrado. Limpe seus filtros e tente uma pesquisa diferente.`



## Workaround


No hay ninguna solución disponible.





