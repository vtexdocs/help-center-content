---
title: 'Control de Busca - fulltextSearchBox'
id: tutorials_549
status: ARCHIVED
createdAt: 2017-04-27T22:01:10.450Z
updatedAt: 2022-09-13T14:52:28.164Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:40.648Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: search-control-fulltextsearchbox
locale: es
legacySlug: controle-de-busca-fulltextsearchbox
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ **Atención**: VTEX presenta dos opciones de búsqueda - La búsqueda VTEX y VTEX Intelligent Search. Este artículo se refiere a la búsqueda VTEX. Para saber más sobre la aplicación VTEX Intelligent Search, consulte <a href = "https://help.vtex.com/es/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nuestra guía</a>.

El control `<vtex.cmc:fullTextSearchBox />`es responsable de generar la caja de búsqueda. Además del campo de búsqueda, el control renderiza un combo para restringir una búsqueda en un departamento. Tenemos abajo un ejemplo del control sin ninguna aplicación de css:

![Contról de búsqueda default](//images.contentful.com/alneenqid6w5/4tvtNt1u0Mw8sgmwyAaOuW/2375499b868cfe4c24b3425fa0f33a8c/controle-busca-cru.png)

La búsqueda es una funcionalidad que debe estar disponible en todas las páginas de una tienda, por eso se sugiere que el control sea insertado dentro de un [subtemplate](http://help.vtex.com/es/tutorial/subtemplates). Normalmente el controle de busca se usa dentro del subtemplate del header de la tienda.

HTML renderizado por el control:

```html
<fieldset class="busca">
  <legend>Buscar no site</legend>
  <label>Buscar</label>
  <select id="ftDept4aceafb578de4c7caf31e06bcc8d45b9">
    <option value="">Todo o site</option>
    <option value="1000000">Integracao</option>
    <option value="1">Eletrodomésticos</option>
    <option value="3">Moda</option>
  </select>
  <input type="hidden" id=ftIdx4aceafb578de4c7caf31e06bcc8d45b9 value="" />
  <input id="ftBox4aceafb578de4c7caf31e06bcc8d45b9" class="fulltext-search-box" type="text" size="20" accesskey="b" />
  <input id="ftBtn4aceafb578de4c7caf31e06bcc8d45b9" type="button" value="Buscar" class="btn-buscar" />
</fieldset>
```

La funcionalidad de autocomplete ya está prevista en este control y sólo se debe personalizar su css. El autocomplete se activa en cuanto un cliente digite 3 caracteres en el campo de búsqueda. El html que se genera por el autocomplete está abajo:

```html
<ul class="ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all" role="listbox" aria-activedescendant="ui-active-menuitem" style="z-index: 10; top: -3334px; left: 667.5px; display: none; position: relative; width: 507px;">
  <li class="ui-menu-item" role="menuitem"><a class="ui-corner-all" tabindex="-1">adidas em Modelos</a></li>
  <li class="ui-menu-item" role="menuitem"><a class="ui-corner-all" tabindex="-1">adidas em Tênis</a></li>
  <li class="ui-menu-item" role="menuitem"><a class="ui-corner-all" tabindex="-1">adidas em Lançamentos</a></li>
  <li class="ui-menu-item" role="menuitem"><a class="ui-corner-all" tabindex="-1">adidas em Masculino</a></li>
  <li class="ui-menu-item" role="menuitem">
    <a class="ui-corner-all" tabindex="-1">
      <img src="http://www.authenticfeet.com.br/arquivos/ids/188460-25-25/Mini-Bola-Brazuca-WC-14-Glider.jpg" width="25" height="25" alt="Mini-Bola-Brazuca-WC-14-Glider"> minibola adidas brazuca glider - copa do mundo
    </a>
  </li>
  <li class="ui-menu-item" role="menuitem">
    <a class="ui-corner-all" tabindex="-1">
      <img src="http://www.authenticfeet.com.br/arquivos/ids/189014-25-25/Tenis-adidas-Springblade-Feminino.jpg" width="25" height="25" alt="Tenis-adidas-Springblade-Feminino">
      tênis adidas springblade feminino
    </a>
  </li>
  <li class="ui-menu-item" role="menuitem">
    <a class="ui-corner-all" tabindex="-1">
      <img src="http://www.authenticfeet.com.br/arquivos/ids/188855-25-25/Tenis-adidas-Dynamic-Fusion-50-Feminino.jpg" width="25" height="25" alt="Tenis-adidas-Dynamic-Fusion-50-Feminino">
      tênis adidas dynamic fusion 50 feminino
    </a>
  </li>
</ul>
```

### Ejemplos 

Ejemplos de cómo se puede personalizar el control:

![](//images.contentful.com/alneenqid6w5/BMzmz8NA0o4SQqUO8ow4Y/5c6d179a8fca8a3efaf981c05203c061/controle-busca-autocomplete-560x318.png)

![](//images.contentful.com/alneenqid6w5/5TiDgTywScWuAcC24wmeIu/58acad8f8151f8803251679453627968/controle-busca-exemplo-560x43.png)

![](//images.contentful.com/alneenqid6w5/2X2lkCGHdSIaok08yYKCYO/6bef8f3e0c0b11313479226c0174e093/controle-busca-exemplo1.png)

