---
title: 'Reutilizando imagens com o Image Widget'
id: 7pRSVI2xXpQUzjUZj0m4ov
status: PUBLISHED
createdAt: 2021-06-30T18:06:46.531Z
updatedAt: 2024-03-27T14:07:43.190Z
publishedAt: 2024-03-27T14:07:43.190Z
firstPublishedAt: 2021-07-02T21:20:16.653Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: image-widget
legacySlug: image-widget
locale: pt
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

Image Widget é um repositório modal para blocos que permitem o envio de imagens no [Site Editor](https://help.vtex.com/subcategory/layout--2g6LxtasS4iSeGEqeYUuGW). Com esse modal, você pode enviar, armazenar e gerenciar as imagens de sua loja e usá-las em diferentes páginas, como Home, Product ou Newsletter.

Por exemplo, você pode adicionar uma nova imagem no bloco __Carrossel__ da sua loja. Para fazer o envio dessa imagem, você se beneficia do Image Widget.

Na próxima seção, aprenda como [Acessar o Image Widget](#acessando-image-widget).

## Acessando Image Widget

Blocos no Site Editor, que permitem fazer upload de uma imagem, possuem o modal Image Widget, e neste artigo usaremos o bloco __Carrossel__ como exemplo. As etapas para acessar o Image Widget são as seguintes:

1. No admin VTEX, acesse **Storefront > Site Editor**.
2. Na coluna da direita, selecione o bloco para o qual deseja enviar uma imagem.
3. Em __BANNERS__, clique `ADICIONAR.`
4. Em __Imagem do banner__, clique `Fazer upload.`

Depois de concluídas as etapas anteriores, o modal Image Widget será aberto em sua tela.

Agora que você sabe como acessar o Image Widget, verifique o que você pode fazer a seguir:

- [Adicionando uma imagem](#adicionando-uma-imagem)
- [Substituindo uma imagem](#substituindo-uma-imagem)
- [Removendo uma imagem](#removendo-uma-imagem)

### Adicionando uma imagem

Depois de [acessar Image Widget](#acessando-image-widget) e com ele aberto você consegue adicionar imagens:

<div class="alert alert-warning">
Ao adicionar novas imagens no modal Image Widget usando um <a href="https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-workspace">development workspace</a>, as configurações performadas serão salvas diretamente em master, ou seja, imediatamente refletirão no modal da sua loja.
</div>
<br>
<div class="alert alert-warning">
  O tamanho máximo que o Image Widget suporta é 4 MB por arquivo.
</div>

1. Clique em `Adicionar novo.`
2. Escolha a imagem que deseja adicionar e clique em `Abrir.`
3. O modal fecha sozinho e clique em `APLICAR.`

Após completar a etapa anterior, sua imagem está configurada no bloco e também no seu repositório Image Widget e pronta para ser usada nas páginas da sua loja.

Depois de adicionar uma imagem ao modal, você tem outras opções com ela. Verifique o que mais você pode fazer em [Recursos dentro do Image Widget](#recursos-dentro-do-image-widget).

#### Recursos dentro do Image Widget

Dentro do modal, alguns dos recursos que você possui são um campo para busca de imagens, filtrá-las por ordem e visualizar suas imagens em lista ou grade.

Além disso, [adicionando uma imagem](#adicionando-uma-imagem) em seu modal, agora você pode visualizar, copiar a URL de uma imagem, fazer o download e excluí-las de seu repositório.

Com o modal aberto, clique em `mais ações` na miniatura de uma imagem.

| Opções     | Descrição                                          |
| ---------- | -------------------------------------------------- |
| __Antevisão__  | Abre uma nova página para mostrar uma prévia da imagem. |
| __Copiar URL__ | Permite que você copie o URL da imagem e use-a em outras partes da sua loja.    |
| __Baixar__     | Baixe a imagem para o seu computador.              |
| __Excluir__    | Remove a imagem do repositório.                    |

### Substituindo uma imagem

No bloco que você deseja substituir uma imagem:

1. Clique em `Mais ações` na miniatura de uma imagem e selecione __Editar.__
2. Clique novamente em `Mais ações` e selecione __Substituir.__
3. Com o modal aberto, clique em uma imagem para substituir.
4. Clique em `APLICAR`.

### Removendo uma imagem

Para remover uma imagem do bloco desejado, clique em `Mais ações` na miniatura de uma imagem e selecione __remover__. Após esse procedimento, a imagem não estará mais visível no bloco.

<div class="alert alert-warning">
  Quando você remove uma imagem, isso não significa que ela seja excluída do repositório. Para isso, verifique a seção <a href="#recursos-dentro-do-image-widget">Recursos dentro do Image Widget</a>.
</div>

