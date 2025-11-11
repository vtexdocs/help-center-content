---
title: 'Envio dos produtos para a Dafiti'
id: 3b8BZfB1BC8G8SCe0ao46m
status: PUBLISHED
createdAt: 2018-09-27T18:14:09.967Z
updatedAt: 2024-12-19T15:22:16.873Z
publishedAt: 2024-12-19T15:22:16.873Z
firstPublishedAt: 2018-09-27T21:44:56.294Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-product-data-to-dafiti
locale: pt
trackId: 4wF4RBx9ygEkimW6SsKw8i
trackSlugEN: envio-dos-produtos-para-dafiti
order: 6
---

Após configurar o conector da Dafiti, será possível enviar os produtos para o catálogo da Dafiti. Para enviar seus produtos, você precisará realizar o mapeamento entre as características dos produtos na sua loja VTEX e as características dos mesmos produtos na sua loja Dafiti.

Para fazer o mapeamento, siga os passos abaixo:

1. [Fazer download  da planilha de consulta da Dafiti](#1-fazer-download-da-planilha-de-consulta-da-dafiti)
2. [Fazer download da planilha de mapeamento da Dafiti](#2-fazer-download-da-planilha-de-mapeamento-da-dafiti)
3. [Preencher a planilha de mapeamento](#3-preencher-a-planilha-de-mapeamento)
4. [Fazer upload da planilha de mapeamento](#4-fazer-upload-da-planilha-de-mapeamento)

> ⚠️ Para cadastrar um produto na VTEX, é obrigatório que você vincule o produto a uma marca. Entretanto, para evitar problemas com o envio de produtos, você deve [preencher](/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke) o campo **Marca** do produto que será enviado com os nomes das marcas aceitas na Dafiti. Consulte o [glossário de marcas](https://www.dafiti.com.br/marcas/) da Dafiti para verificar as marcas aceitas.

## 1. Fazer download da planilha de consulta da Dafiti

A Dafiti tem valores de referência para determinados atributos de produtos que devem ser levados em consideração durante o mapeamento de produtos.

Para conhecer os valores aceitos pela Dafiti de acordo com cada coluna da planilha de mapeamento, é necessário fazer [download da planilha de consulta da Dafiti](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tracks/marketplace/envio-dos-produtos-para-dafiti/category_tree_export_2021-12-20_16-10-17.xlsx) para a categoria correspondente. Essa planilha será utilizada somente para fins de consulta.

- [Acessórios](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tracks/marketplace/envio-dos-produtos-para-dafiti/Acess_rios_-_ProductCreationTemplate_2022-02-11_143128.xlsx)
- [Beleza](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tracks/marketplace/envio-dos-produtos-para-dafiti/Beleza_-_ProductCreationTemplate_2022-02-11_143141.xlsx)
- [Casa e Decoração](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tracks/marketplace/envio-dos-produtos-para-dafiti/Home_e_Decor_-_ProductCreationTemplate_2022-02-11_143139.xlsx)
- [Calçados](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tracks/marketplace/envio-dos-produtos-para-dafiti/Cal_ados_-_ProductCreationTemplate_2022-02-11_143135.xlsx)
- [Vestuário](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tracks/marketplace/envio-dos-produtos-para-dafiti/Vestu_rio_-_ProductCreationTemplate_2022-02-11_143133.xlsx)

## 2. Fazer download da planilha de mapeamento da Dafiti 

Nessa etapa, você precisará mapear os atributos dos produtos e enviá-los para o marketplace. O envio dessas informações é feito por meio da planilha de mapeamento, que permite indicar à Dafiti a correspondência entre os valores cadastrados na sua loja e os valores aceitos no marketplace. 

Faça o download da [Planilha de Mapeamento da Dafiti](https://cdn.statically.io/gh/vtexdocs/help-center-content/files-migration-script/docs/pt/tracks/marketplace/envio-dos-produtos-para-dafiti/Model_New_Mapping_Dafiti.xlsx). Você deve utilizar o arquivo como modelo para preenchimento, ou seja, esta é a planilha que será preenchida e enviada posteriormente para a Dafiti.

## 3. Preencher a planilha de mapeamento

O modelo de planilha de mapeamento fornecido é dividido em três abas:

| **Nome da aba** | **Descrição** | 
| ---------- | ---------- | 
| **Categories** | Faz a equivalência entre a categoria na VTEX e a categoria na Dafiti. |
| **Attributenames** | Faz a equivalência entre o nome do campo de especificação na VTEX e nome da variação / atributo na Dafiti. |
| **Attributevalues** | Faz a equivalência entre os valores do campo da especificação na VTEX e valores  da variação / atributo na Dafiti. |

> ℹ️ A planilha de mapeamento da Dafiti é *case sensitive*, ou seja, faz distinção entre letras maiúsculas e minúsculas. Leve este fato em consideração quando preencher a planilha.

### Categories

A aba **Categories** da planilha de mapeamento possui duas colunas para serem preenchidas:

- **VTEXCategoryId:** ID da Categoria na VTEX. O ID da categoria pode ser encontrado ao lado do nome da Categoria, ao navegar pela árvore de categorias no Admin VTEX, em *Produtos > Catálogo > Categorias*.
- **DafitiCategoryId:**  ID da Categoria na Dafiti. Você deve procurar a melhor equivalência possível na planilha de consulta da Dafiti correspondente ao produto que está sendo mapeado.

> ℹ️ É possível mapear uma categoria VTEX para múltiplas categorias Dafiti. Para isso, é necessário separar os IDs na coluna da Dafiti por vírgula. Nesse caso, todos os produtos desta categoria na VTEX serão relacionados às categorias selecionadas na Dafiti.

### Attributenames

A aba __attributenames__ da planilha de mapeamento possui três colunas para serem preenchidas:

- **VTEXAttributeName:** nome do campo de especificação na VTEX.
- **DafitiAttributeName:** nome da variação / atributo na Dafiti.
    Para obter essas informações, verifique a planilha de consulta da Dafiti. Os atributos *Variation*, *Gender*, *Origin*, *ColorFamily*, *Color* e *Origincountry* são obrigatórios, considerando que:
    - Clientes do Brasil precisam [cadastrar](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) em *Admin > Catálogo > Categorias*, a especificação **País de origem** nos produtos que serão mapeados, para posteriormente preencher nas planilhas de mapeamento o novo atributo obrigatório **Origincountry**.
    - Quando preencher o atributo **ColorFamily** para um produto que possua mais de uma cor, recomendamos utilizar a cor predominante.
    - Os atributos **Color** e **ColorFamily** são distintos, sendo necessário o [cadastro de duas especificações](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin) de produto *Cor* diferentes para o mapeamento correto dos produtos. Exemplo: Cor e Cor2.
- **HasValueMapping:** indica se é necessário fazer uma conversão dos valores do atributo na aba *VTEXAttributeValue*. Quando os valores das especificações do seu produto na VTEX forem diferentes dos utilizados pela Dafiti, será preciso informar ao sistema que será feita uma conversão entre eles. Preencha essa coluna com `Y` (Yes), caso queira indicar que há uma conversão de valores para ser feita, ou com `N` (No) caso não tenha conversão.

### Attributevalues

A aba attributevalues da planilha de mapeamento possui duas colunas para serem preenchidas:

- **VTEXAttributeValue:** valor do campo de especificação na VTEX.
- **DafitiAttributeValue:** valor da variação / atributo na Dafiti.

#### Exemplo de preenchimento

Neste exemplo, faremos o mapeamento de uma categoria de Vestuário de acordo com cada aba.

Aba **Categories**:

| **VTEXCategoryId** | **DafitiCategoryId** | 
| ---------- | ---------- |
| 23 | 120 | 

Aba **attributenames**:

| **VTEXAttributenames** | **DafitiAttributenames** | **HasValueMapping** |
| ---------- | ---------- | ---------- |
| Cor | ColorFamily | Y |
| Gênero | Gender | N |
| Origem | Origin | N |
| Tamanho | Variation | N |
| País de origem | OriginCountry | N |
| Cor2 | Color | Y |

Aba **attributevalues**:

| **VTEXAttributevalues** | **DafitiAttributevalues** |
| ---------- | ---------- | 
| Amarela | Amarelo |
| Vermelha | Vermelho |
| Azul | Azul |
| Homem | Masculino |
| Brasil | Brasil |
| Nacional | Nacional |
| P | P |
| M | M |
| G | G |
| Azul Claro | Azul Claro |

## 4. Fazer upload da planilha de mapeamento

Depois de mapear todos os atributos dos SKUs da sua loja, você deverá fazer upload da planilha de mapeamento da Dafiti. Para isso, siga as instruções abaixo:

1. Acesse o Admin VTEX.
2. No módulo _MARKETPLACE_, selecione `Integrações`.
3. Em seguida, clique em `Configurações`.
4. Na integração Dafiti, clique na engrenagem <i class="fas fa-cog"></i>.  
5. Escolha a opção `Upload do mapeamento`.
6. Selecione a opção `Escolher um arquivo`.
7. Selecione a planilha de mapeamento de categorias, atributos e variações da Dafiti.
8. Clique em `Enviar arquivo`.

Não tendo ocorrido nenhum erro com o envio, os produtos serão enviados para a Dafiti com seus respectivos atributos.

> ℹ️ Os requisitos da Dafiti para cadastro de Imagens de produto são: <ul>Resolução mínima: 1000x1000px</ul><ul>Resolução máxima: 1104x1600px</ul><ul>Quantidade Mínima: 2 imagens</ul><ul>Quantidade Máxima: 8 imagens</ul> Caso as imagens sejam enviadas em tamanhos inferiores à resolução mínima, a integração entre VTEX e Dafiti realiza automaticamente o redimensionamento. Esse processo é realizado via redimensionamento da largura da imagem para 1000px, preservando a proporção de sua altura.
