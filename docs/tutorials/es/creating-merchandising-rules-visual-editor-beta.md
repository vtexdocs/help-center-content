---
title: 'Crear regla de merchandising - Editor visual (Beta)'
id: 6xteumx9MsDt0uEppbChu3
status: PUBLISHED
createdAt: 2023-04-03T21:05:14.304Z
updatedAt: 2023-04-11T22:34:40.303Z
publishedAt: 2023-04-11T22:34:40.303Z
firstPublishedAt: 2023-04-03T21:30:34.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: crear-regla-de-merchandising-editor-visual-beta
locale: es
legacySlug: crear-regla-de-merchandising-editor-visual-beta
subcategory: 23WdCYqmn2V2Z7SDlc14DF
---

<div class="alert alert-info">
  <p>Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solamente clientes seleccionados pueden acceder a ella. Si tienes interés en implementarla en tu negocio, comunícate con <a href="https://support.vtex.com/hc/es-419/requests">nuestro Soporte</a>.</p>
</div>

El Editor visual (beta) de las [reglas de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) de VTEX Intelligent Search permite realizar las acciones que se indican en la imagen a continuación:

![visual-merch-rules-ES](https://images.ctfassets.net/alneenqid6w5/5Pah0D3Y9CfUyczqFR99bd/21b0a087a9f1172d279ce68672813e94/visual-merch-rules-ES.png)

<ol class="mv7" type="I">
    <li class="t-body c-on-base mb5 lh-copy">Editar el nombre de la regla de <em>merchandising</em>.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir los términos de búsqueda para aplicar la regla de
        <em>merchandising</em>.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir <a href="#agregar-filtros-y-condiciones" rel="noopener noreferrer" target="_self"
            class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">los
            filtros</a> para aplicar la regla de <em>merchandising</em>.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir la cantidad de ítems por línea.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir la cantidad de ítems por página.</li>
    <li class="t-body c-on-base mb5 lh-copy">Navegar entre las páginas de resultado de la búsqueda.</li>
    <li class="t-body c-on-base mb5 lh-copy">Arrastrar el producto a la posición deseada en los resultados de la
        búsqueda. Solo se pueden arrastrar productos que estén fijos (acción IX).</li>
    <li class="t-body c-on-base mb5 lh-copy">Ocultar producto en los resultados de búsqueda. No podrás anular esta
        acción, por lo tanto, deberás crear otra regla de <em>merchandising</em> para que un producto vuelva a aparecer
        en los resultados.</li>
    <li class="t-body c-on-base mb5 lh-copy">Fijar el producto en las primeras posiciones de los resultados de la
        búsqueda. Al fijar el producto A e inmediatamente después el producto B, los resultados de la búsqueda
        respetarán este orden y estos productos aparecerán antes que los demás.</li>
    <li class="t-body c-on-base mb5 lh-copy">Ver detalles del producto.</li>
    <li class="t-body c-on-base mb5 lh-copy">Cancelar edición.</li>
    <li class="t-body c-on-base mb5 lh-copy">Guardar configuración.</li>
</ol>

## Configurar regla de merchandising

Si deseas configurar una regla de _merchandising_ en el Editor visual, sigue los pasos que se indican a continuación.

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront**.
2. En **Intelligent Search**, haz clic en **Reglas de merchandising**.
3. Haz clic en el botón `Nuevo`.
4. Rellena los siguientes campos:
    * **Nombre de la regla**: nombre de la regla de _merchandising_. Ejemplo: promover el producto A cuando se buscan «galletas de chocolate».
    * **Fecha de inicio (opcional)**: define la fecha a partir de la cual se aplicará la regla de _merchandising_. La fecha considera la zona horaria UTC-0.
    * **Fecha de fin (opcional)**: define la fecha en que la regla de _merchandising _dejará de aplicarse a las búsquedas de la tienda. La fecha considera la zona horaria UTC-0.
    * **Idiomas:** idiomas en los que se aplicará la regla de _merchandising_.
5. Haz clic en **Editor visual**. Para más información sobre cada editor, consulta [Tipos de edición](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicion).
6. Haz clic en `Siguiente`.
7. Para definir un término de búsqueda que determine la aplicación de la regla de _merchandising_, escribe el término en la barra de búsqueda (ítem II de la imagen anterior). Debes definir al menos un término o un filtro (paso 8) para la aplicación de la regla.
8. Si deseas crear un filtro para aplicar la regla de _merchandising_ (punto III de la imagen anterior), sigue cada uno de los pasos descritos en la sección [Agregar filtros y condiciones](#agregar-filtros-e-condicoes). Debes definir al menos un filtro o un término (paso 7) para la aplicación de la regla.
9. Si lo deseas, realiza el resto de las acciones opcionales para personalizar los resultados de la búsqueda (ítems IV, V, VII, VIII, IX de la imagen anterior).
10. Haz clic en `Guardar`.

### Agregar filtros y condiciones

El filtro es un atributo seleccionable predefinido que restringe los resultados de la búsqueda, por ejemplo, permite filtrar por todos los productos de una categoría o marca, entre otras condiciones. Puedes agregar una o más condiciones a un filtro, tal como se muestra a continuación.

![filtros-merchrules-es](https://images.ctfassets.net/alneenqid6w5/5e2KtHyjaAmvBqRDaJe8EK/cff18739dd40a27d303df3b5664e4d63/filtros-es.gif)

Si deseas agregar una condición en el Editor visual, sigue cada uno de los pasos que se indican a continuación. 

1. Haz clic en `Filtro`.
2. Haz clic en `Agregar condición`.
3. Rellena las condiciones que deseas crear. Las opciones disponibles se describen en [Condiciones de las reglas de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
4. Haz clic en `Guardar`.

Las condiciones definidas pueden funcionar en forma conjunta (`y`) o alternativamente (`o`).

En el menú de cada una de las condiciones existentes, puedes `Duplicar` o `Eliminar` la condición. Si deseas desactivar todas las condiciones creadas, haz clic en `Borrar filtros`.

