---
title: 'Controles do template de prateleira'
id: tutorials_550
status: ARCHIVED
createdAt: 2017-04-27T22:01:02.387Z
updatedAt: 2022-09-08T16:44:04.446Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:03:39.005Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: shelf-template-controls
locale: pt
legacySlug: controles-do-template-de-prateleira
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

O sistema da VTEX disponibiliza alguns controles para a criação de prateleiras.

Os atributos dos produtos podem ser armazenados em variáveis, e estas são usadas em todo template. Para declarar as variáveis e receber um atributo de um produto, utilize o seguinte comando: `#set ($variável=$atributo)`

### Exemplos

- `#set($id = $product.Id)`  
- `#set($uri = $product.Uri)`  
- `#set($escapedName = $product.HtmlEscapedName)`  
- `#set($evaluationRate = $product.EvaluationRate)`  

### Produto e SKU

`$product.Id`

Mostra o ID do produto.

`$product.EscapedName`

Mostra o nome do produto.

`$product.DescriptionShort`

Mostra uma breve descrição do produto.

`$product.Uri`

Mostra o link do produto.

`$product.GetImageTag(número correspondente à imagem)`

Mostra a imagem e o tipo de imagem desejada, seguindo esta lista de tipos de imagem:

- ImagemProdutoVitrinePequena (Tamanho: 65×65) = 1;
- ImagemProdutoVitrineMedia (Tamanho: 90×90) = 29;
- ImagemProdutoVitrineGrande (Tamanho: 130×130)= 30;
- ImagemProdutoPrincipal (Tamanho: 250×250)= 2;
- ImagemProdutoThumb (Tamanho: 45×45)= 3;
- ImagemProdutoZoom (Tamanho: 344×344)= 10;
- Arquivo = 11;
- ManualProduto = 12.

**Obs:** _Os tamanhos das imagens são de acordo com o layout da Loja_

`$product.ProductField(IdField)`

Mostra o valor de um Campo Produto passando como parâmetro o ID deste campo.

### Preço

`$product.ListPrice`

Mostra o preço “De” do produto.

`$product.BestPrice`

Mostra o melhor preço do produto.

`$product.HasBestPrice`

Indica se existe melhor preço para o produto (usado em condicionais).

`$product.NumbersOfInstallment`

Mostra a quantidade de parcela da melhor condição de pagamento do produto, ou seja, a maior parcela sem juros para esse produto.

`$product.InstallmentValue`

Mostra o valor da parcela da melhor condição de pagamento do produto, ou seja, o valor da maior parcela sem juros para esse produto.

`$product.MaxNumbersOfInstallment`

Mostra a quantidade de parcela da maior condição de pagamento do produto, ou seja, a maior parcela com ou sem juros para esse produto.

`$product.MaxInstallmentValue`

Mostra o valor da parcela da maior condição de pagamento do produto, ou seja, o valor da maior parcela com ou sem juros para esse produto.

`$product.BestPricePlusTax`

Mostra o preço MAIS as taxas aplicadas a ele.

**Obs**: _Os valores das taxas que forem configuradas por região, ou seja, utilizando faixas de CEP, não serão exibidas nas prateleiras. Se existir mais de uma taxa que contemple o mesmo produto, os valores serão somados e exibidos pelo controle._

`$product.ListPriceMinusBestPrice`

Mostra a diferença (em espécie) do preço “De” para o melhor preço do produto.

`$product.ListPriceMinusBestPriceInPercent`

Mostra a diferença (em porcentagem) do preço “De” para o melhor preço do produto.

### Departamento e Categoria

`$product.DepartmentName`

Mostra o nome do departamento do produto.

`$product.DepartmentLink`

Mostra o link do departamento do produto.

`$product.CategoryName`

Mostra o nome do categoria do produto.

`$product.CategoryLink`

Mostra o link do categoria do produto.

### Marca

`$product.BrandName`

Mostra o nome da marca. Ex.: "Sucos Oliveira"

`$product.Brand`

Mostra a marca do produto em formato indicado para montar links. Ex: "sucos-oliveira" 

`$product.BrandLink`

Mostra o link da marca.

### Botão de Compra

`$product.BottomBuyAllSku`

Inclui um botão de compra para adicionar à prateleira de listas, onde o produto com especificação adicionado pelo cliente é enviado diretamente para o carrinho. Se o produto em questão já estiver sido comprado para a lista, uma classe específica será adicionada ao elemento. Dessa forma, será possível customizar o layout também para esse status.

_OBS: Controle deve ser adicionado ao template de prateleira utilizado no template de página “Lista-Prateleira”._

`$product.BottomBuy`

Inclui um botão de compra na vitrine que leva o cliente direto para o carrinho, caso exista somente 1 SKU.

`$product.ButtonBuyModal(false,true)`

Inclui um botão de compra que insere o produto no carrinho e mantém o cliente na vitrine.

_OBS: O controle acima necessita do controle `$product.AmountInCart` para adicionar um textbox de quantidade desejada para adicionar no carrinho._

`$product.AmountInCart`

Insere um elemento textbox para definir a quantidade desejada do produto que será adicionado ao carrinho.

_OBS: Este controle é usado em conjunto com o controle `$product.ButtonBuyModal(false,true)`_

### Outros

`$product.EvaluationRate`

Mostra a classificação de avaliação do produto.

`$product.HightLight`

Mostra as coleções de destaques na qual o produto faz parte.

`$product.DiscountHightLight`

Mostra as promoções com destaque das quais o produto faz parte.

_OBS: Caso a promoção tenha alguma condição de frete, forma de pagamento ou cluster, não será apresentada até que essas condições sejam atendidas_

`$product.IsInStock`

Indica se o produto tem itens em estoque (usado em condicionais).

`$product.Tax`

Mostra as taxas cadastradas para o produto.

`$product.QuickView`

Mostra o botão espiar.

`$product.Compare`

Mostra o check box para selecionar os produtos que serão comparados.

`$product.BestRewardValue`

Mostra o valor referente ao campo “Valor para Fidelidade”, do formulário do SKU.

`$product.PercentBougthAndBought`

Mostra o valor percentual em prateleiras do tipo “Quem comprou comprou também”.

`$product.PercentBoughtAlso`

Mostra o valor percentual em prateleiras do tipo “Quem viu comprou também”.

`$product.PercentViewedAlso`

Mostra o valor percentual em prateleiras do tipo “Quem viu viu também”.

`$product.InsertSku`

Mostra a quantidade individual dos produtos da vitrine e um checkbox para cada SKU do produto permitindo selecionar quais SKUs serão adicionados à lista. Para adicionar mais de um mesmo SKU se faz necessário alterar a quantidade dentro da caixa e depois selecionar o checkbox referente ao SKU. Caso seja alterado a quantidade e o checkbox de um SKU já estiver selecionado, a quantidade deste SKU não será alterada, apenas dos próximos SKUs selecionados após a alteração da quantidade na caixa.


