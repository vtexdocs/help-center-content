---
title: 'Crear servicio para un SKU'
id: tutorials_252
status: PUBLISHED
createdAt: 2017-04-27T22:12:00.282Z
updatedAt: 2025-06-12T20:19:07.584Z
publishedAt: 2025-06-12T20:19:07.584Z
firstPublishedAt: 2017-04-27T23:03:11.914Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-service-for-a-sku
legacySlug: crear-servicio-para-un-sku
locale: es
subcategoryId: 1hoOi2R0Rm6ky0yCwOUoiy
---

El servicio de SKU es una funcionalidad de VTEX que te permite añadir un ítem, de forma opcional y con un coste, para acompañar a un producto. Para más información, lee nuestro artículo [¿Qué es un servicio?](/es/tutorial/que-es-un-servicio--46Ha8CEEQoC6Y40i6akG0y).

En este artículo trataremos los siguientes temas:

- [Crear un tipo de servicio](#crear-un-tipo-de-servicio)
  - [Campos del tipo de servicio](#campos-del-tipo-de-servicio)
- [Crear un valor de servicio y asociarlo a un tipo de servicio](#crear-un-valor-de-servicio-y-asociarlo-a-un-tipo-de-servicio)
  - [Campos del valor del servicio](#campos-del-valor-del-servicio)
- [Vincular un servicio a un SKU](#vincular-un-servicio-a-un-SKU)
  - [Campos de la plantilla](#campos-de-la-plantilla)

> ℹ️ Puedes configurar los servicios de SKU a través del **Catalog API** utilizando los endpoints de [SKU service](https://developers.vtex.com/docs/api-reference/catalog-api#post-/api/catalog/pvt/skuservicetype).

## Crear un tipo de servicio
Para registrar un tipo de servicio, sigue los pasos a continuación:

1. En el Admin VTEX, accede a **Catálogo > Campos personalizados**, o ingresa **Campos personalizados** en la barra de búsqueda de la parte superior de la página.
2. En la ventana pestaña **Tipos de servicio**, haz click en `Nuevo tipo de servicio de SKU`.
3. Rellena los [campos del tipo de servicio](#campos-del-tipo-de-servicio).
4. Haz clic en `Guardar`.

### Campos del tipo de servicio
En esta sección debes registrar un nombre para tu tipo de servicio y configurar su comportamiento de acuerdo con las opciones que se indican a continuación.

- **Nombre:** es el nombre del tipo de servicio.
- **Tarjeta de regalo:** opción para mostrar el tipo de servicio en la tarjeta de regalo.
- **Servicio obligatorio:** opción que hace que el tipo de servicio sea obligatorio.
- **Status:** opción que activa o desactiva el tipo de servicio.
- **Anexos:** selección de los anexos que se añadirán al tipo de servicio. El anexo se utiliza para añadir una información personalizada al servicio. Para saber más, lee nuestro artículo [¿Qué es un Anexo?](/es/tutorial/que-es-un-anexo--aGICk0RVbqKg6GYmQcWUm).

## Crear un valor de servicio y asociarlo a un tipo de servicio
Después de registrar el tipo de servicio, debes asignarle un valor. Para registrar el valor de un tipo de servicio, sigue los pasos a continuación:

1. Accede al módulo **Catálogo**.
2. Haz clic en **Adjuntos**.
3. Haz clic en la pestaña **Valores de servicio**.
4. Haz clic en `Nueva lista de valores`.
5. Rellena los [campos del valor del servicio](#campos-del-valor-del-servicio).
6. Haz clic en `Guardar`. Cuando hayas finalizado esta configuración, habrás creado un servicio.

### Campos del valor del servicio
En esta sección, debes registrar un nombre para el valor del servicio y asociarlo a un tipo de servicio.

- **Nombre:** es el nombre del valor del servicio.
- **Valor:** cuánto se cobrará al cliente por el servicio.
- **Costo:** es el costo del servicio para la tienda.
- **Tipo de servicio:** campo para vincular el valor del servicio al tipo de servicio.

## Vincular un servicio a un SKU
Después de crear el servicio, debes vincularlo a los SKU deseados. Puedes vincular un servicio a más de un SKU.

Para vincular un servicio a un SKU, sigue los pasos a continuación:

1. Accede al módulo **Catálogo**.
2. Haz clic en **Adjuntos**.
3. Haga clic en la pestaña **Vincular valores de servicio a SKU**.
4. Haz clic con el botón derecho del ratón en la categoría a la que deseas añadir el servicio. Selecciona siempre la categoría más interna del departamento deseado. Esto hará que los procesos de listado, exportación e importación sean más rápidos.
5. Haz clic en `Exportar`.
6. Guarda la plantilla en formato CSV que se exportará en su ordenador.
7. Rellena los [campos de la plantilla](#campos-de-la-plantilla). Mantén el formato CSV del archivo al guardar los cambios.
> ⚠️ El tamaño del archivo de la plantilla no debe superar los 4Mb (4096KB).
8. Haz clic en la barra que se encuentra junto al botón `Select`, que se muestra a continuación.
  ![Anexos - ES](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/catalogo/campos-personalizados/crear-servicio-para-un-sku_1.png)
9. Selecciona la plantilla CSV actualizada.
10. Haz clic en `Vincular valores de servicios a SKU` para finalizar.

### Campos de la plantilla
Maneja la plantilla con cuidado, comprobando siempre que la información está correctamente rellenada. Todos los campos de la plantilla deben rellenarse para evitar errores.

> ⚠️ Al rellenar la plantilla, no cambie ni elimine los títulos de las columnas en la línea 1. Rellene los valores deseados en las líneas posteriores a los títulos de las columnas para que la importación funcione correctamente.  

- **Nome Serviço:** es el nombre del servicio.
- **Texto Serviço:** es el texto que se mostrará junto con el servicio.
- **Id SKU:** es el número que identifica el SKU que se está asociando al servicio.
- **Nome SKU:** es el nombre del SKU que se está asociando al servicio.
- **Id Serviço Tipo:** es el número que identifica el tipo de servicio. Para saber cuál es el ID del tipo de servicio, consulta el campo **Id** en la pestaña **Tipos de servicio**.
- **Nome Serviço Tipo:** es el nombre del tipo de servicio.
- **Id Serviço Valor:** es el número que identifica el valor del servicio. Para saber cuál es el ID del valor del servicio, consulta el campo `IdSkuServicoValor` en la URL del valor del servicio deseado. En el ejemplo que se muestra a continuación, el ID del valor del servicio es 3:

  `https://{accountName}.myvtex.com/admin/Site/SkuServicoValorForm.aspx?IdSkuServicoValor=3`

- **Nome Serviço Valor:** es el nombre del valor del servicio.
- **Valor:** cuánto se cobrará al cliente por el servicio.
- **Custo:** es el costo del servicio para la tienda.
- **Ativo:** es el status del servicio. Introduce `1` para mantener el servicio activo y `0` para mantenerlo inactivo.

> ⚠️ Añadir una nueva plantilla no sustituirá los servicios ya vinculados al SKU. Para desvincular un servicio, utiliza el *endpoint* <a href ="https://developers.vtex.com/docs/api-reference/catalog-api#delete-/api/catalog/pvt/skuservice/-skuServiceId-">Dissociate SKU Service</a>.
