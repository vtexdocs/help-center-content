---
title: 'Configurar login persistente para clientes'
createdAt: 2026-09-18T00:00:00.000Z
updatedAt: 2026-09-18T00:00:00.000Z
contentType: tutorial
productTeam: Identity
slugEN: configuring-persistent-login-for-shoppers
locale: pt
---

O login persistente permite manter o cliente autenticado na sua loja virtual por mais tempo, sem exigir um novo login a cada 24 horas. Ao habilitar essa funcionalidade, você define por quantos dias o cliente permanece conectado, diretamente pela página **Autenticação** no Admin VTEX, sem precisar abrir um chamado com o Suporte VTEX.

> ℹ️ O login persistente afeta apenas as sessões de clientes na loja virtual. As sessões de login dos usuários administrativos no Admin VTEX não são afetadas por essa configuração.

## Como funciona

Ao acessar a loja, o cliente recebe um cookie de acesso (`VtexIdclientAutCookie_{account}`) com duração fixa de 24 horas, que não pode ser configurada. Quando o login persistente está habilitado, a plataforma também emite um token de atualização (`vid_rt`), responsável por renovar o acesso do cliente sem exigir um novo login, pelo período que você configurar.

Alguns pontos importantes sobre o funcionamento dessa configuração:

* O login persistente é opcional e vem desabilitado por padrão. Se você não configurar nada, o comportamento da sua loja não muda.
* A duração pode ser qualquer número inteiro de dias, de **1** a **365**.
* Ao habilitar o login persistente pela primeira vez, a duração padrão é de **1 dia**. Você pode alterá-la a qualquer momento.
* Alterações na configuração (incluindo desabilitar o login persistente) valem apenas para os novos logins realizados após a mudança. Sessões já ativas continuam se comportando como estavam antes da alteração.
* Se você desabilitar o login persistente e depois o habilitar novamente, a última duração salva é restaurada (a configuração não volta automaticamente para 1 dia).
* Em lojas com [Store Framework](https://developers.vtex.com/docs/guides/store-framework) ou [CMS Portal (Legado)](https://help.vtex.com/pt/docs/tracks/cms-portal-legado), a renovação do acesso do cliente é automática. Em lojas headless, é necessário implementar a renovação do token por conta própria, exceto quando o storefront usa o [FastStore SDK](https://developers.vtex.com/docs/guides/faststore/sdk-overview). Para implementar a renovação de sessão em uma loja headless, consulte o guia para desenvolvedores [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations).

## Pré-requisitos

Para habilitar ou alterar o login persistente, o usuário deve ter um [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) com o recurso **Write Account Config**, na categoria Account Configuration do produto VTEX ID. Sem essa permissão, a alteração não é salva e uma mensagem de erro é exibida.

## Habilitar o login persistente

Para começar a usar o login persistente, habilite a funcionalidade no card correspondente da página **Autenticação**:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.
3. Na aba **Loja virtual**, localize o card **Login persistente**, abaixo dos métodos de login.
4. Clique no interruptor para habilitar a funcionalidade.
    ![Card Login persistente na aba Loja virtual](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/configurar-login-persistente-para-clientes_1.gif)

Ao habilitar, uma notificação confirma a ativação e informa a duração que passa a valer para os novos logins (1 dia, no primeiro uso, ou a última duração salva, em uma reativação).

## Configurar a duração do login persistente

A duração configurada não é exibida diretamente no card. Para consultá-la ou alterá-la, siga os passos abaixo:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.
3. Na aba **Loja virtual**, no card **Login persistente**, clique em `Editar`.

    Uma janela é aberta com a duração atualmente configurada, em dias.
    ![Janela de configuração da duração do login persistente](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/autenticação/conceitos-básicos-de-autenticação/configurar-login-persistente-para-clientes_2.png)
4. No campo **Duração da sessão**, informe um número inteiro entre **1** e **365** dias.
5. Clique em `Salvar`.

Se o valor informado estiver fora do intervalo permitido ou não for um número inteiro, uma mensagem de erro é exibida e a alteração não é salva.

Você pode configurar a duração mesmo com o login persistente desabilitado. Nesse caso, o valor é salvo e passa a valer assim que a funcionalidade for habilitada.

## Desabilitar o login persistente

Se não quiser mais manter os clientes conectados por um período estendido, desabilite a funcionalidade a qualquer momento:

1. Na barra superior do Admin VTEX, clique no avatar do seu perfil, marcado pela inicial do seu email.
2. Clique em **Configurações da conta > Autenticação**.
3. Na aba **Loja virtual**, no card **Login persistente**, clique no interruptor para desabilitar a funcionalidade.

A partir desse momento, os novos logins de clientes deixam de receber o token de atualização, voltando ao comportamento padrão de expiração em 24 horas. Sessões já ativas não são alteradas por essa mudança.

## Saiba mais

- [Refresh token flow for headless implementations](https://developers.vtex.com/docs/guides/refresh-token-flow-for-headless-implementations)
- [Autenticação](https://help.vtex.com/pt/docs/tutorials/autenticacao)

