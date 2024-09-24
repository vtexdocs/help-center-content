---
title: 'Customizar templates'
id: 6GyWKDbduXzdsZbH4jqhli
status: ARCHIVED
createdAt: 2019-02-19T19:57:29.896Z
updatedAt: 2020-03-13T21:24:44.801Z
publishedAt: 
firstPublishedAt: 2019-02-19T19:57:33.579Z
contentType: trackArticle
productTeam: VTEX IO
slugEN: customizing-templates
locale: pt
trackId: 5qJr8BIQXAKec9CpBWrTNv
trackSlugPT: crie-uma-loja-usando-vtex-io
---

Não existem duas lojas de e-commerce iguais, mas todas compartilham uma série de blocos de construção comuns, como prateleiras, carrosséis, menus, barras de busca etc. Podemos implementar uma loja inteira compondo de forma declarativa esses blocos para criar modelos arbitrariamente complexos.

## Blocos e templates

De fato, tudo que você vê em uma página do VTEX IO é chamado de __bloco__. Os blocos representam *instâncias de componentes configurados* e podem __conter outros blocos__. Eles são a unidade mais básica que representa algo que você pode renderizar em uma página.

As apps podem *declarar* blocos tão simples quanto um botão ou tão complexos quanto um template de home page. Usando o novo VTEX CMS, os usuários podem configurar e combinar novos blocos para criar novos templates ou editar o layout do site sem tocar no código, enquanto veem as alterações em tempo real.

Os blocos são reutilizáveis. Portanto, o mesmo bloco pode ser usado em vários templates. Por exemplo, a app `vtex.shelf` exporta o componente react `Shelf`, que pode ser configurado para mostrar diferentes quantidades de produtos, ocultar ou mostrar setas de navegação etc. Pode ser que você queira configurar todas as suas prateleiras para exibirem sempre 4 itens e mostrarem setas nos lados. Essa configuração é um __bloco__. Agora você pode montar uma prateleira de 4 itens em qualquer template.

## Declarando templates

Para implementar uma loja, precisamos declarar um __template__ para cada uma das páginas que o usuário pode visitar, como a home page, a página do produto etc.

__Templates__ são blocos de nível superior renderizados quando um usuário navega para uma rota determinada. A app vtex.store declara todas as rotas nativas, como home page, página do produto, categoria, pesquisa, My Account etc., assim como as __interfaces__ para blocos que devem ser renderizados em cada página. Por enquanto, você pode pensar em interfaces como as plantas do projeto e nos blocos como os componentes configurados que de fato aparecem na loja.

Em uma loja construída com o VTEX IO, todo template __estende a interface__ `store` de nível mais alto, declarada na app `vtex.store`.

O padrão `store-theme` implementa todos os templates básicos para você. Vamos dar uma olhada no template da página inicial:

```json
//blocks.json
{
 "store.home": {
   "blocks": [
     "carousel#home",
     "shelf#home"
   ]
 }, (...)
}
```

Como a app `vtex.store` declara uma rota que monta o bloco `store.home` na rota `/`, isso é o que é renderizado quando o usuário visita a raiz do domínio após instalar a app `store-theme` .

Mais abaixo nesse arquivo, podemos encontrar a declaração para o bloco `shelf#home`:

```json
// blocks.json
{
 "shelf#home": {
   "props": {
     "orderBy": "OrderByTopSaleDESC",
     "productList": {
       "maxItems": 10,
       "itemsPerPage": 4,
       "scroll": "BY_PAGE",
       "arrows": true,
       "titleText": "New collection",
       "summary": {
         "isOneClickBuy": false,
         "showBadge": true,
         "badgeText": "OFF",
         "buyButtonText": "Comprar",
         "displayBuyButton": "displayButtonHover",
         "showCollections": false,
         "showListPrice": true,
         "showLabels": false,
         "showInstallments": true,
         "showSavings": true,
         "name": {
           "showBrandName": false,
           "showSku": false,
           "showProductReference": false
         }
       }
     }
   }
 }
}
```

## Alterações futuras importantes no conteúdo de blocos

Atualmente, os blocos lidam com a busca e a exibição de conteúdo. Observe a propriedade `orderBy` acima. Ela informa esse bloco sobre como consultar produtos na API de Search. Isso impõe uma limitação: se quiser variar o conteúdo, você precisa declarar um novo bloco e alterar as props correspondentes.

__Esse comportamento será alterado__ com uma feature a ser lançada, que permitirá __montar conteúdo diferente__ em duas instâncias diferentes do mesmo bloco. Essa alteração será compatível com versões anteriores e ofereceremos uma ferramenta de migração automática para portar blocos. Agora vamos voltar a editar nossa loja.

## Declarando uma nova prateleira em nossa home page

Para adicionar um componente a essa página, basta declarar um novo bloco de prateleira e inseri-lo no template `store.home`. Por exemplo, vamos criar um bloco `shelf#deals` e adicioná-lo ao nosso template:

```json
// blocks.json
{
 "store.home": {
   "blocks": [
     "carousel#home",
     "shelf#home",
     "shelf#deals"
   ]
 },
 "shelf#deals": {
   "props": {
     "orderBy": "OrderByBestDiscountDESC",
     "productList": {
"titleText": "Best Discounts",
	(...)
     }
   }
 }
}
```

Se salvar isso em `store/blocks.json` e rodar `vtex link` em sua loja, você deverá ver uma nova prateleira renderizada ao visitar a home page.

![shelf](//images.ctfassets.net/alneenqid6w5/6Hw3fRA4E8xC0Q4bNdO6gV/8b6742fd0c57a341db0cc0baea4cfb06/shelf.svg)

Você pode personalizar os blocos declarados pela aplicativo `store-theme` livremente e também declarar novos. Por enquanto, você pode encontrar a documentação para cada componente em seus [repositórios do GitHub](https://github.com/vtex-apps?q=store-components). Lá você encontra as propriedades disponíveis para cada componente.
