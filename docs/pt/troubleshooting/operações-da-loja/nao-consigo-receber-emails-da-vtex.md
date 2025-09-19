---
title: 'Não consigo receber emails da VTEX'
id: 4M2uVZdtrJzgyAySuZ4OLg
status: PUBLISHED
createdAt: 2024-05-28T17:21:01.400Z
updatedAt: 2024-11-08T18:46:08.368Z
publishedAt: 2024-11-08T18:46:08.368Z
firstPublishedAt: 2024-05-29T13:14:04.884Z
contentType: tutorial
productTeam: Post-purchase
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: i-cant-receive-emails-from-vtex
legacySlug: nao-consigo-receber-emails-da-vtex
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Central de mensagens
  - Templates de emails
  - Importação de planilhas
  - Token de autenticação
---

Por meio da [Central de mensagens](/pt/tutorial/conhecendo-o-message-center--tutorials_84), a VTEX oferece aos lojistas a opção de personalizar templates de e-mail que serão encaminhados aos usuários. Estes emails podem ser utilizados para transmitir as seguintes informações:
- Token de autenticação na loja
- Notificação de criação e pagamento de pedidos
- Confirmação de exportação de dados
- Logs de erro de importação de planilhas

Caso você identifique que os emails de sua loja não estão sendo encaminhados de maneira adequada, prejudicando assim a transmissão de informações importantes aos seus clientes, verifique abaixo as possíveis soluções para identificar a origem deste problema.

## Solução

Para corrigir interrupções no envio de emails da VTEX, considere verificar as seguintes soluções:

- [Confirmar remetente](#confirmacao-de-remetente)
- [Configurar servidor de email](#configuracao-de-servidor-de-email)
- [Configurar notificação de pedido e pagamento](#configuracao-da-notificacao-de-pedido-e-pagamento)
- [Remover email da lista de supressão AWS](#lista-de-supressao-da-aws)

### Confirmação de remetente

Se a sua loja possui um remetente customizado, além do remetente padrão __VTEX-DEFAULT__, realize um teste de envio de mensagens conforme os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Templates de email > Remetentes__.
2. No box com o nome do seu remetente cadastrado, clique em `Testar`. Após alguns segundos uma mensagem de confirmação de envio de email será exibida.
3. Verifique se um email da VTEX foi encaminhado para o endereço do usuário logado no Admin.
4. Caso não tenha recebido o email da VTEX, prossiga para a próxima solução.

### Configuração de servidor de email

Na VTEX é possível utilizar o servidor nativo de emails ou [configurar um servidor SMTP externo](/pt/tutorial/personalizando-o-smtp-da-vtex--tutorials_2733). Caso você esteja utilizando um servidor SMTP externo, verifique os cenários abaixo.

#### Configuração SMTP no Admin VTEX

1. No Admin VTEX, acesse __Configurações da loja > Templates de email > Remetentes__.
2. Clique no box com o nome do seu remetente cadastrado.
3. Em __Dados do SMTP__, verifique se todos os dados estão corretos.
4. Clique em `Salvar`.
5. No box com o nome do seu remetente cadastrado, clique em `Testar`. Após alguns segundos uma mensagem de confirmação de envio de email será exibida.
6. Verifique se um email da VTEX foi encaminhado para o endereço do usuário logado no Admin.

Após o teste, caso a mensagem da VTEX não tenha sido enviada para o email do usuário logado no Admin, recomendamos que utilize o remetente da VTEX (__VTEX-DEFAULT__) como padrão e realize o teste de envio de mensagem novamente. Se mesmo assim, não tenha recebido o email da VTEX, prossiga para a próxima solução.

#### Configuração SPF (Sender Policy Framework)

Confira se o servidor SMTP externo está devidamente configurado conforme o [sistema SPF](/pt/tutorial/configuracao-de-spf--42t0lkl2VyC6Yewc4wA6wI), responsável por evitar que servidores não autorizados enviem emails em nome de um domínio específico. Caso necessário, você pode realizar a [configuração do SPF](https://developers.vtex.com/docs/guides/setting-up-the-spf) e da [DKIM](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails) (DomainKeys Identified Mail) no servidor.

> ⚠️ Acesse também a sua caixa de spam para garantir que os emails da VTEX não estão sendo enviados para este local. Isto pode ocorrer devido a regras internas de servidores de mail.

### Configuração da notificação de pedido e pagamento

A VTEX encaminha emails para os usuários logo após um pedido ser criado ou pagamento ser realizado. Siga os passos abaixo para verificar as configurações de notificações de pagamento:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__.
2. Clique na aba __Configurações__.
3. Certifique-se de que o seu email está preenchido no campo correspondente a opção __Meu email VTEX__. Se desejar, insira um email secundário no campo __Outro email__ e realize o teste de envio de mensagem conforme a seção [Confirmação de remetente](#confirmacao-de-remetente).
4. Verifique se um email da VTEX foi encaminhado para o endereço do usuário logado no Admin.
5. Caso não tenha recebido o email da VTEX, prossiga para a próxima solução.

### Lista de supressão da AWS

A Amazon (AWS) possui uma plataforma de email chamada Amazon Simple Email Service ([Amazon SES](https://aws.amazon.com/pt/ses/)). Dentre as várias funcionalidades deste serviço, existe uma lista de supressão de endereços de email onde constam destinatários que podem ter apresentado algum tipo de comportamento suspeito que tenha afetado algum cliente da AWS.

Em situações normais, um endereço de email pode ser incluído na lista de supressão da AWS e ser removido após aproximadamente 12 horas. Durante este período, emails enviados pela VTEX não serão recebidos pelo endereço de email incluído na lista.

> ⚠️ A gestão da lista de supressão é de responsabilidade da AWS, e a VTEX não tem responsabilidade sobre a movimentação de entrada e saída de endereços na lista.

Caso desconfie que o seu endereço de email tenha sido bloqueado pela AWS, aguarde o período de 12 horas e tente reenviar novamente um email para o endereço bloqueado.

Além disso, você também pode verificar se o endereço de email está cadastrado como cópia em algum dos templates de emails transacionais da loja. Para verificar esta informação, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Templates de email > Templates__.
2. Clique sobre um card de template desejado.
3. Verifique se o endereço de email não está presente nos campos __Cc:__ ou __Cco:__ do template. Caso esteja, remova a informação e clique em `Salvar`.
4. Realize este procedimento para cada um dos cards de template da loja e realize um teste de envio de email para o endereço desejado.

![copia_email_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/opera%C3%A7%C3%B5es-da-loja/nao-consigo-receber-emails-da-vtex_1.png)
