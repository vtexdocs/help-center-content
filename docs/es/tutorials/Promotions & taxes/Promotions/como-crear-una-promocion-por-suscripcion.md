---
title: ' Crear una promoción por suscripción'
id: 3ROT13HYNeUIv0plDqgNed
status: PUBLISHED
createdAt: 2019-10-31T14:21:23.412Z
updatedAt: 2024-08-09T19:35:32.700Z
publishedAt: 2024-08-09T19:35:32.700Z
firstPublishedAt: 2019-11-05T18:40:57.634Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1E4UkWguFZAXjkguvNHPIv
slugEN: creating-a-subscription-promotion
locale: es
legacySlug: como-crear-una-promocion-por-suscripcion
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

En este artículo, encontrará el paso a paso para crear promociones por suscripción dentro de una 

1. Vaya al módulo de **Tasas y Promociones**.
2. Haga clic en **Promociones**.
3. Haga clic en el botón `Nueva promoción`.
4. Seleccione `Promoción Regular`.
5. En la sección **¿Cuáles son las condiciones para que la promoción sea válida?**, seleccione la casilla **Es un pedido de suscripción**.  Así, la promoción se aplicará a los pedidos por suscripción. Sólo los productos con una suscripción en la cesta recibirán el descuento. Para entender las posibilidades de configuración, vea las siguientes condiciones:

![frequencia1](https://images.ctfassets.net/alneenqid6w5/3Tg0ujk38ip94YogUGdD9M/ca5cd9a587aaff53b054efb27bf04008/image__3_.png)

- **Pedido original**: pedidos que generan las suscripciones, pero que aún no forman parte de los ciclos de suscripción.
- **Pedidos recurrentes**: pedidos que forman parte de los ciclos de suscripción.
- **Filtrar por**: selección que filtra los pedidos por suscripción que serán válidos para la promoción.
  - **Frecuencia**: selección de la frecuencia de los pedidos de suscripción en días, semanas, meses o años.
  - **Número de ciclo**: selección de ciclos de suscripción que se incluirán en la promoción. Esta opción solo se desbloquea si se seleccionó previamente Órdenes recurrentes. 

Configure correctamente la frecuencia y el ciclo para garantizar que la promoción se aplique a los pedidos recurrentes. La frecuencia define el intervalo entre los pedidos, mientras que el ciclo determina a partir de qué pedido se aplicará la promoción. Si no configura ambos parámetros, la promoción puede no aplicarse como se espera, afectando solo el primer pedido o ninguno de los pedidos recurrentes. Por lo tanto, seleccione y configure ambos parámetros de acuerdo con las necesidades específicas de la promoción.

**Ejemplo**: Al seleccionar **Frecuencia** igual a cada 2 semanas y **Número del ciclo** igual a 4, la promoción solo se aplicará en el cuarto ciclo, es decir, cuando se repita este pedido. Mira este escenario ilustrado en la siguiente tabla:

| Fecha       | Número del ciclo | Validez                    |
|------------|-----------------|----------------------------|
| 25/12/2021 | Primer ciclo  | La promoción será válida     |
| 08/01/2022 | Segundo ciclo | La promoción no será válida
| 22/01/2022 | Tercer ciclo | La promoción no será válida
| 05/02/2022 | Cuarto ciclo | La promoción será válida |

>ℹ️ No es posible configurar promociones por UTM y promociones por suscripción utilizando cupones en pedidos recurrentes. Los cupones se aplicarán solo a pedidos originales.

<ol start="6">
<li>Rellene los<a href="https://help.vtex.com/es/tutorial/registro-promocion-regular--tutorials_327" rel="noopener noreferrer" target="_blank" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word"> demás campos de la promoción</a>.</li><br>
<li>Haga Clic en <span class="t-body c-on-base pa2 mw6 br2 bg-muted-4" style="word-break: break-word; overflow-wrap: break-word;">Guardar</span>.</li>
</ol>
