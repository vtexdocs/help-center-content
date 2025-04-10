---
title: "A partir de `13/11 APIs VTEX` deixarão de 'suportar' autenticação por e-mail e senha"
id: 7AdnXDH7AkYmuEUmmis8Es
status: PUBLISHED
createdAt: 2017-10-25T20:55:52.136Z
updatedAt: 2021-03-22T20:46:37.109Z
publishedAt: 2021-03-22T20:46:37.109Z
contentType: updates
productTeam: Others
author: authors_59
slugEN: 2017-10-25-integrations-with-vtex-apis-now-need-token-authentication
locale: pt
legacySlug: integracoes-com-apis-vtex-agora-precisam-de-autenticacao-por-token
announcementImageID: ''
announcementSynopsisPT: 'VTEX deixará de permitir que integrações com nossas APIs usem e-mail e senha para autenticação'
---

A partir do dia 13 de novembro, 14h (GMT-2, horário do Brasil), __a VTEX deixará de permitir que integrações com nossas APIs usem e-mail e senha para autenticação__.

Para toda integração com a VTEX, será necessário usar appKey e appToken, que podem ser obtidos no módulo License Manager.

### Como era antes

Algumas lojas usavam e-mail e senha como chaves de autenticação em suas integrações com a VTEX. Era um caso permitido por nosso sistema, mas que estava longe de ser ideal.

Os lojistas faziam essa escolha principalmente porque apenas um par de appKey e appToken ficava disponível, o que tornava complicado lidar com múltiplas integrações.

### O que muda

A VTEX vai bloquear integrações por e-mail e senha. A partir do dia 13 de novembro será necessário gerar uma appKey e um appToken no License Manager e usar estas chaves para autenticar qualquer integração com as APIs da VTEX.

### Por quê

Usar e-mail e senha para autenticação compromete a segurança de suas integrações e expõe sua loja a terceiros.

### O que os lojistas precisam fazer
- Verifique se sua loja usa e-mail e senha em alguma integração com as APIs VTEX.
- Caso use, crie um par de appKey e appToken para essa integração. Veja como no artigo [Criar appKey e appToken para autenticar integrações](http://help.vtex.com/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes).

>⚠️ **Atenção**: todo par de appKey e appToken, quando criado, nasce sem estar vinculado a um perfil de acessso. Então, depois de criá-lo, é necessário vincular a appKey e o appToken ao perfil de acesso desejado.
