---
title: 'Configurando zoom e miniaturas em lojas CMS Portal (Legado)'
id: 5ZqoOjGFgIkESq2KyyEYus
status: PUBLISHED
createdAt: 2017-10-12T15:38:58.079Z
updatedAt: 2026-08-13T00:00:00.000Z
publishedAt: 2023-03-24T20:53:11.795Z
firstPublishedAt: 2017-10-12T15:48:58.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: setting-up-zoom-and-thumbnails-in-cms-portal-legacy-stores
legacySlug: configurar-o-tamanho-padrao-da-imagem-de-zoom
locale: pt
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

> ⚠️ Tutorial válido apenas para lojas CMS Portal (Legado). Para lojas desenvolvidas com [Store Framework](https://help.vtex.com/pt/docs/tracks/implementacao-de-frontend#store-framework), veja a documentação do componente [Product Images](https://developers.vtex.com/docs/apps/vtex.store-components/productimages).

Em sua loja CMS Portal (Legado), você pode configurar os seguintes efeitos de exibição no storefront diretamente no Admin VTEX:

- [Zoom](#configurar-zoom)
- [Miniaturas](#configurar-miniaturas)

## Antes de começar

Antes de configurar o zoom ou miniaturas em sua loja, leia o artigo [Configurar tipos de arquivos](/pt/docs/tutorials/configurar-tipos-de-arquivos) para saber como configurar os tipos de arquivos.

## Configurar zoom

Para o zoom de produto funcionar corretamente na sua loja **CMS Portal (Legado)**, configure o tipo `Produto - Zoom` em **Configurações da loja > Storefront > Configurações > Tipos de arquivos**. Saiba mais em [Configurar tipos de arquivos](/pt/docs/tutorials/configurar-tipos-de-arquivos).

Por padrão, esse tipo costuma vir com **1000×1000** pixels. Isso significa que:

- O zoom resultante exibe a imagem nesse tamanho.
- A imagem cadastrada no Catálogo precisa ter tamanho **igual ou superior** à configuração de `Produto - Zoom`. Se a imagem for menor, o zoom não é ativado (ou só funciona para algumas imagens).

Antes de realizar o ajuste nos **Tipos de arquivos**, confirme se o zoom está habilitado no template da página. Saiba mais em [Ativar o zoom do produto no template de página](/pt/docs/tutorials/ativar-o-zoom-do-produto-no-template-de-pagina).

### Casos de uso

- Você faz upload de uma imagem **1200×1200**. Na página de produto ela aparece como **600×600** e, ao passar o mouse, o zoom amplifica para **1000×1000** (valor padrão de `Produto - Zoom`).
- Você só tem imagens **800×800**. Nesse caso, configure `Produto - Zoom` para **800×800**. Na página de produto a imagem aparece como **600×600** e o zoom amplifica para **800×800**. A ampliação fica menor porque o tamanho configurado em `Produto - Zoom` é menor.

## Configurar miniaturas

As miniaturas (ou *thumbs*) permitem o carregamento rápido da página e facilitam o reconhecimento dos produtos, pois várias podem ser exibidas na tela ao mesmo tempo.

Para isso, as imagens são redimensionadas e comprimidas de acordo com a configuração do CMS. Se o tamanho do arquivo (em KB) for muito baixo, a compressão pode comprometer a qualidade da miniatura.

Para as miniaturas de produto serem exibidas com qualidade adequada na sua loja **CMS Portal (Legado)**, configure o tipo `Produto - Thumb` em **Configurações da loja > Storefront > Configurações > Tipos de arquivos**. Saiba mais em [Configurar tipos de arquivos](/pt/docs/tutorials/configurar-tipos-de-arquivos).

O campo **Tamanho Máximo em KB** desse tipo define o limite de compressão das miniaturas. Isso significa que:

- Se o valor for muito baixo, as imagens são comprimidas demais e a qualidade das miniaturas pode ficar comprometida.
- Aumentar o **Tamanho Máximo em KB** reduz a compressão e melhora a qualidade visual das miniaturas. Ajuste o valor até que a qualidade esteja satisfatória.
