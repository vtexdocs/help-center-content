---
title: 'Registar Colecciones (Beta)'
id: yJBHqNMViOAnnnq4fyOye
status: PUBLISHED
createdAt: 2020-08-17T20:29:25.500Z
updatedAt: 2025-04-14T19:31:23.563Z
publishedAt: 2025-04-14T19:31:23.563Z
firstPublishedAt: 2020-08-27T15:16:59.673Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-collections-beta
locale: es
legacySlug: registrar-colecciones-beta
subcategoryId: 3aExYJkji3NIu9Ks8bxbWx
---

<div class = "alert alert-info">
  <p>Existen dos formas de configurar las colecciones, a través del <b>CMS</b> o utilizando el módulo <b>Colecciones (Beta)</b>. Este artículo se refiere a la configuración de colecciones mediante el módulo <b>Colecciones (Beta)</b>.</p> 
    <p>La funcionalidad está en versión Beta y disponible únicamente para ambientes Admin v3. En caso de dudas, <a href="https://support.vtex.com/hc/es-419/requests">contacte a nuestro soporte</a>.</p>
</div>

Este nuevo módulo de **Colecciones (Beta)** permite crear y gestionar colecciones de forma práctica y rápida.

Al agrupar productos relacionados en colecciones, usted crea un proceso de descubrimiento para sus clientes, que puede conducirlos a encontrar nuevos productos y a comprar más mediante una mejor experiencia de compra.

Este artículo explica cómo:

- Crear una nueva colección.
- Agregar y eliminar productos en la colección.
- Alterar la posición de los ítems en la colección.
- Exportar su colección como una plantilla. 
- Editar y eliminar una colección.

## Requisito previo

Para crear una colección, debe tener el [perfil de acceso](/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc?locale=es) _Owner (Admin Super)_ o crear otro perfil con el recurso **Write Collections**, en la sección **Collection** de los perfiles de **Catalog**. Vea aquí [cómo crear un perfil de acceso](/es/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc#creando-un-perfil-de-acceso).

<div class = "alert alert-info">
  <p>Es importante destacar que las colecciones creadas en este módulo no se alteran automáticamente. Las colecciones automáticas — realizadas mediante la selección de filtros — no se pueden configurar en el módulo.</p>
</div>

## Crear una colección

Realice el siguiente paso a paso para registrar una nueva colección:

1. En el Admin VTEX, accede a **Catálogo**, o escribe **Catálogo** en la barra de búsqueda en la parte superior de la página.
2. Haga clic en **Colecciones**.
3. Haga clic en el botón `Crear Colección`.
4. Complete los [campos del formulario de la nueva colección](/es/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#campos-de-registro-de-la-coleccion).
5. Haga clic en `Crear` para guardar la información ingresada en el formulario.
6. Luego, [seleccione los productos](/es/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#seleccion-de-productos) que formarán parte de la colección.

### Campos de registro de la colección

Para entender mejor el significado de los campos de registro de una colección de productos, vea la descripción completa de cada campo a continuación: 

#### Configuración de la nueva colección

- **Nombre de la colección:** nombre de la colección creada. Este campo es obligatorio.
  <div class="alert alert-danger">
No utilice caracteres especiales en el nombre de la colección.
</div>

- **Descripción simple:** descripción con detalles de la colección para uso interno. No se utilizará para mecanismos de búsqueda.
- **Agregar productos automáticamente**: incluir automáticamente los productos en la colección según los criterios seleccionados.

#### Programación

- **Fecha de inicio:** fecha y hora de inicio de la colección. Si se configuran fecha y hora futuras, la colección quedará registrada con el status programada. 
- **Establecer fecha final para la colección:** selección que permite configurar la fecha y la hora de finalización de la colección.  
- **Fecha final:** fecha y hora de finalización de la colección. Este campo sólo se muestra si está activada la opción **Establecer fecha final para la colección**.

#### Activar

- **Agregar etiqueta de la colección:** opción para que la colección tenga una etiqueta de destaque en los productos.  
- **Permitir que la colección se pueda buscar:** opción para que la colección pueda ser encontrada cuando se busque en la tienda. 

### Selección de productos

Los productos pueden ser agregados a través de la selección de ítems en la lista del módulo __Colecciones__ o importando una plantilla en formato CSV o XML. 

#### Vía Admin VTEX

La selección de productos vía Admin VTEX se puede realizar a través de la lista de productos, la barra de búsqueda y los filtros. Es posible buscar un producto de acuerdo con las siguientes características:

- Nombre del producto.
- ID del producto.
- Nombre del SKU.
- ID del SKU.
- Referencia del producto.

Hay una variedad de filtros que se pueden seleccionar para reducir la cantidad de productos que se muestran en la lista. 

![Colecciones - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_1.PNG)

Usted puede crear nuevos filtros a partir de otros criterios que no se incluyen en los filtros predeterminados. Las siguientes imágenes muestran algunas opciones:

![Novo filtro - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_2.PNG)

![Filtro Colecao detalhes - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_3.PNG)

Para agregar un producto a la colección, solo haga clic en el ícono <i class="fas fa-plus-circle" title = "símbolo de agregar en círculo"></i> del producto. De esa forma, se guardará en la colección automáticamente.  

Si desea más información sobre el ítem, haga clic en el ícono <i class="fas fa-external-link-alt" title = "enlace externo"></i> para abrir la página del producto, o haga clic en la imagen para verla de forma ampliada. 

![ES-colecao-adicionar](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_4.gif)

Si desea incluir productos de forma masiva, aplique uno de los filtros y haga clic en el botón `Agregar Todo`. Es importante destacar que el producto debe tener al menos un SKU registrado para ser incluido en una colección.

![ES-colecao-adicionar-todos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_5.png)

<div class = "alert alert-danger">
<p>No agregue de forma masiva una cantidad superior a 150 mil productos. Eso puede comprometer la indexación del catálogo y el funcionamiento de la tienda.</p>
</div>

#### Por plantilla
Usted también puede agregar ítems a una colección mediante una plantilla. 

<div class = "alert alert-info">El límite máximo para la importación e exportación es de 10,000 SKUs por operación.</div>

Para eso, realice los siguientes pasos: 

  1. En el panel de su colección, haga clic en el botón `Importar`.
  2. Haga clic en la opción **Incluir productos a la colección**, y luego en el botón `Importar`.
  3. Haga clic en `Descargar la plantilla` para obtener la plantilla correcta como se muestra aquí:

![colecao-planilha -ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_6.png)

  4. Complete la plantilla con los IDs o los RefIDs de los productos o de los SKUs. Solo agregue un ID en cada fila. Independientemente del ID que ingrese, todos los SKUs del producto seleccionado se añadirán a la colección después de la importación.
  5. Después de completar la plantilla, guarde las modificaciones e importe el documento en el Admin. Usted puede arrastrar y soltar el archivo en el área indicada o hacer clic en **Selecciona un archivo**. Se aceptan archivos en formato CSV o XML. En caso de que utilice un arquivo CSV, use , para delimitar los campos.
  6. Para finalizar, haga clic en `Importar`.

<div class = "alert alert-warning">
  <p>La plantilla puede contener hasta 10.000 líneas. Sin embargo, en tiendas con un catálogo extenso, recomendamos incluir un máximo de 50 líneas a la vez para asegurar que la importación funcione correctamente.</p>
</div>

### Eliminación de productos

Los productos se pueden eliminar mediante la selección de los ítems en la lista del módulo __Colecciones__, así como a través de la importación de una plantilla en formato CSV o XML para excluirlos.

#### Vía Admin VTEX

Para eliminar un ítem de la colección, solo debe hacer clic en el ícono <i class="fas fa-check-circle" title = "check en círculo"></i> del producto. 

![ES-colecao-remover](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_7.gif)

Si desea eliminar productos de forma masiva, aplique uno de los filtros y haga clic en el botón `Eliminar Todo`.

![ES-colecao-remover-todos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_8.png)

También puede hacer clic en el botón <i class="far fa-check-circle" title = "produtos nesta coleção"></i> (Productos nen esta colección) en la barra superior y después seleccionar `Eliminar Todo`. 

<div class = "alert alert-danger">
  <p>No elimine de forma masiva una cantidad superior a 150 mil productos. Eso puede comprometer la indexación del catálogo y el funcionamiento de su tienda.</p>
</div>

#### Por plantilla

Usted puede excluir los ítems de una colección mediante una plantilla. Para eso, realice los siguientes pasos: 

1. En el panel de su colección, haga clic en el botón `Importar`.
2. Haga clic en la opción **Eliminar productos de la colección**, y luego en el botón `Importar`.
3. Haga clic en **Descargar la plantilla** para obtener el modelo correcto de la plantilla. 
4. Después de completar la plantilla, envíela. Usted puede arrastrar y soltar el archivo en el área indicada o hacer clic en **Selecciona un archivo**. Se aceptan archivos en formato CSV o XML.
5. Para finalizar, haga clic en `Importar`.

### Alterar el orden de la colección

Para alterar el orden de su colección, siga estos pasos: 

1. En el panel de su colección, haga clic en la pestaña **Mi colección**.
2. Se puede cambiar la posición de los ítems de dos formas: 

  a. Haga clic en el ícono <i class="fas fa-grip-vertical" title = "arrastrar vertical"></i>, arrastre y suelte el ítem de acuerdo con la posición deseada.

  <div class = "alert alert-info">
    <p>No se puede utilizar esta opción si un filtro está activo.</p>
  </div>

  b. Seleccione la caja de los productos que desea alterar y haga clic en `Mover a la posición`. Indique el número de la nueva posición y, para finalizar, haga clic en `Mover`. De esta manera, puede ordenar todos los ítems de la lista de forma masiva. 

![mover-colecao-ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/Catalog/Collection/registrar-colecciones-beta_9.png)

### Exportar la plantilla de la colección

Usted puede tener acceso a todos los productos de su colección a través de una plantilla. Para exportar su colección, realice los siguientes pasos:

1. En el panel de su colección, haga clic en el botón `Exportar`.
2. Elija el formato en el que desea exportar, CSV o XML.
3. Seleccione si desea recibir la plantilla por correo electrónico o descargarla directamente en su computadora.  
4. Para finalizar, haga clic en `Exportar` para que se descargue el archivo o sea enviado a su correo electrónico, dependiendo de las opciones que seleccionó anteriormente.

### Eliminar y editar una colección

Para eliminar una colección, haga clic en el ícono <i class="fas fa-trash-alt" title = "papelera"></i> en la lista de colecciones. Si desea editar una colección, siga estos pasos:

1. Seleccione la colección que desea editar. 
2. Haga clic en el botón `Configuración de la colección`.
3. Realice las alteraciones que desee.
4. Haga clic en `Guardar`.

## Status de la colección

Las colecciones pueden tener los siguientes status:

- **Activa**: una colección está activa cuando su fecha de inicio es anterior o igual a la fecha actual, y su fecha de finalización es posterior a la fecha actual.
- **Inactiva**: una colección está inactiva cuando su fecha de finalización es anterior a la fecha actual.
- **Programada**: una colección está programada cuando su fecha de inicio es posterior a la fecha actual.

