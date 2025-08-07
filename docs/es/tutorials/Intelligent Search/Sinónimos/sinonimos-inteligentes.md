---
title: 'Sinónimos Inteligentes'
id: 1rR47Kk96UgFYwh8dkDG7i
status: PUBLISHED
createdAt: 2024-06-17T13:41:39.402Z
updatedAt: 2025-07-21T23:27:41.631Z
publishedAt: 2025-07-21T23:27:41.631Z
firstPublishedAt: 2024-06-17T13:42:26.751Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: intelligent-synonyms
legacySlug: sinonimos-inteligentes
locale: es
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

<div class="alert alert-info">
  <p>Esta funcionalidad solo para cuentas que registren al menos 100 mil búsquedas mensuales, ya que dichas búsquedas se utilizan para entrenar el modelo de inteligencia artificial. Puedes comprobar la cantidad de búsquedas mensuales de tu tienda en <em>Storefront > Intelligent Search > Analytics</em> del Admin VTEX. Si te interesa implementar Sinónimos inteligentes, ponte en contacto con <a href="https://help.vtex.com/es/support">nuestro Soporte</a>. Es posible que se apliquen tarifas adicionales en el futuro.</p>
</div>

La funcionalidad [Sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV) de [VTEX Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) te permite registrar palabras o expresiones con el mismo significado para los términos de búsqueda utilizados por los clientes al realizar búsquedas en tu tienda, lo que aumenta las posibilidades de que obtengan resultados de búsqueda relevantes.

Con la funcionalidad Sinónimos Inteligentes, la página **Sinónimos** en el Admin VTEX, además de permitir la configuración manual de sinónimos, te ofrece sugerencias inteligentes de términos para que los registres. La plataforma sugiere sinónimos a partir de inteligencia artificial, basándose en el comportamiento de búsqueda de los clientes en tu tienda.

Para hacerlo, VTEX Intelligent Search contabiliza cuántas veces los clientes, durante los últimos 30 días, buscaron un término que devolvió pocos o ningún resultado de búsqueda, y tuvieron que sustituir el término original por otro. 

Ejemplo: cinco clientes escribieron `jabón para la cara` y luego cambiaron la búsqueda a `jabón facial`. El sistema registra este comportamiento y los términos más reescritos aparecerán como sinónimos sugeridos.

Las sugerencias se muestran en dos categorías en la lista de sinónimos, como se ilustra a continuación:

* **Nuevas sugerencias:** son aquellas generadas por la plataforma que aún no se han revisado.
* **Sugerencias guardadas:** son aquellas que se guardaron para su posterior revisión, tal como se describe en el paso 5 de la sección [Revisar sugerencias](#revisar-sugestoes).

![synonym-suggestion-list-es](//images.ctfassets.net/alneenqid6w5/YxS5i9kNqByGvZkPXyioK/71bad7a9a6282275bc001b9c2437d2fd/synonym-suggestion-list-es.png)

Puedes revisar las sugerencias generadas y elegir guardar para más tarde, rechazar, editar o aprobar. Consulta el paso a paso en la siguiente sección.

## Revisar sugerencias

Sigue las instrucciones para visualizar las sugerencias de sinónimos y definir si deseas rechazarlas, editarlas o aprobarlas:

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront** en la barra de búsqueda de la parte superior de la página.
2. En **Intelligent Search**, haz clic en **Sinónimos**.
3. Al acceder a la página **Sinónimos**, si hay sugerencias todavía no revisadas, aparecerá un modal indicando el número de sugerencias generadas. Haz clic en `Revisar` para analizarlas.

    Si optas por hacer clic en `Ahora no`, esas sugerencias se mantendrán en la sección **Nuevas sugerencias**, indicando la cantidad de sugerencias generadas. Para revisarlas, haz clic en `Revisar`.

4. Verás un modal con la primera sugerencia de sinónimo. Cada sugerencia indica el término buscado y el término que se agregará como sinónimo, y también el número de veces que los clientes de tu tienda reescribieron el término original por el segundo término en los últimos 30 días.

   ![synonym-suggestion-es](//images.ctfassets.net/alneenqid6w5/187mlOYBTMHniFVEJGgUP3/78ebffca01e145e64411537d176ada30/synonym-suggestion-es.png)

4. Para revisar cada sugerencia, elige una de las siguientes opciones:
    * <i class="fas fa-bookmark"></i> **Guardar para más tarde:** remueve la sugerencia del recuento **Nuevas sugerencias** y la almacena en **Sugerencias guardadas**. Para analizarla posteriormente, haz clic en `Revisar`.
    * <i class="fas fa-times-circle"></i> **Rechazar**: descarta la sugerencia propuesta.
    * <i class="fas fa-pencil-alt"></i> **Editar**: modifica los campos de la configuración de sinónimos sugeridos. Después de editar, debes hacer clic en <i class="fas fa-check-circle"></i> para guardar los cambios. Para más información sobre los campos disponibles, consulta [Configurar sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).
    * <i class="fas fa-check-circle"></i> **Aprobar**: aplica y guarda la sugerencia propuesta.
5. Después de revisar todas las sugerencias, cierra el modal para acceder a la lista de sinónimos configurada en tu tienda.

<div class="alert alert-danger">
  <p>Cuando se realiza una acción no es posible deshacerla, ya que se muestra inmediatamente la siguiente sugerencia disponible.</p>
</div>

## Más información

* [Sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV)
* [Configurar sinónimos](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL)
* [VTEX Intelligent Search](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)
