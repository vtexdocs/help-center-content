---
title: 'Sinônimos Inteligentes'
id: 1rR47Kk96UgFYwh8dkDG7i
status: PUBLISHED
createdAt: 2024-06-17T13:41:39.402Z
updatedAt: 2024-06-17T13:42:26.751Z
publishedAt: 2024-06-17T13:42:26.751Z
firstPublishedAt: 2024-06-17T13:42:26.751Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: intelligent-synonyms
locale: pt
legacySlug: sinonimos-inteligentes
subcategoryId: BBzMtJan1UTxC9QZODnlN
---

>ℹ️ Esta funcionalidade está  disponível para contas que tenham um número mínimo de sessões e pedidos para que o modelo de Inteligência Artificial seja treinado. Caso tenha interesse em implementá-la, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests). É possível que taxas extras se apliquem futuramente.

A funcionalidade de [Sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV) do [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG) permite cadastrar palavras, ou expressões de mesmo sentido, para termos de busca utilizados pelos clientes ao realizar pesquisas na sua loja, aumentando a chance deles obterem resultados relevantes nas buscas.

Com a funcionalidade de Sinônimos Inteligentes, a página de **Sinônimos** no Admin VTEX apresenta recomendações inteligentes de termos para cadastro, além da configuração manual de sinônimos. A plataforma sugere sinônimos a partir de Inteligência Artificial, com base no comportamento de busca de clientes na sua loja.

Para isso, o VTEX Intelligent Search contabiliza quantas vezes nos últimos 30 dias os clientes pesquisaram por um termo que resultou em poucos ou nenhum resultado de busca e substituíram o termo original por outro. 

Por exemplo, imagine que cinco clientes escreveram `sabonete rosto` e, em seguida, alteraram a pesquisa para `sabão rosto`. O sistema registra esse comportamento e os termos mais reescritos vão aparecer como sugestão de sinônimos.

As sugestões são exibidas em duas categorias na listagem de sinônimos, conforme a ilustração abaixo:

* **Novas sugestões:** sugestões geradas pela plataforma que ainda não foram visualizadas.
* **Sugestões salvas:** sugestões salvas para depois, como descrito no passo 5 da seção [Revisar sugestões](#revisar-sugestoes).

![synonym-suggestion-list-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Intelligent Search/Synonyms/sinonimos-inteligentes_1.png)

Você pode revisar as sugestões geradas e optar por salvar para depois, recusar, editar ou aprovar. Confira o passo a passo na seção a seguir.

## Revisar sugestões

Siga as instruções para visualizar as sugestões de sinônimos e definir se elas serão recusadas, editadas ou aprovadas:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Em **Intelligent Search**, clique em **Sinônimos**.
3. Ao acessar a página de **Sinônimos**, se existirem sugestões ainda não revisadas, um modal vai surgir, indicando a quantidade de sugestões geradas. Nesse caso, clique em `Revisar` para analisá-las.

    Se optar por clicar em `Agora não`, essas sugestões são mantidas na caixa **Novas sugestões**, indicando a quantidade de sugestões geradas. Para revisá-las, clique em `Revisar`.

4. Você verá um modal com a primeira sugestão de sinônimo. Cada sugestão indica o termo buscado e o termo que será adicionado como sinônimo, bem como a quantidade de vezes em que clientes da sua loja reescreveram o termo original para o segundo termo nos últimos 30 dias.

   ![synonym-suggestion-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Intelligent Search/Synonyms/sinonimos-inteligentes_2.png)

5. Para revisar cada sugestão, escolha uma das ações a seguir:

    * <i class="fas fa-bookmark"></i> **Salvar para depois:** remove a sugestão da contagem de **Novas sugestões** e passa a armazená-la na caixa **Sugestões salvas**. Para analisar as sugestões salvas posteriormente, clique em `Revisar`.
    * <i class="fas fa-times-circle"></i> **Recusar**: descarta a sugestão proposta.
    * <i class="fas fa-pencil-alt"></i> **Editar**: altera campos da configuração dos sinônimos sugeridos. Depois de editar, é preciso clicar em <i class="fas fa-check-circle"></i> para salvar. Para mais informações sobre os campos disponíveis, leia [Configurar Sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL).
    * <i class="fas fa-check-circle"></i> **Aprovar**: aplica e salva a sugestão proposta.
6. Após revisar todas as sugestões, feche o modal para acessar a listagem de sinônimos configurados na sua loja.

<div class="alert alert-error">
  <p>Uma vez que uma ação é realizada, não é possível desfazê-la, pois a próxima sugestão disponível é exibida imediatamente.</p>
</div>

## Saiba mais

* [Sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV)
* [Configurar Sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3ExbC3QKNF4zH7Gs8jD1cL)
* [VTEX Intelligent Search](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/3qgT47zY08biLP3d5os3DG)
