---
title: 'Configurar la integración de TikTok for Business en VTEX Admin'
id: 4AEUg7pEdX1beOaQhFf0wC
status: PUBLISHED
createdAt: 2022-04-14T21:22:01.564Z
updatedAt: 2024-09-03T19:34:18.900Z
publishedAt: 2024-09-03T19:34:18.900Z
firstPublishedAt: 2022-04-18T11:52:11.581Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-integration-with-tiktok-for-business-in-vtex-admin
locale: es
trackId: 1r0yJSO11nrer1YVu3WTFd
trackSlugEN: integracion-de-tiktok
---

Después de instalar la aplicación, debes configurarla en el Admin VTEX. Para ello, sigue los pasos que se describen en las próximas secciones de este artículo.

1. [Rellenar el formulario de configuración de la integración](#1-rellenar-el-formulario-de-configuracion-de-la-integracion).
2. [Conectar con la cuenta de TikTok](#2-conectar-con-la-cuenta-de-tiktok).
3. [Configurar TikTok for Business](#3-configurar-tiktok-for-business).

## 1. Rellenar el formulario de configuración de la integración

En primer lugar, debes introducir la información solicitada en el formulario de configuración de la integración con TikTok.

1. En el Admin VTEX, accede a **Marketplace > TikTok**. En algunas versiones del Admin VTEX, la página se encuentra en **Aplicaciones > Mis aplicaciones > TikTok**.
2. Rellena el formulario con la información descrita en las próximas secciones:
    * [Configuración de la integración del catálogo](#configuracion-de-la-integracion-del-catalogo).
    * [Datos de la empresa](#datos-de-la-empresa).
    * [Información de contacto](#informacion-de-contacto).
3. Haz clic en `Continuar`.
4. Comprueba la información mostrada antes de continuar.
5. Haz clic en `Confirmar`.
    Serás redirigido a una pantalla para [conectar con la cuenta de TikTok](#2-conectar-con-la-cuenta-de-tiktok).

### Configuración de la integración del catálogo

En esta parte del formulario, debes rellenar la información que servirá para integrar tu catálogo de productos en VTEX con TikTok.

* **ID del afiliado:** identificador del nuevo [afiliado](https://help.vtex.com/es/tutorial/que-es-afiliado--4bN3e1YarSEammk2yOeMc0) que deseas crear para la integración. El ID del afiliado debe contener solo 3 consonantes y no puede estar asociado a un afiliado existente. Sugerimos usar `TKT` para identificar fácilmente TikTok. Es importante que compruebes en **Gestión de pedidos > Configuración > Afiliados** que el ID no está en uso. El afiliado se creará automáticamente al finalizar la configuración. 
* **Política comercial:** campo para seleccionar la [política comercial](https://help.vtex.com/es/tutorial/como-funciona-una-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que se asociará a la integración del catálogo con TikTok. Actualmente, la integración solo acepta políticas comerciales con BRL como moneda. Consulta la sección [Envío de datos de productos a TikTok](#envio-de-datos-de-produtos-a-tiktok) para más información.

<div class="alert alert-warning">
  <p>No cambies la configuración del afiliado que se creó automáticamente durante la integración. Si, en el futuro, se introduce algún cambio manual en la configuración del afiliado en <strong>Gestión de pedidos > Configuración > Afiliados</strong>, la integración puede dejar de funcionar.</p>
</div>

### Datos de la empresa

En esta sección, debes introducir información sobre tu tienda, que se enviará a TikTok.

* **Nombre de la tienda:** nombre de la tienda tal y como se mostrará en TikTok.
* **Sitio web de la tienda:** la URL del sitio web de tu tienda que aparecerá en TikTok. No se puede modificar posteriormente.
* **Segmento:** campo para seleccionar el segmento en el que opera la tienda, entre las opciones que ofrece TikTok.
* **País:** país de operación de la tienda. Por el momento, la integración solo acepta países de América Latina.
* **Zona horaria:** zona horaria en la que se encuentra la tienda.

### Información de contacto

Aquí, debes introducir la información de contacto de la persona responsable de la integración para que TikTok pueda ponerse en contacto si es necesario.

* **Email:** email de la persona responsable de la integración. No necesariamente debe ser el email de tu cuenta en el Admin VTEX; puede ser cualquier email de contacto.
* **Código de país:** código telefónico correspondiente a la ubicación del número de teléfono del responsable.
* **Número de teléfono:** número de teléfono de la persona responsable de la tienda.

## 2. Conectar con la cuenta de TikTok

Después de rellenar el formulario de configuración de la integración, debes conectar tu cuenta de TikTok. Para ello, sigue las instrucciones a continuación:

1. En **Marketplace > TikTok** (o **Aplicaciones > Mis aplicaciones > TikTok** en algunas versiones del Admin VTEX), haz clic en `Connect Account`.
2. Esto abrirá una ventana de TikTok en la que tienes que iniciar sesión en tu cuenta de TikTok for Business.
3. Accede a la ventana abierta desde el paso anterior utilizando el email y la contraseña registrados en tu cuenta de TikTok.
    Se te dirigirá a la página __Set up TikTok For Business__ ([Configurar TikTok for Business](#3-configurar-tiktok-for-business)) mientras aún estás en el entorno de TikTok.

## 3. Configurar TikTok for Business

<div class="alert alert-warning">
  <p>Te recomendamos que desactives las extensiones que bloquean los anuncios en tu navegador para evitar errores en los pasos a continuación.</p>
</div>

En la página **Set up TikTok for Business** (Configurar TikTok for Business), que se muestra abajo, debes seguir las instrucciones de configuración que se describen a continuación.

![set-up-tiktok-for-business](//images.ctfassets.net/alneenqid6w5/77d9v0437SxRBVXD0OUmW/290a1ece93c0fcb0fe91a1da61352513/image2.png)

1. Haz clic en la sección **TikTok for Business Account** y verifica que tu cuenta esté en la lista.
    * Si quieres conectar otra cuenta, haz clic en `Disconnect` y repite el paso de inicio de sesión que se describe en [Conectar con la cuenta de TikTok](#2-conectar-con-la-cuenta-de-tiktok).
2. Haz clic en la sección **Business Center** para conectarte a una [cuenta del Centro de negocios](https://ads.tiktok.com/help/article?aid=925158121749954004).
3. En la sección **Business Center**, elige una de las siguientes opciones:
    * Para conectarte a un Centro de negocios existente: haz clic en `Connect`.
    * Para crear un nuevo Centro de negocios: escribe el nombre que desees para el nuevo Centro de negocios y haz clic en `Create New`.
4.  Haz clic en la sección **TikTok Ad Account** para conectar tu [cuenta de TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=9678), es decir, la cuenta que utilizas para crear publicidad en TikTok. 
5. En la sección **TikTok Ad Account**, elige una de las siguientes opciones:
    * Para conectarte a una cuenta publicitaria existente haz clic en `Connect`.
    * Para crear una nueva cuenta publicitaria: edita el nombre como desees de la nueva cuenta y haz clic en `Create New`.
6. Haz clic en la sección **Data Sharing** para crear un [píxel de TikTok](https://help.vtex.com/es/tracks/integracion-de-tiktok--1r0yJSO11nrer1YVu3WTFd/7Dwfwu1aHMp1aR1yvej5nv#tiktok-pixel).
7. En la sección **Data Sharing**, escribe el nombre que desees para el nuevo píxel y haz clic en `Create New`.
8. Todavía en **Data Sharing**, utiliza el botón &lt;i class="fas fa-toggle-on">&lt;/i> para activar o desactivar [Advanced Matching](https://ads.tiktok.com/help/article?aid=10007891). Esta función no está disponible para la integración de VTEX por el momento, por lo que aunque la habilites a través de este botón, no se aplicará.
9. Haz clic en la sección **Catalog** para integrar tu catálogo con TikTok. Consulta [Envío de datos de productos a TikTok](#envio-de-datos-de-productos-a-tiktok) para más información sobre este proceso.
10. En la sección **Catalog**, escribe el nombre que desees para el nuevo catálogo que se creará en [TikTok Catalog Manager](https://ads.tiktok.com/help/article?aid=10001005) y haz clic en `Create New`. Los productos asociados a la política comercial informada en el [formulario](#1-rellenar-el-formulario-de-configuracion-de-la-integracion) se añadirán a este catálogo en TikTok.
11. Haz clic en `Finish Setup`.

Una vez completada esta configuración, serás redirigido a **Marketplace > TikTok** en el Admin VTEX, donde podrás [gestionar la integración](https://help.vtex.com/es/tracks/integracion-de-tiktok--1r0yJSO11nrer1YVu3WTFd/24SfBYkRkKMaetgjLDKgaP). En algunas versiones del Admin VTEX, la página se encuentra en **Aplicaciones > Mis aplicaciones > TikTok.** Una vez que la configuración se completó con éxito, cualquier usuario conectado al Admin VTEX podrá acceder a esta área de gestión de TikTok. 

### Envío de datos de productos a TikTok

<div class="alert alert-warning">
  <p>TikTok solo sincroniza productos que se ajustan a las políticas publicitarias de la plataforma. Consulta las <a href="https://ads.tiktok.com/help/article?aid=9550">Políticas publicitarias de TikTok</a> para obtener más información.</p>
</div>

Una vez configurada la integración, el envío de productos a TikTok es un proceso automático. Los datos enviados son:

* Nombre del producto
* ID del SKU
* ID del producto
* Categoría
* Descripción
* Marca
* URL
* Condición
* Disponibilidad
* Precio (en BRL)
* Imágenes

Para que los productos se sincronicen, es necesario rellenar los campos con toda esta información. Las actualizaciones de los registros de productos realizadas en el entorno VTEX, mediante [API](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-overview) o en el [Admin](https://help.vtex.com/es/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL), se replican automáticamente en TikTok.
