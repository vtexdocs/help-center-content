---
title: 'Criar lista de recomendações (Beta)'
id: 
status: DRAFT
createdAt: 2026-03-02T00:00:00.000Z
updatedAt: 2026-03-02T00:00:00.000Z
publishedAt: 
firstPublishedAt: 
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: create-recommendation-list
legacySlug: criar-lista-de-recomendacoes
locale: pt
subcategoryId: 6WyZwZfn89IsnNFNkTAi8d
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](/pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

A criação de listas de recomendações permite agrupar estratégias de recomendação personalizadas para exibir produtos relevantes aos consumidores da sua loja. Cada lista utiliza uma estratégia específica e pode ser implementada em diferentes contextos da sua loja.

Este guia descreve como criar uma nova lista de recomendações pelo Admin VTEX.

## Requisitos

* Ter a funcionalidade de [Recomendações de produtos](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta) habilitada na loja.

## Criar lista de recomendações

Para criar uma lista de recomendações no Admin VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Recomendações** ou digite **Recomendações** na barra de busca no topo da página.

2. Clique no botão `Criar Lista`.

![criar-lista](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/criar-lista-de-recomendacoes_1.png)

3. Na tela **Criar Lista**, preencha as informações da sua lista de recomendações:

   ![formulario-criar-lista](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/criar-lista-de-recomendacoes_2.png)

   * **Estratégia:** Selecione a estratégia de recomendação desejada. Para visualizar todas as opções disponíveis, clique no ícone de edição <i class="fas fa-pencil-alt"></i>. As estratégias disponíveis são:
     * **Recomendado para você:** Produtos que correspondem ao comportamento e preferências do comprador.
     * **Produtos similares:** Alternativas com propósito ou atributos similares.
     * **Vistos recentemente:** Produtos com os quais o comprador interagiu recentemente.
     * **Mais populares:** Produtos com o maior número de visualizações de página.
     * **Comprados juntos:** Frequentemente comprados junto com o produto visualizado atualmente.
     * **Coleção manual:** Grupo de produtos personalizado curado pelo comerciante.

   * **Nome:** Digite o nome que deseja dar à lista de recomendações. Este será o título da lista exibido na loja.

     > ⚠️ O campo **Nome** é obrigatório e deve conter o título da lista que será exibido na loja.

   * **Tags (opcional):** Adicione rótulos internos que agrupam listas de recomendação para facilitar a análise de métricas. Digite a tag desejada e pressione `Enter` ou clique em vírgula para adicioná-la. Você pode adicionar múltiplas tags.

4. Após preencher todas as informações, clique no botão `Criar` para salvar a lista de recomendações.

![lista-criada](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/criar-lista-de-recomendacoes_3.png)

Uma mensagem de confirmação **Lista criada com sucesso** será exibida. A partir desse momento, a lista estará disponível para implementação no storefront.

## Copiar ID da lista

Após criar a lista, você precisará do ID da lista para implementá-la no storefront da sua loja. Para copiar o identificador da lista:

1. Na tela de confirmação **Lista criada com sucesso**, clique no botão `Copiar ID`.

   O ID será copiado para a área de transferência do seu sistema.

2. Você também pode copiar o ID posteriormente através do [Dashboard de recomendações](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes):
   * Acesse **Storefront > Recomendações**.
   * Localize a lista desejada na tabela de prateleiras.
   * Clique no menu ⋮ na linha da prateleira.
   * Selecione **Copiar ID**.

## Próximos passos

Após criar e copiar o ID da lista de recomendações, você pode:

* **Implementar a lista no storefront:** Utilize o ID copiado para adicionar a prateleira de recomendações nas páginas da sua loja.
  * Para Store Framework, consulte a documentação do componente [Recommendation Shelf](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf).
  * Para FastStore, consulte o guia [Implementing product recommendations in Faststore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore).
  * Para lojas headless, consulte o guia [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores).

* **Acompanhar o desempenho:** Utilize o [Dashboard de recomendações](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes) para analisar métricas de conversão, taxa de cliques e receita gerada pela lista criada.

## Saiba mais

* [Recomendações de produtos (Beta)](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta)
* [Dashboard de recomendações (Beta)](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes)
* [Recommendation Shelf (Store Framework)](https://developers.vtex.com/docs/apps/vtex.recommendation-shelf)
* [Implementing product recommendations in Faststore](https://developers.vtex.com/docs/guides/implementing-product-recommendations-in-faststore)
* [Integrating product recommendations in headless stores (Beta)](https://developers.vtex.com/docs/guides/integrating-product-recommendations-in-headless-stores)
