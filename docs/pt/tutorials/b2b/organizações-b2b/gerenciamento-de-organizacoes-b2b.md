---
title: 'Gerenciamento de organizações B2B'
id: 1UwNCWhML3BsV6anpoUvVZ
status: PUBLISHED
createdAt: 2024-06-12T17:24:48.991Z
updatedAt: 2024-06-12T17:36:48.744Z
publishedAt: 2024-06-12T17:36:48.744Z
firstPublishedAt: 2024-06-12T17:36:48.744Z
contentType: tutorial
productTeam: B2B
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: managing-b2b-organizations
legacySlug: gerenciamento-de-organizacoes-b2b
locale: pt
subcategoryId: 6bSdupUQgvuXjBL9Igawxl
---

O aplicativo **Organizações B2B** permite agrupar usuários B2B em organizações. É possível atribuir meios de pagamento específicos, tabelas de preços e coleções de produtos a cada organização, permitindo que todos os usuários da organização compartilhem as mesmas condições comerciais. Cada organização é segmentada em um ou mais centros de custo, com seus próprios endereços de entrega.

## Acesso à organização compradora

Para acessar a organização compradora no Admin VTEX, acesse **Aplicativos > Organizações e Centros de Custo B2B > Organizações** ou digite **Organizações** na barra de busca no topo da página.

Para acessar a organização, siga os seguintes passos:

1. Clique na aba **Organizações**.

2. Clique sobre o nome da organização compradora que deseja.

As organizações compradoras inclui uma lista de todas as organizações criadas em sua loja e seus status, e permite que os administradores da loja:

- Adicionem novas organizações.

- Acessem a página de detalhes da organização, que inclui dados da organização, centros de custo, coleções, condições de pagamento, tabelas  de preços e usuários.

## Status das organizações

Na coluna Status da aba Organizações é permitido visualizar o status no qual essa organização se encontra.

É possível usar a barra de pesquisa para encontrar uma organização pelo nome ou filtrar as organizações por status.

Cada organização pode ter um dos seguintes status:

- **Ativo:** a organização foi aprovada pelos administradores da loja e está atualmente ativa.

- **Em espera:** a organização está atualmente pausada, o que significa que seus usuários não podem concluir compras no momento.

- **Inativo:** a organização foi desativada pelos administradores da loja, portanto, seus usuários não poderão fazer login.

![Status- PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organiza%C3%A7%C3%B5es-b2b/gerenciamento-de-organizacoes-b2b_1.gif)

## Adicionar uma nova organização

Para adicionar uma nova organização no Admin VTEX, acesse Aplicativos > Organizações e Centros de Custo B2B > Organizações ou digite Organizações na barra de busca no topo da página.

Para adicionar uma nova organização, siga os passos abaixo:

1. Clique na aba Organizações.

2. Clique em `Novo`, e selecione a opção **Adicionar individualmente**.

3. Preencha as informações necessárias sobre a nova organização:
    - **Nome da organização:** nome da organização que você deseja criar.
    - **Nome do centro de custo:** nome do centro de custo inicial associado à organização.
    - **País:** país onde o centro de custo está localizado.
    - **CEP:** código postal do endereço do centro de custo.
    - **Endereço:** nome da rua onde o centro de custo está localizado.
    - **Número:** número do endereço onde o centro de custo está localizado.
    - **Complemento e referência:** informação que possa complementar o endereço do centro de custo.
    - **Bairro:** nome do bairro onde o centro de custo está localizado.
    - **Cidade:** cidade onde o centro de custo está localizado. Isso é preenchido automaticamente com base no CEP informado.
    - **Estado:** estado onde o centro de custo está localizado. Isso é preenchido automaticamente com base no CEP informado.
    - **Destinatário:** nome da pessoa que receberá os pedidos no endereço informado.
4. Clique em `Adicionar`.

![Adiconar organização- PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/b2b/organiza%C3%A7%C3%B5es-b2b/gerenciamento-de-organizacoes-b2b_2.gif)

## Notificações por emails

O aplicativo **Organizações B2B** fornece um conjunto de modelos de email a serem enviados aos usuários da organização, os quais são acionados automaticamente com base em mudanças específicas.

| Nome do Template            | Destinatário                             | Acionamento                                                                                                                           |
|-----------------------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Organization Created        | Usuário com perfil de Sales Admin        | Quando a organização é criada.                                                                                                        |
| Organization Approved       | Usuário com perfil de Organization Admin | Quando a solicitação de criação de organização é aprovada.                                                                            |
| Organization Declined       | Usuário com perfil de Organization Admin | Quando a solicitação de criação de organização é negada.                                                                              |
| Organization Status Changed | Usuário com perfil de Organization Admin | Quando o status da organização foi alterado.                                                                                          |

Para visualizar ou customizar algum desses modelos, siga as etapas abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Templates de Email > Templates**.

2. Na barra de pesquisa, digite **Organization**.

3. Clique no modelo que deseja visualizar ou editar.

4. Faça as alterações desejadas no modelo.

5. Clique em `Salvar`.

Para saber mais sobre a edição de modelos do Email Template, acesse nosso artigo [Criar ou editar modelos de email transacional](/pt/tracks/transactional-emails--6IkJwttMw5T84mlY9RifRP/335JZKUYgvYlGOJgvJYxRO).
