---
title: 'Por que não recebo os emails da VTEX?'
id: 18LsIyIBLuEmSOos4KUaI0
status: PUBLISHED
createdAt: 2018-01-22T21:49:50.299Z
updatedAt: 2023-03-20T20:09:32.556Z
publishedAt: 2023-03-20T20:09:32.556Z
firstPublishedAt: 2018-01-22T22:47:09.416Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_59
slug: por-que-nao-recebo-os-e-mails-da-vtex
locale: pt
legacySlug: por-que-nao-recebo-os-e-mails-da-vtex
---

A VTEX envia emails para os usuários da sua loja em alguns cenários, como a confirmação de uma exportação de dados, logs de erro de importação de planilhas ou o envio do token de autenticação de um usuário.

Caso você não esteja recebendo os emails da VTEX, verifique as seguintes situações:

1. Confirme se o remetente está funcionando. Caso esteja utilizando um remetente customizado, realize o teste de envio disponível na lista remetentes configurados no seu Admin VTEX, em **Configurações da loja > Templates de email > Remetentes**. O módulo tentará enviar um email utilizando os dados configurados e retornará um resultado na tela.

2. Caso esteja utilizando um [servidor SMTP](https://help.vtex.com/pt/tutorial/customizing-the-vtex-smtp--tutorials_2733) próprio, recomendamos utilizar o default VTEX. 

3. Confira a sua [configuração de SPF](https://help.vtex.com/pt/tutorial/configuracao-de-spf) e sua caixa de spam. Os emails podem estar caindo nela devido a regra de seu servidor de email.

4. Verifique se o endereço de email está corretamente preenchido nas configurações de pagamento. No seu Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações** e clique na aba **Notificações**. Caso esse campo esteja vazio, os emails não serão enviados. 

5. Pesquise se o email caiu na lista da supressão da AWS.

## Lista de supressão da AWS

O Amazon SES mantém uma lista de supressão de endereços de email de destinatários que recentemente causaram um salto brusco de rejeição (bounce) para qualquer cliente do Amazon SES. Essa é uma operação automática de responsabilidade da Amazon e não significa que o email permanecerá em uma blacklist.

Isso pode ocorrer por conta do provedor que enviou o email estar sendo usado de forma maliciosa por outros usuários. Veja [aqui](https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list.html) a informação fornecida pela AWS a respeito dessa lista.

Caso você já tenha verificado todos os passos mencionados, provavelmente seu email está na lista de supressão da AWS. Neste caso, [contate nosso suporte](https://support.vtex.com/hc/pt-br/requests) para solicitar a retirada do email da lista.
