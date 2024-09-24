---
title: 'Estrutura de pastas do CMS'
id: 75yhGhiXHMnV6Ib0rOAnue
status: ARCHIVED
createdAt: 2020-01-08T19:46:39.934Z
updatedAt: 2022-01-10T21:46:25.587Z
publishedAt: 
firstPublishedAt: 2020-01-13T14:28:57.365Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: cms-folder-structure
locale: pt
trackId: 2YcpgIljVaLVQYMzxQbc3z
trackSlugPT: cms
---

Na VTEX, toda nova conta já dispõe de pastas pré-instaladas no seu CMS. Entretanto, algumas delas são __obrigatórias__. 

Ou seja, se sua loja não tiver essas pastas - __com os nomes exatamente iguais__ aos que indicamos neste artigo - você terá problemas de navegação e de indexação.

A demais pastas são apenas __sugestões__ por serem úteis à maioria das lojas. Mas a sua ausência não afeta uma conta em nada.

Neste artigo, falaremos sobre todas essas pastas.

## Pastas obrigatórias

Toda loja precisa ter, sem exceção, as seguintes pastas no CMS para garantir o correto funcionamento da navegação e da indexação:
- Busca
- Categoria
- Departamento
- Login
- Produto

Veja abaixo estas pastas básicas no CMS:

![2 1](//images.ctfassets.net/alneenqid6w5/6jvwsPMcIBTllVekqROlkk/ea2d4a9d0d4cdb8a07dd02a3add4b40b/2_1.png)

Estas pastas vêm por padrão no ambiente de todas as lojas VTEX.

<div clas="alert alert-warning">
Atenção: os nomes das pastas obrigatórias <strong>não</strong> devem ser alterados.
</div>

Como as pastas se referem a páginas dinâmicas, seus nomes não aparecem na navegação do cliente. 

Isso significa que a edição dos nomes ser vetada não afeta o texto final das suas URLs nem, portanto, a internacionalização do seu site.

Desse modo, os nomes dos layouts podem ser editados sem nenhum problema.

## Pastas importantes

Algumas pastas do CMS não são obrigatórias, mas são úteis. Por isso, indicamos que você não as exclua.

São elas:
- `/account`: conta do cliente
- `/account/orders`: pedidos do cliente

Para estas duas pastas, o que importa é o controle ou placeholder que lê o conteúdo delas. Seus nomes delas podem ser livremente editados.

<div class="">
Tanto <code>/account</code> quanto <code>/account/orders</code> são pastas privadas. Por isso, ambas requerem autenticação. Veja no artigo <a href="https://help.vtex.com/pt/tutorial/exigir-autenticacao-em-paginas-da-loja">Exigir autenticação em páginas da loja</a> como garantir que elas estejam configuradas para pedir autenticação do usuário.
</div>

## Pastas úteis

Há pastas que, embora não sejam tão importantes quanto as anteriores, costumam ser úteis para grande parte das lojas. 

São elas:
- `/sistema/buscavazia`: pasta para onde o usuário é direcionado caso a busca não encontre resultados.
- `/sistema/{codigoHTTP}`: pasta que renderiza páginas de erros de acordo com os códigos de status HTTP, tais como 404 (página não encontrada), 401 (não autorizado) e 500 (erro de servidor).
- `/sistema/marcas`: pasta que contém layouts de páginas de marca, que podem ser customizadas com um layout exclusivo. Se não houver layout específico para marcas, estas páginas serão renderizadas iguais à pasta busca. Para entender como funcionam páginas de marca, veja o artigo [Como funciona a busca da VTEX](https://help.vtex.com/pt/tutorial/como-funciona-a-busca-da-vtex).
