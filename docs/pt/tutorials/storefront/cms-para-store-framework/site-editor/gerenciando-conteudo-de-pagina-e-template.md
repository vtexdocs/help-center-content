---
title: 'Gerenciar conteúdo de página e template'
id: 3tMbx6HXy4Fy5r9EhboG37
status: PUBLISHED
createdAt: 2021-05-07T03:32:03.808Z
updatedAt: 2026-11-26T14:16:47.344Z
publishedAt: 2023-03-24T22:17:48.424Z
firstPublishedAt: 2021-05-07T06:03:50.121Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slugEN: managing-page-and-template-content
legacySlug: gerenciando-conteudo-de-pagina-e-template
locale: pt
subcategoryId: 9Arh3cJIOYlfSD1MUC2h3
---

O Site Editor reflete nativamente o aplicativo Store Theme, permitindo que você sobrescreva as configurações predefinidas dos blocos e crie novo conteúdo para as páginas e [templates](/pt/docs/tutorials/o-que-sao-templates) da sua loja.

Neste guia, aprenda a acessar um bloco no Site Editor e a criar, editar, excluir ou redefinir seu conteúdo. Saiba também como configurar quais conteúdos ficam ativos ou inativos na sua loja.

> ℹ️ O Site Editor não permite adicionar um novo bloco a um template ou a uma página específica, nem remover, reordenar ou ocultar blocos. Ele apenas altera a configuração de blocos já declarados no aplicativo [Store Theme](https://developers.vtex.com/docs/guides/vtex-io-documentation-store-theme). Alterar a estrutura da página exige modificações no código do tema. Para mais informações, acesse o guia para desenvolvedores [Configuring templates](https://developers.vtex.com/docs/guides/vtex-io-documentation-4-configuringtemplates).

## Acessar o bloco

Para acessar o bloco cujo conteúdo você deseja gerenciar, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Site Editor**.
2. Use o campo `URL` para navegar até a página que exibe o bloco.
3. Selecione o bloco. Você pode selecioná-lo de duas maneiras:
    - Por meio da lista de blocos disponível no lado direito da tela.
    - Por meio do ícone <img src="https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/EDU-20472-20469-site-editor-managing-content/docs/pt/tutorials/storefront/cms-para-store-framework/site-editor/icone-inspecionar-transparente.png" alt="Ícone de inspecionar" width="25" style="vertical-align: middle;"/> ao lado do campo `URL`, que permite selecionar o bloco diretamente na interface.

    > ℹ️ O conteúdo que você vê ao clicar em um bloco é o que está ativo no momento.

## Criar conteúdo

Com o bloco selecionado, siga os passos abaixo para criar um novo conteúdo:

1. Clique em **VERSÕES** no canto superior direito da tela.

  > ℹ️ Saiba mais sobre o recurso **VERSÕES** em [Gerenciando versões de conteúdo](/pt/docs/tutorials/gerenciando-versoes-de-conteudo).

2. Clique no botão `NOVA VERSÃO`.
3. Faça as alterações desejadas de acordo com as configurações disponíveis para o bloco.
4. No final das configurações do bloco, na seção **Visibilidade**, defina quando o conteúdo ficará disponível:
    - Para disponibilizar o conteúdo logo após salvar as alterações, marque a opção `Ativar agora`.
    - Para agendar a exibição, marque `Definir uma data de início`, `Definir uma data de término` ou ambas as opções e escolha as datas no calendário.

    > ℹ️ Você pode definir apenas uma data de início, sem data de término, ou definir ambas as datas. Se você marcar apenas `Definir uma data de término`, a opção `Ativar agora` é marcada automaticamente. Saiba mais sobre o recurso **Visibilidade** em [Agendando atualizações de conteúdo](/pt/docs/tutorials/agendando-atualizacoes-de-conteudo).

5. Em **Aplicar para**, selecione onde o conteúdo será exibido:
    - `esta URL`: o conteúdo fica visível apenas na URL em que você salvou as alterações. Quanto mais específica for a URL, ou seja, quanto mais parâmetros e *querystrings* ela tiver, mais restrita será a exibição do conteúdo.
    - `este template`: o conteúdo fica visível em todas as páginas do template, incluindo a URL em que você está.

  > ℹ️ O Site Editor aplica configurações de conteúdo de acordo com a hierarquia de parâmetros da URL. Ao criar conteúdo para uma URL, o Site Editor o aplica a todas as páginas sob o mesmo parâmetro pai. Considere uma URL de uma categoria específica, por exemplo. Ao criar conteúdo para ela, todas as URLs das páginas de produto cujo parâmetro pai é a categoria também serão atualizadas.

6. Clique em `SALVAR` para salvar suas alterações.

## Editar conteúdo

Com o bloco selecionado, siga os passos abaixo para editar um conteúdo:

1. Edite os campos do conteúdo ativo com os novos valores. Para editar outra versão de conteúdo do bloco, clique em **VERSÕES** e escolha a versão desejada.

  > ℹ️ Saiba mais sobre o recurso **VERSÕES** em [Gerenciando versões de conteúdo](/pt/docs/tutorials/gerenciando-versoes-de-conteudo).

2. Clique em `SALVAR` para salvar suas alterações.

> ⚠️ Ao editar um conteúdo do Store Theme, não é possível alterar a opção **Aplicar para**. Esse conteúdo sempre vale para todo o template, e não para uma URL específica. Somente nos conteúdos que você criou no Site Editor é possível escolher entre `esta URL` e `este template`.

## Excluir ou redefinir conteúdo

Para excluir ou redefinir um conteúdo, [acesse o bloco](#acessar-o-bloco) no Site Editor e siga os passos abaixo:

1. Clique em **VERSÕES**. A versão ativa aparece no topo da lista.
2. Clique no ícone `⋮` da versão que você quer excluir ou redefinir.
3. Clique em `Excluir` ou `Redefinir` e confirme a ação.

> ⚠️ A ação disponível depende do tipo de conteúdo. Os conteúdos nativos, criados diretamente no código, só podem ser redefinidos se tiverem sido sobrescritos. Somente os conteúdos criados manualmente no Site Editor podem ser excluídos.

## Configurar conteúdo ativo e inativo

Cada configuração realizada no Site Editor sobrescreve a definida pelo aplicativo Store Theme.

Na prática, o conteúdo que você cria ou atualiza no Site Editor fica ativo automaticamente. A exceção ocorre quando você define uma data de início ou de término. Nesse caso, a ativação segue essas datas.

Para ativar um conteúdo, clique em **VERSÕES**, clique no ícone `⋮` da versão inativa que deseja ativar e selecione `Ativar`. Apenas um conteúdo fica ativo por vez. Saiba mais em [Gerenciando versões de conteúdo](/pt/docs/tutorials/gerenciando-versoes-de-conteudo#ativando-versoes).

> ℹ️ Ao excluir o conteúdo ativo, o primeiro conteúdo da fila de inativos é ativado. A fila de conteúdos inativos começa com o mais recente e vai até o mais antigo. Os conteúdos criados por meio do Site Editor **sempre** prevalecem sobre o que foi definido no código.
