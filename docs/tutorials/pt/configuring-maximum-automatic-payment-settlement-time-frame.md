---
title: Configurar tempo máximo para liquidação automática
id: 7dwcaxrcgcFJUk7umqPBw2
status: PUBLISHED
createdAt: 2020-09-22T11:49:41.297Z
updatedAt: 2023-03-26T21:34:20.532Z
publishedAt: 2023-03-26T21:34:20.532Z
firstPublishedAt: 2020-09-22T14:37:14.174Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-tempo-maximo-para-liquidacao-automatica
legacySlug: configurar-prazo-maximo-para-captura
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Neste artigo, explicaremos como configurar o recurso de prazo máximo para liquidação que, no momento, está disponível para os conectores [Braspag](https://help.vtex.com/pt/tutorial/configurar-o-gateway-braspag--7tQmfLMvtYEsWoaaAaeKSC "Braspag"), [Cielo V3](https://help.vtex.com/pt/tutorial/configurar-adquirente-cielo--3avjZ7q65WcM02K8K0eeWu "Cielo V3"), [SiTef](https://help.vtex.com/pt/tutorial/setting-up-sitef-gateway-with-pre-auth--2ZH4DLmZpKw022aSGcGYag "Sitef") e [e-SiTef](https://help.vtex.com/pt/tutorial/configurar-gateway-e-sitef--6UEi0QAlU6BXz5RgWj34Ac). 

Antes de partirmos para o passo a passo em si, é importante esclarecermos a diferença entre __liquidação por faturamento__, __liquidação automática__ e __liquidação antecipada__ - três conceitos presentes no mercado de pagamentos. Em alguns conectores de pagamentos da plataforma, esses termos são referidos como __captura por faturamento__, __captura automática__ e __captura antecipada__.

<div class="alert alert-warning">
As informações a seguir são válidas para pagamentos realizados com cartão de crédito
</div>

## Liquidação por faturamento
A liquidação por faturamento é uma das etapas do [fluxo da transação](https://help.vtex.com/pt/tutorial/fluxo-da-transacao-no-pagamentos--Er2oWmqPIWWyeIy4IoEoQ "fluxo da transação") - o processo interno da VTEX que ocorre depois que um cliente realiza o pagamento de um pedido. Ou seja, o cliente não participa dessa dinâmica.

Quando o pedido é faturado - momento em que os produtos estão prontos para serem enviados para a transportadora - o Gateway realiza a liquidação. Isso acontece porque o faturamento do pedido indica que o pagamento foi realizado da forma correta.

## Liquidação antecipada

A liquidação antecipada é um recurso opcional que permite que o lojista estabeleça que a liquidação do pagamento irá ocorrer antes da liquidação automática realizada pela VTEX.

Além disso, é importante ressaltarmos a liquidação antecipada só acontecerá depois da análise do antifraude, em casos que o cliente conte com esse serviço.

## Liquidação automática

Esta é uma medida de segurança utilizada para evitar que a autorização do pagamento não seja realizada.

No momento que o processo de autorização começa, o sistema espera um limite de tempo máximo, previamente agendado, para realizar a liquidação automática. Esse tempo máximo não contabiliza o período de validações do Antifraude, caso esse serviço esteja envolvido no processo.

Lojista e adquirente acordam qual será o limite de tempo para que a liquidação automática seja acionada. 

<div class="alert alert-info">
Geralmente, o tempo máximo definido para que a liquidação aconteça é de quatro dias. Entretanto, essa <strong>não</strong> é uma regra. Cada adquirente pode definir o período que achar mais adequado.
</div>

Para configurar essa liquidação, siga o passo a passo:

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. No topo da página, clique em __Afiliações de Gateway__.
3. Clique no __botão verde “+”__.
4. Na seção __Outros__, selecione a __afiliação__ que deseja configurar.
5. Do lado esquerdo da tela, preencha o campo __Nome da afiliação__.
6. Logo abaixo, ative o modo __Live/Produção__. 
7. Preencha os __campos__ do formulário.
8. No campo __Captura antecipada__, selecione uma das opções de tempo disponíveis. 
9. Preencha o campo __Alterar tempo máximo para captura__ com o período definido com a adquirente. __Caso você prefira deixar o campo em branco, o padrão de 4 dias será utilizado__.

![captura_automatica_PT](https://images.ctfassets.net/alneenqid6w5/50rTz4DncUN9gOUZ9JWmMk/c5eb2f4759254eb1b8425bcee7267503/captura_automatica_atualizado_PT.png)
10. Clique no __botão Salvar__. 

Desse modo, o novo recurso de liquidação será implementado.
