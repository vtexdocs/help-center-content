---
title: 'Gestionar redirecciones según el binding'
id: 67GAK2TCQgjvmtPXxAqREb
status: PUBLISHED
createdAt: 2021-04-20T15:03:54.330Z
updatedAt: 2023-09-04T12:42:32.729Z
publishedAt: 2023-09-04T12:42:32.729Z
firstPublishedAt: 2021-05-05T18:11:25.521Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slugEN: managing-redirects-per-binding
locale: es
legacySlug: administrando-redireccionamientos-de-url-por-binding
subcategoryId: 1znnjA17XqaUNdNFr42PW5
---

Las redirecciones son una herramienta para reenviar tanto a los usuarios como a los motores de búsqueda a una URL activa más relevante o similar diferente de la que solicitaron inicialmente.

Las tiendas que tienen varios dominios suelen solicitar gestionar la redirección según el [*binding*](https://help.vtex.com/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) debido a la complejidad que presentan las varias URL disponibles. 

Con esto en mente, VTEX le permite gestionar sus redirecciones de URL de acuerdo con el *binding* de la tienda a través de la interfaz del Admin.

>⚠️ Para crear, editar o eliminar redirecciones, el usuario del Admin VTEX debe tener un rol de acceso con el [recurso de License Manager](https://help.vtex.com/es/tutorial/recursos-del-license-manager--3q6ztrC8YynQf6rdc6euk3) **CMS Settings**. Puedes asignar al usuario un rol de acceso con el recurso siguiendo las instrucciones del artículo [Gestionar usuarios](https://help.vtex.com/es/tutorial/gestionar-usuarios--tutorials_512#editando-usuarios), o crear un nuevo rol de acceso que incluya dicho recurso consultando las instrucciones del artículo [Roles](https://help.vtex.com/es/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creando-un-rol).

En el Admin VTEX:

1. Acceda al módulo **Storefront > Páginas**.
2. Haga clic en la pestaña `Redirecciones`.

![es-redirect-tab](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Pages/administrando-redireccionamientos-de-url-por-binding_1.png)

## Crear redirecciones manualmente

En la pestaña Redirecciones del módulo Páginas:

1. Haga clic en el botón `Nueva redirección`. 
2. En el campo `Unión`, seleccione el enlace deseado en el menú desplegable.
3. Utilice los campos `De` y `Para` para definir la URL anterior y la nueva a la que se redirigirán los usuarios y los motores de búsqueda.
4. Indique si la redirección será permanente o temporal. Si es temporal, puede activar el botón `Esta redirección tiene una fecha final` y definir la fecha final. 
5. Guarde los cambios.

![es-novoredirect](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Pages/administrando-redireccionamientos-de-url-por-binding_2.png)

## Eliminar redirecciones manualmente

En la pestaña Redirecciones del módulo Páginas:

1. Haga clic en la redirección que desea eliminar.
2. Haga clic en el botón `Remover`.
3. Confirme la acción. 

![es-remover-redirect](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Pages/administrando-redireccionamientos-de-url-por-binding_3.png)

>⚠️ Puede ocurrir un error al intentar hacer clic en las redirecciones que tienen cadenas de query. El equipo de producto de VTEX está al tanto de este comportamiento inesperado y está trabajando en la corrección. Si no puede hacer clic en la redirección que desea eliminar, puede utilizar la hoja de cálculo para eliminarla mientras arreglamos el error.

## Importar y exportar redirecciones

Para gestionar las redirecciones de su tienda en masa, puede importar y exportar la plantilla de redirecciones. 

>⚠️ Las entradas de la plantilla se crearán o eliminarán obligatoriamente en la lista de las redirecciones de la tienda. No es posible crear <i>y</i> eliminar redirecciones con la misma plantilla. Antes de rellenar y cargar la plantilla al Admin, defina cuál es el objetivo final de esta acción.

En la pestaña Redirecciones del módulo Páginas:

1. Haga clic en el botón de `Importar` y luego, en `Descargar plantilla`. Haga clic en el botón `Exportar` si su objetivo es descargar y modificar la lista de redirección guardada previamente. 
2. Abra la plantilla cuando se termine de descargar y rellene las celdas de las columnas correspondientes según la tabla a continuación:

  | Columna    | Valor esperado    |
| ---------- | ----------------- |
| `from`     | La URL anterior que no funciona con los motores de búsqueda. |
| `to`       | La nueva URL a la que se redirigirán los usuarios y los motores de búsqueda. |
| `type`     | Indica si la redirección es permanente o temporal, es decir, si tiene una fecha final. |
| `binding`  | Binding al que se le aplicará la redirección. Atención: las celdas de esta columna deben rellenarse con los [ID de binding](https://developers.vtex.com/vtex-developer-docs/docs/checking-your-stores-binding-id) deseados. |
| `endDate`  | Fecha final de la redirección en el formato UTC. Observe que las celdas de esta columna solo deben rellenarse cuando establece el tipo de redirección como temporal. |

3. Guarde la plantilla cuando esté seguro de los cambios. 
4. Haga clic en el botón `Importar`. 
5. Haga clic en el botón `Guardar` o `Eliminar` según sea el caso. 

  ![es-redirect-planilha](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Storefront/Pages/administrando-redireccionamientos-de-url-por-binding_4.png)

  >⚠️ Al seleccionar la opción `Guardar`, creará todas las redirecciones enumeradas en la plantilla, mientras que seleccionar la opción `Eliminar` las eliminará todas de la base de datos de su tienda.

6. Cargue la plantilla desde sus archivos locales.
7. Haga clic en el botón `Importar archivo`.
