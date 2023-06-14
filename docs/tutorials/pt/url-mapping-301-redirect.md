---
title: 'Mapeamento de URLs (Redirecionamento 301)'
id: frequentlyAskedQuestions_623
status: PUBLISHED
createdAt: 2019-01-24T20:45:57.075Z
updatedAt: 2023-03-27T13:46:43.143Z
publishedAt: 2023-03-27T13:46:43.143Z
firstPublishedAt: 2019-01-24T22:13:49.408Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: mapeamento-de-urls-redirecionamento-301
locale: pt
legacySlug: adicionar-ou-editar-um-mapeamento-de-url-manualmente
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class="alert alert-warning">
<p>Este tutorial é para lojas no CMS Portal legado. Para outras lojas, você faz essa configuração através de <a href="https://help.vtex.com/pt/tutorial/paginas-visao-geral--5iBUUJbK5NqG6OxlDrGNzc">Páginas</a>. Acesse a documentação <a href="https://help.vtex.com/pt/tutorial/gerenciando-redirecionamentos-de-url--3UJuFrU8imSVWg134mkvJV">Gerenciando redirecionamentos de URL</a> para mais informações.</p>
</div>

Os mapeamentos de URLs são utilizados para redirecionar URLs específicas para outras. Esse recurso é muito útil quando a loja já possui URLs indexadas em buscadores e pretende redirecioná-las para outras mais atrativas, mantendo o SEO e evitando erros de indexação.

Todos os mapeamentos cadastrados serão executados no tipo 301. O redirecionamento 301, também conhecido como redirecionamento permanente, transfere todos os dados importantes de sua URL original (**PageRank**, **Popularidade de Links**) para a nova URL.

Existem duas formas de adicionar e alterar um Mapeamento de URL:

- [Manualmente](#manualmente)
- [Importação por Planilha](#importacao-por-planilha)

## Manualmente

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** para abrir o diretório.
3. Clique na pasta **URL Builder**.

4. Clique no botão `Add` para incluir um novo mapeamento ou no botão `Update` para editar um mapeamento já existente.
5. Preencha os [campos do URL Builder](#campos-do-url-builder).
6. Clique no botão `Save URL` para salvar.

### Campos do URL Builder

- **Url from:** URL que será redirecionada. Essa URL não deve conter o domínio. Campo obrigatório.
- **Url to:** URL para qual a navegação será redirecionada. Essa URL não deve conter o domínio. Campo obrigatório.
- **Start date:** data e hora em que o mapeamento começará a ser considerado. Campo obrigatório.
- **End date:** data e hora em que o mapeamento deixará de ser considerado.
- **Active:** opção se o mapeamento está ativo ou inativo.

<div class="alert alert-info"> 
  <p>Para criar um mapeamento para home (diretório raiz) preencha o campo <b>URL Para</b> com uma barra <code>/</code>.</p>
</div>

## Importação por Planilha

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique na pasta **CMS** para abrir o diretório.
3. Clique na pasta **URL Builder**.
4. Clique no botão `Import` para realizar a importação da planilha.

5. Baixe a planilha modelo ilustrada abaixo utilizando o botão `Clique aqui`.
![exemplo-planilha](//images.contentful.com/alneenqid6w5/2Z63gJkADcR2gveT3lncQb/9bbd790becd99acb7b647537eb71c6a9/Screenshot_5.png)
6. Preencha os [campos da planilha](#campos-da-planilha).
7. Depois de preencher a planilha, clique no botão `Localizar` na tela de importação.
8. Selecione o arquivo que será importado de seu computador. O arquivo deve ter extensão `.xls` formato `Excel 97-2003 Workbook`.
9. Clique no botão `Salvar arquivo` para finalizar. Depois de salvar, uma mensagem vai exibir a quantidade de URLs adicionadas.

### Campos da planilha

- **Url from:** URL que será redirecionada. Essa URL não deve conter o domínio da loja. Exemplo de preenchimento: `/caminho_no_meu_site_antigo.html`.
- **Url to:** URL para qual a navegação será redirecionada. Essa URL não deve conter o domínio da loja. Exemplo de preenchimento: `/caminho_no_meu_site_antigo.html`.
- **Active:** opção se o mapeamento está ativo ou inativo. Coloque o valor `1` para ativar e `0` para inativar.
- **Start date:** data em que o mapeamento começará a ser considerado. O formato da data deve ser `dd/mm/aaaa`.
- **End date:** data em que o mapeamento deixará de ser considerado. O formato da data deve ser `dd/mm/aaaa`.
