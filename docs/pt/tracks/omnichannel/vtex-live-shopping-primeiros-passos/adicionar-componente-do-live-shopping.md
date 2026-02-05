---
title: 'Adicionar componente do Live Shopping'
id: 4r5uk6XHxdYlOGMr11GFWR
status: PUBLISHED
createdAt: 2025-07-23T17:54:26.773Z
updatedAt: 2025-10-24T13:26:35.877Z
publishedAt: 2025-10-24T13:26:35.877Z
firstPublishedAt: 2025-07-28T15:07:46.555Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: placing-the-live-shopping-component
locale: pt
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeiros-passos
order: 4
---

Depois que seu evento estiver [configurado no Bundle](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/3GKzrP9nkyRwpUyyeYUaeX) ou em um estúdio externo e antes de transmiti-lo, adicione o componente **Live Shopping** ao seu site, seja na página inicial da loja ou em uma [landing page](/pt/docs/tutorials/live-shopping-configurar-landing-page-para-transmissoes-ao-vivo). As etapas de configuração variam de acordo com a solução de frontend da sua loja:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [CMS - Portal Legado](#cms-portal-legado)
* [Headless CMS](#headless-cms)
* [FastStore](#faststore)

> ⚠️ Após configurar o componente **Live Shopping**, as alterações podem levar de cinco a dez minutos para serem refletidas no storefront devido ao cache.

## Store Framework (VTEX IO)

Para lojas que usam [Store Framework](/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), siga as etapas abaixo para adicionar o componente **Live Shopping** através do [Site Editor](/pt/docs/tutorials/gerenciando-conteudo-de-pagina-e-template):

1. No Admin VTEX, acesse **Storefront > Site Editor**, ou digite **Site Editor** na barra de busca no topo da página.
2. Na lista **Blocos**, no lado direito da página, selecione o bloco **Live Shopping** .
3. Ative a opção <i class="fas fa-toggle-on" aria-hidden="true"></i> `Mostrar componente`.
4. Clique no menu suspenso **Eventos (ao vivo)** e selecione o evento desejado. As opções exibidas incluem apenas eventos com o [status](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-do-evento) `Ao vivo`.
5. Clique em `Salvar`.

## CMS - Portal Legado

Para lojas que usam [CMS - Portal Legado](/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), siga as etapas abaixo para adicionar o componente **Live Shopping**:

1. Na página **Informações do evento** do [evento criado](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), clique no ícone de seta.
2. Após [ativar o evento](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/6NrWRLAJEHijcd6tLIWoqq), acesse a seção **Configuração do CMS**.
3. Em **Script para o template**, selecione `Template CMS`.
4. Copie o código em **Script para o template**.

  ![article_4_legacy_cms_portal_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/adicionar-componente-do-live-shopping_1.png)

5. Acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página.
6. Clique em **CMS > Templates HTML**.
7. Cole o código no arquivo HTML desejado.

## Headless CMS

Para lojas que usam [Headless CMS](/pt/docs/tutorials/headless-cms-visao-geral), siga as etapas abaixo para adicionar o componente **Live Shopping**: 

1. Na página **Informações do evento** do [evento criado](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv), clique no ícone de seta.
2. Acesse a sessão de **Configuração do CMS**.
3. Em **Script para o template**, selecione `Template externo`.
4. Copie o código em **Script para o template**.

  ![article_4_headless_cms_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/omnichannel/vtex-live-shopping-primeiros-passos/adicionar-componente-do-live-shopping_2.png)

5. Cole o código no arquivo HTML desejado.

> ❗ Após configurar o evento, é possível visualizá-lo clicando no botão [Pré-visualização](/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/125yr6jAfwiiz84JP4ppfO#pre-visualizacao). No entanto, como essa visualização exibe somente determinados componentes do **Live Shopping**, recomendamos fazer verificações adicionais em todo o site para garantir que tudo esteja funcionando corretamente.

## FastStore

Para adicionar o componente **Live Shopping** ao seu projeto, siga os passos abaixo:

> ℹ️ Essa funcionalidade está disponível como uma solução nativa para a última versão da FastStore. Se a sua loja usa [FastStore v1 ou v2](https://developers.vtex.com/docs/guides/faststore/getting-started-faststore-versions-and-support-levels), acesse o guia [Implementing Live Shopping for FastStore previous versions](https://developers.vtex.com/docs/guides/faststore/storefront-features-implementing-live-shopping-for-faststore-previous-versions).

1. No Admin VTEX, acesse **Apps > Live Shopping > Eventos**, ou digite **Eventos** na barra de busca no topo da página.
2. Na coluna **Ação**, clique na seta para acessar a [página do evento](/pt/docs/tutorials/live-shopping-eventos). 
3. Na seção **Detalhes**, copie o `ID`, um código único composto por letras e números. Você pode usar o botão `Copiar para área de transferência`. 
4. Acesse **Storefront > Headless CMS**, ou digite **Headless CMS** na barra de busca no topo da página.
5. Selecione a página em que deseja adicionar o **Live Shopping Player**.
6. Na aba `Seções`, adicione o reprodutor de mídia clicando em `+` **Adicionar seção** no local desejado. 
7. Na janela **Adicionar seção**, clique em **Live Shopping Player**.
8. No campo **Live Shopping Player**, cole o ID do evento que você copiou.
9. Clique em `Salvar`.
10. Quando estiver pronto para exibir o reprodutor de mídia no storefront, clique em **Publicar > Publicar agora**. 
11. (Opcional) Se a versão da página já tiver sido publicada anteriormente e a janela **Substituir versão publicada** for exibida, clique em `Substituir`.

Após alguns instantes, o deploy será concluído e o status na seção **Versões** mudará para `Publicado`.
