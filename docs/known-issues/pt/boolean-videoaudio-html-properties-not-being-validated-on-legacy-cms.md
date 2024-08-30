---
title: 'Propriedades Booleanas de Vídeo/Áudio HTML não validadas no CMS Legacy'
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
slug: propriedades-booleanas-de-videoaudio-html-nao-validadas-no-cms-legacy
locale: pt
kiStatus: No Fix
internalReference: 491898
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.



Se você tentar usar Atributos opcionais de Vídeo/Áudio na caixa de entrada HTML do CMS que são tipos booleanos que não usam a expressão "=", a validação do CMS irá erroneamente solicitar um erro de gravação e impedirá o usuário de usar este tipo de funcionalidade HTML. Alguns exemplos são os atributos autoplay, controles, loop e mudo.



## Simulação


1) Ir para o aplicativo CMS legado
2) Criar um novo modelo HTML
3) Insira uma tag HTML válida que contenha o atributo autoplay, por exemplo:

`<circuito de controles de vídeo>`
src="movie.mp4" type="video/mp4">`source src="movie.mp4" type="video/mp4">`
src="movie.ogg" type="video/ogg">```source src="movie.ogg" type="video/ogg">``
Seu navegador não suporta a etiqueta de vídeo".
```/video>`

4) Um erro será solicitado ao usuário.




## Workaround


Use um javascript com a propriedade HTMLMediaElement.loop em seu lugar, gerando o mesmo efeito final.

