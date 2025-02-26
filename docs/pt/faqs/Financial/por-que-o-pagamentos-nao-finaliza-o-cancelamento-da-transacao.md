---
title: 'Por que o Pagamentos não finaliza o cancelamento da transação?'
id: 3IBqfy5IhOMkYKuKmu2wSs
status: PUBLISHED
createdAt: 2017-05-16T14:37:21.265Z
updatedAt: 2019-12-31T14:23:49.504Z
publishedAt: 2019-12-31T14:23:49.504Z
firstPublishedAt: 2017-05-18T18:55:27.278Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slugEN: why-doesnt-the-payments-finalize-the-cancellation-of-a-transaction
locale: pt
legacySlug: por-que-o-pci-gateway-nao-finaliza-o-cancelamento-da-transacao
---

Este cenário ocorre quando uma transação permanece indefinidamente no status `Cancelling`, impedindo o cancelamento da transação e, consequentemente, do pedido no OMS. Esta situação ocorre quando a VTEX está aguardando um retorno do sistema do gateway, mas a resposta correta não chega até a VTEX. Podemos ver na imagem abaixo um exemplo de resposta do gateway que não permite a continuidade do processo de cancelamento por parte da VTEX:

![resposta-inadequada-pci-gateway](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/faq/Financial/por-que-o-pagamentos-nao-finaliza-o-cancelamento-da-transacao_1.png)

Para solucionar a questão, o lojista deve entrar em contato com o gateway responsável pelo pagamento, informar os dados da transação e solicitar o cancelamento.
