---
title: "Headless CMS: crear páginas no duplicables"
id: 6aSxQhpcb1RCnaWYcUAnoz
status: DRAFT
createdAt: 2023-04-06T15:19:47.475Z
updatedAt: 2023-04-10T15:08:45.599Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: headless-cms-crear-paginas-no-duplicables
legacySlug: headless-cms-crear-paginas-no-duplicables
announcementImageID: ""
announcementSynopsisES: Singleton: el tipo de content type en Headless CMS que asegura contenido consistente en la tienda sin duplicados.
---

Singleton es un nuevo tipo de content type que permite que el comerciante (administrador de la tienda) pueda crear y gestionar una única página de un content type en el Headless CMS. Los content types de Singleton no pueden duplicarse, lo que garantiza que solo haya una página de ese tipo de contenido y que sea coherente en toda la tienda.
![singleton-es](https://images.ctfassets.net/alneenqid6w5/6aMWhl66yiP8YLJr5Bzuo5/7e816ec8a05d8731dfaee66ca0258641/singleton-es.gif)

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
El content type Singleton solo está disponible para tiendas que utilicen <a href="https://help.vtex.com/es/tutorial/managing-pages-beta--3DO6rBhZ1p3zndnFu5BgRt">VTEX Headless CMS</a> (Actualmente se encuentra en fase beta).
</div>

## ¿Qué cambió?
Antes era posible crear varias páginas diferentes de cualquier content type, y en ocasiones esto daba lugar a incoherencias en el contenido, como por ejemplo, la creación de varias páginas con el mismo nombre pero con contenidos diferentes.

Ahora, con el Singleton es posible generar content types no duplicables. Esto garantiza que solo pueda crearse una página de un determinado content type y que todas las actualizaciones se reflejen exclusivamente en ella. Esta nueva funcionalidad simplifica la gestión de contenido y garantiza la coherencia en toda la tienda.

## ¿Por qué realizamos este cambio?
Nuestro objetivo con el nuevo content type de tipo Singleton es aportar los siguientes beneficios:
- __Páginas no duplicadas__: se evita la creación de varias páginas del mismo content type y se previenen posibles conflictos de actualización de página.
- __Coherencia de contenidos__: tener solo una página por content type, garantizando así un contenido coherente en tu tienda.
- __Gestión de contenidos simplificada__: facilita la gestión y actualización de contenido con una sola página por content type.

## ¿Qué se necesita hacer?
Para obtener más información sobre cómo crear y gestionar el content type Singleton, consulta la documentación [Gestionar content types de tipo Singleton](https://help.vtex.com/es/tutorial/gerenciando-content-types-do-tipo-singleton--VBibMN1BqV2OFmavUFCdo).

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Para crear un content type Singleton, verifica con tu equipo de desarrolladores que la propiedad <i>isSingleton</i> ya esté implementada o solicita que sigan las instrucciones en <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type">Using isSingleton in a content type</a> para agregarla al content type deseado.
</div>

