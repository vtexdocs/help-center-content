---
title: 'Configurar tempo máximo para liquidação automática'
id: 7dwcaxrcgcFJUk7umqPBw2
status: PUBLISHED
createdAt: 2020-09-22T11:49:41.297Z
updatedAt: 2025-01-17T17:10:02.532Z
publishedAt: 2025-01-17T17:10:02.532Z
firstPublishedAt: 2020-09-22T14:37:14.174Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slugEN: configuring-maximum-automatic-payment-settlement-time-frame
legacySlug: configurar-prazo-maximo-para-captura
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Primeiramente, é importante compreender a diferença entre três conceitos similares utilizados por provedores de pagamento na plataforma, __liquidação por faturamento__, __liquidação automática__ e __liquidação antecipada__.

> ⚠️ As informações a seguir são válidas para pagamentos realizados com cartão de crédito

## Liquidação por faturamento
A liquidação por faturamento é uma das etapas do [fluxo da transação](https://help.vtex.com/pt/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ), sendo o processo interno da VTEX que ocorre depois que um cliente realiza o pagamento de um pedido.

Quando o pedido é faturado, momento em que os produtos estão prontos para serem enviados para a transportadora, o gateway de pagamentos realiza a liquidação. Isso acontece porque o faturamento do pedido indica que o pagamento foi realizado da forma correta.

## Liquidação antecipada

A liquidação antecipada é um recurso opcional que permite que o lojista estabeleça que a liquidação do pagamento irá ocorrer antes da liquidação automática realizada pela VTEX.

Além disso, é importante ressaltarmos a liquidação antecipada só acontecerá depois da análise do provedor de antifraude, em casos que o cliente conte com esse serviço.

## Liquidação automática

Esta é uma medida de segurança utilizada para evitar que a autorização do pagamento não seja realizada.

No momento que o processo de autorização começa, o sistema espera um limite de tempo máximo, previamente agendado, para realizar a liquidação automática. Esse tempo máximo não contabiliza o período de validações do provedor de antifraude, caso esse serviço esteja envolvido no processo.

Lojista e adquirente acordam qual será o limite de tempo para que a liquidação automática seja acionada. 

> ℹ️ Geralmente, o tempo máximo definido para que a liquidação aconteça é de quatro dias. Entretanto, essa **não** é uma regra. Cada adquirente pode definir o período que achar mais adequado.

Veja abaixo um exemplo de como realizar as configurações acima:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome do provedor na barra de busca e clique sobre ele.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta no provedor.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor desejado na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Preencha os campos disponíveis no formulário.
7. No campo **Captura antecipada (em horas)**, selecione uma das opções de tempo disponíveis. 
8. Preencha o campo **Alterar tempo máximo para captura** com o período definido com a adquirente. Caso você prefira deixar o campo em branco, o padrão de 4 dias será utilizado.
9. Clique em `Salvar`. 
