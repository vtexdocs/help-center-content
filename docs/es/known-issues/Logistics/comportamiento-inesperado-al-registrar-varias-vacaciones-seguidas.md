---
title: "Comportamiento inesperado al registrar varias vacaciones seguidas"
id: 5UzQbnc6CUdY4sGSLSe4LG
status: PUBLISHED
createdAt: 2025-03-31T21:30:53.666Z
updatedAt: 2025-03-31T21:30:54.311Z
publishedAt: 2025-03-31T21:30:54.311Z
firstPublishedAt: 2025-03-31T21:30:54.311Z
contentType: knownIssue
productTeam: Logistics
author: 2mXZkbi0oi061KicTExNjo
tag: Logistics
slugEN: comportamiento-inesperado-al-registrar-varias-vacaciones-seguidas
locale: es
kiStatus: Backlog
internalReference: 1202478
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al registrar varios días festivos en secuencia, se producirán algunos comportamientos inesperados, ya que algunos días festivos registrados previamente pueden ser eliminados y algunos días festivos nuevos pueden no ser registrados.


##

## Simulación


Se puede reproducir fácilmente, basta con registrar varios días festivos seguidos, equivalentes a 10.



## Workaround


Será necesario espaciar la creación de festivos, definiendo un intervalo de al menos 1 minuto entre registros.





