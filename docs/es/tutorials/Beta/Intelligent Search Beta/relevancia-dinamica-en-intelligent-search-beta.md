---
title: 'Relevancia dinámica en Intelligent Search (beta)'
id: rFaW7JPnBKNDBFzMxpBn8
status: PUBLISHED
createdAt: 2023-09-01T17:14:43.241Z
updatedAt: 2024-01-05T17:24:55.378Z
publishedAt: 2024-01-05T17:24:55.378Z
firstPublishedAt: 2023-09-01T18:59:54.853Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: dynamic-relevance-in-intelligent-search-beta
locale: es
legacySlug: relevancia-dinamica-en-intelligent-search-beta
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

>ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solo tienen acceso a ella algunos clientes seleccionados. Si estás interesado en implementarla en el futuro, ponte en contacto con [nuestro Soporte](https://help.vtex.com/es/support).
>
> Para los clientes seleccionados, la funcionalidad está disponible para su uso gratuito en VTEX Admin durante su período Beta, o hasta que lo decida VTEX. Es posible que en el futuro se apliquen tarifas adicionales.

Intelligent Search es una solución de búsqueda de la plataforma VTEX que, de forma sencilla e intuitiva, devuelve resultados relevantes basados en el catálogo desde la primera interacción del usuario con la tienda, ya sea a través de la barra de búsqueda, al navegar por las categorías o incluso a través de las vitrinas de productos. 

La relevancia es la funcionalidad que define el orden de los productos en los resultados de la búsqueda. Esta configuración permite asignar pesos y dar prioridad a determinados criterios, como la popularidad, la fecha de lanzamiento del producto y la participación en promociones. Intelligent Search determina la relevancia de cada producto mediante la combinación de pesos y prioridades definidas por cada administrador de la tienda.

En Intelligent Search, hay dos formas de configurar la relevancia de búsqueda:

* [Manual](#manual)
* [Dinámica](#dinamica)

Solamente una de ellas se aplica a tu tienda por vez, pero puedes [cambiar el tipo de relevancia](#cambiar-el-tipo-de-relevancia) configurado. Si cambias la relevancia manual a dinámica, todas las reglas manuales ya registradas se seguirán guardando.

>ℹ️ La relevancia manual está configurada como predeterminada en la tienda.

## Manual 

La relevancia manual se configura distribuyendo los pesos en la página **Reglas de relevancia**. Para activar la Relevancia manual, sigue los pasos que se indican a continuación:

1. En el Admin VTEX, accede a **Storefront > Intelligent Search >** **Reglas de relevancia**  o ingresa **Reglas de relevancia** en la barra de búsqueda de la parte superior de la página.
2. Selecciona la opción **Relevancia manual**.
![relevancia-manual-es](//images.ctfassets.net/alneenqid6w5/5BSjswlkB1mMpR1MtCrEWL/eedc0f4e7adac60ba0e457a525c5e642/image.png)
3. Haz clic en `Guardar`.

Para configurar la relevancia manual, consulta el artículo [Relevancia](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

## Dinámica

La relevancia dinámica es una funcionalidad de VTEX que utiliza inteligencia artificial para encontrar tendencias en el comportamiento de tus usuarios, basándose en sus búsquedas y en la posición del resultado en el que hacen clic o realizan un pedido. Esta funcionalidad puede mejorar los resultados de las búsquedas incrementando la relevancia de los productos cuya popularidad va en aumento. 

Por ejemplo, en una página de últimas novedades, la relevancia dinámica puede identificar qué productos más recientes aumentan la conversión sin necesidad de que el administrador de la tienda realice ninguna configuración.

También puede reposicionar los resultados que no sean relevantes para tus usuarios en el contexto de una búsqueda específica.

Para activar la relevancia dinámica, sigue estos pasos:

1. En el Admin VTEX, accede a **Storefront > Intelligent Search > Reglas de relevancia**  o ingresa **Reglas de relevancia** en la barra de búsqueda de la parte superior de la página.
2. Lee la información sobre relevancia dinámica y haz clic en `Siguiente`.
3. Selecciona la opción **Relevancia dinámica**.
![relevancia-dinamica-es](//images.ctfassets.net/alneenqid6w5/4yzGzHE6WhQp6qFGISgt9q/d4b2d75e6d45e40ddd06bc9cf1332bcc/image.png)
4. Haz clic en `Guardar`.
5. Espera a que la barra de progreso alcance el 100 %. Este proceso puede demorar algunas horas, pero recibirás un email cuando haya finalizado.
6. Haz clic en `Activar`.

## Cambiar el tipo de relevancia

Para cambiar el tipo de relevancia sigue los pasos a continuación:

>⚠️ No recomendamos cambiar constantemente el tipo de relevancia que utiliza tu tienda. El sistema necesita una semana para asentarse.

1. En el Admin VTEX, accede a **Storefront > Intelligent Search > Reglas de relevancia**  o ingresa **Reglas de relevancia** en la barra de búsqueda de la parte superior de la página.
2. Haz clic en `Cambiar`.
3. Selecciona el tipo de relevancia que deseas aplicar.
4. Haz clic en `Guardar`.
