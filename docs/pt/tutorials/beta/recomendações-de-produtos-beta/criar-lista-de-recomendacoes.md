---
title: 'Criar lista de recomendações (Beta)'
createdAt: 2026-03-17T13:01:10.919Z
updatedAt: 2026-03-17T13:01:10.919Z
publishedAt: 2026-03-17T13:01:10.919Z
contentType: tutorial
productTeam: Marketing & Merchandising
slugEN: creating-recommendations-list
locale: pt
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](http:///pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

A criação de listas de recomendações permite definir diferentes estratégias para exibir produtos relevantes aos consumidores. Cada lista utiliza uma estratégia de recomendação e é exibida em uma posição específica na loja.

Este guia descreve como criar uma nova lista de recomendações pelo Admin VTEX.

> ⚠️ Não recomendamos reutilizar a mesma lista em múltiplas posições no frontend. Crie uma lista para cada posição para acompanhar as métricas de desempenho de forma separada e com mais granularidade.

## Requisito

Ter a funcionalidade de [Recomendações de produtos](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta) habilitada na loja.

## Criar lista de recomendações

Para criar uma lista de recomendações no Admin VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Recomendações** ou digite **Recomendações** na barra de busca no topo da página.

2. Clique no botão `+ Lista`.

   ![criar-lista-de-recomendacoes-gif](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/criar-lista-de-recomendacoes_1.gif)

3. No painel, clique na estratégia da sua lista de recomendações:

   * **Recomendado para você:** Produtos que correspondem ao comportamento e preferências do comprador.
   * **Produtos similares:** Alternativas com propósito ou atributos similares.
   * **Vistos recentemente:** Produtos com os quais o comprador interagiu recentemente.
   * **Mais populares:** Produtos com o maior número de visualizações de página.
   * **Comprados juntos:** Frequentemente comprados junto com o produto visualizado atualmente.
   * **Coleção manual:** Grupo de produtos personalizado curado pelo comerciante.
   * **Produtos visualmente similares:** Produtos visualmente semelhantes a um produto específico.

   > ℹ️ Saiba mais sobre as estratégias disponíveis em [Recomendações de produtos](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta). 

4. Preencha as informações no formulário de criação de lista:

   * **Estratégia:** estratégia de recomendação selecionada no passo anterior. Se for necessário alterá-la, clique no ícone de lápis.
   * **Nome:** nome que deseja dar à lista de recomendações. Este será o título da lista exibido na loja. Recomendamos que utilize o título que a lista vai ter no front da loja (por exemplo: "Para você").
   * **Tags (opcional):** rótulos internos que agrupam listas de recomendação para facilitar a análise de métricas. Recomendamos que inclua a página em que a lista vai ser usada como Tag (por exemplo: Home). Digite a tag desejada e pressione `Enter` ou tecle `,` (vírgula) para adicioná-la. Você pode adicionar múltiplas tags.

   ![criar-lista-de-recomendacoes-2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/criar-lista-de-recomendacoes_2.png)

5. Após preencher todas as informações, clique no botão `Criar` para salvar a lista de recomendações.

   A mensagem de confirmação *Lista criada com sucesso* será exibida. A partir desse momento, a lista estará disponível para implementação no storefront.

   ![criar-lista-de-recomendacoes-3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/criar-lista-de-recomendacoes_3.png)

## Copiar ID da lista

Após criar a lista, você precisará do ID da lista para implementá-la no storefront da sua loja. Para copiar o identificador da lista:

* Na tela de confirmação **Lista criada com sucesso**, clique no botão `Copiar ID`. O ID será copiado para a área de transferência do seu sistema.
* Você também pode copiar o ID posteriormente através do [Dashboard de recomendações](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes):  

  1. Acesse **Storefront > Recomendações**.
  2. Localize a lista desejada na tabela de prateleiras.
  3. Clique no menu ⋮ na linha da prateleira.
  4. Selecione **Copiar ID**.

## Implementar a lista no storefront

Utilize o [ID copiado](#copiar-id-da-lista) para adicionar a prateleira de recomendações nas páginas da sua loja.

* Para Store Framework, consulte a documentação do componente [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf).
* Para FastStore, consulte o guia [Implementing product recommendations in Faststore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore).
* Para lojas headless, consulte o guia [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores).

## Acompanhar o desempenho

Acesse o [Dashboard de recomendações](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes) para analisar métricas de conversão, taxa de cliques e receita gerada pela lista criada.

## Saiba mais

* [Recomendações de produtos (Beta)](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta)
* [Dashboard de recomendações (Beta)](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes)
* [Recommendation Shelf (Store Framework)](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf)
* [Implementing product recommendations in Faststore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore)
* [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores)
