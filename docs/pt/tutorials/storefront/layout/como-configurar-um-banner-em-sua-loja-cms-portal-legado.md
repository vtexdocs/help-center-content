---
title: 'Como configurar um banner em sua loja CMS Portal (Legado)'
id: frequentlyAskedQuestions_1848
status: PUBLISHED
createdAt: 2019-01-24T20:45:59.558Z
updatedAt: 2026-07-20T10:52:00.000Z
publishedAt: 2023-03-29T17:40:06.023Z
firstPublishedAt: 2019-01-24T22:15:27.116Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: how-to-configure-a-banner-in-your-cms-portal-legacy-store
legacySlug: como-alterar-banner
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
seeAlso:
    - "/pt/docs/tracks/cms-portal-legado"
    - "/pt/docs/tutorials/definicao-de-vitrines"
---

>⚠️ Tutorial válido apenas para lojas CMS Portal (Legado).

Neste artigo, você aprenderá a criar, editar e agendar banners no CMS Portal (Legado). Ao longo do passo a passo, você verá como acessar o layout da página, preencher os campos do banner e definir as condições de exibição.

O artigo apresenta a configuração de um banner na homepage, mas o mesmo fluxo pode ser aplicado a qualquer página da loja.

## Instruções

Para criar ou alterar um banner na homepage de sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS > Sites and Channels**.
3. Clique no nome do site desejado.
4. Clique na pasta **/**.

    ![instrução CMS -pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-alterar-banner_1.png)

5. Clique em **Home > Settings**, em seguida, clique no ícone de lápis para editar.

    ![cms-home-settings PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-alterar-banner_2.png)

6. Na janela que será aberta, clique no ícone de lápis para editar.

    ![cms_home_settings_lapis pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/como-alterar-banner_3.png)
    
7. No formulário que será aberto, preencha os campos com as configurações do banner. Saiba mais sobre cada campo na seção [Campos do formulário de banner](#campos-do-formulario-de-banner).
8. Clique em `Update Content List` para atualizar o conteúdo do banner. O formulário será fechado e a janela aberta no passo 6 aparecerá.
9. Clique em `Save Content` para salvar as informações. Você verá um pop-up com a mensagem `Settings saved successfully`.
10. Clique em `OK` para fechar o pop-up.
11. Clique em `Save Settings`

    >⚠️ Se você sair da página sem clicar no botão `Save Settings`, conforme indicado no último passo, perderá todas as configurações feitas no cadastro do banner.

## Campos do formulário de banner

O formulário de banner é dividido em duas seções:
- [**Campos de conteúdo**](#campos-de-conteudo-content)
- [**Condições de exibição**](#condicoes-de-exibicao-display-condition).

### Campos de conteúdo (Content)

| Campo | Descrição |
| --- | --- |
| **Content Name** | Nome interno que identifica o banner no CMS. |
| **Width** | Largura da imagem em pixels (exemplo: `1170px`). |
| **Height** | Altura da imagem em pixels (exemplo: `500px`). |
| **File Type** | Tipo de arquivo. Para banners, selecione `image`. |
| **URL** | Link de destino ao clicar no banner. |
| **Banner / Preview** | Campo para adicionar a imagem do banner. Veja mais detalhes na seção [Alterar ou cadastrar a imagem do banner](#alterar-ou-cadastrar-a-imagem-do-banner) |

### Condições de exibição (Display Condition)

As condições de exibição permitem segmentar quando e onde o banner será exibido, conforme apresentado na tabela a seguir:

| Campo | Descrição |
| --- | --- |
| **Partner / Campaign / Source** | Exibe o banner quando a URL de origem do visitante contém UTMs correspondentes (por exemplo, `utm_source=google&utm_medium=cpc`). |
| **Keywords** | Vincula a exibição do banner a buscas por termo(s) específico(s) no site. |
| **Category / Brand** | Vincula a exibição do banner às páginas específicas de categoria e/ou de marca. |
| **Active Content** | Ativa a exibição do banner na loja. |
| **From / To** | Define o período em que o banner ficará ativo. Veja mais detalhes na seção [Agendar um banner](#agendar-um-banner). |

## Alterar ou cadastrar a imagem do banner

Para fazer uma alteração ou cadastro de uma nova imagem, siga os passos abaixo:

1. Na seção **Content** do formulário de banner, clique em `add file`. A janela **Insert File** será aberta, com opções para localizar um arquivo existente ou enviar um novo.

    ![inserir-image-banner](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/layout/inserir-imagem-banner.png)
    
2. Escolha uma das opções a seguir para definir a imagem que será usada no banner:

**Usar um arquivo existente**

a. Em **Find by name**, digite o nome do arquivo para encontrá-lo.
b. Se souber o identificador do arquivo, você pode preencher o campo `File Id` para encontrá-lo.
c. Clique em `Find` para executar a busca.

**Enviar uma nova imagem**

a. Em **Insert a new file**, clique em `Browse for file`.
b. Selecione a imagem do seu computador.

3. Após localizar ou selecionar o arquivo, clique em `Adicionar` para vinculá-lo ao banner.
4. Clique em `Update Content List` para atualizar o conteúdo do banner.
5. Clique em `Save Content` para salvar as informações. Você verá um pop-up com a mensagem `Settings saved successfully`.
6. Clique em `OK` para fechar o pop-up.
7. Clique em `Save Settings`

    >⚠️ Se você sair da página sem clicar no botão `Save Settings`, conforme indicado no último passo, perderá todas as configurações feitas no cadastro do banner.

## Agendar um banner

Para agendar um banner, você precisa configurar os campos **From** e **To** com as datas de início e término de exibição e, obrigatoriamente, marcar a opção `Active Content`. Caso a opção `Active Content` não esteja marcada, o banner não será exibido, mesmo que as datas estejam configuradas.

>⚠️ O CMS Portal (Legado) utiliza **UTC-0 (GMT)** nos campos **From** e **To**. Por exemplo, se você deseja que o banner seja exibido a partir das 10h no horário de Brasília (UTC-3), configure o campo **From** para as 13h (10h + 3h = 13h, em UTC-0).
