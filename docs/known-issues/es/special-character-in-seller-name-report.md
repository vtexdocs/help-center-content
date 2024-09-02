---
title: 'Carácter especial en el nombre del vendedor Informe'
id: 13FMy6rGbNacrS7MUYTT48
status: PUBLISHED
createdAt: 2023-02-17T13:18:20.237Z
updatedAt: 2023-02-17T13:18:20.925Z
publishedAt: 2023-02-17T13:18:20.925Z
firstPublishedAt: 2023-02-17T13:18:20.925Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slug: caracter-especial-en-el-nombre-del-vendedor-informe
locale: es
kiStatus: Backlog
internalReference: 756243
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Específicamente para el caracter especial ":", cuando tenemos un vendedor con este caracter especial en el nombre, y tratamos de filtrarlo para reportarlo, tenemos lo siguiente cuando lo vemos en "devtools":

"No se puede devolver null para el campo no anulable ReportDetails.rowNumber".


##

## Simulación


Para simular este comportamiento, es necesario seleccionar un vendedor que contenga este carácter especial en el nombre e intentar eliminar un informe del mismo.



## Workaround


Para la solución, es necesario eliminar este carácter especial del nombre del vendedor.





