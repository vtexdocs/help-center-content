---
title: 'Master Data'
id: 4otjBnR27u4WUIciQsmkAw
status: CHANGED
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2025-09-02T23:26:45.478Z
publishedAt: 2025-08-29T14:19:54.707Z
firstPublishedAt: 2018-04-02T20:54:18.272Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: master-data
legacySlug: o-que-e-o-master-data
locale: pt
subcategoryId: 1l3IVVYwrrG5YOtdt7R2SN
---

O Master Data é uma solução da plataforma VTEX para banco de dados, que é altamente customizável, permitindo também a criação de aplicações.

Por padrão, o Master Data é usado para armazenar e organizar dados de clientes da sua loja. Ele conta com um poderoso motor de busca, permitindo que você armazene, busque, expanda e personalize dados. 

Neste artigo você saberá mais detalhes sobre cada versão disponível do Master Data, conceitos importantes e como utilizar.

> ℹ️ Note que a depender da funcionalidade e versão que deseja utilizar, você deverá entrar em contato com o time de desenvolvimento da sua operação.

## Versões disponíveis

Atualmente existem duas versões disponíveis e você pode escolher aquela que melhor se adequa às necessidades da sua operação. A principal diferença entre as duas é que a v2 não possui interface gráfica, podendo ser utilizada apenas por meio da [API do Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2), ainda que possua outras funcionalidades relevantes, como o uso de [JSON schemas](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema).

> ℹ️ A VTEX automaticamente salva dados de clientes da sua loja no Master Data v1.

Confira a tabela abaixo para saber mais sobre as funcionalidades de cada versão versões se diferem.

| **Funcionalidade**              | **v1**                                                                                                                                 | **v2**                                                                                                                                              | **Saiba mais**                                                                                                                                                                                                                                                                                                                                                                      |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Interface gráfica                | Sim                                                                                                                                    | Não                                                                                                                                                | -                                                                                                                                                                                                                                                                                                                                                                                    |
| API                              | Sim                                                                                                                                    | Sim                                                                                                                                                | - [Master Data API v1](https://developers.vtex.com/docs/api-reference/masterdata-api)<br>- [Master Data API v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#overview)                                                                                                                                                                                          |
| Importação e exportação de planilhas | Sim                                                                                                                                    | Não                                                                                                                                                | - [Importar dados para o Master Data v1](/pt/tutorial/importando-dados-no-master-data--tutorials_1135)<br>- [Exportar dados do Master Data v1](/pt/tutorial/exportando-dados--tutorials_1125)                                                                                                                                               |
| Anexos (imagens)                 | Sim                                                                                                                                    | Não                                                                                                                                                | -                                                                                                                                                                                                                                                                                                                                                                                    |
| Triggers                         | Sim                                                                                                                                    | Sim                                                                                                                                                | - [Triggers](#triggers)<br>- [Criando triggers com Master Data v1](/pt/tutorial/creating-trigger-in-master-data--tutorials_1270#)<br>- [Criando triggers com Master Data v2](https://developers.vtex.com/docs/guides/setting-up-triggers-in-master-data-v2)                                                                                                      |
| JSON Schemas                     | Não                                                                                                                                    | Sim                                                                                                                                                | - [JSON Schemas](http://json-schema.org/)<br>- [Entendendo JSON schemas](https://json-schema.org/understanding-json-schema)<br>- [Começando a trabalhar com JSON schemas no Master Data v2](https://developers.vtex.com/docs/guides/starting-to-work-on-master-data-with-json-schema)<br>- [Ciclo de vida do schema no Master Data v2](https://developers.vtex.com/docs/guides/master-data-schema-lifecycle) |
| Propriedades aninhadas           | Não                                                                                                                                    | Sim                                                                                                                                                | - [Propriedades aninhadas](#propriedades-aninhadas)                                                                                                                                                                                                                                                                                                                                  |
| Entidades de dados               | Referenciadas por acrônimos compostos de duas letras maiúsculas. Por exemplo, a entidade 'CL' armazena dados de clientes da loja e 'AD' de endereços. Não podem ser criadas por API. | Referenciadas por seus nomes. Por exemplo, 'Notification'. Só podem ser criadas por API.                                                           | - [Entidades de dados](#entidades-de-dados)<br>- [Entidades de dados no Master Data v1](/pt/tutorial/criando-entidade-de-dados--tutorials_1265)<br>- [Criando relações entre entidades de dados do Master Data v2](https://developers.vtex.com/docs/guides/creating-relationships-between-data-entities-using-api)                                                  |
| Campos                           | Devem ser preenchidos no formato específico configurado na entidade de dados.                                                          | A princípio, não há restrição de campos e formatos. A validação do formato acontece por meio de JSON schemas.                                      | - [Tipos de campos no Master Data v1](/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos)<br>- [JSON schemas](#v2-schemas)                                                                                                                                                                                                               |
| Índices                          | Sim                                                                                                                                    | Sim                                                                                                                                                | - [Configurar índices no Master Data v1](/pt/tutorial/setting-up-an-index-on-master-data--tutorials_785)<br>- [Configurar índices com a API do Master Data v2](https://developers.vtex.com/docs/api-reference/master-data-api-v2#put-/api/dataentities/-dataEntityName-/indices)                                                                                  |

> ❗ Note que as entidades de dados das duas versões são independentes, mesmo que algumas possam ser análogas. Isso significa que um dado criado em uma entidade da v1 não pode ser consultado nem editado usando recursos da v2 e vice versa.

## Componentes básicos

Ambas as versões do Master Data utilizam alguns componentes básicos, podendo ser equivalentes a conceitos encontrados em outras soluções de base de dados, com outros nomes como registro ou tabela. Abaixo você encontra mais detalhes sobre:
- [Entidades de dados](#entidades-de-dados)
- [Documentos](#documentos)
- [Campos](#campos)
- [Índices](#indices)

### Entidades de dados

Entidades de dados são como tabelas onde são registrados documentos e campos.

Entidades de dados do Master Data v1 são referenciadas por acrônimos compostos de duas letras maiúsculas. Na v2, você pode usar o nome da entidade de dados. Por exemplo, na v1 a entidade `CL` armazena dados de clientes da loja e a `AD` guarda dados dos endereços de clientes. Entidades equivalentes na v2 podem ser referenciadas com nomes como `Client` e `Address`.

Em uma data entidade de dados, as informações se estruturam em [documentos](#documentos) e [campos](#campos).

### Documentos

Documentos são registros em uma entidade de dados. Se entidades de dados são como tabelas, cada documento é uma linha em uma tabela.

Por exemplo, dentro de uma entidade que armazena dados de clientes da loja, como `CL` ou `Client`, cada documento contém informações de um cliente.

Cada documento tem um ID gerado automaticamente pela plataforma no momento da sua criação, um código único que identifica aquele registro.

### Campos

Os atributos que compõem documentos do Master Data são chamados de campos. Na comparação de entidades de dados como tabelas, podemos pensar nos campos como as colunas de uma tabela.

Por exemplo, em uma entidade que guarda dados de clientes da loja, como `CL` ou `Client`, podemos preencher campos como **nome**, **email**, **data de nascimento** e **documento**.

No Master Data v1, campos devem ser preenchidos no formato específico configurado na entidade de dados. Saiba mais sobre os [tipos de campos no Master Data v1](/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos).

Já na v2, não há restrição de campos e formatos a princípio. Validação de formato acontece por meio de [JSON schemas](#v2-schemas).

#### Propriedades aninhadas

A v2 do Master Data permite que você estruture os dados com propriedades aninhadas, estrutura frequentemente encontrada no formato [JSON](https://www.json.org/json-en.html). Esse conceito consiste na possibilidade de criar campos compostos de outros campos, para melhor estruturação dos dados. Por exemplo, um perfil de cliente pode ter o campo `Documento` que por sua vez é composto das propriedades `Tipo` e `Número`. Também é possível criar [triggers](#triggers) aninhados.

### Índices

Índices são usados para especificar um documento a ser acessado, indicado por um campo indexado ao invés do seu ID.

Como mencionado acima, cada documento tem um ID gerado automaticamente pela plataforma no momento da sua criação. Caso você queira consultar um documento mas não sabe o seu ID, pode usar índices.

Por exemplo, é possível consultar um documento com informações de um cliente especificando o valor do campo `email` referente ao cliente.

> ℹ️ Saiba mais sobre como [configurar índices no Master Data v1](/pt/tutorial/setting-up-an-index-on-master-data--tutorials_785) ou [configurar índices com a API do Master Data v2](https://developers.vtex.com/vtex-rest-api/reference/putindices).

## Triggers

Um trigger do Master Data é um mecanismo que executa uma ação após a criação ou atualização de um documento, dado que satisfeitas as condições estabelecidas na configuração. Estas ações podem ser de três tipos:
- Enviar requisição HTTP.
- Enviar email.
- Salvar documento em outra entidade de dados.

Saiba mais sobre como [configurar triggers no Master Data v1](/pt/tutorial/criando-trigger-no-master-data--tutorials_1270) ou como [configurar triggers com a API do Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)

## v2 schemas

Com a v2 do Master Data, você pode definir formatos de dados com JSON schemas. Este formato indica como o Master Data deve validar e indexar documentos.

> ℹ️ Saiba mais sobre [JSON schemas](https://json-schema.org/).

Você pode salvar um documento em qualquer entidade de dados se o conteúdo for um JSON válido. Uma entidade de dados pode ou não ter múltiplos JSON schemas associados.

![Master Data schemas](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/master-data/conceitos-b%C3%A1sicos-do-master-data/master-data_1.jpg)

> ℹ️ Um documento pode ser compatível com múltiplos JSON Schemas, mas também com nenhum.

## Casos de uso

Ambas versões do Master Data são nativamente adequadas para gerenciar dados de clientes da sua loja. Mas como mencionado acima, são extremamente flexíveis, possibilitando atender diversas necessidades da sua loja. Confira abaixo alguns exemplos de aplicação das funcionalidades do Master Data para além do gerenciamento básico de dados de clientes.

### Testes A/B

Com triggers da v2, você pode estabelecer múltiplas ações para um mesmo trigger, configurando a porcentagem de carga que cada ação deve receber. Com isso é possível testar comparativamente o impacto de diferentes automações na sua loja.

Saiba como configurar [testes A/B com Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Carrinho abandonado

O Master Data também pode ser utilizado para criar integrações de carrinho abandonado. Ou seja, a realização de ações automáticas sempre que um cliente adicionar produtos no carrinho da sua loja e terminar sua sessão sem finalizar a compra.

Para saber mais veja este guia sobre [configuração de carrinho abandonado](/pt/tutorial/configurar-carrinho-abandonado--tutorials_740)

