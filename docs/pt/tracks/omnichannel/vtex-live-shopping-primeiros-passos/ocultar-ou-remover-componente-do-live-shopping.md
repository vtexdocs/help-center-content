---
title: 'Ocultar ou remover componente do Live Shopping'
id: 7e3bP6LjFgxXC210jSpl59
status: PUBLISHED
createdAt: 2025-07-23T18:14:54.073Z
updatedAt: 2025-09-15T18:23:16.624Z
publishedAt: 2025-09-15T18:23:16.624Z
firstPublishedAt: 2025-07-28T15:08:44.289Z
contentType: trackArticle
productTeam: Marketing & Merchandising
slugEN: hiding-or-removing-live-shopping-component
locale: pt
trackId: 3eCHNCIx8XhZOSmX0sQT3U
trackSlugEN: vtex-live-shopping-primeiros-passos
order: 11
---

Após [finalizar a transmissão no Bundle](https://help.vtex.com/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/69PX90vv4oDWQ34nnBkiQt#finalizar-a-transmissao) ou em um estúdio externo e quando seu [status](https://help.vtex.com/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/5WLXGbOSFmxN7QlzOnfGrv#status-do-evento) estiver como `Finalizado`, oculte o componente **Live Shopping** ou remova o código, de acordo com a solução de frontend da sua loja. Enquanto essa ação não for realizada, o público continuará vendo uma tela preta no site ou na landing page.

Verifique as instruções específicas para a sua solução frontend:

* [Store Framework (VTEX IO)](#store-framework-vtex-io)
* [CMS - Portal Legado](#cms-portal-legado)
* [Headless CMS](#headless-cms)

> ❗ Para evitar que os espectadores vejam uma tela preta no final da transmissão, é possível exibir uma imagem de encerramento, conforme explicado a seguir:<ol><li>Antes de finalizar a transmissão, exiba a imagem de encerramento no Bundle ou em um estúdio externo.</li><li>Oculte o componente **Live Shopping** ou remova o código da loja (conforme descrito nas próximas seções).</li><li>Aguarde cerca de 10 minutos após exibir a imagem para que o cache seja atualizado.</li><li>Finalize o evento.

## Store Framework (VTEX IO)

Para lojas que usam [Store Framework](https://help.vtex.com/pt/tracks/trilha-da-loja-vtex--eSDNk26pdvemF3XKM0nK9/67SCtUreXxKYWhZh8n0zvZ#store-framework), você pode ocultar o componente **Live Shopping** no [Site Editor](https://help.vtex.com/pt/tutorial/gerenciando-conteudo-de-pagina-e-template--3tMbx6HXy4Fy5r9EhboG37) seguindo os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Site Editor**, ou digite **Site Editor** na barra de busca no topo da página.
2. Na lista **Blocos**, no lado direito da página, selecione o bloco do **Live Shopping** .
3. Desative a opção <i class="fas fa-toggle-off" aria-hidden="true"></i> `Mostrar componente`.
4. Clique em `Salvar`.

> ℹ️ Após salvar a configuração do componente **Live Shopping** no **Site Editor**, as alterações podem levar de cinco a dez minutos para serem refletidas no storefront. Enquanto a página estiver sendo atualizada, recomendamos exibir uma imagem de encerramento do evento.

## CMS - Portal Legado

Para lojas que usam o [CMS - Portal Legado](https://help.vtex.com/pt/tracks/cms--2YcpgIljVaLVQYMzxQbc3z/1oN446gRGcR2s70RvBCAmj), é necessário remover o script do **Live Shopping** seguindo os passos abaixo: 

1. No Admin VTEX, acesse **Storefront > Layout**, ou digite **Layout** na barra de busca no topo da página.
2. Clique em **CMS > Templates HTML**.
3. Exclua o script do **Live Shopping** do arquivo HTML em que foi [adicionado](https://help.vtex.com/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#cms-portal-legado).
4. Clique em `Salvar template` no canto superior direito do template.

## Headless CMS

Para lojas que usam [Headless CMS](https://help.vtex.com/pt/tutorial/headless-cms-visao-geral--3U5gvhHdQL0jczYH8gjX09), é necessário remover o script do **Live Shopping** do arquivo HTML em que foi [adicionado](https://help.vtex.com/pt/tracks/vtex-live-shopping-primeiros-passos--3eCHNCIx8XhZOSmX0sQT3U/4r5uk6XHxdYlOGMr11GFWR#headless-cms).

