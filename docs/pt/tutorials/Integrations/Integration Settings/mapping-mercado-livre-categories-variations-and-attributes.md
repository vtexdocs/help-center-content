---
title: 'Mapeamento de categorias, variações e atributos do Mercado Livre'
id: 4xNFUZZmboCSUVdLCFo6eA
status: ARCHIVED
createdAt: 2021-09-01T20:12:18.080Z
updatedAt: 2022-01-14T18:32:27.882Z
publishedAt: 
firstPublishedAt: 2021-09-02T19:30:32.642Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: mapeamento-de-categorias-variacoes-e-atributos-do-mercado-libre
locale: pt
legacySlug: mapeamento-de-categorias-variacoes-e-atributos-do-mercado-libre
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

>ℹ️ Se você enviará seus produtos para o Mercado Livre pela primeira vez, recomendamos usar a [nova interface de Mapeamento de Categorias.](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/5XNeiye4rS4oao2MueSUeA)

Depois de fazer as [configurações iniciais para a integração com o Mercado Livre](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/15NZiQstCET8zyQUIa7nhw), é preciso categorizar e enviar as variações e atributos dos produtos e enviá-las para o marketplace. O envio dessas informações é feito por meio do upload da planilha de mapeamento, que faz a equivalência entre as categorias, variações e atributos da sua loja e os padrões adotados pelo Mercado Livre.

Esta funcionalidade agiliza o processo de catalogação dos seus produtos no Mercado Livre, permitindo que fiquem disponíveis para venda no marketplace em menos tempo.

A ferramenta do Mercado Livre tenta identificar a categoria dos produtos no momento do envio. Se você [configurou uma taxa de confiabilidade](https://help.vtex.com/pt/tracks/configurar-integracao-do-mercado-livre--2YfvI3Jxe0CGIKoWIGQEIq/4YvYdgICMosaEgISOYogsi#configuracoes-basicas) abaixo de 80%, seus produtos poderão não ser integrados. 

## Entendendo a planilha de mapeamento

Antes de começar o mapeamento, é necessário baixar a [Planilha de Mapeamento do Mercado Livre](https://drive.google.com/uc?export=download&id=10RCqLbKs0YXTJR-M5Iv3lFulZ5_zCAlz) no formato `xlsx`. Objetivo da planilha é indicar para a integração a equivalência entre os padrões adotados pela sua loja e o Mercado Livre. 

O mapeamento só será feito uma vez para cada categoria. Isso significa que já tendo feito o mapeamento uma vez, os novos produtos que forem criados vão ser integrados diretamente na categoria equivalente, com suas respectivas variações e atributos.

A mesma planilha será usada para realizar três macro etapas: categorização, variações e atributos. As etapas variações e atributos possuem preenchimento semelhantes, a diferença entre elas é que enquanto a variação são especificações do SKU da sua loja, os atributos são especificações do produto. 

Siga o procedimento a seguir, preenchendo os campos da planilha de mapeamento conforme as indicações abaixo:

## Categorização

A primeira etapa de preenchimento da planilha de mapeamento é dividida em duas colunas chamadas CategoryID e MeliCategoryID, que possuem a finalidade de fazer a correspondência entre as categorias da sua loja e as categorias do Mercado Livre:

1. **CategoryId**: equivalente ao ID da categoria na sua loja VTEX.
2. **MeliCategoryId**: equivalente ao ID da categoria no Mercado Livre. 

Para descobrir a **CategoryId** do produto na sua loja, acesse no admin *Produtos > Catálogo > Categorias*. 

Para identificar a **MeliCategoryID**, acesse a [API do Mercado Livre](https://api.mercadolibre.com/sites/MLB/categories) para consultar as categorias e suas respectivas IDs. Dentro das categorias, você encontrará as subcategorias, utilize os IDs das subcategorias para preencher sua planilha.

Para outros países, acesse as APIs do Mercado Livre correspondentes para consultar os IDs das categorias:

<br/>- [Argentina](https://api.mercadolibre.com/sites/MLA/categories)
<br/>- [México](https://api.mercadolibre.com/sites/MLM/categories)
<br/>- [Colômbia](https://api.mercadolibre.com/sites/MCO/categories)
<br/>- [Chile](https://api.mercadolibre.com/sites/MLC/categories)

#### Exemplo

Você tem a seguinte árvore na VTEX:

- Roupas  (ID=2) > Camisetas (ID=3)

No Mercado Livre a seguinte árvore:

- Calçados, Roupas e Bolsas (ID=MLB1430) > Camiseta (ID=MLB31447)

Dessa forma, sua planilha ficará preenchida assim:

| CategoryId | MeliCategoryId |
| ---------- | ---------- |
| 3 | MLB31447 |

## Variação

A segunda etapa de preenchimento da planilha de mapeamento inclui fazer a correspondência entre as especificações de SKU da sua loja, chamados de variações no marketplace. Ambos são nomes para características usadas para diferenciar variantes de um mesmo produto. No Mercado Livre, existem dois tipos de variação: as obrigatórias e as customizáveis.

### Variações obrigatórias

As variações obrigatórias são atributos indispensáveis para o mapeamento de determinadas categorias do produto. Caso ele seja um `Calçado`, `Roupa`, `Bolsa`, `Cinto` ou `Eletrodoméstico`, será necessário mapear as variações obrigatórias. 

O nome delas deve seguir exatamente os valores aceitos pelo Mercado Livre. [Baixe a Planilha de Variações do Mercado Livre](https://assets.ctfassets.net/alneenqid6w5/5nLnBUVonS8qgWqqeck4MQ/f20169fb8611da52b8c7268124a6d86b/Planilha_de_Variacoes_do_Mercado_Livre.xlsx) para verificar os valores aceitos de acordo com cada tipo de produto.

### Variações customizáveis

São variações adicionais que podem ser criadas de acordo com sua necessidade. Só é possível ter uma variação customizável por produto. O nome da variação e seus respectivos valores são de livre escolha.

<div class="alert alert-info" role="alert">Caso o SKU não tenha especificação (cor, por exemplo), será necessário <a href="https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/4fcdmJzQ6QYA9zWf3bLWin">cadastrá-la na VTEX</a> antes de completar o processo de integração. É recomendável que seja adicionado o tributo que falta como uma especificação de produto.</div> 

<div class="alert alert-warning" role="alert">O Mercado Livre não permite usar preços diferentes para cada variação de um anúncio, o preço dos SKUs precisam ser rigorosamente os mesmos. Para modificar o preço do seu produto, acesse Produtos > Preços > Lista de preços.</div>

## Atributos

A terceira etapa de preenchimento da planilha de mapeamento inclui fazer a correspondência entre as especificações dos produtos da sua loja e os atributos do Mercado Livre. Ambos são nomes para características usadas para descrever um produto. 

É possível complementar as informações dos produtos utilizando atributos (equivalente às especificações de produto na VTEX). Para isso, será necessário mapear os atributos de acordo com os valores aceitos pelo Mercado Livre. 

Para descobrir as especificações do seu produto no Mercado Livre, copie a URL a seguir no seu navegador e substitua a variável `{CategoryId}` pelo ID da categoria do Mercado Livre que você está mapeando para fazer o download da planilha dos atributos e seus respectivos valores aceitos.

`http://portal.vtexcommercestable.com.br/api/meliintegration/category/{CategoryId}/attributes`

<div class="alert alert-info" role="alert">Caso esteja mapeando a categoria “Camisetas” (MLB31447), você perceberá que é possível cadastrar vários atributos, entre eles “Gênero”, que aceita apenas os valores “Masculino”, “Feminino”, “Meninas”, “Meninos”, “Bebês”, “Sem gênero”. Qualquer valor diferente não será aceito pelo Mercado Livre. Perceba também que é possível cadastrar atributos com valores que possuem <strong>Texto Livre</strong>, ou seja, qualquer valor poderá ser inserido para esses atributos.</div>

## Preenchendo as variações e atributos na planilha de mapeamento 

Para preencher as variações e atributos na planilha, utilizaremos as colunas Type, VtexEspc, MeliEspec, VtexValue e MeliValue. Cada linha da planilha, poderá ser preenchida com uma variação do SKU ou atributo do produto. 

### Type

Preencha com o valor `Variation` se for uma variação. Caso seja um atributo, utilize o valor `Information`. 

### VtexEspc

Preencha com o nome do [campo de SKU](https://help.vtex.com/pt/tutorial/criando-campo-de-sku) se for uma variação, ou com o [nome do campo de produto](https://help.vtex.com/pt/tutorial/criando-um-campo-de-produto) se for um atributo.

`Ex:`

1. Variação: campos como "Tamanho", "Cor", "Material" etc.
2. Atribuição: campos como "Gênero", "Capacidade total", "Memória interna" etc.

### MeliEspc

Preencha com o nome da especificação na [Planilha de Variações do Mercado Livre](https://assets.ctfassets.net/alneenqid6w5/5nLnBUVonS8qgWqqeck4MQ/f20169fb8611da52b8c7268124a6d86b/Planilha_de_Variacoes_do_Mercado_Livre.xlsx), que corresponde ao **campo de SKU** que você usou no campo `VtexEspc`, ou o nome da especificação correspondente ao **campo de produto** que você usou no mesmo campo, tomando como base a planilha de atributos.

`Ex:`

1. Se utilizou "Cores" na coluna `VtexEspc` como variação, então o nome correspondente no Mercado Livre seria "Cor". 
2. Caso tenha usado "Capacidade" na coluna `VtexEspc` como atributo, então você usará "Capacidade total" no `MeliEspc`.

### VtexValue

Sendo variação, preencha com o nome do valor usado no campo de SKU na VTEX. Se tratando de atributo, preencha com o nome do valor usado no campo de produto na VTEX.

`Ex:`

1. Para uma especificação de "Cor", os valores desse campo seriam as próprias cores usadas na loja, como "Vermelho", "Preto", "Branco" etc. 
2. Para uma especificação de "Memória interna", a planilha indica como valores aceitos "Unidade de Medida". Então, preencha esse campo com os próprios valores da sua na loja, mas sempre especificando a unidade de medida, como "32GB", "64GB", "128GB" etc.

### MeliValue

Se tratando de uma variação, você preencha com valores correspondentes aos valores usados no campo `VtexValue`. Na Planilha de Variações do Mercado Livre, acesse a aba correspondente ao seu país e busque pelos valores aceitos para cada especificação que você preencheu na coluna `MeliEspc`. 

Sendo um atributo, preencha com o nome do valor correspondente aos que você usou no campo `VtexEspc`, tomando como base a planilha de atributos. Caso o campo seja do tipo Texto Livre, você deve escrever exatamente o que você quer que apareça como atributo no Mercado Livre.

`Ex:`

1. Você preencheu o `MeliEspc` com Tamanho e o `VtexValue` com "Pequeno", verá que o valor aceito pelo Mercado Livre é "P". 
2. Se você preencheu o `VtexValue` com "32GB", então você também usaria "32GB" no `MeliValue`.

<div class="alert alert-warning" role="alert">O mapeamento de categorias, variações e atributos do Mercado Livre é case sensitive, ou seja, é sensível para o uso de letras maiúsculas e minúsculas. Por isso, recomendamos preencher sua planilha de mapeamento exatamente como os exemplos a seguir.</div>

#### Exemplos

Você pretende vender uma camiseta, será necessário mapear as variações obrigatórias e um atributo. As variações obrigatórias para a categoria Roupa são Tamanho e Cor, um atributo possível para o produto seria os Gêneros. Dessa forma, a planilha será preenchida assim:

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 3 | MLB31447 | Variation | Cores | Cor | Gelo | Branco |
| 3 | MLB31447 | Variation | Cores | Cor | Vermelho | Vermelho |
| 3 | MLB31447 | Variation | Tamanhos | Tamanho | Pequeno | P |
| 3 | MLB31447 | Variation | Tamanhos | Tamanho | Grande | G |
| 3 | MLB31447 | Information | Departamento | Gênero | Masculino | Masculino |
| 3 | MLB31447 | Information | Departamento | Gênero | Feminino | Feminino|

Você vende celulares que variam de acordo com o tamanho da memória. No Mercado Livre, o anúncio agruparia todos os tamanhos:

| CategoryId | MeliCategoryId | Type | VtexEspc | MeliEspc | VtexValue | MeliValue |
| ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 28 | MLB1055 | Variation | Voltagem | Voltagem | 110V | 110V |
| 28 | MLB1055 | Variation | Voltagem | Voltagem | 220V | 220V |
| 28 | MLB1055 | Information | Memória |  Memória interna | 32GB | 32GB |
| 28 | MLB1055 | Information | Memória | Memória interna | 64GB | 64GB |

## Fazendo o upload

Ao concluir as etapas de preenchimento da planilha de mapeamento, você deve seguir os passos abaixo para fazer o upload da planilha:

1. Acesse o Admin.
2. No módulo Marketplace, clique em Integrações.
3. Selecione a opção Configurações.
4. Na integração Mercado Livre, clique na engrenagem<img class="shadow-4" src="https://images.ctfassets.net/alneenqid6w5/39oIVAfBAL5iIPqR5mrg2y/f1943060e88dd71804dcc7844a71c1cd/engrenagem.JPG" />.
5. Escolha a opção **Upload do mapeamento**.
6. Selecione a opção **Escolher um arquivo**.
7. Agora, selecione a planilha de mapeamento de categorias, atributos e variações do Mercado Livre.
8. Clique em **Enviar arquivo**.

Com o upload concluído, a integração envia automaticamente todos os produtos das categorias usadas na planilha para o Mercado Livre.

>⚠️ Caso, após subir uma planilha, você tente fazer upload de outra, saiba que a planilha nova irá substituir a antiga. Por isso, recomendamos fazer upload da nova planilha, contendo os dados antigos e os novos.
