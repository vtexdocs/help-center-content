---
title: Gestionar redirecciones según el binding
id: 67GAK2TCQgjvmtPXxAqREb
status: PUBLISHED
createdAt: 2021-04-20T15:03:54.330Z
updatedAt: 2023-03-24T22:20:43.304Z
publishedAt: 2023-03-24T22:20:43.304Z
firstPublishedAt: 2021-05-05T18:11:25.521Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slug: administrando-redireccionamientos-de-url-por-binding
legacySlug: administrando-redireccionamientos-de-url-por-binding
subcategory: 1znnjA17XqaUNdNFr42PW5
---

Las redirecciones son una herramienta para reenviar tanto a los usuarios como a los motores de búsqueda a una URL activa más relevante o similar diferente de la que solicitaron inicialmente.

Las tiendas que tienen varios dominios suelen solicitar gestionar la redirección según el [*binding*](https://help.vtex.com/en/tutorial/what-is-binding--4NcN3NJd0IeYccgWCI8O2W) debido a la complejidad que presentan las varias URL disponibles. 

Con esto en mente, VTEX le permite gestionar sus redirecciones de URL de acuerdo con el *binding* de la tienda a través de la interfaz del Admin.

En el Admin VTEX:

1. Acceda al módulo **Storefront > Páginas**.
2. Haga clic en la pestaña `Redirecciones`.

![es-redirect-tab](//images.ctfassets.net/alneenqid6w5/5TkQzPBMxi9Wh4SCBgVWZ1/ca140110fbe426d775814a1fd5ae4350/redirect-tab.png)

## Crear redirecciones manualmente

En la pestaña Redirecciones del módulo Páginas:

1. Haga clic en el botón `Nueva redirección`. 
2. En el campo `Unión`, seleccione el enlace deseado en el menú desplegable.
3. Utilice los campos `De` y `Para` para definir la URL anterior y la nueva a la que se redirigirán los usuarios y los motores de búsqueda.
4. Indique si la redirección será permanente o temporal. Si es temporal, puede activar el botón `Esta redirección tiene una fecha final` y definir la fecha final. 
5. Guarde los cambios.

![es-novoredirect](//images.ctfassets.net/alneenqid6w5/1XJSvEL4ozDdupa3j0mcx8/95ddbd08e7902a6c7aa7f30a4af85120/nuevo-redirect.png)

## Eliminar redirecciones manualmente

En la pestaña Redirecciones del módulo Páginas:

1. Haga clic en la redirección que desea eliminar.
2. Haga clic en el botón `Remover`.
3. Confirme la acción. 

![es-remover-redirect](//images.ctfassets.net/alneenqid6w5/5khhDBT5o6ESJjwlaFClr5/a6d978fecd07eba1007ea1b28d2675b6/remover-redirect.png)

<div class="alert alert-warning">
Puede ocurrir un error al intentar hacer clic en las redirecciones que tienen cadenas de query. El equipo de producto de VTEX está al tanto de este comportamiento inesperado y está trabajando en la corrección. Si no puede hacer clic en la redirección que desea eliminar, puede utilizar la hoja de cálculo para eliminarla mientras arreglamos el error. 
</div>

## Importar y exportar redirecciones

Para gestionar las redirecciones de su tienda en masa, puede importar y exportar la plantilla de redirecciones. 

<div class="alert alert-warning">
Las entradas de la plantilla se crearán o eliminarán obligatoriamente en la lista de las redirecciones de la tienda. No es posible crear <i>y</i> eliminar redirecciones con la misma plantilla. Antes de rellenar y cargar la plantilla al Admin, defina cuál es el objetivo final de esta acción.
</div>

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

  ![es-redirect-planilha](//images.ctfassets.net/alneenqid6w5/4jcHxndX1LyV74UdFJgWNV/7efcfc5207e0972a2b31a4be847b7000/planilha-redirect.png)

  <div class="alert alert-warning">
Al seleccionar la opción <code>Guardar</code>, creará todas las redirecciones enumeradas en la plantilla, mientras que seleccionar la opción <code>Eliminar</code> las eliminará todas de la base de datos de su tienda.
</div>

6. Cargue la plantilla desde sus archivos locales.
7. Haga clic en el botón `Importar archivo`.
