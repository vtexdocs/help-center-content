---
title: 'Configurar promoção para marketplace'
id: tutorials_406
status: PUBLISHED
createdAt: 2017-04-27T22:06:28.854Z
updatedAt: 2024-11-11T16:46:25.421Z
publishedAt: 2024-11-11T16:46:25.421Z
firstPublishedAt: 2017-04-27T23:03:23.902Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: configuring-promotions-for-marketplaces
legacySlug: configurando-promocao-para-marketplace
locale: pt
subcategoryId: 1yTYB5p4b6iwMsUg8uieyq
---

O módulo de promoções da VTEX permite a criação de diferentes tipos de promoção, das mais clássicas às mais inovadoras. Entretanto, seu uso em marketplaces VTEX ou externos é restrito a alguns tipos específicos. Este tutorial explica como definir quais promoções serão aplicadas e quais as condições aplicáveis nesses cenários.

## Promoções disponíveis para marketplaces

Apenas [promoções regulares](/pt/docs/tracks/criar-promocao-regular) dos seguintes tipos funcionam em marketplaces:

- Promoção de frete grátis
- Promoção de frete percentual
- Promoção de preço percentual
- Tabela de preços

As configurações disponíveis para marketplaces VTEX são distintas das oferecidas para marketplaces externos. Por isso, o comportamento das promoções em outros marketplaces é ligeiramente diferente do usual.

### Promoções de frete grátis e percentual

Para este tipo de promoção, é importante ter em mente as seguintes informações:

- Uma vez que a promoção é criada e ativada pelo seller, ela não gera nenhum tipo de notificação para o marketplace. Cabe ao marketplace consultar o preço promocional.
- Para a promoção ser aplicada ao valor do frete, o marketplace deve simular o frete usando o endpoint `POST` `https://{accountName}.vtexcommercestable.com.br/api/fulfillment/pvt/orderForms/simulation?sc={salesChannel}&affiliateId={affiliateId}`.
- A promoção não será aplicada ao valor do produto se o marketplace utilizar o endpoint [List Freight Values](https://developers.vtex.com/docs/api-reference/logistics-api#get-/logistics/pvt/configuration/freights/-carrierId-/-cep-/values) da Logistics API para a consulta de fretes. Esse endpoint retorna apenas os fretes cadastrados na VTEX, sem considerar os efeitos promocionais.
- Os sellers determinam os limites de redução de preço que o marketplace pode aplicar sobre o frete cobrado. Caso o valor de redução ultrapasse o limite estabelecido, o pedido não é realizado.

### Promoções de preço percentual

Para este tipo de promoção, é importante ter em mente as seguintes informações:

- O marketplace não recebe a promoção em si, somente uma notificação por API informando que o preço sofreu alterações. Cabe ao marketplace consultar o preço promocional.
- Para a promoção ser aplicada ao valor do produto, o marketplace deve simular o preço do SKU usando o endpoint [Do OrderForm Simulation](https://developers.vtex.com/docs/api-reference/checkout-api#post-/api/checkout/pub/orderForms/simulation) da Checkout API.
- A promoção não será aplicada ao valor do produto se o marketplace utilizar o endpoint [Get Price](https://developers.vtex.com/docs/api-reference/pricing-api#get-/prices/-itemId-) da Pricing API para consulta de preços. Este endpoint retorna apenas os preços cadastrados na VTEX, sem considerar os efeitos promocionais.
- Os sellers determinam os limites da redução de preço que o marketplace pode aplicar sobre o valor total do pedido. Caso o valor de redução ultrapasse o limite estabelecido, o pedido não é realizado. Você pode alterar as configurações da sua loja na seção [Autorização de Pedidos](/pt/tutorial/como-funciona-a-autorizacao-de-pedidos--3MBK6CmKHAuUjMBieDU0pn?&utm_source=autocomplete#divergencia-de-valores).

### Configurações disponíveis

Existem diferenças entre as configurações disponíveis para marketplaces VTEX e para marketplaces externos. Veja na tabela abaixo quais funcionalidades se aplicam a cada caso.

> ⚠️ No caso de integrações externas, as configurações são únicas de cada marketplace, e estes decidem quais funcionalidades vão utilizar.

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

## Promoções indisponíveis para marketplaces

Verifique as promoções que não estão disponíveis para marketplaces:

* Desconto nominal
* Preço máximo por item
* Frete nominal
* Frete máximo
* Brinde
* Valor fidelidade
* Compre Junto
* Leve Mais Por Menos
* Desconto Progressivo
* Compre e Ganhe
* Campanha

### Configurações indisponíveis

Veja abaixo as configurações que não estão disponíveis para marketplaces:

| Nome | Descrição|
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cluster de clientes                                                | Desconto concedido caso o cliente esteja cadastrado no [cluster](/pt/docs/tutorials/como-criar-um-cluster-de-clientes) selecionado.                                        |
| Marketing tag                                                      | Utilizado para restringir a ativação da promoção caso a compra seja realizada pelo [módulo de Assinaturas da VTEX](/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453#).        |
| UTMs                                                               | Desconto concedido a depender do valor de um dado [parâmetro UTM](/pt/docs/tutorials/o-que-sao-utm-source-utm-campaign-e-utm-medium).                                             |
| Audiência de campanha                                              | Permite segmentar as promoções da sua loja a partir da definição de [públicos-alvo](/pt/docs/tutorials/audiencias-de-campanhas#publico-alvo) que atendem a critérios específicos. |
| Cupons                                                             | Código que permite aplicar promoções sobre o valor do carrinho.                                                                                                                                                          |
| Valor mínimo ou máximo do carrinho                                 | Aplicada levando em conta o valor do carrinho sem considerar demais promoções ou frete.                                                                                                                                  |
| Número de parcelas                                                 | Desconto concedido caso o número de parcelas selecionadas pelo cliente esteja no intervalo cadastrado.                                                                                                                   |
| Restrição de BIN                                                   | Desconto concedido caso o BIN do cartão esteja entre os números preenchidos.                                                                                                                                             |
| Meio de pagamento                                                  | Desconto concedido caso a forma de pagamento selecionada pelo cliente seja a mesma cadastrada na promoção.                                                                                                               |
| Primeira compra                                                    | Desconto concedido na primeira compra do cliente.                                                                                                                                                                        |
| Valor acumulado em compras                                         | Desconto concedido caso o total de todas as compras já realizadas pelo cliente esteja atendendo ao valor preenchido.                                                                                                     |
| Permitir acumular com preços manuais                               | Permite que a promoção seja aplicada a produtos cujos preços foram manualmente inseridos pelo televendas.                                                                                                                |
| Preço "de" e "por" são iguais ou Preço "de" e "por" são diferentes | Se refere aos valores do cadastro do produto.                                                                                                                                                                            |
| Filtro de sellers                                                  | Define para quais sellers a promoção será aplicada.                                                                                                                                                                      |
| Uso máximo da promoção por cliente                                 | Limita a quantidade de vezes que cada cliente poderá receber a promoção.                                                                                                                                                 |
| Uso máximo da promoção por loja                                    | Limita a quantidade de vezes em que a promoção será aplicada.                                                                                                                                                            |
| Uso máximo de cupom por produto                                    | Limita a quantidade de vezes em que o cupom será válido por produto.                                                                                                                                                     |

## Definir o contexto que a promoção será aplicada

Se necessário, é possível segmentar promoções para marketplaces específicos. Existem dois seletores que podem ser usados para obter este resultado:

- [Política comercial](/pt/docs/tutorials/criar-uma-politica-comercial): utilizado quando todos os marketplaces-alvo compartilham as mesmas configurações de canal de vendas (catálogo, preço e logística).
- [Afiliado](/pt/docs/tutorials/o-que-e-afiliado): utilizado para selecionar um ou mais marketplaces específicos, mesmo que não compartilhem as mesmas configurações de canal de vendas.

### Seleção por política comercial

1. Crie uma [promoção regular](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#).
2. Na seção **Política Comercial**, selecione as opções **Iguais a** e **Entregue por mim (Lojas de terceiros)**.
3. Em seguida, selecione as políticas comerciais desejadas.
4. Clique em `Salvar`.

### Seleção por afiliado

1. Crie uma [promoção regular](/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR/7FjbeZdE2KMwk5L1t98pZI#).
2. Preencha o campo **Afiliados** com o nome do afiliado relacionado ao marketplace desejado.
3. Na seção **Política Comercial**, selecione as opções **Iguais a** e **Entregue por mim (Lojas de terceiros)**.
4. Clique em `Salvar`.

> ⚠️ Uma vez que você crie a promoção, lembre-se de [reindexar os produtos afetados](/pt/docs/tutorials/manutencao-de-base-full-cleanup) no inicio e fim das promoções. Dessa forma, os seus produtos terão os preços atualizados.
