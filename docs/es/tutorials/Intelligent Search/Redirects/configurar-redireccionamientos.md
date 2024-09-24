---
title: 'Configurar redireccionamientos'
id: 35JPufOvunMHnAAVJA6azu
status: PUBLISHED
createdAt: 2024-06-27T17:05:37.927Z
updatedAt: 2024-09-20T12:54:35.729Z
publishedAt: 2024-09-20T12:54:35.729Z
firstPublishedAt: 2024-06-27T17:06:40.835Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: configuring-redirects
locale: es
legacySlug: configurar-redireccionamientos
subcategoryId: 1wvyJwJhKgewxGeAGCVmM6
---

Para configurar un [redireccionamiento](https://help.vtex.com/es/tutorial/redireccionamentos--3okF84cImJwKzcc8hxmZ2r) en Intelligent Search, es necesario seguir los siguientes pasos:

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront** en la barra de búsqueda en la parte superior de la página.
2. En **Intelligent Search**, haz clic en **Redireccionamientos**.
3. Haz clic en el botón <i class="fas fa-plus"></i> `Agregar`.
4. Rellena los campos relativos a las [informaciones generales](#informaciones-generales) del redireccionamiento que se detallarán en la sección siguiente.
5. Haz clic en <i class="fa-solid fa-plus"></i> `Agregar condición`.
6. Rellena los campos para las [reglas de activación](#reglas-de-activacion).
7. Para terminar, haz clic en `Aplicar`.

Debes rellenar los siguientes campos:

![redirecionamentos-adminv4-ES](//images.ctfassets.net/alneenqid6w5/69CWrwXk38Qxwb9fNNzYyc/41f7ae70f06576fe650bb84d379f5288/image.png)

### Informaciones generales

Esta sección proporciona las siguientes informaciones generales sobre el redireccionamiento:

- **Nombre**: nombre del conjunto de reglas del redireccionamiento creado.
- **URL de redireccionamiento**: URL de destino al cual el cliente será dirigido. Debe ser registrado de forma absoluta - dirección completa - y no relativa. Ejemplo: `https://www.tienda.com/_secure/account/#/orders` en vez de `_secure/account/#/orders`.
- **Idiomas:** idiomas en los que se aplicará el redireccionamiento. Campo solo disponible para tiendas que utilizan [configuración multidioma (beta)](https://help.vtex.com/es/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).

### Reglas de activación

Conjunto de condiciones de términos o filtros que se aplicarán en cada búsqueda realizada. Es necesario que se registre por lo menos una condición, ya sea por término o por filtro

Selecciona el tipo de alcance de las reglas, ya sea por término o por filtro.

- **Término**: palabra buscada por el cliente que estará relacionada con la regla. El término presenta dos opciones:
    - `es`: necesita ser una búsqueda con palabras exactas. Ejemplo: si registras “Black Friday” y el cliente busca “Black Friday”, se activará el redireccionamiento. Si el cliente busca “promoción Black Friday”, no se activará.
    - `contiene`: no tiene que ser una búsqueda con palabras exactas. Ejemplo: si registras “Black Friday” y el cliente busca “Black Friday”, se activará el redireccionamiento. Si el cliente busca “promoción Black Friday”, también se activará.
- **Filtro**: atributo de búsqueda ya definido que restringe los resultados de la búsqueda. Con solo seleccionar el filtro ya registrado se activa el redireccionamiento creado. El filtro presenta dos opciones:
    - `es`: esta opción permite que no se seleccione solamente el filtro de la regla. Ejemplo: si la regla es ``es``: Filtro _marca_, valor Nike, incluso si el cliente ha seleccionado Adidas, el redireccionamiento se activará.
    - `solo`: esta opción permite seleccionar solamente el filtro registrado. Ejemplo: si la regla es ``solo``: Filtro _marca_, valor Nike, si el cliente ya ha seleccionado Adidas, no se activará el redireccionamiento. Solo funcionaría si el primer filtro de marca fuera Nike.

Si quieres crear más de una regla, debes añadir una condición de interacción entre las reglas. Estas pueden ser:

- `o`: cualquiera de las reglas registradas activa el redireccionamiento.
- `y`: todas las reglas deben cumplirse conjuntamente para activar el redireccionamiento.

Al hacer clic en <i class="fas fa-ellipsis-v"></i>, tendrás las siguientes opciones:

- <i class="fas fa-clone"></i> **Duplicar**: crea una copia de la regla seleccionada.
- <i class="far fa-trash-alt"></i> **Eliminar**: elimina la regla seleccionada.

Para borrar todas las reglas configuradas, haz clic en "Borrar reglas".

### Importar CSV

Si hay que registrar muchos redireccionamientos, puedes crear un archivo .csv y luego importarlo en el Admin. El archivo debe seguir el siguiente formato para cada uno de los redireccionamientos creados: `<Nombre>;<URL>;<Tipo>;<Activo>;<Tema>;<Verbo>;<Valor>`.

- **Nombre**: define el título del redireccionamiento. Los valores posibles son `término` o `filtro`.
- **URL:** URL del redireccionamiento.
- **Tipo:**  regla de activación. Los valores posibles son `y` u `o`.
- **Activo:** condición de activación del redireccionamiento. Los valores posibles son `true` o `false`.
- **Tema:** atributo de búsqueda. Los valores posibles son `term` para el redireccionamiento de términos o `brand`, `category`, `department`, `sellername` y `subcategory` para el redireccionamiento de filtros.
- **Verbo:** opción de inclusión del **Tema**. Los valores posibles son `es` o `contiene`.
- **Valor:** valor del término o del filtro.

Para importar el archivo, siga las instrucciones a continuación.

1. En el Admin VTEX, accede a **Storefront**, o escribe **Storefront** en la barra de búsqueda en la parte superior de la página.
2. En **Intelligent Search**, haz clic en **Redireccionamientos**.
3. Haz clic en el botón <i class="fas fa-plus"></i> `Importar CSV`.
