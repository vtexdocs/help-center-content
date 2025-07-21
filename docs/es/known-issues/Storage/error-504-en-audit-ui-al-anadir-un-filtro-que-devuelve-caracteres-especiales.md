---
title: "Error 504 en Audit UI al añadir un filtro que devuelve caracteres especiales."
id: 3TirfbtYMif8F5MErKUBQw
status: PUBLISHED
createdAt: 2024-12-16T19:56:30.635Z
updatedAt: 2024-12-16T19:56:32.223Z
publishedAt: 2024-12-16T19:56:32.223Z
firstPublishedAt: 2024-12-16T19:56:32.223Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-504-en-audit-ui-al-anadir-un-filtro-que-devuelve-caracteres-especiales
locale: es
kiStatus: Backlog
internalReference: 1151566
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al añadir un filtro en la interfaz de usuario de auditoría se produce un error. Este problema se produce porque el valor del campo contiene un carácter especial que la IU no puede interpretar, lo que provoca el fallo de la aplicación.



## Simulación



- Vaya a la interfaz de usuario de auditoría `https://.myvtex.com/admin/ui/audit`.
- Añada un campo "Event Detail" a la aplicación "Site Editor".
- Observe que la aplicación lanza un error `504 gateway Timeout` al intentar procesar los detalles `Something went wrong`.

 ![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/known-issues/Storage/error-504-en-audit-ui-al-anadir-un-filtro-que-devuelve-caracteres-especiales_1.png)



## Workaround

"N/A"

