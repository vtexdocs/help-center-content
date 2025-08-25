---
title: 'Montar um Kit Look'
id: tutorials_266
status: PUBLISHED
createdAt: 2017-04-27T22:11:08.863Z
updatedAt: 2025-06-12T16:52:32.277Z
publishedAt: 2025-06-12T16:52:32.277Z
firstPublishedAt: 2017-04-27T23:03:12.436Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: how-to-assemble-a-look-kit
legacySlug: como-montar-um-kit-look
locale: pt
subcategoryId: 17Lkzo2rGBE1Bt7dXjE0tV
---

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Tutorial válido apenas para lojas CMS Portal Legado.
</div>

Saiba como configurar em VTEX um Kit Look ou Lookbook, como também conhecido. 

Antes de falarmos sobre o Kit Look, é importante lembrar que você deve saber criar um Kit. Para isso, acesse o artigo [Como criar Kit](/pt/tutorial/cadastrando-kit/).

As diferenças entre o KIT e o KIT LOOK são:

**Kit:** Em um kit, os produtos componentes estão associados formando um único pacote. Ou seja, na página do produto Kit, os componentes não podem ser vendidos separadamente. Isto significa que, caso o componente "Blusa" e o componente "Sandália" estejam no kit "Praia", ao buscar por esses produtos de forma separada na loja e adicioná-los ao carrinho, o cliente estará escolhendo os produtos e não o KIT.

Ou seja, o Kit é um novo produto composto por outros que podem, ou não, estar disponíveis para compra separada.

**Kit Look:** Em um kit look, todos os produtos componentes podem ser encontrados no site e vendidos fora do kit. Até mesmo na página de produto do kit look é possível comprar os itens separadamente ou todos juntos. O cliente encara um Kit Look como uma sugestão.

### O que é o Kit Look?

Esse termo é muito conhecido no segmento de Moda e Mobiliário. Um Kit Look é um modo que você consegue comprar vários produtos, visualizando apenas a tela de um produto.

![](//images.contentful.com/alneenqid6w5/2WA6REAMecCaUiSEk2uoC6/999c983b772d8025d86f6ca2d1ebf3e4/kit-look-donadolook-exemplo.gif)

No layout acima, é possível selecionar os itens do kit que o cliente gostaria de comprar e em seguida clicar em “Comprar Produtos Selecionados”.

Ou se preferir comprar o kit completo, basta manter todos os itens selecionados.

![](//images.contentful.com/alneenqid6w5/4ol1nKNyx2WYw26wQscgEE/986c00a0096dd93ac7c3ce206ecf049e/kit-look-jackthebarber-exemplo.gif)

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

![2017-03-09 13_40_22-Index](//images.contentful.com/alneenqid6w5/3O4vfCLtriImIUukkwyIuM/6fabda711e9ca17e42389cfbb0ceeb33/2017-03-09-13_40_22-Index.png)

Existe um limite de exibição de até 12 componentes para uma página de kit look. Para que não seja necessário criar vários templates diferentes, basta inserir mais vezes o mesmo código acima - alterando o valor de _**productIndex**_.

**Exemplo 1:** Se você possui um produto kit com 3 componentes e outro com 5 componentes, e desejar utilizar esta funcionalidade do Kit Look para os dois produtos kits, não é necessário criar um template para cada quantidade. Você pode criar um template com 5 grupos de controles dos componentes (**_productIndex=numeroMaximo_**). Entendendo que _numeroMaximo_ é o valor do kit com maior número de componentes.

**Exemplo 2:** Quando utilizado o **_productIndex=0_**, são exibidas as informações do Kit em si. Na página do produto que tiver um kit com 2 componentes, serão mostrados apenas os 2 componentes. Se tiver um kit com 4 componentes, exibirá os 4.

Resumindo, a loja pode criar um template com a quantidade de _productIndex_ que desejar. Aparecerá, na página do produto, apenas a quantidade de componentes de cada kit.
