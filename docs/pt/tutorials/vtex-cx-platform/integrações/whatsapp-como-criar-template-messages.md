---
title: 'WhatsApp: Como criar Template Messages'
createdAt: 2025-09-15T15:05:31.154Z
updatedAt: 2026-10-16T15:28:01.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: whatsapp-how-to-create-template-messages
locale: pt
---

Os Template Messages (mensagens modelo) são usados para iniciar conversas com os clientes e são o único [tipo de mensagem](https://developers.facebook.com/docs/whatsapp/conversation-types#message-types) que pode ser enviado a clientes que ainda não iniciaram uma conversa com você ou não enviaram uma mensagem nas últimas 24 horas em uma conversa existente.

Antes de serem enviadas aos clientes, os Template Messages precisam ser aprovados. Além disso, eles podem ser desabilitados automaticamente com base no feedback dos clientes. Se for desabilitado, o Template Message não poderá ser enviado aos clientes até que a classificação de qualidade melhore e deixe de violar a [Política do WhatsApp Business](https://whatsappbusiness.com/pt-br/policy/)  ou a [Política Comercial do WhatsApp](https://www.whatsapp.com/legal/commerce-policy/) .

## Criação

Você pode usar o VTEX CX Platform para criar modelos de mensagem manualmente e enviá-los para aprovação.

Para criar um Template Message:

1. Acesse **Configurações > Canais**;
2. Clique no cartão que contém a conta de WhatsApp que receberá o Template.
3. Clique na aba **Template** no lado direito.
4. Irá abrir um painel onde você clicará em Novo Template para adicionar a mensagem:

1. Preencha o formulário com as informações necessárias. Use o botão **\+ Adicionar variável** caso queira inserir espaços reservados para conteúdo variável a ser fornecido no envio do modelo.

1. Clique em **Adicionar exemplo** para adicionar exemplos de valores ao modelo. Fazer isso é opcional, mas altamente recomendado. Consulte os [Exemplos](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review#samples) .
2. Clique em **Enviar** para enviar o modelo para aprovação.

## Processo de aprovação (Responsabilidade da Meta)

Depois de criar o modelo, você poderá enviá-lo para aprovação. Geralmente, as aprovações ocorrem instantaneamente ou em alguns minutos (se submetidas diretamente pela plataforma). Assim que a decisão for tomada, uma notificação aparecerá no Gerenciador do WhatsApp. Além disso, será enviado um e-mail para os administradores do Gerenciador de Negócios. Caso você tenha assinado as atualizações sobre alterações de status do modelo de mensagem, também receberá da Meta uma notificação de webhook. Consulte [Como monitorar alterações de status](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review#template-review-webhooks) .

Caso seja aprovado, o modelo de mensagem ficará com o status **Ativo – Qualidade pendente**. Com isso, você poderá começar a enviá-lo aos clientes. Se rejeitado, o modelo poderá ser [editado](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review#approval-process) e reenviado para aprovação. Outra possibilidade é [fazer uma apelação](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-review#appeals) da decisão.

### Exemplos

Recomendamos que você inclua um exemplo antes de enviar o modelo para aprovação. Os exemplos permitem que você envie exemplos de ativos de mídia e valores de texto para variáveis de mídia ou texto exigidos pelo modelo. Com isso, fica mais fácil da META visualizar como o modelo aparecerá para os seus clientes.

Além disso, caso o envio seja rejeitado e você decida fazer uma apelação, será preciso incluir um exemplo na sua apelação. Por isso, é melhor já incluí-lo no envio inicial.

Para incluir um exemplo no envio, primeiro crie o seu modelo, adicionando as variáveis necessárias. Depois, clique no botão Adicionar exemplo. O painel de pré-visualização renderizará os exemplos de ativos de mídia ou valores de texto fornecidos.

Caso aconteça reprovações de mensagens e queira resolver ou mudar as configurações de suas template messages, vá para [Whatsapp Template messages: Impedimentos e configurações](/pt/docs/tutorials/whatsapp-template-messages-impedimentos-e-configuracoes) e saiba mais.

## Saiba mais

- [Política do WhatsApp Business](https://whatsappbusiness.com/pt-br/policy/): políticas para empresas.
- [Política Comercial do WhatsApp](https://whatsappbusiness.com/pt-br/policy/): políticas comerciais.
- [Aplicação das Políticas](https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement/?locale=pt_BR): como a Meta aplica essas políticas.
