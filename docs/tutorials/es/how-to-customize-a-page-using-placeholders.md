---
title: 'Personalizar una página usando placeholder'
id: tutorials_544
status: PUBLISHED
createdAt: 2017-04-27T22:01:48.368Z
updatedAt: 2020-01-29T19:45:53.363Z
publishedAt: 2020-01-29T19:45:53.363Z
firstPublishedAt: 2017-04-27T23:03:37.686Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-personalizar-una-pagina-usando-placeholder
locale: es
legacySlug: como-personalizar-una-pagina-usando-placeholder
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Crear una descripción para **Categoria** puede ser una influencia positiva en el SEO del sitio. Es muy interesante mantener todo el sitio bien mapeado para aumentar la relevancia de los términos citados en textos como descripción, footer, menú, etc.

## Colocando la descripción en el sitio

Continuando en el área de edición del Portal...

1. Entre en **Templates de Página**
2. Haga clic en **Categoria**
3. En el XHTML del Template, inserte el código que contiene el placeholder
4. Haga clic en **Salvar Template**

Recordando que el `htmlSeo` es el nombre del control creado arriba. Este control puede tener otro nombre, como por ejemplo `Banner-Principal`.

### Ejemplo de código

```html
<div class="bloco-de-conteudo"/>
  <!-- Content Place Holder: Html Seo -->
    <vtex:contentPlaceHolder id="htmlSeo"/>
  <!-- /Content Place Holder: Html Seo -->
</div>
```
**Ejemplos**

![](https://images.contentful.com/alneenqid6w5/5LY7pZwZpe8iQiWccqCc26/d4c10dc57a8f6091dd5c23ec3fdad12e/2016-04-05_17_15_29-Index.png) 
![](https://images.contentful.com/alneenqid6w5/45kPL4QTfqMkYuAYQEeuC2/aed1934b3268ccb8310226e0e6ce9ff3/2016-04-05_17_15_58-Index.png)

**Obs.:** la aplicación del placeholder puede ser realizada de otras maneras hasta que atienda el local, el formato, o sea, la necesidad del dueño de la tienda.

## Creando la descripción

Para incluir una descripción para Categoria (Categoria), siga los pasos abajo:

1. Entre en Configurações > Portal
2. Haga clic en Portal > Web-sites > [nomedaloja] > / > categoria > @categoria@ > categoria
![](https://images.contentful.com/alneenqid6w5/5IrVEkqOlyy644oAwGS0Ou/b82465f649790ab7bbbce5ea4d416265/2016-04-05_16_21_49-Index.png)
3. Entre en la pestaña **Configurações**
![](https://images.contentful.com/alneenqid6w5/bhebyo6cBaKy2wa8O4moA/fe1f57b2ef00101ba21effb442206043/2016-04-05_16_25_11-Index.png)
4. Haga clic en **Adicionar Controle**
5. Seleccione el tipo de control que desea, generalmente HTML
![](https://images.contentful.com/alneenqid6w5/42vmuVKKdWSwcc0gsuwimi/91fe4618316504de9ea0fb385e46df6b/2016-04-05_16_34_31-Index.png)
6. Haga clic en **Adicionar**
7. Haga clic en **Salvar Configurações**
8. Haga clic en **Editar**
9. Haga clic en **Adicionar Conteúdo**
![](https://images.contentful.com/alneenqid6w5/6Ou1gOdTZCWKqIwUA682C6/6f241a6ad96fc83cf6830622ababe08f/2016-04-05_16_34_58-Index.png)
10. Cree el HTML que le gustaría que aparezca en el sitio
11. En la pestaña **Preview** podrá tener una visualización previa del HTML
12. En los campos **Condições de Exibição**, configure de acuerdo a su necesidad, por ejemplo, seleccione una Categoría en la que este contenido estará disponible.
13. Haga clic en el checkbox **Conteúdo Ativo**
14. Haga clic en **Adicionar na Lista de Conteúdo**
![](https://images.contentful.com/alneenqid6w5/5tqciHrAD6aAgiSIwiKSKE/8ba1d1a683c168257e16dd949133809b/2016-04-05_16_28_19-Index.png)
15. Haga clic en **Salvar Configurações**


