---
title: 'Configurar promoção com destaque / flag'
id: tutorials_2295
status: PUBLISHED
createdAt: 2017-04-27T21:55:19.949Z
updatedAt: 2024-09-17T16:24:52.963Z
publishedAt: 2024-09-17T16:24:52.963Z
firstPublishedAt: 2017-04-27T23:03:51.539Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-promotions-with-a-highlightflag
legacySlug: configurando-promocao-com-destaque-flag
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

Configurar promoção com destaque / flag

O destaque de uma promoção é um aviso visual que pode ser inserido nas prateleiras e nas páginas de produtos, informando que o item é elegível para uma promoção. Um exemplo comum é a indicação de frete grátis abaixo da imagem do produto.

![ExemploPromocaoDestaque2](https://images.contentful.com/alneenqid6w5/jS31HBOW3YWsIYyUOE8o/3d0c108c84b2a7c5e6ae2d4254425e4b/ExemploPromocaoDestaque2.png)

Neste guia, você encontrará as seguintes seções:

- [Promoções elegíveis para destaque](#promocoes-elegiveis-para-destaque)
- [Restrições](#restricoes)
- [Configurar a promoção](#configurar-a-promocao)
- [Destaque de promoções no Store Framework](#destaque-de-promocoes-no-store-framework)
- [Destaque de promoções no CMS Portal Legado](#destaque-de-promocoes-no-cms-portal-legado)
     - [Template de página](#template-de-pagina)
     - [Template de prateleira](#template-de-prateleira)

## Promoções elegíveis para destaque

O destaque de promoção pode ser aplicado em diferentes tipos de promoções e descontos. Esse destaque será exibido nas prateleiras  e páginas de produtos, alertando os clientes que o item faz parte de uma promoção especial.

Os seguintes tipos de descontos são elegíveis para a aplicação de um destaque:

- [Desconto percentual](https://help.vtex.com/pt/tutorial/configurar-promocao-de-desconto-percentual-para-um-sku-especifico--3rbh8ELSLu2IGCeQ6SImU0): oferece uma redução percentual no valor do produto.
- [Frete percentual](https://help.vtex.com/pt/tutorial/configurar-promocao-de-desconto-percentual-para-um-sku-especifico--3rbh8ELSLu2IGCeQ6SImU0): aplica um desconto em parte do valor do frete, permitindo que os clientes paguem menos pelo envio e incentivando a decisão de compra.
- [Frete máximo](https://help.vtex.com/pt/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW): estabelece um valor máximo para o frete, independentemente de fatores como distância ou peso do pedido.
- [Frete grátis](https://help.vtex.com/pt/tutorial/configurar-promocoes-de-frete--6Lo5BR61KMiUFAAHGCdgfW): elimina totalmente o custo de envio. 
- **Brinde**: oferece um produto extra sem custo ao cliente, ao comprar um determinado item ou atingir um valor mínimo de compra.

Para mais informações, acesse os artigos da seção [Promoções](https://help.vtex.com/pt/subcategory/promocoes--1yTYB5p4b6iwMsUg8uieyq).

## Restrições

Não é possível configurar o destaque de promoções que possuem alguma restrição no carrinho, como:

- Faixa de CEP
- Valor acumulado em compras
- BIN
- Cluster de clientes
- Tipo de frete
- Forma de pagamento
- Número máximo de parcelas, apenas na primeira compra

Essas promoções não são aplicáveis a todos os consumidores, pois exigem informações adicionais (por exemplo, o CEP de entrega). Por isso, o destaque não pode ser configurado nesses casos.

## Configurar a promoção

Siga as instruções abaixo para configurar o destaque nas promoções de sua loja.

1.  No Admin VTEX, acesse **Promoções > Promoções**, ou digite **Promoções** na barra de busca no topo da página.
2.  Busque pela promoção que deseja configurar.
3.  Na opção **Destaque nos produtos**, selecione **Com destaque**.
4.  Configure a promoção com as especificações desejadas.
5.  Clique em `Salvar`.
6. Prossiga para as instruções correspondentes à tecnologia de frontend utilizada por sua loja:

- [Store Framework](#destaque-de-promocoes-no-store-framework)
- [CMS Portal Legado](#destaque-de-promocoes-no-cms-portal-legado)

## Destaque de promoções no Store Framework

Para lojas desenvolvidas com Store Framework, após configurar o destaque da promoção, siga as instruções da documentação do componente [Product Highlights](https://developers.vtex.com/docs/apps/vtex.product-highlights).

## Destaque de promoções no CMS Portal Legado

Para lojas CMS Portal Legado, após configurar o destaque da promoção, configure o [template de página](#configurar-o-template-de-pagina) e o [template de prateleira](#configurar-o-template-de-prateleira) no módulo CMS. Além disso, seu CSS deve estar configurado para essa função.

### Template de página

Essa configuração consiste em editar o template de página utilizado para o layout da página de produto e incluir a tag `<vtex.cmc:discountHighLight/>`.

1. No Admin VTEX, acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página.
2. Clique em **CMS > Sites and channels**.
3. Clique no nome do **site** desejado.
4. Clique em **/ > Produto > @Produto@**.
5. Clique sobre o layout marcado em com um check vermelho.

    ![template-pagina](//images.ctfassets.net/alneenqid6w5/37poO6Jxhn6Mc1nLeMIbB1/8dd1cf2c0463ebbd8aa86c019964e7c8/template-pagina.gif)

6. No campo __Template__, verifique qual o nome do template utilizado:

    ![template-produto](//images.ctfassets.net/alneenqid6w5/3GST4wBaoqbW84ryZ7y1Y5/3209503a3e218046d97dd40fbf04a998/template-produto.png)

7.  No menu lateral, clique em **CMS > HTML Templates**.
8.  Clique no template encontrado em **@Produto@**.

    ![save-template](//images.ctfassets.net/alneenqid6w5/5n0wxeIf8uVM26GRVkQ5Ty/97802b42dca79f5eb548df76f45f174d/save-template.gif)

9.  Insira o código `<vtex.cmc:discountHightLight/>` de acordo com sua estrutura HTML.
10.  Clique em **Save Template**.

### Template de prateleira

1.  No Admin VTEX, acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página.
2.  Clique em **CMS > Shelves Templates**.

    ![shelves-templates](//images.ctfassets.net/alneenqid6w5/9F4rv410hc9HxXowv9EAX/0bc7542b9c7ef4c67f861b114c2b0538/shelves-templates.png)

3.  Clique sobre o template desejado.
4.  Insira o código `$product.DiscountHightLight`.
5.  Clique em **Save Template**.

Após realizar as configurações no Admin VTEX e adicionar as tags apropriadas nos templates, uma classe CSS com o nome de cada promoção que atenda aos requisitos será automaticamente gerada no HTML. Por exemplo, se a promoção se chama “BlackFriday”, uma classe chamada `.BlackFriday` será gerada no HTML do produto ou prateleira.

Com a classe gerada, você precisa definir seus estilos CSS, customizando um texto ou imagem para a flag diretamente nos templates.

