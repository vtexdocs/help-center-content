---
title: 'Envio e mapeamento de categorias dos produtos para a Amazon'
id: 5xklf2wSdeztQh4iy5kJvD
status: PUBLISHED
createdAt: 2019-02-28T23:12:40.204Z
updatedAt: 2024-09-05T16:15:52.507Z
publishedAt: 2024-09-05T16:15:52.507Z
firstPublishedAt: 2019-02-28T23:13:35.624Z
contentType: trackArticle
productTeam: Channels
slugEN: sending-products-to-amazon
locale: pt
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugPT: integracao-com-a-amazon
---

Feitas as configurações iniciais da integração, é possível enviar os produtos para o catálogo da Amazon. Para habilitar o processo de catalogação dos produtos na Amazon, permitindo que eles fiquem disponíveis para venda em menos tempo, o seller precisará realizar o mapeamento entre as características dos produtos na sua loja VTEX e as características dos mesmos produtos na sua loja Amazon.  

Para enviar os seus produtos para a Amazon, o seller deverá mapear as [categorias](https://help.vtex.com/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) e os [atributos dos produtos](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP).  

>ℹ️ Seus produtos precisam ter o [Estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e [Preço](https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP) configurados antes de enviá-los à Amazon.  

## Mapear Categorias  

O processo de mapeamento pode ser realizado via Admin VTEX, ou via planilha, veja abaixo como executar em cada caso.  

>❗ Ao realizar o mapeamento de uma categoria via Admin VTEX, o mapeamento daquela categoria realizado via planilha anteriormente, será sobrescrito e não poderá ser recuperado.

### Mapeamento via Admin VTEX (BETA)  

Para acessar a página de mapeamento da Amazon, acesse __Marketplace > Marketplaces e Integrações > Amazon > Realizar Mapeamento.__  

Na página de mapeamento da Amazon, será apresentado uma lista com as categorias da sua loja VTEX. O mapeamento das categorias permite que exista uma correspondência entre as categorias da sua loja e as categorias da Amazon. Dessa forma, os produtos enviados serão exibidos na categoria equivalente no marketplace.  

Na página de mapeamento, use a barra de busca para pesquisar a categoria por nome. Além disso, a seção __Categorias da loja__ exibe lista das categorias da sua loja VTEX.  

A lista de categorias da sua loja VTEX inclui o status de seu mapeamento por meio dos ícones:  

| **Ícone** | **Status** | **Descrição** |
|:---:|:---:|:---:|
| ![mapeado mapper](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_1.jpg) | **Mapeado** | Indica que o mapeamento da categoria foi concluído. |
| ![mapeamentoincompleto mapper](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_2.jpg) | **Mapeamento incompleto** | A categoria está parcialmente mapeada, necessitando preencher seus atributos obrigatórios, indicados por meio de um asterisco, para mapeá-la. |
| ![erromapeamento mapper](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_3.jpg) | **Erro no mapeamento** | O erro no mapeamento ocorre quando o marketplace exclui ou muda a categoria do produto. Para solucionar esse problema basta refazer o mapeamento da categoria. |
| ![não mapeado mapper](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_4.jpg) | **Não mapeado** | Indica que a categoria não foi mapeada. |  

Para realizar o mapeamento de categorias:  

1. No Admin, acesse o módulo __Marketplace > Marketplaces e Integrações > Amazon > Realizar Mapeamento.__  
2. Selecione a categoria que deseja mapear.  
3. Selecione a categoria correspondente na Amazon do produto que deseja enviar.  
4. Faça a correspondência dos atributos na janela lateral, conforme imagem abaixo:  

![Mapper Amazon Atributos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_5.gif)

5. Clique no botão __`Salvar Alterações`__.  

>❗ Os campos sinalizados com o asterisco (`*`) são obrigatórios.  
> O preenchimento de um atributo pode desencadear novos campos obrigatórios que só ficarão visíveis na página ** Marketplace> Conexões> Produtos, ** após salvar o mapeamento.  

### Mapeamento via Planilha  

Para realizar o mapeamento via planilha o seller deve seguir os passos abaixo:  

1. [Realizar download do modelo de planilha de categorias gerais da Amazon.](#1-planilha-de-categorias-gerais-da-amazon) 
2. [Realizar download do modelo de planilha de atributos obrigatórios da Amazon.](#2-planilha-de-atributos-obrigatorios-da-amazon)
3. [Realizar pré-configurações de Catálogo.](#3-pre-configuracoes-no-catalogo)
4. [Realizar download do modelo de planilha de mapeamento.](#4-planilha-de-mapeamento)
5. [Preencher a planilha de mapeamento.](#5-preenchimento-da-planilha-de-mapeamento)
6. [Fazer o upload da planilha de mapeamento](#6-upload-da-planilha-de-mapeamento)

#### 1. Planilha de categorias gerais da Amazon

A Amazon utiliza a [categoria global](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global--tutorials_188) cadastrada na VTEX para fazer o mapeamento dos produtos, por isso, é importante que seja feita de maneira correta a equivalência entre a categoria global da VTEX e as categorias gerais na Amazon.

Para conhecer as categorias aceitas pela Amazon é necessário fazer o download da [Planilha de categorias gerais da Amazon](//assets.ctfassets.net/alneenqid6w5/3hkQxrFAjCJ5qU5MdJyte6/adb5e058afd78b3d2331e8a5f972f7b6/Nomenclatura-Amazon-Cat-Global__1___1_.xlsx), essa planilha será utilizada somente para fins de consulta.

#### 2. Planilha de atributos obrigatórios da Amazon

A Amazon tem valores de referência para determinadas características de produtos que devem ser considerads no mapeamento dos produtos. 

Para conhecer os valores aceitos pela Amazon de acordo com cada coluna da planilha de mapeamento, é necessário fazer download da [Planilha de atributos obrigatórios da Amazon](//assets.ctfassets.net/alneenqid6w5/2ScwSV0UILobt9eGaiZAvh/78e8aa16d768b0e7df168b50680ae85e/Atributos_Obrigat_rios_-_Todas_Categorias__ReHo__.xlsx). Essa planilha será utilizada somente para fins de consulta.

Nesta planilha, cada aba corresponde a uma categoria global na Amazon. Ao clicar em uma aba, a planilha apresenta as subcategorias presentes dentro da categoria global selecionada.

#### 3. Pré-configurações no Catálogo

Antes de mapear os produtos da sua loja, é necessário configurar os seguintes [campos do produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke) que você deseja enviar para a Amazon: 

- [Categoria global](#categoria-global)
- [EAN](#ean)

#### Categoria global

Para identificar os seus produtos e relacioná-los com o catálogo da Amazon, a integração utiliza as [categorias globais](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global--tutorials_188) da VTEX. Durante o processo de mapeamento, o sistema faz equivalência de cada categoria global da VTEX com as [categorias gerais](#planilha-de-categorias-gerais-da-amazon) da Amazon e, através disso, encaminhamos os produtos para as categorias corretas e com os atributos de produto necessários. 

Por isso, é obrigatório ter todos os produtos do seu catálogo classificados e [configurados com a categoria global](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global) adequada, caso contrário, você será impossibilitado de enviar os seus produtos para a Amazon.

Ao configurar a categoria global na VTEX, leve em consideração as categorias globais da Amazon, pois essa informação será utilizada durante a etapa de [preenchimento da planilha de mapeamento da Amazon](#5-preenchimento-da-planilha-de-mapeamento).

#### Configuração da Categoria global

Para configurar a categoria global no seu ambiente VTEX, a partir das categorias globais na Amazon, siga os passos abaixo:

1. Na [Planilha de atributos obrigatórios da Amazon](#2-planilha-de-atributos-obrigatorios-da-amazon) localize qual categoria será utilizada para seus produtos.
2. Na [Planilha de categorias gerais da Amazon](#1-planilha-de-categorias-gerais-da-amazon) filtrar a coluna “I” - **Cat-Amazon-Geral**, selecionando a categoria desejada.
3. Na [Planilha de categorias gerais da Amazon](#1-planilha-de-categorias-gerais-da-amazon), identifique qual a árvore de categoria que será aplicada na VTEX, visualizando as colunas “B”, “C”, “D” e/ou “E”.
4. No Admin VTEX, dentro do módulo *CATÁLAGO*, selecione a aba **PRODUTOS E SKUS**.
5. Localize o produto utilizando o campo de busca com a categoria desejada.
6. Clique em `ALTERAR`.
7. Dentro da página do produto, localize o campo `CATEGORIA GLOBAL VTEX`.
8. Preencha o campo da [Categoria Global](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global) da VTEX com o nome da categoria encontrada no passo 3.
9. Clique em `SALVAR ALTERAÇÕES`.

#### Exemplo de consulta das planilhas 

Na Planilha de atributos obrigatórios da Amazon, iremos utilizar a categoria **Health** focando em produtos para saúde:
![categoriageral01](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_6.JPG)

Na Planilha de categorias gerais da Amazon, filtre a coluna “I” Cat-Amazon-Geral, clicando em **Filtro > Health > OK**.
![categoriageral02](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_7.JPG)

Seguindo o exemplo anterior, filtre as colunas B, C e D da árvore de **Saúde e beleza> Cuidados pessoais > Massagem e relaxamento**.
![categoriageral03](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tracks/amazon-integration/envio-de-produtos-para-amazon_8.JPG)

Agora que você encontrou a categoria geral da Amazon, volte ao Admin para [configurar a categoria global](https://help.vtex.com/pt/tutorial/configurando-a-categoria-global--tutorials_188) da VTEX de acordo com a categoria geral da Amazon.

#### EAN

Como o catálogo da Amazon exige que os produtos enviados tenham o [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube), para que eles possam juntar os produtos de todos os sellers. Portanto, certifique-se que seus produtos estão com EANs válidos cadastrados antes de configurar a integração.

#### Isenção de EAN

No entanto, há situações em que a [Amazon isenta o lojista de enviar o EAN](https://sellercentral.amazon.com.br/gp/help/200426310). Neste caso, a isenção deve ser configurada tanto na Amazon quanto na VTEX. 

Caso a Amazon já tenha concedido a isenção de EANs para a sua loja, [abra um ticket](https://support.vtex.com/hc/pt-br) com o assunto "Amazon - Isenção de EAN" para solicitar o procedimento por parte da VTEX. Para o cenário de isenção de EAN é necessário já estar com a integração configurada, antes de fazer a solicitação via ticket.

Para estar  elegível para solicitar isenção de EAN, você deve estar dentro de um dos seguintes cenários:
- Produtos de marca própria ou artesanais, além de kits de produtos.
- Produtos em que o fabricante não possui código de barras.
- Vendas de produtos que não tem EAN. Exemplo: Acessórios para celular.
- Kits/combos de produtos. Exemplo: Camisas + Cinto.

#### Dicas para envio de produtos com isenção de EAN

Após a solicitação e aprovação da isenção de EAN, com a definição de [Categoria](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3UYjVS03JbleGPh0Ckpic1?&utm_source=autocomplete) e [Marca](https://help.vtex.com/pt/tutorial/cadastrando-marcas--tutorials_1414),  o produto passa a ter a necessidade de ser enviado via integração exatamente com as mesmas informações aprovadas na Amazon, são elas: 
- Nome da marca
- Acentuação 
- Letras maiúsculas e minúsculas
- Categoria aprovada
- Número do fabricante do produto

É importante garantir que o nome da marca seja igual na Amazon e o número do fabricante do produto (campo único sem repetição) esteja correto, isso evita que os produtos tenham título e imagem de outro produto.

O [Cadastro de Marcas da Amazon](https://brandservices.amazon.com.br/brandregistry/eligibility) libera um conjunto de ferramentas projetadas para ajudar você a desenvolver e proteger sua marca, construindo uma experiência melhor durante suas vendas.

Se você está vendendo produtos de uma marca ou fabricação própria a Amazon deve aprová-la antes que você possa usá-la para publicar produtos. Para registrar uma marca própria, siga as instruções no site da Amazon.

Caso você queira vender um produto que está associado a outro proprietário (criação de um novo ASIN), é importante se atentar ao processo de [Liberação do Produto para a Marca](https://sellercentral.amazon.com/gp/help/help.html/?itemID=G201844590&ref_=xx_G201844590_a_r0_cont_sgsearch).

#### 4. Planilha de mapeamento

Nessa etapa você precisará categorizar as variações e os atributos dos produtos e enviá-los para o marketplace. O envio dessas informações é feito por meio da planilha de mapeamento, que faz a equivalência entre as categorias, as variações e os atributos da sua loja e os padrões adotados pela Amazon.

Faça o download do arquivo da [Planilha de Mapeamento da Amazon.xlsx](https://assets.ctfassets.net/alneenqid6w5/4mNcXF4yS3160xUGgCZVQC/caf8cfc88b316bc9878000264e16e30b/Planilha_modelo.xlsx) e utilize o arquivo baixado como modelo para preenchimento. Esta é a planilha que será preenchida e enviada posteriormente para a Amazon.

#### 5. Preenchimento da planilha de mapeamento

A planilha possui as seguintes colunas:

| Coluna | Nome | Descrição |
| ---------- | ---------- | ---------- | 
| A | CategoryID | ID da categoria na VTEX |
| B | VariationTheme | A maneira como o SKU varia de acordo com a sua categoria na Amazon. No mapeamento de produtos é levada em consideração a ordem da VariationTheme das categorias | 
| C | Type | O tipo de especificação que possui dois tipos: Variation e Information |
| D | VTEXSpecification | Nome do campo de SKU usado na sua loja VTEX |
| E | AmazonSpecification | Nome do atributo aceito pela Amazon |
| F | VTEXValue | Nome do valor usado no campo SKU na VTEX |
| G | AmazonValue | Nome dos valores aceitos pela Amazon |

>ℹ️ A planilha de mapeamento da Amazon é case sensitive, ou seja, é sensível para o uso de letras maiúsculas e minúsculas.

Para cada produto, siga os passos a seguir:  

1. Preencha a coluna **CategoryID** com o código da categoria do produto.
2. Preencha a coluna **VariationTheme** com as informações sobre cor e/ou tamanho, caso tenha variação cadastrada. O primeiro **VariationTheme** da categoria é utilizado para enviar os campos dos produtos/SKUs. Siga os padrões:
   * Se o produto se diferencia por tamanho e cor, utilize *SizeColor*. 
   * Se o produto se diferencia por cor, utilize *Color*.
   * Se o produto se diferencia por tamanho, utilize *Size*.
3. Preencha a coluna **Type** com o um tipo de especificação:
   * **Variation**: tipo destinado para diferenciar os SKUs. Caso a coluna **VariationTheme** tenha sido preenchida, então a coluna **Type** sempre será preenchida como *Variation*.
   * **Information**: tipo destinado para complementar informações sobre os produtos. Caso a coluna **VariationTheme** não tenha sido preenchida, então a coluna **Type** sempre será preenchida como *Information*.
4. Preencha a coluna **VTEXSpecification** com o nome do atributo do produto na sua loja VTEX. 
5. Preencha a coluna **AmazonSpecification** com o nome dos atributos do produto na Amazon.
6. Preencha a coluna **VTEXValue** com os valores do atributo do produto na VTEX.
7. Preencha a coluna **AmazonValue** com os valores aceitos pela Amazon. Para visualizar os valores aceitos pela Amazon, acesse a [Planilha de atributos obrigatórios da Amazon](#2-planilha-de-atributos-obrigatorios-da-amazon) e busque pela aba `VALORES VÁLIDOS`

>⚠️ Em alguns casos, os valores de **VariationTheme** podem ser parecidos. Há categorias em que o **VariationTheme** pode ser: *SizeColor*, *Color* e *Size*, enquanto há outras categorias em que pode ser: *ColorSize*, *Color* e *Size*. A diferença está na ordem, em *SizeColor*, as caixas de seleção na página do produto estarão ordenadas por tamanho e cor, enquanto em *ColorSize* estarão ordenadas por cor e tamanho. Esteja atento aos valores válidos de cada categoria que será mapeada.

##### Exemplo de preenchimento 

| CategoryID | VariationTheme | Type | VTEXSpecification | AmazonSpecification | VTEXValue | AmazonValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 212 | SizeColor | Variation | Tamanho | Size | P | S |
| 212 | SizeColor | Variation | Tamanho | Size | M | M |
| 212 | SizeColor | Variation | Tamanho | Size | G | L |

#### 6. Upload da planilha de mapeamento

Após de preencher a planilha, acesse Integrações no menu do Admin:

1. Acesse o Admin.
2. No módulo *MARKETPLACE*, selecione a opção **Integrações**. 
3. Clique em **Configurações**.
4. Selecione o card da Amazon e clique no `Ícone da engrenagem` <i class="fas fa-cog"></i>.
5. Escolha a opção `Upload de mapeamento`.
6. Clique em `Escolher um arquivo`.
7. Selecione a planilha de mapeamento preenchida.
8. Clique em `Enviar arquivo`.

Não tendo ocorrido nenhum erro com o envio, os produtos serão enviados para a Amazon com seus respectivos atributos.  

