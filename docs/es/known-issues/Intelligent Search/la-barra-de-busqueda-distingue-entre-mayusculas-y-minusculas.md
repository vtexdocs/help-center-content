---
title: "La barra de búsqueda distingue entre mayúsculas y minúsculas."
id: 5QEkcyhCQWyw093UkDCeOq
status: PUBLISHED
createdAt: 2023-09-26T23:50:50.661Z
updatedAt: 2024-10-01T14:15:09.795Z
publishedAt: 2024-10-01T14:15:09.795Z
firstPublishedAt: 2023-09-26T23:50:51.661Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: la-barra-de-busqueda-distingue-entre-mayusculas-y-minusculas
locale: es
kiStatus: Fixed
internalReference: 361894
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La página de configuración de Redirección de Búsqueda Inteligente tiene una barra de búsqueda para ayudar a encontrar configuraciones de redirección específicas, pero distingue entre mayúsculas y minúsculas y sólo encontrará términos si coinciden exactamente.


##

## Simulación


Acceda a `/admin/search/redirects`.

Buscar un nombre de configuración, pero cambiando una letra a mayúscula. La búsqueda no obtendrá ningún resultado.



## Workaround


Generar nombres de ruta con un patrón consistente, sólo minúsculas, sólo mayúsculas o camel case.

