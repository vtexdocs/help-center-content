---
title: 'Como funcionam as consultas no Master Data'
id: tutorials_4629
status: DRAFT
createdAt: 2017-04-27T21:49:52.453Z
updatedAt: 2022-08-09T22:18:07.598Z
publishedAt: 
firstPublishedAt: 2017-04-27T23:11:17.103Z
contentType: tutorial
productTeam: Master Data
author: authors_64
slug: entendendo-o-funcionamento-das-consultas-no-master-data
locale: pt
legacySlug: entendendo-o-funcionamento-das-consultas-no-master-data
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

A extensibilidade do VTEX Master Data permite configurar campos como **Buscável** ou **Filtro**. Mas o que querem dizer essas configurações? O objetivo deste artigo é responder a essa pergunta.

Primeiro, vamos explicar o fluxo das consultas. Existem dois tipos:

1. Consulta pelo ID.
2. Consulta de uma coleção de documentos.

### Consulta pelo id

Esse tipo de consulta é a forma mais rápida de recuperação de dados. O id é a referência mais forte que nos indica o endereço exato de armazenamento.
_Sugerimos que sempre se utilize o atributo **id**. Ele sempre será mais rápido que qualquer outro tipo de consulta ao VTEX Master Data._

### Consulta de uma coleção de documentos

Neste tipo de consulta os campos marcados como **Buscável** ou **Filtro** possuem relevância. Mas não somente eles devem ser considerados. Os **índices** também fazem parte desse processo. A melhor forma de entendermos o fluxo desse tipo de consulta é por meio de um exemplo.

No nosso exemplo, temos a entidade de dados `Cliente`, sigla `CL`. Ela tem as seguintes configurações:

| Nome do campo     | Tipo     | É filtro     | É buscável     |
| ---------- | ---------- | ---------- | ---------- |
| Email       | Email       | Sim       | Sim       |
| Nome       | Varchar 100       | Não       | Sim       |
| Idade       | Integer       | Sim       | Não       |
| TamanhoRoupa       | Varchar 10       | Não       | Não       |

### É Filtro

O atributo `é filtro` indica que poderemos realizar um filtro por meio de determinado(s) campo(s). Em nosso exemplo, poderemos realizar filtro por meio dos campos `Email` e `Idade`.

Na API, temos como fazer a seguinte consulta na rota `search`:

1. /dataentities/CL/search?Email=meuemail@provider.com
2. /dataentities/CL/search?Idade=18

Se for realizado um filtro pelo campo `Nome`, que não foi marcado como filtro, a resposta será um `Bad Request` informando que o campo `Nome` não foi configurado para filtro.

### É buscável

O atributo `é buscável` indica que poderemos fazer uma busca por meio do atributo `_keyword` da rota `search`. O `_keyword` é utilizado para o seguinte cenário: &#8220;Quero todos os documentos que tenham o valor `maria`.&#8221;

A chamada da API, neste caso, será a seguinte:

`/dataentities/CL/search?_keyword=maria`

Os asteriscos são indicadores para uma consulta parcial. Ou seja, não serão buscados os documentos que tenham o valor exato `maria`, mas os que tenham em alguma parte esse grupo de caracteres.

No resultado dessa consulta teríamos os documentos que tenham nos atributos `Nome` e `Email` valores como: Nome=Maria Joaquina | Email=maria@provider.com.

### Consulta por índices

O índice é um recurso do VTEX Master Data que funciona como um &#8220;atalho&#8221; para encontrar documentos. Ele não passa pela Engine de Busca (tecnologia utilizada para consultas com filtros, busca fulltext e agregação).

Utilizando esse recurso, a consulta é mais rápida que um filtro normal. Contudo, quanto maior a quantidade de índices, mais lento fica a gravação de documentos. Sempre tenha cuidado na sua modelagem para que o processo de gravação e leitura seja o mais eficiente possível na resolução do seu cenário.

A consulta por índices é realizada por meio da rota `search`. Dentro do fluxo da busca, quando o VTEX Master Data está interpretando a query, ele faz a seguinte pergunta:

`Esse filtro compõe um índice?`

Se a resposta for positiva, a consulta é realizada através do índice.

### Reindexação

A reindexação é um processo em background que faz o seguinte:

1. Realiza a leitura das configurações de campos marcados como **Filtro** e **Buscável**;
2. Atualiza a Engine de Busca com os novos campos;
3. Realiza uma consulta a todos os documentos armazenados e atualiza os valores na Engine de Busca.

Quando os campos de um documento são gravados na engine de busca, dizemos que esse documento está indexado. Por isso o nome "reindexação".

_Atenção: esse recurso surte efeito somente nos casos em que os campos marcados como `é filtro` ou `é buscável` são alterados._
