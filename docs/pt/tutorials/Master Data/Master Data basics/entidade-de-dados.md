---
title: 'Entidade de dados'
id: tutorials_1265
status: PUBLISHED
createdAt: 2017-04-27T21:56:57.118Z
updatedAt: 2024-10-23T23:39:13.110Z
publishedAt: 2024-10-23T23:39:13.110Z
firstPublishedAt: 2017-04-27T23:03:49.803Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slugEN: data-entity
locale: pt
legacySlug: criando-entidade-de-dados
subcategoryId: 1l3IVVYwrrG5YOtdt7R2SN
---

Entidade de dados é uma representação de um conjunto de informações sobre um determinado conceito. Toda entidade possui campos, que são as informações que formam as entidades.

Para exemplificar, imagine um sistema de controle de uma biblioteca. Esse sistema controla livros que podem ser alugados por clientes. Então, percebemos que esses 3 conceitos (livro, cliente, aluguel) são entidades que possuem informações sobre cada uma delas. Entidade de dados, portanto, é um grupo de informações sobre determinado conceito.

![data-entity-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master%20Data/Master%20Data%20basics/entidade-de-dados_1.png)

Com esses conceitos, é possível configurar os mais diversos cenários de controle de dados pelo Master Data. Por padrão, são inseridas as seguintes entidades de dados: Cliente, Endereço, Stores etc. É possível criar quantas mais entidades de dados desejar, possibilitando um ambiente personalizado, voltado às necessidade de cada loja.

<div class="alert alert-warning">
<p>Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais:</p>
    <ul>
        <li><a href="https://help.vtex.com/pt/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versoes-disponiveis">Características das versões do Master Data</a></li>
        <li><a href="https://developers.vtex.com/docs/guides/master-data-v2-basics">Master Data v2</a></li>
    </ul>
</div>

## Tipos de dados

A entidade de dados é composta por campos que, por sua vez, têm um tipo. Esse tipo identifica quais as características das informações que serão armazenadas no campo e realiza validações, filtros e cálculos de acordo com o valor selecionado.

Na criação de um campo, são exibidos os tipos listados abaixo:

| Tipo de campo | Descrição |
| - | - |
| **Auto Increment** | Armazena números inteiros e é incrementado automaticamente, ou seja, a cada novo registro, esse campo recebe o valor do registro anterior + 1. |
| **Boolean** | Armazena a informação de verdadeiro ou falso, ou seja, sempre estará preenchido como `true` (verdadeiro) ou `false` (falso). |
| **CEP** | Armazena um CEP. |
| **CPF / CNPJ** | Armazena informações de CPF e CNPJ. |
| **Currency** |  Armazena informações no formato de moeda. |
| **Date** |  Armazena informações sobre data. |
| **Date and Time** |  Armazena data e hora. |
| **Decimal** |  Armazena números com a parte fracionária sempre configurada para 2. Ou seja, este campo armazena sempre 2 dígitos como decimais do valor inserido. |
| **Email** |  Armazena um email. |
| **File** |  Armazena um arquivo. O tamanho limite a ser aceito pode ser definido nas configurações do campo, acessadas a partir do botão com símbolo de engrenagem <i class="fas fa-cog"></i>. |
| **Integer** |  Armazena números inteiros, ou seja, números sem a parte fracionária. Armazena os números inteiros entre `-2147483648` e `2147483647`. |
| **Long** | É o mesmo tipo que **Integer**, porém, com possibilidade de armazenar mais números. Armazena de `-2⁶³` a `2⁶³-1`. |
| **Percent** | Armazena informações em percentual. |
| **Phone** |  Armazena informações no formato de um número de telefone. |
| **Relationship** | Cria um relacionamento com outra entidade. Como relacionamento, entende-se a informação de uma entidade sendo exibida em outra. Por exemplo, em uma biblioteca, desejamos que o nome do **Cliente** aparecesse no registro de **Aluguel**.<br><br>Para isso, seria necessário fazer um relacionamento entre **Aluguel** e **Cliente**, usando o campo **Nome** Cadastrado em **Aluguel**. Então, no tipo **Relationship**, dentro da configuração, você precisaria selecionar o campo que deseja exibir (no caso, **Cliente**) para selecionar também o campo **Nome**. |
| **Score2** | Campo composto por chave, valor e validade. Exemplo: uma possibilidade de uso é para controle de compra por cliente, guardando quanto o cliente comprou e quantas compras foram feitas. Este campo precisa ser preenchido por meio do endpoint [Update scores](https://developers.vtex.com/docs/api-reference/masterdata-api#put-/api/dataentities/-acronym-/documents/-id-/score) ou do endpoint [Update score by field](https://developers.vtex.com/docs/api-reference/masterdata-api#put-/api/dataentities/-acronym-/documents/-id-/score/-field-name-) da [Master Data API v1](https://developers.vtex.com/docs/api-reference/masterdata-api). |
| **Text** | Armazena números, letras e caracteres especiais. Neste caso, não existe limitação de caracteres. |
| **Time** |  Armazena informações de horário. |
| **URL** |  Armazena uma URL. |
| **User Login** | Seleciona automaticamente o usuário logado. É utilizado para cenários em que se deseja registrar o email do usuário que realizar alguma ação em um registro da entidade. |
| **Varchar 10** |  Armazena números, letras e caracteres especiais. Neste caso, limita o número de caracteres em 10. |
| **Varchar 100** |  Armazena números, letras e caracteres especiais. Neste caso, limita o número de caracteres em 100. |
| **Varchar 50** |  Armazena números, letras e caracteres especiais. Neste caso, limita o número de caracteres em 50. |
| **Varchar 750** |  Armazena números, letras e caracteres especiais. Neste caso, limita o número de caracteres em 750. |

## Criar entidade de dados

Siga o passo a passo abaixo para configurar uma nova entidade de dados.

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data.**
2. No Master Data, clique em **Aplicações** > **Configurações avançadas** > **Estrutura de dados.**
3. Clique na aba **Entidade de dados**.
4. Clique no botão `Adicionar`.
5. Preencha o campo **Acrônimo** com 2 letras que identifiquem a entidade de dados. Essas letras serão as iniciais do campo identificador do registro. Exemplo: Acrônimo SP, identificador SP-0001.
6. Preencha o **Nome** da entidade de dados que deseja criar.
7. Selecione o tipo de chave primária, que pode ser uma das seguintes opções:

   - **GUID**: é uma sequência de números e caracteres que não se repetem, identificando um registro.
   - **A chave primária será informada pelo cliente através do atributo "id"**: não cria automaticamente um campo identificador, este campo deve ser criado manualmente e deve ser dado o nome de **id**.
8. Se for preciso consultar os registros sem filtro e sem autenticação, marque a opção **Permitir consultar todos os registros sem filtro**. Atenção: esta configuração é crítica, porque permite a listagem de todos os registros da base via API.
9.  Preencha a aba **Campos** com os campos que deseja incluir na nova entidade de dados, conforme os passos a seguir.
10. Preencha a coluna **Nome** com o valor de identificação do campo. Não é permitido inserir espaço nem caracteres especiais. Exemplo: NomeDoCliente.
11. Preencha a coluna **Nome de exibição** com o nome que será exibido no formulário. Exemplo: Nome do Cliente.
12. Selecione o tipo do campo, de acordo com as opções descritas na seção [Tipos de dados](#tipos-de-dados).
13. Clique na engrenagem <i class="fas fa-cog"></i> para abrir as opções de configuração do campo.
14. Preencha as **Configurações gerais**:

     - **É anulável?**: marque esta opção caso seja possível a criação ou edição de um registro com o campo em branco (nulo). Caso essa opção fique desmarcada, não será possível criar um registro com o campo sem algum valor.
     - **Permitir a leitura sem credencial:** marque esta opção se for possível realizar a leitura dos dados do campo sem a necessidade de autenticação, utilizando a Master Data API.
     - **Permitir editar sem credencial:** marque esta opção se for possível realizar a inserção de dados no campo sem a necessidade de autenticação, utilizando a Master Data API.
     - **Permitir filtrar sem credencial:** marque esta opção se for possível realizar o filtro de dados do campo sem a necessidade de autenticação, utilizando a Master Data API.

15. Preencha as **Configurações de busca e filtro**:

    - **É pesquisável?**: se esse campo for utilizado para busca no formulário e por API.
    - **É filtrável?:** se esse campo for utilizado para filtro no formulário e por API.
16. Escreva a descrição do campo.
17. Para inserir mais campos, clique no botão `Novo campo` e repita os passos 10 a 16.
18. Ao final da definição de campos, clique no botão `Salvar` para concluir ou `Salvar e criar` para seguir para a criação de uma nova entidade de dados.

    Você será conduzido(a) novamente para a aba **Entidade de dados**.

19. Na linha da nova entidade criada, clique no botão de disquete <i class="fas fa-save"></i> para publicar a entidade de dados criada.
20. Clique em `OK`.
21. Clique na aba __Aplicações__ para voltar à página inicial do Master Data.
22. Clique em `Recarregar aplicações`.

<div class="alert alert-info">
    <p>Após a criação da entidade de dados, é necessário <a href="https://help.vtex.com/pt/tutorial/criando-formulario-no-master-data--tutorials_1047">criar o formulário para a inserção, alteração e exibição de dados no Master Data</a>.</p>
</div>
