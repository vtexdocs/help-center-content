---
title: 'Configurar automatización de email de producto visitado'
id: tutorials_3136
status: PUBLISHED
createdAt: 2017-04-27T21:52:11.184Z
updatedAt: 2024-08-20T17:44:37.317Z
publishedAt: 2024-08-20T17:44:37.317Z
firstPublishedAt: 2017-04-27T23:03:54.918Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slug: configurar-automatizacion-de-email-de-producto-visitado
locale: es
legacySlug: configurar-producto-visitado
subcategory: 2nx7hMJmisofwqwy2P9l2i
---

<div class="alert alert-warning">
  <p>Tutorial válido únicamente para tiendas CMS Portal Legado.</p>
</div>

El email de producto visitado es un mensaje automático que se envía a los clientes que han visitado la página de un producto en el sitio web, pero no finalizaron la compra. El propósito de este email es recuperar la venta y ofrecer otros productos.

Puedes configurarlo vía Master Data siguiendo las instrucciones de las secciones a continuación:

1. [Definir un intervalo mínimo de envío](#heading=h.30j0zll)
2. [Mostrar campos en el formulario](#heading=h.1fob9te)
3. [Crear plantilla de email de producto visitado](#heading=h.3znysh7)
4. [Crear estructura de carpetas](#heading=h.tyjcwt)
5. [Configurar trigger de envío de email](#heading=h.3dy6vkm)

<div class="alert alert-warning">
  <p>Para que este recurso funcione adecuadamente es necesario que tu tienda tenga un alto flujo de visitas y compras, ya que la estantería de productos se genera utilizando datos de navegación relacionados con un producto específico.</p>
</div>

## Definir un intervalo mínimo de envío

Establecer un intervalo de activación del envío significa limitar el tiempo mínimo de espera entre el envío de un email y otro para un mismo cliente. Esto evita que el cliente reciba varios emails durante la misma sesión de navegación en la tienda.

Para configurar este intervalo, es necesario crear un campo en la entidad **CL.**

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En Master Data, haz clic en **Aplicaciones** > **Estructura de datos**.
3. Accede a la pestaña **Entidades de datos**.
4. En la entidad **Cliente**, haz clic en el ícono del lápiz.
5. Haz clic en el botón `Nuevo campo`.
6. Rellena los campos según se describe a continuación:
    * **Nombre**: lastTrigger
    * **Nombre para mostrar**: fecha del último trigger enviado
    * **Tipo**: Fecha y hora
7. Haz clic en el botón `Guardar`.

## Mostrar campos en el formulario

Después de crear un campo en la entidad, es necesario configurar su visualización en el formulario para poder consultar los datos registrados. Esto también es válido para campos creados automáticamente por VTEX que no se marcaron para mostrarse en el formulario.

Sigue los pasos a continuación para que se muestren los campos importantes en el contexto del producto visitado:

1. En el Admin VTEX, accede a **Configuración de la tienda** > **Storefront** > **Master Data**.
2. En la aplicación **Profile System**, haz clic en el ícono de engranaje <i class="fas fa-cog"></i>.
3. Haz clic en el ícono de lápiz <i class="fas fa-pencil-alt"></i> sobre el formulario **Cliente**.
4. Haz clic en la pestaña **Esquemas de layout**.
5. Haz clic en el botón `Agregar nueva sección`.
6. Asigna un nombre a esta sección.
7. En la columna **Campos disponibles**, arrastra el campo deseado al área **Campos de la columna 1**, ubicada debajo del nombre de la sección creada.
8. Haz clic en el botón `Guardar`.

## Crear plantilla de email de producto visitado

La plantilla de email que se enviará debe configurarse en el Portal CMS Legado, siguiendo los pasos a continuación. Para ayudarte con la configuración, puedes utilizar la [plantilla de ejemplo](//assets.ctfassets.net/alneenqid6w5/6TloqmkC76AAauQ4e4SWmA/d4c3b11034a436668e150f5dc3f6fce4/product-visited-es.zip).

1. En el Admin, accede a **Storefront > Layout**.
2. Haz clic en la carpeta CMS y a continuación en **HTML Templates**.
3. Haz clic en **new template**.
4. Rellena el nombre y pega el código de tu plantilla. Si estás utilizando la plantilla de ejemplo, recuerda cambiar el código PLANTILLA_ESTANTERÍA_DE_PRODUCTOS por el ID de tu plantilla de la estantería de productos y el código NOMBRE_DE_LA_TIENDA por la URL de tu tienda. También es necesario cambiar los archivos de imagen.
5. Haz clic en el botón `Save template`.

### Productos enviados

El control encargado de mostrar el producto visitado es `ProductQueryStringReferenceShelf` y el control que mostrará estanterías de productos similares es `<vtex.cmc:productsCrossSelling … crossSellingType="1" />`. El parámetro `crossSellingType` puede variar de 1 y 6, y se compone de:

* **1**: Quien vio este producto, también vio:
* **2**: Quien vio este producto, también compró:
* **3**: Quien compró, también compró:
* **4**: Productos similares
* **5**: Sugerencias
* **6**: Accesorios

Las tres primeras estanterías las compone automáticamente el sistema y las tres últimas se configuran [manualmente en el registro de productos](https://help.vtex.com/es/tutorial/configurando-produto-similar-sugestoes-acessorios-e-genericos/).

## Crear la estructura de carpetas

Tras crear la plantilla, deberás crear la estructura de carpetas necesaria para configurar el trigger. Sigue los pasos que se indican a continuación:

1. En el Admin, accede a **Storefront > Layout**.
2. Haz clic en **CMS** > **Sites and channels**.
3. Haz clic en tu tienda.
4. Haz clic en la carpeta / y luego en la carpeta **CEM**.
5. Haz clic en **new folder**.
6. Rellena los campos como se muestra a continuación:
    * **Folder Name**: Producto-visitado
    * **Protocol**: HTTPS
    * **Authentication Required?**: mantener desmarcado.
7. Haz clic en el botón `Save Folder`.
8. Una vez creada la carpeta, debes asociar la plantilla de la página al layout de la página. Haz clic en la carpeta recién creada en el menú de la izquierda del CMS Portal Legado.
9. Haz clic en **new layout**.
10. En **Template**, selecciona la plantilla creada anteriormente.
11. Haz clic en el botón `Save Layout`.

## Configurar trigger de envío de email

Para configurar el trigger, sigue los pasos a continuación:

1. Accede a `{nombredelatienda}.ds.vtexcrm.com.br`, sustituyendo `{nombredelatienda}` por el nombre de tu cuenta VTEX.
2. Inicia sesión.
3. Haz clic en la pestaña **Trigger**.
4. Haz clic en el botón `Agregar`.
5. Rellena los campos:
    * **Nombre:** ingresa el nombre del trigger.
    * **Entidad de datos:** selecciona la entidad de datos a la que el trigger pertenece.
    * **Status:** marca la opción **Activado**.
6. En la pestaña **Reglas**, en el campo **Regla de activación**, selecciona **Se modifica el valor de un atributo**.
7. En **Campo**, selecciona** Producto visitado**.
8. En **Filtro adicional**, haz clic en `Agregar filtro`. Configura dos filtros como se indica a continuación:
    * _Checkout – Es nulo – y_
    * _Producto visitado - No es nulo - y_
9. Haz clic en el botón `Agregar grupo`.
10. Haz clic en `Agregar filtro` para añadir un filtro al grupo. Rellena como se indica a continuación:
    * _Fecha del último trigger enviado – Igual o menor que – FECHA ACTUAL – Restar días – 7 – o_
    * _Fecha del último trigger enviado - Es nulo_
11. Haz clic en la pestaña **Programar**.
12. Selecciona una de las opciones para programar el trigger. Ejemplo: programar en una fecha dinámica, como _FECHA DE HOY  – más – 2 horas_.
13. Haz clic en la pestaña** Si es positivo**.
14. Rellena los campos como se indica a continuación:
    * **Acción**: seleccionar **Send an email**.
    * **Destinatario**: como prueba, ingresa tu dirección de email y haz clic en `Agregar email estático`. Una vez que lo hayas probado, elimina tu email, selecciona **CL: Email** y haz clic en `Agregar email dinámico`.
    * **Formato del cuerpo de email**: selecciona **HTML**.
    * **Nombre del remitente**: ingresa el nombre de tu tienda tal y como deseas que aparezca en el remitente del email.
    * **Responder a**: rellena la dirección de email a la que el cliente puede enviar una respuesta.
    * **Tipo de contenido**: selecciona **Contenido de la URL**.
    * **Asunto**: rellena el asunto del email.
    * **URL**: introduce la dirección de tu tienda con las carpetas en las que se configuró el layout del producto visitado. Ejemplo: `nombredelatienda.com.br/CEM/Producto-Visitado?refp={!productVisitedTag}`. Presta atención a `?refp={!productVisitedTag}`; tiene que estar al final de la URL para que se muestren los productos.
    * **Agregar utm_source a todos los links con este valor**: rellena "CEM", para facilitar la identificación de las compras derivadas del producto visitado.
    * **Sobrescribir utm_source:** marca esta opción.
15. Haz clic en el botón `Guardar`.

