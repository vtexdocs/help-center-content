---
title: 'Gerenciando Projetos'
id: 42IpDFqTVTESH8DCypJMPM
status: PUBLISHED
createdAt: 2023-11-01T13:45:57.091Z
updatedAt: 2024-09-11T14:05:18.500Z
publishedAt: 2024-09-11T14:05:18.500Z
firstPublishedAt: 2023-11-01T19:38:50.237Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: gerenciando-projetos
locale: pt
legacySlug: gerenciando-projetos
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

Projetos é uma funcionalidade do VTEX Headless CMS que simplifica o gerenciamento de vários projetos de frontend, como aplicativos móveis, sites e email marketing em uma única tela.

![Projects pages](//images.ctfassets.net/alneenqid6w5/5sXlS9M78whzUVdSxJiKpX/b5bd29ece472c96fceb0aefb71a5365a/projects-one-pt-certo.gif)

Cada projeto tem suas configurações, conteúdo e marca personalizados de acordo com públicos ou objetivos específicos.

Neste guia, você aprenderá como gerenciar cada projeto de frontend da sua loja.

>⚠️ [ FastStore WebOps usuários](https://developers.vtex.com/docs/guides/faststore/1-onboarding-overview):As alterações feitas pelo Headless CMS no VTEX Admin, como a criação de novos tipos de conteúdo (content types), a adição de seções ou a atualização de campos, podem não aparecer automaticamente na loja uma vez que você as publique. Isso é um problema conhecido, e você deve entrar em contato com sua equipe de desenvolvimento para implementar a solução necessária. Para instruções detalhadas, consulte o artigo de problema conhecido [ O aplicativo WebOps não está totalmente integrado com o Headless CMS](https://help.vtex.com/pt/known-issues/webops-app-is-not-fully-integrated-with-headless-cms--577fIocKB9BYYCOkN9dZfW).

## Antes de começar
Certifique-se de que os [recursos](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `See CMS menu on the top-bar`, `Settings` e `CMS GraphQL API` estão associados ao seu [Perfil de acesso](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc?&utm_source=autocomplete). Caso contrário, [crie um perfil de acesso](https://help.vtex.com/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso) e adicione esses recursos a eles ou adicione esses recursos a um perfil de acesso existente.

## Visão geral
Para acessar a página de **Projetos**, entre no VTEX Admin e clique em **Storefront > Headless CMS**.

![Projects overview](//images.ctfassets.net/alneenqid6w5/3RgVmOuLr7SJmEfots0KMZ/c5a1f1ba3077c11504d9f78c1712c59e/projects-two-pt.png)

| Opção               | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| Cartão projeto      | Abre o projeto selecionado, para que você possa criar e editar páginas do conteúdo dele.       |
| Configurações (⚙️) | Abre um modal com as configurações do projeto separadas em três abas: <ul><li>**Geral:** permite editar o ID do projeto e as configurações de API ou arquivar o projeto.</li> <li>**Content-Types:** conecta o projeto no Headless CMS ao código da loja via webhooks, configurando os tipos de conteúdo (content types) e as seções.</li><li>**Build:**  inicia e gerencia compilações do site. Define uma URL de webhook para notificações de compilação e um endpoint para visualizar as versões da página.</li></ul> |
| Criar novo       | Abre uma página para configurar um novo projeto.       |

## Criar novo projeto

Crie um novo projeto para sua loja definindo as configurações gerais, como **ID do projeto** e **URL base de produção**. Para conectar um projeto Headless CMS ao código-fonte do seu projeto, você também precisará definir webhooks e configurações de build, como *URL de build do webhook* e * URL de pré-visualização*.

O webhook é um endpoint HTTP que permite a comunicação automatizada entre o VTEX Headless CMS e o código-fonte do projeto. Ele permite, por exemplo, que o CMS notifique um projeto FastStore sobre alterações de conteúdo ou outros eventos, desencadeando ações como a sincronização de conteúdo em tempo real.

1. Na página **Projetos**, clique em `Criar novo`.

2. Na página **Novo projeto**, preencha os campos de acordo com a seção [Configurações do projeto](#configurações-do-projeto).

3. Depois de definir cada campo da página, clique em `Criar` e uma mensagem de sucesso será exibida na tela.

Depois de criar um novo projeto, você poderá criar páginas para ele com todas as rotas de URL e modelos de página compatíveis com a sua loja, como páginas iniciais, de produtos e de login.

Para criar uma nova página, siga os passos em [Gerenciando páginas no Headless CMS](https://help.vtex.com/tutorial/managing-pages--3DO6rBhZ1p3zndnFu5BgRt)

## Configurações do projeto
As configurações do projeto permitem que você o configure de acordo com três categorias principais:

- [Geral](#geral): permite editar o ID do projeto e as configurações de API, além de arquivar o projeto.
- [Content-Types](#content-types): conecta o projeto no Headless CMS ao código da loja via webhooks, configurando os tipos de conteúdo (content types) e as seções.
- [Build](#build): inicia e gerencia compilações do site e define uma URL de webhook para notificações de compilação e um endpoint para visualizar as versões da página.

### Geral

| Nome do campo               | Descrição      | Exemplo de valor |
| --------------------------- | -------------- | ---------------- |
| ID do projeto (obrigatório) | ID do projeto. | `FastStore`      |
| Storefront      | Define os storefronts da VTEX disponíveis(`FastStore` ou `Personalizado`) e sua finalidade.  | Veja a seção [Storefront](#storefront) para mais informações. |

#### Storefront

Este campo determina as configurações de [build](#build) com base no storefront escolhido. As opções incluem:

- **VTEX Storefronts**:

Escolha um storefront da sua conta (por exemplo, FastStore). Os campos de [Build](#build) se ajustam automaticamente de acordo como storefront escolhido. Você ainda poderá personalizá-los posteriormente.

- **Personalizado**
   Escolher um storefront `Personalizado` oferece a flexibilidade de definir suas próprias configurações de [build](#build).

### Content-Types

| Nome do campo               | Descrição      | Exemplo de valor |
| ---------------------- | --------------------- | ----------------- |
| URL das seções | URL do webhook para receber e salvar as seções criadas no código-fonte no Headless CMS.      |  `https://infra.io.vtex.com/vbase/v0/{nomedaconta}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/sections`       |
| URL dos tipos de conteúdo      | URL do webhook para receber e salvar os tipos de conteúdo criados no código-fonte no Headless CMS.       | `https://infra.io.vtex.com/vbase/v0/{nomedaconta}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/content-types`       |

### Build

| Nome do campo               | Descrição      | Exemplo de valor |
| ---------- | ---------- | ---------- |
| URL das seções | URL do webhook para receber e salvar as seções criadas no código-fonte no Headless CMS.      | `https://infra.io.vtex.com/vbase/v0/{nomedaconta}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/sections`       |
| URL dos tipos de conteúdo      | URL do webhook para receber e salvar os tipos de conteúdo criados no código-fonte no Headless CMS.       | `https://infra.io.vtex.com/vbase/v0/{nomedaconta}/master/buckets/vtex.admin-cms-graphql-rc/store/files/{builderId}/content-types`       |
| URL de build do webhook       | URL do webhook para iniciar um novo build no Headless CMS quando uma página ou conteúdo é adicionado ou editado.       | `https://app.io.vtex.com/vtex.cms-builder-sf-jamstack/v1/{nomedaconta}/{workspace}/build-releases`       |
| Salvar URL do webhook       | URL do webhook para permitir pré-visualizações do projeto em tempo real, enviando uma notificação para que você atualize a página para refletir as alterações mais recentes no Headless CMS.       |  -       |
| URL de pré-visualização       | URL do webhook que permite a pré-visualização de páginas no Headless CMS.       | `https://{nomedaconta}.vtex.app/api/preview`       |

## Editar projeto
Após criar o projeto, você também pode editar todas as informações que definiu durante a [criação do projeto](#criar-novo-projeto).
Na página principal **Projetos**, clique em **Configurações** (⚙️). Em seguida, um modal aparecerá com três abas de configurações: [Geral](#geral), [Content-Types](#content-types) e [Build](#build).

### Restaur a URL padrão das seções

Depois de [criar o projeto](#criar-novo-projeto), para editar o campo [URL das seções](#content-types), clique em `Editar`, adicione a nova URL do webhook e clique em `Salvar`. Para restaurar a URL padrão, clique em `Restaurar URL padrão`.

## Arquivar projeto
O arquivamento de um projeto desativa a API e o acesso ao seu conteúdo.
Para arquivar um projeto, siga os passos abaixo:

1. Acesse **Storefront > Projetos**.

2. Escolha o projeto que deseja arquivar e clique em **Configurações** (⚙️). Isso abrirá um modal.

3. No modal, clique em `Arquivar projeto` na página `Geral`. Uma mensagem pop-up aparecerá confirmando se você deseja arquivar o projeto.
![Arquivar projeto](//images.ctfassets.net/alneenqid6w5/3FkQ3UCU68HH8QkP4LH91I/c7410dbcff84549da3a15720a0ce68ed/projects-three-pt.png)
4. Clique em `Arquivar`. Em seguida, será exibida uma mensagem informando que o projeto foi arquivado com sucesso.

Para restaurar um projeto arquivado, siga os passos em [Restaurar projeto](#restaurar-projeto).

### Restaurar projeto
Ao restaurar um projeto, sua API é reativada e o conteúdo do projeto pode ser acessado novamente. Para restaurar um projeto, siga os passos abaixo:

1. Acesse **Storefront > Projetos**.

2. Clique no cartão do projeto arquivado.

3. Clique em `Restaurar projeto`. Uma mensagem pop-up aparecerá confirmando se você deseja restaurar o projeto.

4. Clique em `Restaurar`. Em seguida, será exibida uma mensagem informando que o projeto foi restaurado com sucesso.

