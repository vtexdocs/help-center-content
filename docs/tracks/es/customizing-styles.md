---
title: 'Personalizando estilos'
id: 6L2qQHU5kwbmTSiYl4MCuD
status: DRAFT
createdAt: 2019-02-19T20:13:21.210Z
updatedAt: 2020-03-13T21:24:45.687Z
publishedAt: 
firstPublishedAt: 2019-02-19T20:13:24.873Z
contentType: trackArticle
productTeam: VTEX IO
slug: personalizando-estilos
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugES: crear-una-tienda-utilizando-vtex-io
---

Ahora que sabemos cómo cambiar la estructura de nuestra tienda, necesitamos cambiar la apariencia de ella. Afortunadamente, esto es fácil porque todos los componentes de la tienda se implementan utilizando el [VTEX Styleguide](https://styleguide.vtex.com/), que se basa en una estructura CSS altamente configurable, [VTEX Tachyons](https://github.com/vtex/vtex-tachyons).

Puede personalizar [todos los estilos](https://styleguide.vtex.com/#/Styles) de estos componentes estableciendo un [archivo JSON](https://github.com/vtex-apps/store-theme/blob/master/styles/configs/style.json) en la carpeta `styles/configs`. Esto significa que cada componente de la tienda mostrará su apariencia y comportamiento definidos automáticamente, sin necesidad de declarar CSS manualmente para cada uno de ellos.

Vamos a hacer algunos cambios en nuestro archivo `style.json`. Podemos cambiar un poco los colores, sustituyendo los valores de los hijos de `semanticColors`:

```json
// style.json
"semanticColors": {
   "background": {
     "base": "#232323",
     "base--inverted": "#f9f9f9",
     "action-primary": "#00a533",
     "action-secondary": "#eef3f7",
     "emphasis": "#f71963",
     "disabled": "#f2f4f5",
     "success": "#8bc34a",
     "success--faded": "#eafce3",
     "danger": "#ff4c4c",
     "danger--faded": "#ffe6e6",
     "warning": "#ffb100",
     "warning--faded": "#fff6e0",
     "muted-1": "#dc42dc",
     "muted-2": "#c031c0",
     "muted-3": "#9e2b9e",
     "muted-4": "#772277",
     "muted-5": "#4e184e"
   },
  (...) // sustituir todos los demás hijos también!
}
```

Ahora, vamos a ver los resultados al "linkar" nuestra aplicación:

![style-json](//images.ctfassets.net/alneenqid6w5/1S0DU3mL8MxRVleCmUGGol/3594be77ecae98c6c223e04191f95def/style-json.svg)

Muy bien! Ahora usted sabe cómo personalizar los estilos de su tienda.

## Estilos avanzados con sustituciones de CSS

El builder de estilos nos permite personalizar los aspectos más amplios de apariencia. Sin embargo, a veces necesitamos cambiar el estilo de un componente más profundamente utilizando CSS personalizado.

Esto puede hacerse a través de __substituciones de CSS__, que permiten segmentar componentes específicos de la aplicación que desea estilizar sin necesidad de recurrir al CSS global (lo que aumentaría mucho los riesgos de efectos colaterales no deseados).

Usted declara las sustituciones de CSS creando una __stylesheet con el nombre de la aplicación que usted substituirá en la carpeta styles__ y dependiendo de esa aplicación en su manifiest. En el archivo CSS, es posible segmentar todas las clases utilizadas por el componente.

Por ejemplo, vamos a personalizar la forma en que se renderiza el menú.

Abra /manifest.json y agregue `vtex.category-menu: x.x` a su lista de dependencias.

```json
//style.json

 "dependencies": {
   "vtex.store": "2.x.",
   "vtex.store-header": "2.x",
   "vtex.store-footer": "2.x",
   "vtex.carousel": "2.x",
   "vtex.shelf": "1.x",
   "vtex.product-details": "1.x",
   "vtex.product-kit": "1.x",
   "vtex.search-result": "3.x",
   "vtex.login": "2.x",
   "vtex.my-account": "1.x",
   "vtex.category-menu": "2.x"
 }
```

Ahora vamos a la carpeta `/styles` y creamos una carpeta dentro de ella llamada `css`. Cree un archivo css llamado `vtex.category-menu.css`.

El resultado final debe quedar así: `/styles/css/vtex.category-menu.css`

Vamos a escribir un poco de CSS, para añadir una línea roja sólida:

```css

.container {
  border-bottom: 20px solid red;
  background: #efd9d2;
}

```
Nuestro nuevo menú de categoría tendrá ahora una línea roja sólida a lo largo de la parte inferior del menú.

![red-line](//images.ctfassets.net/alneenqid6w5/2zVZNpUFepCptn5Zuo3YNa/1d939c7f78544c6b716bfc57db774b79/red-line.svg)
