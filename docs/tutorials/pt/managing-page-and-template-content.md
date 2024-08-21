---
title: 'Gerenciando conteúdo de página e template'
id: 3tMbx6HXy4Fy5r9EhboG37
status: PUBLISHED
createdAt: 2021-05-07T03:32:03.808Z
updatedAt: 2023-03-24T22:17:48.424Z
publishedAt: 2023-03-24T22:17:48.424Z
firstPublishedAt: 2021-05-07T06:03:50.121Z
contentType: tutorial
productTeam: VTEX IO
author: 6AcGyun1hSWewU8YcaQiO
slug: gerenciando-conteudo-de-pagina-e-template
locale: pt
legacySlug: gerenciando-conteudo-de-pagina-e-template
subcategory: 9Arh3cJIOYlfSD1MUC2h3
---

O Site Editor reflete nativamente o aplicativo Store Theme, permitindo que você sobrescreva as configurações predefinidas para blocos e crie um novo conteúdo para as páginas e *templates* da sua loja.

<div class = "alert alert-info">
O Site Editor não permite que você adicione um novo bloco a um <i>template</i> ou página específica, apenas sobrescrever as configurações de bloco existentes do Store Theme.
</div>

Exercite sua autonomia sobre o código e construa o cenário de loja desejado de acordo com as necessidades de seu negócio, usando uma interface amigável a seu favor!

1. Acesse **Storefront > Site Editor**.
2. Use o campo URL no canto superior para navegar até a página que exibe o bloco cujo conteúdo será sobrescrito.

## Criando conteúdo

1. Selecione o bloco para o qual deseja criar um novo conteúdo. Você pode selecioná-lo usando a lista no canto direito ou através da interface:

![seta-interface-pt](https://images.ctfassets.net/alneenqid6w5/5Jy42Ht1E66ETZf4Beiv85/533c69a0cd05f2a0c88e6df83ce13615/img-two.png)

2. Clique em `Versões` no canto superior direito.

>ℹ️ O conteúdo que você vê ao clicar em um bloco é o que está ativo no momento. Para mais informações sobre o recurso **Versões**, acesse [Gerenciando versões de conteúdo](https://help.vtex.com/pt/tutorial/managing-content-versions--4loXo98CZncY0NnjKrScbG) e [Agendando atualizações de conteúdo](https://help.vtex.com/pt/tutorial/scheduling-content-updates--5L93gED3wgSRoWpFJlJ2ns)

3. Clique no botão `Novo conteúdo`.
4. Faça as alterações desejadas de acordo com as configurações disponíveis para o bloco.
5. Defina se o conteúdo será ativado assim que for salvo clicando no campo `Ative agora`. É possível também definir uma data de início e uma data de término, se desejar. Para fazer isso, selecione os respectivos botões e escolha a data adequada no calendário.

  <div class = "alert alert-warning">
Depois que o campo `esta URL` estiver marcado, o conteúdo só ficará visível na URL específico em que você salvou suas alterações. Portanto, tome cuidado com os parâmetros e outros componentes de URL que podem afetar a exibição do conteúdo - quanto mais específica for a seu URL, isto é, com mais parâmetros e <i>querystrings</i>, mais restrito será o novo conteúdo.
</div>

  <div class = "alert alert-info">
O Site Editor aplica configurações de conteúdo de acordo com a hierarquia de parâmetros da URL. Reproduza o conteúdo de forma nativa para todas as páginas sob o mesmo parâmetro pai, criando apenas conteúdo para a URL com o mesmo. Considere uma determinada URL de categoria, por exemplo. Ao criar conteúdo para ela, todas as URLs das páginas de produto cujo parâmetro pai é a categoria também serão atualizadas.
</div>

6. Ainda na seção `Visibilidade`, verifique se o conteúdo será criado apenas na URL para a qual você navegou inicialmente ou em todo o *template* —  incluindo a URL que você está atualmente e todas as outras do *template*.

7. Salve suas alterações.

## Editando conteúdo

1. Selecione o bloco desejado cujo conteúdo será sobrescrito. Você pode selecioná-lo usando a lista no canto direito ou através da interface:

![seta-interface-pt](https://images.ctfassets.net/alneenqid6w5/5Jy42Ht1E66ETZf4Beiv85/533c69a0cd05f2a0c88e6df83ce13615/img-two.png)

2. O conteúdo disponível é o ativo vigente. Edite os campos com os novos valores ou clique em `Versões` para editar as configurações de outros conteúdos.
3. Salve suas alterações.

  <div class = "alert alert-warning">
Os conteúdos derivados do Store Theme não podem ter sua visibilidade atualizada por você por meio do Site Editor. Independentemente de suas ações, eles são sempre exibidos por <i>template</i> e não por URL. Os conteúdos criados manualmente no Site Editor, por sua vez, podem ter sua visibilidade alterada para URL ou <i>template</i>, de acordo com a sua necessidade.
</div>

## Excluindo e redefinindo conteúdo

1. Selecione o bloco desejado cujo conteúdo será excluído ou redefinido. Você pode selecioná-lo usando a lista no canto direito ou através da interface:

![seta-interface-pt](https://images.ctfassets.net/alneenqid6w5/5Jy42Ht1E66ETZf4Beiv85/533c69a0cd05f2a0c88e6df83ce13615/img-two.png)

2. Clique em `Versões` no canto superior direito.
3. Clique no menu kebab do conteúdo desejado (três pontos).
4. Clique em `Excluir` ou` Redefinir` e confirme sua ação.

<div class = "alert alert-warning">
As ações <code>Excluir</code> e <code>Redefinir</code> dependem do tipo de conteúdo. O conteúdo nativo, ou seja, o conteúdo criado diretamente no código, não pode ser excluído pelo admin, apenas <i>resetado</i> (caso tenha sido sobrescrito). Você só pode excluir o conteúdo que criou manualmente pelo Site Editor.
</div>

## Configurando conteúdo ativo e inativo

Cada configuração realizada no Site Editor sobrescreve aquela definida por meio do aplicativo Store Theme.

Na prática, isso significa que o conteúdo recém-criado ou atualizado por meio do módulo do admin é majoritariamente classificado automaticamente como ativo, a depender se alguma data de início ou fim foi predefinida.

Observe que ao clicar no menu kebab de um determinado conteúdo (três pontos), a única ação disponível é excluí-lo ou redefini-lo - não há botão para a sua ativação.

O caminho para definir qual conteúdo deve estar ativo e inativo é excluir ou redefinir o conteúdo ativo vigente para permitir que o primeiro da fila dos inativos seja, então, ativado.

<div class = "alert alert-info">
A fila para conteúdos inativos começa do conteúdo mais recente ao mais antigo. Lembre-se de que os conteúdos criados por meio do Site Editor <i>sempre</i> prevalecem sobre o que foi definido no código.
</div>

