---
title: "B2B Bulk Import no valida el ID ya en uso"
id: 2zXPi9LJ2vP3wBkdF8xaVS
status: PUBLISHED
createdAt: 2024-11-04T14:32:24.901Z
updatedAt: 2024-11-04T14:32:26.116Z
publishedAt: 2024-11-04T14:32:26.116Z
firstPublishedAt: 2024-11-04T14:32:26.116Z
contentType: knownIssue
productTeam: B2B
author: 2mXZkbi0oi061KicTExNjo
tag: B2B
slugEN: b2b-bulk-import-no-valida-el-id-ya-en-uso
locale: es
kiStatus: Backlog
internalReference: 1128764
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al importar organizaciones y centros de coste mediante importación masiva, no existe validación para verificar si el ID ya está en uso. Esto permite iniciar la importación y puede hacer que el proceso se atasque.


##

## Simulación



- Rellenar el fichero plantilla con una organización o un ID de centro de coste ya en uso;
- Enviar el fichero para su validación; la respuesta es que el fichero es válido.



## Workaround


Utilice otro ID cuando sea posible.




