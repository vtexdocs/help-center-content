---
title: 'Gestionar contenido de páginas y templates'
id: 3tMbx6HXy4Fy5r9EhboG37
status: PUBLISHED
createdAt: 2021-05-07T03:32:03.808Z
updatedAt: 2023-03-24T22:17:48.424Z
publishedAt: 2023-03-24T22:17:48.424Z
firstPublishedAt: 2021-05-07T06:03:50.121Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slugEN: managing-page-and-template-content
legacySlug: gestionar-contenido-de-paginas-y-templates
locale: es
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

El Site Editor refleje de forma nativa la aplicación Store Theme, lo que le permite sobrescribir las configuraciones predefinidas para los bloques y crear nuevo contenido para las páginas y *templates* (plantillas) de la tienda.

> ℹ️ Site Editor no le permite agregar un nuevo bloque a un *template* o a una página específica, solo puede sobrescribir las configuraciones de bloques existentes de la aplicación Store Theme.

Utilice la autonomía que tiene sobre el código y cree el escenario de *storefront* deseado que se adapte a las necesidades de su negocio aprovechando la facilidad de la interfaz intuitiva.

1. En el Admin VTEX, acceda a **Storefront > Site Editor**.
2. Utilice el campo URL en la parte superior para navegar a la página que muestra el bloque cuyo contenido desea sobrescribir. 

> ℹ️ Site Editor no le permite agregar un nuevo bloque a un *template* o a una página específica, solo puede sobrescribir las configuraciones de bloques existentes de la aplicación Store Theme.

## Crear contenido

1. Seleccione el bloque para el que desea crear nuevo contenido. Puede seleccionarlo utilizando la lista en la esquina derecha o a través de la interfaz:

![seta-interface-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/site-editor/gestionar-contenido-de-paginas-y-templates_1.png)

2. Haga clic en `Versiones` en la esquina superior derecha. 

> ℹ️ El contenido que ve cuando hace clic en un bloque es el que está activo en ese momento. Para más información sobre **Versiones**, acceda [Gestión de versiones de contenido](https://help.vtex.com/es/tutorial/managing-content-versions--4loXo98CZncY0NnjKrScbG) y [Programar actualizaciones de contenido](https://help.vtex.com/es/tutorial/scheduling-content-updates--5L93gED3wgSRoWpFJlJ2ns)

3. Haga clic en el botón `Nuevo contenido`. 
4. Realice los cambios deseados de acuerdo con las configuraciones disponibles para el bloque. 
5. Define si el contenido debe activarse una vez guardado haciendo clic en la casilla de verificación `Activar ahora`. Es posible definir una fecha de inicio y una fecha final para el contenido si lo desea. Para definir las fechas, active los botones respectivos y elija la fecha adecuada en el calendario.

  > ⚠️ Después de que se marca la casilla esta URL, el contenido solo estará visible en la URL específica en la que guardó sus cambios. Por lo tanto, tenga cuidado con los parámetros y otros componentes de URL que puedan afectar la visualización del contenido: cuanto más específica sea su URL, más restringido estará el nuevo contenido.

  > ℹ️ Site Editor aplica la configuración de contenido según la jerarquía de parámetros. Puede reproducir contenido de forma nativa para todas las páginas al crear el contenido en el mismo parámetro primario. Considere una URL de categoría determinada, por ejemplo. Al crear contenido en ella, también se actualizarán las URL de todas las páginas de productos cuyo parámetro primario sea la categoría.

6. Aún en la sección `Visibilidad`, indique si el contenido solo se creará en la URL a la que navegó inicialmente o en el *template* completo, incluida la URL en la que se encuentra y todas las demás. 
7. Guarde los cambios.

## Editar contenido

1. Seleccione el bloque cuyo contenido desea sobrescribir. Puede seleccionarlo utilizando la lista en la esquina derecha o a través de la interfaz:

![seta-interface-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/site-editor/gestionar-contenido-de-paginas-y-templates_2.png)

2. El contenido disponible corresponde al que está activo ahora. Modifique los campos con los nuevos valores o haga clic en `Versiones` para cambiar la configuración de otro contenido. 
3. Guarde los cambios.

> ⚠️ No puede actualizar la visibilidad del contenido que se derive del código fuente (de la aplicación Store Theme) en Site Editor. Independientemente de sus acciones, siempre se muestran por *template* y no por URL. Sin embargo, para contenido creado manualmente en Site Editor sí puede cambiar la visibilidad a URL o *template*, según sus necesidades.

## Eliminar y restablecer contenido

1. Seleccione el bloque cuyo contenido desea eliminar o restablecer. Puede seleccionarlo utilizando la lista en la esquina derecha o a través de la interfaz:

![seta-interface-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/storefront/site-editor/gestionar-contenido-de-paginas-y-templates_3.png)

2. Haga clic en `Versiones` en la esquina superior derecha. 
3. Haga clic en el menú del contenido deseado (tres puntos verticales). 
4. Haga clic en `Eliminar` o `Restaurar` y confirme su acción.

> ⚠️ Las acciones `Eliminar` y `Restaurar` dependen del tipo de contenido. El contenido nativo, es decir, el contenido creado en el código fuente, no se puede eliminar a tráves del Admin, solo restaurar (si realizó alguna actualización). Solo puede eliminar contenido que haya creado manualmente a través del Site Editor.

## Configurar contenido activo e inactivo

Toda configuración realizada en Site Editor de forma nativa sobrescribe la que se realiza mediante la aplicación Store Theme. 

En la práctica, esto significa que el contenido recién creado o actualizado a través del módulo en su mayoría se clasifica automáticamente como activo, dependiendo de si se predefinió una fecha de inicio y/o final.

Tenga en cuenta que al hacer clic en el menú del contenido (tres puntos verticales), las únicas acciones disponibles son *eliminar* o *restaurar*, no hay ningún botón para *activar*.

La manera correcta de definir qué contenido debe estar activo e inactivo es eliminar o restaurar el contenido activo y dejar que el primer contenido de la fila inactiva se active. 

> ℹ️ La fila de contenido inactivo comienza del contenido más reciente hasta el más antiguo. Tenga en cuenta que el contenido creado a través de Site Editor siempre prevalece sobre lo que se definió en el código fuente.
