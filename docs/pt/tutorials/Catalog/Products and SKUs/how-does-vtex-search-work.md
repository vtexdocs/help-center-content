---
title: 'Como funciona a busca da VTEX'
id: tutorials_542
status: PUBLISHED
createdAt: 2017-04-27T22:02:07.746Z
updatedAt: 2023-03-29T15:35:26.589Z
publishedAt: 2023-03-29T15:35:26.589Z
firstPublishedAt: 2017-04-27T23:03:37.560Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-funciona-a-busca-da-vtex
locale: pt
legacySlug: como-funciona-a-busca-da-vtex
subcategoryId: pwxWmUu7T222QyuGogs68
---

Este artigo tem o objetivo de descrever o funcionamento do sistema de busca da VTEX.

>⚠️ A VTEX apresenta duas opções da busca - a busca VTEX e o VTEX Intelligent Search. Esse artigo se refere à busca VTEX. Para saber mais sobre o aplicativo VTEX Intelligent Search acesse <a href = "https://help.vtex.com/pt/tracks/vtex-intelligent-search--19wrbB7nEQcmwzDPl1l4Cb">nossa track</a>.

## Como o buscador da VTEX prioriza a exibição de produtos

O buscador da VTEX conta com um algoritmo inteligente que, a partir do termo buscado, identifica qual é o melhor resultado para apresentar ao usuário.

Ou seja, sempre é apresentado o resultado que mais gerará conversão de venda. É claro que o sucesso desse resultado depende, exclusivamente, do cadastro do catálogo (marca, departamento, categoria, produto, especificação etc).

De acordo com o termo buscado, o sistema pode renderizar os resultados abaixo, nesta ordem de prioridade:
1. Landing Page
2. Marca
3. Departamento
4. Busca por termo (palavra-chave)

### 1. Landing Page

Se o termo buscado corresponder exatamente ao nome de uma pasta configurada no CMS (ou seja, a uma landing page), essa pasta será renderizada.

>⚠️ Para uma pasta ser buscável ela deve possuir um layout. Mesmo que a pesquisa seja por uma pasta filha, a pai também requer um layout.

### 2. Marca

Se o termo buscado corresponder exatamente ao nome ou palavra substituta de alguma marca cadastrada, o sistema renderiza apenas os produtos dessa marca. Se o sistema identificar duas ou mais marcas com a mesma **palavra substituta** (o que é considerado uma inconsistência de cadastro), o sistema renderiza apenas a primeira encontrada (e seus produtos).

O resultado desta página será uma página de marca. Olhando pelo código fonte da página: `<!-- CommerceContext.Current.VirtualFolder.Name: marca -->`

### 3. Departamento

Se o termo buscado corresponder exatamente ao nome ou palavra substituta de algum departamento cadastrado, o sistema renderiza apenas os produtos desse departamento. Se o sistema identificar dois ou mais departamentos com a mesma **palavra substituta** (o que é considerado uma inconsistência de cadastro), o sistema renderiza apenas a primeiro departamento encontrado (e seus produtos).

O resultado dessa página será uma página de Departamento. Você pode conferir qual página veio como resultado consultando o código-fonte. Neste caso, o seguinte comentário deve estar no código da página: `<!-- CommerceContext.Current.VirtualFolder.Name: @departamento@ -->`

### 4. Busca por termo (palavra-chave)

Se o sistema não identifica uma Landing Page, uma Marca ou um Departamento correspondente ao termo buscado, ele aplica uma busca por termo (palavra-chave).

O resultado desta página será uma página de busca. Você pode conferir qual página veio como resultado consultando o código-fonte. Neste caso, o seguinte comentário deve estar no código da página: `<!-- CommerceContext.Current.VirtualFolder.Name: Busca -->`

Quando a busca é por termo, o buscador aplica a consulta no __indexador__, que é o responsável pelo algoritmo de busca por termo. 

#### Pontuação

Esse algoritmo usa o conceito de pontuação para priorizar e ordenar os produtos.
A cada consulta realizada, o indexador pontua os produtos de acordo com o termo consultado. Alguns campos da base (com pesos diferentes) são considerados para o cálculo dessa pontuação.

A vitrine é montada com base nessa pontuação, em ordem decrescente, ou seja, o produto mais pontuado será o primeiro a ser exibido; e o menos pontuado, o último.

## Como funciona a busca

Para entender a busca da VTEX, inicialmente é preciso saber como funciona o indexador e o seu processo de atualização.

### Indexador do catálogo

O indexador do catálogo é uma base de dados escalável de acesso rápido, com algorítimos configuráveis de priorização de resultado. Ele está posicionado entre o banco de dados convencional e o usuário. Veja o esquema abaixo:

![](//images.contentful.com/alneenqid6w5/4PSR97lU5y2iac2QkoUAKg/10b9097341faf0de317fa6984104da95/indexacao.png)

No indexador encontramos todas as informações referentes ao catálogo de produtos (produtos, SKUs, marcas, departamentos, categorias). O buscador utiliza essas informações para localizar os produtos e exibi-los nas vitrines e resultados de busca. Portanto, somente os produtos indexados podem ser encontrados pela busca.

### Processo de atualização (Indexação)

Alterações nas características de qualquer produto (dados principais, preço, estoque, coleção etc.) geram atualizações do indexador. Ou seja, sempre que um produto é alterado ele é enviado para o final da fila de indexação.

Quando essa fila de indexação for consumida, as alterações aplicadas ficarão disponíveis para exibição no site. O processo de indexação é seguro e conta com regras de repescagem. 

Ou seja, sempre que, por alguma razão, um item não é indexado na primeira tentativa, o sistema realiza outras tentativas.

### Campos e pesos

Estes são os campos usados pelo algoritmo de busca e seus pesos para pontuação de produtos:
- __Nome do Produto__: 2.8
- __Primeiro nome do produto__: 2.5
- __Primeiro e segundo nome do produto__: 1.2
- __Nome complemento do produto__: 1.0
- __Palavras substitutas (produto e marca)__: 0.7
- __Especificações de produto (apenas para campos dos tipos `texto indexado` e `texto longo indexado`)__: 0.5

Por exemplo, considerando o seguinte indexador:

| Nome do produto     | Nome complemento do produto	    | Palavras substitutas     | Especificações de produto     |
| ---------- | ---------- | ---------- | ---------- |
| Bola de futebol       | Society       | bola de futibol, bola de football       | Branca       |
| Bola       | Society       | soçaite, sossaite       | Bola de futebol       |
| Chuteira de futebol       | Campo       | Xuteira de futebol, Chuteira de football       | Branca       |

#### Termo buscado 1: Bola de futebol

Resultado:
1. **Bola de futebol** (Melhor pontuado pois o termo corresponde exatamente ao nome do produto)
2. **Bola** (Segundo melhor pontuado pois o termo corresponde ao valor de uma especificação)
3. **Chuteira de futebol** (Terceiro melhor pontuado pois parte do termo corresponde a parte do nome do produto)

#### Termo buscado 2: Bola branca

Resultado:
1. **Bola** (Melhor pontuado pois parte do termo corresponde exatamente ao nome do produto)
2. **Bola de futebol** (Segundo melhor pontuado pois parte do termo buscado corresponde a parte do nome do produto)
3. **Chuteira de futebol** (Terceiro melhor pontuado pois parte do termo corresponde a uma especificação)

A utilização de __palavras substitutas__, apesar de ter um peso baixo para a pontuação do indexador, é um recurso extremamente importante. Com esse recurso é possível atingir usuários que realizam buscas por termos gramaticalmente errados mas com a mesma semântica.

## Saiba mais
 - [Como funciona o campo Score](https://help.vtex.com/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae) 

