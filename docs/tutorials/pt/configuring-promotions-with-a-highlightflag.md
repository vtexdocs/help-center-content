---
title: 'Configurar promoção com destaque / flag'
id: tutorials_2295
status: PUBLISHED
createdAt: 2017-04-27T21:55:19.949Z
updatedAt: 2024-08-05T17:14:38.358Z
publishedAt: 2024-08-05T17:14:38.358Z
firstPublishedAt: 2017-04-27T23:03:51.539Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurando-promocao-com-destaque-flag
locale: pt
legacySlug: configurando-promocao-com-destaque-flag
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

<div class="alert alert-warning" role="alert">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

O destaque na promoção é um aviso que pode ser inserido nas prateleiras e nas páginas de produto, informando que ele é elegível para uma promoção. Um exemplo bem comum é uma imagem abaixo da imagem do produto indicando frete grátis.

![ExemploPromocaoDestaque2](https://images.contentful.com/alneenqid6w5/jS31HBOW3YWsIYyUOE8o/3d0c108c84b2a7c5e6ae2d4254425e4b/ExemploPromocaoDestaque2.png)

Nem todas as promoções são elegíveis para ter destaque. Esta possibilidade está liberada para os tipos abaixo:

-   Percentual
-   Frete percentual
-   Frete máximo
-   Frete grátis
-   Brinde

Além disso, **não é possível configurar destaque quando a promoção possui alguma restrição no carrinho**, como: 

- Faixa de CEP;
- Valor acumulado em compras;
- Restrição de promoção por BIN;
- Cluster de clientes;
- Tipo de frete;
- Forma de pagamento;
- Número máximo de parcelas, apenas na primeira compra.

Isto ocorre, pois todas estas promoções possuem alguma restrição, ou seja, não são elegíveis para todos os consumidores. Desta forma, é necessário que o consumidor dê alguma informação (ex. CEP de entrega) para que a promoção seja aplicável.

Essa configuração é feita em 3 partes, uma em Promoções e duas nos templates de sua loja, no módulo CMS. Além disso, seu CSS deve estar configurado para essa função. Veja abaixo como realizar essas configurações.

### Configure a promoção

1.  No Admin VTEX, acesse *Promoções > Promoções*, ou digite *Promoções* na barra de busca no topo da página.
2.  Busque pela promoção que deseja configurar.
3.  Na opção **Destaque nos produtos**, selecione **Com destaque**.
4.  Configure a promoção com as especificações desejadas".
5.  Clique no botão `Salvar`.

### Configure o template de página

Essa configuração consiste da edição do template de página utilizado para o layout da página de produto e inclusão da tag ``<vtex.cmc:discountHighLight/>`` no mesmo.

1. No Admin VTEX, acesse *Storefront > Layout*, ou digite *Layout* na barra de busca no topo da página.
3. Clique na pasta também chamada **CMS**.
4. Clique na pasta **Sites and channels**.
5. No menu lateral, clique no nome do **site específico** desejado.
6. Clique na pasta **/**.
7. Clique na pasta **Produto**.
8. Clique na pasta **@Produto@**.
9. Na janela, clique na opção **New Layout**.
10. No menu lateral, clique sobre o layout marcado em com um check vermelho e no campo __Template__, verifique qual o nome do template utilizado;

![Layout com check - PT](https://images.ctfassets.net/alneenqid6w5/4GmSglkpk78c4M5hDZEgZX/ab47d3105213471fe370be0b11afcfab/image.png)

![Template](https://images.contentful.com/alneenqid6w5/2OzzBkU2YwsgCGeICsgIcg/61aaf502c787cb4f0468ab8cee821072/Template.png)

11.  Volte ao menu lateral e clique na pasta **HTML Templates**;
12.  Clique no template encontrado no @Produto@;
13.  Insira o código  <vtex.cmc:discountHightLight/> de acordo com sua estrutura HTML;
14.  Clique em  **Save Template**.

### Configure o template de prateleira

1.  No Admin VTEX, acesse *Storefront > Layout*, ou digite *Layout* na barra de busca no topo da página.
2.  Clique na pasta também chamada **CMS**.
4.  Clique em  **Shelves Template**.
5.  Clique sobre o template desejado.
6.  Insira o código $product.DiscountHightLight.
7.  Clique no botão  **Save Template**.

Pronto! Após essas configurações será criada uma classe no HTML com o nome da promoção. Então, é necessário, pelo CSS, imprimir um texto ou uma imagem para a flag.
