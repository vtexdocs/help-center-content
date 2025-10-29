---
title: 'Whatsapp: Como criar Template Messages'
id: 3KQizjNnrDY2K3DhPwiPim
status: PUBLISHED
createdAt: 2025-09-15T15:05:31.154Z
updatedAt: 2025-10-03T14:20:32.643Z
publishedAt: 2025-10-03T14:20:32.643Z
firstPublishedAt: 2025-10-03T14:20:32.643Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-how-to-create-template-messages
legacySlug: whatsapp-como-criar-template-messages
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Os Template Messages (mensagens modelo) são usados para iniciar conversas com os clientes e são o único [tipo de mensagem](https://developers.facebook.com/docs/whatsapp/conversation-types#message-types) que pode ser enviado a clientes que ainda não iniciaram uma conversa com você ou não enviaram uma mensagem nas últimas 24 horas em uma conversa existente.

Antes de serem enviadas aos clientes, os Template Messages precisam ser aprovados. Além disso, eles podem ser desabilitados automaticamente com base no feedback dos clientes. Se for desabilitado, o Template Message não poderá ser enviado aos clientes até que a classificação de qualidade melhore e deixe de violar a [Política do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F&h=AT0oPctfHF7h359jza8YKEuZHFoYe87mcVbI5TT-nE2gyAcTKsdBggYsmA570ItHOiI_eZsjN3f3UDOwdu1-mm9ArVPb69CTBFkgMZ-bKeojp1o8DwA3A15HZaGqHkUBkxLvDFfn7f4vXe75v0koUw)  ou a [Política Comercial do WhatsApp](https://www.whatsapp.com/legal/commerce-policy/) .

#### **Criação**

Você pode usar a Plataforma Weni para criar modelos de mensagem manualmente e enviá-los para aprovação.

Para criar um Template Message:

1. Acesse o Painel **Aplicativos** e vá na aba **Meus Aplicativos**;
2. Clique no cartão que contém a conta de WhatsApp que receberá o Template.
3. Clique na aba **Template** no lado direito.
4. Irá abrir um painel onde você clicará em Novo Template para adicionar a mensagem:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/whatsapp-como-criar-template-messages_1.png)

1. Preencha o formulário com as informações necessárias. Use o botão **\+ Adicionar variável** caso queira inserir espaços reservados para conteúdo variável a ser fornecido no envio do modelo.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/whatsapp-como-criar-template-messages_2.png)

1. Clique em **Adicionar exemplo** para adicionar exemplos de valores ao modelo. Fazer isso é opcional, mas altamente recomendado. Consulte os [Exemplos](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#samples) .
2. Clique em **Enviar** para enviar o modelo para aprovação.

#### **Processo de aprovação (Responsabilidade da Meta)**

Depois de criar o modelo, você poderá enviá-lo para aprovação. Geralmente, as aprovações ocorrem instantaneamente ou em alguns minutos (se submetidos diretamente pela plataforma). Assim que a decisão for tomada, uma notificação aparecerá no Gerenciador do WhatsApp. Além disso, será enviado um e-mail para os administradores do Gerenciador de Negócios. Caso você tenha assinado as atualizações sobre alterações de status do modelo de mensagem, também receberá da Meta uma notificação de webhook. Consulte [Como monitorar alterações de status](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#monitoring-status-changes) .

Caso seja aprovado, o modelo de mensagem ficará com o status **Ativo – Qualidade pendente**. Com isso, você poderá começar a enviá-lo aos clientes. Se rejeitado, o modelo poderá ser [editado](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#editing) e reenvido para aprovação. Outra possibilidade é [fazer uma apelação](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/?translation#appeals) da decisão.

##### **Exemplos**

Recomendamos que você inclua um exemplo antes de enviar o modelo para aprovação. Os exemplos permitem que você envie exemplos de ativos de mídia e valores de texto para variáveis de mídia ou texto exigidos pelo modelo. Com isso, fica mais fácil da META visualizar como o modelo aparecerá para os seus clientes.

Além disso, caso o envio seja rejeitado e você decida fazer uma apelação, será preciso incluir um exemplo na sua apelação. Por isso, é melhor já incluí-lo no envio inicial.

Para incluir um exemplo no envio, primeiro crie o seu modelo, adicionando as variáveis necessárias. Depois, clique no botão Adicionar exemplo. O painel de pré-visualização renderizará os exemplos de ativos de mídia ou valores de texto fornecidos.

Caso aconteça reprovações de mensagens e queira resolver ou mudar as configurações de suas template messages, vá para [Whatsapp Template messages: Impedimentos e configurações](/l/pt/m-dulo-integra-es/whatsapp-template-messages-impedimentos-e-configura-es) e saiba mais.

#### **Saiba mais**

- [Política do WhatsApp Business](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fbusiness-policy%2F%3Ffbclid%3DIwAR1jLRqG2MmfXVpoC8OxG2zTl5Ub96hEm-Kq7ucQ9K5dNB8GDFaAupD530Q&h=AT36YeReOstrqxnKTzgq1y-r_1Ob87yrZtjfdejYpzyb5x_-O76Lptsh-I9eddFQhs7ijenYsMuyS_j5f0REQZ8IdJoL5vKaphzynwgfAav-DtNlcnC-iWBZN3KyVY4gdLKezYRLheBfFcg_nzrPaA) : saiba mais sobre as políticas para empresas.
- [Política Comercial do WhatsApp](https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.whatsapp.com%2Flegal%2Fcommerce-policy%2F%3Ffbclid%3DIwAR3hJYolZAcjC0qlRoD3yAnxxDqcFfZWC9ckfMsownlLmmTNMmCWUBRBEwQ&h=AT3ol3uyDf5Ojn8nJYc5KRBV8cDeo5UiTAfDQM1B_ZIamZ39CjEoG9RO6inUQKNKrCX7wbtZUJ7bJjmDA4KIBzJ6ZJ1E841-mDihwVik4agXMDieprqwFgWo8ebGSwPgj-g3htULojJjNADBqzQMlw) : saiba mais sobre as políticas comerciais.
- [Aplicação das Políticas](https://developers.facebook.com/docs/whatsapp/overview/policy-enforcement/) : saiba mais sobre como aplicamos as políticas
