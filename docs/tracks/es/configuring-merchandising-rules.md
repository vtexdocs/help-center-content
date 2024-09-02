---
title: 'Crear regla de merchandising - Editor manual'
id: 2FpbarYzsnbg7aZZn3TGF8
status: PUBLISHED
createdAt: 2020-04-14T14:10:24.518Z
updatedAt: 2024-01-29T16:58:41.850Z
publishedAt: 2024-01-29T16:58:41.850Z
firstPublishedAt: 2020-04-15T00:39:30.807Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: configurar-reglas-de-merchandising
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

Si deseas configurar una [regla de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) en el Editor manual de VTEX Intelligent Search, debes seguir los pasos a continuación:

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront**.
2. En **Intelligent Search**, haz clic en **Reglas de merchandising**.
3. Haz clic en el botón <i class="fas fa-plus"></i> `Agregar`.
4. Rellena los siguientes campos:
    * **Nombre de la regla**: nombre de la regla de _merchandising_. Ejemplo: promover el producto A cuando se busca «galletas de chocolate».
    * **Fecha de inicio (opcional)**: define la fecha a partir de la cual se aplicará la regla de _merchandising_. La fecha considera la zona horaria UTC-0.
    * **Fecha de fin (opcional)**: define la fecha en que la regla de _merchandising_ dejará de aplicarse a las búsquedas de la tienda. La fecha considera la zona horaria UTC-0.
    * **Aplicar a los idiomas:** idiomas en los que se aplicará la regla de merchandising. Campo solo disponible para tiendas que utilizan [configuración multidioma (beta)](https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).
5. Haga clic en **Editor Manual**. Para más información sobre cada editor, consulte [Tipos de edición](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicion).
6. Haz clic en `Siguiente`.
7. Si lo necesitas, modifica la información básica ya definida sobre la nueva regla de _merchandising_ en la sección [Información general](#informacion-general).
8. Define las [Reglas de activación](#reglas-de-activacion),  es decir, el conjunto de condiciones que determinan cuándo se aplicará la regla de merchandising.
9. Define las [Reglas de personalización](#regras-de-personalizacion), es decir, el conjunto de condiciones que controlan que el resultado de las búsquedas cumpla con las reglas de activación definidas en el paso 8.
  Para aplicar el efecto de personalización deseado, debes definir una o varias condiciones en esta etapa. Si deseas conocer cómo registrar una condición, lee [Condiciones de las reglas de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
10. Haz clic en `Guardar`.

<div class="alert alert-info">
  <p>Una vez guardados, la actualización de los cambios en las reglas de merchandising demoran un promedio de dos minutos.</p>
</div>

## Ejemplo

Considera el siguiente ejemplo: deseas promover productos de la marca Beautyx durante la semana de un carnaval de modo que cuando el cliente busque «jabón» o «champú», la búsqueda promueva los productos de la marca Beautyx. Para esto, debes configurar la regla de _merchandising_ del siguiente modo:

* **Nombre**: Promoción de carnaval
* **Fecha de inicio**: selecciona el primer día del carnaval.
* **Fecha de fin**: selecciona el último día del carnaval.
* **Reglas de activación:**
    * `Término es jabón`
        `o`
    * `Término es champú`
* **Reglas de personalización**:
    * **Promover**
        * `marca es beautyx`

## Campos del Editor manual

### Información general

* **Nombre**: nombre de la regla de _merchandising_. Ejemplo: promover el producto A cuando se buscan «galletas de chocolate».
* **Fecha de inicio**: define la fecha a partir de la cual se aplicará la regla de _merchandising_. La fecha considera la zona horaria UTC-0.
* **Fecha de fin**: define la fecha en que la regla de _merchandising_ dejará de aplicarse a las búsquedas de la tienda. La fecha considera la zona horaria UTC-0.
* **Regiones:** idiomas en los que se aplicará la regla de _merchandising_.

### Reglas de activación

* **Activación global**: si activas esta opción, la regla de _merchandising_ siempre estará activa e incluirá todos los términos de búsqueda y filtros sin necesidad de configurar las condiciones para las reglas de activación. Esta funcionalidad te permite agregar, eliminar, promover y dejar de promover productos en todas las búsquedas de la tienda.

    En cambio, si optas por mantener desactivada la activación global, deberás registrar — al menos — una condición para componer las reglas de activación. Si deseas obtener información detallada sobre cómo registrar una condición, consulta  [Condiciones de las reglas de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).

* <i class="fa-solid fa-link"></i> `Rellenar a partir de una URL`: agrega la URL de la página de búsqueda en la que se aplicarán las reglas de activación. La URL debe incluir  `map` y `query` para funcionar y respetar el siguiente formato: `https://{nombreDeCuenta}.myvtex.com/busca/{término}?map=ft&query={término}`. Debes reemplazar `{nombreDeCuenta}` por el nombre de la cuenta VTEX y `{término}` por el término de búsqueda.

* `Agregar condición`: al crear una condición, la regla de _merchandising_ solo se aplicará a los casos que cumplan con la combinación de las condiciones establecidas. Para saber cómo crear condiciones, consulta [Condiciones de las reglas de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).

### Reglas de personalización

* **Agregar**: incluye las condiciones seleccionadas en el resultado, es decir, agrega productos que no estarían en el resultado de la búsqueda. Los resultados de la búsqueda no consideran el orden de los productos registrados.

    Los productos agregados también se sitúan en las primeras posiciones, sin embargo, tienen un peso inferior que aquellos de la opción **Promover**. Por lo tanto, si tienes un producto agregado y otro promovido, el producto promovido aparecerá primero y luego lo hará el agregado.

* **Remover**: excluye las condiciones seleccionadas del resultado, es decir, elimina los productos que estarán en el resultado de la búsqueda.

  <div class="alert alert-info">
   <p><strong>Agregar</strong> y <strong>Eliminar</strong> son compatibles con otros tipos de formas de ordenar que no se basan en la relevancia configurada. Por lo tanto, si agregas o eliminas un producto utilizando una regla de <em>merchandising </em>y si, por ejemplo, el cliente de tu tienda ordena los resultados de búsqueda por precio, los productos se ordenarán por precio, pero los productos mostrados respetarán la regla de <em>merchandising</em>.</p>
  </div>

* **Promover**: resalta las condiciones seleccionadas en el resultado. Da más relevancia a un producto que ya aparecería en el resultado de la búsqueda.

    El orden de las condiciones influye en la prioridad de exhibición de los productos. Además, cualquier producto que se incluye en este campo solo se promociona en un único resultado.

* **Dejar de promover**: oculta las condiciones seleccionadas en el resultado. Permite dejar de priorizar un producto que ya aparece en los resultados de la búsqueda.

  <div class="alert alert-info">
   <p><strong>Promover</strong> y <strong>Dejar de promover</strong> solo funcionan cuando el cliente de la tienda ordena los resultados de la búsqueda por relevancia. En cambio, si ordena los resultados por precio, por ejemplo, los productos se ordenarán estrictamente por precio y no se utilizará la regla de <em>merchandising</em>.</p>
  </div>

  <div class="alert alert-warning">
   <p>No configures condiciones que afecten a los mismos productos tanto en la sección <strong>Promover</strong> como en la sección <strong>Dejar de promover</strong> porque se producirán efectos opuestos. Si la configuración de esta condición es incorrecta, esa configuración incorrecta afecta negativamente el comportamiento de la funcionalidad y no se mostrarán los resultados deseados.</p>
  </div>
