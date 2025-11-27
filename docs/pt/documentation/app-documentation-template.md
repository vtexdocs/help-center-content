---
title: 'Documentação de aplicativos'
id: edu0005-pt
status: PUBLISHED
createdAt: 2025-11-25T19:24:22.388Z
updatedAt: 2025-11-25T11:55:00.388Z
publishedAt: 2025-11-25T19:24:22.388Z
firstPublishedAt: 2025-11-25T19:24:22.388Z
contentType: trackArticle
productTeam: Education
slugPT: documentacao-de-aplicativos
locale: pt
trackId: 5PxyAgZrtiYlaYZBTlhJ2A
trackSlugPT: documentacao-de-aplicativos
---

A documentação de apps ajuda os usuários a entender os [aplicativos VTEX](https://developers.vtex.com/docs/guides/vtex-io-documentation-what-is-a-vtex-app), incluindo sua instalação e configuração.

> ℹ️ Para adicionar documentação a um aplicativo, você deve usar o [Docs builder](https://developers.vtex.com/docs/guides/vtex-io-documentation-docs-builder). A documentação é escrita em arquivos Markdown, dentro do repositório do aplicativo. Ao usar o Docs builder, a documentação fica disponível publicamente no [VTEX Developer Portal](https://developers.vtex.com/).

Neste guia, serão apresentadas diretrizes gerais, modelos e exemplos de artigos de integração. 

> ⚠️ Este guia faz parte das [diretrizes da App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store) e é um dos requisitos para enviar um app para o processo de homologação e [disponibilizá-lo na App Store](https://developers.vtex.com/docs/guides/vtex-io-documentation-homologation-requirements-for-vtex-app-store).

## Como escrever uma documentação de aplicativo

<details>
<summary><b>Público-alvo</b></summary>

**Descrição:** Identifique seus leitores.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| Diferencie entre desenvolvedores e usuários administradores. | Considere um único público. |

</details>

<details>
<summary><b>Objetivos de aprendizagem</b></summary>

**Descrição:** Defina o que o usuário deve aprender.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| Indique claramente o que os usuários devem aprender. | Deixe os objetivos de aprendizagem ambíguos. |

</details>

<details>
<summary><b>Título</b></summary>

**Descrição:** Use um título claro e conciso.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| <ol><li>Use o nome do aplicativo e um verbo que descreva o objetivo de aprendizagem.</li><li>Escreva a primeira letra de cada palavra em maiúscula.</li></ol> | Inclua pontuação, números de versão ou a palavra `App`. |

</details>

<details>
<summary><b>Introdução</b></summary>

**Descrição:** Apresente brevemente o aplicativo e seus benefícios.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| <ol><li>Resuma a finalidade do aplicativo e os benefícios para o usuário.</li><li>Inclua uma imagem e callouts para observações importantes.</li></ol> | Foque exclusivamente nos detalhes técnicos. |

</details>

<details>
<summary><b>Antes de começar (opcional)</b></summary>

**Descrição:** Liste os requisitos antes da instalação.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| <ol><li>Use itens de lista ou uma checklist.</li><li>Use callouts, se aplicável.</li></ol> | Escreva parágrafos longos explicando os pré-requisitos. |

</details>

<details>
<summary><b>Instalação</b></summary>

**Descrição:** Escreva um guia passo a passo com trechos de código (se aplicável).

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| <ul><li>Organize em etapas claras e concisas.</li><li>Aumente a clareza com trechos de código.</li></ul> | Pule etapas ou não forneça instruções específicas. |

</details>

<details>
<summary><b>Configuração</b></summary>

**Descrição:** Oriente os usuários na configuração do aplicativo.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| Liste todas as configurações essenciais com etapas detalhadas, conforme definido no [settingsSchema](https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest#settingsschema). | Omita detalhes de configuração. |

</details>

<details>
<summary><b>Como funciona</b></summary>

**Descrição:** (Opcional) Detalhe as funções do aplicativo e as etapas para usá-lo.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| <ol><li>Use listas numeradas para cada operação, com etapas claras e concisas.</li><li>Use imagens para ilustrar a interface do usuário.</li></ol> | Pule etapas ou omita instruções específicas. |

</details>

<details>
<summary><b>Personalização</b></summary>

**Descrição:** (Opcional) Escreva as etapas para personalizar o aplicativo.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| <ul><li>Inclua [identificadores CSS](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization) e uma tabela relacionada, se aplicável.</li><li>Consulte a documentação externa para personalização CSS.</li></ul> | Ignore as opções de personalização. |

</details>

<details>
<summary><b>Colaboradores</b></summary>

**Descrição:** (Opcional) Inclua um agradecimento aos colaboradores.

| **✅ Correto** | **❌ Incorreto** |
| :--- | :--- |
| Siga a [especificação All Contributors](https://github.com/all-contributors/all-contributors). | Omita o reconhecimento dos colaboradores. |

</details>

<details>
<summary><b>Callouts</b></summary>

**Descrição:** (Opcional) Inclua um agradecimento aos colaboradores.

| ✅ Correto | ❌ Incorreto |
| :--- | :--- |
| Destaque informações usando callouts. | <ul><li>Use os tipos de callout fornecidos (Information, Warning, Danger) com mensagens apropriadas.</li><li>Use texto genérico para destacar informações.</li></ul> |

</details>

## Modelo de documentação de um aplicativo

<details>
<summary><b>Modelo de documentação de um aplicativo</b></summary>

```md
# `{Insira o nome do aplicativo}`

`{insira nome do aplicativo}` `{finalidade do aplicativo começando com um verbo}` para que você possa `{tarefa a ser realizada}`.

![adicione-uma-pré-visualização-da-imagem](/)

## Antes de começar

Você precisa ter `{insira o que o usuário precisa ter: uma conta em outra plataforma, CLI, conhecimento sobre outro aplicativo, etc.}`.

Se você não tiver `{insira o que o usuário precisa ter e como obtê-lo}`.

## Instalação

1. [Instale](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-installing-an-app) o aplicativo `{insira o nome do aplicativo}` na conta VTEX desejada executando `vtex install {appVendor}.{appName}` no seu terminal.
2. (Opcional, para aplicativos frontend) Abra o diretório do aplicativo Store Theme da loja no seu editor de código.
3. (Opcional, para aplicativos frontend) Abra o arquivo `manifest.json` do aplicativo e adicione o aplicativo `{insira o nome do aplicativo}` no campo `peerDependencies`.


      "peerDependencies": {
          "vtex.{appName}": "{appVersion}"
      }
      

4. (Opcional, para aplicativos frontend) Declare o aplicativo `{insira o nome do aplicativo}` no modelo desejado. Por exemplo:

      "store.home": {
          "blocos": [
      +     "{app-name}",
          ]
      },

*![adicione-uma-pré-visualização-da-imagem](/)*

## Configuração

Depois de instalar o aplicativo, você pode `{descrever a configuração do aplicativo no Admin VTEX, conforme definido no settingsSchema[https://developers.vtex.com/docs/guides/vtex-io-documentation-manifest#settingsschema], por exemplo}`.

1. `Primeiro passo`.
2. `Segundo passo`.
3. `Terceiro passo`.

## Personalização (opcional, para aplicativos frontend)

Para aplicar personalizações CSS a este e outros blocos, siga as instruções em [Using CSS Handles for store customization](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-using-css-handles-for-store-customization).

| CSS Handles |
| ------------------ |
| csshandlesName |
| csshandlesName |
| csshandlesName |

## Como o aplicativo funciona (opcional)

Use esta seção para [aplicativos do Admin](https://learn.vtex.com/docs/course-admin-lang-en) quando o aplicativo exigir interação do usuário além da configuração de administrador.

`{Informe em detalhes o que pode ser feito com o aplicativo e forneça as etapas para realizar cada operação.}`

## Colaboradores

Agradecemos a colaboração destas pessoas incríveis:

- `{insira o nome de usuário do GitHub}`

Este projeto segue a especificação [All Contributors](https://github.com/all-contributors/all-contributors). Todas as contribuições são bem-vindas.
```

</details>

## Exemplos de artigos de documentação de aplicativos

- [Breadcrumb](https://developers.vtex.com/docs/apps/vtex.breadcrumb)
- [SKU Selector](https://developers.vtex.com/docs/apps/vtex.store-components/skuselector)
- [Store Locator](https://developers.vtex.com/docs/apps/vtex.store-locator)
- [Store Sitemap](https://developers.vtex.com/docs/apps/vtex.store-sitemap)
- [Assembly Options](https://developers.vtex.com/docs/guides/assembly-options-app)
- [Installing Google Tag Manager](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-google-tag-manager)
- [Live Shopping](https://developers.vtex.com/docs/apps/vtexventures.livestreaming)
- [Personal Shopper](https://developers.vtex.com/docs/apps/vtexventures.personal-shopper-free)
- [Pinterest app](https://developers.vtex.com/docs/apps/pinterestpartnerbr.pinterest@1.x)