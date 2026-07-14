---
title: 'Criar coleção de produtos'
id: tutorials_244
status: PUBLISHED
createdAt: 2017-04-27T22:12:33.797Z
updatedAt: 2026-07-14T00:00:00.000Z
publishedAt: 2025-06-12T16:31:03.217Z
firstPublishedAt: 2017-04-27T23:03:10.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-a-product-collection
legacySlug: criando-colecao-de-produtos
locale: pt
subcategoryId: 3aExYJkji3NIu9Ks8bxbWx
---

>⚠️ Existem duas formas de configurar coleções, por meio do CMS Portal (Legado) ou utilizando o módulo de [Coleções Beta](/pt/docs/tutorials/cadastrar-colecoes-beta). Este artigo trata da configuração de coleções no CMS Portal (Legado).

Uma coleção de produtos permite agrupar itens do catálogo com base em critérios como departamento, categoria, marca, período de lançamento ou SKUs específicos, formando vitrines temáticas para campanhas, datas comemorativas ou curadorias específicas da loja. Esse agrupamento facilita a organização e a exibição de produtos relacionados, melhorando a navegação e a experiência de compra dos clientes.

Neste tutorial, você aprenderá a:

- Criar uma coleção de produtos.
- Configurar uma URL amigável para acessá-la.
- Incluir grupos de produtos por departamento, categoria, marca, período de lançamento ou por SKUs específicos.

## Antes de começar

Para criar e editar coleções no CMS Portal (Legado), sua conta de acesso precisa ter permissão para o módulo **Storefront > Layout** no Admin VTEX. Caso não consiga acessar essa área, peça ao administrador da loja que libere essa permissão no seu perfil no [License Manager](/pt/docs/tutorials/recursos-do-license-manager).

## Instruções

### Criar uma coleção

Para criar uma coleção, siga as instruções abaixo:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Clique em **CMS**.
3. Clique na pasta **Product Clusters (Collections)**.
4. Clique em `new collection`.
	![Layout 4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_1.png)
5. Preencha as informações necessárias:
	- **Product Cluster Id:** código de identificação da coleção. Este campo não deve ser preenchido, pois é gerado automaticamente pelo sistema ao salvar.
	- **Name:** nome da coleção.
	- **Highlight:** define se a coleção terá destaque.
	- **Searchable:** define se a coleção será indexada para busca na loja.
	- **From/To:** define as datas de validade da coleção.
6. Clique em `Save Product Cluster` para salvar a coleção.

### Criar uma URL amigável para a coleção

Por padrão, o link de acesso a uma coleção segue o formato `https://{loja}.com.br/busca?fq=H:{ID-da-coleção}`. Para usar uma URL mais amigável (por exemplo, `https://{loja}.com.br/todos-os-produtos`), marque a coleção como buscável e associe-a a uma pasta do CMS com Contexto de Busca configurado:

1. Torne a coleção encontrável na busca, marcando a flag **Searchable** no cadastro da coleção. Saiba mais em [Tornar coleção de produtos encontrável pela busca](/pt/docs/tutorials/tornar-colecao-de-produtos-encontravel-pela-busca).
2. Crie uma pasta com uma URL personalizada. Consulte as instruções no tutorial [Como criar landing pages com URLs customizadas](/pt/docs/tutorials/como-criar-landing-pages-com-urls-customizadas).

### Incluir grupos na coleção

A composição dos produtos de uma coleção é definida pelos **grupos**. Para incluir grupos em uma coleção, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront > Layout > CMS > Product Clusters (Collections)**.
2. Clique na coleção desejada. Se sua loja tiver mais de 20 coleções cadastradas, use o campo de pesquisa da pasta para localizar a coleção pelo nome.
   
	![Pesquisar_cole__o](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_9.gif)

3. Clique em `new group`.
   
	![Layout 5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_2.png)

4. No campo **Group Name**, dê um nome ao grupo.
5. No campo **Group Type**, defina o tipo do grupo, isto é, se é `Inclusive` (Inclusão) ou `Exclusive` (Exclusão):

	- `Inclusive` (Inclusão): soma os produtos do grupo à coleção.
	- `Exclusive` (Exclusão): remove os produtos do grupo da coleção.

	O primeiro grupo criado em qualquer coleção deve ser obrigatoriamente do tipo **Inclusão**. Quando uma coleção tem múltiplos grupos, o resultado final é calculado da seguinte maneira:
	
	```txt
	Produtos da coleção = (soma dos grupos de inclusão) - (soma dos grupos de exclusão)
	```

	>⚠️ Preste sempre atenção ao tipo de grupo selecionado no cadastro. Produtos adicionados a um grupo do tipo `Exclusive` (Exclusão) **não** são incluídos na coleção. Pelo contrário, são removidos dela caso também pertençam a algum grupo de inclusão. Esse é um dos erros mais comuns ao configurar coleções com múltiplos grupos.

7. Defina quais produtos farão parte do grupo. Você pode definir a composição do grupo com base nos seguintes critérios, que podem ser combinados para atingir o resultado esperado:

	- Departamento, categoria ou subcategoria
	- Marca
	- Período de lançamento (pré-venda ou lançamento recente)
	- SKUs específicos (manualmente ou por importação de planilha)

	>⚠️ Ao combinar mais de um critério no mesmo grupo, apenas os produtos que atendem a **todos** os critérios selecionados (interseção) farão parte do grupo. Por exemplo, se você selecionar a categoria AA e a marca BB, apenas os produtos dessa categoria **e** dessa marca estarão no grupo. Produtos da categoria AA de outras marcas ou da marca BB de outras categorias ficam de fora.

8. Clique em `Save Group` para salvar a configuração do grupo.

#### Departamento, categoria ou subcategoria

Para adicionar todos os produtos de um **departamento, categoria ou subcategoria** a um grupo, selecione o departamento, categoria ou subcategoria na coluna **Categories**

![Filtro_por_categoria](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_3.jpg)

#### Marca

Para adicionar os produtos de **uma ou mais marcas** a um grupo, selecione-as na coluna **Brands**. As marcas encontram-se dispostas em ordem alfabética. Ao clicar na letra correspondente à inicial da marca, a lista se expande e exibe as marcas existentes.

![FIltro_por_marca](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_4.jpg)

#### Período de lançamento (pré-venda ou lançamento)

Em **Other options**, selecione uma das opções abaixo. Não é possível selecionar as duas opções no mesmo grupo. Se quiser contemplar ambos os cenários, crie dois grupos separados.

- **Pre-sales:** inclui produtos com data posterior à atual no campo **Data de lançamento no mercado** do cadastro de produto.
- **Lauches:** inclui produtos com **Data de lançamento no mercado** nos últimos 30 dias.

>⚠️ As opções **Pre-sales** (pré-vendas) e **Launches** (Lançamentos) só funcionam como complemento a uma seleção de categoria, marca ou SKUs já feita no mesmo grupo. Sozinhas, elas não retornam produtos.

#### SKUs específicos

Você pode adicionar SKUs específicos a um grupo manualmente, usando o campo **Find SKUs**, ou em massa por meio de uma planilha.

Para adicionar manualmente SKUs específicos a um grupo, no campo **Find SKUs**, digite os IDs de um ou mais SKUs, separando-os por vírgula (por exemplo, `2000004,2000009,2000005`).

>ℹ️ O campo de inclusão de IDs não permite a digitação de caracteres alfanuméricos nem o uso das combinações de teclas `Control + C` e `Control + V`.

![Inclusão manual de SKUs específicos em um grupo.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_5.gif)

Para adicionar massivamente SKUs específicos a um grupo, você pode importar uma lista de SKUS usando uma planilha do Excel (`.xls`). Todos os IDs dos SKUs que você deseja incluir no grupo devem constar na primeira coluna da planilha, com o cabeçalho `SKU`.

1. Clique no botão `Localizar` abaixo de **Bulk insert SKUs** para localizar a planilha no seu computador.
2. Clique em `import skus` para importar os SKUs.
 
![2017-03-08_170117](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_6.jpg)

Depois de importada, a planilha é exibida da seguinte forma:

![Importar_lista_de_skus](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_7.gif)

SKUs inativos não terão seus IDs importados, mesmo que estejam incluídos na planilha.

Ao associar um SKU a um grupo, seja manualmente ou em massa, o produto correspondente também é adicionado à coleção. Caso esse produto tenha mais de um SKU, todos os demais SKUs associados a ele são incluídos automaticamente. Quando a listagem ultrapassar 10 SKUs, um controle de paginação fica disponível. Para remover um SKU da lista, clique no botão vermelho ao lado dele.

>ℹ️ Baixe o [modelo de planilha](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tutorials/catálogo/coleções/Colecao.xls) para inclusão em massa de SKUs.

#### Excluir múltiplos SKUs de um grupo

Para evitar a exclusão manual de SKUs um a um, você pode usar o mesmo recurso de importação de planilha usado para [criar grupos com SKUs específicos](#skus-especificos).

1. Clique no botão `Localizar`abaixo de **Bulk exclude SKUs** para localizar a planilha no seu computador.
2. Clique em `remove skus` para excluir os SKUs.

![Exclusão de uma lista de SKUs de um grupo por meio de planilha.](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_8.gif)

>ℹ️ Você pode utilizar o mesmo [modelo de planilha](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tutorials/catálogo/coleções/Colecao.xls) usado para inclusão em massa de SKUs.
