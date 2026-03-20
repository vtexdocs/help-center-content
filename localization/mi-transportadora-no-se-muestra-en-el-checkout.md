---
title: 'Mi transportadora no se muestra en el checkout'
id:
status: PUBLISHED
createdAt: 2026-02-20T00:00:00.199Z
updatedAt: 2026-02-20T00:00:00.199Z
publishedAt: 2026-02-20T00:00:00.199Z
firstPublishedAt: 2026-02-20T00:00:00.199Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: my-carrier-does-not-appear-at-checkout
legacySlug: mi-transportadora-no-se-muestra-en-el-checkout
locale: es
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Envío
  - Logística
  - Checkout
---

En algunas situaciones, la transportadora puede que no se muestre como una opción de envío en el checkout al finalizar un pedido en VTEX. Este artículo reúne los principales escenarios que causan este comportamiento y presenta las soluciones recomendadas para cada caso.

> ℹ️ Antes de continuar, asegúrate de que todas las [transportadoras estén registradas](https://help.vtex.com/es/docs/tutorials/transportadoras-na-vtex) correctamente en la plataforma.

## Soluciones

### Competencia entre transportadoras del mismo tipo

El checkout muestra los [métodos de envío](https://help.vtex.com/es/docs/tutorials/como-se-maneja-el-tipo-de-entrega) de los productos, no los nombres de las transportadoras. El sistema prioriza la transportadora más rápida o con menor costo entre las opciones de un mismo método de envío, por lo que una transportadora puede no mostrarse si otra del mismo tipo tiene registrado un plazo o costo menor.

1. Para mostrar todas las transportadoras, accede a **Configuración de la tienda > Envío > Configuración**.
2. Registra las transportadoras con métodos de envío diferentes.

### La transportadora no entrega en la dirección ingresada

Si la dirección de envío del pedido no figura entre los rangos de código postal o polígonos de geolocalización configurados en la **plantilla de envío** de la transportadora, no se mostrará.

1. Verifica en la [plantilla de envío](https://help.vtex.com/es/docs/tutorials/plantilla-de-flete) de la transportadora si los rangos de código postal (`zipCodeStart`, `zipCodeEnd`) o los polígonos de geolocalización (`PolygonName`) configurados abarcan la dirección de envío del pedido.
2. Ajusta los campos de ubicación en la plantilla según sea necesario.

### El volumen del pedido excede el máximo permitido

Si el volumen total de los ítems del carrito excede el volumen máximo registrado para la transportadora en la **plantilla de envío**, esa transportadora no se mostrará como opción.

1. Accede a la configuración de la transportadora en **Configuración de la tienda > Envío > Configuración**.
2. Comprueba que el volumen máximo configurado para la transportadora se corresponde con el límite real que puede transportar.
3. Ajusta el volumen máximo en la configuración de la transportadora o en la [plantilla de envío](https://help.vtex.com/es/docs/tutorials/plantilla-de-flete), si aplica.

### El peso del pedido excede el máximo permitido

Si el peso total de los ítems del pedido excede el peso máximo registrado para la transportadora en la **plantilla de envío**, esa transportadora no se mostrará como opción.

1. Accede a la configuración de la transportadora en **Configuración de la tienda > Envío > Configuración**.
2. Comprueba que el peso máximo configurado para la transportadora se corresponde con el límite real que puede transportar.
3. Cambia los valores en los campos `weightStart` y `weightEnd` en la [plantilla de envío](https://help.vtex.com/es/docs/tutorials/plantilla-de-flete).
4. Importa la [Plantilla de Envío](https://help.vtex.com/pt/tutorial/importar-planilha-de-frete) nuevamente a la plataforma.

### División de paquetes no permitida

Si el peso del pedido supera el límite de la transportadora y la **división de la carga** no está activa en tu tienda, la transportadora no se mostrará en el checkout. Por ejemplo: si un pedido tiene 40 kg, pero el peso máximo registrado en la plantilla de envío es 30 kg, los productos solo podrán enviarse mediante la división del pedido en dos paquetes (20 kg cada uno).

1. [Activa la división de la carga](https://help.vtex.com/es/docs/tutorials/como-se-maneja-el-reparto-de-carga) en tu tienda.
2. Esta configuración permite que los pedidos se dividan en varios paquetes cuando el peso supera el límite de la transportadora, haciéndola una opción viable.

### Optimización de opciones de entrega en el checkout

La funcionalidad **Optimización de opciones de entrega** puede estar ocultando opciones de envío más caras o demoradas en el checkout.

1. Desactiva la función [Optimización de opciones de entrega en el checkout](https://help.vtex.com/es/docs/tutorials/optimizacion-de-opciones-de-entrega-en-checkout) en tu tienda.

> ⚠️ Al desactivar esta funcionalidad en el Admin VTEX, todas las opciones de envío disponibles se mostrarán en el checkout. Sin embargo, si la funcionalidad de múltiples envíos se encuentra activa en la tienda y existen opciones de envío diferentes entre los ítems seleccionados en el carrito, las **Opciones de entrega optimizadas** seguirán mostrándose. Es decir, la optimización de entrega será necesaria para manejar los múltiples paquetes (ítems con diferentes opciones de entrega).
