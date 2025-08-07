---
title: 'Estrutura de pastas do CMS'
id: 2RdMaJSv4AK4EyscmQuocu
status: PUBLISHED
createdAt: 2018-01-25T14:18:15.356Z
updatedAt: 2021-10-21T20:42:31.566Z
publishedAt: 2021-10-21T20:42:31.566Z
firstPublishedAt: 2018-01-25T14:56:56.161Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: cms-folder-structure
legacySlug: estrutura-de-pastas-do-cms
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Algumas pastas do CMS são __obrigatórias__. Se sua loja não tiver essas pastas - __com os nomes exatamente iguais__ aos que indicamos neste artigo - você terá problemas de navegação e indexação.

Outras pastas são __recomendadas__, por serem úteis à maioria das lojas.

Neste artigo falaremos sobre todas essas pastas.

## Pastas obrigatórias

Estas são as pastas que toda loja precisa ter no CMS para garantir o correto funcionamento da navegação e da indexação:

- Busca
- Categoria
- Departamento
- Login
- Produto

Veja abaixo estas pastas básicas no CMS:

![pastasObrigatorias](https://images.contentful.com/alneenqid6w5/2yLeJGvd48WcA6egy2kSSC/43e22907371f954df25d5fd7e5dd116b/pastasObrigatorias.png)

Estas pastas vêm por padrão no ambiente de todas as lojas VTEX.

<div class="alert alert-danger">
  <p>Os nomes das pastas obrigatórias <b>não</b> devem ser editados. Isso pode comprometer o funcionamento correto da loja e impedir que compras sejam realizadas.</p>
</div>

Como as pastas se referem a páginas dinâmicas, seus nomes não aparecem na navegação do cliente. Ou seja, o fato de a edição dos nomes ser vetada não afeta o texto final das suas URLs nem, portanto, a internacionalização do seu site.

Os nomes dos layouts podem ser editados sem nenhum problema.

## Pastas importantes

Algumas pastas do CMS não são obrigatórias mas são úteis. Por isso, recomendamos que você não as exclua.

São elas:
- `/account`: conta do cliente.
- `/account/orders`: pedidos do cliente.

Para estas duas pastas, o que importa é o controle ou placeholder que lê o conteúdo delas. Os nomes delas podem ser livremente editados.

<div class="alert alert-warning">
Como são pastas privadas, <code>/account</code> e <code>/account/orders</code> <b>precisam requerer autenticação</b>. Veja <a href="http://help.vtex.com/pt/tutorial/exigir-autenticacao-em-paginas-da-loja">neste artigo</a> como garantir que elas estejam configuradas para pedir autenticação do usuário.
</div>

## Pastas úteis

Há pastas que, embora não sejam tão importantes quanto as anteriores, costumam ser úteis para grande parte das lojas. São elas:

- `/sistema/buscavazia`: pasta para onde o usuário é direcionado caso a busca não encontre resultados.
- `/sistema/{codigoHTTP}`: pasta que renderiza páginas de erros de acordo com os códigos de status HTTP, tais como `404` (página não encontrada), `401` (não autorizado) e `500` (erro de servidor).
- `/sistema/marcas`: pasta que contém layouts de páginas de marcas, que podem ser customizadas com um layout exclusivo. Se não houver layout específico para marcas, essas páginas serão renderizadas da mesma forma que a pasta de busca. Para entender como funcionam páginas de marca, veja o artigo [sobre a busca da VTEX](https://help.vtex.com/pt/tutorial/como-funciona-a-busca-da-vtex).
