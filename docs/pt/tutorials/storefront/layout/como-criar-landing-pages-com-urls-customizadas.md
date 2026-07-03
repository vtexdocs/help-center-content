---
title: 'Como criar landing pages com URLs customizadas'
id: q0p2UU6sBaYcEMsq24YSi
status: PUBLISHED
createdAt: 2018-10-02T21:22:13.046Z
updatedAt: 2026-05-19T18:20:34.000Z
publishedAt: 2023-03-29T15:54:22.828Z
firstPublishedAt: 2018-10-02T21:24:34.630Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_24
slugEN: how-to-create-landing-pages-with-customized-urls
legacySlug: como-funciona-o-contexto-de-busca, como-funciona-o-contexto-de-busca-das-pastas-do-website
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Este tutorial é válido apenas para lojas do CMS Portal (Legado) e para o VTEX Search (Legado). Se sua loja usa o VTEX Intelligent Search, consulte a trilha [Intelligent Search](pt/docs/tracks/overview-intelligent-search).

O buscador usado pelas lojas do CMS Portal (Legado) é customizável e permite aplicar filtros por departamento, categoria, marca, coleção, especificação e SKU, entre outros.

Como esses filtros são aplicados na URL, buscas mais complexas podem gerar endereços pouco amigáveis e de menor relevância para os crawlers dos buscadores, como o Google.

Para contornar esse cenário, as pastas do CMS têm o campo `Search Context (Default)`, que define quais filtros de busca serão aplicados à página vinculada à pasta. Com essa configuração, o CMS carrega os resultados esperados sem expor os filtros na URL, criando uma rota mais amigável.

>ℹ️ Se uma pasta tiver um valor configurado em `Search Context (Default)`, ele substituirá qualquer parâmetro de busca informado diretamente na URL. Isso significa que filtros e ordenação, incluindo o parâmetro `O`, não serão aplicados à página. 

Neste guia, você aprenderá a usar o **Contexto de Busca** para associar uma busca a uma pasta do CMS e exibir seus resultados em uma URL amigável.

## Antes de começar

Certifique-se de que o [template](/pt/docs/tutorials/o-que-sao-templates) da página contenha o controle `<vtex.cmc:searchResult/>`. O Contexto de Busca só funciona se o template contiver este controle. Saiba mais em [Como usar o controle Search Result](/pt/docs/tutorials/como-usar-o-controle-search-result).

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique em **CMS > HTML Templates**.
3. Crie um novo template ou certifique-se de que um template existente contenha o controle `<vtex.cmc:searchResult/>`. Para instruções detalhadas, veja [Criar e editar um template de página](/pt/docs/tutorials/como-criar-um-template-de-pagina).

>ℹ️ O controle `<vtex.cmc:searchResult/>` funciona apenas em páginas com contexto de busca, ou seja, páginas em que os resultados exibidos foram obtidos a partir de uma busca do usuário.

## Instruções

Para criar uma landing page com URL customizada, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout** para abrir a seção **Layout**.
2. Na seção **Layout**, acesse **CMS > Sites and Channels**.
3. Clique no web site desejado.
4. Clique na pasta raiz (`/`).
5. Decida se você vai configurar o Contexto de Busca em:
   - [Uma página que já existe no seu web site](#configurar-contexto-de-busca-em-pagina-existente)
   - [Uma nova página a ser criada](#configurar-contexto-de-busca-em-nova-pagina)

>⚠️ A busca legada renderiza uma landing page quando o termo buscado corresponde exatamente ao nome de uma pasta configurada no CMS. Para que essa pasta seja buscável, ela precisa ter um [layout](/pt/docs/tutorials/o-que-sao-layouts) associado, assim como a pasta pai. Em estruturas com mais de um nível de diretório, como `/pasta1/landing-page`, esse comportamento pode não funcionar como esperado, e a busca pode retornar uma página 404.

### Configurar Contexto de Busca em página existente

Após clicar na pasta raiz (`/`), siga as instruções a seguir:

6. Clique na pasta que você deseja usar para a landing page.
7. No lado direito da tela, clique em `edit`. 
8. No campo `Search Context (Default)`, insira os parâmetros de busca que deseja aplicar à página. Para exibir, por exemplo, produtos da categoria `111`, da marca `222` e com a especificação `333`, use o valor a seguir: `fq=C:111&fq=B:222&fq=spec_fct_1:333`.
9. Clique em `Save Folder`.
10. Acesse a URL da pasta configurada e verifique se a página exibe os produtos esperados. A landing page estará disponível na URL `https://www.{accountName}.com/{landing-page}`, onde `{accountName}` é o nome da sua loja e `{landing-page}` é o nome da pasta no CMS com o Contexto de Busca configurado.
  
### Configurar Contexto de Busca em nova página

Após clicar na pasta raiz (`/`), siga as instruções a seguir:

6. No lado direito da tela, clique em `new folder`.
7. Preencha os campos conforme as orientações a seguir:
   * **Folder Name:** caminho da URL.
   * **Marketing Context (Default):** define se a página pode ser acessada por [utms](https://help.vtex.com/pt/docs/tutorials/o-que-sao-utm-source-utm-campaign-e-utm-medium). Esse campo é opcional.
   * **Search Context (Default):** adiciona parâmetros de busca. Para exibir, por exemplo, produtos da categoria `111`, da marca `222` e com a especificação `333`, use o valor a seguir: `fq=C:111&fq=B:222&fq=spec_fct_1:333`.
   * **Protocol:** define o protocolo de comunicação entre um servidor web e um navegador web. Recomendado: `HTTPS`.
   * **Cache Type:** define o comportamento de armazenamento em cache do navegador. Recomendado: `Local and Remote`.
   * **Authentication Required?:** define se a página só poderá ser acessada após a autenticação do usuário. Se essa opção estiver ativada, apenas usuários autenticados poderão acessar a página.
8. Clique em `Save Folder` para salvar a nova página.
9. Acesse a URL da pasta configurada e verifique se a página exibe os produtos esperados. A landing page estará disponível na URL `https://www.{accountName}.com/{landing-page}`, onde `{accountName}` é o nome da sua loja e `{landing-page}` é o nome da pasta criada no CMS com o Contexto de Busca configurado.
