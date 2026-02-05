---
title: 'Fluxo de uma transação'
id: 1xjzgJZvqwaI1rfxLMCC3Y
status: PUBLISHED
createdAt: 2019-11-26T17:45:13.678Z
updatedAt: 2024-08-21T14:18:31.189Z
publishedAt: 2024-08-21T14:18:31.189Z
firstPublishedAt: 2019-11-26T18:08:32.132Z
contentType: trackArticle
productTeam: Financial
slugEN: the-transaction-flow
locale: pt
trackId: 6GAS7ZzGAm7AGoEAwDbwJG
trackSlugEN: pagamentos
order: 2
---

O caminho que o dinheiro percorre ao ser trocado por um produto ou serviço é o que chamamos de __transação__.

Em uma loja VTEX, uma transação se inicia toda vez que um usuário escolhe uma [condição de pagamento](/pt/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento) e fecha seu pedido. A partir daí, os dados da compra são enviados para a validação de cada um dos integrantes do processo.

As transações realizadas pelo módulo de pagamentos da VTEX passam por diversos status, desde o início do processo de autorização, passando pela liquidação do valor e chegando até a finalização da transação.

Veja abaixo um exemplo de linha do tempo com os status da transação.

![Transaction Flow](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/módulos-vtex-primeiros-passos/pagamentos/fluxo-de-uma-transacao_1.jpg)

1. __Authorizing__ (Autorizando): Este é o primeiro status de uma transação no Pagamentos. Neste estágio, o Pagamentos indica que teve início o processo de envio de informações para um adquirente ou para um outro gateway.
2. __Authorized__ (Autorizado): Após o início do processo de autorização, o adquirente ou o outro gateway envia as informações da transação para o banco emissor. O banco responde se a transação deve ser ou não autorizada. Caso negue a transação, o pagamento é __cancelado__. Caso autorize, o status da transação passa a ser __Authorized__.
3. __Analyzing Risk (optional)__ (Analisando risco - opcional): Após a autorização do banco emissor, o __antifraude__ atua analisando o risco da transação. Este passo é opcional. No entanto, recomendamos a utilização de um antifraude para verificar suas transações.
4. __Risk Approved (optional)__ (Risco aprovado - opcional): Caso o antifraude responda positivamente, a transação passa para o status de __risco aprovado__. Se o antifraude identificar algum indício de fraude, a transação é __cancelada__.
5. __Approved__ (Aprovado): Este status indica que a transação passou por todas as verificações possíveis. Ela foi autorizada pelo banco emissor e foi aprovada pelo antifraude. Com isso, a transação ganha o status de __aprovada__.
6. __Settlement of $__ (Liquidação do valor): Este status indica que o processo de __liquidação__ de um valor específico será iniciado. É importante ressaltar que, neste estágio, o valor __ainda não foi liquidado__. O que existe é apenas um aviso de que o processo de liquidação desse valor será realizado nos próximos status.
7. __Settling__ (Liquidando): Neste status, inicia-se efetivamente a tentativa de __liquidação__ do valor. Os sistemas responsáveis iniciam o processo para que o valor da transação seja liquidado.
8. __Settled__ (Liquidado): Quando a transação chegar neste status, isso indica que o valor foi __liquidado com sucesso__. A partir daqui, o fluxo passa a ser de inteira responsabilidade do __conector__. Cabe ao lojista acompanhar se o valor do pagamento será devidamente depositado na sua conta.
9. __Finished__ (Finalizado): A transação chega ao status de __finished__ quando a nota fiscal com o valor do pagamento é emitida e vinculada ao pedido no OMS. É importante ter atenção a este status, pois mesmo após a liquidação bem-sucedida do valor, [é necessário incluir a nota fiscal no pedido](/pt/faq/por-que-uma-transacao-foi-capturada-com-sucesso-mas-nao-foi-finalizada-no-pci).
