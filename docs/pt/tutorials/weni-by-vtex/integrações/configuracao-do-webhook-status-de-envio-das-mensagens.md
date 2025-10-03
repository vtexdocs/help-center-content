---
title: 'Configuração do Webhook: Status de envio das mensagens'
id: 4Vz0SFzmpK8tTsA2CUbWAp
status: PUBLISHED
createdAt: 2025-09-15T15:38:30.364Z
updatedAt: 2025-10-03T14:20:32.239Z
publishedAt: 2025-10-03T14:20:32.239Z
firstPublishedAt: 2025-10-03T14:20:32.239Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: webhook-configuration-message-delivery-status
legacySlug: configuracao-do-webhook-status-de-envio-das-mensagens
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Para receber informações sobre o **status de envio e visualização das mensagens enviadas pelo seu Chatbot**, é possível configurar o serviço webhook diretamente na Weni Plataforma.

Esse serviço webhook vai funcionar da seguinte forma: **Sempre que uma mensagem for enviada, recebida ou lida esse webhook vai disparar uma notificação para um serviço externo (URL) que poderá tratar esses dados**.

O tratamento dos dados não é feito dentro da Weni plataforma, e sim no seu serviço externo de acordo com a tratativa criada.#### O que é um serviço externo e qual usar?

Existem diversos serviços externos e eles são usados como uma **infraestrutura em nuvem que armazena um código** que executa alguma ação. Você pode escolher qual serviço usar: [Back4app](https://www.back4app.com/#), [Pipedream](https://pipedream.com/) ou outros.

Isso quer dizer que, nessas plataformas externas, você pode **configurar uma URL para receber os dados do Webhook da Weni** e criar um código para tratar esses dados.

#### Como configurar

Para configurar seu webhook vá em **Aplicativos** **\> Meus Aplicativos \> Canal Whatsapp que deseja configurar \> Webhook \> Configure Método, URL e Cabeçalho da requisição**:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/configuracao-do-webhook-status-de-envio-das-mensagens_1.png)

Após configurar o serviço de webhooks, você poderá criar soluções via código ou aplicação externa de acordo com sua necessidade.

#### Retorno de Dados

Os dados que os webhooks vão enviar para seu serviço externo (URL) seguem o formato Json:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/configuracao-do-webhook-status-de-envio-das-mensagens_2.png)

O parâmetro ""status"" vai informar o status da mensagem, se foi lida aparecerá como ""read"".

**Tem dúvidas? Fala com a gente na** [**Weni comunidade**](https://comunidade.weni.ai/)**.**
