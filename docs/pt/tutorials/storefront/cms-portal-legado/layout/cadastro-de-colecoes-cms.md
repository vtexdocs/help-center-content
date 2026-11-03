---
title: 'Cadastro de Coleções CMS'
id: 2YBy6P6X0NFRpkD2ZBxF6L
status: PUBLISHED
createdAt: 2020-11-25T22:05:53.169Z
updatedAt: 2026-10-20T15:45:00.000Z
publishedAt: 2023-04-19T18:38:40.730Z
firstPublishedAt: 2020-11-25T22:10:10.072Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: adding-collections-cms
legacySlug: cadastrar-colecoes
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

> ⚠️ Existem duas formas de configurar coleções: por meio do CMS Portal (Legado) ou utilizando o módulo de [Coleções Beta](/pt/docs/tutorials/cadastrar-colecoes-beta). Este artigo refere-se à configuração de coleções por meio do CMS Portal (Legado).

Para cadastrar uma nova coleção, siga os passos a seguir:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Dentro da pasta CMS, clique em **Product Clusters (Collections)**.
3. Clique em `New Collection`.
4. Preencha os campos do formulário de coleção. Para entender melhor o significado de cada campo, acesse nosso artigo sobre [como preencher campos de cadastro de coleção](/pt/docs/tutorials/preencher-campos-de-cadastro-de-colecao).
5. Clique em `Save Product Cluster`.

> ⚠️ Quando a quantidade de coleções criadas ultrapassar o limite de 20, as coleções excedentes podem ser encontradas na interface por meio do campo de pesquisa. A busca nesse campo deve ser feita com base no nome da coleção desejada.

A escolha dos produtos que vão compor uma coleção é feita por meio da criação de um **grupo**. Para isso, clique em `New Group` dentro da coleção desejada.

![Botão para criar um novo grupo dentro da coleção.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_1.png)

Antes de escolher quais produtos farão parte do grupo, é necessário atribuir um nome e especificar o tipo de grupo criado.

## Tipos de grupo

Existem apenas dois valores possíveis para o tipo de um grupo: `Inclusive` e `Exclusive`. Um grupo tipo `Inclusive` tem como objetivo incluir todos os produtos na coleção à qual ele está vinculado. Nesse mesmo sentido, um grupo tipo `Exclusive` exclui da coleção os seus produtos componentes.

Para exemplificar, suponha uma coleção Celulares com dois grupos: um tipo `Inclusive` `A` e outro `Exclusive` `B`. Os produtos componentes dessa coleção serão o resultado de produtos do grupo A *menos* produtos do grupo B.

Essa lógica serve para qualquer quantidade de grupos criados dentro de uma mesma coleção. Os produtos dos grupos tipo `Exclusive` sempre serão subtraídos dos produtos que compõem os grupos tipo `Inclusive`. Dessa forma:

`Produtos componentes de uma coleção = (A+B) - (C+D)`

Sendo:

- A e B grupos tipo `Inclusive`
- C e D grupos tipo `Exclusive`

Por isso, o primeiro grupo criado para qualquer coleção deve ser obrigatoriamente do tipo `Inclusive`.

> ⚠️ Atenção ao tipo de grupo definido no cadastro. Ao incluir produtos em um grupo tipo `Exclusive`, por exemplo, eles **não** serão incluídos na coleção por conta da natureza do seu grupo.

## Seleção de produtos

Dentro de um grupo, a seleção dos produtos pode ser feita com base em:

- Departamento, categoria ou subcategoria
- Marca
- SKU
- Data de lançamento no mercado

Entre as opções anteriores, é possível selecionar mais de uma para alcançar um cenário específico desejado. Nesses casos, **apenas os produtos que se enquadram na interseção das opções selecionadas serão incluídos no grupo**.

Por exemplo: ao selecionar a categoria `A` e a marca `B`, apenas os produtos que forem dessa categoria e marca ao mesmo tempo serão incluídos no grupo. Os produtos da categoria `A` de marcas diferentes de `B`, por exemplo, não estarão na coleção, assim como os produtos da marca `B` de outras categorias.

## Produtos por departamento, categoria ou subcategoria

Para adicionar todos os produtos de um determinado departamento a um grupo, selecione o departamento desejado e também as categorias e subcategorias vinculadas a ele, pois a seleção do departamento **não** marca as demais automaticamente. Em seguida, clique em `Save Group`, como mostra a imagem a seguir.

![Seleção de departamento, categorias e subcategorias em uma coleção do CMS.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_2.png)

Cada nível é selecionado de forma independente. Por isso, para incluir os produtos de uma determinada categoria, selecione também as subcategorias vinculadas a ela. Se quiser incluir apenas os produtos de uma subcategoria específica, selecione somente essa subcategoria.

![Seleção de categoria e subcategoria em uma coleção do CMS.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_3.png)

## Produtos por marca

Para criar um grupo com produtos de uma ou mais marcas, selecione a marca desejada na lista correspondente.

![Seleção de marcas em uma coleção do CMS.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_4.png)

As marcas encontram-se dispostas em ordem alfabética. Ao clicar na letra correspondente à inicial da marca desejada, a lista se expande e exibe as marcas existentes.

## Produtos por SKU

### Manualmente

Ao adicionar um SKU a um grupo, o produto ao qual ele está vinculado também será adicionado. Em um cenário em que um produto tenha mais de um SKU atribuído a ele, a adição de um único SKU fará com que todos os outros também sejam adicionados ao grupo.

![Inclusão manual de SKUs em um grupo da coleção.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_5.png)

No campo **Find SKUs**, é possível digitar o ID de quantos SKUs forem desejados, separando os valores por vírgula. Por exemplo: `2000004,2000009,2000005`.

Para excluir um SKU da lista, clique no botão vermelho ao lado dele.

> ℹ️ Quando o número de SKUs na lista ultrapassar 10 itens, um controle de paginação ficará disponível.

### Por planilha

> ℹ️ Baixe o [modelo de planilha](https://cdn.statically.io/gh/vtexdocs/help-center-content@main/docs/pt/tutorials/storefront/cms-portal-legado/layout/Colecao.xls) para a inclusão e exclusão de SKUs da coleção.

#### Inclusão massiva

No campo **Bulk Insert SKUs**, é possível inserir por planilha (formato `.xls`) uma lista de SKUs que farão parte do grupo.

![Campo Bulk Insert SKUs para importar uma planilha de SKUs.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_6.png)

Na planilha, todos os IDs dos SKUs devem estar dispostos na primeira coluna, com o cabeçalho, como exemplifica a figura a seguir:

![Exemplo de planilha com IDs de SKUs na primeira coluna.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_7.png)

Depois de selecionar a planilha desejada, clique em `Import skus` para enviar as informações.

![Botão para importar a planilha de SKUs.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_8.png)

#### Exclusão massiva

Para evitar a exclusão manual de um SKU por vez, também é possível usar o recurso de importação de planilha para a exclusão massiva.

![Exclusão de SKUs de um grupo por meio de planilha.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_9.png)

Nesse caso, os SKUs listados na planilha importada serão excluídos do grupo. Para isso, clique em `excluir skus` depois que o arquivo for carregado.

> ⚠️ Os SKUs inativos não terão seus IDs considerados para inclusão ou exclusão, mesmo que estejam listados na planilha.

## Produtos por data de lançamento no mercado

> ⚠️ Na seção **Other options**, as opções **Pre-sales** e **Launches** são um complemento à escolha dos produtos por categorias, marcas ou SKUs. Isso significa que essas flags só funcionam se você já tiver selecionado categorias, marcas ou SKUs no mesmo grupo.

É possível selecionar apenas uma das duas opções. Caso queira que ambos os cenários sejam contemplados, crie dois grupos e configure cada um deles com a respectiva opção.

![Seleção das opções Pre-sales e Launches em Other options.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/storefront/cms-portal-legado/layout/cadastro-de-colecoes-cms_10.png)

### Pre-sales

Para criar uma coleção de produtos que ainda não foram lançados na sua loja, selecione a opção **Pre-sales**. O sistema considerará todos os produtos com a data de lançamento posterior à data atual, conforme definido no campo **Data de lançamento no mercado** no cadastro de produto.

### Launches

A opção **Launches** permite criar uma coleção de produtos recentemente lançados. Ao selecionar essa opção, o sistema considerará todos os produtos lançados dentro do intervalo de 30 dias anteriores à data atual. A data de lançamento considerada é também aquela definida no campo **Data de lançamento no mercado** no cadastro do produto.

> ℹ️ Para saber como excluir uma coleção de produtos, acesse o artigo [Como deletar coleção](/pt/docs/tutorials/como-deletar-colecao).
