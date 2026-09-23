---
title: 'Configurar condições de pagamento'
id: tutorials_455
status: PUBLISHED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2025-04-23T13:29:53.447Z
publishedAt: 2025-04-23T13:29:53.447Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: how-to-configure-payment-conditions
legacySlug: condicoes-de-pagamento
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Condições de pagamento são as formas de pagamento exibidas no site para a finalização de compra. Por meio desta funcionalidade é possível configurar opções como: parcelamentos, juros, condições especiais etc.

## Como configurar

Antes de iniciar a configuração de uma condição de pagamento, é necessário cadastrar uma [integração de pagamento](/pt/docs/tutorials/afiliacoes-de-gateway/). 

Uma vez definido o seu provedor, para qualquer uma das condições de pagamento a serem escolhidas, sempre será necessário:

- Preencher o campo __Nome da regra__ com um nome de sua preferência para identificação.
- Ativar a condição no campo __Status__.
- Indicar em __Processar com o provedor__, qual provedor irá processar esta condição de pagamento.
- Definir se deseja utilizar um [sistema antifraude](/pt/docs/tutorials/como-configurar-antifraude) em __Usar solução antifraude__.

Além disso, existe a possibilidade de definir se o pagamento será: à vista ou em parcelas, com ou sem juros, ou com [condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).

## Informações sobre parcelamentos e juros

### Nome da condição

Identificador interno da condição de pagamento (regra) no Admin. Você pode criar várias regras para o mesmo meio de pagamento (ex.: "Visa 10x sem juros" e "Visa 12x com juros"), desde que diferenciadas por bandeira, parcelamento ou [condições especiais](/pt/docs/tutorials/condicoes-especiais).

### Total de parcelas

Define quantas opções de parcelamento estarão disponíveis:

- **Sequencial:** `1-10` cria opções de 1x até 10x.
- **Individual:** `1,3,6` cria apenas 1x, 3x e 6x.

### Parcela mínima

O campo **Parcela mínima** define o valor mínimo de cada prestação. Parcelas cujo valor calculado fique abaixo desse limite não são exibidas. Por exemplo, com parcela mínima de R$ 50 e pedido de R$ 200, no máximo 4x será oferecido (R$ 50 por parcela), mesmo que tenham sido configuradas até 10x.

### Faturas

Afeta apenas parcelamentos com juros. Define se a cobrança é calculada no início ou no fim de cada período, impactando o valor final da parcela. Veja as fórmulas em [Como é feito o cálculo do parcelado com juros compostos?](/pt/docs/tutorials/como-e-feito-o-calculo-do-parcelado-com-juros-compostos).

### Juros por parcela

Ao clicar em **Adicionar juros**, uma lista com campos de juros é exibida para cada quantidade de parcelas. É possível definir taxas diferentes por opção (ex.: 1,99% em 6x e 2,49% em 12x). Para mais detalhes sobre juros simples vs. composto, consulte [Como escolher o tipo de juros de uma condição de pagamento](/pt/docs/tutorials/como-escolher-o-tipo-de-juros-de-uma-condicao-de-pagamento).


### Exibição de parcelas no checkout

O objetivo do parcelamento é reduzir o montante pago a cada mês. Se, ao aumentar o número de prestações, o valor da parcela não diminui em relação a uma opção com menos parcelas, a plataforma não exibe essas opções no checkout, pois não representam vantagem para o cliente.

Esse comportamento pode ocorrer, por exemplo, quando o arredondamento do valor da parcela resulta no mesmo montante para quantidades diferentes de prestações.

> ℹ️ Se você configurou mais parcelas do que as exibidas no checkout, verifique a **Parcela mínima**, o valor do pedido e as taxas de juros configuradas para cada quantidade de parcelas.

> ⚠️ Quaisquer alterações nas condições de pagamento podem demorar até 10 minutos para aparecerem no checkout da sua loja.

Nas etapas abaixo, iremos utilizar o cartão de crédito como exemplo de condição de pagamento.

### À vista

![pagamento-a-vista pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_1.png)

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com o provedor__, escolha o provedor que configurou (Importante: Antes de ativar a condição de pagamento, verificar com o gateway ou adquirente se a bandeira / meio de pagamento está disponível no sistema deles).
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
8. No campo __À vista ou parcelado?__, selecione __À vista__.
9. Clique em __Salvar__.

> ℹ️ No Passo 3, você pode escolher outros métodos de pagamento como cartões de débito, cobranded, private, promissórias, boletos, PIX, entre outros.

### Parcelado sem juros

![parcelamento-sem-juros pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_2.png)

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com o provedor__, escolha o provedor que configurou.
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
8. No campo __À vista ou parcelado?__, selecione __Parcelado__.
9. Configure o número de parcelas sequenciais (ex.: 1-10) ou individuais (ex.: 1,3,6), no campo __Total de parcelas__.
10. Defina a __parcela mínima__ — valor mínimo de cada prestação. Parcelas cujo valor calculado fique abaixo desse limite não serão exibidas no checkout.
11. O campo __Faturas__ só será levado em consideração para parcelamentos com juros, portanto, qualquer opção é válida.
12. Clique em __Salvar__.

### Parcelado com juros

![parcelamento-com-juros pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_3.png)

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com o provedor__, escolha o provedor que configurou.
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
8. No campo __À vista ou parcelado?__, selecione __Parcelado__.
9. Configure o número de parcelas sequenciais (ex.: 1-10) ou individuais (ex.: 1,3,6), no campo __Total de parcelas__.
10. Defina a __parcela mínima__ — valor mínimo de cada prestação. Parcelas cujo valor calculado fique abaixo desse limite não serão exibidas no checkout.
11. Em __Faturas__, selecione a data da cobrança com início ou fim do período (valor usado para o cálculo do valor da parcela com juros).
12. Clique em __Adicionar juros__.
13. Em __Juros(%)__, configure a taxa de juros para cada quantidade de parcelas. É possível definir taxas distintas por opção (ex.: 1,99% em 6x e 2,49% em 12x). O campo aceita valores com até 2 casas decimais, por exemplo, `1,25` ou `10,89`.
14. Para escolher entre juros compostos e juros simples, clique em __Juros composto aplicado. Alterar__. Uma caixa de seleção vai aparecer oferecendo as duas opções.
15. Clique em __Salvar__.

![Juros - pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_4.png)

## Remover condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique sobre a condição de pagamento que deseja remover.
3. Clique sobre o ícone de lixeira.

![Remover condição de pagamento](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configurações-de-pagamentos/condicoes-de-pagamento_5.png)

## Saiba mais

- [Configurar condições especiais de pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais)
- [Como escolher o tipo de juros de uma condição de pagamento](https://help.vtex.com/pt/docs/tutorials/como-escolher-o-tipo-de-juros-de-uma-condicao-de-pagamento)
- [Como é feito o cálculo do parcelado com juros compostos?](https://help.vtex.com/pt/docs/tutorials/como-e-feito-o-calculo-do-parcelado-com-juros-compostos)
