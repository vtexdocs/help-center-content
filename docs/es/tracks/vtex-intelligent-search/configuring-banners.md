---
title: 'Configurar Banners'
id: 4ViKEivLJtJsvpaW0aqIQ5
status: ARCHIVED
createdAt: 2019-11-27T16:34:24.404Z
updatedAt: 2024-09-06T20:14:05.608Z
publishedAt: 
firstPublishedAt: 2020-03-05T19:58:30.009Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: configurar-banners
locale: es
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugES: vtex-intelligent-search
---

Para configurar un banner, sigue estos pasos:

1. En el Admin VTEX, accede a **Storefront** 
2. Haz clic en **Banners**.
3. Haz clic en <i class="fas fa-plus"></i> `Nuevo`.
4. Rellena los [campos relativos al banner](#campos-de-registro-del-banner).
5. Para terminar, haz clic en `Guardar`.

Después de configurar el banner, debes agregarlo a una página de tu tienda. Para ello, sigue los pasos del artículo [Banner](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-banner).

>ℹ️ Esta funcionalidad está disponible en VTEX Intelligent Search Multidioma. Lea nuestro artículo [VTEX Intelligent Search: configuración Multidioma (Beta)](https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracion-multidioma-beta--2WahlTESLXIJ9XBdQMdTYO#banners)para saber más.

![banner-form-es](//images.ctfassets.net/alneenqid6w5/4eY6elSTbPcVvjQHuxOhdu/ae3e6e5ffd311ad1c25e3cd7104bc874/image.png)

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
* **Idiomas:** idiomas en los que se aplicará el banner. Campo solo disponible para tiendas que utilizan [configuración multidioma (beta)](https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).

### Reglas de activación

**Reglas de activación** son un conjunto de condiciones de términos o filtros que se aplicarán a cada búsqueda realizada. Es necesario tener al menos una condición registrada, ya sea por término o por filtro.

Haz clic en <i class="fa-solid fa-link"></i> `Autocompletar desde URL` para agregar la URL de la página de búsqueda donde se aplicarán las reglas de activación.

![banner-url-es](//images.ctfassets.net/alneenqid6w5/2ldGnmahkPao4EbISls3gu/c7c8d7edfb83b4bb4f1e829b4aa50dc9/image.png)

Haz clic en <i class="fas fa-plus"></i> `Agregar condición` para crear una regla. Pueden ser de los siguientes tipos:

* **Término:** palabra buscada por el cliente que estará relacionada con la regla.
* **Filtro:** atributo seleccionable ya definido que restringe los resultados de la búsqueda. Puedes seleccionar categorías, departamentos y subcategorías.

Haz clic en `Limpiar reglas` para borrar todas las reglas registradas.
