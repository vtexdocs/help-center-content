---
title: 'Al intentar configurar el antifraude de Braspag, el usuario es dirigido a la pantalla de afiliación de Braspag'
id: YcLMt8AUf9SVN9s3cbKSk
status: PUBLISHED
createdAt: 2022-03-28T01:55:40.554Z
updatedAt: 2022-11-25T22:08:02.641Z
publishedAt: 2022-11-25T22:08:02.641Z
firstPublishedAt: 2022-03-28T01:55:41.087Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slug: al-intentar-configurar-el-antifraude-de-braspag-el-usuario-es-dirigido-a-la-pantalla-de-afiliacion-de-braspag
locale: es
kiStatus: Backlog
internalReference: 334239
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Tenemos dos integraciones internas con Braspag, una de antifraude y otra de afiliación (ambas con el mismo nombre). Al intentar hacer clic en el antifraude para configurarlo, el usuario es dirigido a los campos de configuración de la afiliación. Por lo tanto, no es posible configurar el antifraude de Braspag a través de la interfaz de administración.



## Simulación



1. Ir a la configuración de la afiliación en la administración
2. Intentar crear una nueva afiliación antifraude de Braspag
3. El formulario que se abre es la configuración de la afiliación y no la configuración antifraude



## Workaround


La solución consiste en configurar el antifraude a través de la API

