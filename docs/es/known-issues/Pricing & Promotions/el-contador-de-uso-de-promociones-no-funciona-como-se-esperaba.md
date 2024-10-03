---
title: 'El contador de uso de promociones no funciona como se esperaba'
id: 7iamjGsN4PuODQ359OsopW
status: PUBLISHED
createdAt: 2024-09-02T13:01:22.361Z
updatedAt: 2024-09-02T13:01:23.422Z
publishedAt: 2024-09-02T13:01:23.422Z
firstPublishedAt: 2024-09-02T13:01:23.422Z
contentType: knownIssue
productTeam: Pricing & Promotions
author: 2mXZkbi0oi061KicTExNjo
tag: Pricing & Promotions
slugEN: promotion-usage-counter-not-working-as-expected
locale: es
kiStatus: Backlog
internalReference: 1090367
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


El contador de uso de promociones no está funcionando como se esperaba, lo que provoca una pérdida de control sobre el número de veces que se aplica una promoción. El problema surge porque el sistema de Checkout se encarga de notificar el uso de una promoción, mientras que el sistema de gestión de pedidos se encarga de informar de la cancelación, lo que debería disminuir el contador de uso. Sin embargo, estos sistemas envían notificaciones diferentes, provocando un mal funcionamiento del contador y creando más pedidos con la promoción aplicada de los previstos.


##

## Simulación



1. Crear una promoción con un límite de uso específico.
2. Aplicar la promoción a múltiples pedidos a través del sistema de Checkout.
3. Cancelar algunos de estos pedidos a través del OMS.
4. Observe que el contador de uso de la promoción permite crear más pedidos de los previstos.

Actualmente, puede que no siempre sea posible reproducir este problema de forma consistente, ya que aún no se ha determinado la causa raíz exacta.



## Workaround


N/A





