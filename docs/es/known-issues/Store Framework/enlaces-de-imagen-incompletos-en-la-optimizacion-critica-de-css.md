---
title: 'Enlaces de imagen incompletos en la optimización crítica de CSS'
id: 1965M3rMbB30pTOCiMMxXj
status: PUBLISHED
createdAt: 2024-10-02T17:52:53.482Z
updatedAt: 2024-10-02T17:53:09.426Z
publishedAt: 2024-10-02T17:53:09.426Z
firstPublishedAt: 2024-10-02T17:52:54.232Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slugEN: incomplete-image-links-in-critical-css-optimization
locale: es
kiStatus: Backlog
internalReference: 1110160
---

## Sumario

>ℹ️ Este problema conocido ha sido traducido automáticamente del inglés.



## Simulación



- Acceda a una tienda que utilice Store Framework.
- Habilite la función de optimización crítica de CSS en la configuración.
- Añade imágenes mediante CSS utilizando enlaces completos.
- Comprueba el archivo CSS generado y observa que los enlaces a imágenes aparecen sólo con la ruta, careciendo del dominio completo.



## Workaround


Actualmente, no existe una solución para este error. Se recomienda evitar el uso de imágenes a través de CSS por varias razones, incluyendo implicaciones SEO y problemas de accesibilidad. En su lugar, los usuarios deberían añadir imágenes utilizando bloques de imágenes. En el caso de los iconos, es aconsejable utilizar el método que se indica aquí para garantizar una representación correcta y el cumplimiento de las normas SEO.





