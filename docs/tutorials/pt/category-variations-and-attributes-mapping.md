---
title: 'Mapeamento de categorias, variações e atributos do Mercado Livre'
id: 6d5DFl6MZasoKickqkOUo4
status: DRAFT
createdAt: 2018-07-28T17:54:34.171Z
updatedAt: 2020-11-16T21:27:09.104Z
publishedAt: 
firstPublishedAt: 2018-07-28T18:16:23.488Z
contentType: tutorial
productTeam: Channels
author: 1nsS1IgG3WWQ4cA8e2qsw6
slug: mapeamento-de-categorias-e-variacoes
locale: pt
legacySlug: mapeamento-de-categorias-e-variacoes
subcategory: 4uqMnZjwBO04uWgCom8QiA
---

Depois de fazer as configurações iniciais para a [integração com o Mercado Livre](/pt/tutorial/integrando-com-mercado-livre), agora vamos categorizar e enviar as variações e atributos de produto para o marketplace. O envio dessas informações é feito por meio do __upload da planilha de mapeamento__, que contém um de/para.

Com essa feature, será possível categorizar corretamente os seus produtos no Mercado Livre e também criar variações e atributos para os anúncios.

O mapeamento só será feito uma vez para cada categoria. Isso significa que, já tendo feito o mapeamento uma vez, os novos produtos que forem criados vão ser integrados diretamente na categoria correta (e com suas respectivas variações e atributos).

- [Baixe aqui](https://assets.ctfassets.net/alneenqid6w5/qyDp7OSL5YAGaGKagWiK0/07900f41a952a460185e18f9db190eb1/Planilha_de_Mapeamento_do_Mercado_Livre.xlsx) a __Planilha de Mapeamento do Mercado Livre__ no formato `.xlsx`.

A mesma planilha será usada nas três macroetapas, descritas a seguir (categorização, variações e atributos). Siga o passo a passo, preenchendo os campos da planilha de mapeamento conforme as indicações abaixo.

## Categorização

Aqui será feito o de/para das suas categorias na VTEX com as usadas pelo Mercado Livre. 

1. __CategoryId:__ é o ID da categoria na VTEX. Você consegue encontrá-lo do lado do nome de cada categoria ao expandir a árvore.
2. __MeliCategoryId:__ é o ID da categoria no Mercado Livre. [Clique aqui](https://assets.ctfassets.net/alneenqid6w5/4IGh23L6buEm8s8IWYwISS/f8f1e862f39f8f0052b1b60a696aadd6/MercadoLivre_CategoriasFixas.xlsx) para fazer o download da planilha em que esses valores estão disponibilizados. Se preferir, acesse esta [API do Mercado Livre](https://api.mercadolibre.com/sites/MLB/categories) para consultar as categorias, que estão sempre atualizadas por lá.

>_`Ex:` você tem a seguinte árvore na __VTEX__:_

>- _Eletrodomésticos (ID=1) > Geladeira (ID=2)_

>_No __Mercado Livre__ a árvore é assim:_

>- _Eletrodomésticos (ID=MLB5726) > Geladeiras e Freezers (ID=MLB1576) > Geladeira (ID=MLB181294)_

>_Então, você preencheria a planilha da seguinte maneira:_


>| CategoryId | MeliCategoryId |
| ---------- | ---------- |
| 2       | MLB181294       |
 

__A VTEX recomenda que o de/para acima seja feito manualmente__. Se você não quiser fazer dessa forma, a integração dá a opção de categorizar automaticamente os seus anúncios através de uma ferramenta do Mercado Livre. Essa ferramenta depende de informações como nome do produto e preço mas, caso ela não consiga processar esses dados corretamente, a categorização do seu produto vai ser feita de maneira errada. 

Para evitar esse problema, será necessário definir uma taxa de confiabilidade na configuração da integração. Ou seja, o produto só será integrado se a taxa retornada pela ferramenta do Mercado Livre estiver acima da que você configurou. 

_`Ex:` a ferramenta do Mercado Livre tenta identificar a categoria dos produtos no momento do envio. Se você configurou uma taxa de confiabilidade de 80% e o retorno quanto à categorização estiver em torno de 70%, seus produtos __não serão integrados__._

## Variação

No Mercado Livre, existem dois tipos de variação: as __obrigatórias__ e as __customizáveis__. 

- Variações obrigatórias

Caso seu produto seja um `Calçado`, `Roupa`, `Bolsa`, `Cinto` ou `Eletrodoméstico`, __será necessário mapear as variações obrigatórias__. O nome delas deve seguir exatamente os valores aceitos pelo marketplace. [Baixe aqui](https://assets.ctfassets.net/alneenqid6w5/5nLnBUVonS8qgWqqeck4MQ/11965d535fbb660d698cd73cc2109df1/Planilha_de_Variac__o__es_do_Mercado_Livre.xlsx) a __Planilha de Variações do Mercado Livre__ para verificar os valores aceitos de acordo com cada tipo de produto.

- Variações customizáveis

São variações adicionais que podem ser criadas de acordo com sua necessidade. Só é possível ter __uma__ variação customizável por anúncio. O nome da variação e seus respectivos valores são de livre escolha.

_`Ex:` você vende celulares que variam de acordo com o tamanho da memória. No Mercado Livre, o anúncio agruparia todos os tamanhos, ficando assim:_

  >_Smartphone X_
  ><br/>_Variação 1 - 32gb_
  ><br/>_Variação 2 - 64gb_

Dadas essas informações, continue o preenchimento da planilha seguindo as orientações abaixo:

1. __Type:__ é o tipo de especificação que será usado e deve ser preenchido com o valor `Variation`. Esse valor define que o tipo da especificação é destinado para diferenciar os SKUs (assim como [campos de SKUs na VTEX](/pt/tutorial/criando-campo-de-sku)).

2. __VtexEspc:__ é o nome do [campo de SKU](/pt/tutorial/criando-campo-de-sku) usado na sua loja na VTEX.
<br/>_`Ex:` campos como "Tamanho", "Cor", "Material" etc._

3. __MeliEspc:__ é o nome da especificação na Planilha de Variações do Mercado Livre, que corresponde ao campo de SKU que você usou no campo `VtexEspc`.
<br/>_`Ex:` se você usou "Cores" na coluna `VtexEspc`, então o nome correspondente no Mercado Livre seria "Cor principal"._

4. __VtexValue:__ nome do valor usado no campo de SKU na VTEX.
<br/>_`Ex:` para uma especificação de "Cor", os valores desse campo seriam as próprias cores usadas na loja, como "Vermelho", "Preto", "Branco" etc._

5. __MeliValue:__ nessa coluna você deve preencher valores aceitos pelo Mercado Livre, correspondentes aos valores usados no campo `VtexValue`. Na Planilha de Variações do Mercado Livre, acesse a aba corresponde ao __seu país__ e busque pelos valores aceitos para cada especificação que você preencheu na coluna `MeliEspc`.
<br/>_`Ex:` se você preencheu o `MeliEspc` com Tamanho e o `VtexValue` com "Pequeno", verá que o valor aceito pelo Mercado Livre é "P"._

<div class="alert alert-warning">
<strong>OBS:</strong> depois que um anúncio é criado pela primeira vez, <strong>não é mais possível alterar suas variações</strong>. Caso queira fazer ajustes como mudar a cor, por exemplo, será necessário finalizar o anúncio no Mercado Livre e depois refazer o mapeamento da planilha.</div>

<div class="alert alert-warning">
<strong>OBS 2:</strong> o Mercado Livre <strong>não permite usar preços diferentes</strong> para cada variação de um anúncio. Por exemplo, uma camisa não pode custar $ 40 para o tamanho "P" e $ 50 para o tamanho "M".</div> 

<div class="alert alert-warning">
<strong>OBS 3:</strong> caso o SKU não tenha uma certa especificação (como cor, por exemplo), você vai precisar cadastrá-la na VTEX antes de completar o processo de integração. Recomendamos que você adicione o atributo que falta como uma especificação de <strong>produto</strong>. Assim, essa informação não será exibida no site.</div>

## Atributos

No Mercado Livre, é possível complementar as informações dos produtos utilizando atributos (equivalente às especificações de produto na VTEX). São dados como informações técnicas, medidas etc.

Será necessário mapear os atributos de acordo com os valores aceitos pelo Mercado Livre. Coloque a URL a seguir no navegador (substituindo a variável `{CategoryId}` pelo ID da categoria do Mercado Livre que você está mapeando) para fazer o download dos atributos e seus respectivos valores aceitos.

```http://portal.vtexcommercestable.com.br/api/meliintegration/category/{CategoryId}/attributes```

_`Ex:` se você está mapeando a categoria "Camisetas" (MLB31447), verá que é possível cadastrar vários atributos. Entre eles `Gênero`, que aceita apenas os valores "Masculino", "Feminino", "Meninas", "Meninos", "Bebês", "Sem gênero". . Qualquer valor diferente não é aceito pelo Mercado Livre._

_`Ex 2:` ainda no caso de "Camisetas" (MLB31447), você vai ver que é possível cadastrar atributos com valores que possuem __Texto Livre__. Ou seja, qualquer valor poderá ser inserido para esses atributos._

Dadas essas informações, o preenchimento da planilha será parecido com o que você fez para Variações no passo anterior, com apenas algumas diferenças. Siga as orientações abaixo:

1. __Type:__ é o tipo de especificação que será usado e deve ser preenchido com `Information`. Esse valor define que o tipo da especificação é destinado para complementar informações sobre os produtos (assim como os [campos de produtos na VTEX](/pt/tutorial/criando-um-campo-de-produto)).

2. __VtexEspc:__ é o nome do [campo de produto](/pt/tutorial/criando-um-campo-de-produto) usado na sua loja na VTEX.
<br/>_`Ex:` campos como "Gênero", "Capacidade total", "Memória interna" etc._

3. __MeliEspc:__ é o nome da especificação correspondente ao campo de produto que você usou no campo `VtexEspc`. Como não há restrição de valores, você deve escrever exatamente o que você quer que apareça como atributo no Mercado Livre. Geralmente, é o mesmo nome usado em `VtexEspc`.
<br/>_`Ex:` se você usou "Capacidade" na coluna `VtexEspc`, então você usaria "Capacidade total" no `MeliEspc`._

4. __VtexValue:__ nome do valor usado no campo de produto na VTEX.
<br/>_`Ex:` para uma especificação de "Memória interna", a planilha indica como valores aceitos __"Unidade de Medida"__. Então, você deve preencher esse campo com os próprios valores da sua na loja, mas sempre especificando a unidade de medida, como "32GB", "64GB", "128GB" etc._

5. __MeliValue:__ é o nome do valor correspondente aos que você usou no campo `VtexEspc`. Como não há restrição de valores, você deve escrever exatamente o que você quer que apareça como atributo no Mercado Livre. Geralmente, é o mesmo nome usado em `VtexValue`.
<br/>_`Ex:` se você preencheu o `VtexValue` com "32GB", então você também usaria "32GB" no `MeliValue`._


## Exemplos

Abaixo estão alguns exemplos de como montar a planilha

- Planilha de exemplo para `Roupas`:

Neste exemplo, estamos categorizando uma __camisa__. Como é uma roupa, é necessário seguir os valores aceitos da Planilha de Variações do Mercado Livre.

Na VTEX, os produtos dessa categoria possuem duas cores possíveis: vermelho e gelo. Como não existe a cor "Gelo" no Mercado Livre, deve-se escolher a cor disponível mais próxima, que é "Branco". Repare que na VTEX o nome dos campos é "Cor" e "Tamanhos", mas o Mercado Livre os chama de "Cor principal" e "Tamanho", respectivamente.

Sob o aspecto de Atributos, essa categoria está segmentada na VTEX entre os departamentos Masculino e Feminino. Então, foi necessário fazer o de/para com o nome do campo de acordo com a planilha encontrada no link abaixo:

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLB103664/attributes`

Na VTEX é "Departamento" mas no Mercado Livre é "Gênero". Dessa forma, será criado um atributo para mostrar essa informação no anúncio.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 5 | MLB103664 | Variation | Cor | Cor Principal | Gelo | Branco |
| 5 | MLB103664 | Variation | Cor | Cor Principal | Vermelho | Vermelho|
| 5 | MLB103664 | Variation | Tamanhos | Tamanho | Pequeno | P |
| 5 | MLB103664 | Variation | Tamanhos | Tamanho | Grande | G |
| 5 | MLB103664 | Information | Departamento | Gênero | Masculino | Masculino |
| 5 | MLB103664 | Information | Departamento | Gênero | Feminino | Feminino|


- Planilha de exemplo para `Eletrodomésticos`:

Neste exemplo, estamos categorizando uma __geladeira__ (categoria MLB181294) e um __liquidificador__ (categoria MLB73055). Como são eletrodomésticos, é necessário seguir os valores aceitos da Planilha de Variações do Mercado Livre. Na VTEX, a geladeira dessa categoria é bivolt. Portanto, na planilha deve ser usado "110V/220V (Bivolt)", já que é o valor aceito pelo Mercado Livre. No caso do liquidificador, o de/para ficou igual porque os valores na VTEX são 110V e 220V, assim como os aceitos pelo Mercado Livre.

Sob o aspecto de Atributos, a categoria da __geladeira__ tem o atributo de "Capacidade" com os valores possíveis 573L e 394L. Então, foi necessário fazer o de/para com o nome do campo de acordo com a planilha encontrada no link abaixo:

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLB181294/attributes`

Na VTEX é "Capacidade", mas no Mercado Livre é "Capacidade total". 

Já na categoria dos __liquidificadores__, a "Potência" será exibida como atributo. O de/para ficou igual porque, tanto na VTEX como no Mercado Livre, o atributo "Potência" tem o mesmo nome.

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/MLB73055/attributes`

Dessa forma, será criado um atributo para mostrar essas informações nos anúncios.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 27 | MLB181294 | Variation | Voltagem | Voltagem | Bivolt | 110V/220V (Bivolt) |
| 27 | MLB181294 | Information | Capacidade | Capacidade total | 573L |  573L|
| 27 | MLB181294 | Information | Capacidade | Capacidade total | 394L |394L|
| 54 | MLB73055 | Variation | Voltagem | Voltagem | 110V | 110V |
| 54 | MLB73055 | Variation | Voltagem | Voltagem | 220V | 220V |
| 54 | MLB73055 | Information | Potência | Potência | 1200W | 1200W |
| 54 | MLB73055 | Information | Potência | Potência | 1000W | 1000W |


- Planilha de exemplo com `variações customizáveis`:

Neste exemplo, estamos categorizando um __pijama__. Como é uma roupa, é necessário seguir os valores aceitos na Planilha de Variações do Mercado Livre, assim como no primeiro exemplo. Veja que, nesse caso, adicionamos "Material" como uma variação customizável. Então, você pode escolher qualquer valor que quiser. Além de variar por cor e tamanho, os anúncios dessa categoria também vão variar de acordo com o material.

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 12 | MLB108801 | Variation | Cor | Cor principal | Azul Marinho | Azul |
| 12 | MLB108801 | Variation | Cor | Cor principal | Verde água |  Verde claro|
| 12 | MLB108801 | Variation | Tamanho | Tamanho | Pequeno | P |
| 12 | MLB108801 | Variation | Tamanho | Tamanho | Grande | G |
| 12 | MLB108801 | Variation | Material | Material | Algodão |Algodão|
| 12 | MLB108801 | Variation | Material | Material | Seda | Seda |

## Fazendo o upload

Depois de preencher a planilha, acesse __Integrações__ no menu do Admin:

1. Clique em __Configurações__.
2. Busque pela caixa do Mercado Livre e clique no __ícone de engrenagem__.
3. Em seguida, clique em __Upload de Mapeamento__.
4. Escolha a planilha com os dados e clique em __Enviar Arquivo__.

Com o upload concluído, a integração envia automaticamente todos os produtos das categorias usadas na planilha para o Mercado Livre.

<div class="alert alert-warning">
<strong>OBS:</strong> os produtos só serão enviados ao Mercado Livre caso a autenticação da integração já tenha sido realizada. Se você ainda não fez isso, siga o passo a passo <a href="https://help.vtex.com/pt/tutorial/integrando-com-mercado-livre#autorizar-integracao-no-painel-da-vtex">neste artigo</a>.
</div>
