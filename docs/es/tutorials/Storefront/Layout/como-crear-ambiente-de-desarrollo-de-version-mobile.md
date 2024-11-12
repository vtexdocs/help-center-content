---
title: 'Crear ambiente de desarrollo de versión mobile'
id: frequentlyAskedQuestions_587
status: PUBLISHED
createdAt: 2019-01-24T20:45:55.089Z
updatedAt: 2023-03-29T18:35:02.578Z
publishedAt: 2023-03-29T18:35:02.578Z
firstPublishedAt: 2019-01-24T22:05:49.842Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-create-a-development-environment-with-a-mobile-version
locale: es
legacySlug: como-crear-ambiente-de-desarrollo-de-version-mobile
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido solo para tiendas CMS Portal Legado.
</div>

Iniciamos este artículo advirtiendo que la tendencia y las buenas prácticas indican que se use una única versión (responsiva) para desktop y mobile. 

Crear una versión mobile aparte era una práctica adoptada cuando los recursos de CSS dificultaban la adaptación de una versión desktop para mobile. Hoy en día, con los recursos que ofrece el CSS, se ha hecho estándar crear una versión responsiva. 

Lea más sobre este asunto en el artículo [Responsivo x Versión Mobile](/es/tutorial/responsivo-x-version-mobile).

Este artículo tiene el objeto de ilustrar cómo preparar un ambiente de desarrollo para versión mobile sin impactar la versión de producción.

Existen algunas manearas de desarrollar una versión mobile sin impactar la versión desktop y sin que este desarrollo esté público en navegaciones de mobile. En este artículo abordaremos la principal.

## Desarrollando versión mobile

Para desarrollar una versión mobile con un nuevo WebSite, debe seguir los siguientes pasos:

1. Configurar nueva tienda (temporal) en **Configuración de la cuenta.** Este paso lo debe realizar el responsable de la tienda (ambiente). En el Admin VTEX, accede a __Configuración de la cuenta > Cuenta__. Selecciona la cuenta deseada y haga clic en **Configurar otra tienda**
2. Crear (o clonar lo principal) un nuevo WebSite en el **CMS Layout**

Storefront > Layout > Carpeta de CMS > Sites and Channels > New Website

![cms-new-website](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

3. Crear estructura de carpetas del WebSite Mobile: en este paso será necesario crear las carpetas estándar del sistema que se usarán en la versión mobile (búsqueda, departamento, categoría, marca, producto, etc.)

## Desarrollar versión mobile.

Para visualizar la versión mobile, acceda al sitio por el ambiente _myvtex.com_ a través de algún host configurado en **Configuración de la cuenta**. No olvide los siguientes parámetros: _?uam=true&amp;mobile={version\_mobile)._ 

Ejemplo: `http://nombredelatienda.myvtex.com?uam=true&amp;mobile=4`

## Publicando versión mobile

Una vez que el desarrollo esté concluido, para publicar la versión mobile, siga los pasos abajo:

1. __Definir versión mobile del WebSite Principal.__ En el WebSite Principal, configure el campo WebSite-Mobile, apuntando al WebSite Mobile.
2. __Definir WebSite-Padre de la versión Mobile.__ En el WebSite Mobile, configure el campo WebSite-Padre, apuntando al WebSite Principal
3. __Excluir Enlace (WebSite Binding) de la versión Mobile.__ En el WebSite Mobile, excluya el Enlace (Binding) creado. Obs.: Versiones mobile no necesitan enlace porque heredan esa configuración del WebSite-Padre.
4. __Excluir la tienda Mobile (Temporal) creada en Configuración de la cuenta.__ Esa tienda se creó solamente para servir como ambiente para el desarrollo del mobile. Como la versión mobile heredará los hosts del WebSite Principal, esa tienda no se usará más y, por eso, se indica su exclusión.
