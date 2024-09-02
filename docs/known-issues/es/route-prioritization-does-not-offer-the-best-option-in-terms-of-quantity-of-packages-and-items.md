---
title: 'La priorización de rutas no ofrece la mejor opción en cuanto a cantidad de paquetes y artículos'
id: 4verafDuoFnC5vGDI4UV1m
status: PUBLISHED
createdAt: 2023-10-30T18:28:52.771Z
updatedAt: 2023-10-30T18:28:53.648Z
publishedAt: 2023-10-30T18:28:53.648Z
firstPublishedAt: 2023-10-30T18:28:53.648Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slug: la-priorizacion-de-rutas-no-ofrece-la-mejor-opcion-en-cuanto-a-cantidad-de-paquetes-y-articulos
locale: es
kiStatus: Backlog
internalReference: 927747
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.


En Logística, el primer criterio de desempate cuando el sistema está eligiendo la ruta (almacén + muelle + política de envío), está relacionado con el número de paquetes necesarios para esta ruta específica, menos paquetes significa que la ruta debería ser mejor.
Sin embargo, el sistema no puede tener en cuenta la relación entre el número de paquetes y el número de artículos de cada paquete.
Esto significa que, por ejemplo, un pedido con 2 paquetes y 2 artículos, puede ser priorizado cuando tiene una ruta disponible que entrega sólo 1 paquete con todos los artículos.



## Simulación


No hay una manera fácil de simular este escenario, ya que es muy específico y el sistema puede comportarse de manera diferente en cada caso, pero tenemos un ejemplo muy claro donde el sistema elige el ANS que divide el paquete en 2 en lugar de ofrecer el ANS con sólo 1 paquete.



## Workaround


El comerciante puede separar el almacén + muelle + política de envío, con diferente nombre de método de envío, para no depender de la priorización de la ruta.




