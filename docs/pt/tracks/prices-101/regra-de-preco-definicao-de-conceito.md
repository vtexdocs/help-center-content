---
title: 'Regra de preço - Definição de conceito'
id: 2rBirbpB7wLnei4dQ9KGMW
status: PUBLISHED
createdAt: 2019-07-04T13:52:56.900Z
updatedAt: 2020-02-13T15:43:50.011Z
publishedAt: 2020-02-13T15:43:50.011Z
firstPublishedAt: 2019-07-17T19:42:03.230Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: regra-de-preco-definicao-de-conceito
locale: pt
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

## Definição

Como mencionamos anteriormente, todo SKU deve ter um *preço base* cadastrado. No entanto, existe uma funcionalidade no módulo de Preços que possibilita a *modificação de um preço base para determinadas tabelas de preços*. Estes modificadores são as __regras de preço__.

As regras de preço permitem que você mude o preço de um SKU para apenas uma tabela de preço __sem alterar o preço base das demais__. Para isso, é necessário cadastrar uma regra de preço associada à tabela desejada.

Portanto, quando combinamos esta regra ao preço base de um SKU, temos um novo valor. Este será o __preço computado__ de um SKU dentro de uma tabela.

<div class="alert alert-info">
O uso das regras de preço é <strong>opcional</strong>. Caso algum SKU não tenha nenhum modificador associado a ele, seu preço para a tabela de preços em questão será o preço base cadastrado.
</div>

As regras de preço funcionam a partir de __cinco condições de configuração__: 

- Tabela de preços
- SKUs
- Agendamento
- Faixa de markup 
- Variação de preço

A *tabela de preços*, os *SKUs*, o* agendamento* e a *faixa de markup* determinam o universo em que a regra de preço será aplicada. Já a *variação de preço* é o modificador que vai alterar os preços dos SKUs.

## Exemplos

Vamos supor um cenário em que você queira vender seus SKUs da __categoria de Eletrônicos__ em um marketplace externo. Para isso, você pretende criar uma __regra de preço específica para esse contexto__.

Digamos que um dos televisores desta categoria tenha um __preço base de R$1000,00__. Caso sua estratégia defina uma __variação de preço de 20%__, essa porcentagem será aplicada no preço base. Logo, __o preço de venda no marketplace externo será de R$1200,00__.

Para configurar essa regra, o primeiro passo é decidir em qual __tabela de preços__ ela será aplicada. Esta tabela deve estar associada à política comercial que envia informações para o marketplace externo.

Como a sua estratégia visa modificar os preços __apenas da categoria de Eletrônicos__, é necessário indicar isto no cadastro da regra.

Por fim, você também deve decidir qual __variação de preço__ será aplicada por essa regra. Em nosso cenário, o modificador é de __20%__. Essa alteração será aplicada ao preço de __todos SKUs da categoria Eletrônicos__.
