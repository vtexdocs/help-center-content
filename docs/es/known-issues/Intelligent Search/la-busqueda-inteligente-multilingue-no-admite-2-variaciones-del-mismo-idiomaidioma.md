---
title: "La búsqueda inteligente multilingüe no admite 2 variaciones del mismo idioma/idioma"
id: 2Qr9uJWwlr20NG29VU4tn2
status: PUBLISHED
createdAt: 2023-06-09T20:41:32.227Z
updatedAt: 2025-03-14T18:38:56.651Z
publishedAt: 2025-03-14T18:38:56.651Z
firstPublishedAt: 2023-06-09T20:41:32.884Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slugEN: la-busqueda-inteligente-multilingue-no-admite-2-variaciones-del-mismo-idiomaidioma
locale: es
kiStatus: Backlog
internalReference: 841704
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si utilizamos más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que se refiera la configuración regional, y si utilizamos más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que se refiera la configuración regional.

Cuando se utilizan dos variantes diferentes del mismo idioma (por ejemplo, `en-US` y `en-GB` o `en-CA`), las traducciones en la Búsqueda Inteligente no funcionarán correctamente porque las consideraremos todas como el mismo idioma (`english`). Sólo se utilizarán los valores de uno de ellos (normalmente el que aparece en primer lugar).

Sólo hay dos excepciones:

- `pt-BR` y `pt-PT`.
- `es-ES` y `es-CA`.


##

## Simulación


Si tiene una lista Binding con varios idiomas e intenta utilizar la internacionalización para el mismo idioma raíz, no funcionará.



## Workaround


N/A





