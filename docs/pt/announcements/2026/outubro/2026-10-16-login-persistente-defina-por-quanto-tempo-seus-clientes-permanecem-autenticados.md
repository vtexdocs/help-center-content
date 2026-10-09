---
title: 'Login persistente: defina por quanto tempo seus clientes permanecem autenticados'
slug: '2026-10-16-login-persistente-defina-por-quanto-tempo-seus-clientes-permanecem-autenticados'
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: updates
productTeam: Identity
slugEN: '2026-10-16-persistent-login-set-how-long-your-customers-stay-authenticated'
locale: pt
announcementSynopsisPT: 'Configure por quantos dias seus clientes permanecem autenticados na loja virtual, de 1 a 365 dias, diretamente no Admin VTEX.'
tags:
  - Nova funcionalidade
  - Identity
  - Admin
---

Agora você pode definir por quantos dias seus clientes permanecem autenticados na loja virtual, de **1 a 365 dias**, com o **login persistente**. Assim, eles não precisam fazer login novamente a cada 24 horas. A configuração é feita diretamente na página **Autenticação** do Admin VTEX, sem a necessidade de abrir um chamado com o Suporte VTEX.

![Card Login persistente na página Autenticação do Admin VTEX](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2026/outubro/2026-10-16-login-persistente-defina-por-quanto-tempo-seus-clientes-permanecem-autenticados_1.png)

## O que mudou?

Por padrão, a sessão de login dos clientes na loja virtual expira após 24 horas. Antes, para estender esse período, era necessário abrir um chamado com o Suporte VTEX para solicitar a ativação do refresh token e definir o tempo de expiração. Agora, com o login persistente habilitado, além do cookie de acesso, que continua com duração fixa de 24 horas, a plataforma emite um token de atualização que renova o acesso do cliente sem exigir um novo login, pelo período que você configurar.

Veja como a funcionalidade se comporta:

* O login persistente é opcional e vem desabilitado por padrão. Se você não configurar nada, o comportamento da sua loja não muda e a sessão dos clientes continua expirando após 24 horas.
* A duração pode ser qualquer número inteiro de dias, de **1** a **365**. Ao habilitar a funcionalidade pela primeira vez, a duração padrão é de **1 dia**.
* As alterações, incluindo desabilitar a funcionalidade, valem apenas para os novos logins. Sessões já ativas não são afetadas.
* A configuração afeta apenas as sessões de clientes na loja virtual. O login de usuários administrativos no Admin VTEX não muda.

## Por que fizemos essa mudança?

Antes, a ativação do refresh token e a definição da sua expiração dependiam de um chamado ao Suporte VTEX, e as únicas durações disponíveis eram 1, 7 ou 30 dias. Agora, você pode ativar e modificar essa configuração no Admin VTEX, escolhendo qualquer número inteiro de dias, de 1 a 365, para reduzir a necessidade de novos logins na sua loja.

## O que precisa ser feito?

Para usar o login persistente, habilite a funcionalidade no Admin VTEX. Dependendo da tecnologia do seu storefront, também pode ser necessário concluir etapas adicionais para que a renovação do acesso dos clientes funcione.

### Habilitar o login persistente

Para habilitar ou alterar o login persistente, o usuário deve ter um [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) com o recurso **Write Account Config**, na categoria Account Configuration do produto VTEX ID.

O login persistente só passa a funcionar quando você o habilita. Para configurá-lo, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da conta > Autenticação**.
2. Na aba **Loja virtual**, localize o card **Login persistente** e clique no interruptor para habilitar a funcionalidade.
3. Para alterar a duração, clique em `Editar`, informe um número inteiro entre **1** e **365** dias no campo **Duração da sessão** e clique em `Salvar`.

![Janela de configuração da duração do login persistente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/announcements/2026/outubro/2026-10-16-login-persistente-defina-por-quanto-tempo-seus-clientes-permanecem-autenticados_2.png)

Saiba mais em [Configurar login persistente para clientes](https://help.vtex.com/pt/docs/tutorials/configurar-login-persistente-para-clientes).

### Etapas adicionais por tipo de loja

Depois de habilitar o login persistente, confira se a sua loja precisa de alguma etapa adicional. O que muda é a forma como o acesso do cliente é renovado, que depende da tecnologia do storefront.

Em lojas com [Store Framework](https://developers.vtex.com/docs/guides/store-framework) ou [CMS Portal (Legado)](https://help.vtex.com/pt/docs/tracks/cms-portal-legado), basta habilitar o login persistente no Admin VTEX, pois a renovação do acesso do cliente na loja é automática.

Em lojas headless, além de habilitar o login persistente no Admin VTEX, é necessário implementar a renovação do acesso do cliente por meio das APIs do VTEX ID. O guia para desenvolvedores [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations) explica como fazer essa implementação.

Se a sua loja usa FastStore, além de habilitar o login persistente no Admin VTEX, é necessário habilitar o refresh token no projeto, conforme o guia [Enabling refresh token on FastStore](https://developers.vtex.com/docs/guides/faststore/session-enabling-refresh-token).
