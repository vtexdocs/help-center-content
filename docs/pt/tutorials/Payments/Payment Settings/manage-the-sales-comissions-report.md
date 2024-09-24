---
title: 'Administre o relatório de comissionamento'
id: 6NgHeDt8Xo9JtMoifx7DC5
status: ARCHIVED
createdAt: 2020-12-01T12:36:42.779Z
updatedAt: 2021-12-08T18:42:07.022Z
publishedAt: 
firstPublishedAt: 2020-12-04T12:24:18.019Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: administre-o-relatorio-de-comissionamento
locale: pt
legacySlug: administre-o-relatorio-de-comissionamento
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

O relatório de comissionamento é uma funcionalidade que cria um documento .xlsx com a relação entre pedidos faturados de um marketplace e as respectivas taxas de comissionamento aplicadas a cada um desses pedidos. Estes pedidos, por sua vez, são gerados pelos sellers do marketplace em questão. 

Essa dinâmica acontece por conta do split de pagamento e você pode saber mais sobre essa funcionalidade na [track de primeiros passos](https://help.vtex.com/pt/tracks/payment-split--1ouDg8q56Kuz1AgtJUY9nv "track de primeiros passos").

Neste artigo, explicaremos como gerar esse relatório de comissionamento e como agendar a criação recorrente do relatório de acordo com uma certa periodicidade.

>⚠️ Antes de prosseguir para as configurações, verifique com o seu Customer Success Manager (CSM) se o relatório de comissionamento foi incorporado ao Admin da sua conta.

## Gere um relatório de comissionamento

Você pode gerar o relatório de comissionamento via Admin. 

Confira as instruções:

1. Acesse o __Admin VTEX__.
2. Abaixo do módulo Pagamentos, clique no __módulo Comissionamento__.
3. Do lado direito da tela, clique no __botão azul "Gerar"__.

Nesse momento, o Admin exibirá um __modal “Gerar relatório”__. Nele, você pode definir o período de tempo que deseja analisar o controle de comissões exibido no relatório.

Prossiga:

4. Em __“Data inicial”__, defina o __primeiro dia__ do período de análise.
5. Em __“Data final”__, defina o __última dia__ do período de análise.
6. Caso queira receber o relatório por e-mail, selecione a opção __“Receber no endereço de email”__.
7. Preencha o campo “Endereço de e-mail” com o __e-mail__ desejado.
8. Clique no __botão azul__ __“Gerar”__.

>❗ É obrigatório definir uma data inicial e uma data final. Caso contrário, o relatório de comissionamento não será criado.

>ℹ️ Caso você não queira receber o relatório por e-mail, basta não clicar na caixa de seleção “Receber no endereço de email”. 
>
> Clique diretamente no botão “Gerar”. Assim, será criado um link para download do relatório no Admin.  

Desse modo, a mensagem “Seu relatório foi gerado com sucesso” será exibida na tela para indicar que a operação foi realizada corretamente. Além disso, o documento será enviado para a pasta “Downloads” do seu computador.  

A criação do relatório pode demorar caso o volume de dados analisados seja extenso. Nesses casos, você pode acompanhar o processamento como na imagem abaixo. 

>ℹ️ Sair da página não afetará a operação.

![comissionamento PT](//images.ctfassets.net/alneenqid6w5/7bWvI8TAgRPvtF4kr00TbC/6a3805d30656ad30c9afae6cb3079fce/comissionamento_PT.png)

Posteriormente, você também pode baixar o relatório recém-gerado em um link para download disponibilizado na listagem de relatórios.  

## Agende a criação de um relatório

Existem situações em que o marketplace precisa fazer a análise dos seus comissionamentos frequentemente. 

Por conta disso, você pode criar um agendamento para que o relatório será gerado automaticamente a cada período predeterminado de tempo.

>⚠️ No módulo de Comissionamento, só é permitido criar apenas um agendamento por conta.

>ℹ️ O agendamento é opcional. Não configurá-lo não afeta em nada a criação manual dos relatórios de comissionamento.

Considerando que você já está no módulo de Comissionamento, clique no botão “Agendar” do lado direito da tela. Semelhante à geração do relatório, será exibido um modal na tela.

Siga o passo a passo:

1. Em __“Com qual frequência você quer receber um relatório?”__, selecione uma opção de periodicidade, como “Mensalmente”.
2. Em __“Quando você quer receber o relatório”__, selecione um opção disponível de dia do mês, como “Todo dia 10”.
3. Caso queira, selecione a opção __“Receber no endereço de email”__.
4. Preencha o campo “Endereço de e-mail” com o __e-mail__ desejado.
5. Clique no __botão azul “Agendar”__.

Para finalizar, a mensagem “Suas alterações foram salvas” será exibida na tela para indicar que o agendamento foi concluído corretamente.

### Cancele um agendamento

Para cancelar o agendamento de um relatório, você deve abrir o modal de configuração e selecionar a opção “Nunca” em “Com qual frequência você quer receber um relatório”. Em seguida, salve as alterações e o agendamento será desconsiderado.
