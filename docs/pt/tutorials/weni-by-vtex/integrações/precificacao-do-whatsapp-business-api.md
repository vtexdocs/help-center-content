---
title: 'Precificação do Whatsapp Business API'
id: 6PzP7aMpkaYmICNyXFlNwr
status: PUBLISHED
createdAt: 2025-09-15T15:29:16.093Z
updatedAt: 2025-10-03T14:20:32.421Z
publishedAt: 2025-10-03T14:20:32.421Z
firstPublishedAt: 2025-10-03T14:20:32.421Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: whatsapp-business-api-pricing
legacySlug: precificacao-do-whatsapp-business-api
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

As empresas que utilizam a Plataforma do WhatsApp Business são cobradas por conversas de 24 horas, com diferentes taxas por categoria.

O WhatsApp cobra por conversa, e não por mensagem enviada. As conversas são compostas pelas mensagens trocadas entre a empresa e os clientes dentro de um período de 24 horas. Quando as mensagens enviadas pela empresa são entregues aos clientes, a conversa é considerada iniciada.

As conversas iniciadas pela empresa são divididas em três categorias: utilidade, autenticação e marketing. As conversas iniciadas pelo usuário são chamadas de conversas de serviço.

#### **Conversas iniciadas pela empresa**

- **Utilidade**:  Serve para facilitar uma solicitação, transação ou atualização sobre transações em andamento, incluindo notificações pós-venda e extratos de faturas recorrentes.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/precificacao-do-whatsapp-business-api_1.png)

- **Autenticação**:  Serve para autenticação de usuários com senhas de uso único em várias etapas do processo de login. Por exemplo, verificação da conta, recuperação da conta e desafios de integridade.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/precificacao-do-whatsapp-business-api_2.png)

- **Marketing**: Serve para promoções ou ofertas, atualizações de informações ou convites. As conversas que não se enquadrarem nas categorias de utilidade ou autenticação serão consideradas de marketing.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integra%C3%A7%C3%B5es/precificacao-do-whatsapp-business-api_3.png)

#### **Conversas iniciadas pelo usuário**

- **Serviço**: São as conversas iniciadas pelo usuário, que ajudam os clientes a tirarem dúvidas.

#### **Cobrança das conversas**

O envio de vários modelos da mesma categoria em uma conversa aberta não irá resultar em cobranças adicionais e as conversas de serviço só serão iniciadas quando não houver janelas de conversas abertas e a empresa pode responder ao usuário com um formato livre de mensagem na janela de atendimento ao cliente de 24 horas.

#### **Exceções**

As conversas com ponto de entrada gratuito ocorrem quando o cliente entra em contato com a empresa através de um botão de chamada para ação em anúncios de clique para o WhatsApp ou em Páginas do Facebook. Como o usuário do WhatsApp Business já está sendo cobrado pelo anúncio publicado nas redes sociais, ele não será cobrado por nenhum modelo de mensagem enviado nessa conversa durante um período de 72 horas.

A conversa iniciada é gratuita, porém o anúncio é cobrado.

Lembrando que: Cada conta do WhatsApp Business (WABA) tem 1\.000 conversas iniciadas pelo usuário gratuitas por mês, independentemente da quantidade de telefones incluídos. O limite de conversas gratuitas é restaurado a cada mês, de acordo com o fuso horário associado à WABA.

#### **Duração da Conversa**

As conversas de marketing, utilidade, autenticação e serviço têm uma duração de 24 horas (caso não sejam conversas por ponto de entrada gratuito — de anúncios de clique para o WhatsApp ou de Páginas do Facebook). Após esse período, o tempo será reiniciado, e qualquer mensagem enviada iniciará uma nova janela, sendo cobrada de acordo com a categoria.

#### **Precificação**

##### Conversas iniciadas pela empresa:

- **Utilidade**: Serve para facilitar uma solicitação, transação ou atualização sobre transações em andamento, incluindo notificações pós-venda e extratos de faturas recorrentes.
- **Autenticação**: Serve para autenticação de usuários com senhas de uso único em várias etapas do processo de login. Por exemplo, verificação da conta, recuperação da conta e desafios de integridade.
- **Marketing**: Serve para promoções ou ofertas, atualizações de informações ou convites. As conversas que não se enquadrarem nas categorias de utilidade ou autenticação serão consideradas de marketing.

Para saber mais sobre isso, você pode consultar [aqui](https://weni.ai/precificacao-whatsapp/).

Para saber sobre precificações, consulte essa [documentação da Meta](https://developers.facebook.com/docs/whatsapp/pricing).
