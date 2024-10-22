---
title: 'Criar coleção de produtos'
id: tutorials_244
status: PUBLISHED
createdAt: 2017-04-27T22:12:33.797Z
updatedAt: 2023-04-19T18:38:42.046Z
publishedAt: 2023-04-19T18:38:42.046Z
firstPublishedAt: 2017-04-27T23:03:10.343Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_3
slugEN: creating-a-product-collection
locale: pt
legacySlug: criando-colecao-de-produtos
subcategoryId: pwxWmUu7T222QyuGogs68
---

>⚠️ Existem duas formas de configurar coleções, por meio do Portal CMS Legado ou utilizando o módulo de [Coleções Beta](https://help.vtex.com/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye). Este artigo refere-se à <a href = "https://help.vtex.com/pt/tutorial/cadastro-de-colecoes-cms--2YBy6P6X0NFRpkD2ZBxF6L">configuração de coleções por meio do Portal CMS Legado</a>.

Para criar uma coleção, siga as instruções abaixo:

1. No Admin VTEX, acesse **Storefront**.
2. Clique em **Layout**.
3. Clique na pasta **Product Clusters (Collections)**.
4. Clique no botão `new collection`, ilustrado a seguir.
	![Layout 4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_1.png)
5. Preencha as informações necessárias:
	- **Product Cluster Id:** código identificador da coleção. Este campo não deve ser preenchido, pois é gerado automaticamente pelo sistema ao salvar.
	- **Name:** nome da coleção.
	- **Highlight:** define se a coleção terá destaque ou não.
	- **Searchable:** define se a coleção será buscável ou não na loja.
	- **From __ To __:** define as datas de validade da coleção.
6. Clique no botão `Save Product Cluster`.

Feito isso, sua coleção terá sido salva. Agora, você precisa acrescentar os produtos que fazem parte dela, através da inclusão de Grupos à coleção. 

## Incluir grupos na coleção

Você pode criar grupos a partir dos seguintes filtros, que podem ser combinados para atingir o objetivo esperado:

- Departamento, Categoria ou subcategoria
- Marca

Cada grupo pode ser de um dos seguintes tipos: __Inclusão__ ou __Exclusão__. Para qualquer coleção, o primeiro Grupo criado deve ser obrigatoriamente do tipo __Inclusão__.

### Criar grupos por departamento, categoria ou subcategoria

Para criar um grupo por departamento, categoria ou subcategoria, siga as instruções abaixo:

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`, conforme exemplifica a imagem a seguir.
	![Layout 5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_2.png)
3. Para acrescentar todos os produtos de um determinado departamento a um grupo, selecione o departamento em questão, como indica a figura a seguir. O mesmo se aplica aos produtos de uma determinada categoria ou subcategoria.
	![Filtro_por_categoria](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_3.jpg)
4. Clique em `Salvar Grupo`.

### Criar grupo por marca

Para criar um grupo com produtos de uma ou mais marcas, siga as instruções abaixo.

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`.
3. Selecione uma ou mais marcas na lista correspondente. As marcas encontram-se dispostas em ordem alfabética. Ao clicar na letra correspondente à inicial da marca, a lista se expande e exibe as marcas existentes.
  ![FIltro_por_marca](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_4.jpg)

### Definir grupo por produtos em pré-venda ou em período de lançamento

Para criar uma coleção de produtos que ainda não foram lançados ou que foram lançados recentemente, siga o passo a passo:

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`.
3. Se desejar incluir produtos em pré-venda na coleção, selecione **Pré-venda** em **Outras Opções**. O sistema considerará todos os produtos com a data posterior ao dia atual, conforme definido no campo **Data de lançamento no mercado** no cadastro de produto.
4. Se desejar incluir produtos lançados recentemente, selecione a opção **Lançamento**. O sistema considerará todos os produtos com a data definida no campo **Data de lançamento no mercado** no cadastro de produto dentro do intervalo de 30 dias anteriores ao atual.

Não é possível selecionar os dois campos (**Pré-venda** e **Lançamento**) na mesma coleção. Caso queira que ambas os cenários sejam contemplados, crie duas coleções e configure cada uma com a respectiva opção.

>⚠️ Os campos **Pré-venda** e **Lançamento** só funcionam se você tiver selecionado no grupo alguma categoria, marca ou combinação de SKUs.

### Incluir SKUs específicos em um grupo

É possível fazer a inclusão manual de SKUs específicos em um grupo seguindo o passo a passo:

1. Clique no nome da coleção desejada em **Product Clusters (Collections)**.
2. Clique no botão `new group`.
3. No campo **Buscar SKUs** digite o ID de um ou mais SKUs, separando os valores com vírgula. Ex: `2000004,2000009,2000005`. O campo para inclusão dos IDs não permite a digitação de caracteres alfanuméricos, nem a utilização da combinação de teclas `Control + C` e `Control + V`.
4. Clique em `Salvar`.

Ao associar um SKU à um grupo, o produto atrelado a esse SKU também será adicionado à coleção. Caso um produto possua mais de um SKU, basta adicionar um dos SKUs ao grupo, que todos os SKUs associados serão incluídos nele.

Quando o número de SKUs na listagem ultrapassar 10 itens, um controle de paginação ficará disponível.

Para excluir um SKU da lista, basta clicar no botão vermelho ao lado do SKU correspondente.

  ![Inserir_sku_espec_fico](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_5.gif)

### Importar uma lista de SKUs para o grupo

Apesar dos filtros de grupos serem muito práticos para criar agrupamentos de produtos de forma automática, é possível que eles não atendam as suas necessidades em situações específicas. Para resolver isso, é possível importar uma listagem com os SKUs que farão parte do grupo e consequentemente, da coleção. O módulo de Coleções aceita arquivos nos formatos planilha do Excel (.xls). Todos os IDs dos SKUs devem estar dispostos na primeira coluna, com o cabeçalho, como exemplifica a figura abaixo:

  ![2017-03-08_170117](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_6.jpg)

Depois que a planilha for importada pelo sistema, os SKUs são apresentados da seguinte maneira:

![Importar_lista_de_skus](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_7.gif)

SKUs que estiverem inativos não terão seus IDs importados mesmo que estejam incluídos na planilha.

>⚠️ Ao selecionar mais de um tipo de grupo, apenas os produtos na interseção desses dois conjuntos estarão na coleção. Por exemplo, se você selecionar categoria AA e marca BB, apenas os produtos que forem dessa categoria e dessa marca estarão na coleção. Os produtos da categoria AA de outra marca não estarão na coleção, assim como produtos da marca BB de outras categorias não estarão na coleção.

### Excluir múltiplos SKUs de uma coleção

Para evitar que um administrador tenha que excluir manualmente diversos SKUs, um a um, é possível utilizar o recurso de importação de SKUs da mesma forma que foi exemplificada na seção anterior. Neste caso, depois que o arquivo for carregado, clique na opção `excluir skus`.

![Excluir_lista_de_skus](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_8.gif)

Obtenha um modelo de arquivo para a importação tanto para inclusão quanto para exclusão de itens na coleção [aqui](//assets.contentful.com/alneenqid6w5/Lo7Y0tXh6eKyyUSs4MESQ/209e614248978f0e86a37e4ddff50162/Colecao.xls "aqui").

### Pesquisar coleções

Quando a quantidade de coleções criadas exceder o limite de exibição, que é de 20 itens, as coleções poderão ser encontradas através do campo de pesquisa. A busca deve ser feita com base no nome da coleção.

![Pesquisar_cole__o](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Catalog/Products and SKUs/criando-colecao-de-produtos_9.gif)
