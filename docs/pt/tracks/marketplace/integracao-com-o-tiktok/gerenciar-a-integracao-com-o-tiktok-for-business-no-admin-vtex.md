---
title: 'Gerenciar a integração com o TikTok for Business no Admin VTEX'
id: 24SfBYkRkKMaetgjLDKgaP
status: PUBLISHED
createdAt: 2022-04-14T21:42:00.633Z
updatedAt: 2022-04-26T13:16:22.600Z
publishedAt: 2022-04-26T13:16:22.600Z
firstPublishedAt: 2022-04-18T11:57:58.931Z
contentType: trackArticle
productTeam: Channels
slugEN: managing-the-integration-with-tiktok-for-business-in-vtex-admin
locale: pt
trackId: 1r0yJSO11nrer1YVu3WTFd
trackSlugEN: integracao-com-o-tiktok
order: 5
---

Após instalar e configurar o TikTok for Business, você poderá gerenciar a integração com o TikTok em **Marketplace > TikTok**. Para algumas versões do Admin VTEX, a página se encontra em **Aplicativos > Meus Aplicativos > TikTok**.

Qualquer usuário logado no Admin VTEX poderá acessar essa área de gerenciamento do TikTok. Porém, ao interagir com os botões dessa área, o usuário será redirecionado para ambientes do TikTok – TikTok Business Center, TikTok Ads Manager e TikTok Catalog Manager – onde precisam das permissões necessárias para visualizar o conteúdo e realizar alterações.

![manage-tiktok-integration](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/marketplace/integracao-com-o-tiktok/gerenciar-a-integracao-com-o-tiktok-for-business-no-admin-vtex_1.png)

A partir dessa página, é possível:

- [Criar publicidade no TikTok](#criar-publicidade-no-tiktok)
- [Gerenciar funcionalidades](#gerenciar-funcionalidades)
    - [Business Center](#business-center)
    - [TikTok Ad Account](#tiktok-ad-account)
    - [Data Sharing](#data-sharing)
    - [Catalog](#catalog)
- [Desconectar o TikTok da sua loja](#desconectar-o-tiktok-da-sua-loja)

## Criar publicidade no TikTok

Para criar publicidade no TikTok, você pode clicar no botão `Create an ad` ou em **TikTok Ad Account** > `Create an ad`.

Assim, você será redirecionado para o TikTok Ads Manager para criar uma nova publicidade.

## Gerenciar funcionalidades

Confira abaixo a descrição das funcionalidades disponíveis para gerenciar a integração entre a sua loja VTEX e o TikTok nessa página. É necessário clicar em cada seção para visualizar suas respectivas opções.

### Business Center

* **Manage:** redireciona para o [TikTok Business Center](https://ads.tiktok.com/help/article?aid=12786) para gerir a sua conta comercial do TikTok.

### TikTok Ad Account

* **Manage:** redireciona para o [TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=10178) para gerenciar a publicidade existente.
* **Create an ad:** redireciona para o [TikTok Ads Manager](https://ads.tiktok.com/help/article?aid=10178) para criar uma nova publicidade.

### Data Sharing

* **Manage:** redireciona para a página de gerenciamento do Pixel do TikTok no TikTok Ads Manager.
* **Enable Advanced Matching:** permite utilizar o botão <i class="fas fa-toggle-on"></i> para ativar ou não o [Advanced Matching](https://ads.tiktok.com/help/article?aid=10007891). Essa funcionalidade não está disponível para a integração com a VTEX no momento, ou seja, mesmo que você a ative por esse botão, ela não será aplicada. 

### Catalog

* **Products available:** indica a quantidade de produtos do seu catálogo que estão disponíveis no TikTok.
    * **Manage:** redireciona para o TikTok Catalog Manager para gerenciar o catálogo no TikTok.
* **Products pending:** indica a quantidade de produtos do seu catálogo que estão em processamento no TikTok. Esse status é transitório e significa que o TikTok está analisando as informações.
    * **Manage:** redireciona para o TikTok Catalog Manager para gerenciar o catálogo no TikTok.
* **Products need additional details:** indica a quantidade de produtos do seu catálogo que estão com [informações](https://help.vtex.com/pt/tracks/integracao-com-o-tiktok--1r0yJSO11nrer1YVu3WTFd/4AEUg7pEdX1beOaQhFf0wC#envio-de-dados-dos-produtos-para-o-tiktok) faltando para serem sincronizados com o TikTok.
    * **Manage:** redireciona para o TikTok Catalog Manager para gerenciar o catálogo no TikTok.

## Desconectar o TikTok da sua loja

Para desabilitar a integração entre a sua loja e o TikTok, clique em `Desconectar` no topo da página.

Caso as suas credenciais do TikTok sejam revogadas, ou seja, caso a sua conta seja [suspensa](https://ads.tiktok.com/help/article?aid=12170), a integração será desconectada automaticamente. 

Ao desconectar, a sua integração com o TikTok é interrompida por completo: o Pixel do TikTok e a integração com o catálogo da sua loja são desativados. Portanto, o envio de novos produtos e a atualização de produtos não ocorrem mais.

Por outro lado, os produtos já existentes não são excluídos do TikTok pela VTEX, ou seja, continuam aparecendo no TikTok. Para eliminá-los do TikTok, é necessário excluir manualmente os produtos no [TikTok Catalog Manager](https://ads.tiktok.com/help/article?aid=10001005).

> ⚠️  Caso apareça uma mensagem de erro ao desconectar o TikTok da sua loja VTEX, siga os passos abaixo para garantir que a integração será desabilitada corretamente. <ol><li>Acesse a página [Autorizações](https://ads.tiktok.com/ac/page/authorizations) no TikTok Ads Manager.</li> <li>Encontre a opção **VTEX**.</li> <li>Clique em `Remover`.</li></ol>

Após desconectar, é possível reconectar a integração a qualquer momento refazendo os passos descritos em [Configurar a integração com o TikTok for Business](https://help.vtex.com/pt/tracks/integracao-com-o-tiktok--1r0yJSO11nrer1YVu3WTFd/4AEUg7pEdX1beOaQhFf0wC).
