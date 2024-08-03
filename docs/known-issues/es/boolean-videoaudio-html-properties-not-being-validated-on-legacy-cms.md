---
title: 'Las propiedades HTML booleanas de vídeo/audio no se validan en el CMS heredado'
id: 2WjsLZ7vw0KO023rGQd77L
status: PUBLISHED
createdAt: 2022-03-16T19:27:06.599Z
updatedAt: 2024-02-16T20:28:59.288Z
publishedAt: 2024-02-16T20:28:59.288Z
firstPublishedAt: 2022-03-16T19:27:07.097Z
contentType: knownIssue
productTeam: Portal
author: 2mXZkbi0oi061KicTExNjo
tag: Portal
slug: las-propiedades-html-booleanas-de-videoaudio-no-se-validan-en-el-cms-heredado
locale: es
kiStatus: No Fix
internalReference: 491898
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>



Si se intenta utilizar atributos opcionales de vídeo/audio en el cuadro de entrada HTML del CMS que son de tipo booleano y no utilizan la expresión "=", la validación del CMS indicará incorrectamente un error de guardado e impedirá al usuario utilizar este tipo de funcionalidad HTML. Algunos ejemplos son los atributos autoplay, controls, loop y muted.



## Simulación


1) Vaya a la aplicación CMS heredada
2) Cree una nueva plantilla HTML
3) Inserte una etiqueta HTML válida que contenga el atributo autoplay, por ejemplo

`<vídeo controla el bucle>`
`<source src="movie.mp4" type="video/mp4">`
`<source src="movie.ogg" type="video/ogg">`
`Su navegador no soporta la etiqueta de vídeo.`
`</video>`

4) Se mostrará un error al usuario.




## Workaround


Utilice un javascript con la propiedad HTMLMediaElement.loop en su lugar, generando el mismo efecto final.

