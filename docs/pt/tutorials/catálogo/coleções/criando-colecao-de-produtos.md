---
title: 'Criar coleção de produtos'
id: tutorials_244
status: PUBLISHED
createdAt: 2017-04-27T22:12:33.797Z
updatedAt: 2026-07-13T00:00:00.000Z
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

>⚠️ Existem duas formas de configurar coleções, por meio do CMS Portal (Legado) ou utilizando o módulo de [Coleções Beta](/pt/docs/tutorials/cadastrar-colecoes-beta). Este artigo refere-se à [configuração de coleções por meio do CMS Portal (Legado)](/pt/docs/tutorials/cadastro-de-colecoes-cms).

Para criar uma coleção, siga as instruções abaixo:

1. No Admin VTEX, acesse **Storefront**.
2. Clique em **Layout**.
3. Clique na pasta **Product Clusters (Collections)**.
4. Clique no botão `new collection`, ilustrado a seguir.
	![Layout 4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_1.png)
5. Preencha as informações necessárias:
	- **Product Cluster Id:** código de identificação da coleção. Este campo não deve ser preenchido, pois é gerado automaticamente pelo sistema ao salvar.
	- **Name:** nome da coleção.
	- **Highlight:** define se a coleção terá destaque ou não.
	- **Searchable:** define se a coleção será indexada para busca na loja.
	- **From/To:** define as datas de validade da coleção.
6. Clique no botão `Save Product Cluster`.

Feito isso, sua coleção será salva. Agora, você precisa acrescentar os produtos que fazem parte dela, incluindo os grupos da coleção.

## Criar uma URL amigável para a coleção

Por padrão, o link de acesso a uma coleção segue o formato `https://{loja}.com.br/busca?fq=H:{ID-da-coleção}`. Para usar uma URL mais amigável (por exemplo, `https://{loja}.com.br/todos-os-produtos`), marque a coleção como buscável e associe-a a um folder do CMS com Contexto de Busca configurado:

1. Torne a coleção encontrável na busca, marcando a flag **Searchable** no cadastro da coleção. Saiba mais em [Tornar coleção de produtos encontrável pela busca](https://help.vtex.com/pt/docs/tutorials/tornar-colecao-de-produtos-encontravel-pela-busca).
2. Crie uma pasta com uma URL personalizada. Consulte as instruções no tutorial [Como criar landing pages com URLs customizadas](https://help.vtex.com/pt/docs/tutorials/como-criar-landing-pages-com-urls-customizadas).

## Incluir grupos na coleção

Você pode criar grupos a partir dos seguintes filtros, que podem ser combinados para atingir o objetivo esperado:

- Departamento, Categoria ou subcategoria
- Marca

Cada grupo pode ser de um dos seguintes tipos: **Inclusão** ou **Exclusão**. Para qualquer coleção, o primeiro grupo criado deve ser obrigatoriamente do tipo **Inclusão**.

### Criar grupos por departamento, categoria ou subcategoria

Para criar um grupo por departamento, categoria ou subcategoria, siga as instruções abaixo:

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`, conforme exemplificado na imagem a seguir.
	![Layout 5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_2.png)
3. Para adicionar todos os produtos de um determinado departamento a um grupo, selecione o departamento. O mesmo se aplica aos produtos de uma determinada categoria ou subcategoria.
	![Filtro_por_categoria](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_3.jpg)
4. Clique em `Salvar Grupo`.

### Criar grupo por marca

Para criar um grupo de produtos de uma ou mais marcas, siga as instruções abaixo.

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`.
3. Selecione uma ou mais marcas na lista correspondente. As marcas encontram-se dispostas em ordem alfabética. Ao clicar na letra correspondente à inicial da marca, a lista se expande e exibe as marcas existentes.
  ![FIltro_por_marca](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_4.jpg)

### Definir grupo por produtos em pré-venda ou em período de lançamento

Para criar uma coleção de produtos que ainda não foram lançados ou que foram lançados recentemente, siga o passo a passo:

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`.
3. Se desejar incluir produtos em pré-venda na coleção, selecione **Pré-venda** em **Outras Opções**. O sistema considerará todos os produtos com a data posterior ao dia atual, conforme definido no campo **Data de lançamento no mercado** no cadastro de produto.
4. Se desejar incluir produtos lançados recentemente, selecione a opção **Lançamento**. O sistema considerará todos os produtos com a data definida no campo **Data de lançamento no mercado** no cadastro de produto dentro do intervalo de 30 dias anteriores ao atual.

Não é possível selecionar os dois campos (**Pré-venda** e **Lançamento**) na mesma coleção. Caso queira que ambas os cenários sejam contemplados, crie duas coleções e configure cada uma com a respectiva opção.

>⚠️ Os campos **Pré-venda** e **Lançamento** só funcionam se você tiver selecionado alguma categoria, marca ou combinação de SKUs no grupo.

### Incluir SKUs específicos em um grupo

É possível fazer a inclusão manual de SKUs específicos em um grupo seguindo o passo a passo:

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`.
3. No campo **Buscar SKUs** digite o ID de um ou mais SKUs, separando os valores com vírgula. Ex: `2000004,2000009,2000005`. O campo para inclusão de IDs não permite a digitação de caracteres alfanuméricos nem o uso das combinações de teclas `Control + C` e `Control + V`.
4. Clique em `Salvar`.

Ao associar um SKU a um grupo, o produto associado a esse SKU também será adicionado à coleção. Caso um produto possua mais de um SKU, basta adicionar um dos SKUs ao grupo, e todos os SKUs associados serão incluídos nele.

Quando o número de SKUs na listagem ultrapassar 10, um controle de paginação ficará disponível.

Para excluir um SKU da lista, basta clicar no botão vermelho ao lado do SKU correspondente.

  ![Inserir_sku_espec_fico](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_5.gif)

### Importar uma lista de SKUs para o grupo

Apesar dos filtros de grupo serem muito práticos para criar agrupamentos de produtos automaticamente, é possível que eles não atendam às suas necessidades em situações específicas. Para resolver isso, é possível importar uma listagem de SKUs que farão parte do grupo e, consequentemente, da coleção. O módulo de Coleções aceita arquivos no formato de planilha do Excel (.xls). Todos os IDs dos SKUs devem estar dispostos na primeira coluna, com o cabeçalho, como exemplifica a figura abaixo:

![2017-03-08_170117](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_6.jpg)

Depois que a planilha for importada pelo sistema, os SKUs são apresentados da seguinte maneira:

![Importar_lista_de_skus](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_7.gif)

SKUs inativos não terão seus IDs importados, mesmo que estejam incluídos na planilha.

>⚠️ Ao selecionar mais de um tipo de grupo, apenas os produtos que estão na interseção desses conjuntos estarão na coleção. Por exemplo, se você selecionar a categoria AA e a marca BB, apenas os produtos dessa categoria e dessa marca estarão na coleção. Os produtos da categoria AA de outra marca não estarão na coleção, assim como produtos da marca BB de outras categorias não estarão na coleção.

### Excluir múltiplos SKUs de uma coleção

Para evitar que um administrador tenha de excluir manualmente diversos SKUs, um a um, é possível utilizar o recurso de importação de SKUs, conforme exemplificado na seção anterior. Neste caso, após o arquivo ser carregado, clique na opção `excluir skus`.

![Excluir_lista_de_skus](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_8.gif)

Obtenha um modelo de arquivo para a importação, tanto para inclusão quanto para exclusão de itens, na coleção [aqui](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tutorials/catálogo/coleções/Colecao.xls).

### Pesquisar coleções

Quando o número de coleções criadas exceder o limite de exibição de 20 itens, as coleções poderão ser encontradas por meio do campo de pesquisa. A busca deve ser feita com base no nome da coleção.

![Pesquisar_cole__o](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/coleções/criando-colecao-de-produtos_9.gif)
