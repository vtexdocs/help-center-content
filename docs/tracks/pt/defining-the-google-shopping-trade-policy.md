---
title: 'Definição da política comercial'
id: 3AqbcsWrge8zLt0BC5CtGd
status: PUBLISHED
createdAt: 2021-04-14T17:58:41.545Z
updatedAt: 2024-08-06T17:51:23.468Z
publishedAt: 2024-08-06T17:51:23.468Z
firstPublishedAt: 2021-04-15T17:41:14.352Z
contentType: trackArticle
productTeam: Channels
slug: definicao-da-politica-comercial-google-shopping
locale: pt
trackId: 25Sl7iOqq58PGfVfTAo8Xw
trackSlugPT: configurar-integracao-com-o-google-shopping
---

Após a criação da sua conta no Google Merchant Center, o próximo passo da integração é definir a [política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE) que será usada. Ao [Configurar política comercial para marketplace](https://help.vtex.com/pt/tutorial/configurando-a-politica-comercial-para-marketplace/), você define quais produtos serão enviados ao Google Shopping e qual será o preço deles na plataforma.

Na maioria dos casos, recomendamos a escolha da política comercial principal (ID: 1), já que os resultados do Google Shopping direcionam o comprador para realizar a compra nas lojas dos anunciantes. Assim, a integração enviará para o Google todos os produtos disponíveis na sua loja, e com os mesmos preços anunciados.

Será necessário solicitar a criação de uma nova política comercial apenas se você:
- Quiser oferecer uma seleção de produtos diferente no Google Shopping.
- Precisar enviar preços diferentes para o Google Shopping.

Para [contratar políticas comerciais adicionais](https://help.vtex.com/pt/tutorial/contratacao-de-politica-comercial-adicional--61vuFOw4yGh6nwSmkLJL1X), basta solicitar via ticket em nosso [Suporte](https://help.vtex.com/pt/support) selecionando ação **Comercial** e o tipo de solicitação `Criação de Política Comercial`.

A contratação de política comercial adicional para integrar com [conector nativo](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex), [conector certificado (parceiro)](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) ou outras lojas VTEX é isenta de taxas.

## Envio de preços do produto

O [preço](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3N9xYhnampRQOrfaTAOxNu) do seu produto no Google Shopping é determinado na escolha da política comercial. É importante ter atenção a alguns pontos.

Se na sua política comercial existirem preços de/por (que na VTEX chamamos de [preço de lista](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) e [preço computado](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx#preco-computado)), o preço computado só será enviado para o Google Shopping caso seja habilitado no campo **“Enviar preços com e sem desconto (De/Por)”.**  

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

A ativação de desconto atrelado a um método de pagamento é realizada em duas etapas: a [configuração do desconto](#configurar-desconto), do método de pagamento e, posteriormente, a ativação dos descontos na [configuração do conector](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl). 

### Configurar desconto

Para configurar um desconto vinculado a um método de pagamento, é necessário seguir as seguintes documentações:  

1. [Set a discount using the checkout API](https://developers.vtex.com/docs/guides/set-a-discount-using-the-checkout-api) para inserir qual o método de pagamento desejado na variável `paymentSystemToCheckFirstInstallment` e simular uma carrinho de comprar para verificar se a forma de pagamento foi atualizada.  
2.  [Configurar desconto de preço à vista](https://help.vtex.com/pt/tutorial/configurar-desconto-de-preco-a-vista--7Lfcj9Wb5dpYfA2gKkACIt) para atrelar o SKU ao meio de pagamento.  
3. [Configurar desconto de preço à vista para Google Shooping](https://help.vtex.com/pt/tutorial/configurar-desconto-de-preco-a-vista-para-google-shopping--40K3R5d4NogMvCzIWdWt3e). 

Após seguir essas documentações, a ativação deverá ser realizada através da [Configuração do conector](https://help.vtex.com/pt/tracks/configurar-integracao-com-o-google-shopping--25Sl7iOqq58PGfVfTAo8Xw/wWyl0Njxgs5KfXvxYZJrl).

<div class="alert alert-warning">
  Quando há vários sellers vinculados a um produto na sua loja, para o Google Shopping a regra é anunciar a melhor oferta disponível.
  </div>

  <div class="alert alert-danger">
  Cada promoção criada só pode ter um método de pagamento atrelado para que o desconto seja enviado ao Google Shooping.
  </div>
