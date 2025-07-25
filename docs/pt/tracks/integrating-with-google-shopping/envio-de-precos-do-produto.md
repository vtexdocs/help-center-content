---
title: 'Envio de preços do produto'
id: 1wZhEoyuWujmj0lKaWO71X
status: PUBLISHED
createdAt: 2024-09-13T18:31:27.381Z
updatedAt: 2024-11-01T13:50:33.954Z
publishedAt: 2024-11-01T13:50:33.954Z
firstPublishedAt: 2024-09-13T18:42:39.217Z
contentType: trackArticle
productTeam: Channels
slugEN: submitting-product-prices
locale: pt
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugPT: configurar-integracao-com-o-google-shopping
---

O [preço](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) do seu produto no Google Shopping é determinado na escolha da política comercial. É importante ter atenção a alguns pontos.

Se na sua política comercial existirem preços de/por (que na VTEX chamamos de [preço de lista](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) e [preço computado](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#preco-computado)), o preço computado só será enviado para o Google Shopping caso seja habilitado no campo `Enviar preços com e sem desconto (De/Por)`.    
Para que essas promoções apareçam no Google Shopping, é preciso que os produtos atendam aos seguintes requisitos no Merchant Center:  

- O preço base ou um valor mais alto precisa ter sido cobrado por 30 dias, consecutivos ou não, nos últimos 200 dias.  
- O preço base precisa ser válido.  
- O preço promocional precisa ser inferior ao preço base.  
- O desconto da promoção precisa ser superior a 5% e inferior a 90% em relação ao preço base.  

Com seus produtos seguindo todos os requisitos acima, a ferramenta aplica o valor promocional previamente configurado na VTEX, nas visualizações do Google Shopping.  

<div class="alert alert-warning">
  Caso exista uma promoção de desconto à vista (condicionada ao método de pagamento boleto ou pix), esse benefício será aplicado ao valor do produto antes do envio.
  </div>

## Desconto vinculado ao método de pagamento  

A ativação de desconto atrelado a um método de pagamento é realizada em duas etapas: a [configuração do desconto](#configurar-desconto), do método de pagamento e, posteriormente, a ativação dos descontos na [configuração do conector](/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl). 

### Configurar desconto

Para configurar um desconto vinculado a um método de pagamento, é necessário seguir as seguintes documentações:  

1. [Set a discount using the checkout API](https://developers.vtex.com/docs/guides/set-a-discount-using-the-checkout-api) para inserir qual o método de pagamento desejado na variável `paymentSystemToCheckFirstInstallment` e simular uma carrinho de comprar para verificar se a forma de pagamento foi atualizada.  
2.  [Configurar desconto de preço à vista](/pt/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt) para atrelar o SKU ao meio de pagamento.  
3. [Configurar desconto de preço à vista para Google Shooping](/pt/tutorial/configurar-desconto-de-preco-a-vista-para-google-shopping--40K3R5d4NogMvCzIWdWt3e).  

Após seguir essas documentações, a ativação deverá ser realizada através da [Configuração do conector](/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl).

<div class="alert alert-warning">
  Quando há vários sellers vinculados a um produto na sua loja, para o Google Shopping a regra é anunciar a melhor oferta disponível.
  </div>

  <div class="alert alert-danger">
  Cada promoção criada só pode ter um método de pagamento atrelado para que o desconto seja enviado ao Google Shooping.
  </div>
