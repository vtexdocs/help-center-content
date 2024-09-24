---
title: 'Comportamento da busca'
id: B9o3JbV6utAinBJ1ETujs
status: PUBLISHED
createdAt: 2024-06-27T17:30:43.356Z
updatedAt: 2024-09-19T12:59:01.022Z
publishedAt: 2024-09-19T12:59:01.022Z
firstPublishedAt: 2024-06-27T17:33:21.153Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: comportamento-da-busca
locale: pt
legacySlug: comportamento-da-busca
subcategoryId: 30Kdgc6wJkMWgcXLB8mGr7
---

O Motor de Busca é o centro da inteligência do VTEX Intelligent Search. Ele interpreta o termo buscado e apresenta a listagem filtrada e ordenada de produtos. Essa ferramenta possibilita uma pesquisa mais objetiva, por meio de indexação e tratamento dos dados do catálogo.

Essa funcionalidade é padrão do VTEX Intelligent Search e atende a maioria dos cenários. Contudo, o Motor de Busca também apresenta alguns ajustes para que o resultado da busca seja aperfeiçoado. Neste guia, apresentamos:

* [Comportamento padrão da busca](#comportamento-padrão-da-busca)
* [Configurações para o comportamento da busca](#configuracoes-para-o-comportamento-da-busca)
* [Formas alternativas de busca](#formas-alternativas-de-busca)

## Comportamento padrão da busca

A seguir, apresentamos características do comportamento padrão do Intelligent Search.

### Autocorreção

O usuário pode cometer erros ortográficos ao realizar uma busca. É função da ferramenta interpretar esses erros e apresentar como resultados produtos que se aproximem da pesquisa realizada.

Para isso, o Motor de Busca tenta corrigir o que o usuário digitou de acordo com os itens registrados no Catálogo. Para cada termo pesquisado, uma quantidade específica de caracteres errados é permitida. Essa quantidade de erros aceitos é chamada de _fuzzy_.

O _fuzzy_ varia de acordo com o tamanho do termo pesquisado. Por padrão, caso o termo tenha de 3 a 5 caracteres, o _fuzzy_ aplicado será 1, ou seja, é permitido errar 1 caractere. Para termos de 6 caracteres ou mais, o _fuzzy_ aplicado será 2.

Os erros previstos considerando *fuzzy* = 1 são:

* Inserir 1 caractere a mais.
* Remover 1 caractere.
* Trocar 1 caractere.
* Trocar 2 caracteres que estiverem lado a lado.

Exemplo: suponha que um cliente queira pesquisar pelo termo `bola`. Seguindo a configuração padrão (*fuzzy* = 1 para termos de 3 a 5 caracteres), o Motor de Busca vai apresentar o resultado `bola` para qualquer busca que contenha os erros aceitos, como:

* `bolha` (inserir 1 caractere a mais)
* `boa` (remover 1 caractere)
* `bora` (trocar 1 caractere)
* `obla` (trocar 2 caracteres que ficam um do lado do outro entre eles)

>ℹ️ Espaços em branco não são considerados no *fuzzy*, então `base ball` não será corrigido para `baseball`, por exemplo. Recomendamos o uso de [sinônimos](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1pxAWPEglBey1UFdvcetZV) para esses casos.

### Resultado mínimo

A quantidade mínima de resultados exibidos a partir de qualquer busca realizada é 1. Em qualquer busca, se o número mínimo de resultados não for atingido, a [autocorreção](#autocorrecao) é aplicada.

Em uma busca com múltiplos termos, ocorre a lógica a seguir:

1. Se o resultado mínimo não for atingido mesmo com a autocorreção inicial, a busca passa a incluir resultados mais abrangentes, que apresentam qualquer um dos termos pesquisados. Por exemplo, quando um usuário pesquisa por "tenis nike", mas o catálogo não possui nenhum produto com esse nome, a busca pode apresentar como resultado um produto com apenas o termo "tenis" no nome.
2. Se a busca abrangente não apresentar o resultado mínimo, ela será repetida aplicando a autocorreção novamente a cada um dos termos.

>⚠️ Buscas com múltiplos termos são mais eficientes quando o cliente ordena os resultados por relevância, já que elas podem ter um número maior de resultados além do contexto que foi buscado. Na ordenação por relevância, ainda priorizam-se os itens relacionados aos múltiplos termos. Porém, ao aplicar outras ordenações, como preço ou mais vendidos, a ordem dos resultados depende desses valores numéricos e não necessariamente prioriza itens que contêm mais palavras dos termos de busca.

### Limite de paginação

O VTEX Intelligent Search limita o resultado de busca a 50 páginas. Esse limite incentiva o uso de filtros, permitindo uma navegação mais relevante e focada para o usuário.

## Configurações para o comportamento da busca

Há um conjunto de configurações que alteram a listagem e a ordenação de produtos exibidos no resultado de busca. Nas seções a seguir, você verá as principais definições que afetam o comportamento da busca.

### Definição de campos pesquisáveis

Determina quais informações de produto são pesquisáveis. A partir da configuração, toda pesquisa realizada na barra de busca verifica o conteúdo desses campos para gerar resultados de busca. Confira a tabela a seguir para entender quais são as informações pesquisáveis por padrão e as demais opções de configuração:

| Informações | Configuração |
| - | - |
| Nome do produto, marca, ID do produto (`ProductID`), código de referência do produto (`ProductRefID`), ID do SKU (`SKUID`), código de referência do SKU (`SKURefID`) e EAN | Essas informações são pesquisáveis por **padrão** no VTEX Intelligent Search. Para remover alguma delas, entre em contato com o nosso [Suporte](https://help.vtex.com/support?/cultureInfo=en-us). |
| Especificações de produto e de SKU | Para incluir as especificações desejadas como campos pesquisáveis, é preciso configurar a opção **Especificações pesquisáveis** no Admin VTEX, em **Intelligent Search** > **Configurações da busca**.<br /><br /> Por exemplo, se uma camisa não tiver a cor no nome do produto ou do SKU, por padrão, o Intelligent Search não identifica esse atributo em uma pesquisa por "camisa azul", trazendo como resultado camisas de diversas cores. Contudo, se a especificação de cor estiver configurada como pesquisável, a busca consegue trazer camisas azuis nas primeiras posições.<br /><br /> Para mais detalhes sobre a definição de especificações pesquisáveis, acesse o guia [Configurações da busca](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5t75L6lYNwix93l41s1Yrx#configuracoes-gerais). Saiba mais sobre especificações em [Especificações de produto e de SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2NQoBv8m4Yz3oQaLgDRagP). |
| Código do fabricante (`ManufactureID`) | Entre em contato com o nosso [Suporte](https://help.vtex.com/support?/cultureInfo=en-us) para definir esse campo como pesquisável. | 

_Exemplo_: foi configurado que a especificação "cor" é pesquisável e o produto está cadastrado com o nome "Tênis Nike Total 90" e com a cor "preta". Se um cliente pesquisar por "Tenis Preto", a ferramenta retornará produtos que possuem o termo "tenis" e cor "preta" no topo do resultado de busca.

É possível buscar por caracteres especiais (`-` e `/`) para encontrar um produto.

>⚠️ A escolha dos campos de busca afeta as possibilidades das [Regras de merchandising](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/5tBSYXb9EIdePa0MWTnFd0), pois apenas campos pesquisáveis podem ser utilizados para configurar as regras. Por exemplo, ao definir somente o campo **`SKUID` **como pesquisável, não será possível promover um **`ProductID` **ou um **`ProductRefID` **utilizando Regras de merchandising.

### Definição e ordenação de campos de filtro

Em todos os resultados de busca são apresentados filtros que podem ser selecionados pelo usuário. Por padrão, alguns filtros são pré-definidos, mas é possível criar outros de acordo com a necessidade da loja. Outro ponto customizável é a ordem de visualização. Exemplo: em uma lista de resultados de busca, podem existir os filtros de Preço, Categorias e Marca.

### Configuração de relevância

A relevância é a funcionalidade que define a ordem dos produtos no resultado de busca. Essa configuração permite atribuir pesos e priorizar determinados critérios utilizados pelo Motor de Busca, como popularidade, data de lançamento do produto e participação em promoções, por exemplo. A relevância de um produto é composta pela combinação dos pesos e prioridades definidos por cada lojista.

_Exemplo_: um lojista configurou que o critério Promoção possui uma relevância maior que outros critérios. Dessa forma, quando o cliente pesquisa pelo termo “camiseta” na busca interna da loja, as camisetas incluídas em promoções tendem a aparecer primeiro nos resultados, dependendo dos pesos atribuídos aos outros critérios.

Para mais informações sobre como personalizar a ordenação dos resultados de acordo com as necessidades da sua loja, leia o artigo [Configuração de relevância](https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb/1qlObWIib6KqgrfX1FCOXS).

>ℹ️ Ao utilizar o Intelligent Search, existem duas opções que definirão a ordem de suas coleções. Usando o comando `map=productClusterIds`, estará definindo que a ordem de suas coleções será a que foi pré definida pelo lojista, com seu próprio critério de relevância. Se você optar por usar `productClusterNames`, definirá que deseja que suas coleções sigam os padrões de relevância do próprio Intelligent Search.

## Formas alternativas de busca

É possível buscar pelo ID de um ou mais itens na barra de busca ou adicionando parâmetros de busca (*query*) na URL da loja.

### Match parcial

Ao digitar somente os primeiros dígitos exatos do ID do produto (`ProductID`), código de referência do produto (`ProductRefID`), ID do SKU (`SKUID`), código de referência do SKU (`SKURefID`) ou EAN na barra de busca, o Intelligent Search fará o match parcial com produtos e SKUs ativos na loja, incluindo-os nos resultados da busca.

Por exemplo, se o ID do produto for `123456789` e a busca for `123`, esse produto aparecerá entre os resultados. Porém, se a busca for `234`, sem algum dos primeiros dígitos do ID, esse produto não aparecerá.

### URL

Para buscar a partir da URL da sua loja, adicione parâmetros de busca (*query*) no final da URL da loja, respeitando uma das estruturas a seguir:

- Exemplo para pesquisa de um item: `[endereço da conta]/[tipo do id]:[id_1]?q=[tipo do id]&map=ft`
- Exemplo para pesquisa de lista de itens: `[endereço da conta]/[tipo do id]:[id_1];[id_2];[id_3]?q=[tipo do id]:[id_1];[id_2];[id_3]&map=ft`

Os possíveis tipos de valores para o campo tipo do ID são `product.id`, `sku.id`,`sku.ean`, `sku.reference` ou `id` (ProductID, ProductRefID, SKUID, SKURefID e EAN). Importante destacar que todos os IDs buscados devem pertencer ao mesmo tipo. 

  - **Busca por SKU ID:** `?q=sku.id:<id>` ou `?q=sku:<id>`
  - **Busca por EAN:** `?q=sku.ean:<id> `
  - **Busca por reference ID:** `?q=sku.reference:<id>` 
  - **Busca por slug:** `?q=product.link:<link>` 
  - **Busca por product ID:** `?q=product:<id>` ou `?q=product.id:<id>`
