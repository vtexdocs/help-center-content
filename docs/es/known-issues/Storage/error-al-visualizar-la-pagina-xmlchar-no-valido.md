---
title: "Error al visualizar la página xmlChar no válido"
id: 21ppcawmC16fj0XoJkcIx1
status: PUBLISHED
createdAt: 2024-11-26T18:10:51.721Z
updatedAt: 2024-11-26T18:10:52.614Z
publishedAt: 2024-11-26T18:10:52.614Z
firstPublishedAt: 2024-11-26T18:10:52.614Z
contentType: knownIssue
productTeam: Storage
author: 2mXZkbi0oi061KicTExNjo
tag: Storage
slugEN: error-al-visualizar-la-pagina-xmlchar-no-valido
locale: es
kiStatus: Backlog
internalReference: 1140738
---

## Sumario

<div class="alert alert-info">
  <p>Este problema conocido ha sido traducido automáticamente del inglés.</p>
</div>


Al renderizar la página de vista, se produce un error `error on line ... at column ...: xmlParseCharRef: invalid xmlChar value ...`. Este error se produce porque el formulario contiene un carácter no interpretado por el analizador XML, lo que provoca que la página falle durante la renderización.

 ![](https://vtexhelp.zendesk.com/attachments/token/vXtAkcFk2c2KKi0QNLO58P9dw/?name=Captura+de+Tela+2024-11-26+a%CC%80s+15.08.07.png)

Este campo estaba marcado en la casilla de verificación del formulario Campos de la lista.

 ![](https://vtexhelp.zendesk.com/attachments/token/LmZN49pwizGkuoR89Q7FWzA5n/?name=Captura+de+Tela+2024-11-26+a%CC%80s+14.59.02.png)


##

## Simulación



1. Accede a la página de vista en el sistema.
2. Cargar un formulario que contenga un campo con un carácter no soportado por el analizador XML.
3. En Chrome dev tools observe que la página no se renderiza y muestra lo siguiente

    error: error on line ... at column ...: xmlParseCharRef: invalid xmlChar value ...



##

## Workaround


Identifique el campo que contiene el carácter no admitido.
Elimine el carácter no válido del valor del campo mediante la API.
Vuelva a cargar la página para comprobar que se muestra correctamente.

