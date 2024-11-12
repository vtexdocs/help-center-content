---
title: 'Validar un layout antes de ir a producción'
id: frequentlyAskedQuestions_593
status: ARCHIVED
createdAt: 2019-01-24T20:45:55.474Z
updatedAt: 2022-09-08T16:44:20.634Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:11:50.821Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: validating-a-layout-before-moving-it-to-production
locale: es
legacySlug: validar-un-layout-antes-de-ir-a-produccion
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

No hay un ambiente de QA o homologación independiente para probar cambios de layout.

Sin embargo, hay dos maneras de hacer estas pruebas sin la necesidad de poner los cambios en producción.

## Probar cambios mediante el Layout ID (LID)

Cada layout creado en el módulo CMS tiene un ID específico (el `LID`).

Este ID se puede utilizar como parámetro en la dirección URL para que se acceda al layout correspondiente.

Con esto, usted puede:
1. Duplicar el layout.
2. Hacer los cambios deseados en el layout duplicado, manteniendo el primer layout como default (es decir, el segundo layout no será accesible por la URL default de su tienda).
3. Acceder al segundo layout a través del parámetro `LID`.
4. Hacer las pruebas necesarias.
5. Incorporar los cambios deseados al layout original, es decir, en lo que está en producción.

Para encontrar el `LID`, basta con acceder al layout por el Admin, en el módulo CMS. Se encuentra en la sección __Properties__, como indica la siguiente imagen:

![lid](https://images.contentful.com/alneenqid6w5/4FISyY6wwg2asGE4Mog2sK/991b8c634b474c336de1754acdb414de/lid.png)

Para acceder a la página de la tienda con el nuevo layout, usted debe insertar un signo de interrogación al final de la URL y luego el parámetro `LID`.

Por ejemplo:
{AccountName}.vtexcommercestable.com.br**?lid=3536da96-963c-4844-bf52-cc978113be09**

## Probar cambios mediante el Web Site ID (WID)

Otra alternativa que le permite probar cambios en el layout antes de ir a producción es crear un nuevo web site y acceder a él a través de su ID específico (`WID`).

1. Duplicar el web site en el módulo CMS.
2. Hacer los cambios deseados en el web site duplicado. En este caso, usted puede cambiar cuántos layouts desee.
3. Acceder al segundo web site usando el parámetro `WID`.
4. Hacer las pruebas necesarias.
5. Incorporar los cambios deseados al web site original, es decir, en lo que está en producción.

Para encontrar el `WID`, acceda al web site. Se queda en el primer campo de la pantalla del web site: __Id de WebSite__.

![wid](//images.contentful.com/alneenqid6w5/ghvd0wl9HqGu2KCWW2Yu2/5e27a13e79134f7ba89863ccd54031a6/wid.png)

Recuerde que, aunque con la duplicación del web site usted puede cambiar los layouts del nuevo web site de manera independiente, éstos van a consumir los mismos layouts del web site original. 

Por lo tanto, dependiendo de los cambios que desee probar, es posible que necesite crear nuevos templates para alimentar los nuevos layouts.
