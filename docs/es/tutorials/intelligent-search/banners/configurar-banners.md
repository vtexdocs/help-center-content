---
title: 'Configurar Banners'
id: 3AdnZhxAhgmlxJjpa02Svc
status: PUBLISHED
createdAt: 2024-06-27T16:32:24.435Z
updatedAt: 2024-06-27T16:33:49.674Z
publishedAt: 2024-06-27T16:33:49.674Z
firstPublishedAt: 2024-06-27T16:33:39.573Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-banners
legacySlug: configurar-banners
locale: es
subcategoryId: z6qcw06Z38YDu1fOcu9Jn
---

Para configurar un banner, sigue estos pasos:

1. En el Admin VTEX, accede a **Storefront** 
2. Haz clic en **Banners**.
3. Haz clic en <i class="fas fa-plus"></i> `Nuevo`.
4. Rellena los [campos relativos al banner](#campos-de-registro-del-banner).
5. Para terminar, haz clic en `Guardar`.

Después de configurar el banner, debes agregarlo a una página de tu tienda. Para ello, sigue los pasos del artículo [Banner](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-banner).

> ℹ️  Esta funcionalidad está disponible en VTEX Intelligent Search Multidioma. Lea nuestro artículo [VTEX Intelligent Search: configuración Multidioma (Beta)](/es/tutorial/vtex-intelligent-search-configuracion-multidioma-beta--2WahlTESLXIJ9XBdQMdTYO#banners)para saber más.

![banner-form-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/intelligent-search/banners/configurar-banners_1.png)

## Campos de registro del banner

Para registrar el banner, debes rellenar los siguientes campos:

### Información general

  * **Nombre:** nombre del banner registrado.
  * **Posición:** zona en la que aparecerá el banner en la página de resultados de la búsqueda. Los banners se pueden colocar en cuatro zonas distintas de la página web. La disposición depende del administrador de la tienda y será determinada por la opción seleccionada en este campo o definida a través de los blocks en store-theme.

### Tipo

* **Tipo de banner:** contenido del banner que se creará. El banner puede ser un HTML o una URL de imagen:
  * **HTML:** el administrador puede agregar medios, vídeos de YouTube, imágenes o líneas de código, como JavaScript, en el campo HTML.
  * **Imagen:** el sistema pide la URL de la imagen que se utilizará y el link de destino del banner.
    * URL de la imagen
    * Link de destino
* **Zona horaria:** zona horaria para las horas configuradas en el banner.
* **Fecha de inicio:** fecha en la que el banner comenzará a estar disponible.
* **Hora de inicio:** hora en la que el banner comenzará a estar disponible.
* **Fecha de fin:** fecha en la que el banner dejará de estar disponible. Esto permite al administrador programar futuras campañas, lo que facilita su control.
* **Hora de fin:** hora en la que el banner dejará de estar disponible.
* **Idiomas:** idiomas en los que se aplicará el banner. Campo solo disponible para tiendas que utilizan [configuración multidioma (beta)](/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).

### Reglas de activación

**Reglas de activación** son un conjunto de condiciones de términos o filtros que se aplicarán a cada búsqueda realizada. Es necesario tener al menos una condición registrada, ya sea por término o por filtro.

Haz clic en <i class="fa-solid fa-link"></i> `Autocompletar desde URL` para agregar la URL de la página de búsqueda donde se aplicarán las reglas de activación.

![banner-url-es](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tutorials/intelligent-search/banners/configurar-banners_2.png)

Haz clic en <i class="fas fa-plus"></i> `Agregar condición` para crear una regla. Pueden ser de los siguientes tipos:

* **Término:** palabra buscada por el cliente que estará relacionada con la regla.
* **Filtro:** atributo seleccionable ya definido que restringe los resultados de la búsqueda. Puedes seleccionar categorías, departamentos y subcategorías.

Haz clic en `Limpiar reglas` para borrar todas las reglas registradas.
