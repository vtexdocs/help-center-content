---
title: 'O Site Editor da minha loja não está funcionando'
id: 3A6Ois91zEZ8zpKJp1wsP2
status: PUBLISHED
createdAt: 2024-08-26T16:52:35.556Z
updatedAt: 2025-08-14T22:58:05.821Z
publishedAt: 2025-08-14T22:58:05.821Z
firstPublishedAt: 2024-08-27T19:19:21.047Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: my-stores-site-editor-is-not-working
legacySlug: o-site-editor-da-minha-loja-nao-esta-funcionando
locale: pt
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:
  - Site editor
  - CMS
  - Store framework
---

O [Site Editor](https://developers.vtex.com/docs/guides/working-with-site-editor) é o Content Management System (CMS) disponível para lojas que utilizam o [Store Framework](https://developers.vtex.com/docs/guides/store-framework). Em algumas situações, você pode encontrar dificuldades para abrir o Site Editor ou salvar conteúdo.

Veja a seguir instruções instruções que podem ajudar a solucionar esses problemas no Site Editor.

| **Problema** | **Descrição** | **Instruções para resolução do problema** |
| ------------ | ------------- | ----------------------------------------- |
| [O Site Editor não abre](#o-site-editor-nao-abre) | A página do Site Editor mostra uma tela em branco ou a mensagem `Algo deu errado`. | - [Verifique a integração de busca](#verificar-a-integracao-de-busca).<br> - [Verifique a configuração do tenant (apenas novas contas)](#verificar-a-configuracao-do-tenant-apenas-novas-contas). |
| [Não consigo gerenciar o conteúdo da minha loja no Site Editor](#nao-consigo-gerenciar-o-conteudo-da-minha-loja-no-site-editor) | Não é possível editar, salvar ou excluir conteúdo no Site Editor. | - [Verifique se o perfil de acesso do usuário tem as permissões necessárias](#verificar-se-o-perfil-de-acesso-do-usuario-tem-as-permissoes-necessarias).<br> - [Verifique a localidade principal do domínio](#verificar-a-localidade-principal-do-dominio). |
| [Perdi o conteúdo armazenado no Site Editor](#perdi-o-conteudo-armazenado-no-site-editor) | O conteúdo salvo no Site Editor foi perdido. | [Abra um ticket para o Suporte VTEX](#perdi-o-conteudo-armazenado-no-site-editor). |
| [Continuo tendo problemas com o Site Editor](#continuo-tendo-problemas-com-o-site-editor) | Você ainda está tendo problemas com o Site Editor depois de tentar resolvê-los. | [Abra um ticket para o Suporte VTEX](#continuo-tendo-problemas-com-o-site-editor). |

Para entender e corrigir cada erro, consulte as soluções abaixo:

## O Site Editor não abre

É possível que o seguinte erro ocorra: ao acessar o VTEX Admin, ir para **Storefront** e clicar em **Site Editor**, a página do Site Editor mostra uma tela em branco ou a mensagem `Algo deu errado`.

![Site Editor - Something went wrong PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/o-site-editor-da-minha-loja-nao-esta-funcionando_1.png)

Para solucionar esse erro, veja as instruções a seguir:

1. [Verifique a integração de busca](#verificar-a-integracao-de-busca).
2. [Verifique a configuração do tenant](#verificar-a-configuracao-do-tenant-apenas-novas-contas)

### Verificar a integração de busca

Esse problema pode estar relacionado ao fato de a busca do [Intelligent Search](/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) não estar integrada ao catálogo de sua loja. Siga os passos abaixo para integrá-la à sua loja:

1. No VTEX Admin, acesse **Configurações da loja > Intelligent Search > Integrações**.
2. Na página **Integrações**, todos os status devem estar ticados, como na imagem a seguir. 

    ![Site Editor - IS integrations PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/o-site-editor-da-minha-loja-nao-esta-funcionando_2.png)

3. Se todos os status estiverem ticados e ainda não for possível abrir o Site Editor, consulte a seção [Verificar a configuração do tenant](#verificar-a-configuracao-do-tenant-apenas-novas-contas). Caso contrário, prossiga para o próximo passo.
4. Se a página Integrações estiver diferente da imagem acima, veja a seguir os possíveis motivos e como solucioná-los:
  - **O status `Ativar busca` não está ticado**: você não iniciou a integração. Clique em `Iniciar integração`.
  - **Um dos status falhou e não está ticado**: se você já tentou iniciar a integração, mas ela ainda falhou, abra um ticket para o [Suporte VTEX](/pt/support) para relatar o erro.

### Verificar a configuração do tenant (apenas novas contas)

Se você já tem a [busca integrada](#verificar-a-integracao-de-busca) e ainda vê uma tela preta ao clicar em **Site Editor** no VTEX Admin, é possível que a loja não tenha definido o tenant ou exista um erro nessa configuração. 

A VTEX usa uma abordagem de arquitetura [SaaS multi-tenancy](https://developers.vtex.com/docs/guides/cloud-infrastructure#saas-multi-tenancy), em que cada conta é um tenant (locatário) que precisa estar conectado (vinculado) à arquitetura da VTEX para sincronização de dados e informações.

Para configurar o tenant em sua loja, abra um ticket para o time de [Suporte VTEX](/pt/support) com essa solicitação. Após receber uma resposta do Suporte confirmando que o tenant foi configurado, acesse o VTEX Admin e clique em **Storefront > Site Editor** para verificar se ele abre corretamente. Se a tela continuar em branco, atualize o ticket aberto para que o time de Suporte VTEX possa investigar melhor.

## Não consigo gerenciar o conteúdo da minha loja no Site Editor

Um erro que pode ocorrer no Site Editor é quando você não consegue editar, salvar ou excluir conteúdo. Ao tentar executar uma dessas ações, aparecerá a seguinte mensagem:

```bash
Algo deu errado. Por favor, tente novamente.
```

Para solucionar esse erro, veja as instruções a seguir:

1. [Verifique se o perfil de acesso do usuário tem as permissões necessárias](#verificar-se-o-perfil-de-acesso-do-usuario-tem-as-permissoes-necessarias).
2. [Verifique se a política comercial está configurada no catálogo](verifique-se-a-politica-comercial-esta-configurada-no-catalogo)
3. [Verifique o locale principal do domínio](#verificar-o-locale-principal-do-dominio)

### Verificar se o perfil de acesso do usuário tem as permissões necessárias

Um possível motivo para esse problema pode estar relacionado à falta do [recurso](/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3) `CMS GraphQL API` do License Manager em um [perfil de acesso](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) para gerenciamento de conteúdo. 

Certifique-se de que os usuários tenham o recurso `CMS GraphQL API` associado a seus perfis de acesso, seja [criando um novo perfil](/pt/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc#creating-a-role) ou editando um existente.

Se ainda não for possível gerenciar o conteúdo mesmo depois de adicionar o recurso `CMS GraphQL API` à função do usuário, veja a próxima seção: [Verificar o locale principal do domínio ](#verificando-o-locale-principal-do-dominio).

### Verificar a localidade principal do domínio

Outro possível motivo para esse erro está relacionado à localidade configurada para a conta.

1. [Instale](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-an-app) o app `vtex.admin-graphql-ide@3.x` usando seu terminal.
2. No VTEX Admin, acesse **Configurações da loja > Storefront> GraphQL IDE**.
3. No menu suspenso, selecione o app `vtex.tenant-graphql@0.1.2`.
4. Na caixa de texto, escreva a seguinte query:

    ```
    query {
      tenantInfo {
        bindings {
          id,
          canonicalBaseAddress,
         defaultLocale
        }
      }
    }
    ```
5. Verifique qual a localidade principal definida para sua loja. Essa informação está disponível no campo `defaultLocale`. Veja o exemplo abaixo.

    ![graphql-default-locale-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/o-site-editor-da-minha-loja-nao-esta-funcionando_3.png)

6. Agora, acesse **Configurações da loja > Canais > Políticas comerciais**.
7. Na página **Políticas comerciais**, selecione a política comercial associada à sua conta e verifique o campo **Localidade**.

    ![Site Editor - Locale PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/operações-da-loja/o-site-editor-da-minha-loja-nao-esta-funcionando_4.png)

  A localidade é considerada incorreta nos seguintes casos:
    - A localidade é diferente do que a conta deveria usar. Por exemplo, a localidade está configurada como `pt-BR`, mas deveria ser `pt-PT`.
    - A localidade está em letras minúsculas. Como essa configuração diferencia maiúsculas de minúsculas, a localidade deve aparecer como `pt-BR` ao invés vez de `pt-br`.
    - A localidade configurada na política comercial é diferente do `defaultLocale` identificado.

8. Em todos os casos, abra um ticket para o [Suporte VTEX](/pt/support) para solicitar a alteração da localidade configurada na política comercial. Lembre-se de incluir evidências do erro, como capturas de tela, logs de mensagens e detalhes da sua investigação prévia.

## Perdi o conteúdo armazenado no Site Editor

Abra um ticket para o time de [Suporte VTEX](/pt/support) para investigar o problema mais a fundo.

Para evitar a perda de conteúdo armazenado no Site Editor ao alterar as dependências de pares do aplicativo Store Theme, siga os passos no guia [Migrating CMS settings after a major theme update](https://developers.vtex.com/docs/guides/vtex-io-documentation-migrating-cms-settings-after-major-update). 

> ⚠️  Nos casos em que o conteúdo armazenado no Site Editor for perdido,a restauração é possível apenas se a perda estiver relacionada ao problema conhecido de [Perda intermitente de conteúdo do Site Editor](/pt/known-issues/perda-intermitente-de-conteudo-do-site-editor--3a5MlAoD2Z7Gu6HDS8wihD). Nessa situação, abra um ticket para o [Suporte VTEX](/pt/support) com a prioridade `urgente`. 

## Continuo tendo problemas com o Site Editor 

Se você já tentou as soluções mencionadas acima e ainda enfrenta problemas com o Site Editor, abra um ticket para o [Suporte VTEX](/pt/support), incluindo evidências dos problemas encontrados:

- Mensagens de erro.
- [Mensagens de log do console](https://developer.chrome.com/docs/devtools/console/understand-messages) (se houver alguma).
- Alterações realizadas antes do problema acontecer.
- Capturas de tela do problema.
- Data e hora em que o problema começou.
- Testes que você já realizou e as etapas para reproduzi-los.
