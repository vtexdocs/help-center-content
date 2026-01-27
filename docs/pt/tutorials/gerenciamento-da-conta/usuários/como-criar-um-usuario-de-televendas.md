---
title: 'Criar usuário de televendas'
id: frequentlyAskedQuestions_4227
status: PUBLISHED
createdAt: 2019-01-24T20:46:00.809Z
updatedAt: 2025-09-30T18:42:28.656Z
publishedAt: 2025-09-30T18:42:28.656Z
firstPublishedAt: 2019-01-24T21:59:45.397Z
contentType: tutorial
productTeam: Shopping
author: authors_24
slugEN: how-can-i-create-callcenter-user
legacySlug: como-criar-um-usuario-de-televendas
locale: pt
subcategoryId: 63DHe3VQEEE6Uuua8gIs2M
---

Este artigo explica como cadastrar um usuário com um perfil de acesso de televendas. Para mais informações sobre perfis de acessos e como configurá-los, veja o artigo [Perfis de acesso](https://help.vtex.com//pt/tutorial/perfis-de-acesso-).

Por meio dos perfis de televendas, o lojista pode dar permissão de acesso a usuários da área de televendas para atender clientes e realizar operações de venda.

> ℹ️ Usuários com perfil de Call Center Operator têm acesso restrito ao ambiente de televendas da loja. Eles não têm acesso aos módulos administrativos do Admin VTEX, como Catálogo, Pagamentos, Promoções, entre outros. O acesso é limitado exclusivamente às funcionalidades necessárias para realizar vendas assistidas em nome dos clientes.

Ao fazer login, o usuário com perfil de televendas é automaticamente redirecionado para o site de televendas, onde pode fazer operações na loja em nome do cliente final.

Para criar um usuário com perfil de televendas, siga os seguintes passos:

1. Clique em **Gerenciamento da conta** > **Perfis de acesso**.
2. Clique no botão **Novo Perfil**.
3. No menu **Escolher perfil de acesso**, selecione um dos perfis de televendas:

   * **Call center operator**: Permite acesso às [funcionalidades de televendas](https://help.vtex.com/pt/tutorial/funcionalidades-de-televendas) e à visualização de todos os pedidos no módulo **Pedidos**.
   * **Call center operator (restricted order views)**: Permite acesso às funcionalidades de televendas, mas permite visualizar apenas os pedidos criados pelo próprio usuário.

   Para mais detalhes sobre os recursos de cada perfil, consulte [Perfis de acesso predefinidos](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#call-center-operator).
4. No campo **Adicionar usuários para este perfil de acesso**, digite o email do usuário ao que deseja atribuir o perfil de televendas.
5. Clique no botão `Adicionar`.
6. Caso queira adicionar mais usuários, repita os passos 4 e 5. 
7. Clique no botão `Salvar`.

> ⚠️ Ao criar um [perfil](https://help.vtex.com/pt/tutorial/perfis-de-acesso), evite incluir [recursos](https://help.vtex.com/pt/tutorial/recursos-do-license-manager) de televendas junto com outros recursos. Do contrário, o perfil pode não funcionar como esperado.
