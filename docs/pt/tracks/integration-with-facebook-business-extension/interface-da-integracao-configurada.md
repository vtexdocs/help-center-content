---
title: 'Interface da integração configurada'
id: DmcxFAdyCC7t0a72hIXeT
status: PUBLISHED
createdAt: 2021-09-30T16:44:47.202Z
updatedAt: 2024-09-05T15:27:53.730Z
publishedAt: 2024-09-05T15:27:53.730Z
firstPublishedAt: 2021-09-30T18:49:28.436Z
contentType: trackArticle
productTeam: Channels
slug: interface-da-integracao-configurada
locale: pt
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugPT: integracao-com-o-facebook-business-extension
---

Concluída a integração com a app _Facebook Business Extension e Conversions API_, o que você passa a visualizar em **Admin VTEX > módulo MARKETPLACE > Facebook** é a centralização de comandos para configurar e gerenciar novos ativos do Facebook.

Nesta interface, há três seções principais: [Status](#status), [Funcionalidades](#funcionalidades) e [Catálogo](#catalogo).

![Facebook business Extension](//images.ctfassets.net/alneenqid6w5/0FVc54WxGh3BorDpQkkzI/4ce29da78c0004ab73cc9b554235bb07/print_interface_pt.png)

## Status

Esta é a seção na qual, além de você poder visualizar o _status_ da sua conexão com o Facebook, são apresentados o ID do Pixel do Facebook e o ID do Catálogo. Nela existe também o botão **Desinstalar**.

### Botão Desinstalar

A qualquer momento você pode remover a integração da app _Facebook Business Extension e Conversions API_. Isso é realizado em duas etapas, uma pelo Admin VTEX, e a outra pelo _Toolbelt_ do VTEX IO.

A desinstalação pelo Admin VTEX interrompe a sincronização do catálogo e revoga seu acesso de usuário ao sistema criado para a integração. Isto significa que a integração será desconfigurada, mas poderá ser refeita a qualquer momento. Para isso, em **Admin VTEX > MARKETPLACE > Facebook**, clique sobre o botão **Desinstalar**. Na nova tela aberta, clique em **Desinstalar**.

A desinstalação pela linha de comando, ou seja, pelo VTEX IO _Toolbelt_, faz com que os eventos da integração não sejam mais disparados. Para realizar essa desinstalação, utilize o comando [Uninstall](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-command-reference#uninstall). Lembrando que isso não impacta no seu acesso às funcionalidades do Facebook, que só é interrompido pelo botão **Desinstalar**.

## Funcionalidades

Nesta seção, é possível habilitar funcionalidades do Facebook que não foram configuradas automaticamente pela integração. Para isso, clique em **CONFIGURAR RECURSOS**. Você será redirecionado para o ambiente do Facebook, para explorar opções de ferramentas e serviços.

## Catálogo

Nesta seção, há dois botões, que exercem as seguintes funções:

- **Detalhes da integração:** redireciona o usuário para a página de integração de produtos enviados para o FBE. Esta página também pode ser encontrada em _Admin VTEX > módulo MARKETPLACE > Integrações > Produtos_.
- **Configurações da integração:** redireciona o usuário para uma tela com campos preenchidos, referentes à integração. Nesta tela, é possível alterar informações utilizadas na integração com o FBE.
