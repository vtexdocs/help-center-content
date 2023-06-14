---
title: 'Configurar condições de pagamento'
id: tutorials_455
status: CHANGED
createdAt: 2017-04-27T22:04:07.105Z
updatedAt: 2023-03-21T21:01:23.792Z
publishedAt: 2023-03-21T21:01:12.557Z
firstPublishedAt: 2017-04-27T23:03:26.687Z
contentType: tutorial
productTeam: Financial
author: authors_84
slug: condicoes-de-pagamento
legacySlug: condicoes-de-pagamento
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Condições de pagamento são as formas de pagamento exibidas no site para a finalização de compra. Por meio desta funcionalidade é possível configurar opções como: parcelamentos, juros, condições especiais etc.

## Como configurar

Antes de iniciar a configuração de uma condição de pagamento, é necessário cadastrar uma [afiliação de gateway](https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway/). 

Uma vez definido a sua afiliação de gateway, para qualquer uma das condições de pagamento a serem escolhidas, sempre será necessário:

- Preencher o campo __Nome da regra__ com um nome de sua preferência para identificação.
- Ativar a condição no campo __Status__.
- Indicar em __Processar com afiliação__, qual afiliação de gateway irá processar esta condição de pagamento.
- Definir se deseja utilizar um [sistema antifraude](https://help.vtex.com/pt/tutorial/como-configurar-antifraude) em __Usar antifraude__.

Além disso, existe a possibilidade de definir se o pagamento será: à vista ou em parcelas, com ou sem juros, ou com [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

<div class="alert alert-warning">
Quaisquer alterações nas condições de pagamento podem demorar até 10 minutos para aparecerem no checkout da sua loja.
</div>

Nas etapas abaixo, iremos utilizar o cartão de crédito como exemplo de condição de pagamento.

### À vista

![pagamento-a-vista pt](//images.ctfassets.net/alneenqid6w5/16U7FyAeXiC88gWCwkKmSU/b07c00338cbbf59430ec4e5a322e0159/pagamento-a-vista.png)

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com a afiliação__, escolha a afiliação que configurou (Importante: Antes de ativar a condição de pagamento, verificar com o gateway ou adquirente se a bandeira / meio de pagamento está disponível no sistema deles).
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
8. No campo __À vista ou parcelado?__, selecione __À vista__.
9. Clique em __Salvar__.

<div class="alert alert-info">
No Passo 5. você pode escolher outros métodos de pagamento como cartões de débito, cobranded, private, promissórias, boletos, PIX, entre outros.
</div>

### Parcelado sem juros

![parcelamento-sem-juros pt](//images.ctfassets.net/alneenqid6w5/5UuCXeD07moeaQiqqmuCMe/05b2cdeeac157859c9ffadce866eaebf/parcelamento-sem-juros.png)

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com a afiliação__, escolha a afiliação que configurou.
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
8. No campo __À vista ou parcelado?__, selecione parcelado.
9. Configure o número de parcelas sequenciais (ex.: 1-10) ou individuais (ex.: 1,3,6), no campo __Total de parcelas__.
10. Defina uma parcela mínima, para ser aplicada conforme o valor de cada produto.
11. O campo __Cobrança__ só será levado em consideração para parcelamentos com juros, portanto, qualquer opção é valida.
12. Clique em __Salvar__.

### Parcelado com juros

![parcelamento-com-juros pt](//images.ctfassets.net/alneenqid6w5/46wBJ8tCUgCaWmAyOgkycY/cada24446ff801ebffdcf02c5aa4b0e7/parcelamento-com-juros.png)

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Escolha o meio de pagamento cartão de crédito (qualquer bandeira).
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. No campo __Processar com a afiliação__, escolha a afiliação que configurou.
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
8. No campo __À vista ou parcelado?__, selecione parcelado.
9. Configure o número de parcelas sequenciais (ex.: 1-10) ou individuais (ex.: 1,3,6), no campo __Total de parcelas__.
10. Defina uma parcela mínima, para ser aplicada conforme o valor de cada produto.
11. Selecione a data da cobrança com início ou fim do período - valor usado para o cálculo do valor da parcela com juros.
12. Clique no botão __Adicionar juros__.
13. Digite o valor do juros que deseja aplicar a cada uma das parcelas. __O campo permite que você adicione valores com até 2 casas decimais__ (por exemplo, `1,25` ou `10,89` são valores possíveis).
14. Para escolher entre juros compostos e juros simples, clique em __Juros compostos aplicados. Alterar__. Uma caixa de seleção vai aparecer oferecendo as duas opções.
15. Clique em __Salvar__.

![Juros - pt](//images.ctfassets.net/alneenqid6w5/6LByLxJORIELFs7gTY3kmA/ce12cf0d03887377566de5eeadd0ed98/Juros_-_pt.png)

#### Juros Externos

Em alguns países, os juros das compras parceladas são cobrados diretamente pela instituição financeira. Para estes casos, é possível ativar o botão __Juros Externo__. Este botão preenche com `null` o valor dos juros no JSON enviado para o conector. O valor `null` indica que os juros serão cobrados posteriormente pela instituição financeira. Para ativar esta funcionalidade, clique no botão de __Juros Externo__ na configuração do parcelado com juros.

<div class="alert alert-info">
Atenção: a funcionalidade de juros externos é válida apenas para algumas afiliações de gateway (verifique se esta opção está disponível no momento de cadastrar a afiliação desejada). Os pedidos realizados por afiliações que não suportam esta funcionalidade serão cancelados no sistema.
</div>

## Remover condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique sobre a condição de pagamento que deseja remover.
3. Clique sobre o ícone de lixeira.

![Remover condição de pagamento](//images.ctfassets.net/alneenqid6w5/30AGmwCJOclqEqvcNPzuxV/9486e6e1036228c2ad8dfa7d0685768e/remover_condi____o_pagamento.png)

