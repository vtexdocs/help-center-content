---
title: 'Erro de autorização ao executar VTEX link '
id: 6KZPAY3hwAowc2MKEYiCwc
status: ARCHIVED
createdAt: 2018-12-05T13:06:52.031Z
updatedAt: 2020-03-13T21:25:23.945Z
publishedAt: 
firstPublishedAt: 2018-12-05T14:01:50.813Z
contentType: knownIssue
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
tag: VTEX IO
slugEN: error-when-running-vtex-link-for-the-first-time
locale: pt
kiStatus: Open
internalReference: 
---

## Sumário

Ao executar `vtex-link` pela primeira vez, o usuário recebe a seguinte mensagem de erro: `O usuário xxxx@xxxx.com não está autorizado para "node"`.

Embora todos os desenvolvedores possam criar lojas usando o Store-Framework, os aplicativos Node + GraphQL e Extensibilty exigem permissões especiais. Agora, as contas que desejam entrar na whitelist para estender seus aplicativos com a funcionalidade Node + GraphQL e Extensibility devem ser _enterprise_.

A mensagem de autorização de erro pode mudar de `node` para `react` de acordo com a opção escolhida.

## Simulação

1. Instalar o VTEX CLI (ToolBelt)
2. Navegar até o diretorio da app
3. Executar o comando "vtex-link" no terminal
4. ![image (8)](//images.ctfassets.net/alneenqid6w5/3NTzMXCKgM8GA6Y6eEKAA2/7d11d9a4e05ef1274beebe494bd8baf9/image__8_.png)

## Workaround

1. Preencha o [formulário](https://suportevtex1.typeform.com/to/SxXknn)
2. Acesse o módulo de Gerenciamento da conta e garanta que o seu perfil tem as permissões de "VTEX IO Admin"

>ℹ️ O preenchimento do formulário não garante o acesso à Whitelist de Node + GraphQL e Extensibilty.


