---
title: 'Configurando uma Entidade de Dados'
id: 4RZZJhRb5KMaQOGAOCwqok
status: DRAFT
createdAt: 2017-06-21T21:16:27.425Z
updatedAt: 2020-08-04T14:20:46.680Z
publishedAt: 
firstPublishedAt: 2019-01-25T17:28:17.921Z
contentType: tutorial
productTeam: Master Data
author: authors_4
slug: configurando-uma-entidade-de-dados
legacySlug: configurando-uma-entidade-de-dados
subcategory: 5gtjaqCG7eIseyCI0aSqc2
---

Se você já sabe [o que é o Master Data](https://help.vtex.com/tutorial/o-que-e-o-master-data--4otjBnR27u4WUIciQsmkAw), este artigo irá falar sobre duas formas de configurar como seus dados serão armazenados. Para isso, precisamos entender alguns conceitos: *Fields*, *Entidade de Dados* e *Documentos*.

Um *Documento* é um conjunto de um ou mais *Fields* que definem um ítem dentro de uma *Entidade de Dados*.
A *Entidade de Dados* pode ser entendida como um agrupador de *Documentos*.

Para exemplificar melhor podemos usar qualquer software de planilhas. A planilha seria o VTEX Master Data, cada sheet seria uma *Entidade de Dados*, cada coluna seria um *Field* e cada linha da sheet seria um *Documento*.

Existem hoje duas formas de configurar uma *Entidade de Dados*. A primeira forma, e mais utilizada, é a configuração através do Admin. Quando acessamos a url *minha-loja.ds.vtexcrm.com.br* e clicamos em *Entidade de Dados* vemos a listagem das entidades existentes e podemos criar uma nova. A outra forma é através de uma API REST, utilizando um JSON Schema.


## Entidade criada pelo Admin

Nessa forma é necessário preparar a modelagem dos dados antes de começar a salvar seus dados no Master Data. Veja como criar uma entidade de dados no artigo [Criando entidade de dados](http://help.vtex.com/pt/tutorial/criando-entidade-de-dados).

Os dados dessa entidade podem ser acessados pela interface com o uso dos [formulários](http://help.vtex.com/pt/tutorial/criando-formulario-no-master-data) ou pela [API REST do Master Data](https://developers.vtex.com/reference/master-data-api-v2-overview).


## Entidade criada utilizando JSON Schema

Um *JSON Schema* é um JSON que define como seus dados serão validados. Saiba mais [aqui.](http://json-schema.org). Um ótimo guia também pode ser lido [aqui.](https://spacetelescope.github.io/understanding-json-schema).

Utilizamos o *JSON Schema* para realizar a validação e indexação dos *Fields* (indexação é o processo que permite realizar filtros e buscas no Master Data). Abaixo descrevemos alguns pontos relacionados a esse novo modelo:

- Uma *Entidade de Dados* pode ter um ou mais *JSON Schemas*;
- Não é necessário existir um *JSON Schema* para que os documentos possam ser armazenados. Basta que o dados seja um JSON;

Veja mais detalhes sobre como trabalhar nesse novo modelo de *Entidade de Dados*:

- [Começando a trabalhar no Master Data com JSON Schema](https://help.vtex.com/tutorial/comecando-a-trabalhar-no-master-data-com-json-schema--6uLbweaMBGqOm44cESMkEQ)
- [Fazendo relacionamentos entre Entidades](https://help.vtex.com/tutorial/criar-relacionamentos-entre-entidades-de-dados--6TdIa6Q2IgWYUu2wsYIG48)


