---
title: 'PIX: nova configuração do tempo de expiração do QR Code'
id: 6hYRjcoAkWytju8o1DvGUs
status: PUBLISHED
createdAt: 2025-02-20T13:51:07.729Z
updatedAt: 2025-03-19T17:41:57.282Z
publishedAt: 2025-03-19T17:41:57.282Z
contentType: updates
productTeam: Others
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: 2025-02-20-pix-new-qr-code-expiration-setting
locale: pt
legacySlug: pix-nova-configuracao-do-tempo-de-expiracao-do-qr-code
announcementImageID: 'undefined'
announcementSynopsisPT: 'Configuração do tempo de expiração do QR Code PIX está disponível para lojas VTEX.'
---

Visando aprimorar as operações de pagamento realizadas na plataforma, a VTEX implementará uma nova configuração do tempo de expiração do QR Code Pix.

## O que vai mudar?

Atualmente, o QR Code Pix permanece disponível na tela para o usuário por 10 minutos e o prazo máximo para o pagamento é de 15 minutos. Após este período, o pedido é cancelado e uma nova compra deve ser realizada.

![PIX QR Code](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2025/2025-02-20-pix-nova-configuracao-do-tempo-de-expiracao-do-qr-code_1.png)

A partir de __26 de março de 2025__, o tempo de validade de um QR Code Pix poderá ser configurado para um período entre 15 e 60 minutos, permitindo que os clientes tenham maior flexibilidade no momento do pagamento.

Para configurar um novo tempo de expiração do QR Code Pix, o conector de pagamentos deve  informar o tempo desejado, em segundos, no campo `delayToCancel` presente na resposta do endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) para cada nova transação.

Exemplo:

Se você deseja que todos os novos QR Code Pix gerados pela loja sejam pagos em até 30 minutos (1.800 segundos), o campo `delayToCancel` deve ser preenchido na resposta do conector como `1800`.

## O que precisa ser feito?

Antes do dia __26 de março de 2025__, verifique como o conector da sua loja está preenchendo o `delayToCancel` na resposta das autorizações e siga as respectivas orientações:

- __Campo `delayToCancel` do endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) está retornando um valor menor ou igual a 15 minutos (900 segundos) para PIX__: Nenhuma ação é necessária e o tempo de expiração permanecerá em 15 minutos. Caso deseje modificar este período, entre em contato com o seu provedor de pagamento solicitando a inclusão do valor desejado.

- __Campo `delayToCancel` do endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments) está retornando um valor maior que 15 minutos (900 segundos) para PIX__: verifique se o valor declarado está de acordo com as necessidades atuais da loja e caso necessário, entre em contato com o seu provedor de pagamento para modificá-lo.

> ⚠️ Os valores configurados devem estar entre 15 minutos (900 segundos) e 60 minutos (3600 segundos).

A partir do dia __26 de março de 2025__, o tempo de expiração de QR Code PIX será aplicado conforme o valor declarado no campo `delayToCancel` retornado pelo seu provedor de pagamentos no endpoint [Create Payment](https://developers.vtex.com/docs/api-reference/payment-provider-protocol#post-/payments).

