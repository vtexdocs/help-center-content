---
title: 'Ingresar y configurar placeholders'
id: mWRZsbb2vbSxFQxeSmpLb
status: ARCHIVED
createdAt: 2020-01-09T15:09:14.661Z
updatedAt: 2022-01-10T22:33:37.755Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:29:41.300Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: inserting-and-configuring-placeholders
locale: es
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugES: cms
---

Los placeholders permiten a la tienda ingresar cuatro tipos de elementos en la página:
- Banner
- Banner DHTML
- Colección
- HTML

En la práctica, un placeholder es un fragmento de código configurable, que responde a las condiciones definidas por la tienda.

Por ejemplo, puede ingresar un placeholder en el homepage y definirlo como un banner, y luego elegir tres imágenes diferentes para este banner, cada una activada en un rango de fechas específico.

### Ingresando el placeholder en el template

Antes que nada, para crear un nuevo placeholder, debe ingresar el control que lo definirá en el template.

Este es el control de placeholders: `<vtex:contentPlaceHolder id="" />`

Lo que hace es crear un elemento configurable en el lugar del código donde se ingresa.

Es importante ingresar un valor de `id`. Este será el identificador para este placeholder en el sistema.

![6 1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/ingresar-y-configurar-placeholders_1.png)

### Configurando el placeholder

Ahora que el control de placeholder se ha ingresado en el template, vamos a configurarlo.

Esto se hace en las configuraciones del layout que utiliza este template.

1. Abra el layout y luego haga clic en la pestaña **Settings**. El nuevo placeholder debería aparecer allí, con el nombre igual al valor del id  definido en el control. Por ahora, este placeholder está vacío; es decir, no hay ningún objeto dentro de este.![6 2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/ingresar-y-configurar-placeholders_2.png)
2. Para ingresar un objeto, haga clic en **add object**. 
3. A continuación, seleccione el tipo de objeto y haga clic en **Añadir**.
4. Finalmente, haga clic en el botón  **Save Settings**, en la parte superior de la página.

Ahora puede editar el objeto que ha ingresado en el placeholder.

Para esto, haga clic en el lápiz que se encuentra dentro del objeto y, a continuación, haga clic en **add content**.

![6 3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/es/tracks/cms/ingresar-y-configurar-placeholders_3.png)

Ahora puede definir el nombre de este objeto, subir imágenes y configurar las condiciones en las que se renderizará, tales como el período. 

Al final, haga clic en __Add Content List__ y luego guarde el contenido.

