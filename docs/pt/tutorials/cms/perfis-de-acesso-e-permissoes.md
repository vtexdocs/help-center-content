---
title: "Perfis de acesso e permissões"
createdAt: "2026-07-08T10:00:00.219Z"
updatedAt: "2026-07-21T10:00:00.219Z"
contentType: tutorial
productTeam: CMS
slugEN: roles-and-permissions
locale: pt
---

No CMS, os perfis de acesso e as permissões controlam o que cada membro da equipe pode criar, editar e publicar. Ao atribuir o perfil de acesso adequado a cada usuário, você garante que a criação e a publicação de conteúdo permaneçam organizadas e que apenas usuários autorizados possam fazer alterações na loja publicada.

## Fluxo de publicação baseado em branches

O CMS usa um modelo de branches semelhante ao do Git. Entender esse modelo ajuda a compreender por que os perfis de acesso de Editor e Producer têm níveis de permissão diferentes.

* As branches são o espaço de criação de conteúdo. Qualquer usuário autenticado, incluindo Producers, pode criar e editar conteúdo aqui.
* A branch `main` representa o conteúdo publicado em produção. As alterações na `main` são aplicadas imediatamente no storefront. Somente Editors e Administrators podem fazer commit ou merge na `main`.
* A etapa de merge é onde a aprovação acontece. Quando um Producer termina de trabalhar em uma branch, um Editor ou Administrator revisa e faz o merge, subindo as alterações para o storefront. Esse modelo permite que as equipes separem a criação de conteúdo da publicação, dando controle sobre o que é publicado e quando.

## Perfis de acesso

O CMS inclui três perfis de acesso predefinidos:

* **Content Producer**: cria e edita o conteúdo dentro das branches. Não pode publicar no storefront em produção (branch `main`).
* **Content Editor**: gerencia o ciclo de vida completo do conteúdo: criação, edição e publicação. Gerencia as operações da branch.
* **Content Administrator**: acesso completo, incluindo todas as funcionalidades do Content Editor, além da configuração da loja e da localidade.

### Adicionar perfis de acesso

Os perfis de acesso são atribuídos pelo Admin VTEX. Nenhuma configuração é necessária. Os três perfis de acesso são predefinidos e ficam disponíveis assim que o aplicativo é instalado. Para disponibilizá-los na sua conta, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da conta > Perfis de acesso**.
2. Clique em `Novo perfil`.
3. Em **Escolher perfil de acesso**, selecione um dos três perfis: **Content Administrador**, **Content Producer** ou **Content Editor**.
4. No campo **Nome do perfil**, digite um nome para o perfil.
5. Clique em `Salvar`.

## Branches

A tabela a seguir mostra quais ações de gerenciamento de branches cada perfil de acesso pode realizar.

| Ação | Content Producer | Content Editor | Content Administrator |
| :---- | ----- | :---: | :---: |
| Salvar na branch `main` - Publica as alterações no storefront. | ❌ | ✅ | ✅ |
| Remover da branch `main` - Despublica do storefront. | ❌ | ✅ | ✅ |
| Fazer merge da branch - Promove uma feature branch para a branch main imediatamente ou em uma data agendada. | ❌ | ✅ | ✅ |
| Excluir branch - Exclui todas as versões com alterações dentro da branch. | ❌ | ✅ | ✅ |
| Criar branch - Cria uma nova branch para desenvolver e avaliar o conteúdo antes da publicação. | ✅ | ✅ | ✅ |

## Entradas

A tabela a seguir mostra quais ações em nível de entrada cada perfil de acesso pode realizar.

| Ação | Content Producer | Content Editor | Content Administrator |
| :---- | ----- | :---: | :---: |
| Ver conteúdo - Navega pelas entradas em todas as branches. | ✅ | ✅ | ✅ |
| Criar e editar entradas - Cria e modifica entradas de conteúdo em feature branches. | ✅ | ✅ | ✅ |
| Excluir entradas - Exclui permanentemente uma entrada e todas as suas versões. Essa ação é irreversível. | ❌ | ❌ | ✅ |

## Lojas

A tabela a seguir mostra quais ações de configuração de loja cada perfil de acesso pode realizar.

| Ação | Content Producer | Content Editor | Content Administrator |
| :---- | :---- | :---: | :---: |
| Criar e configurar lojas - Configure lojas e gerencie configurações relacionadas, incluindo storefront, idiomas e configurações regionais. | ❌ | ❌ | ✅ |

## Casos de uso

Os cenários a seguir mostram como os perfis de acesso interagem em fluxos comuns de conteúdo.

### Lançar uma campanha sazonal

Quando sua equipe está organizando uma campanha sazonal, um Content Producer trabalha nas páginas em uma feature branch e, quando o conteúdo está pronto, um Content Editor o revisa e faz merge na `Main` para publicar.

![lauching-a-seasonal-campaign-flow](https://vtexhelp.vtexassets.com/assets/docs/src/lauching-a-seasonal-campaign___4a8f3b593f6c2901c192d9a698646b2e.png)

### Adicionar uma nova localidade no storefront

Quando sua loja precisa dar suporte a um novo idioma, um Content Administrator cuida primeiro da configuração da localidade e, assim que estiver pronta, os Producers podem começar a criar conteúdo para ela e os Editors podem publicá-lo.

![storefront-locale-role-flow](https://vtexhelp.vtexassets.com/assets/docs/src/storefront-locale-role-flow___db87989d885e827bbf1b42ae69958494.png)
