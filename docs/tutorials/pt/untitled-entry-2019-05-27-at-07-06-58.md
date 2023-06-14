---
title: 'Entenda as condições de pagamento do VTEX Payment '
id: ylwZIT1Ns3oDGZz1Nk6mU
status: DRAFT
createdAt: 2019-05-27T19:06:58.512Z
updatedAt: 2020-03-05T21:59:04.842Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: entenda-as-condicoes-de-pagamento-do-vtex-payment
legacySlug: entenda-as-condicoes-de-pagamento-do-vtex-payment
subcategory: 7DxGppMM2tOzQN4LFVo2Lg
---

Para que as condições de pagamento do seu e-commerce funcionem corretamente, é preciso configurar dois aspectos principais: as condições de parcelamentos e de juros.  

Antes de partirmos para as configurações em si, entenda que tanto parcelamentos quanto juros são competências que atuam em conjunto. Afinal, todo pagamento feito em parcelas é descontado de alguma taxa, por menor que seja.

Além disso, os módulos do Admin VTEX são interdependentes. Logo, precisam das funcionalidades uns dos outros para que a loja opere em sua totalidade.

Dito isso, nesta etapa da configuração do e-commerce, o lojista precisa usar dois módulos da plataforma. Os parcelamentos são configurados no módulo VTEX Payment. Já os juros, no módulo Pagamentos.

## Parcelamentos ##

Como mencionamos anteriormente, os cartões de crédito são uma das formas de pagamento aceitas pelo VTEX Payment. Dito isso, o lojista pode configurar as condições de parcelamento válidas para o seu e-commerce no Admin VTEX. 

As opções são o número de parcelas de uma compra e o número de máximo de parcelas sem juros. Além disso, o lojista também precisa determinar um valor mínimo para cada parcela e definir o nome que aparecerá na fatura do comprador. 

<div="alert alert-info">
__Atenção__: a configuração estabelecida no Admin VTEX é única. Ou seja, vale para todas as bandeiras aceitas pelo VTEX Payment. Este módulo da plataforma não permite granularidade de configurações. Caso o lojista queria estabelecer uma condição de pagamento apenas para a bandeira Visa, por exemplo, deve defini-las no módulo __Pagamentos__.
</div>

Confira o passo a passo a seguir:

- Acesse o __Admin VTEX__;
- Do lado esquerdo da tela, clique em __Configurações__; 
- Clique na aba __Formas de Pagamento__;
- Dentro do box __Cartão de Crédito__, clique no botão __Editar__;
- Defina o __Parcelamento Máximo__ usando os botões “+” e “-”;
- Preencha o campo __Número de Parcelas Sem Juros__ usando os botões “__+__” e “__-__” ;
- Preencha o campo __Valor mínimo da parcela__ com um valor nominal;
- Preencha o campo __Nome na fatura do comprador__; 
- Clique no botão __Salvar__.

As condições de parcelamento podem ser editadas a qualquer momento no Admin VTEX.

## Juros ##
Ao assinar com o VTEX Payment, o lojista escolhe um plano de recebimento referente ao pagamento das suas vendas. Em cada um deles, estão pré-definidas as duas taxas que serão aplicadas em cada caso de parcelamento: a de crédito a vista e a de crédito parcelado.   

As de crédito à vista são descontadas do valor da compra. Já as taxas das parcelas, ficam a cargo do lojista. 

O cálculo dessas taxas é feito de acordo com o lojista estabeleceu nas condições de parcelamento. Digamos que um e-commerce aceite compras que sejam parceladas em __cinco vezes sem juros__ e tenha acordado o plano __Avulso__.  

Em um caso de uma máquina de lavar parceladas em 12 vezes, as cinco parcelas sem juros sofrerão com uma taxa de 2,2%. Já as demais sete, terão um desconto de 2,7%. O lojista sofrerá um desconto de 0,5% de juros do valor total da compra. Ou seja, 2,7% - 2,2%

****

Para saber mais sobre Juros, acesse o artigo sobre [configurações de pagamento](https://help.vtex.com/tutorial/condicoes-de-pagamento--tutorials_455 "configurações de pagamento") com foco no Gateway - uma condição que é editada dentro do módulo de __Pagamentos__.

Sabemos que essa é uma etapa mais elaborada. Por isso, em caso de dúvidas, não hesite em contactar o nosso time de especialistas para configurar corretamente o seu e-commerce. Para abrir um ticket, [clique aqui](https://help.vtex.com/ "clique aqui").

