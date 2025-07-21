---
title: "La API de desplazamiento devuelve errores 429 y/o 408 cuando se consultan entidades con un gran número de documentos, que suelen superar los millones."
id: 1Yx7s4kDAJOzpNCxro7TmW
status: PUBLISHED
createdAt: 2024-05-20T15:01:15.646Z
updatedAt: 2024-05-20T15:01:16.679Z
publishedAt: 2024-05-20T15:01:16.679Z
firstPublishedAt: 2024-05-20T15:01:16.679Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: la-api-de-desplazamiento-devuelve-errores-429-yo-408-cuando-se-consultan-entidades-con-un-gran-numero-de-documentos-que-suelen-superar-los-millones
locale: es
kiStatus: Backlog
internalReference: 1035873
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


La API de desplazamiento está diseñada para manejar grandes conjuntos de datos permitiendo la recuperación de documentos de forma desplazable. Sin embargo, cuando se consultan entidades con un número significativo de documentos, normalmente millones, los usuarios pueden encontrarse con errores 429 (Demasiadas solicitudes) y/o 408 (Tiempo de espera de la solicitud). Estos errores surgen debido al elevado volumen de datos que se procesan, que puede saturar la API y provocar la limitación de la tasa de solicitudes o tiempos de espera.



## Simulación



1. Utilice la API de desplazamiento para consultar una entidad que contenga un gran número de documentos (por ejemplo, millones).
2. Observa las respuestas de la API.
3. Observe si la API devuelve errores 429 (Demasiadas solicitudes) y/o 408 (Tiempo de espera de la solicitud) durante el proceso.



## Workaround


Optimice la consulta implementando filtros para reducir la carga de la API dividiendo la solicitud en trozos o lotes más pequeños.
Al elegir los filtros, es importante prestar atención a si se incluirán todos los documentos para garantizar que el desplazamiento recorra todos los documentos de la entidad.




