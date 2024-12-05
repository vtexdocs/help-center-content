---
title: 'Eventos de uma transação'
id: 2xf5Axyz6EecGmcOYcMI60
status: ARCHIVED
createdAt: 2017-07-26T10:33:21.740Z
updatedAt: 2020-03-05T22:15:46.622Z
publishedAt: 
firstPublishedAt: 2017-07-27T20:01:18.994Z
contentType: tutorial
productTeam: Financial
author: 5fYXkMJagMwcSAeMAsAuOI
slugEN: transactions-events
locale: pt
legacySlug: eventos-de-uma-transação
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
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

![transação-autorizando](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/eventos-de-uma-transa%C3%A7%C3%A3o_1.png)


## Transação autorizada e aprovada

Através de uma solicitação de autorização, o gateway de pagamentos irá autorizar/pré-autorizar a transação, em caso de sucesso no fluxo. Com a autorização, a transação terá status de _aprovada_ para continuar com o fluxo do pedido

![transação-autorizada-aprovada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/eventos-de-uma-transa%C3%A7%C3%A3o_2.png)

Caso a autorização não aconteça por algum problema fora do fluxo, o log dele será detalhado na timeline de acordo com as informações retornadas pelo gateway de pagamentos.

## Análise de antifraude

No fluxo de pedidos, existe a possibilidade de enviar o pagamento para um antifraude (diretamente integrado na VTEX) para aplicar uma análise de risco. Depois de ter solicitado uma análise, o pedido terá um status indicando o início da análise e o retorno do antifraude, juntamente com o resultado:

![transação -antifraude](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/eventos-de-uma-transa%C3%A7%C3%A3o_3.png)

Caso não aconteça a análise por causa de algum problema fora do fluxo, o log dele será detalhado na timeline, de acordo com as informações retornadas pelo gateway de pagamentos.

## Captura da transação

Quando a modalidade de pré-autorização de transações é utilizada, depois de ter feito as atividades de análise e operações do pedido, o faturamento do pedido e a captura do montante final, que pode ser igual, inferior ou superior do que o valor pré-autorizado inicialmente serão requeridos.

Quando o processo de captura for iniciado, o evento Settlement será visualizado, o que indica que a captura foi solicitada ao gateway de pagamentos:

![transação-captura-solicitação](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/eventos-de-uma-transa%C3%A7%C3%A3o_4.png)

Enquanto a captura tenha sido iniciada com sucesso, o evento Settling será visualizado. E no final da captura, o evento Settled será mostrado:

![transação-captura-iniciada-capturada](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/eventos-de-uma-transa%C3%A7%C3%A3o_5.png)

Caso não aconteça a captura por causa de algum problema fora do fluxo, o log dele será detalhado na timeline, de acordo com as informações retornadas pelo operador de pagamentos.

## Transação concluída

Após a conclusão da transação, a VTEX indicará conforme mostra a imagem abaixo:

![transação-concluida](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/eventos-de-uma-transa%C3%A7%C3%A3o_6.png)

## Transação agendada para captura automática

Geralmente as afiliações permitem que você configure uma data agendada de captura a fim de forçar uma captura e evitar a demora do tempo de espera, o que poderia levar à queda do pagamento ou do pedido.

Aqui você consegue ver a data do agendamento da captura automática:

![captura-auto-agendada pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Transactions/eventos-de-uma-transa%C3%A7%C3%A3o_7.png)

