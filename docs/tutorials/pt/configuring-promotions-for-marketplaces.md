---
title: Configurar promoção para marketplace
id: tutorials_406
status: PUBLISHED
createdAt: 2017-04-27T22:06:28.854Z
updatedAt: 2023-01-26T18:41:34.664Z
publishedAt: 2023-01-26T18:41:34.664Z
firstPublishedAt: 2017-04-27T23:03:23.902Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slug: configurar-promocao-para-marketplace
legacySlug: configurando-promocao-para-marketplace
subcategory: 1yTYB5p4b6iwMsUg8uieyq
---

O módulo de promoções da VTEX permite a criação de diferentes tipos de promoção, das mais clássicas às mais inovadoras. Entretanto, seu uso em marketplaces VTEX ou externos é restrito a alguns tipos específicos. Este tutorial explica como definir quais promoções serão aplicadas e quais as condições aplicáveis nesses cenários.

## Promoções disponíveis para marketplaces

Apenas [promoções regulares](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI) dos seguintes tipos funcionam em marketplaces:

- Promoção de frete grátis
- Promoção de frete percentual
- Promoção de preço percentual

As configurações disponíveis para marketplaces VTEX são distintas das oferecidas para marketplaces externos. Por isso, o comportamento das promoções em outros marketplaces é ligeiramente diferente do usual.

### Promoções de frete grátis e percentual

Para este tipo de promoção, é importante ter em mente as seguintes informações:

- Alguns marketplaces utilizam sua própria tabela de frete. Isso impede que uma promoção de frete seja aplicada a um pedido, já que o marketplace não consulta o valor do frete cadastrado na VTEX.
- Para a promoção ser aplicada ao valor do frete, o marketplace deve simular o frete usando o endpoint `POST` `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}`.
- A promoção não será aplicada ao valor do produto se o marketplace utilizar o endpoint [List Freight Values](https://developers.vtex.com/docs/api-reference/logistics-api#get-/logistics/pvt/configuration/freights/-carrierId-/-cep-/values) da Logistics API para a consulta de fretes. Esse endpoint retorna apenas os fretes cadastrados na VTEX, sem considerar os efeitos promocionais.
- Os sellers determinam os limites de redução de preço que o marketplace pode aplicar sobre o frete cobrado. Caso o valor de redução ultrapasse o limite estabelecido, o pedido não é realizado.

### Promoções de preço percentual

Para este tipo de promoção, é importante ter em mente as seguintes informações:

- O marketplace não recebe a promoção em si, somente uma notificação por API informando que o preço sofreu alterações. Cabe ao marketplace consultar o preço promocional.
- Para a promoção ser aplicada ao valor do produto, o marketplace deve simular o preço do SKU usando o endpoint [Do OrderForm Simulation](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) da Checkout API.
- A promoção não será aplicada ao valor do produto se o marketplace utilizar o endpoint [Get Price](https://developers.vtex.com/docs/api-reference/pricing-api#get-/prices/-itemId-) da Pricing API para consulta de preços. Este endpoint retorna apenas os preços cadastrados na VTEX, sem considerar os efeitos promocionais.
- Os sellers determinam os limites da redução de preço que o marketplace pode aplicar sobre o valor total do pedido. Caso o valor de redução ultrapasse o limite estabelecido, o pedido não é realizado. Você pode alterar as configurações da sua loja na seção [Autorização de Pedidos](https://help.vtex.com/pt/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn?&utm_source=autocomplete#divergencia-de-valores).

### Configurações disponíveis

Existem diferenças entre as configurações disponíveis para marketplaces VTEX e para marketplaces externos. Veja na tabela abaixo quais funcionalidades se aplicam a cada caso.

<div class = "alert alert-warning">
  <p><b>Importante:</b> no caso de integrações externas, as configurações são únicas de cada marketplace, e estes decidem quais funcionalidades vão utilizar.</p>
</div>

| Nome  | Descrição      | Disponível para marketplace VTEX? | Disponível para marketplace externo? |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------ |
| Nome| Nome da promoção| Sim| Sim|
| Status| Opção que define se a promoção está ativa ou inativa.| Sim| Sim|
| Descrição| Descrição interna da promoção| Sim| Sim|
| Permitir acumular promoções   | Permite que mais de uma promoção, independentemente do tipo de desconto, seja concedida ao mesmo tempo.| Sim| Sim|
| Desconto Nominal| Desconto que será concedido ao total do carrinho.| Sim| Sim|
| Validade| Data e hora de início e de fim da promoção.| Sim| Sim|
| Frete percentual| Percentual de desconto que será concedido ao valor do frete.| Sim| Sim|
| Tabela de preços promocionais | Os preços da tabela de preços podem ser utilizados como promoção. O preço promocional de cada SKU será o preço correspondente na tabela de preços selecionada. | Sim| Sim|
| Service Level Agreement (SLA) | Especificação de todos os serviços da VTEX. Aqui é incluído os possíveis tipos de entrega.| Sim| Não|
| O CEP de entrega deve         | O desconto será concedido caso o CEP esteja atendendo à regra configurada.| Sim| Não|
| Será aplicado na Marca| O desconto será aplicado nas Marcas selecionadas.| Sim| Sim|
| Será aplicado na Categoria    | O desconto será aplicado nas Categorias selecionadas.| Sim| Sim|
| Será aplicado no Produto| O desconto será aplicado nos Produtos selecionados.| Sim| Sim|
| Será aplicado nos SKUs| O desconto será aplicado nos SKUs selecionados.| Sim| Sim|
| Afiliados| Identificador de pedidos do marketplace. O desconto será aplicado nos afiliados selecionados.| Sim| Sim|
| Canais de venda| A promoção será aplicada a uma lista de canais de venda.| Sim| Sim|
| Valor do item entre| Estabelece as políticas comerciais válidas para a promoção.| Sim| Sim|

## Definindo onde a promoção será aplicada

Se necessário, é possível segmentar promoções para marketplaces específicos. Existem dois seletores que podem ser usados para obter este resultado:

- [Política comercial](https://help.vtex.com/pt/tutorial/o-que-e-uma-politica-comercial--563tbcL0TYKEKeOY4IAgAE): utilizado quando todos os marketplaces-alvo compartilham as mesmas configurações de canal de vendas (catálogo, preço e logística).
- [Afiliado](https://help.vtex.com/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0): utilizado para selecionar um ou mais marketplaces específicos, mesmo que não compartilhem as mesmas configurações de canal de vendas.

### Seleção por política comercial

1. Crie uma [promoção regular](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#).
2. Na seção **Política Comercial**, selecione as opções **Iguais a** e **Entregue por mim (Lojas de terceiros)**.
3. Em seguida, selecione as políticas comerciais desejadas.
4. Clique em **Salvar**.

### Seleção por afiliado

1. Crie uma [promoção regular](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#).
2. Preencha o campo **Afiliados** com o nome do afiliado relacionado ao marketplace desejado.
3. Na seção **Política Comercial**, selecione as opções **Iguais a** e **Entregue por mim (Lojas de terceiros)**.
4. Clique em **Salvar**.

<div class = "alert alert-warning">
  <p>Uma vez que você crie a promoção, lembre-se de <a href = "https://help.vtex.com/pt/tutorial/entendendo-a-manutencao-da-base-de-dados--34P9LGs7BCIQK6acQom802">reindexar os produtos afetados</a>. Dessa forma, os seus produtos terão os preços atualizados.</p>
</div>
