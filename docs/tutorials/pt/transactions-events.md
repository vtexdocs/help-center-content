---
title: 'Eventos de uma transação'
id: 2xf5Axyz6EecGmcOYcMI60
status: DRAFT
createdAt: 2017-07-26T10:33:21.740Z
updatedAt: 2020-03-05T22:15:46.622Z
publishedAt: 
firstPublishedAt: 2017-07-27T20:01:18.994Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slug: eventos-de-uma-transação
locale: pt
legacySlug: eventos-de-uma-transação
subcategory: 3Gdgj9qfu8mO0c0S4Ukmsu
---

Cada transação inserida desde o checkout, finalizada ou não, contendo ou não erros de qualquer espécie, será finalmente cadastrada em **Pagamentos**, onde o log detalhado da interação entre gateway de pagamento e VTEX é exibido, indicando todos os status pelos quais ela passou: autorização, capturas, rejeições, status de antifraude, retentativas, erros do sistema, etc.

Para acessar essas informações, você deve:

1. Acessar **Pagamentos**

2. Em **Transações**, procurar pelo pagamento desejado
 [Veja mais sobre opções de busca](https://help.vtex.com/pt/tutorial/transacoes-como-buscar").
 
3. Clique na transação encontrada e acesse aos detalhes

Abaixo são compartilhados exemplos de onde encontrar as informações mais comuns para analisar os cenários que acontecem em Pagamentos.

## Autorizando a transação

Neste evento, vemos que VTEX começou o processo de autorização com o gateway de pagamentos e respondeu que a operação pode começar:

![transação-autorizando](//images.contentful.com/alneenqid6w5/2czvz4AZkECkCoC2CCmOME/92b9272bc3cf7302b3f51a69010591bf/transaccion-autorizada-aprobada.png)


## Transação autorizada e aprovada

Através de uma solicitação de autorização, o gateway de pagamentos irá autorizar/pré-autorizar a transação, em caso de sucesso no fluxo. Com a autorização, a transação terá status de _aprovada_ para continuar com o fluxo do pedido

![transação-autorizada-aprovada](//images.contentful.com/alneenqid6w5/2czvz4AZkECkCoC2CCmOME/92b9272bc3cf7302b3f51a69010591bf/transaccion-autorizada-aprobada.png)

Caso a autorização não aconteça por algum problema fora do fluxo, o log dele será detalhado na timeline de acordo com as informações retornadas pelo gateway de pagamentos.

## Análise de antifraude

No fluxo de pedidos, existe a possibilidade de enviar o pagamento para um antifraude (diretamente integrado na VTEX) para aplicar uma análise de risco. Depois de ter solicitado uma análise, o pedido terá um status indicando o início da análise e o retorno do antifraude, juntamente com o resultado:

![transação -antifraude](//images.contentful.com/alneenqid6w5/3MjNaFOEJyiumaUyO2owSa/84130c11335612c4d982c016cc160616/transaccion-antifraude.png)

Caso não aconteça a análise por causa de algum problema fora do fluxo, o log dele será detalhado na timeline, de acordo com as informações retornadas pelo gateway de pagamentos.

## Captura da transação

Quando a modalidade de pré-autorização de transações é utilizada, depois de ter feito as atividades de análise e operações do pedido, o faturamento do pedido e a captura do montante final, que pode ser igual, inferior ou superior do que o valor pré-autorizado inicialmente serão requeridos.

Quando o processo de captura for iniciado, o evento Settlement será visualizado, o que indica que a captura foi solicitada ao gateway de pagamentos:

![transação-captura-solicitação](//images.contentful.com/alneenqid6w5/4ZnegfgNcA4MQsgMuQaAsE/478d66d4b763730762637cc75a1aaea4/transaccion-captura-solicitud.png)

Enquanto a captura tenha sido iniciada com sucesso, o evento Settling será visualizado. E no final da captura, o evento Settled será mostrado:

![transação-captura-iniciada-capturada](//images.contentful.com/alneenqid6w5/2Z2fPSYG5WK0YqSCuWGAQi/42f03171a702ada307bd85b21614757f/transaccion-captura-iniciada-capturada.png)

Caso não aconteça a captura por causa de algum problema fora do fluxo, o log dele será detalhado na timeline, de acordo com as informações retornadas pelo operador de pagamentos.

## Transação concluída

Após a conclusão da transação, a VTEX indicará conforme mostra a imagem abaixo:

![transação-concluida](//images.contentful.com/alneenqid6w5/68PjN2ChyMWqYQ4Owm8Yk6/0a440ea3cf6e5190b7b03e72d6a7e7e8/transaccion-finalizada.png)

## Transação agendada para captura automática

Geralmente as afiliações permitem que você configure uma data agendada de captura a fim de forçar uma captura e evitar a demora do tempo de espera, o que poderia levar à queda do pagamento ou do pedido.

Aqui você consegue ver a data do agendamento da captura automática:

![captura-auto-agendada pt](https://images.ctfassets.net/alneenqid6w5/6rg3IZhX9eGegqeUUQCEgQ/cc229f8dc0916dced5e7288ea279abec/transa____o_programada_cap_auto_pt.png)

