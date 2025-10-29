---
title: 'Comercio unificado'
id: 5Qvw31yH2FPDBl14K5xXHA
status: PUBLISHED
createdAt: 2024-02-20T20:19:58.572Z
updatedAt: 2024-04-03T12:14:19.783Z
publishedAt: 2024-04-03T12:14:19.783Z
firstPublishedAt: 2024-02-22T14:08:56.252Z
contentType: trackArticle
productTeam: Others
slugEN: unified-commerce
locale: es
trackId: 3J7WFZyvTcoiwkcIVFVhIS
trackSlugEN: proximos-pasos-tras-el-go-live
order: 2
---

# Comercio unificado

El [comercio unificado](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3) es una evolución del omnichannel. Además de compartir datos, en esta estrategia también se unifica el sistema de procesamiento y gestión de pedidos. Esto significa que los canales de la tienda no solo pueden ver cualquier pedido realizado en otro canal de ventas, sino también procesarlo. A medida que la interconectividad aumenta, puede ser muy estratégico para el negocio operar con cuentas franquicia y [sellers white label](/es/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa).

## Cuentas franquicia y sellers white label

Las [cuentas franquicia](/es/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) son cuentas asociadas a una [cuenta principal](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/4yPqZQyj0t675QpcG7H6yl). Las empresas que tienen varias tiendas físicas, franquicia o multimarca pueden crear cuentas franquicia vinculadas a la cuenta principal de la marca.

![cuenta principal](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/guía-de-onboarding/proximos-pasos-tras-el-go-live/comercio-unificado_1.png)

Este modelo comparte la información del catálogo y [storefront](/es/tracks/serie-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ), permitiendo que el stock de las cuentas franquicia esté disponible para la venta en la cuenta principal y que se puedan utilizar varias estrategias de comercio unificado, tales como [envío desde la tienda](#envio-desde-la-tienda), [tiendas físicas como puntos de recogida](#punto-de-recogida) y [pasillo infinito](/es/tracks/serie-de-la-tienda-vtex--3J7WFZyvTcoiwkcIVFVhIS/1t2QBZvrOBSLgvHaAV9fYm).

Otras ventajas de operar utilizando cuentas franquicia son:
- Cuentas exclusivas para cada tienda para una mejor gestión del acceso de los colaboradores.

- Mejor gestión y escalabilidad de recursos gracias al registro de muelles y stocks para cada tienda.

- Gestión de promociones específicas para cada cuenta sin la obligación de contratar una nueva [política comercial](/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV).

- Posibilidad de pago en el entorno de la cuenta principal o de la cuenta franquicia ([split de pago](/es/tutorial/split-de-pagos--6k5JidhYRUxileNolY2VLx)/pedido).

- [Regionalización de sellers](/es/tutorial/configurar-a-regionalizacao-de-sellers--32t6wLpQCEnumoh8TjT5fw) (precio y stock).

- Mejor rendimiento operativo gracias al uso de requests simultáneos en el checkout de la tienda. En una cuenta estándar, en la que se registra la [estrategia de envío](/es/tracks/serie-general-de-la-tienda-vtex--eSDNk26pdvemF3XKM0nK9/75MX4aorniD0BYAB8Nwbo7#ajustes-obligatorios-en-logistica) en la cuenta principal, los requests se procesan en fila, lo que puede resultar en una posible acumulación de requests y un aumento de interrupciones (timeouts). Cada vez que se produce una interrupción, se muestra un mensaje de error en el checkout y el cliente debe presionar F5 o hacer clic en el botón de actualizar para continuar con la compra. Este comportamiento afecta negativamente la experiencia del cliente y disminuye la tasa de conversión de la tienda.

> ⚠️ Las [cuentas franquicia](/es/tutorial/what-is-a-franchise-account--kWQC6RkFSCUFGgY5gSjdl) actúan como un [seller white label](/es/tutorial/seller-white-label--5orlGHyDHGAYciQ64oEgKa) de la cuenta principal. Cuando un cliente agrega productos al carrito y simula el envío en el sitio web de la cuenta principal, el [algoritmo de selección de sellers white label](/es/tutorial/selecao-de-sellers-white-label--3MemNQ4pKkWCpMdzI27AHa) asigna automáticamente la cuenta franquicia que se encargará del [fulfillment](/es/tutorial/fulfillment-logistica-vtex--53udnvI5eBy8DKo8FOjMoP) del pedido. Si uno o más productos del carrito no están disponibles en la cuenta franquicia seleccionada, el sistema asignará otra cuenta disponible para realizar el envío de los productos faltantes, lo que permite que haya más de una entrega para el mismo pedido. Este proceso se lleva a cabo internamente, sin que el cliente vea los sellers.

## Envío desde la tienda

Las tiendas físicas pueden funcionar como minicentros de distribución para permitir el envío directo del stock a la dirección del cliente. Este tipo de operación reduce el costo y tiempo de envío y optimiza la planificación logística de la empresa. Para más información, consulta [Ship From Store](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/50GAmxxFsJoLWqcnMysWdl).

 ## Punto de recogida

Configurar [puntos de recogida](/es/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) en persona es beneficioso para las operaciones que implementan [estrategias de comercio unificado](/es/tracks/estrategias-de-comercio-unificado--3WGDRRhc3vf1MJb9zGncnv/2LGAiUnHES1enjHsfi8fI3), donde se optimiza la experiencia de compra del cliente mediante la venta y gestión de pedidos centralizados y la disponibilidad de varias opciones de envío. En VTEX, pueden registrarse los siguientes puntos de recogida:

- Centro de distribución (CD).
- Tienda física propia.
- Tienda física franquicia.
- Tienda física o punto de retirada de terceros utilizando un sistema de almacenamiento seguro, como por ejemplo, un casillero (locker).
