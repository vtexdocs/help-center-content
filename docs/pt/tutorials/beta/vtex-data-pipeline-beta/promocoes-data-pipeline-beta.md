---
title: 'Promoções Data Pipeline'
id: 3WZ1syNucDFdvVhfKtA6Qd
status: PUBLISHED
createdAt: 2024-02-02T18:02:01.395Z
updatedAt: 2025-07-28T21:00:50.202Z
publishedAt: 2025-07-28T21:00:50.202Z
firstPublishedAt: 2024-05-27T19:26:59.739Z
contentType: tutorial
productTeam: Others
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: promotions
legacySlug: promocoes-data-pipeline-beta
locale: pt
subcategoryId: oMrzcOMVbBpH0reeMFHFg
---

O conjunto de dados de Promoções é constituído por quatro tabelas: `promotions_latest` e  `promotions_historical`. Essas tabelas abrange todo o ciclo de vida das campanhas promocionais.

Nesta seção você encontra as seguintes informações:

- [Características dos dados de promoções](#caracteristicas-dos-dados-de-promocoes)  
- [Tabela promotions_latest](#promotions-latest)  
- [Tabela promotions_historical(#promotions-historical)
- [Análise com dados de promoções](#analise-com-dados-de-promocoes)
- [Correlações com outros dados](#correlacoes-com-outros-dados)

## Características dos dados de promoções

| **Característica** | **Descrição** |
|:---:|:---:|
| **Origem do dado** | São originadas do [módulo de Promoções](https://help.vtex.com/pt/tracks/promocoes--6asfF1vFYiZgTQtOzwJchR) do Admin VTEX. |
| **Disponibilidade** | Os dados de Promoções podem ser acessados através do Admin da VTEX e também por [APIs de Promotions](https://developers.vtex.com/docs/guides/promotions-overview). |
| **Histórico** | Os dados são mantidos por dois anos, a partir de 2024 para clientes que já utilizam a plataforma VTEX. |
| **Menor intervalo de atualização possível** | Uma hora. |  

## Tabela promotions_latest

| Nome da coluna | Tipo de coluna | Descrição da coluna |
| ----- | ----- | ----- |
| batch\_id | character varying(256) | Identificador único do lote de dados, utilizado para rastrear e gerenciar a ingestão de dados. |
| account | character varying(256) | Conta a qual está vinculada a promoção. |
| id\_calculator\_configuration | character varying(256) | O ID da promoção. |
| calculator\_name | character varying(65535) | Nome da promoção. |
| calculator\_description | character varying(65535) | Descrição interna da promoção. |
| begin\_date\_utc | timestamp without time zone | Data de início da promoção (UTC). |
| end\_date\_utc | timestamp without time zone | Data de término da promoção (UTC). |
| last\_modified | timestamp without time zone | A última vez que a promoção foi alterada (UTC). |
| days\_ago\_of\_purchases | integer | Número de dias considerados para adicionar ao histórico de pedidos. |
| is\_active | boolean | Verdadeiro se a promoção estiver ativa no momento. |
| is\_archived | boolean | Verdadeiro se a promoção estiver arquivada no momento. |
| is\_featured | boolean | Verdadeiro se a promoção estiver em destaque no momento. |
| disable\_deal | boolean | Deprecado. Indica se uma oferta está desativada (true) ou não (false). |
| offset | numeric(18,0) | O intervalo de tempo a ser aplicado às datas de início e término da promoção. |
| activate\_gifts\_multiplier | boolean | Se configurado como verdadeiro, ativa o multiplicador de brindes. |
| new\_offset | numeric(18,0) | Novo intervalo de tempo em relação ao UTC em segundos. |
| max\_prices\_per\_items | super | Lista de preço máximo por itens. |
| cumulative | boolean | Determina se a promoção pode ser acumulada com outras promoções de mesmo tipo de desconto. |
| effect\_type | character varying(256) | O tipo de efeito de uma promoção. |
| discount\_type | character varying(256) | O tipo de desconto que será aplicado à promoção. |
| nominal\_shipping\_discount\_value | numeric(18,0) | Desconto exato a ser aplicado ao valor do frete. |
| absolute\_shipping\_discount\_value | numeric(18,0) | Valor máximo do frete. |
| nominal\_discount\_value | numeric(18,0) | Desconto exato a ser aplicado ao valor total do pedido. |
| nominal\_discount\_type | character varying(256) | Controla o comportamento do efeito NominalDiscount. Este campo só aceita dois valores de string: \-item: aplica o desconto nominal pretendido em cada item no carrinho. \-cart: mantém o comportamento atual, no qual todo pedido/carrinho recebe um desconto nominal que é distribuído entre os itens. |
| maximum\_unit\_price\_discount | numeric(18,0) | O preço máximo para cada item do pedido será o preço configurado. |
| percentual\_discount\_value | numeric(18,0) | Desconto percentual a ser aplicado sobre o valor total do pedido. |
| rebate\_percentual\_discount\_value | numeric(18,0) | Valor do desconto percentual do frete. |
| percentual\_shipping\_discount\_value | numeric(18,0) | Valor de desconto percentual que será aplicado ao valor do frete. |
| percentual\_tax | numeric(18,0) | Taxa percentual sobre o valor total do pedido. |
| shipping\_percentual\_tax | numeric(18,0) | Taxa percentual de frete sobre o valor total do pedido. |
| percentual\_discount\_value\_list1 | numeric(18,0) | Descontos válidos para os SKUs na listSku1BuyTogether, lista de descontos usada para promoções de Compre Junto. |
| percentual\_discount\_value\_list2 | numeric(18,0) | Equivalente a percentualDiscountValueList1. |
| skus\_gift | super | Objeto do SKU de brinde. Desconto total sobre o valor do produto definido como brinde. quantitySelectable: quantidade de SKUs de brinde. gifts: array com IDs de SKU de brinde.   |
| nominal\_reward\_value | numeric(18,0) | Valor nominal para programas de fidelidade. |
| percentual\_reward\_value | numeric(18,0) | Valor percentual para programas de fidelidade. |
| order\_status\_reward\_value | character varying(256) | Valor do benefício do status do pedido. |
| apply\_to\_all\_shippings | boolean | Especifica se a promoção se aplica a todos os tipos de envio ou apenas ao mais barato. |
| nominal\_tax | numeric(18,0) | Taxa nominal. |
| max\_pack\_value | numeric(18,0) | Valor máximo do pacote. |
| origin | character varying(256) | Origem da promoção: marketplace ou fulfillment.    |
| id\_seller\_is\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer seller no campo idSeller. Se estiver definido como falso, os sellers presentes neste campo não aplicarão a promoção. |
| ids\_sales\_channel | super | Lista de políticas comerciais que ativam uma promoção. |
| are\_sales\_channel\_ids\_exclusive | boolean | Se estiver definido como falso, esta promoção será aplicada a qualquer política comercial no campo idsSalesChannel. Se estiver definido como verdadeiro, as políticas comerciais presentes neste campo não aplicarão a promoção. |
| marketing\_tags | super | Tags de marketing da promoção. |
| marketing\_tags\_are\_not\_inclusive | boolean | Se estiver definido como falso, esta promoção será aplicada a qualquer tag de marketing no campo marketingTags. Se estiver definido como verdadeiro, as tags de marketing presentes neste campo não aplicarão a promoção. |
| payments\_methods | super | Array composto por todos os meios de pagamento. id: ID do meio de pagamento.  name: nome do meio de pagamento. |
| stores | super | Lista de lojas. |
| campaigns | super | Audiência de campanhas que ativam uma promoção. |
| stores\_are\_inclusive | boolean | Deprecado. Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer loja no campo stores. Se estiver definido como falso, as lojas presentes neste campo não aplicarão a promoção. |
| categories | super | Objeto composto pelas categorias que irão ativar ou desativar a promoção. id: ID da categoria name: nome da categoria. |
| categories\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada a todas categorias presentes no campo categories. Se estiver definido como falso, as categorias presentes neste campo não aplicarão a promoção. |
| brands | super | Objeto composto pelas marcas que irão ativar ou desativar a promoção. |
| brands\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada às marcas presentes no campo brands. Se estiver definido como falso, as marcas presentes neste campo não aplicarão a promoção. |
| products | super | Objeto composto pelos produtos que irão ativar ou desativar a promoção. |
| products\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer produto presente no campo products. Se estiver definido como falso, os produtos presentes neste campo não aplicarão a promoção. |
| skus | super | Objeto composto pelos SKUs que irão ativar ou desativar a promoção. |
| skus\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada aos SKUs presentes no campo SKUs. Se estiver definido como falso, os SKUs presentes neste campo não aplicarão a promoção. |
| collections1\_buy\_together | super | Coleções que irão gerar a promoção do tipo Compre Junto, Leve Mais por Menos, Desconto Progressivo, Compre e Ganhe. |
| collections2\_buy\_together | super | Coleções que irão gerar a promoção do tipo Compre Junto, Leve Mais por Menos, Desconto Progressivo ou Compre e Ganhe. |
| minimum\_quantity\_buy\_together | integer | Quantidade mínima para promoção Compre Junto. |
| quantity\_to\_affect\_buy\_together | integer | Quantidade que vai afetar a promoção Compre Junto. |
| enable\_buy\_together\_per\_sku | boolean | Ativar Compre Junto por SKU. |
| list\_sku1\_buy\_together | super | Array de objetos, cada unidade contendo ID e nome de um SKU para ser adicionado à primeira lista da promoção **Compre Junto**. Saiba mais sobre este tipo de promoção na documentação [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323).  ⮕  Objeto contendo o ID e o nome do SKU a ser adicionado à primeira lista da promoção **Compre Junto**.  Saiba mais sobre este tipo de promoção na documentação de [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323).  |
| list\_sku2\_buy\_together | super | Array de objetos, cada unidade contendo ID e nome de um SKU para ser adicionado à segunda lista da promoção **Compre Junto**. Saiba mais sobre este tipo de promoção na documentação [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323).  ⮕ Objeto contendo o ID e o nome do SKU a ser adicionado à segunda lista da promoção **Compre Junto**. Saiba mais sobre este tipo de promoção na documentação de [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323).  |
| coupon | super | Deprecado. Lista de cupons. |
| total\_value\_floor | numeric(18,0) | Valor mínimo do carrinho para ativar a promoção. |
| total\_value\_ceiling | numeric(18,0) | Valor máximo do carrinho para ativar a promoção. |
| total\_value\_include\_all\_items | boolean | Deprecado. Valor total incluindo todos os itens. |
| total\_value\_mode | character varying(256) | Define quais itens são considerados para calcular o valor total do carrinho. |
| collections | super | Array composto pelas coleções que irão ativar ou desativar a promoção. |
| collections\_is\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer coleção presente no campo collections. Se estiver definido como falso, as coleções presentes neste campo não aplicarão a promoção. |
| restrictions\_bins | super | O desconto será concedido se o BIN do cartão for fornecido. |
| card\_issuers | super | Lista de emissores de cartão. |
| total\_value\_purchase | numeric(18,0) | Valor total que um cliente deve ter em pedidos anteriores para ativar a promoção. |
| slas\_ids | super | O desconto será concedido se o método de envio for o mesmo que o indicado. |
| is\_sla\_selected | boolean | Aplica o desconto selecionado somente quando um dos métodos de envio definidos for selecionado pelo cliente. |
| is\_first\_buy | boolean | Indica se a promoção é válida apenas para o primeiro pedido do usuário. |
| first\_buy\_is\_profile\_optimistic | boolean | Aplica o desconto mesmo se o usuário não estiver logado. |
| compare\_list\_price\_and\_price | boolean | Indica se o **preço de lista** e o **preço** são iguais. |
| is\_different\_list\_price\_and\_price | boolean | Aplica a promoção apenas se o preço de lista e o preço forem diferentes. |
| zip\_code\_ranges | super | Faixa de CEP em que se aplica a promoção. |
| item\_max\_price | numeric(18,0) | A configuração do preço máximo para um item ativar a promoção. |
| item\_min\_price | numeric(18,0) | A configuração do preço mínimo para um item ativar a promoção. |
| installment | integer | Deprecado. Parcelas. |
| is\_min\_max\_installments | boolean | Define se a promoção será aplicada considerando valores mínimos e máximos para as parcelas. |
| min\_installment | integer | Valor mínimo da parcela. |
| max\_installment | integer | Valor máximo da parcela. |
| merchants | super | Lista de lojistas. |
| cluster\_expressions | super | Critérios para selecionar um cluster de clientes. Cada item neste array deve seguir o formato de uma função de igualdade ({propertyname}={value}) ou de uma função contains ({propertyname} contains {value}). Em ambas as opções, {propertyname} deve ser substituído pelo nome do campo na entidade de dados, e {value} deve ser substituído pelo valor definido no Master Data.  Saiba mais sobre esses critérios em [Como preencher o campo Cluster de clientes](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field). |
| pii\_cluster\_expressions | super | Expressões de cluster relacionadas às informações de identificação pessoal (PII) dos clientes. |
| payments\_rules | super | Lista de regras de pagamento. |
| gift\_list\_types | super | Tipo de brindes da lista. |
| products\_specifications | super | Lista de especificações de produtos. |
| affiliates | super | Identificador de pedidos do marketplace. O desconto será aplicado aos afiliados selecionados. |
| max\_usage | integer | Define quantas vezes a promoção pode ser usada. |
| max\_usage\_per\_client | integer | Define se a promoção pode ser usada várias vezes pelo cliente. |
| should\_distribute\_discount\_among\_matched\_items | boolean | Distribui o desconto entre os items correspondentes. |
| multiple\_use\_per\_client | boolean | Define se a promoção pode ser usada várias vezes pelo cliente. |
| type | character varying(256) | Define qual é o tipo da promoção ou indica se é uma taxa. Valores possíveis: regular [Promoção Regular](https://help.vtex.com/tutorial/regular-promotion--tutorials_327), combo [Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323), forThePriceOf [Leve Mais por Menos](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325), progressive [Desconto Progressivo](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324), buyAndWin [Compre e Ganhe](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322), maxPricePerItem (deprecado), campaign [Promoção de campanha](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume), tax (taxa), multipleEffects (efeitos múltiplos). |
| use\_new\_progressive\_algorithm | boolean | Indica se é usado um algoritmo progressivo. |
| percentual\_discount\_value\_list | super | Lista de valores de desconto percentual |
| max\_number\_of\_affected\_items | integer | Número máximo de itens afetados por uma promoção. |
| max\_number\_of\_affected\_items\_group\_key | character varying(256) | Número máximo de itens afetados por chave de grupo de uma promoção. |  

## Tabela promotions_historical

| Nome da coluna | Tipo de coluna | Descrição da coluna |
| ----- | ----- | ----- |
| operation | character varying(256) | A operação executada pelo autor. |
| batch\_id | character varying(256) | Identificador único do lote de dados, utilizado para rastrear e gerenciar a ingestão de dados. |
| account | character varying(256) | Conta a qual está vinculada a promoção. |
| author | character varying(512) | O autor da operação fornecida. |
| id\_calculator\_configuration | character varying(256) | O ID da promoção. |
| calculator\_name | character varying(1024)         | Nome da promoção. |
| calculator\_description | character varying(65535)         | Descrição interna da promoção. |
| begin\_date\_utc | timestamp without time zone | Data de início da promoção (UTC). |
| end\_date\_utc | timestamp without time zone | Data de término da promoção (UTC). |
| last\_modified | timestamp without time zone | A última vez que a promoção foi alterada (UTC). |
| days\_ago\_of\_purchases | integer | Número de dias considerados para adicionar ao histórico de pedidos. |
| is\_active | boolean | Verdadeiro se a promoção estiver ativa no momento. |
| is\_archived | boolean | Verdadeiro se a promoção estiver arquivada no momento. |
| is\_featured | boolean | Verdadeiro se a promoção estiver em destaque no momento. |
| disable\_deal | boolean | Deprecado. Indica se uma oferta está desativada (true) ou não (false). |
| offset | numeric(18,0) | O intervalo de tempo a ser aplicado às datas de início e término da promoção. |
| activate\_gifts\_multiplier | boolean | Se configurado como verdadeiro, ativa o multiplicador de brindes. |
| new\_offset | numeric(18,0) | Novo intervalo de tempo em relação ao UTC em segundos. |
| max\_prices\_per\_items | super | Lista de preço máximo por itens. |
| cumulative | boolean | Determina se a promoção pode ser acumulada com outras promoções de mesmo tipo de desconto. |
| effect\_type | character varying(256) | O tipo de efeito de determinada promoção. |
| discount\_type | character varying(256) | O tipo de desconto que será aplicado à promoção. |
| nominal\_shipping\_discount\_value | numeric(18,0) | Desconto exato a ser aplicado ao valor do frete. |
| absolute\_shipping\_discount\_value | numeric(18,0) | Valor máximo do frete. |
| nominal\_discount\_value | numeric(18,0) | Desconto exato a ser aplicado ao valor total do pedido. |
| nominal\_discount\_type | character varying(256) | Controla o comportamento do efeito NominalDiscount. Este campo só aceita dois valores de string: <ul>item: aplica o desconto nominal pretendido em cada item no carrinho. cart: mantém o comportamento atual, no qual todo pedido recebe um desconto nominal que é distribuído entre os itens.</ul> |
| maximum\_unit\_price\_discount | numeric(18,0) | O preço máximo para cada item do pedido será o preço configurado. |
| percentual\_discount\_value | numeric(18,0) | Desconto percentual a ser aplicado sobre o valor total do pedido. |
| rebate\_percentual\_discount\_value | numeric(18,0) | Valor do desconto percentual do frete. |
| percentual\_shipping\_discount\_value | numeric(18,0) | Valor de desconto percentual que será aplicado ao valor do frete. |
| percentual\_tax | numeric(18,0) | Taxa percentual sobre o valor total do pedido. |
| shipping\_percentual\_tax | numeric(18,0) | Taxa percentual sobre o valor total do pedido. |
| percentual\_discount\_value\_list1 | numeric(18,0) | Descontos válidos para os SKUs na listSku1BuyTogether, lista de descontos usada para promoções de Compre Junto. |
| percentual\_discount\_value\_list2 | numeric(18,0) | Equivalente a percentualDiscountValueList1. |
| skus\_gift | super | Objeto do SKU de brinde. Desconto total sobre o valor do produto definido como brinde. <ul> quantitySelectable: quantidade de SKUs de brinde. gifts: array com IDs de SKU de brinde. </ul>   |
| nominal\_reward\_value | numeric(18,0) | Valor nominal para programas de fidelidade. |
| percentual\_reward\_value | numeric(18,0) | Valor percentual para programas de fidelidade. |
| order\_status\_reward\_value | character varying(256) | Valor do benefício do status do pedido. |
| apply\_to\_all\_shippings | boolean | Especifica se a promoção se aplica a todos os tipos de envio ou apenas ao mais barato. |
| nominal\_tax | numeric(18,0) | Taxa nominal. |
| max\_pack\_value | numeric(18,0) | Valor máximo do pacote. |
| origin | character varying(256) | Origem da promoção: marketplace ou fulfillment.    |
| id\_seller\_is\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer seller no campo idSeller. Se estiver definido como falso, os sellers presentes neste campo não aplicarão a promoção. |
| ids\_sales\_channel | super | Lista de políticas comerciais que ativam uma promoção. |
| are\_sales\_channel\_ids\_exclusive | boolean | Se estiver definido como falso, esta promoção será aplicada a qualquer política comercial no campo idsSalesChannel. Se estiver definido como verdadeiro, as políticas comerciais presentes neste campo não aplicarão a promoção. |
| marketing\_tags | super | Tags de marketing da promoção. |
| marketing\_tags\_are\_not\_inclusive | boolean | Se estiver definido como falso, esta promoção será aplicada a qualquer tag de marketing no campo marketingTags. Se estiver definido como verdadeiro, as tags de marketing presentes neste campo não aplicarão a promoção. |
| payments\_methods | super | Array composto por todos os meios de pagamento. <ul>id: ID do meio de pagamento. name: nome do meio de pagamento.</ul> |
| stores | super | Lista de lojas. |
| campaigns | super | Audiência de campanhas que ativam uma promoção. |
| stores\_are\_inclusive | boolean | Deprecado. Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer loja no campo stores. Se estiver definido como falso, as lojas presentes neste campo não aplicarão a promoção. |
| categories | super | Objeto composto pelas categorias que irão ativar ou desativar a promoção. <ul>id: ID da categoria. name: nome da categoria.</ul> |
| categories\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer categoria no campo categories. Se estiver definido como falso, as categorias presentes neste campo não aplicarão a promoção. |
| brands | super | Objeto composto pelas marcas que irão ativar ou desativar a promoção. |
| brands\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada às marcas presentes no campo brands. Se estiver definido como falso, as marcas presentes neste campo não aplicarão a promoção. |
| products | super | Objeto composto pelos produtos que irão ativar ou desativar a promoção. |
| products\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada aos produtos presentes no campo products. Se estiver definido como falso, os produtos presentes neste campo não aplicarão a promoção. |
| skus | super | Objeto composto pelos SKUs que irão ativar ou desativar a promoção. |
| skus\_are\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada aos SKUs presentes no campo SKUs. Se estiver definido como falso, os SKUs presentes neste campo não aplicarão a promoção. |
| collections1\_buy\_together | super | Coleções que irão gerar a promoção do tipo Compre Junto, Leve Mais por Menos, Desconto Progressivo, Compre e Ganhe. |
| collections2\_buy\_together | super | Coleções que irão gerar a promoção do tipo Compre Junto, Leve Mais por Menos, Desconto Progressivo ou Compre e Ganhe. |
| minimum\_quantity\_buy\_together | integer | Quantidade mínima para promoção Compre Junto. |
| quantity\_to\_affect\_buy\_together | integer | Quantidade para a promoção Compre Junto. |
| enable\_buy\_together\_per\_sku | boolean | Ativar Compre Junto por SKU. |
| list\_sku1\_buy\_together | super | Array de objetos, cada unidade contendo ID e nome de um SKU para ser adicionado à primeira lista da promoção **Compre Junto**.  Saiba mais sobre este tipo de promoção na documentação [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323). ⮕ Objeto contendo o ID e o nome do SKU a ser adicionado à primeira lista da promoção **Compre Junto**. Saiba mais sobre este tipo de promoção na documentação de [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323).  |
| list\_sku2\_buy\_together | super | Array de objetos, cada unidade contendo ID e nome de um SKU para ser adicionado à segunda lista da promoção **Compre Junto**.  Saiba mais sobre este tipo de promoção na documentação [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323).  ⮕ Objeto contendo o ID e o nome do SKU a ser adicionado à segunda lista da promoção **Compre Junto**. Saiba mais sobre este tipo de promoção na documentação de [Criar promoção Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323).   |
| coupon | super | Deprecado. Lista de cupons. |
| total\_value\_floor | numeric(18,0) | Valor mínimo do carrinho para ativar a promoção. |
| total\_value\_ceiling | numeric(18,0) | Valor máximo do carrinho para ativar a promoção. |
| total\_value\_include\_all\_items | boolean | Deprecado. Valor total incluindo todos os itens. |
| total\_value\_mode | character varying(256) | Define quais itens são considerados para calcular o valor total do carrinho. |
| collections | super | Array composto pelas coleções que irão ativar ou desativar a promoção. |
| collections\_is\_inclusive | boolean | Se estiver definido como verdadeiro, esta promoção será aplicada a qualquer coleção presente no campo collections. Se estiver definido como falso, as coleções presentes neste campo não aplicarão a promoção. |
| restrictions\_bins | super | O desconto será concedido se o BIN do cartão for fornecido. |
| card\_issuers | super | Lista de emissores de cartão. |
| total\_value\_purchase | numeric(18,0) | Valor total que um cliente deve ter em pedidos anteriores para ativar a promoção. |
| slas\_ids | super | O desconto será concedido se o método de envio for o mesmo que o indicado. |
| is\_sla\_selected | boolean | Aplica o desconto selecionado somente quando um dos métodos de envio definidos for selecionado pelo cliente. |
| is\_first\_buy | boolean | Indica se a promoção é válida apenas para o primeiro pedido do usuário. |
| first\_buy\_is\_profile\_optimistic | boolean | Aplica o desconto mesmo se o usuário não estiver logado. |
| compare\_list\_price\_and\_price | boolean | Indica se o **preço de lista** e o **preço** são iguais. |
| is\_different\_list\_price\_and\_price | boolean | Aplica a promoção apenas se o preço de lista e o preço forem diferentes. |
| zip\_code\_ranges | super | Faixa de CEP em que se aplica a promoção. |
| item\_max\_price | numeric(18,0) | A configuração do preço máximo para um item ativar a promoção. |
| item\_min\_price | numeric(18,0) | A configuração do preço mínimo para um item ativar a promoção. |
| installment | integer | Deprecado. Parcelas. |
| is\_min\_max\_installments | boolean | Define se a promoção será aplicada considerando valores mínimos e máximos para parcelas. |
| min\_installment | integer | Valor mínimo da parcela. |
| max\_installment | integer | Valor máximo da parcela. |
| merchants | super | Lista de lojistas. |
| cluster\_expressions | super | Critérios para selecionar um cluster de clientes. Cada item neste array deve seguir o formato de uma função de igualdade ({propertyname}={value}) ou de uma função contains ({propertyname} contains {value}). Em ambas as opções, {propertyname} deve ser substituído pelo nome do campo na entidade de dados, e {value} deve ser substituído pelo valor definido no Master Data.  Saiba mais sobre esses critérios em [Como preencher o campo Cluster de clientes](https://help.vtex.com/tutorial/creating-promotion-for-a-customer-cluster--tutorials_342#filling-in-the-customer-cluster-field).  |
| pii\_cluster\_expressions | super | Expressões de cluster relacionadas às informações de identificação pessoal (PII) dos clientes. |
| payments\_rules | super | Lista de regras de pagamento. |
| gift\_list\_types | super | Tipo de brindes da lista. |
| products\_specifications | super | Lista de especificações de produtos. |
| affiliates | super | Identificador de pedidos do marketplace. O desconto será aplicado aos afiliados selecionados. |
| max\_usage | integer | Define quantas vezes a promoção pode ser usada. |
| max\_usage\_per\_client | integer | Define se a promoção pode ser usada várias vezes pelo cliente. |
| should\_distribute\_discount\_among\_matched\_items | boolean | Distribui o desconto entre os items correspondentes. |
| multiple\_use\_per\_client | boolean | Define se a promoção pode ser usada várias vezes pelo cliente. |
| type | character varying(256) | Define qual é o tipo da promoção ou indica se é uma taxa. Valores possíveis: regular [Promoção Regular](https://help.vtex.com/tutorial/regular-promotion--tutorials_327), combo [Compre Junto](https://help.vtex.com/en/tutorial/buy-together--tutorials_323), forThePriceOf [Leve Mais por Menos](https://help.vtex.com/en/tutorial/creating-a-more-for-less-promotion--tutorials_325), progressive [Desconto Progressivo](https://help.vtex.com/en/tutorial/progressive-discount--tutorials_324), buyAndWin [Compre e Ganhe](https://help.vtex.com/en/tutorial/buy-one-get-one--tutorials_322), maxPricePerItem (deprecado), campaign [Promoção de campanha](https://help.vtex.com/en/tutorial/campaign-promotion--1ChYXhK2AQGuS6wAqS8Ume), tax (taxa), multipleEffects (efeitos múltiplos). |
| use\_new\_progressive\_algorithm | boolean | Indica se é usado um algoritmo progressivo. |
| percentual\_discount\_value\_list | super | Lista de valores de desconto percentual. |
| max\_number\_of\_affected\_items | integer | Número máximo de itens afetados por uma promoção. |
| max\_number\_of\_affected\_items\_group\_key | character varying(256) | Número máximo de itens afetados por chave de grupo de uma promoção. |

## Análise com dados de Promoções

Veja a seguir alguns exemplos de análises com o conjunto de sados de promoções:

**- Análise de ciclo de vida da promoção:** compare a frequência e duração das promoções para avaliar a longevidade e o sucesso das campanhas.  
**- Taxa de reativação de promoções:** analise quantas promoções são reativadas para determinar a eficácia de reutilizar ou revisar campanhas anteriores.  
**- Tendências de remoção de promoções:** rastreie o número e os tipos de promoções descontinuadas para entender os motivos da remoção e ajustar futuras estratégias.  
**- Impacto de novas promoções:** compare os lançamentos de promoções com as vendas e o tráfego para avaliar seu impacto imediato.  

## Correlações com outros dados

Veja a seguir a correlação do conjunto de dados de promoções, com alguns outros conjuntos de dados:

**- Dados de [pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv):** a análise da influência das promoções nos pedidos ajuda a compreender seu impacto nas vendas.  
**- Dados de [inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2):** a correlação com o inventário é crucial para garantir a disponibilidade de produtos promovidos.  
**- Análises de marketing e publicidade:** a integração com esses dados permite medir a efetividade das promoções em atrair tráfego e engajamento.
**- Dados de [navegação no Site](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd):** analisar o efeito das promoções na navegação fornece insights sobre o comportamento do cliente e a eficácia da colocação das promoções. 

### Conheça outros Conjuntos de dados

- [Catálogo](https://help.vtex.com/tutorial/catalogo-data-pipeline--7ARDELPaugrBu5dZT7Vx2b)
- [Inventário](https://help.vtex.com/tutorial/inventario-data-pipeline-beta--2IvKMZV9SNrE6ipBRQr8h2)
- [Navegação](https://help.vtex.com/tutorial/navegacao-data-pipeline-beta--4X4hK0zdIHN0Xn5x2MLYYd) 
- [Pedidos](https://help.vtex.com/tutorial/pedidos-data-pipeline-beta--2f3GlRJ5L5IRGVIxOmzrFv) 
- [Pagamentos](https://help.vtex.com/tutorial/pagamentos-data-pipeline-beta--7LWkFaA1jPabzc5JAt1rGs)  
- [Preços](https://help.vtex.com/tutorial/precos-data-pipeline-beta--3NMGJ8dtv73Bwvo9PSz1fz)   
- [Vale-presente](https://help.vtex.com/pt/tutorial/vale-presente-data-pipeline--4XAnyc4scy3OG6RdnD7OEf)
[Logs do Bridge](https://help.vtex.com/tutorial/logs-do-bridge-data-pipeline--2RFVJZL19nsWBSB4IXA0Z)

