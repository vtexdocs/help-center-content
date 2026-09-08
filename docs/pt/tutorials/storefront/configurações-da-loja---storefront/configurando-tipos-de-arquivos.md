---
title: 'Configurando tipos de arquivos'
createdAt: 2026-08-12T15:00:00.000Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: configuring-file-types
legacySlug: configurando-tipos-de-arquivos
locale: pt
---

No Admin VTEX, você pode definir as dimensões padrão e o tamanho máximo (em KB) dos arquivos usados na sua loja, principalmente as imagens de produto do Catálogo. Essas configurações influenciam a validação do upload de imagens no Admin e, nas lojas **CMS Portal (Legado)**, também os comportamentos de storefront, como zoom e miniaturas.

> ⚠️ A validação de **Tamanho Máximo em KB** no upload de imagens de produto/SKU no Catálogo vale para lojas [CMS Portal (Legado)](https://help.vtex.com/pt/docs/tracks/cms-portal-legado) e [Store Framework](https://help.vtex.com/pt/docs/tracks/implementacao-de-frontend#store-framework). Saiba mais em [Configurando zoom e miniaturas em lojas CMS Portal (Legado)](/pt/docs/tutorials/configurando-zoom-e-miniaturas-em-lojas-cms-portal-legado).

![Lista de tipos de arquivos no Admin](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-7115-tipos-de-arquivos/docs/pt/tutorials/storefront/configurações-da-loja---storefront/configurando-tipos-de-arquivos_1.png)

> ℹ️ Na listagem, a coluna **Tamanhos** exibe o resumo no formato `{largura}px x {altura}px | {tamanho}KB`.

## Instruções

### Configurar tipos de arquivos

Para configurar os tipos dos arquivos de sua loja, siga estes passos:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Configurações**.
2. Clique na aba **Tipos de arquivos**.
3. Na lista, localize o tipo desejado e clique em `Editar`.
4. Preencha os campos descritos em [Campos do tipo de arquivo](#campos-do-tipo-de-arquivo).
5. Clique em `Salvar`.

> ⚠️ Não altere as dimensões de um tipo se já existirem imagens cadastradas com essa configuração. Se for necessário alterar o tamanho, apague e recadastre as imagens do tipo modificado.

#### Campos do tipo de arquivo

Ao clicar em `Editar`, o formulário apresenta os campos abaixo:

| Campo | Descrição |
| :--- | :--- |
| **Nome** | Identifica o tipo de arquivo na lista (por exemplo, `Produto - Zoom` ou `Produto - Thumb`). |
| **Largura** e **Altura** | Apresentam as dimensões padrão em pixels (`largura` x `altura`) associadas ao tipo. |
| **Tamanho Máximo em KB** | Delimita o tamanho máximo do arquivo em quilobytes (KB). É o principal critério de validação no upload de imagens de produto no Catálogo. |
| **Tipo** | Define se o tipo é Imagem (usa largura/altura e pode ser redimensionada/comprimida) ou Arquivo (arquivo genérico, sem restrição de pixels). |
| **Flag de ajuste de tamanho obrigatório** | Quando marcada, obriga o redimensionamento da imagem para a largura e a altura configuradas. Quando desmarcada, as dimensões não são forçadas no upload. |

### Corrigir uploads bloqueados

O upload de imagens de produto e SKU no Catálogo respeita o **Tamanho Máximo em KB** configurado para o tipo de arquivo correspondente.

Se o valor estiver em **0KB** ou for baixo demais, o Admin pode rejeitar o upload mesmo quando:

- O arquivo abre normalmente no computador.
- A mesma imagem sobe sem erro em outra conta ou ambiente.
- O arquivo está dentro das [boas práticas gerais de imagens do Catálogo](/pt/docs/tutorials/boas-praticas-para-o-uso-de-imagens-no-catalogo).

Para corrigir uploads bloqueados, siga estes passos:

1. No Admin VTEX, acesse **Configurações da loja > Storefront > Configurações > Tipos de arquivos**.
2. Clique em `Editar` no tipo de imagem de produto afetado (por exemplo, `Produto - Principal` ou `Produto - Giga`).
3. Aumente o valor de **Tamanho Máximo em KB** para um limite compatível com suas imagens (valores comuns na plataforma incluem limites da ordem de milhares de KB, como `3000KB`).
4. Salve a configuração e tente o upload novamente no cadastro do SKU.

> ℹ️ Dimensões configuradas como `0px x 0px` costumam indicar ausência de restrição de largura/altura para aquele tipo. Já **0KB** no tamanho máximo bloqueia uploads.
