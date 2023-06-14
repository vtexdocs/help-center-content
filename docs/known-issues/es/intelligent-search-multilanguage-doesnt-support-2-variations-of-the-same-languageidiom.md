---
title: La búsqueda inteligente multilingüe no admite 2 variaciones del mismo idioma/idioma
id: 2Qr9uJWwlr20NG29VU4tn2
status: PUBLISHED
createdAt: 2023-06-09T20:41:32.227Z
updatedAt: 2023-06-09T20:41:32.884Z
publishedAt: 2023-06-09T20:41:32.884Z
firstPublishedAt: 2023-06-09T20:41:32.884Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: la-busqueda-inteligente-multilingue-no-admite-2-variaciones-del-mismo-idiomaidioma
kiStatus: Backlog
internalReference: 841704
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Si utilizamos más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que se refiera la configuración regional y si utilizamos más de una configuración regional en la cuenta, la traducción se realizará en función del idioma al que se refiera la configuración regional.

Si tenemos dos variantes de localización diferentes para el mismo idioma (en-US y en-GB o en-CA), las traducciones en Búsqueda Inteligente no funcionarán correctamente porque consideraremos todas el mismo idioma, no tenemos en cuenta la variación.

Sólo hay dos excepciones:
pt-BR y pt-PT
es-ES y es-CA


##

## Simulación


Si tienes una lista Binding con múltiples idiomas e intentas internacionalizar el mismo idioma no funcionará.



## Workaround


N/A

