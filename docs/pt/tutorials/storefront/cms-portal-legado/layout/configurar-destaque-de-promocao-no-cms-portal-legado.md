---
title: 'Configurar destaque de promoção no CMS Portal (Legado)'
createdAt: 2026-11-11T17:30:00.000Z
updatedAt: 2026-11-11T17:30:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: configuring-promotion-highlights-in-cms-portal-legacy
locale: pt
---

O destaque de uma promoção é um aviso visual exibido nas prateleiras e nas páginas de produto, informando que o item é elegível para uma promoção. Em lojas que usam o CMS Portal (Legado), é preciso adicionar o controle de destaque aos templates de página e de prateleira e definir o estilo da flag com CSS.

> ⚠️ Este artigo se aplica apenas a lojas com CMS Portal (Legado). Antes de seguir estas instruções, ative o destaque na promoção, conforme descrito em [Configurar promoção com destaque/flag](/pt/docs/tutorials/configurando-promocao-com-destaque-flag). Para configurar o destaque em lojas Store Framework, consulte a documentação do componente [Product Highlights](https://developers.vtex.com/docs/apps/vtex.product-highlights).

Neste guia, você encontrará as seguintes seções:

- [Template de página](#template-de-pagina)
- [Template de prateleira](#template-de-prateleira)
- [Estilo da flag com CSS](#estilo-da-flag-com-css)

## Template de página

Essa configuração consiste em editar o template de página utilizado para o layout da página de produto e incluir a tag `<vtex.cmc:discountHightLight/>`.

1. No Admin VTEX, acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página.
2. Clique em **CMS > Sites and channels**.
3. Clique no nome do **site** desejado.
4. Clique em **/ > Produto > @Produto@**.
5. Clique sobre o layout marcado com um check vermelho.

    ![template-pagina](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/configurar-destaque-de-promocao-no-cms-portal-legado_1.gif)

6. No campo **Template**, verifique qual o nome do template utilizado.

    ![template-produto](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/configurar-destaque-de-promocao-no-cms-portal-legado_2.png)

7. No menu lateral, clique em **CMS > HTML Templates**.
8. Clique no template encontrado em **@Produto@**.

    ![save-template](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/configurar-destaque-de-promocao-no-cms-portal-legado_3.gif)

9. Insira o código `<vtex.cmc:discountHightLight/>` de acordo com sua estrutura HTML.
10. Clique em `Save Template`.

## Template de prateleira

Essa configuração consiste em editar o template de prateleira e incluir o código `$product.DiscountHightLight`. Siga as instruções para realizar a configuração:

1. No Admin VTEX, acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página.
2. Clique em **CMS > Shelves Templates**.

    ![shelves-templates](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/configurar-destaque-de-promocao-no-cms-portal-legado_4.png)

3. Clique sobre o template desejado.
4. Insira o código `$product.DiscountHightLight`.
5. Clique em `Save Template`.

## Estilo da flag com CSS

Após realizar as configurações no Admin VTEX e adicionar as tags apropriadas nos templates, uma classe CSS com o nome de cada promoção que atenda aos requisitos será automaticamente gerada no HTML. Por exemplo, se a promoção se chama "BlackFriday", uma classe chamada `.BlackFriday` será gerada no HTML do produto ou da prateleira.

Com a classe gerada, você precisa definir seus estilos CSS, customizando um texto ou imagem para a flag diretamente nos templates.

> ℹ️ Para exibir destaques de coleções, em vez de promoções, consulte [Controle de destaque de coleção](/pt/docs/tutorials/controle-de-destaque-de-colecao).
