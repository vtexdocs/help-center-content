---
title: 'Control de Búsqueda - fulltextSearchBox'
id: tutorials_549
status: ARCHIVED
createdAt: 2017-04-27T22:01:10.450Z
updatedAt: 2022-09-13T14:52:28.164Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:40.648Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: controle-de-busca-fulltextsearchbox
locale: pt
legacySlug: controle-de-busca-fulltextsearchbox
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ **Atenção**: a VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.

O controle `<vtex.cmc:fullTextSearchBox />` é responsável por gerar a caixa de busca. Além do campo de pesquisa o controle renderiza um combo para restringir uma busca em um departamento. Abaixo temos um exemplo do controle sem nenhuma aplicação de css:

![Controle busca cru](//images.contentful.com/alneenqid6w5/4tvtNt1u0Mw8sgmwyAaOuW/2375499b868cfe4c24b3425fa0f33a8c/controle-busca-cru.png)

A busca é uma funcionalidade que deve estar disponível em todas as páginas de uma loja e por isso é sugerido que o controle seja inserido dentro de um [subtemplate](http://help.vtex.com/pt/tutorial/subtemplates). Normalmente o controle de busca é usado dentro do subtemplate do header da loja.

HTML renderizado pelo controle:

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

A funcionalidade de autocomplete já está prevista neste controle e é necessário apenas customizar o seu css. O autocomplete é ativado assim que um cliente digitar 3 caracteres no campo de busca. Abaixo o html que é gerado pelo auto complete:

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

### Exemplos

Alguns exemplos de como pode ser customizado o controle:

![](//images.contentful.com/alneenqid6w5/BMzmz8NA0o4SQqUO8ow4Y/5c6d179a8fca8a3efaf981c05203c061/controle-busca-autocomplete-560x318.png)

![](//images.contentful.com/alneenqid6w5/5TiDgTywScWuAcC24wmeIu/58acad8f8151f8803251679453627968/controle-busca-exemplo-560x43.png)

![](//images.contentful.com/alneenqid6w5/2X2lkCGHdSIaok08yYKCYO/6bef8f3e0c0b11313479226c0174e093/controle-busca-exemplo1.png)

