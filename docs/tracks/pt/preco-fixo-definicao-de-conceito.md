---
title: Preço Fixo - Definição de conceito
id: 3HxF2u5VwidqnUGnFoKdDy
status: PUBLISHED
createdAt: 2019-07-04T13:53:27.780Z
updatedAt: 2021-05-26T17:20:58.165Z
publishedAt: 2021-05-26T17:20:58.165Z
firstPublishedAt: 2019-07-17T19:42:19.813Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slug: preco-fixo-definicao-de-conceito
trackId: 6f8pwCns3PJHqMvQSugNfP
trackSlugPT: precos-101
---

## Definições

O __preço fixo__ é um preço que se sobrepõe a todas as outras configurações de preços existentes numa tabela de preços.  

Desse modo, o preço fixo se sobrepõe ao __preço base__, mesmo em casos que uma __regra de preço__ tenha sido configurada. 

Isso significa que o preço fixo tem uma prioridade sobre o preço base e a regra de preço definida para uma tabela.

<div class="alert alert-warning">
  <p>Apenas <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3g39iXkQza4AW7C7L814mj">preços fixos</a> são utilizados nas nossas integrações nativas com marketplaces. Outros cenários previstos na <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/7GptzvlPDVM11ojEjywIQx">arquitetura do sistema de preços</a> estão disponíveis apenas para marketplace VTEX-VTEX.</p>
</div>

## Funcionalidades 

O preço fixo conta com três funcionalidades:

- Agendamento
- Quantidade mínima de itens no carrinho
- Preço de lista

O __Agendamento__ permite que um preço fixo seja válido por um determinado período de tempo. Após a data final do agendamento, a configuração anterior de preço volta a valer como preço computado.

Já a __Quantidade mínima de itens no carrinho__ determina que um preço fixo será ativado quando o cliente incluir um certo número de itens no carrinho. Caso você escolha preencher o campo de __quantidade mínima__ com o valor __1__, o preço fixo será exibido na vitrine como o preço de venda do SKU. Entretanto, se você escolher um valor maior que __1__, o preço fixo será aplicado apenas quando a quantidade escolhida de itens for adicionada ao carrinho.

Por fim, temos o __Preço de lista__. Este preço funciona como um valor sugerido pelo qual um SKU poderia ser vendido. A ideia é apresentar o preço de lista junto ao __preço de venda__, para mostrar ao consumidor que o SKU está sendo vendido por um preço __abaixo__ do sugerido. Normalmente, o preço de lista é conhecido como o __“preço de”__. Já o preço de venda é chamado de __“preço por”__.  

## Agendamento

Digamos que você tenha uma loja de roupas e queira fazer uma queima de estoque de uma coleção antiga de camisetas. O objetivo é vender o máximo de itens o quanto antes.  

Um possível uso do agendamento seria estabelecer um novo preço para os seus SKUs durante 48 horas. 

Desse modo, ao final do período, os itens voltariam à sua configuração de preço inicial.

## Item mínimo no carrinho 

Agora, a situação é que você é dono de uma loja que vende artigos pet. Digamos que você queira criar uma ação para incentivar a venda de uma nova marca de rações.

Neste caso, você pode definir um preço fixo para que um item seja comprado em grandes quantidades. Dessa maneira, os clientes que comprarem cinco ou mais pacotes de ração recebem um desconto no preço unitário de cada item:

- Preço unitário do pacote: R$100,00;
- Preço unitário do pacote quando cinco ou mais itens são colocados no carrinho: R$ 85,00.

## Preço de lista

Vamos analisar um cenário em que você compre seus SKUs no atacado e que o seu fornecedor recomende um valor de R$ 100,00 como preço de venda para cada item. Porém, você pode optar por vender cada SKU por R$ 80,00, um preço abaixo do sugerido. Desse modo, o __preço de lista__ seria exibido na vitrine como __De: R$ 100,00__ e o __preço fixo__ seria apresentado como __Por: R$ 80,00__.

## Concorrência entre Preços Fixos

É possível definir mais de um preço fixo para a mesma tabela de preços. __Caso exista uma concorrência dos mesmos critérios na aplicação do preço, a regra geral é que o sistema exibe o menor preço fixo para o cliente__. 

Se dois preços fixos estiverem elegíveis para uma *mesma data de agendamento*, o sistema irá escolher o __menor preço__ entre os dois preços fixos. Da mesma maneira, se dois preços puderem ser aplicados para *uma mesma quantidade de itens no carrinho*, o sistema irá escolher como preço de venda o __preço fixo de menor valor__.

### Concorrência pelo critério de Agendamento

Digamos que dois preços fixos sejam cadastrados para o mesmo SKU. Além disso, ambos têm agendamentos diferentes, *mas com alguns horários em comum*. Visto que há uma concorrência de preços, o menor valor será considerado como o preço para esta data em comum. 

Por exemplo: o primeiro preço fixo é de __R$ 50,00__ e seu agendamento vai das __10h às 16h__. Já o segundo é de __R$ 25,00__, só que está programado das __12h às 20h do mesmo dia__. Neste caso, *entre 12h e 16h*, os dois preços fixos competem entre si. Desse modo, o valor de __R$ 25,00__ será o preço de venda do SKU neste horário em comum.

![fixed price - example2](https://images.ctfassets.net/alneenqid6w5/1GR4ZZSlxREEGHno3VXorQ/b014a5ed36bf608e9f582775ca06e507/fixed_price_-_example2.svg)

### Concorrência pelo critério de Itens mínimos no carrinho

Em casos de dois preços fixos cadastrados com interseção no critério __itens mínimos no carrinho__, o preço de venda será o menor preço.

Imagine que cadastramos um preço fixo de R$ 200,00 para __dois ou mais itens no carrinho__ e um outro preço fixo de R$ 100,00 para __cinco ou mais itens__. Podemos ver que existe uma concorrência de preços, já que existe uma interseção entre as regras de item mínimo no carrinho.

Qual seria o preço aplicado para 5 ou mais itens? O preço de venda será de R$ 100,00, visto que o sistema prioriza o menor valor.

![fixed price - example1](https://images.ctfassets.net/alneenqid6w5/60d7Vr6w08B8XZt9FCk4AG/8a577583a2df4290c2acfaa08b97b71f/fixed_price_-_example1.svg)

## Exemplos

Vamos supor que você tenha uma loja que venda eletrodomésticos. Você criou __três tabelas de preço para políticas comerciais__ e __duas tabelas para outros contextos__ no módulo de preços.

Você cadastrou um __preço base__ de R$ 2000,00 para o SKU de uma geladeira. Dessa maneira, *neste momento*, todas as suas tabelas de preço têm um __preço de venda__ de R$ 2000,00 para esse SKU.

No entanto, você deseja *praticar um preço maior* para um determinado canal de venda. Assim, você pode cadastrar um __preço fixo__ de R$ 2500,00 na tabela da política comercial referente a este canal de venda. Com isso, o __preço de venda__ para esse canal de venda será de R$2500,00, pois *o preço fixo se sobrepõe ao preço base em uma tabela preços*.

