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

Antes de iniciar a configuração de uma condição de pagamento, é necessário cadastrar uma [integração de pagamento](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway/). 

Uma vez definido o seu provedor, para qualquer uma das condições de pagamento a serem escolhidas, sempre será necessário:

- Preencher o campo __Nome da regra__ com um nome de sua preferência para identificação.
- Ativar a condição no campo __Status__.
- Indicar em __Processar com o provedor__, qual provedor irá processar esta condição de pagamento.
- Definir se deseja utilizar um [sistema antifraude](https://help.vtex.com/pt/tutorial/como-configurar-antifraude) em __Usar solução antifraude__.

Além disso, existe a possibilidade de definir se o pagamento será: à vista ou em parcelas, com ou sem juros, ou com [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

> ⚠️ Quaisquer alterações nas condições de pagamento podem demorar até 10 minutos para aparecerem no checkout da sua loja.

Nas etapas abaixo, iremos utilizar o cartão de crédito como exemplo de condição de pagamento.

### À vista

![pagamento-a-vista pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payment-settings/condicoes-de-pagamento_1.png)

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com o provedor__, escolha o provedor que configurou (Importante: Antes de ativar a condição de pagamento, verificar com o gateway ou adquirente se a bandeira / meio de pagamento está disponível no sistema deles).
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
8. No campo __À vista ou parcelado?__, selecione __À vista__.
9. Clique em __Salvar__.

> ℹ️ No Passo 5. você pode escolher outros métodos de pagamento como cartões de débito, cobranded, private, promissórias, boletos, PIX, entre outros.

### Parcelado sem juros

![parcelamento-sem-juros pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payment-settings/condicoes-de-pagamento_2.png)

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com a provedor__, escolha o provedor que configurou.
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
8. No campo __À vista ou parcelado?__, selecione __Parcelado__.
9. Configure o número de parcelas sequenciais (ex.: 1-10) ou individuais (ex.: 1,3,6), no campo __Total de parcelas__.
10. Defina uma parcela mínima, para ser aplicada conforme o valor de cada produto.
11. O campo __Faturas__ só será levado em consideração para parcelamentos com juros, portanto, qualquer opção é valida.
12. Clique em __Salvar__.

### Parcelado com juros

![parcelamento-com-juros pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payment-settings/condicoes-de-pagamento_3.png)

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com a provedor__, escolha o provedor que configurou.
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
8. No campo __À vista ou parcelado?__, selecione __Parcelado__.
9. Configure o número de parcelas sequenciais (ex.: 1-10) ou individuais (ex.: 1,3,6), no campo __Total de parcelas__.
10. Defina uma parcela mínima, para ser aplicada conforme o valor de cada produto.
11. Em __Faturas__, selecione a data da cobrança com início ou fim do período (valor usado para o cálculo do valor da parcela com juros).
12. Clique em __Adicionar juros__.
13. Em __Juros(%)__, digite o valor do juros que deseja aplicar a cada uma das parcelas. O campo permite que você adicione valores com até 2 casas decimais, por exemplo, `1,25` ou `10,89` são valores possíveis.
14. Para escolher entre juros compostos e juros simples, clique em __Juros composto aplicado. Alterar__. Uma caixa de seleção vai aparecer oferecendo as duas opções.
15. Clique em __Salvar__.

![Juros - pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payment-settings/condicoes-de-pagamento_4.png)

## Remover condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique sobre a condição de pagamento que deseja remover.
3. Clique sobre o ícone de lixeira.

![Remover condição de pagamento](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/payment-settings/condicoes-de-pagamento_5.png)

