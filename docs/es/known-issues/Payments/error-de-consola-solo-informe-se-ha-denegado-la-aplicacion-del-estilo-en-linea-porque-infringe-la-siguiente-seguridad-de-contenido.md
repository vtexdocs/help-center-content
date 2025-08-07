---
title: "Error de consola [Sólo informe] - Se ha denegado la aplicación del estilo en línea porque infringe la siguiente seguridad de contenido"
id: mix75F8F7a7D4iTWyHLyM
status: PUBLISHED
createdAt: 2024-04-16T10:30:41.610Z
updatedAt: 2024-04-16T10:30:42.934Z
publishedAt: 2024-04-16T10:30:42.934Z
firstPublishedAt: 2024-04-16T10:30:42.934Z
contentType: knownIssue
productTeam: Payments
author: 2mXZkbi0oi061KicTExNjo
tag: Payments
slugEN: error-de-consola-solo-informe-se-ha-denegado-la-aplicacion-del-estilo-en-linea-porque-infringe-la-siguiente-seguridad-de-contenido
locale: es
kiStatus: Backlog
internalReference: 1017370
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Tenemos algunos logs en la consola informando de bloqueos de script debido a restricciones a través de la cabecera CSP.
Las llamadas de estilo inline al host io2.vtex.com tienen este registro bloqueante porque no se libera en el CSP del host anterior, generando así mensajes de error en la consola.


    [Sólo informe] Se ha denegado la ejecución del script inline porque infringe la siguiente directiva de la Política de seguridad de contenidos: "script-src 'self' https://io.vtex.com.br https://*.vtex.com.br https://*.vtexpayments.com.br https://*.myvtex.com https://*.vtexcommercestable.com.br https://*.vtexcommercebeta.com.br https://*.vteximg.com.br https://*.vtexassets.com 'report-sample'". Se requiere la palabra clave 'unsafe-inline', un hash ('sha256-AdqydPwVZwz4OteEhuvEEzsFBDTM/J6q0/ZlIWf9Wr4='), o un nonce ('nonce-...') para permitir la ejecución en línea.




##

## Simulación



1. Ir a la caja de la tienda;
2. Abra la consola y compruebe los mensajes de informe;



## Workaround


N/A





