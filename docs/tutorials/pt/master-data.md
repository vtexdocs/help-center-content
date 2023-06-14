---
title: 'Master Data'
id: 4otjBnR27u4WUIciQsmkAw
status: PUBLISHED
createdAt: 2018-04-02T19:01:38.026Z
updatedAt: 2023-05-23T14:24:05.123Z
publishedAt: 2023-05-23T14:24:05.123Z
firstPublishedAt: 2018-04-02T20:54:18.272Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slug: master-data
legacySlug: o-que-e-o-master-data
subcategory: 1l3IVVYwrrG5YOtdt7R2SN
---

O Master Data é uma solução da plataforma VTEX para banco de dados, que é altamente customizável, permitindo também a criação de aplicações.

Por padrão, o Master Data é usado para armazenar e organizar dados de clientes da sua loja. Ele conta com um poderoso motor de busca, permitindo que você armazene, busque, expanda e personalize dados. 

Neste artigo você saberá mais detalhes sobre cada versão disponível do Master Data, conceitos importantes e como utilizar.

<div class = "alert alert-info">
Note que a depender da funcionalidade e versão que deseja utilizar, você deverá entrar em contato com o time de desenvolvimento da sua operação.
</div>

## Versões disponíveis

Atualmente existem duas versões disponíveis e você pode escolher aquela que melhor se adequa às necessidades da sua operação. A principal diferença entre as duas é que a v2 não possui interface gráfica, podendo ser utilizada apenas por meio da [API do Master Data v2](https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v2-overview), ainda que possua outras funcionalidades relevantes, como o uso de [JSON schemas](https://developers.vtex.com/vtex-rest-api/docs/starting-to-work-on-master-data-with-json-schema).

<div class = "alert alert-info">
Vale ressaltar a plataforma VTEX nativamente salva dados de clientes da sua loja no Master Data v1.
</div>

Confira a tabela abaixo para saber mais sobre as funcionalidades de cada versão versões se diferem.

<table class="w-100 center mv7 bb b--gray" style="border-spacing: 0px; border-collapse: collapse;">
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;"><b>Funcionalidade</b>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><b>v1</b>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><b>v2</b>
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><b>Saiba mais</b>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Interface gráfica
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Não
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">-
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">API
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href="https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v1-overview">Master Data API v1</a></li> 
<li><a href="https://developers.vtex.com/vtex-rest-api/reference/master-data-api-v2-overview">Master Data API v2</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Importação e exportação de planilhas
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Não
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"> <ul><li><a href="https://help.vtex.com/en/tutorial/importing-data-into-master-data--tutorials_1135#"> Importar dados para o Master Data v1</a></li><li><a href="https://help.vtex.com/pt/tutorial/exporting-data--tutorials_1125#">Exportar dados do Master Data v1</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Anexos (imagens)
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Não
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">-
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Triggers
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href=”#triggers”>Triggers</a></li><li><a href="https://help.vtex.com/en/tutorial/creating-trigger-in-master-data--tutorials_1270#">Criando triggers com Master Data v1</a></li><li><a href="https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2">Criando triggers com Master Data v2</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">JSON Schemas
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Não
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href="http://json-schema.org/">JSON Schemas</a></li><li><a href="https://spacetelescope.github.io/understanding-json-schema">Entendendo JSON schemas</a></li><li><a href="https://developers.vtex.com/vtex-rest-api/docs/starting-to-work-on-master-data-with-json-schema">Começando a trabalhar com JSON schemas no Master Data</a></li><li><a href="https://developers.vtex.com/vtex-rest-api/docs/master-data-schema-lifecycle">Ciclo de vida do schema no Master Data</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Propriedades aninhadas
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Não
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href=”#propriedades-aninhadas”>Propriedades aninhadas</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Entidades de dados
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Referenciadas por acrônimos compostos de duas letras maiúsculas. Por exemplo, a entidade `CL` armazena dados de clientes da loja e a `AD` de endereços. Não podem ser criadas por API.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Referenciadas por seus nomes. Por exemplo, `Client` e `Address`. Só podem ser criadas por API.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href=”#entidades-de-dados”>Entidades de dados</a></li><li><a href="https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265">Entidades de dados no Master Data v1</a></li><li><a href="https://developers.vtex.com/vtex-rest-api/docs/creating-relationships-between-data-entities-using-api">Criando relações entre entidades de dados do Master Data v2</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Campos
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Devem ser preenchidos no formato específico configurado na entidade de dados.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Não há restrição de campos e formatos a princípio. Validação de formato acontece por meio de JSON schemas.
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href="https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos">Tipos de campos no Master Data v1</a></li><li><a href=”#schemas-na-v2”>JSON schemas</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">Índices
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href="https://help.vtex.com/pt/tutorial/setting-up-an-index-on-master-data--tutorials_785">Configurar índices no Master Data v1</a></li><li><a href="https://developers.vtex.com/vtex-rest-api/reference/putindices">Configurar índices com a API do Master Data v2</a></li></ul>
   </td>
  </tr>
  <tr class="bb b--muted-3">
   <td class="t-body pa5" style="min-width: 15rem;">VTable
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Não
   </td>
   <td class="t-body pa5" style="min-width: 15rem;">Sim
   </td>
   <td class="t-body pa5" style="min-width: 15rem;"><ul><li><a href="https://developers.vtex.com/vtex-rest-api/docs/vtable">VTable</a></li></ul>
   </td>
  </tr>
</table>

<div class="alert alert-danger">
Note que as entidades de dados das duas versões são independentes, mesmo que algumas possam ser análogas. Isso significa que um dado criado em uma entidade da v1 não pode ser consultado nem editado usando recursos da v2 e vice versa.
</div>

## Componentes básicos

Ambas as versões do Master Data utilizam alguns componentes básicos, podendo ser equivalentes a conceitos encontrados em outras soluções de base de dados, com outros nomes como registro ou tabela. Abaixo você encontra mais detalhes sobre:
- [Entidades de dados](#entidades-de-dados)
- [Documentos](#documentos)
- [Campos](#campos)
- [Índices](#indices)

### Entidades de dados

Entidades de dados são como tabelas onde são registrados documentos e campos.

Entidades de dados do Master Data v1 são referenciadas por acrônimos compostos de duas letras maiúsculas. Na v2, você pode usar o nome da entidade de dados. Por exemplo, na v1 a entidade `CL` armazena dados de clientes da loja e a `AD` guarda dados dos endereços de clientes. Entidades equivalentes na v2 podem ser referenciadas com nomes como `Client` e `Address.

Em uma data entidade de dados, as informações se estruturam em [documentos](#documentos) e [campos](#campos).

### Documentos

Documentos são registros em uma entidade de dados. Se entidades de dados são como tabelas, cada documento é uma linha em uma tabela.

Por exemplo, dentro de uma entidade que armazena dados de clientes da loja, como `CL` ou `Client`, cada documento contém informações de um cliente.

Cada documento tem um ID gerado automaticamente pela plataforma no momento da sua criação, um código único que identifica aquele registro.

### Campos

Os atributos que compõem documentos do Master Data são chamados de campos. Na comparação de entidades de dados como tabelas, podemos pensar nos campos como as colunas de uma tabela.

Por exemplo, em uma entidade que guarda dados de clientes da loja, como `CL` ou `Client`, podemos preencher campos como **nome**, **email**, **data de nascimento** e **documento**.

No Master Data v1, campos devem ser preenchidos no formato específico configurado na entidade de dados. Saiba mais sobre os [tipos de campos no Master Data v1](https://help.vtex.com/pt/tutorial/criando-entidade-de-dados--tutorials_1265#entendendo-os-tipos).

Já na v2, não há restrição de campos e formatos a princípio. Validação de formato acontece por meio de [JSON schemas](#v2-schemas).

#### Propriedades aninhadas

A v2 do Master Data permite que você estruture os dados com propriedades aninhadas, estrutura frequentemente encontrada no formato [JSON](https://www.json.org/json-en.html). Esse conceito consiste na possibilidade de criar campos compostos de outros campos, para melhor estruturação dos dados. Por exemplo, um perfil de cliente pode ter o campo `Documento` que por sua vez é composto das propriedades `Tipo` e `Número`. Também é possível criar [triggers](#triggers) aninhados.

### Índices

Índices são usados para especificar um documento a ser acessado, indicado por um campo indexado ao invés do seu ID.

Como mencionado acima, cada documento tem um ID gerado automaticamente pela plataforma no momento da sua criação. Caso você queira consultar um documento mas não sabe o seu ID, pode usar índices.

Por exemplo, é possível consultar um documento com informações de um cliente especificando o valor do campo `email` referente ao cliente.

<div class = "alert alert-info">
Saiba mais sobre como <a href=”https://help.vtex.com/pt/tutorial/setting-up-an-index-on-master-data--tutorials_785>configurar índices no Master Data v1</a> ou <a href=”https://developers.vtex.com/vtex-rest-api/reference/putindices”>configurar índices com a API do Master Data v2</a>.
</div>

## Triggers

Um trigger do Master Data é um mecanismo que executa uma ação após a criação ou atualização de um documento, dado que satisfeitas as condições estabelecidas na configuração. Estas ações podem ser de três tipos:
- Enviar requisição HTTP.
- Enviar email.
- Salvar documento em outra entidade de dados.

Saiba mais sobre como [configurar triggers no Master Data v1](https://help.vtex.com/pt/tutorial/criando-trigger-no-master-data--tutorials_1270) ou como [configurar triggers com a API do Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-triggers-in-master-data-v2)

## v2 schemas

Com a v2 do Master Data, você pode definir formatos de dados com JSON schemas. Este formato indica como o Master Data deve validar e indexar documentos.

<div class = "alert alert-info">
  Saiba mais sobre <a href="https://json-schema.org/">JSON schemas</a>.
</div>

Você pode salvar um documento em qualquer entidade de dados se o conteúdo for um JSON válido. Uma entidade de dados pode ou não ter múltiplos JSON schemas associados.

![Master Data schemas](//images.ctfassets.net/alneenqid6w5/CaidhUAHIxcwas8eWLQZu/908c8b04ea9e32271a494eeb0f2f7a56/schemas_pt.jpg)

<div class = "alert alert-info">
Um documento pode ser compatível com múltiplos JSON Schemas, mas também com nenhum.
</div>

## Casos de uso

Ambas versões do Master Data são nativamente adequadas para gerenciar dados de clientes da sua loja. Mas como mencionado acima, são extremamente flexíveis, possibilitando atender diversas necessidades da sua loja. Confira abaixo alguns exemplos de aplicação das funcionalidades do Master Data para além do gerenciamento básico de dados de clientes.

### Testes A/B

Com triggers da v2, você pode estabelecer múltiplas ações para um mesmo trigger, configurando a porcentagem de carga que cada ação deve receber. Com isso é possível testar comparativamente o impacto de diferentes automações na sua loja.

Saiba como configurar [testes A/B com Master Data v2](https://developers.vtex.com/vtex-rest-api/docs/setting-up-an-ab-test-with-master-data-v2-trigger).

### Carrinho abandonado

O Master Data também pode ser utilizado para criar integrações de carrinho abandonado. Ou seja, a realização de ações automáticas sempre que um cliente adicionar produtos no carrinho da sua loja e terminar sua sessão sem finalizar a compra.

Para saber mais veja este guia sobre [configuração de carrinho abandonado](https://help.vtex.com/pt/tutorial/configurar-carrinho-abandonado--tutorials_740)

