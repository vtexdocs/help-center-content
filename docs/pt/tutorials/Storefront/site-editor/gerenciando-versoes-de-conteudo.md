---
title: 'Gerenciando versões de conteúdo'
id: 4loXo98CZncY0NnjKrScbG
status: PUBLISHED
createdAt: 2021-10-28T16:11:05.023Z
updatedAt: 2023-03-24T22:05:07.430Z
publishedAt: 2023-03-24T22:05:07.430Z
firstPublishedAt: 2021-12-16T16:27:38.316Z
contentType: tutorial
productTeam: VTEX IO
author: 1DedyaVUPp5wLAvjY7wKKv
slugEN: managing-content-versions
legacySlug: gerenciando-versoes-de-conteudo
locale: pt
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

A versão de um bloco é uma cópia de seu conteúdo em um momento específico. Por exemplo, um Carrossel pode ter versões predefinidas para futuras campanhas de marketing, como Black Friday e Dia dos Namorados, com banners de conteúdo específico.

Com o recurso **Versões**, você pode criar, programar e experimentar diferentes conteúdos para um determinado bloco, sem comprometer a versão publicada da sua loja. Cada bloco disponível no Site Editor pode ter várias versões.

Veja nas seguintes seções como:

- [Criar uma nova versão de conteúdo](#criando-uma-nova-versao-de-conteudo)
- [Ativar versões](#ativando-versoes)
- [Agendar atualizações de conteúdo](#agendando-atualizaçoes-de-conteudo)
- [Excluir versões](#excluindo-versoes)

## Criando uma nova versão de conteúdo
Usaremos o bloco [Slider-Layout](https://developers.vtex.com/vtex-developer-docs/docs/vtex-slider-layout) de exemplo para criar uma nova versão de conteúdo para sua loja.

1. No Admin VTEX acesse **Storefront > Site Editor**.

2. Clique no bloco desejado (exemplo, Slider-Layout), selecione **VERSÕES** e      clique em **NOVO CONTEÚDO.**

3. No campo **Conteúdo sem título**, insira um nome para identificar seu conteúdo facilmente, por exemplo, *Campanha da Black Friday*.

4. Configure o bloco conforme sua preferência e clique em `SALVAR`.

Depois de salvar suas alterações, uma nova versão do bloco será criada. No entanto, **esta versão ainda não estará disponível publicamente em sua loja**. Para publicá-la, verifique a seção **[Ativando Versões](#ativando-versões)**.

## Ativando versões

Depois de [criar uma nova versão de conteúdo](#criando-uma-nova-versão-de-conteúdo), você pode torná-la pública por meio da função **Mais opções**. Siga as instruções abaixo para publicar o conteúdo em sua loja.

1. No Admin VTEX acesse **Storefront > Site Editor**.

2. Clique no bloco desejado (exemplo, Slider-Layout) e selecione **VERSÕES**.

3. Escolha o conteúdo que deseja ativar e clique em `Mais opções`> **Ativar**.

<div class="alert alert-warning">
  <p>Ao acessar <i>Aplicar para</i>, a opção <i>esta URL<i> sempre aparecerá acima de <i>este template<i>. Isso significa que caso o bloco tenha duas versões, cada uma com uma opção diferente de aplicação, o usuário só conseguirá reativar a versão aplicada em template se excluir a versão aplicada por URL.</p>

Após clicar em `mais opções`> **Ativar**, você terá publicado o novo conteúdo em sua loja.

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Você só pode ter um conteúdo ativo por vez. Se você ativar um conteúdo, os outros serão desativados.
</div>

## Agendando atualizações de conteúdo

Depois de [criar uma nova versão de conteúdo](#criando-uma-nova-versão-de-conteúdo), você pode agendar a publicação da nova versão em sua loja por meio do recurso **Visibilidade**.

Veja a documentação [Agendando atualizações de conteúdo](https://help.vtex.com/pt/tutorial/agendando-atualizacoes-de-conteudo--5L93gED3wgSRoWpFJlJ2ns) e aprenda a usar o recurso **Visibilidade**.

## Excluindo versões

Se você deseja excluir uma versão de um bloco, siga as etapas a seguir para removê-la das versões salvas.

1. No Admin VTEX acesse **Storefront > Site Editor**.

2. Clique no bloco desejado (exemplo, Slider-Layout), selecione **VERSÕES.**

3. Escolha o conteúdo que deseja excluir e clique em `mais opções` > **Remover**.

