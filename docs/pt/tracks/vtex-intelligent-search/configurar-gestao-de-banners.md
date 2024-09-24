---
title: 'Configurar Banners'
id: 4ViKEivLJtJsvpaW0aqIQ5
status: ARCHIVED
createdAt: 2019-11-27T16:34:24.404Z
updatedAt: 2024-09-06T20:14:05.608Z
publishedAt: 
firstPublishedAt: 2020-03-05T19:58:30.009Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: configuring-banners
locale: pt
trackId: 19wrbB7nEQcmwzDPl1l4Cb
trackSlugPT: vtex-intelligent-search
---

Para configurar um banner, siga os seguintes passos:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Clique em **Banners**.
3. Clique em <i class="fas fa-plus"></i> `Novo`.
4. Preencha os [campos referentes ao banner](#campos-de-cadastro-do-banner).
5. Para finalizar, clique em `Salvar`.

Depois de realizar as configurações do banner, você deve adicioná-lo a uma página da sua loja. Para isso, siga os passos do guia [Banner](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-banner).

>ℹ️ Essa funcionalidade está disponível no VTEX Intelligent Search Multi-idioma. Leia o nosso artigo [VTEX Intelligent Search: configurações Multi-idioma (Beta)](https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO#banners) para saber mais.

![banner-form-pt](//images.ctfassets.net/alneenqid6w5/4eY6elSTbPcVvjQHuxOhdu/4be57613a6396be3b68aeee7084eba3a/image.png)

## Campos de cadastro do banner

Para cadastrar o banner, é necessário preencher os seguintes campos:

### Informações gerais

* **Nome**: nome do banner cadastrado.
* **Posição**: área que o banner aparecerá na página de resultado de busca. Os banners podem ser alocados em quatro áreas distintas na página do site. Essa disposição fica a critério do lojista, dependendo da opção selecionada nesse campo ou definido via [blocks no store-theme](https://developers.vtex.com/vtex-developer-docs/docs/vtex-search-banner#props).

### Tipo

* **Tipo do banner**: conteúdo do banner que será criado. O banner pode ser um HTML ou uma URL de imagem:
    * **HTML**: o gestor pode adicionar no campo HTML mídias, vídeos do YouTube ou imagens, e linhas de código, como JavaScript.
    * **Image**: o sistema pede a URL da imagem que será utilizada e o link de destino do banner.
        * URL da imagem
        * Link de destino
* **Fuso horário**: fuso horário seguido pelos horários configurados no banner.
* **Data de início**: data que define o início da disponibilidade do banner.
* **Horário de início**: horário que define o início da disponibilidade do banner.
* **Data de término**: data que define o término da disponibilidade do banner - o que permite o gestor agendar campanhas futuras, facilitando o seu controle.
* **Horário de término**: horário que define o término da disponibilidade do banner.
* **Idiomas:** idiomas aos quais o banner será aplicado. Campo disponível apenas para lojas que utilizam [Configurações Multi-idioma (Beta)](https://help.vtex.com/pt/tutorial/vtex-intelligent-search-configuracoes-multi-idioma-beta--2WahlTESLXIJ9XBdQMdTYO).

### Regras de ativação 

**Regras de ativação** é um conjunto de condições de termos ou filtros que serão aplicados a cada pesquisa realizada. É necessário ter pelo menos uma condição cadastrada, seja por termo ou por filtro.

Clique em <i class="fa-solid fa-link"></i> `Preencher a partir de uma URL` para adicionar a URL da página de busca em as regras de ativação serão aplicadas. 

![banner-url-pt](//images.ctfassets.net/alneenqid6w5/2ldGnmahkPao4EbISls3gu/eb9677cd365433d38a4459c7877bb646/image.png)

Clique em <i class="fas fa-plus"></i> `Adicionar condição` para criar uma regra. Elas podem ser dos seguintes tipos:

* **Termo**: palavra pesquisada pelo cliente que será relacionada à regra.
* **Filtro**: atributo selecionável já definido que restringe os resultados de busca. Aqui é possível selecionar categorias, departamentos e subcategorias.

Clique em `Limpar Regras` para apagar todas as regras cadastradas.
