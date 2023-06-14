---
title: ¿Para qué sirve el Control Personalizado?
id: frequentlyAskedQuestions_627
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.169Z
updatedAt: 2023-03-29T17:53:50.202Z
publishedAt: 2023-03-29T17:53:50.202Z
firstPublishedAt: 2019-01-24T22:01:30.892Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: para-que-serve-o-controle-customizado
legacySlug: para-que-serve-o-controle-customizado
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

En diversos proyectos es necesario crear un banner, una vitrina o incluso un código HTML que se utilizará en varias páginas del sitio web. Un ejemplo es el banner de flete gratis y descuentos que habitualmente está ubicado en la parte superior de la página, debajo del menú.

Para evitar el trabajo de añadir manualmente el mismo contenido varias veces en cada página, tenemos el área de Custom Elements.

Los controles personalizados son muy útiles en el desarrollo y facilitan la actualización del contenido. Se pueden utilizar en templates y subtemplates de las páginas.

## Creando un control personalizado

Para crear un control personalizado, acceda al Admin y al **menú Storefront**. Haga clic en **Layout**. Después haga clic en la carpeta CMS y en **Custom Elements**.

En Custom Elements, podemos crear hasta cuatro tipos de características para personalizar las tags.

Estos tipos son:
- Banner
- BannerDHTML
- Colección
- HTML

Para crear una tag de control personalizado, basta hacer clic en __Add__, registrar un nombre y una tag, luego seleccionar el tipo.

![cms-custom-elements EN / ES](https://images.ctfassets.net/alneenqid6w5/6pGE6dFRJuawKcMWce0Gem/87bbe6dfb66e75a8402b4be8935eeb18/custom_elements_EN_E_ES.png)

<div class="alert alert-warning">
  <p><b>Atención:</b> no cree un control del tipo HTML con un elemento <code>title</code>. Esto puede interferir con el buen funcionamiento de su tienda.</p>
</div>

## Aplicando un control personalizado a un template de página

La aplicación de una tag de control personalizado es semejante al uso de otros elementos como los controles normales y subtemplates. La tag se debe colocar en el lugar donde queremos que el contenido sea cargado.

Para identificar el control personalizado que se utilizará, insertamos el nombre de la tag registrada en la sintaxis del control.

Las sintaxis para cada tipo de control son las siguientes:

1. Tipo Banner: `<vtex:nombredelatag />`
2. Tipo HTML: `<vtex.cmc:nombredelatag />`
3. Tipo Colección: `<vtex.cmc:nombredelatag />`
