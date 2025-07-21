---
title: 'Configurar a integração com o TikTok for Business no Admin VTEX'
id: 4AEUg7pEdX1beOaQhFf0wC
status: PUBLISHED
createdAt: 2022-04-14T21:22:01.564Z
updatedAt: 2024-09-03T19:34:18.900Z
publishedAt: 2024-09-03T19:34:18.900Z
firstPublishedAt: 2022-04-18T11:52:11.581Z
contentType: trackArticle
productTeam: Channels
slugEN: configuring-the-integration-with-tiktok-for-business-in-vtex-admin
locale: pt
trackId: 1r0yJSO11nrer1YVu3WTFd
trackSlugPT: integracao-com-o-tiktok
---

Depois de instalar o aplicativo, é necessário configurá-lo no Admin VTEX. Para isso, siga os passos descritos nas próximas seções deste artigo.

1. [Preencher o formulário de configuração da integração](#1-preencher-o-formulario-de-configuracao-da-integracao).
2. [Conectar a conta do TikTok](#2-conectar-a-conta-do-tiktok).
3. [Configurar o TikTok for Business](#3-configurar-o-tiktok-for-business).

## 1. Preencher o formulário de configuração da integração

Primeiro, é necessário inserir as informações solicitadas no formulário de configuração da integração com o TikTok.

1. No Admin VTEX, acesse **Marketplace > TikTok**. Para algumas versões do Admin VTEX, a página se encontra em **Aplicativos > Meus Aplicativos > TikTok**.
2. Preencha o formulário com as informações descritas nas próximas seções:
      * [Configuração da Integração do Catálogo](#configuracao-da-integracao-do-catalogo).
      * [Dados da Empresa](#dados-da-empresa).
      * [Informações de Contato](#informacoes-de-contato).
3. Clique em `Continuar`.
4. Confira as informações exibidas antes de prosseguir.
5. Clique em `Confirmar`.

    Você será direcionado para uma tela para [conectar a conta do TikTok](#conectar-a-conta-do-tiktok).

### Configuração da Integração do Catálogo

Nesta parte do formulário, você precisa preencher informações que servirão para integrar o seu catálogo de produtos na VTEX ao TikTok.

* **ID do Afiliado:** identificador do novo [afiliado](/pt/tutorial/o-que-e-afiliado--4bN3e1YarSEammk2yOeMc0) que você deseja criar para a integração. O ID do afiliado precisa conter apenas 3 consoantes e não pode estar associado a um afiliado já existente. Sugerimos utilizar `TKT` para identificar o TikTok com facilidade. É importante verificar em **Gerenciamento de pedidos > Configurações > Afiliados** se o ID não está em uso. O afiliado será criado automaticamente ao concluir a configuração. 
* **Política Comercial:** campo para selecionar a [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) que será associada à integração do catálogo com o TikTok. Atualmente, a integração aceita apenas políticas comerciais com BRL como moeda. Confira a seção [Envio de dados dos produtos para o TikTok](#envio-de-dados-dos-produtos-para-o-tiktok) para mais informações.

<div class="alert alert-warning">
  <p>Não altere as configurações do afiliado criado automaticamente por essa integração. Qualquer alteração manual futura na configuração do afiliado em <strong>Gerenciamento de pedidos > Configurações > Afiliados</strong> pode fazer com que a integração pare de funcionar.</p>
</div>

### Dados da Empresa

Nesta seção, é necessário inserir informações sobre a sua loja, que serão enviadas para o TikTok.

* **Nome da Loja:** nome da loja conforme será exibido no TikTok.
* **Site da Loja:** URL do website da sua loja que aparecerá no TikTok. Não pode ser alterado posteriormente.
* **Segmento:** campo para selecionar o segmento em que a loja atua, entre as opções disponibilizadas pelo TikTok.
* **País:** país de operação da loja. No momento, a integração só aceita países da América Latina.
* **Fuso Horário:** zona de fuso horário em que a loja está localizada.

### Informações de Contato

Aqui, você precisa informar os dados de contato da pessoa responsável pela integração, para que o TikTok entre em contato, se necessário.

* **Email:** email do responsável pela integração. Não precisa ser obrigatoriamente o email da sua conta no Admin VTEX, pode ser qualquer email para contato.
* **Código do País:** código telefônico correspondente ao local do número de telefone do responsável.
* **Telefone:** número de telefone do responsável pela loja.

## 2. Conectar a conta do TikTok

Depois de preencher o formulário de configuração da integração, você precisa conectar a sua conta do TikTok. Para isso, siga as instruções abaixo:

1. Ainda em **Marketplace > TikTok** (ou **Aplicativos > Meus Aplicativos > TikTok**, em algumas versões do Admin VTEX), clique em `Connect Account`.

    Isso abrirá uma janela do TikTok onde você precisa fazer login na sua conta TikTok For Business.

2. Faça login na janela aberta a partir da etapa anterior, utilizando email e senha cadastrados na conta do TikTok.

    Você será conduzido para a página **Set up TikTok For Business** ([Configurar o TikTok For Business](#3-configurar-o-tiktok-for-business)), ainda no ambiente do TikTok.

## 3. Configurar o TikTok for Business

<div class="alert" "alert-warning">
  <p>Recomendamos desativar extensões que bloqueiam anúncios no seu navegador para evitar erros nas etapas a seguir.</p>
</div>

Na página **Set up TikTok For Business** (Configurar o TikTok For Business), ilustrada abaixo, é necessário cumprir as instruções de configuração descritas a seguir.

![set-up-tiktok-for-business](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/tiktok-integration/configurar-a-integracao-com-o-tiktok-for-business-no-admin-vtex_1.png)

1. Clique na seção **TikTok For Business Account** e verifique se a sua conta está listada.
    * Caso queira conectar outra conta, clique em `Disconnect` e repita a etapa de login descrita em [Conectar a conta do TikTok](#conectar-a-conta-do-tiktok).
2. Clique na seção **Business Center** para se conectar a uma [conta Business Center](https://ads.tiktok.com/help/article?aid=925158121749954004).
3. Na seção **Business Center**, escolha uma das seguintes opções:
    * Para se conectar a um Business Center já existente: clique em `Connect`.
    * Para criar um novo Business Center: edite o nome do novo Business Center conforme desejar e clique em `Create New`.
4.  Clique na seção **TikTok Ad Account** para conectar a sua [conta no TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=9678), ou seja, a conta que você utiliza para criar publicidade no TikTok. 
5. Na seção **TikTok Ad Account**, escolha uma das seguintes opções:
    * Para se conectar a uma Ad Account já existente: clique em `Connect`.
    * Para criar uma nova Ad Account: edite o nome da nova conta conforme desejar e clique em `Create New`.
6. Clique na seção **Data Sharing** para criar um [Pixel do TikTok](/pt/tracks/integracao-com-o-tiktok--1r0yJSO11nrer1YVu3WTFd/7Dwfwu1aHMp1aR1yvej5nv#pixel-do-tiktok).
7. Na seção **Data Sharing**, edite o nome do novo Pixel conforme desejar e clique em `Create New`.
8. Ainda em **Data Sharing**, utilize o botão  <i class="fas fa-toggle-on"></i> para ativar ou não o [Advanced Matching](https://ads.tiktok.com/help/article?aid=10007891). Essa funcionalidade não está disponível para a integração com a VTEX no momento, ou seja, mesmo que você a ative por esse botão, ela não será aplicada.
9. Clique na seção **Catalog** para integrar o seu catálogo com o TikTok. Leia [Envio de dados dos produtos para o TikTok](#envio-de-dados-dos-produtos-para-o-tiktok) para mais informações sobre esse processo.
10. Na seção **Catalog**, edite o nome do novo catálogo a ser criado no [TikTok Catalog Manager](https://ads.tiktok.com/help/article?aid=10001005) conforme desejar e clique em `Create New`. Os produtos associados à política comercial que você informou no [formulário](#1-preencher-o-formulario-de-configuracao-da-integracao) serão adicionados a esse catálogo no TikTok.
11. Clique em `Finish Setup`.

Ao concluir essa configuração, você será conduzido novamente para **Marketplace > TikTok** no Admin VTEX, onde poderá [gerenciar a integração](/pt/tracks/integracao-com-o-tiktok--1r0yJSO11nrer1YVu3WTFd/24SfBYkRkKMaetgjLDKgaP). Para algumas versões do Admin VTEX, a página se encontra em **Aplicativos > Meus Aplicativos > TikTok**. Após a configuração ter sido concluída com sucesso, qualquer usuário logado no Admin VTEX poderá acessar essa área de gerenciamento do TikTok. 

![tiktok-config-3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/tiktok-integration/configurar-a-integracao-com-o-tiktok-for-business-no-admin-vtex_2.gif)

### Envio de dados dos produtos para o TikTok

<div class="alert alert-warning">
  <p>O TikTok sincroniza apenas produtos que estão de acordo com as políticas de publicidade da plataforma. Leia as <a href="https://ads.tiktok.com/help/article?aid=9550&lang=pt">Políticas de Anúncios do TikTok</a> para mais informações.</p>
</div>

Com a integração configurada, o envio de produtos para o TikTok é um processo automático. Os dados enviados são:

* Nome do produto
* ID do SKU
* ID do produto
* Categoria
* Descrição
* Marca
* URL
* Condição
* Disponibilidade
* Preço (em BRL)
* Imagens

Para que os produtos sejam sincronizados, todas essas informações precisam estar preenchidas. Atualizações no cadastro dos produtos feitas no ambiente da VTEX, via [API](https://developers.vtex.com/vtex-rest-api/reference/catalog-api-overview) ou [Admin](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/1ROhz3Y7mfSMmCO1I1GxEL), são replicadas de forma automática no TikTok.

