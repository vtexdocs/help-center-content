---
title: O que fazer quando o cliente não recebe o token para recuperação de senha
id: 5jyaHYpuvK4uMuG0ksUKsa
createdAt: 2017-08-22T15:09:27.634Z
updatedAt: 2023-04-28T00:08:14.045Z
publishedAt: 
firstPublishedAt: 2017-08-22T15:13:14.166Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_35
slug: o-que-fazer-quando-o-cliente-nao-recebe-a-notificacao-de-recuperacao-de
legacySlug: o-que-fazer-quando-o-cliente-nao-recebe-a-notificacao-de-recuperacao-de
---

Às vezes o usuário não excedeu as tentativas de senha, contudo não recebe a notificação de recuperação. Nesse caso é provável que o usuário esteja incluído na lista de Supressão da Amazon Web Service. Veja [aqui](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppression-list.html) a informação fornecida pela AWS a respeito dessa lista.

O Amazon SES mantém uma lista de supressão de endereços de e-mail de destinatários que recentemente causaram um salto brusco de rejeição (bounce) para qualquer cliente do Amazon SES. Essa é uma operação automática por conta da Amazon e não significa que o e-mail permanecerá em uma blacklist. Isso pode ocorrer por conta do provedor que enviou o e-mail estar sendo usado de forma maliciosa por outros usuários.

Mas como na VTEX usamos a mesma plataforma para todos os clientes a lista de supressões de rejeição conta para a mesma quota de envio e taxa de rejeição. Um endereço de e-mail pode permanecer na lista de supressão por até 14 dias.

Caso fique constatado que o cliente não recebe o e-mail e não está no primeiro cenário descrito acima, é necessário entrar em contato com o suporte VTEX para solicitar a remoção do email da lista de supressão.

Infelizmente a Amazon não possui uma forma automática para que isso seja feito. O processo ainda é manual.
