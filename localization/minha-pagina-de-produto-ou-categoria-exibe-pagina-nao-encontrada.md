---
title: "Minha página de produto ou categoria exibe 'Página não encontrada'"
id: EDU-12986
status: RASCUNHO
createdAt: 2026-03-13T00:00:00.000Z
updatedAt: 2026-03-13T00:00:00.000Z
publishedAt:
firstPublishedAt:
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: my-product-or-category-page-shows-page-not-found
locale: pt
subcategoryId:
domainFilters:
  - Catálogo
  - Storefront
  - Intelligent Search
symptomFilters:
  - Erro de carregamento
  - Configuração incorreta
---

Palavras-chave: Erro de carregamento | Problema de sincronização

Minha página de produto, categoria ou subcategoria retorna `404` ou indica que não existe (mensagem **PÁGINA NÃO ENCONTRADA**). Isso pode acontecer após atualizações no catálogo, como alterações no conteúdo do produto ou em imagens, slugs, hierarquia de categoria e publicação do workspace.

Em alguns casos, o problema pode parecer estar relacionado à renderização ou à visibilidade do produto. No entanto, o sintoma no storefront permanece o mesmo: a rota não é executada corretamente. Dependendo da causa raiz, a correção pode exigir ação sua, da VTEX, ou de ambas as partes.

As causas mais comuns para esse comportamento são:

- [A URL ou o slug mudou](#verifique-a-url-e-o-slug)
- [O produto ou a categoria não está disponível no storefront](#confirme-a-disponibilidade-no-storefront)
- [O produto ou a categoria não foi indexado corretamente](#reindexe-o-item-afetado)
- [A rota não foi atualizada no rewriter](#atualize-a-geracao-de-rotas)
- [A hierarquia da categoria ou o caminho da trilha de navegação está incorreto](#revise-a-hierarquia-da-categoria-e-o-caminho-da-trilha-de-navegacao)
- [As alterações do workspace não foram publicadas](#publique-as-alteracoes-do-workspace)

## Soluções

### Verifique a URL e o slug

1. No Admin VTEX, acesse **Catálogo**, ou digite **Catálogo** na barra de busca no topo da página.
2. Clique em **Produtos e SKUs** ou **Categorias** para acessar o produto ou a categoria afetada.
3. Confirme se os slugs das URLs atuais do [produto](https://help.vtex.com/pt/docs/tutorials/adicionar-ou-editar-produto) ou da [categoria](https://help.vtex.com/pt/docs/tutorials/cadastrar-uma-categoria) estão corretos.
4. Verifique se a URL no storefront corresponde exatamente ao slug atual.
5. Se o slug mudou recentemente, teste a nova URL.
6. Se links internos ou externos ainda apontarem para a URL antiga, crie um redirecionamento do caminho antigo para o atual, seguindo as instruções em [Gerenciando redirecionamentos de URL](https://help.vtex.com/pt/docs/tutorials/gerenciando-redirecionamentos-de-url).

Após realizar essas verificações, abra novamente a URL atual e confirme se a página não retorna mais `404`.

### Confirme a disponibilidade no storefront

1. No Admin VTEX, acesse **Catálogo** ou digite **Catálogo** na barra de busca no topo da página.
2. Clique em **Produtos e SKUs** ou **Categorias** para acessar o produto ou a categoria afetada.
3. Confirme se o produto ou a categoria está ativo e configurado para ser exibido na loja. Para produtos, pelo menos um SKU precisa estar ativo.
4. Verifique se o produto tem preço válido e se o estoque está disponível para o [canal de vendas (política comercial)](https://help.vtex.com/pt/docs/tutorials/como-funciona-uma-politica-comercial) usado pela loja.
5. Se sua operação exibe produtos indisponíveis, certifique-se de que a configuração de exibição correspondente está ativada conforme os critérios de [disponibilidade](https://help.vtex.com/pt/docs/tutorials/disponibilidade).
6. Confirme que o item está associado à marca, categoria e estrutura comercial esperadas.

Após validar essas configurações, teste novamente o storefront para confirmar que o produto ou a categoria está disponível e que não se comporta mais como uma página inexistente.

### Reindexe o item afetado

1. No Admin VTEX, inicie a [reindexação](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site) do produto ou da categoria afetada.

> ⚠️ Se várias páginas relacionadas estiverem com erro, talvez seja necessário realizar uma reindexação completa do catálogo.

2. Aguarde o processo de indexação finalizar e acompanhe o status em [Histórico de indexação](https://help.vtex.com/pt/docs/tutorials/historico-da-indexacao). Se necessário, verifique também o [log de reindexação do catálogo](https://help.vtex.com/pt/docs/tutorials/como-ver-o-log-de-reindexacoes-do-catalogo).
3. Teste novamente a URL afetada em uma janela anônima do navegador.

Uma vez finalizado o processo de indexação, teste novamente a URL afetada e confirme se a página voltou a se comportar normalmente.

### Atualize a geração de rotas

1. Verifique se a rota esperada consta na [configuração do rewriter](https://help.vtex.com/troubleshooting/i-cant-view-the-product-in-the-search-results).
2. Confirme se a rota aponta para o caminho correto de produto, categoria ou subcategoria.
3. Se a rota estiver desatualizada ou inconsistente, atualize a geração de rotas conforme seu procedimento interno.
4. Se sua equipe usa versionamento de rotas, incremente a versão da rota e aguarde o storefront reconstruir as rotas.
5. Teste novamente a URL afetada.

Após atualizar a rota, teste novamente a URL para confirmar se o storefront reconstruiu o caminho corretamente.

### Revise a hierarquia da categoria e o caminho da trilha de navegação

1. No Admin VTEX, abra a [árvore de categorias](https://help.vtex.com/pt/docs/tutorials/inativar-e-reorganizar-categorias).
2. Confirme se a subcategoria afetada está associada à categoria pai esperada.
3. Verifique se o caminho da trilha de navegação no storefront corresponde a essa hierarquia.
4. Compare a subcategoria com erro com outra subcategoria sob a mesma categoria pai que funcione corretamente.
5. Se a trilha de navegação apontar para um caminho desatualizado ou incorreto, corrija a estrutura da categoria e reindexe as categorias afetadas.

Após corrigir a estrutura da categoria, teste novamente a trilha de navegação e os links das subcategorias e confirme se eles abrem páginas válidas.

### Publique as alterações do workspace

1. Confirme onde a alteração foi aplicada no [workspace](https://developers.vtex.com/docs/guides/vtex-io-documentation-workspace).
2. Valide a rota corrigida no workspace.
3. Publique ou promova as alterações do workspace conforme o seu processo de lançamento.
4. Teste a página na loja em produção e confirme se ela está usando a rota atualizada.

Se a página ainda retornar `404` após seguir todos os passos acima, entre em contato com o Suporte VTEX seguindo as instruções em [Abrir chamados para o Suporte VTEX](https://help.vtex.com/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).
