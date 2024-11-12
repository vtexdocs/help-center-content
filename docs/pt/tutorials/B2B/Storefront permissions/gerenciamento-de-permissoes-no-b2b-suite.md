---
title: 'Gerenciamento de permissões no B2B Suite'
id: 2PLR7mIFxgbmsGq84paLeA
status: PUBLISHED
createdAt: 2024-06-05T18:01:03.375Z
updatedAt: 2024-06-07T13:37:21.121Z
publishedAt: 2024-06-07T13:37:21.121Z
firstPublishedAt: 2024-06-06T10:57:21.290Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: permissions-management-in-b2b-suite
locale: pt
legacySlug: gerenciamento-de-permissoes-no-b2b-suite
subcategoryId: 1qGLxbxcX8kwKSWESbLZca
---

Em uma organização, o Organization Admin (usuário principal) é o responsável por gerenciar o acesso de diferentes pessoas em uma loja B2B. Para realizar esta ação, ele utiliza o sistema de permissões no B2B Suite.

Por meio deste aplicativo, é possível realizar:

- **Configuração inicial:** o administrador cria os perfis de acesso predefinidos e as permissões associadas a eles.

- **Associação de papéis e permissões:** os perfis de acesso predefinidos são associados às diferentes funções e responsabilidades dentro da organização. Cada papel tem suas próprias permissões específicas.

- **Sincronização automática de informações:** o aplicativo se comunica automaticamente com outros aplicativos do B2B Suite, como [Organizações B2B](https://developers.vtex.com/docs/apps/vtex.b2b-organizations), para habilitar diferentes capacidades de gerenciamento de organização dependendo do perfil de acesso de cada usuário.

- **Verificação de permissões:** quando um usuário realiza uma ação na loja, como realizar um pedido ou acessar determinada funcionalidade, o aplicativo verifica se esse usuário tem as permissões necessárias para executar essa ação com base no perfil de acesso atribuído a ele anteriormente.

- **Gerenciamento de permissões:** o aplicativo opera em segundo plano (backstage), armazenando os perfis de acesso predefinidos.

## Perfis de acesso e permissões

O aplicativo de Permissões da loja permite que, dentro de uma organização, cada usuário tenha diferentes papéis, como um comprador que faz pedidos com limites de orçamento de um centro de custo pré-definido ou um gerente responsável por revisar e aprovar pedidos. Esses papéis podem estar associados a múltiplas permissões, dependendo das ações que esse usuário precisa realizar.

## Perfis de acesso à loja

A tabela a seguir apresenta os perfis disponíveis na loja, suas chaves e descrições.

| Perfil                | Chave                | Descrição                                                                                                                                                                                |
|-----------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Store Admin           | store-admin          | O administrador da loja é o usuário que acessa o Admin VTEX e gerencia a loja.                                                                                                           |
| Sales Admin           | sales-admin          | Usuário administrador de vendas que pode gerenciar todos os usuários de vendas.                                                                                                          |
| Sales Manager         | sales-manager        | Usuário gerente de vendas que pode gerenciar usuários de vendas na mesma organização, além de auxiliar compradores e simular compras em uma loja.                                        |
| Sales Representative  | sales-representative | Usuário representante de vendas que pode auxiliar ou simular compras em uma loja.                                                                                                        |
| Organization Admin    | customer-admin       | Usuário principal da organização que gerencia as informações da empresa, assim como seus membros e centros de custo.                                                                     |
| Organization Approver | customer-approver    | Usuário da organização que pode obter um carrinho ou cotação salvo anteriormente por um Comprador da Organização e criar um novo pedido.                                                 |
| Organization Buyer    | customer-buyer       | O usuário da organização pode adicionar itens ao carrinho. Se o aplicativo [B2B Quotes & Carts](https://developers.vtex.com/docs/apps/vtex.b2b-quotes) estiver instalado, ele também pode salvar o carrinho para uso futuro ou criar uma cotação. |

## Configurando o gerenciamento de perfis de acesso

Para gerenciar perfis de acesso e permissões de aplicativos, configure as permissões seguindo os passos abaixo na interface de usuário de Permissões da loja.

1. No Admin VTEX, acesse **Aplicativos > Apps instalados > Permissões da loja**, ou digite **Permissões da loja** na barra de busca no topo da página.

2. Clique em um dos perfis da loja disponíveis.

3. Clique em um dos aplicativos listados.

4. Selecione quais permissões deseja habilitar para o perfil.

5. Clique em `Salvar`.

![Gerenciamento de permissões - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.gif)

Depois de associar os perfis com as permissões desejadas, você pode atribuir funções aos usuários. Para saber mais, acesse [Organizações B2B](https://developers.vtex.com/docs/guides/vtex-b2b-organizations#users).

