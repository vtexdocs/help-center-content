---
title: 'Mídia - Visão geral'
id: 31fhjHTt4TBoo50AmGQ9b2
status: PUBLISHED
createdAt: 2023-05-29T23:26:35.354Z
updatedAt: 2025-03-10T18:01:14.864Z
publishedAt: 2024-07-03T19:28:25.937Z
firstPublishedAt: 2023-05-30T18:01:54.161Z
contentType: tutorial
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slugEN: media-overview
legacySlug: midia-visao-geral
locale: pt
subcategoryId: 27t6x0lngvjI3bnUg5AgEO
---

O Mídia é uma funcionalidade responsável por gerenciar os arquivos de mídia da sua loja, como imagens e vídeos. Para imagens, você pode fazer o upload e organizar arquivos de mídia de até 5 MB usando o Mídia nos seguintes formatos: `png`, `jpg`, `gif`, `svg` e `webp`. Para vídeos, você pode adicionar uma URL para o provedor de vídeo hospedado externamente, como YouTube ou Vimeo.

> ⚠️ Para upload, os arquivos devem ter uma extensão em minúsculo, por exemplo, `store.png`, e tamanho de até **5 MB**.

![Mídia Visão Geral](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/headless-cms/midia-visao-geral_1.png)

Além disso, o Mídia está integrado ao **Site Editor** e ao **Headless CMS**, o que permite que ele seja acessado e gerenciado diretamente através de soluções de CMS da VTEX. 

Neste guia, aprenda a:

- [Acessar o Mídia no Admin](#acessando-o-midia)
- [Gerenciar Arquivos no Mídia no Admin](#gerenciando-arquivos-no-midia)

## Acessar o Mídia
Há três maneiras de acessar o Mídia no Admin:

- **Mídia**: no VTEX Admin, acesse **Storefront > Mídia**. 

- **Site Editor** (para lojas que usam o Store Framework): no VTEX Admin, acesse **Storefront > Site Editor**, escolha um bloco que contenha uma imagem (por exemplo, Carrossel), e clique em `Adicionar`.  Um painel do Mídia será aberto.

- **Headless CMS**:  no VTEX Admin, acesse **Storefront > Headless CMS** e escolha uma das páginas criadas, por exemplo, uma Página de Produto. Nas seções disponíveis, selecione uma na qual você possa adicionar uma imagem, por exemplo, [Hero](https://developers.vtex.com/docs/guides/faststore/organisms-hero). Clique no componente de imagem do Hero e um painel do Mídia será aberto.

> ⚠️ A seção disponível deve utilizar o [media-gallery](https://developers.vtex.com/docs/guides/faststore/headless-cms-3-adding-content-types-and-sections#step-3-adding-sections-to-the-headless-cms) para aproveitar o Mídia. Para projetos [FastStore](https://developers.vtex.com/docs/guides/faststore/docs-what-is-faststore), as seções que utilizam o widget  *media-gallery* são [Navbar](https://developers.vtex.com/docs/guides/faststore/organisms-navbar) and [Hero](https://developers.vtex.com/docs/guides/faststore/organisms-hero).

Na imagem a seguir, confira a visão geral da interface do Mídia e as ações disponíveis para gerenciar seus arquivos de mídia:

![Mídia Features](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/headless-cms/midia-visao-geral_2.png)

| Campo | Descrição |
| ---------- | ------------- |
| **I - Campo de busca** | Pesquise os arquivos disponíveis no Mídia. |
| **II - Ordenar por** | Classifique como os arquivos são exibidos na interface com base nos filtros: `Mais recentes`, `Mais antigos`, `Nome (A-Z)` e `Nome (Z-A)`. |
| **III - Paginação** | Navegue pelas páginas de arquivos disponíveis. |
| **IV - Modo de visualização** |	Escolha o modo de visualização dos arquivos: `Visualizar em lista` ou `Visualizar em grade`. |
| **V - Adicionar nova imagem ou vídeo** | Carregue um novo arquivo de sua máquina local. |

## Gerenciar arquivos no Mídia
Veja nas seções abaixo as ações disponíveis para gerenciamento de arquivos no Mídia:

### Upload de imagens

No Mídia, você pode fazer upload de imagens nos seguintes formatos: `png`, `jpg`, `gif`, `svg` e `webp`, com um limite de tamanho de arquivo de 5 MB. Para fazer o upload da imagem da sua loja, siga estes passos:

1. Na página ou no painel **Mídia**, clique em `Adicionar novo(a)` e clique em `Imagem`.

> ⚠️ No painel Mídia disponível no Headless CMS e no Site Editor, você pode arrastar e soltar imagens.

2. Escolha a imagem que deseja adicionar e clique em `Abrir`.

> ⚠️ Lembre-se, o Mídia aceita os seguintes formatos: `png`, `jpg`, `gif`, `svg`, e `webp`, em minúsculo e com um limite de tamanho de arquivo de 5 MB.

3. Depois que a imagem é carregada, uma mensagem de sucesso será exibida. Agora, você pode executar outras ações clicando em `Mais ações` (três pontos verticais) na miniatura da imagem e escolhendo uma das seguintes ações:

| Campo | Descrição |
| ---------- | ------------- |
| **Pré-visualizar** | Abre a imagem em uma nova página. |
| **Copiar URL** | Copia a URL da imagem para que você possa utilizá-la em outras seções da sua loja. |
| **Baixar** | Faz o download da imagem para o seu computador. |
| **Excluir** |	Remove a imagem do repositório. |

> ⚠️ Excluir a imagem apenas a removerá do repositório do Mídia. Se você adicionou a imagem em um componente Hero, por exemplo, a imagem continuará sendo utilizada neste componente. Porém, você não poderá usá-la em outros componentes.

### Adicionar vídeos

Além de imagens, no Mídia, você também pode armazenar vídeos e, em seguida, usá-los em sua loja para criar apelo visual para os usuários.

1. Na página **Mídia**, clique em `Adicionar novo(a)` e escolha `Vídeo`.
2. No modal, preencha o nome e a URL do vídeo conforme necessário.

- **Nome do vídeo:** adicione um nome para o vídeo que o ajude a identificá-lo melhor na galeria.
- **URL do vídeo:** adicione a URL do vídeo.

3. Clique em `Adicionar vídeo`.

Com o vídeo adicionado, você pode escolher o que fazer com ele clicando no menu `⋮` na miniatura do vídeo:

- **Copiar URL:** obtenha o endereço URL do vídeo para usar em sua loja por meio do Headless CMS.
- **Abrir vídeo:** veja uma prévia do vídeo em uma nova aba do navegador.
- **Excluir:** exclua o vídeo da sua galeria.

### Adicionar um vídeo ao conteúdo no Headless CMS

Integrar conteúdo multimídia, como vídeos, no Headless CMS pode melhorar a experiência do usuário em seu site. Siga os passos abaixo para adicionar vídeos à sua loja.

1. No VTEX Admin, acesse **Storefront > Headless CMS**.
2. Selecione o [projeto](/pt/tutorial/managing-projects--42IpDFqTVTESH8DCypJMPM) ao qual você deseja adicionar o vídeo.
3. Escolha uma página para adicionar o vídeo, por exemplo, **Página inicial**.
4. Com a **Página inicial** aberta, na aba **Seções**, adicione (`+`) uma seção que tenha o widget `media-gallery`, ex.: Hero.
5. No Hero, preencha os seguintes campos:

- **Endereço URL:** cole a URL que você copiou do Mídia.
- **Descrição do vídeo:** descrição do vídeo para acessibilidade.

6. Clique em `Salvar`.
7. Se desejar verificar suas alterações antes de publicá-las, clique em `Visualizar`.

### Cancelar um upload

- **Imagens**

Se você estiver carregando uma nova imagem e não quiser continuar, clique no `X` sobreposto na miniatura da imagem para cancelar.

- **Vídeos**

Depois de ter feito o upload do vídeo, passe o mouse sobre a miniatura do vídeo e clique no menu (`⋮`). Selecione **Excluir**.
Se este vídeo já estiver sendo usado em algum lugar da sua loja, ele permanecerá lá, mas não estará disponível para uso futuro.

