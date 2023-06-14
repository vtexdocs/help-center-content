---
title: 'Criar entidade de dados'
id: tutorials_1265
status: PUBLISHED
createdAt: 2017-04-27T21:56:57.118Z
updatedAt: 2023-03-28T23:55:21.924Z
publishedAt: 2023-03-28T23:55:21.924Z
firstPublishedAt: 2017-04-27T23:03:49.803Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: criando-entidade-de-dados
legacySlug: criando-entidade-de-dados
subcategory: 1l3IVVYwrrG5YOtdt7R2SN
---

Entidade de dados é uma representação de um conjunto de informações sobre um determinado conceito. Toda entidade possui campos, que são as informações que formam as entidades.

Para exemplificar, imagine um sistema de controle de uma biblioteca. Esse sistema controla livros que podem ser alugados por clientes. Então, percebemos que esses 3 conceitos (livro, cliente, aluguel) são entidades que possuem informações sobre cada uma delas. Entidade de dados, portanto, é um grupo de informações sobre determinado conceito.

![exemploBiblioteca](//images.contentful.com/alneenqid6w5/4WFfw93mlykqGCMSyAKcW2/27a0fd02aba4dd22df42a00fd506b75e/new-infographic.png) 

Com esses conceitos, é possível configurar os mais diversos cenários de controle de dados pelo Master Data. Por padrão, são inseridas as seguintes entidades de dados: Cliente, Endereço, Stores etc. É possível criar quantas mais entidades de dados desejar, possibilitando um ambiente personalizado, voltado às necessidade de cada loja.

<div class="alert alert-warning">
Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais:
<ul>
<li>
<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
Características das versões do Master Data
</a>
</li>
<li>
<a href=”https://developers.vtex.com/vtex-rest-api/docs/getting-started-1”>
Master Data v2
</a>
</li>
</ul>
</div>

## Entendendo os tipos

Antes do passo a passo de configuração, é preciso esclarecer os tipos de dados que serão utilizados na configuração. A entidade de dados é composta por campos que, por sua vez, têm um tipo. Esse tipo identifica quais as características das informações que serão armazenadas no campo e realiza validações, filtros e cálculos de acordo com o valor selecionado.

Na criação de um campo, são exibidos os tipos listados abaixo, juntamente com seu significado.

- **Relationship**: É o tipo de campo que vai criar um relacionamento com outra entidade. Como relacionamento, entende-se a informação de uma entidade sendo exibida em outra. Por exemplo, voltando à biblioteca do começo do artigo, poderíamos querer que o nome do Cliente aparecesse no registro de Aluguel. Para isso, bastaria fazer um relacionamento entre Aluguel e Cliente, usando o campo Nome Cadastrado em Aluguel. Então, no tipo Relationship, dentro da configuração, você precisaria selecionar o campo que deseja exibir (no caso, Cliente) para selecionar também o campo nome.
- **User Login**: É o tipo de campo que seleciona automaticamente o usuário logado. É utilizado para cenários em que se deseja registrar o e-mail do usuário que realizar ação em um registro da entidade.
- **Integer**: É o tipo que armazena números inteiros, ou seja, números sem a parte fracionária. Armazena os números inteiros entre  -2147483648 e 2147483647.
- **Long**: É o mesmo tipo que integer, porém, com possibilidade de armazenar mais números. Armazena de `-2⁶³` a `2⁶³-1`.
- **Date**: É o tipo que armazena informações sobre data. 
- **Time**: É o tipo que armazena informações sobre hora. 
- **Date and Time**: É o tipo que armazena data e hora. 
- **Percent**: É o tipo que armazena informações em percentual.
- **Currency**: É o tipo que armazena informações no formato de moeda.
- **Decimal**: É o tipo que armazena números com a parte fracionária sempre configurada para 2. Ou seja, este campo armazena sempre 2 dígitos como decimais do valor inserido.
- **URL**: É o tipo que armazena uma URL.
- **Email**: É o tipo que armazena um E-mail.
- **CEP**: É o tipo que armazena um CEP.
- **Varchar 10**: É o tipo que armaneza números, letras e caracteres especiais. Neste caso, limita o número de dígitos em 10.
- **Varchar 50**: É o tipo que armaneza números, letras e caracteres especiais. Neste caso, limita o número de dígitos em 50.
- **Varchar 100**: É o tipo que armaneza números, letras e caracteres especiais. Neste caso, limita o número de dígitos em 100.
- **Varchar 750**: É o tipo que armaneza números, letras e caracteres especiais. Neste caso, limita o número de dígitos em 750.
- **Text**: É o tipo que armaneza números, letras e caracteres especiais. Neste caso, não existe limitação de caracteres.
- **Boolean**: É o tipo que armazena informação de verdadeiro ou falso. Sempre deve haver um valor padrão para o campo, ou seja, ele sempre estará preenchido como verdadeiro ou falso.
- **Auto Increment**: É o tipo que armazena números inteiros e que é incrementado automaticamente, ou seja, a cada novo registro, esse campo recebe o valor do registro anterior + 1.
- **Telephone**: É o tipo que armazena informações no formato de telefone.
- **Tag**: Tipo descontinuado.
- **Score2**: Campo composto por chave, valor e validade. Ex.: uma possibilidade de uso é para controle de compra por cliente, guardando quanto o cliente comprou e quantas compras foram feitas. [Esse campo só pode ser preenchido por API](https://developers.vtex.com/reference/master-data-api-v1-overview).
- **File**: É o tipo que armazena um arquivo. O tamanho limite a ser aceito deve ser configurado nas opções do campo (botão com símbolo de engrenagem).
- **Flow**: Tipo descontinuado.
- **Tag Reference**: Tipo descontinuado.
- **CPF / CNPJ**: É o tipo que armazena informações de CPF e CNPJ.

## Como configurar

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. No Master Data, clique em **Aplicações** > **Estrutura de dados.**
3. Clique na aba **Entidade de dados.**
4. Clique no botão **Novo.**
5. Preencha o campo sigla com 2 letras que identifiquem a entidade de dados. Essas letras serão as iniciais do campo identificador do registro. Ex.: Sigla SP, identificador SP-0001.
6. Preencha o nome da entidade de dados que deseja criar.
7. Selecione o tipo de chave primária, que pode ser uma das seguintes opções: **GUID**: é uma sequência de números e caracteres que não se repetem, identificando um registro; **Sequencial numérico**: é uma sequência numérica que não se repete e identifica um registro; **A chave primária será informada pelo cliente através do atributo "id"**: não cria automaticamente um campo identificador, este campo deve ser criado manualmente e deve ser dado o nome de **id**.
8. A flag **permitir consultar todos os registros sem filtro** deve ser marcada quando é preciso consultar os registros sem filtro e sem autenticação. Lembre-se! Esta configuração é muito crítica porque permite que via API possam ser listados todos os registros da base.
9. Preencha a aba **Campos** com os campos que os valores não serão calculados automaticamente.
10. Preencha a coluna **Nome** com o valor de identificação do campo. Não é permitido a inserção de espaço nem caracteres especiais. Ex.: NomeDoCliente.
11. Preencha a coluna **Nome de exibição** com o valor que será exibido no formulário. Ex.: Nome do Cliente.
12. Selecione o tipo do campo, de acordo com as opções descritas na seção sobre tipos.
13. Clique sobre o símbolo de engrenagem para abrir as opções de configuração.
14. Selecione **permitir nulo** caso seja possível a criação ou edição de um registro com o campo em branco. Caso essa opção fique desmarcada, não será possível criar um registro com o campo sem algum valor.
15. O campo **auditado** está descontinuado, de modo que todos os campos são auditados por padrão.
16. Selecione **público para leitura** se, pela API, for possível realizar a leitura dos dados desse campos sem a necessidade de autenticação.
17. Selecione **público para escrita** se, pela API, for possível realizar a inserção de dados nesse campo sem a necessidade de autenticação.
18. Selecione **público para filtrar** se, pela API, for possível realizar o filtro de dados desse campo sem a necessidade de autenticação.
19. Selecione **é buscável** se esse campo for utilizado para busca no formulário e por API.
20. Selecione **é filtro** se esse campo for utilizado para filtro no formulário e por API.
21. Preencha a descrição do campo.
22. Acesse a aba **Campos Automáticos** para a configuração de campos em que os valores serão calculados automaticamente.
23. A configuração se dá da mesma maneira que a configuração de um campo não automático, com a exceção da área **Edição da fórmula**, que deve ser preenchida com o código em C# que fará a lógica de cálculo do campo. Como auxílio, é possível utilizar as expressões dinâmicas, que inserem valores de outros campos no código. Além disso, é necessário selecionar em que momento o cálculo será executado.
24. Para inserir mais campos, basta clicar no botão **Novo campo** ou **Novo campo calculado**.
25. Ao final da configuração, clique no botão **Salvar** ou **Salvar e novo** (para seguir para a criação de uma nova entidade de dados).
26. Clique no botão com símbolo de disquete para publicar a entidade de dados criada ou alterada.

_Após a criação da entidade de dados, é necessário [criar o formulário para a inserção, alteração e exibição de dados em seu ambiente Master Data](/pt/tutorial/criando-formulario-no-master-data/)._
