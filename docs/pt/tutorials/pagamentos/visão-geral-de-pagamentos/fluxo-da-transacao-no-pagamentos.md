---
title: 'Fluxo da transação no Pagamentos'
id: Er2oWmqPIWWyeIy4IoEoQ
status: PUBLISHED
createdAt: 2019-01-24T21:42:55.722Z
updatedAt: 2024-08-22T13:13:32.815Z
publishedAt: 2024-08-22T13:13:32.815Z
firstPublishedAt: 2019-01-24T21:42:56.197Z
contentType: tutorial
productTeam: Financial
author: authors_59
slugEN: transaction-flow-in-payments
legacySlug: fluxo-da-transacao-no-pci-gateway
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

As transações realizadas pelo Pagamentos da VTEX passam por diversos status, desde o início do processo de autorização, passando pela captura do valor e chegando até a finalização da transação. O objetivo deste artigo é explicar cada um destes diferentes estágios de uma transação.

Veja abaixo um exemplo de linha do tempo com os status da transação.

![Transaction Flow](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/vis%C3%A3o-geral-de-pagamentos/fluxo-da-transacao-no-pagamentos_1.jpg)

1. __Authorizing__ (Autorizando): Este é o primeiro status de uma transação no Pagamentos. Neste estágio, o Pagamentos indica que teve início o processo de envio de informações para um adquirente ou para um outro gateway.
2. __Authorized__ (Autorizado): Após o início do processo de autorização, o adquirente ou o outro gateway envia as informações da transação para o banco emissor. O banco responde se a transação deve ser ou não autorizada. Caso negue a transação, o pagamento é __cancelado__. Caso autorize, o status da transação passa para __Authorized__.
3. __Analyzing Risk (optional)__ (Analisando risco - opcional): Após a autorização do banco emissor, o __antifraude__ atua analisando o risco da transação. Este passo é opcional. No entanto, recomendamos a utilização de um antifraude para verificar suas transações.
4. __Risk Approved (optional)__ (Risco aprovado - opcional): Caso o antifraude responda positivamente, a transação passa para o status de __risco aprovado__. Se o antifraude identificar algum indício de fraude, a transação é __cancelada__.
5. __Approved__ (Aprovado): Este status indica que a transação passou por todas as verificações possíveis. Ela foi autorizada pelo banco emissor e foi aprovada pelo antifraude. Com isso, a transação ganha o status de __aprovada__.
6. __Settlement of $__ (Liquidação do valor): Este status indica que o processo de __captura__ de um valor específico será iniciado. É importante ressaltar que, neste estágio, o valor __ainda não foi capturado__. O que existe é apenas um aviso de que o processo de captura desse valor será realizado nos próximos status.
7. __Settling__ (Liquidando): Neste status, inicia-se efetivamente a tentativa de __captura__ do valor. Os sistemas responsáveis iniciam o processo para que o valor da transação seja capturado.
8. __Settled__ (Liquidado): Quando a transação chegar neste status, isso indica que o valor foi __capturado com sucesso__. A partir daqui, o fluxo fica de inteira responsabilidade do __conector__. Cabe ao lojista acompanhar se o valor do pagamento será devidamente depositado na sua conta.
9. __Finished__ (Finalizado): A transação chega ao status de __finished__ quando a nota fiscal com o valor do pagamento é emitida e vinculada ao pedido no OMS. É importante ter atenção a este status, pois mesmo após a captura bem-sucedida do valor, [é necessário incluir a nota fiscal no pedido](https://help.vtex.com/pt/faq/por-que-uma-transacao-foi-capturada-com-sucesso-mas-nao-foi-finalizada-no-pci).
