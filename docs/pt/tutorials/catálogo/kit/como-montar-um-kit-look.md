---
title: 'Montar um Kit look'
id: tutorials_266
status: PUBLISHED
createdAt: 2017-04-27T22:11:08.863Z
updatedAt: 2026-01-30T14:45:58.909Z
publishedAt: 2025-09-16T14:45:58.909Z
firstPublishedAt: 2017-04-27T23:03:12.436Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: how-to-assemble-an-outfit
legacySlug: como-montar-um-kit-look
locale: pt
subcategoryId: 17Lkzo2rGBE1Bt7dXjE0tV
---

> ⚠️ Tutorial válido apenas para lojas CMS Portal (Legado).

Saiba como configurar na VTEX um Kit look, também conhecido como Lookbook.

Antes de falarmos sobre o Kit Look, é importante lembrar que você deve saber criar um Kit. Para isso, acesse o artigo [Como criar Kit](/pt/tutorial/cadastrando-kit/).

A tabela a seguir apresenta as características e contextos para o uso de kit ou kit look:

| **Tipo** | **Definição** | **Exemplo** |
| :---: | :--- | :--- |
| [Kit](/pt/docs/tutorials/o-que-e-um-kit) | <ul><li>Os componentes formam um conjunto indivisível e o cliente não pode escolher quais itens do kit deseja adquirir.</li><li>A loja pode ou não disponibilizar os componentes para compra individual.</li></ul> | Uma loja de moda masculina oferece o kit "Dia dos Pais", formado por um sapato, um par de meias e um chaveiro. O cliente não tinha interesse no chaveiro, mas gostou do sapato e das meias, então aceitou e levou o kit completo, já que não era possível escolher apenas parte dos itens. |
| Kit look | <ul><li>Os componentes funcionam como uma sugestão de compra conjunta e o cliente pode escolher quais itens do kit look deseja adquirir. Normalmente conhecido como "Shop the Look".</li><li>A loja sempre disponibiliza os componentes para compra individual.</li></ul> | Uma loja de moda feminina oferece a venda do kit look "Verão", formado por um biquíni, uma saída de banho e uma sandália. A cliente não gostou do modelo de sandália e comprou somente o biquíni e a saída de banho. |


### O que é o Kit Look?

Esse termo é muito conhecido no segmento de Moda e Mobiliário. Um Kit Look é um modo que você consegue comprar vários produtos, visualizando apenas a tela de um produto.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/como-montar-um-kit-look_1.gif)

No layout acima, é possível selecionar os itens do kit que o cliente gostaria de comprar e em seguida clicar em “Comprar Produtos Selecionados”.

Ou se preferir comprar o kit completo, basta manter todos os itens selecionados.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/como-montar-um-kit-look_2.gif)

Nesse layout cada item possui um botão de “Comprar Separadamente”.

Caso prefira comprar o kit completo, basta clicar em “Comprar Look”.

Ao clicar em "Comprar Look", independente do layout, todos os componentes do kit serão adicionados no carrinho automaticamente e individualmente. Por exemplo, em um kit que possua 4 itens, todos eles serão adicionados.

No layout é possível definir a quantidade de itens default para cada componente.

### Implementação da página dos Kits

```
<div id="top-right">
                        <span id="selecione-kit">SELECIONE AS PEÇAS DO LOOK</span>
                        <!-- ITEM KIT -->
                        <div class="kit clearfix">
                            <div class="kit-info">
                                <div class="kit-image">
                                    <vtex.cmc:ProductImage productIndex="1" />
                                </div>
                                <div class="tpl-right">
                                    <div class="nome-kit"><h2><vtex.cmc:productName productIndex="1" /></h2></div>
                                    <div class="skuSelection">
                                        <vtex.cmc:skuSelection changeImage="1" productIndex="1" />
                                    </div>
                                    <div class="dv-buy-button clearfix">
                                        <vtex.cmc:BuyInPage productIndex="1" />
                                    </div>
                                    <div class="preco-kit">
                                        <vtex.cmc:skuPrice productIndex="1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- // ITEM KIT -->
                        <!-- ITEM KIT -->
                        <div class="kit clearfix">
                            <div class="kit-info">
                                <div class="kit-image">
                                    <vtex.cmc:ProductImage productIndex="2" />
                                </div>
                                <div class="tpl-right">
                                    <div class="nome-kit"><h2><vtex.cmc:productName productIndex="2" /></h2></div>
                                    <div class="skuSelection">
                                        <vtex.cmc:skuSelection changeImage="1" productIndex="2" />
                                    </div>
                                    <div class="dv-buy-button clearfix">
                                        <vtex.cmc:BuyInPage productIndex="2" />
                                    </div>
                                    <div class="preco-kit">
                                        <vtex.cmc:skuPrice productIndex="2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- // ITEM KIT -->
                        <!-- ITEM KIT -->
                        <div class="kit clearfix">
                            <div class="kit-info">
                                <div class="kit-image">
                                    <vtex.cmc:ProductImage productIndex="3" />
                                </div>
                                <div class="tpl-right">
                                    <div class="nome-kit"><h2><vtex.cmc:productName productIndex="3" /></h2></div>
                                    <div class="skuSelection">
                                        <vtex.cmc:skuSelection changeImage="1" productIndex="3" />
                                    </div>
                                    <div class="dv-buy-button clearfix">
                                        <vtex.cmc:BuyInPage productIndex="3" />
                                    </div>
                                    <div class="preco-kit">
                                        <vtex.cmc:skuPrice productIndex="3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- // ITEM KIT -->
 </div>
```

O controle **_BuyInPage_**, descrito no código acima, só funcionará com a utilização do controle **_AmountItemsInCart_** (no próprio template ou em qualquer sub-template relacionado).

Entenda a relação entre esses controles em [Lista Completa de Controles](/pt/tutorial/lista-de-controles-para-templates).

`changeImage=”1″`: indica qual o campo vai mudar a imagem do SKU ao ser selecionado.

Este template deve ser associado a um novo Layout de Página de Produto, que será aplicado apenas na categoria onde os Kits estão cadastrados. Para criar uma nova página de produto selecione a pasta **_"Produto"_** e clique em **_"novo layout"_**.

![2017-03-09 13_40_22-Index](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/como-montar-um-kit-look_3.png)

Existe um limite de exibição de até 12 componentes para uma página de kit look. Para que não seja necessário criar vários templates diferentes, basta inserir mais vezes o mesmo código acima - alterando o valor de _**productIndex**_.

**Exemplo 1:** Se você possui um produto kit com 3 componentes e outro com 5 componentes, e desejar utilizar esta funcionalidade do Kit Look para os dois produtos kits, não é necessário criar um template para cada quantidade. Você pode criar um template com 5 grupos de controles dos componentes (**_productIndex=numeroMaximo_**). Entendendo que _numeroMaximo_ é o valor do kit com maior número de componentes.

**Exemplo 2:** Quando utilizado o **_productIndex=0_**, são exibidas as informações do Kit em si. Na página do produto que tiver um kit com 2 componentes, serão mostrados apenas os 2 componentes. Se tiver um kit com 4 componentes, exibirá os 4.

Resumindo, a loja pode criar um template com a quantidade de _productIndex_ que desejar. Aparecerá, na página do produto, apenas a quantidade de componentes de cada kit.
