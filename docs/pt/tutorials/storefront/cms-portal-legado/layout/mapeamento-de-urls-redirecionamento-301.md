---
title: 'Mapeamento de URLs (Redirecionamento 301)'
id: frequentlyAskedQuestions_623
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.075Z
updatedAt: 2026-10-20T17:00:00.000Z
publishedAt: 2023-03-27T13:46:43.143Z
firstPublishedAt: 2019-01-24T22:13:49.408Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: url-mapping-301-redirect
legacySlug: adicionar-ou-editar-um-mapeamento-de-url-manualmente
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Este tutorial é para lojas no CMS Portal (Legado). Para outras lojas, você faz essa configuração em [Páginas](/pt/docs/tutorials/paginas-visao-geral). Acesse a documentação [Gerenciando redirecionamentos de URL](/pt/docs/tutorials/gerenciando-redirecionamentos-de-url) para mais informações.

Os mapeamentos de URLs são utilizados para redirecionar URLs específicas para outras. Use esse recurso quando a loja já tiver URLs indexadas em buscadores e você quiser redirecioná-las para outras mais atrativas, mantendo o SEO e evitando erros de indexação.

Todos os mapeamentos cadastrados serão executados no tipo 301. O redirecionamento 301, também conhecido como redirecionamento permanente, transfere todos os dados importantes da URL original (PageRank, popularidade de links) para a nova URL.

Existem duas formas de adicionar e alterar um mapeamento de URL:

- [Adicionar ou editar manualmente](#adicionar-ou-editar-manualmente)
- [Importar por planilha](#importar-por-planilha)

Para remover mapeamentos já cadastrados, consulte a seção [Excluir URLs mapeadas](#excluir-urls-mapeadas).

## Adicionar ou editar manualmente

Para adicionar ou editar um mapeamento manualmente, siga estes passos:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** para abrir o diretório.
3. Clique na pasta **URL Builder**.
4. Clique no botão `Add` para incluir um novo mapeamento ou no botão `Update` para editar um mapeamento já existente.
5. Preencha os [campos do URL Builder](#campos-do-url-builder).
6. Clique no botão `Save URL` para salvar.

### Campos do URL Builder

- **Url from:** URL que será redirecionada. Essa URL não deve conter o domínio da loja. Campo obrigatório.
- **Url to:** URL para qual a navegação será redirecionada. Essa URL não deve conter o domínio da loja. Campo obrigatório.
- **Start date:** data e hora em que o mapeamento começará a ser considerado. Campo obrigatório.
- **End date:** data e hora em que o mapeamento deixará de ser considerado.
- **Active:** indica se o mapeamento está ativo ou inativo.

> ℹ️ Para criar um mapeamento para a home (diretório raiz), preencha o campo **Url to** com uma barra `/`.

## Importar por planilha

Para importar mapeamentos por planilha, siga estes passos:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** para abrir o diretório.
3. Clique na pasta **URL Builder**.
4. Clique no botão `Import` para realizar a importação da planilha.
5. Baixe a planilha modelo, ilustrada a seguir, clicando no botão `Clique aqui`.

   ![exemplo-planilha](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/mapeamento-de-urls-redirecionamento-301_1.png)

6. Preencha os [campos da planilha](#campos-da-planilha).
7. Depois de preencher a planilha, clique no botão `Localizar` na tela de importação.
8. Selecione o arquivo que será importado de seu computador. O arquivo deve ter extensão `.xls` e formato `Excel 97-2003 Workbook`.
9. Clique no botão `Salvar arquivo` para finalizar. Depois de salvar, uma mensagem vai exibir a quantidade de URLs adicionadas.

### Campos da planilha

- **Url from:** URL que será redirecionada. Essa URL não deve conter o domínio da loja. Exemplo de preenchimento: `/caminho_no_meu_site_antigo.html`.
- **Url to:** URL para qual a navegação será redirecionada. Essa URL não deve conter o domínio da loja. Exemplo de preenchimento: `/caminho_no_meu_site_novo.html`.
- **Active:** indica se o mapeamento está ativo ou inativo. Coloque o valor `1` para ativar e `0` para inativar.
- **Start date:** data em que o mapeamento começará a ser considerado. O formato da data deve ser `dd/mm/aaaa`.
- **End date:** data em que o mapeamento deixará de ser considerado. O formato da data deve ser `dd/mm/aaaa`.
- **Remove:** opção para excluir o mapeamento. Coloque o valor `1` para excluir a URL.

## Excluir URLs mapeadas

Para excluir mapeamentos já cadastrados, você pode fazer a exclusão [manualmente](#excluir-manualmente) ou [por planilha](#excluir-por-planilha).

### Excluir manualmente

Para excluir URLs manualmente, siga estes passos:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** para abrir o diretório.
3. Clique na pasta **URL Builder**.
4. Selecione a linha do mapeamento que deseja excluir.
5. No menu superior do URL Builder, clique em `Delete`.

### Excluir por planilha

Para excluir URLs por planilha, siga estes passos:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** para abrir o diretório.
3. Clique na pasta **URL Builder**.
4. No menu superior, clique no botão `Export` para baixar a planilha com as URLs já cadastradas.
2. Na coluna **Remove**, preencha com o valor `1` as linhas que deseja excluir.
3. Importe a planilha no URL Builder, seguindo os passos da seção [Importar por planilha](#importar-por-planilha).
