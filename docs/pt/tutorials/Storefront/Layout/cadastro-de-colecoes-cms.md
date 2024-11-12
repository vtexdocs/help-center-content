---
title: 'Cadastro de Coleções CMS'
id: 2YBy6P6X0NFRpkD2ZBxF6L
status: PUBLISHED
createdAt: 2020-11-25T22:05:53.169Z
updatedAt: 2023-04-19T18:38:40.730Z
publishedAt: 2023-04-19T18:38:40.730Z
firstPublishedAt: 2020-11-25T22:10:10.072Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: adding-collections-cms
locale: pt
legacySlug: cadastrar-colecoes
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

>⚠️ Existem duas formas de configurar coleções: por meio do Portal CMS Legado ou utilizando o módulo de [Coleções Beta](https://help.vtex.com/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye). Este artigo refere-se à configuração de coleções por meio do Portal CMS Legado.

Siga o passo a passo abaixo para cadastrar uma nova coleção:

1. No Admin VTEX, acesse **Storefront > Layout**.
2. Dentro da pasta CMS, clique em __Product Clusters (Collections)__.
3. Clique em __New Collection__.
4. Preencha os campos do formulário de Coleção. Para entender melhor o significado de cada campo, acesse nosso artigo sobre [como preencher campos de cadastro de coleção](https://help.vtex.com/pt/tutorial/preencher-campos-de-cadastro-de-colecao--7eKL7CFRW3yGKlnDfQetbj).
5. Clique em __Save Product Cluster__.

>⚠️ Quando a quantidade de coleções criadas ultrapassar o limite de vinte, as coleções excedentes podem ser encontradas na interface através do campo de pesquisa. A busca nesse campo deve ser feita com base no nome da coleção desejada.

A escolha dos produtos que vão compor uma coleção é feita através da criação de um __grupo__. Para isso, basta clicar em __New Group__ dentro da coleção desejada. 

![2019-06-06 16 22 46-Layout](https://images.ctfassets.net/alneenqid6w5/1HELFm1eBsSZVpq6EEQQJ4/29c77be34d91e4eac14b7bf3d4597fa4/2019-06-06_16_22_46-Layout.png)

Antes de escolher quais produtos farão parte do grupo, como veremos a seguir, é necessário atribuir um nome e especificar o tipo de grupo criado. 

## Tipos de grupo

Existem apenas 2 valores possíveis para o tipo de um grupo: ___Inclusive___ e ___Exclusive___. Um grupo tipo _Inclusive_ tem como objetivo incluir todos os produtos na coleção à qual ele está vinculado. Nesse mesmo sentido, um grupo tipo _Exclusive_ exclui da coleção os seus produtos componentes. 

Para exemplificar, suponha uma coleção _Celulares_ com dois grupos: um tipo _Inclusive_ `A` e outro _Exclusive_ `B`. Os produtos componentes dessa coleção serão o resultado de produtos do grupo A *menos* produtos do grupo B.  

Essa lógica serve para qualquer quantidade de grupos criados dentro de uma mesma coleção. Os produtos dos grupos tipo _Exclusive_ sempre serão subtraídos dos produtos que compõem os grupos tipo _Inclusive_. Dessa forma:  

`Produtos componentes de uma coleção = (A+B) - (C+D)`

Sendo:

- A e B grupos tipo _Inclusive_ 
- C e D grupos tipo _Exclusive_ 

Por isso, o primeiro grupo criado para qualquer coleção deve ser obrigatoriamente do tipo _Inclusive_.

>⚠️ Esteja sempre atento ao tipo de grupo definido no cadastro. Ao incluir produtos em um grupo tipo <i>Exclusive</i>, por exemplo, eles **não** serão incluídos a uma coleção por conta da natureza do seu grupo.

## Seleção de produtos

Dentro de um grupo, a seleção dos produtos pode ser feita com base em:

- Departamento, Categoria ou Subcategoria
- Marca
- SKU
- Data de lançamento no mercado

Entre as opções acima, é possível selecionar mais de uma para alcançar um cenário específico desejado. Nesses casos, __apenas os produtos que se enquadram na interseção das opções selecionadas serão incluídos no grupo__. 

Por exemplo: ao selecionar a categoria `A` e a marca `B`, apenas os produtos que forem dessa categoria e marca ao mesmo tempo serão incluídos ao grupo. Os produtos da categoria `A` de marcas diferentes de `B`, por exemplo, não estarão na coleção assim como os produtos da marca `B` de outras categorias.

## Produtos por Departamento, Categoria ou Subcategoria

Para adicionar todos os produtos de um determinado Departamento a um grupo, basta selecionar o Departamento desejado e clicar em __Save Group__, como mostra a imagem abaixo. 

![selecionar-departamento-colecoes-cms PT](//images.ctfassets.net/alneenqid6w5/577w3KpNuahKOiY0iQTYrp/6f036e35d347f1f9dbf66e347e151ca6/selecionar-departamento-colecoes-cms_PT.png)

O mesmo se aplica aos produtos de uma determinada Categoria ou Subcategoria.

![selecionar-categoria-subcategoria-colecoes-cms PT](//images.ctfassets.net/alneenqid6w5/6bV3ick7BunjS5QOnMVpED/d5f4b348b405f6e05248f088cba664c5/selecionar-categoria-subcategoria-colecoes-cms_PT.png)

## Produtos por Marca

Para criar um grupo com produtos de uma ou mais marcas, basta selecionar a marca desejada na lista correspondente. 

![selecionar-marcas-colecoes-cms PT](//images.ctfassets.net/alneenqid6w5/2f4nqqF2CWFbw5Cgjmc32f/d6c7c8ce8f198255cd744e5e60668962/selecionar-marcas-colecoes-cms_PT.png)

As marcas encontram-se dispostas em ordem alfabética. Ao clicar na letra correspondente à inicial da marca desejada, a lista se expande e exibe as marcas existentes.

## Produtos por SKU

### Manualmente 

Ao adicionar um SKU a um grupo, o produto ao qual ele está vinculado também será adicionado. Em um cenário em que um produto tenha mais de um SKU atribuido a ele, a adição de um único SKU fará com que todos os outros também sejam adicionados ao grupo.

![add-skus-manualmente-coleção-cms](//images.ctfassets.net/alneenqid6w5/4DWiR2pUd1U40fWTAqmwG1/96f1f747f2250c98cec87b6d7e02e6d3/add-skus-manualmente-cole____o-cms.png)

No campo __Find SKUs__, é possível digitar o ID de quantos SKUs forem desejados, escrevendo os valores entre vírgulas. 

> Ex: 2000004,2000009,2000005. 

Para excluir um SKU da lista, basta clicar no botão vermelho ao lado dele.

>ℹ️ Quando o número de SKUs na listagem ultrapassar 10 itens, um controle de paginação ficará disponível.

### Por planilha 

>ℹ️ Obtenha o modelo de arquivo para a inclusão e exclusão de SKUs da coleção [aqui](//assets.contentful.com/alneenqid6w5/Lo7Y0tXh6eKyyUSs4MESQ/209e614248978f0e86a37e4ddff50162/Colecao.xls).

#### Inclusão massiva

No campo __Bulk Insert SKUs__, é possível inserir por planilha (formato `.xls`) uma listagem de SKUs que farão parte do grupo.

![add-skus-manualmente-planilha-coleção-cms](//images.ctfassets.net/alneenqid6w5/46dZS1m8ISWP68SMNZrMlm/2b733ea38c3f62d7c503a44c6f55fb56/add-skus-manualmente-planilha-cole____o-cms.png)

Na planilha, todos os IDs dos SKUs devem estar dispostos na primeira coluna, com o cabeçalho, como exemplifica a figura abaixo:

![exemplo-planilha-seleção-sku-coleção](//images.ctfassets.net/alneenqid6w5/5E2rtjyWArzeGjr27smF4o/bd66f1ea64d4e0d104471fac71bd98ab/exemplo-planilha-sele____o-sku-cole____o.png)

Depois de selecionar a planilha desejada, clique na opção de __Import skus__ para enviar as informações.

![Import SKUs](//images.ctfassets.net/alneenqid6w5/61tifMGQaUdD1MAsfdblo8/2ecfd6edbba468740f23ccc53c3e1eba/Import_SKUs.png)

#### Exclusão massiva

Para evitar a exclusão manual de um SKU por vez, também é possível usar o recurso de importação de planilha para a exclusão massiva. 

![exclusao-skus-manualmente-planilha-coleção-cms](//images.ctfassets.net/alneenqid6w5/2LVbuzlmh0nmgY4z21i9Be/f55707ea917364ed1732a4050b98a7a3/exclusao-skus-manualmente-planilha-cole____o-cms.png)

Nesse caso em específico, os SKUs listados na planilha importada serão excluídos do grupo. Para isso, clique na opção __excluir skus__ depois que o arquivo for carregado.

>⚠️ Os SKUs inativos não terão seus IDs considerados para inclusão ou exclusão mesmo que estejam listados na planilha.

## Produtos por data de lançamento no mercado

>⚠️ Na seção de **Other options**, as opções **Pre-sales** e **Launches** são um complemento à escolha dos produtos por Categorias, Marcas ou SKUs. Isso significa que essas flags só vão funcionar se você já tiver selecionado anteriormente

Note que apenas é possível selecionar uma das duas opções. Caso queira que ambos os cenários sejam contemplados, crie dois grupos e configure cada um deles com a respectiva opção.

![selecionar-other-options-colecoes-cms PT](//images.ctfassets.net/alneenqid6w5/2SrWIT3WZdqgYe2m6NUvhP/c0b4a98dd766dc27c63f706f4592ec40/selecionar-other-options-colecoes-cms_PT.png)

### Pre-sales

Para criar uma coleção de produtos que ainda não foram lançados na sua loja, selecione a opção __Pre-sales__. O sistema considerará todos os produtos com a data de lançamento posterior ao dia vigente, conforme definido no campo _Data de lançamento no mercado_ no cadastro de produto. 

### Launches 

A opção __Launches__ permite criar uma coleção de produtos recentemente lançados. Ao selecionar essa opção, o sistema considerará todos os produtos lançados dentro do intervalo de 30 dias anteriores ao vigente. A data de lançamento considerada é também aquela definida no campo _Data de lançamento no mercado_ no cadastro do produto. 

>ℹ️ Se quiser entender como funciona a exclusão de uma coleção de produtos, acesse nosso artigo sobre [como deletar coleções](https://help.vtex.com/pt/tutorial/como-deletar-colecao--6C620yHzwsGoS8iaCocAM2).
