---
title: 'Amazon Listing'
id: 5HIhbnYzJWkl2yM0o72WrL
status: PUBLISHED
createdAt: 2025-01-31T15:04:46.985Z
updatedAt: 2025-03-19T14:41:51.711Z
publishedAt: 2025-03-19T14:41:51.711Z
firstPublishedAt: 2025-01-31T15:23:33.368Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amazon-listing
legacySlug: amazon-listing
locale: es
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

**Amazon Listing** es una funcionalidad que les permite a los sellers registrar productos a través de la interfaz del Admin VTEX y publicarlos como anuncios en Amazon. Después de completar la [integración con Amazon](https://help.vtex.com/es/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan), debes disponibilizar los productos de tu tienda para anunciarlos en el marketplace. Hay dos maneras de configurar la disponibilidad:

- Si el producto ya existe en Amazon, debes seguir las instrucciones del [tutorial Match de anuncios Amazon](https://help.vtex.com/es/tutorial/match-de-anuncios-amazon--7fRfoP69kYgg8znImMhyQ0) para vincular tu producto a un anuncio en Amazon.  
- Si el producto no existe en Amazon, debes seguir las instrucciones de este tutorial para registrar tu producto y crear un nuevo anuncio en Amazon.  

![overview-listing-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/amazon-listing_1.gif)

> ℹ️ Todos los productos deben tener [stock](https://help.vtex.com/es/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) y [precio](https://help.vtex.com/es/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) configurados antes de enviarlos al marketplace.

## Información general de la página

Para acceder a Amazon Listing, haz clic en **Marketplace > Conexiones > Amazon Listing** o ingresa **Amazon Listing**  en la barra de búsqueda del Admin VTEX.

La página contiene los siguientes elementos:

- [Barra de búsqueda](#barra-de-busqueda)  
- [Filtros](#filtros)  
- [Lista de SKUs](#lista-de-skus)  

### Barra de búsqueda

La barra de búsqueda te permite buscar SKUs por **nombre o por ID de SKU. A continuación se presentan ejemplos.

![Filtro por nombre listing](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/amazon-listing_2.jpg)
![SKU busquéda listing](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/integraciones/configuraci%C3%B3n-de-las-integraciones/amazon-listing_3.jpg)

### Filtros

Puedes filtrar SKUs por **Categoría VTEX, Categoría Amazon, Marca** o **Status**, ya sea utilizando filtros individuales o combinándolos.

#### Tipos de filtro

- **Categoría VTEX:** muestra como opciones las categorías de los SKUs en el catálogo VTEX.
- **Categoría Amazon:** muestra como opciones las categorías de los SKUs en Amazon.
- **Marca:** muestra todas las marcas registradas en el catálogo del seller.
- **Status:** muestra los status de los SKUs en la lista de productos disponibles en Amazon Listing; cada SKU muestra un status. Los diferentes status se describen a continuación: 
  - **Listo para editar:** indica que el SKU está disponible para que se le asignen atributos y se envíe a Amazon.
  - **Registro incompleto:** indica que VTEX completó parcialmente los atributos del SKU.
  - **Devuelto con error:** indica que el SKU se envió a Amazon, pero con información incorrecta. En estos casos, Amazon devuelve el SKU con error para corrección y reenvío.
  - **Enviado:** indica que el SKU fue completado correctamente y enviado a Amazon.  
  - **Publicado:** indica que el SKU fue enviado y aceptado por Amazon y está disponible en el marketplace.  

### Lista de SKUs

**Amazon Listing** muestra una lista de los SKUs de tu catálogo en VTEX que están disponibles para integrarlos con Amazon. Cada SKU de la lista incluye la siguiente información: **nombre del SKU, ID de SKU, categoría de Amazon** y **status**.

## Registrar SKUs

Los SKUs solo se pueden registrar a través de **Amazon Listing**.Los productos mostrados en esta página se registran manual e individualmente o utilizando [plantillas](#plantilla-de-registro) creadas por ti.

Los SKUs que tienen atributos previamente mapeados se muestran con el status **Registro incompleto** en la lista.  
A continuación se detalla el proceso de registro con Amazon Listing.

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Amazon Listing** o ingresa **Amazon Listing** en la barra de búsqueda.  
2. Selecciona el SKU que deseas registrar.  
3. Rellena los campos **Título, Descripción, Palabras clave** y **Categoría**.  
4. Haz clic en el botón `Guardar y enviar` para validar el registro y enviar el SKU a Amazon o haz clic en el botón `Finalizar después` para guardar los datos completados y finalizar el registro después.  

Al finalizar el registro y enviar, el SKU pasa a una cola de procesamiento. Su status cambia a **Enviado** hasta que Amazon lo apruebe o lo rechace. Si Amazon lo acepta, el status del SKU cambia a **Publicado**; y si lo rechaza, el status cambia a **Devuelto con error** para que lo corrijas.

## Plantilla de registro de productos

Para optimizar el registro, puedes crear plantillas que apliquen los valores de los atributos seleccionados a todos los SKUs de una misma categoría de Amazon. A continuación se describen los pasos para crear y gestionar plantillas.

### Crear plantillas

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Amazon Listing**, o ingresa **Amazon Listing** en la barra de búsqueda.  
2. Haz clic en un producto que tenga el status **Enviado** o **Publicado**.  
3. Haz clic en el botón `Crear plantilla`. Esto mostrará una ventana modal en la pantalla.  
4. Selecciona los atributos de esta categoría que deseas aplicar a otros SKUs de la misma categoría.  
5. Haz clic en el botón `Confirmar`.  

### Gestionar plantillas

En la página Gestionar plantillas puedes filtrar las plantillas por categoría de Amazon y eliminar o editar una plantilla.

#### Editar plantillas

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Amazon Listing**, o ingresa **Amazon Listing** en la barra de búsqueda.  
2. Haz clic en el botón `Gestionar plantillas`.  
3. Selecciona la plantilla que deseas editar.  
4. Haz los cambios necesarios.  
5. Haz clic en el botón `Guardar` para guardar los cambios o en `Descartar` para eliminarlos.  

Al editar una plantilla puedes agregar nuevos atributos o eliminar atributos existentes. Para editar, sigue los pasos a continuación:

1. En la sección **Atributos**, haz clic en el botón <i class="fas fa-pencil-alt" aria-hidden="true"></i>.  
2. Marca la casilla de los atributos que deseas incluir o remover.  
3. Haz clic en el botón `Confirmar`.  

Cuando editas una plantilla, se muestra la opción de ver los cambios en el pie de página.

> ℹ️ Todos los cambios realizados en la plantilla, se reflejarán en los SKUs de la categoría que aún no se hayan enviado.

#### Eliminar plantillas

1. En el Admin VTEX, accede a **Marketplace > Conexiones > Amazon Listing** o ingresa **Amazon Listing** en la barra de búsqueda.  
2. Haz clic en el botón `Gestionar plantillas`.    
3. En la plantilla que desea eliminar, haz clic en el botón de <i class="far fa-trash-alt" aria-hidden="true"></i> `papelera`.  
4. En la ventana modal que se abre, haz clic en el botón `Finalizar`.  
