---
title: "Como criar uma página customizada em lojas CMS Legado"
createdAt: 2026-03-09T16:56:01.751Z
locale: pt
---

Este guia descreve como criar uma página customizada em lojas desenvolvidas com CMS Legado. Ao seguir as instruções, você poderá configurar uma nova página, associar um template e disponibilizá-la em uma URL personalizada.

## Instruções

### Configure o template

1. No Admin VTEX, acesse **Storefront > Layout** para abrir a seção **Layout**.
2. Na seção **Layout**, clique em **CMS > HTM Templates**.
3. Decida se você vai
   * Reutilizar um template existente que já tenha o layout necessário.
   * Criar um novo template específico para a página customizada. Se for criar um novo template, siga as instruções do guia [Criar e editar um template de página](https://help.vtex.com/pt/docs/tutorials/como-criar-um-template-de-pagina).
4. Abra o template que será utilizado na página customizada e configure a estrutura de acordo com o design desejado:
   * Adicione placeholders ou componentes de conteúdo, como banners, caixas HTML e prateleiras de produtos.
   * Configure as opções necessárias, como título, meta tags ou opções de layout oferecidas pelos [controles nativos](https://developers.vtex.com/docs/guides/list-of-controls-for-templates) do CMS Legado.
5. Clique em `Save Template` para salvar o template.

### Crie a URL da página customizada

Agora, você deve criar o caminho da URL da página customizada:

1. Na seção **Layout** do Admin VTEX, acesse **CMS > Sites and Channels**.
2. Clique no website desejado.
3. Clique na pasta raiz (`/`).
4. No lado direito da tela, clique em `new folder`.
5. Preencha os campos conforme as orientações a seguir:
   * **Folder Name:** caminho da URL
   * **Marketing Context (Default):** define se a página pode ser acessada por utms. Esse campo é opcional.
   * **Search Context (Default):** adiciona parâmetros de busca.
   * **Protocol:** define o protocolo utilizado para a comunicação entre um servidor web e um navegador web. Recomendado: `HTTPS`.
   * **Cache Type:** define o comportamento de armazenamento em cache do navegador. Recomendado: `Local and Remote`.
   * **Authentication Required?:** define se a página só poderá ser acessada após autenticação do usuário. Se essa opção estiver ativada, apenas usuários autenticados poderão acessar a página.
6. Clique em `Save Folder` para salvar a nova página.

### Crie o layout para a nova página

Agora que a página foi criada, você precisa criar um layout e associá-lo ao template configurado na [primeira etapa](#configure-o-template):

1. Clique na pasta (folder) criada na [etapa anterior](crie-a-url-da-pagina-customizada).
2. No lado direito da tela, clique em `novo layout` para criar um novo layout.
3. Preencha os campos conforme as orientações a seguir:
   * **Layout name:**
   * **Body Class:**
   * **Active:**
   * **Default page:**
4. Clique em `Save Layout` na parte superior da página para salvar o layout.

Para mais detalhes, veja o guia [Associando um template a um layout](https://help.vtex.com/pt/docs/tutorials/associando-um-template-a-um-layout).
