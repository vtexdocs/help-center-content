---
title: 'Como funcionam as conciliações bancárias'
id: tutorials_453
status: PUBLISHED
createdAt: 2017-04-27T22:04:15.815Z
updatedAt: 2023-03-22T20:35:18.519Z
publishedAt: 2023-03-22T20:35:18.519Z
firstPublishedAt: 2017-04-27T23:03:27.431Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: bank-reconciliations
legacySlug: conciliacoes-bancarias
locale: pt
subcategoryId: 2tEO9ytK1aMO0i2oMayoQq
---

É através da conciliação bancária que se aprova em lote os pagamentos dos pedidos fechados com boleto. Isso é possível através do upload de um arquivo tipo ._RET_ nos formatos CNAB 240 e CNAB 400, que é fornecido diariamente pelo banco, contendo as informações referentes à identificação do boleto, nosso número, data e valor do pagamento.

O fluxo completo é: compra fechada com boleto no site &gt; pedido entra como Pagamento Pendente &gt; boleto é pago &gt; banco envia o arquivo para a loja &gt; lojista realiza a conciliação &gt; pedido segue fluxo para entrega.

Conforme explicado em nosso documento [Em quanto tempo um pedido de boleto sem pagamento é cancelado?](/faq/em-quanto-tempo-um-pedido-de-boleto-sem-pagamento-e-cancelado/), existe um prazo para o cancelamento do pedido, caso este não seja notificado como pago no status de Pagamento Aprovado (seja manualmente no OMS ou por conciliação bancária). Nesse caso, o pedido permanecerá no status de Pagamento Pendente até ser cancelado.

<div class="alert alert-warning">
Os procedimentos deste artigo não são aplicáveis para as integrações que realizam a conciliação bancária de forma automática.
</div>

## Como fazer o upload

Após receber o arquivo do banco e salvá-lo em sua máquina, conforme citado acima, siga o passo a passo abaixo para fazer a conciliação bancária:

1. No Admin VTEX, acesse **Pedidos** > **Conciliação bancária** > **Conciliações bancárias**, ou digite **Conciliação bancária** na barra de busca no topo da página.
2. Clique em **Faça upload do arquivo .RET fornecido pelo banco**.
3. Selecione o arquivo ._RET_ que salvou em sua máquina.
4. Clique em **Abrir**.

Assim que selecionar o arquivo, a plataforma começará a processá-lo e registrará no histórico quantos pagamentos foram conciliados com sucesso ou erro. Os pagamentos que forem conciliados com sucesso, atualizarão os status dos pedidos para Pagamento Aprovado.

![upload-arquivo-ret](//images.ctfassets.net/alneenqid6w5/3KDKXLTwzYy1W9PNKGfIyT/73a25815cf3bd17cb7c92f6f01407f7e/uploadret.JPG)

## Visualizar o histórico

O histórico é o registro das conciliações bancárias que já foram realizadas. Ele mostra quantos pagamentos foram efetuados com sucesso ou erro em cada conciliação, de forma resumida na tela principal e detalhada ao entrar em cada linha do histórico.

Dentre os detalhes, é possível saber: o banco ao qual o boleto pertence, o total de pagamentos envolvidos e exatamente quais cobranças e seus respectivos valores tiveram ou não sucesso na conciliação. 

1. No Admin VTEX, acesse **Pedidos** > **Conciliação bancária** > **Conciliações bancárias**, ou digite **Conciliação bancária** na barra de busca no topo da página.
2. Em **Histórico**, clique em uma das datas das operações de conciliação bancária realizadas.
3. Em **Mais detalhes dos pagamentos**, clique em **Conciliados com Sucesso** ou **Não conciliados** para verificar os detalhes das operações realizadas em um determinado banco. 

![historico-conciliacao](//images.ctfassets.net/alneenqid6w5/7K6sF9KZlBA00tbSp4q0pC/f349ccb45ed613af59dca2de908fa01a/historico_conciliacao.jpg)

## Payclub

Aqui é possível fazer o download dos pagamentos do dia que foram feitos através de redirecionamento, como PayPal, por exemplo.

1. No Admin VTEX, acesse **Pedidos** > **Conciliação bancária**, ou digite **Conciliação bancária** na barra de busca no topo da página.
2. Clique em **Payclub**.
3. Selecione a data que desejar no calendário.
4. Clique em **Baixar arquivo**.

![donwload-arquivo-conciliação](//images.ctfassets.net/alneenqid6w5/78K7wW5QAaA0tVCJTBwpDH/61af99bfe4978eea981dfe694308f8f4/Download_Concilia____o.JPG)
