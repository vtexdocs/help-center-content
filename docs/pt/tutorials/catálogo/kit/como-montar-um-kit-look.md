---
title: 'Montar um kit look'
id: tutorials_266
status: PUBLISHED
createdAt: 2017-04-27T22:11:08.863Z
updatedAt: 2026-10-28T16:40:00.000Z
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

Neste artigo, você aprende a configurar um kit look (também chamado de Lookbook) na sua loja.

Antes de configurar um kit look, você precisa saber criar um kit. Saiba como no artigo [Como criar um kit](/pt/docs/tutorials/cadastrar-kit).

A tabela a seguir apresenta as características e contextos para o uso de kit ou kit look:

| Tipo | Definição | Exemplo |
| --- | --- | --- |
| [Kit](/pt/docs/tutorials/o-que-e-um-kit) | <ul><li>Os componentes formam um conjunto indivisível e o cliente não pode escolher quais itens do kit deseja adquirir.</li><li>A loja pode ou não disponibilizar os componentes para compra individual.</li></ul> | Uma loja de moda masculina oferece o kit "Dia dos Pais", formado por um sapato, um par de meias e um chaveiro. O cliente não tinha interesse no chaveiro, mas gostou do sapato e das meias, então aceitou e levou o kit completo, já que não era possível escolher apenas parte dos itens. |
| Kit look | <ul><li>Os componentes funcionam como uma sugestão de compra conjunta e o cliente pode escolher quais itens do kit look deseja adquirir. Normalmente conhecido como "Shop the Look".</li><li>A loja sempre disponibiliza os componentes para compra individual.</li></ul> | Uma loja de moda feminina oferece a venda do kit look "Verão", formado por um biquíni, uma saída de banho e uma sandália. A cliente não gostou do modelo de sandália e comprou somente o biquíni e a saída de banho. |


### O que é um kit look

Esse termo é muito conhecido nos segmentos de moda e mobiliário. Um kit look permite que o cliente compre vários produtos a partir da página de um único produto.

![Layout de kit look com a seleção dos itens e o botão Comprar produtos selecionados](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/como-montar-um-kit-look_1.gif)

No primeiro layout, o cliente seleciona os itens do kit que deseja comprar e clica em `Comprar produtos selecionados`. Para comprar o kit completo, basta manter todos os itens selecionados.

![Layout de kit look com o botão Comprar separadamente em cada item](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/como-montar-um-kit-look_2.gif)

No segundo layout, cada item possui o botão `Comprar separadamente`. Para comprar o kit completo, clique em `Comprar look`.

Ao clicar em `Comprar look`, independentemente do layout, todos os componentes do kit são adicionados ao carrinho automaticamente e de forma individual. Por exemplo, em um kit com quatro itens, todos eles são adicionados.

Em cada layout, é possível definir a quantidade padrão de itens de cada componente.

### Implementar a página de kits

Para exibir o kit look na loja, você precisa criar um template de produto com o código dos componentes, criar um layout de produto associado a esse template e atribuir esse layout aos kits cadastrados.

#### Criar o template de produto

Para criar o template de produto, siga os passos a seguir:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** e, em seguida, em **HTML Templates**.
3. Para criar um novo template de produto, clique em **New template** e preencha o campo **Template Name**. Para editar um template existente, clique no template que será usado pelos kits.
4. No box **Template XHTML**, cole o código a seguir, dentro da área da página onde os componentes do kit devem aparecer. O código é inserido no template, e não no layout.

> ℹ️ Para mais detalhes sobre como criar e editar templates, consulte o artigo [Criar e editar um template de página](/pt/docs/tutorials/como-criar-um-template-de-pagina).

```html
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

Depois de colar o código, clique em **Save Template**, no canto superior direito, para salvar o template.

> ℹ️ O controle `BuyInPage`, usado no código do template, só funciona com o controle `AmountItemsInCart` (no próprio template ou em qualquer sub-template relacionado). Para entender a relação entre esses controles, veja a [lista de controles para templates](https://developers.vtex.com/docs/guides/list-of-controls-for-templates).

`changeImage="1"`: indica qual campo muda a imagem do SKU ao ser selecionado.

#### Criar o layout de produto

Para associar o template a um novo layout de página de produto, que será aplicado apenas aos kits cadastrados, siga os passos a seguir:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** e, em seguida, em **Sites and channels**.
3. Acesse o website da loja que você está editando, clique na pasta raiz (`/`) e selecione a pasta **Produto**.
5. Clique em **New Layout**.
6. Preencha os campos **Layout Name** e **Body Class**.
7. Em **Template**, selecione o template criado com o código do kit look.
8. Desmarque a opção **Default Page**. Com ela marcada, o layout é aplicado a todos os produtos da loja, e não apenas aos kits.

#### Atribuir o layout aos kits

Depois de desmarcar **Default Page**, uma nova seção é exibida com as condições de aplicação do layout. Atribua o layout aos kits cadastrados por meio de um ou mais critérios, como:

- Produtos específicos (os kits cadastrados)
- Categorias em que os kits estão cadastrados
- Marcas dos kits

Clique em **Save Layout** para salvar. O novo layout é exibido na pasta **Produto**, como no exemplo a seguir:

![Pasta Produto com o layout produto-kit-look destacado](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/kit/como-montar-um-kit-look_3.png)

> ⚠️ Se o layout não for atribuído aos kits, as páginas deles continuarão usando o layout padrão de produto, sem a exibição dos componentes do kit look.

Para mais detalhes sobre as condições, consulte o artigo [Como trabalhar com diferentes layouts para uma mesma página](/pt/docs/tutorials/como-trabalhar-com-diferentes-layouts-para-uma-mesma-pagina).

A página de kit look exibe no máximo 12 componentes. Para não criar vários templates, insira o mesmo código do template mais vezes, alterando o valor de `productIndex`.

**Exemplo 1:** se você tem um kit com 3 componentes e outro com 5 e quer usar o kit look nos dois, não é necessário criar um template para cada quantidade. Crie um template com 5 grupos de controles (`productIndex` de 1 até o número máximo), em que o número máximo é a quantidade de componentes do kit maior.

**Exemplo 2:** quando você usa `productIndex=0`, são exibidas as informações do próprio kit.

Você pode criar um template com a quantidade de `productIndex` que precisar. A página do produto exibe apenas os componentes de cada kit. Por exemplo, em um kit com 2 componentes, são mostrados 2 componentes. Em um kit com 4, são mostrados 4.
