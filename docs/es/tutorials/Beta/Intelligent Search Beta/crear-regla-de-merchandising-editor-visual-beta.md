---
title: 'Crear regla de merchandising - Editor visual (Beta)'
id: 6xteumx9MsDt0uEppbChu3
status: ARCHIVED
createdAt: 2023-04-03T21:05:14.304Z
updatedAt: 2024-01-29T17:17:03.584Z
publishedAt: 
firstPublishedAt: 2023-04-03T21:30:34.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-merchandising-rules-visual-editor-beta
locale: es
legacySlug: crear-regla-de-merchandising-editor-visual-beta
subcategoryId: 23WdCYqmn2V2Z7SDlc14DF
---

>ℹ️ Esta funcionalidad se encuentra en fase beta cerrada, lo que significa que por el momento solamente clientes seleccionados pueden acceder a ella. Si tienes interés en implementarla en tu negocio, comunícate con [nuestro Soporte](https://support.vtex.com/hc/es-419/requests).

Para configurar una [regla de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0) de VTEX Intelligent Search utilizando el [Editor visual](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicao), sigue los pasos a continuación.

1. En el Admin VTEX, accede a **Storefront**, o ingresa **Storefront **en la barra de búsqueda.
2. En **Intelligent Search**, haz clic en **Reglas de merchandising**.
3. Haz clic en el botón `+ Agregar`.
4. Rellena los siguientes campos:

    * **Nombre de la regla**: nombre de la regla de merchandising. Ejemplo: promocionar el producto A cuando el cliente busque "galletas de chocolate".
    * **Fecha de inicio (opcional)**: define la fecha a partir de la cual se aplicará la regla de merchandising. La fecha considera la zona horaria UTC-0.
    * **Fecha de fin (opcional)**: define la fecha en que la regla de merchandising dejará de aplicarse a las búsquedas de la tienda. La fecha considera la zona horaria UTC-0.
    * **Aplicar a los idiomas:** idiomas en los que se aplicará la regla de merchandising. Campo solo disponible para tiendas que utilizan [configuración multidioma (beta)](https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).
5. Haz clic en **Editor visual**. Para más información sobre cada editor, consulta [Tipos de edición](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0#tipos-de-edicao).
6. Haz clic en `Siguiente`.
7. Define al menos un término de búsqueda o filtro para aplicar la regla de merchandising:

    * Para definir un término de búsqueda, ingresa el término en la barra de búsqueda (ítem **II** de la sección [Acciones disponibles en el Editor visual](https://docs.google.com/document/d/1zUZ_FhSGgJ8b3E0oF-q04sfcaDw6_btr/edit#bookmark=id.2et92p0)).
    * Si deseas crear un filtro para aplicar la regla de merchandising (ítem **III** de la sección [Acciones disponibles en el Editor visual](https://docs.google.com/document/d/1zUZ_FhSGgJ8b3E0oF-q04sfcaDw6_btr/edit#bookmark=id.2et92p0)), sigue las instrucciones descritas en la sección [Agregar filtros y condiciones](https://help.vtex.com/es/tutorial/criar-regra-de-merchandising-editor-visual-beta--6xteumx9MsDt0uEppbChu3#adicionar-filtros-e-condicoes).
8. Si lo deseas, realiza las acciones opcionales que se indican a continuación para personalizar los resultados de la búsqueda.
    * Definir cantidad de ítems por fila en los resultados de búsqueda.
    * Definir cantidad de ítems por página en los resultados de búsqueda.
    * Ocultar producto en los resultados de búsqueda.
    * Fijar producto, es decir, anclarlo en las primeras posiciones de los resultados de búsqueda.
    * Arrastrar el producto fijado a la posición deseada en los resultados de búsqueda.
    * Editar la configuración inicial de la regla de merchandising, que incluye el nombre de la regla, las fechas de inicio y fin y, si la tienda utiliza la [Configuración multidioma (beta)](https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO), los idiomas a los que se aplicará.

      Más información sobre estas acciones en los puntos **4, 5, 6, 8, 9** y **11** de la sección [Acciones disponibles en el Editor visual](#acciones-disponibles-en-el-editor-visual).
9. Haz clic en `Guardar`.

 >ℹ️ Una vez guardados, los cambios en las reglas de merchandising tardan un promedio de dos minutos en actualizarse.

## Acciones disponibles en el Editor visual

El Editor visual de reglas de merchandising de VTEX Intelligent Search permite realizar las acciones que se ilustran en la imagen siguiente:

![visual-merch-rules-ES-v2](https://images.ctfassets.net/alneenqid6w5/1wQEvrFFEp5ixHPCVtHsxa/717c18f418806f9cda88166167928548/visual-merch-rules-ES-v2.png)

<ol class="mv7" type="I">
    <li class="t-body c-on-base mb5 lh-copy">Editar nombre de la regla de merchandising.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir los términos de búsqueda para aplicar la regla de merchandising.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir <a href="#agregar-filtros-y-condiciones" rel="noopener noreferrer"
            target="_self"
            class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word">filtros</a> para aplicar la regla de merchandising.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir cantidad de ítems por fila en los resultados de búsqueda.</li>
    <li class="t-body c-on-base mb5 lh-copy">Definir cantidad de ítems por página en los resultados de búsqueda.</li>
    <li class="t-body c-on-base mb5 lh-copy">Ocultar producto en los resultados de búsqueda. En el Editor visual, los productos ocultos aparecen en gris con el ícono del ojo tachado <i class="far fa-eye-slash"></i>. Para volver a mostrar un producto oculto, pasa el mouse sobre él y haz clic en el ícono del ojo <i class="far fa-eye"></i>.</li>
    <li class="t-body c-on-base mb5 lh-copy">Ver detalles del producto. La información mostrada es:<br /><br />
	   <ul>
		  <li class="t-body c-on-base mb5 lh-copy"><strong>Disponible:</strong> indica si el producto está o no disponible en la tienda.</li>
			<li class="t-body c-on-base mb5 lh-copy"><strong>Clics:</strong> número de clics durante los últimos 90 días.</li>
			<li class="t-body c-on-base mb5 lh-copy"><strong>Pedidos:</strong> número de pedidos realizados que incluyen el producto en los últimos 90 días.</li>
			<li class="t-body c-on-base mb5 lh-copy"><strong>Ingresos:</strong> ingresos que generó el producto en los últimos 90 días.</li>
			<li class="t-body c-on-base mb5 lh-copy"><strong>Fecha de lanzamiento:</strong> fecha de lanzamiento del producto.</li> 
			<li class="t-body c-on-base mb5 lh-copy"><strong>Promoción:</strong> indica si el producto forma parte o no de una promoción.</li>
			<li class="t-body c-on-base mb5 lh-copy"><strong>Descuento:</strong> descuento aplicado sobre el producto.</li>
			<li class="t-body c-on-base mb5 lh-copy"><strong>Variedad de matriz disponible: </strong>representa el porcentaje de SKU disponibles del producto. Por ejemplo, si un producto tiene cinco SKU y solo hay tres disponibles, la variedad de matriz disponible será del 60 %, representada como 0.6 en este campo. Si todos los SKU están disponibles, el valor del campo será 1.</li>
	   </ul>
    </li>
    <li class="t-body c-on-base mb5 lh-copy">Arrastrar producto anclado a la posición deseada en los resultados de búsqueda. Solo pueden arrastrarse productos que hayan sido anclados (acción <strong>IX</strong> de esta lista).</li>
    <li class="t-body c-on-base mb5 lh-copy">Anclar producto, es decir, situarlo en las primeras posiciones de los resultados de búsqueda. Al anclar el producto A y, a continuación, el producto B, aparecerán en ese orden en los resultados de búsqueda, antes que los demás. Para desanclar un producto, pasa el cursor sobre él y haz clic en el ícono de la tachuela tachada <i class="fas fa-thumbtack"></i>.</li>
    <li class="t-body c-on-base mb5 lh-copy">Navegar entre páginas de resultados de búsqueda.</li>
    <li class="t-body c-on-base mb5 lh-copy">Editar la configuración inicial de la regla de merchandising, que incluye el nombre de la regla, las fechas de inicio y fin y, si la tienda utiliza la <a rel="noopener noreferrer" target="_self" class="t-body mv5 lh-copy c-link active-c-link hover-c-link visited-c-link hover-c-link break-word" href="https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO">Configuración multidioma (beta)</a>, los idiomas a los que se aplicará.</li>
    <li class="t-body c-on-base mb5 lh-copy">Cancelar edición.</li>
    <li class="t-body c-on-base mb5 lh-copy">Guardar configuración.</li>
</ol>

### Agregar filtros y condiciones

El filtro es un atributo seleccionable predefinido que restringe los resultados de la búsqueda, por ejemplo, permite filtrar por todos los productos de una categoría o marca, entre otras condiciones. Puedes agregar una o más condiciones a un filtro, tal como se muestra a continuación.

![filtros-merchrules-es](//images.ctfassets.net/alneenqid6w5/5e2KtHyjaAmvBqRDaJe8EK/cff18739dd40a27d303df3b5664e4d63/filtros-es.gif)

Si deseas agregar una condición en el Editor visual, sigue cada uno de los pasos que se indican a continuación. 

1. Haz clic en `Filtro`.
2. Haz clic en `Agregar condición`.
3. Rellena las condiciones que deseas crear. Las opciones disponibles se describen en [Condiciones de las reglas de merchandising](https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3Dvava8LSVcFKeS2S6J7XW).
4. Haz clic en `Guardar`.

Las condiciones definidas pueden funcionar en forma conjunta (`y`) o alternativamente (`o`).

En el menú de cada una de las condiciones existentes, puedes `Duplicar` o `Eliminar` la condición. Si deseas desactivar todas las condiciones creadas, haz clic en `Borrar filtros`.
