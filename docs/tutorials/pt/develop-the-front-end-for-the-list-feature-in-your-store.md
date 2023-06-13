---
title: Desenvolver o front-end para a feature de listas na sua loja
id: iBCiwkxH8cmk6AcGoYMW0
status: PUBLISHED
createdAt: 2018-08-01T14:38:57.550Z
updatedAt: 2023-03-29T11:56:42.668Z
publishedAt: 2023-03-29T11:56:42.668Z
firstPublishedAt: 2018-08-06T17:06:46.166Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_59
slug: desenvolver-o-front-end-para-a-feature-de-listas-na-sua-loja
legacySlug: desenvolver-o-front-end-para-a-feature-de-listas-na-sua-loja
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

## Criar link para acessar a seção de listas na sua loja
As configurações abaixo devem ser feitas através do Admin VTEX, acessando **Storefront > Layout** e clie na pasta **CMS**.

Para criar o elemento html que dá ao cliente o acesso às listas na Home da sua loja, você deve incluir o código abaixo no seu template.

```html
<a href=“/giftlist”>Listas</a>
```

A rota `/giftlist` funciona como a Home das listas para cada cliente. 

## Editar template da home de listas

No template `new-Giftlist`, encontrado no CMS da sua loja, já temos incluído o controle `<vtex.cmc:GiftListSearchV2 />`. Esse controle __renderiza a busca das listas__ criadas pelos seus clientes. Veja abaixo o código renderizado por este template.

```html
<div class="giftlist giftlist-search">
    <h2 class="glsearch-title">Search List</h2>
    <fieldset class="glsearch">
        <form name="giftlistsearchform" id="giftlistsearchform" enctype="multipart/form-data">
            <ul class="giftlistsearchul glsearch-ul">
                <li class="glsearch-type">
                    <span>
                        <label for="giftlistsearchtype">List type</label>
                    </span>
                    <select name="giftlistsearchtype" id="giftlistsearchtype">
                        <!-- Serão adicionadas novas options para cada tipo de lista criado no Admin-->
                        <option value="x">All/Wish list</option>
                    </select>

                </li>
                <li class="glsearch-id">
                    <span>
                        <label for="giftlistsearchid">Reference</label>
                    </span>
                    <input type="text" id="giftlistsearchid" name="giftlistsearchid" placeholder="reference">
                </li>
                <li class="glsearch-name">
                    <span>
                        <label for="giftlistsearchname">Name</label>
                    </span>
                    <input type="text" id="giftlistsearchname" name="giftlistsearchname" placeholder="name">
                </li>
                <li class="glsearch-surname">
                    <span>
                        <label for="giftlistsearchsurname">Last name</label>
                    </span>
                    <input type="text" id="giftlistsearchsurname" name="giftlistsearchsurname" placeholder="last name">
                </li>
                <li class="glsearch-eventlocation">
                    <span>
                        <label for="giftlistsearcheventlocation">Place</label>
                    </span>
                    <input type="text" id="giftlistsearcheventlocation" name="giftlistsearcheventlocation" placeholder="place">
                </li>
                <li class="glsearch-eventcity optional">
                    <span>
                        <label for="giftlistsearcheventcity">City Event</label>
                    </span>
                    <input type="text" id="giftlistsearcheventcity" name="giftlistsearcheventcity" placeholder="city event">
                </li>
                <li class="glsearch-eventdate optional">
                    <span>
                        <label for="giftlistsearcheventdate">Date</label>
                    </span>
                    <input type="text" id="giftlistsearcheventdate" name="giftlistsearcheventdate" placeholder="date">
                </li>

                <li class="glsearch-find">
                    <span>
                        <input type="button" name="giftlistsearchfind" id="giftlistsearchfind" value="Search" class="btn">
                    </span>
                </li>
            </ul>
            <input type="hidden" id="giftlistsearchimagetypeid" name="giftlistsearchimagetypeid" value="3">
        </form>
    </fieldset>
    <div class="glsearch-result"></div>
</div>
```

Dentro do template `new-GiftList`, há um subtemplate com o nome `new-GiftList-Sidebar-nav`. Este subtemplate contém o snippet de código abaixo e pode ser encontrado na seção de `Sub Templates`, dentro de `HTML Templates` no seu CMS:

```html
<ul class="nav nav-list bs-docs-sidenav giftlist-sidenav">
    <li><a href="/giftlist/"><i class="icon-chevron-right"></i> Buscar uma Lista</a></li>
    <li><a href="/giftlist/create/"><i class="icon-chevron-right"></i> Criar nova Lista</a></li>
    <li><a href="/giftlist/manage/"><i class="icon-chevron-right"></i> Gerenciar minhas Listas</a></li>
</ul>
```

Este código renderiza uma lista com __três links__:

1. __Buscar uma Lista__: Este link leva o cliente para a rota `/giflist`, que é a home das listas e onde são realizadas as buscas pelas listas
2. __Criar nova Lista__: Este link leva o cliente para a rota `/giftlist/create`, onde o cliente cria suas listas. Nos próximos passos, vamos explicar como é feita a criação de listas.
3. __Gerenciar minhas Listas__: Este link leva o cliente para a rota `/giftlist/manage`, onde o cliente pode gerenciar suas listas. Nos próximos passos, vamos explicar como é feito o gerenciamento de listas.

<div class="alert alert-danger">
Não desmarque a flag <strong>Authentication Required</strong> já selecionada por default nas pastas abaixo. A identificação é necessária para que as listas sejam exibidas para cada usuário específico.
</div>

## Editar o template de criação de listas

<div class="alert alert-info">
Antes de editar este template, é necessário <a href="http://help.vtex.com/pt/tutorial/criando-tipo-de-lista">criar o Tipo de Lista</a> que será oferecido na sua loja. <!--Reescrever o artigo de tipo de lista -->
</div>

O template para criação de listas está localizado na rota `giftlist/create`. O template default desta rota é o `new-GiftList-Create`, localizado na seção `HTML Templates` do seu CMS.

O template de criação de listas vem com o controle `<vtex.cmc:GiftListFormV2 />` por default. Este controle irá renderizar as informações de criação de lista __de acordo com o tipo de lista__ que foi criado.

A pasta `giftlist/create`, por default, já vem com a flag marcada de `Authentication Required`. Por conta disso, será solicitado um login quando for feito o acesso a esta seção.

## Editar o template de gerenciamento de listas

O template para gerenciamento de listas está localizado na rota `giftlist/manage`. O template default desta rota é o `new-GiftList-manage`, localizado na seção `HTML Templates` do seu CMS.

O template de gerenciamento de listas vem com o controle `<vtex.cmc:GiftListManagerV2 />` por default. Este controle irá renderizar as listas que foram criadas pelo cliente na rota `giftlist/create`.

A pasta `giftlist/manage`, por default, já vem com a flag marcada de `Authentication Required`. Por conta disso, será solicitado um login quando for feito o acesso a esta seção.

## Editar o template de edição de listas

Dentro do controle `<vtex.cmc:GiftListManagerV2 />`, localizado no template  `new-GiftList-manage`, é renderizado um botão `Edit` que leva o cliente para a rota `giftlist/edit`. Esta rota lê o template `new-GiftList-Edit`, onde o cliente consegue editar suas listas.

O template de edição de listas vem com o controle `<vtex.cmc:GiftListFormV2 />` por default. Este controle é o mesmo do template da rota `giftlist/create`. No entanto, ele não irá renderizar um formulário de criação de lista. Considerando o contexto de edição, o controle irá renderizar as informações da lista escolhida para que o cliente possa editar.
