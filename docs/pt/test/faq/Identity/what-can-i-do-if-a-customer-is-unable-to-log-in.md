---
title: 'O que fazer quando um cliente não consegue logar'
id: 1DISDN4tFaSSccu2WK2amG
status: PUBLISHED
createdAt: 2017-05-09T13:46:57.095Z
updatedAt: 2019-12-31T14:25:13.615Z
publishedAt: 2019-12-31T14:25:13.615Z
firstPublishedAt: 2017-05-09T13:48:52.807Z
contentType: frequentlyAskedQuestion
productTeam: Identity
author: authors_35
slug: cliente-nao-consegue-fazer-login
locale: pt
legacySlug: cliente-nao-consegue-fazer-login
---

O VTEX ID possui uma regra para evitar que usuários tentem usar o login de outra pessoa de forma maliciosa, de forma que após 3 tentativas sem sucesso, o email é bloqueado por __1 hora__.

O desbloqueio é automático após este tempo e não é possível fazê-lo manualmente.

Isso se aplica tanto aos clientes de uma loja quanto ao acesso administrativo, e até mesmo às APIs.

---


Há um outro cenário parecido, em que o usuário não excedeu as tentativas, contudo não recebe a notificação de recuperação de senha. Nesse caso é provável que o usuário esteja incluido na lista de Supressão da Amazon Web Service. Veja [aqui](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/remove-from-suppression-list.html) a informação fornecida pela AWS a respeito dessa lista.

O Amazon SES mantém uma lista de supressão de endereços de e-mail de destinatários que recentemente causaram um salto brusco de rejeição (bounce) para qualquer cliente do Amazon SES. Essa é uma operação automática por conta da Amazon e não significa que o e-mail permanecerá em uma blacklist. Isso pode ocorrer por conta do provedor que enviou o e-mail estar sendo usado de forma maliciosa por outros usuários.

Mas como na VTEX usamos a mesma plataforma para todos os clientes a lista de supressões de rejeição conta para a mesma quota de envio e taxa de rejeição. Um endereço de e-mail pode permanecer na lista de supressão por até 14 dias.

Caso fique constatado que o cliente não recebe o email e não esta no primeiro cenário descrito acima, é necessário entrar em contato com o suporte VTEX para solicitar a remoção do email da lista de supressão.

Infelizmente a Amazon não possui uma forma automática para que isso seja feito. O processo ainda é manual.
