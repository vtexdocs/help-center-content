---
title: 'Configurar template de descripción de los anuncios en Mercado Libre'
id: 1gEoq6NDAIM2G4Y0ieMk6u
status: DRAFT
createdAt: 2018-08-13T12:40:11.566Z
updatedAt: 2020-02-20T00:48:22.865Z
publishedAt: 
firstPublishedAt: 2018-08-13T14:27:42.464Z
contentType: trackArticle
productTeam: Channels
slug: configurar-template-de-descripcion-de-los-anuncios-en-mercado-libre
locale: es
trackId: 2YfvI3Jxe0CGIKoWIGQEIq
trackSlugES: configurar-integracion-con-mercado-libre
---

En la integración con Mercado Libre, usted puede hacer la descripción de sus anuncios de manera más personalizada. A través del Centro de Mensajes es posible armar un template con información adicional (que ya está en los campos de producto de VTEX) y enviarla a Mercado Libre. 

## Configuración del template

<div class="alert alert-danger">
Mercado Libre <strong>no acepta personalizaciones de template en HTML o CSS</strong> (con excepción del tag &lt;br&gt; para saltos de línea). No se permiten tags de Iframes, Scripts, Forms, Inputs, Meta, Object y Embed.
</div>

Para que su producto esté disponible en Mercado Libre, es necesario configurar el template del anuncio donde el producto se mostrará. Para hacer la configuración, realice el siguiente procedimiento:

1. En la sección __Cliente__ del menú lateral del Admin, haga clic en __Centro de Mensajes__.
2. En las opciones que se abren, haga clic en __Templates__.
3. Haga clic en el ícono de filtro y seleccione apenas la opción __VTEX Bridge__.  También puede utilizar la búsqueda para hallar a __Mercado Libre__.
4. Introduzca las variables del producto que desea mostrar en el template (vea abajo todas las que están disponibles).
5. Haga clic en el botón **Guardar**.

Conozca las variables disponibles para que se muestren en el template de su anuncio en Mercado Libre:

``{{DESCRICAO}}``: Variable que devuelve la __descripción del producto__ registrada en VTEX.

``{{IMAGENS}}``: Esta variable contiene el enlace con la __imagen principal del producto__ registrada en VTEX.

``{{TITULO}}``: Variable que contiene el __nombre del producto__. Este se mostrará de acuerdo con el formato elegido en el campo __Título del anuncio__, configurado en la primera etapa de este tutorial, en la __configuración de la integración__.

``{{NOME_ATRIBUTO_PRODUTO}}``: Esta variable ingresa en el template el __valor__ de un atributo específico del producto. De esta forma, usted debe indicar qué atributo desea mostrar. Ejemplo: para mostrar el valor de un atributo llamado "Detalle técnico", debe ingresar la variable `{{DETALHE_TECNICO}}` en el template. La variable debe escribirse siempre en letras mayúsculas, sin acentuación y sustituyendo los espacios del nombre del atributo por underscore (\_).

Si desea incluir todos los atributos y valores de los atributos en el template, debe incluir en su template el código que se describe a continuación. Esta es la estructura que debe ser utilizada para renderizar todos los atributos del producto y sus respectivos valores en el template:

``{{#each ATRIBUTOS}} {{NOME}} – {{VALOR}} <br> {{/each}}``

<div class="alert alert-info">
Si desea omitir algún atributo en el template, usted puede hacer esto en la <strong>configuración de la integración</strong>, rellenando el campo <strong>Atributos omitidos en el template del producto</strong>, como se explica en la sección <strong>Configurar el panel de Mercado Libre en VTEX</strong> de la etapa anterior.
</div>

Usted ha terminado la __tercera etapa__. Ahora, vamos a configurar la logística para las entregas de pedidos hechos en Mercado Libre.

