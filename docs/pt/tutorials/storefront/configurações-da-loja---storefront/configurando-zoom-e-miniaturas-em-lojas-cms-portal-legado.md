---
title: 'Configurando zoom e miniaturas em lojas CMS Portal (Legado)'
id: 5ZqoOjGFgIkESq2KyyEYus
status: PUBLISHED
createdAt: 2017-10-12T15:38:58.079Z
updatedAt: 2026-08-12T20:53:11.795Z
publishedAt: 2023-03-24T20:53:11.795Z
firstPublishedAt: 2017-10-12T15:48:58.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slugEN: setting-up-the-standard-size-for-the-zoom-image
legacySlug: configurar-o-tamanho-padrao-da-imagem-de-zoom
locale: pt
subcategoryId: 7ogirQ8NClawO2X6xdgCKc
---

> ℹ️ Tutorial válido apenas para lojas CMS Portal (Legado). Para lojas desenvolvidas com Store Framework, veja a documentação do componente [Product Images](https://developers.vtex.com/docs/apps/vtex.store-components/productimages).

No Admin VTEX, você pode configurar os seguintes efeitos de exibição no storefront para lojas CMS Portal (Legado):

- Zoom
- Thumbnail



### Configurar zoom

Para o zoom de produto funcionar corretamente no **CMS Portal (Legado)**, configure o tipo `Produto - Zoom` em **Configurações da loja > Storefront > Configurações > Tipos de arquivos**.

Por padrão, esse tipo costuma vir com **1000×1000** pixels. Isso significa que:

- O zoom resultante exibe a imagem nesse tamanho.
- A imagem cadastrada no Catálogo precisa ter tamanho **igual ou superior** à configuração de `Produto - Zoom`. Se a imagem for menor, o zoom não é ativado (ou só funciona para algumas imagens).

Antes de ajustar **Tipos de arquivos**, confirme também se o zoom está habilitado no template da página. Veja [Ativar o zoom do produto no template de página](/pt/docs/tutorials/ativar-o-zoom-do-produto-no-template-de-pagina).

#### Exemplos

- Você faz upload de uma imagem **1200×1200**. Na página de produto ela aparece como **600×600** e, ao passar o mouse, o zoom amplifica para **1000×1000** (valor padrão de `Produto - Zoom`).
- Você só tem imagens **800×800**. Nesse caso, configure `Produto - Zoom` para **800×800**. Na página de produto a imagem aparece como **600×600** e o zoom amplifica para **800×800**. A ampliação fica menor porque o tamanho configurado em `Produto - Zoom` é menor.

> ⚠️ Se já existirem imagens cadastradas, não altere as dimensões do tipo sem planejar o recadastro. Consulte o aviso na seção [Instruções](#instrucoes).

### Produto - Thumb

O **Tamanho Máximo em KB** do tipo `Produto - Thumb` afeta a compressão e a qualidade das miniaturas. Saiba mais em [Por que a imagem "thumb" está em baixa qualidade?](/pt/faq/porque-a-imagem-thumb-esta-em-baixa-qualidade).
