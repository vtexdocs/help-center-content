---
title: 'Parâmetros de campanhas são perdidos em redirecionamento de HTTP para HTTPS'
id: 2GHGz8HUBiqw4mqI0uSmu6
status: PUBLISHED
createdAt: 2017-08-16T20:33:02.765Z
updatedAt: 2019-12-31T15:17:50.475Z
publishedAt: 2019-12-31T15:17:50.475Z
firstPublishedAt: 2017-08-16T20:52:08.081Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Catalog
slug: parametros-de-campanhas-sendo-perdidos-em-redirecionamento-de-http-para-https
locale: pt
kiStatus: Fixed
internalReference: 
---

## Sumário

Redirecionamento de HTTP para HTTPS remove parâmetros não reconhecidos pela VTEX.

Uma loja que possua alguma URL (no protocolo HTTP) indexada em sites externos (Facebook, Google, Blogs etc), ao configurar essa URL para utilizar o protocolo HTTPS na VTEX, quando o cliente acessar esse link (no site externo), acontecerá um redirecionamento, na VTEX, de HTTP para HTTPS.

Esse redirecionamento remove parâmetros (do querystring) não reconhecidos, porém, normalmente muito importantes para trackeamento de campanhas.

## Atualização: problema solucionado

Com o uso da [nova CDN da VTEX](/pt/tutorial/ativar-nova-cdn-da-vtex), o redirecionamento entre páginas mantém os parâmetros originais.

## Simulação

1. Configurar um diretório (pasta) para utilizar o protocolo HTTPS. Veja o artigo [Alterar o protocolo HTTP ou HTTPS das páginas do site](/pt/faq/como-ter-o-protocolo-https-nas-paginas-da-minha-loja) para aplicar essa configuração.
2. Na loja, acessar esse diretório (pasta) utilizando o protocolo HTTP e passando algum parâmetro no QueryString. Ex.: `http://{{AccountName}}.vtexcommercestable.com.br/blackfriday?gclid=123`
3. A VTEX aplicará um redirecionamento de HTTP para HTTPS, porém, o parâmetro "gclid" do exemplo anterior, não será também repassado para o redirecionamento, ou seja, a página será carregada sem esse parâmetro.

## Workaround

Modifique as URLs em todos os sites externos, adaptando o link de HTTP para HTTPS. Como nesse caso não existirá o redirecionamento, o problema não acontecerá e o parâmetro será carregado corretamente.

