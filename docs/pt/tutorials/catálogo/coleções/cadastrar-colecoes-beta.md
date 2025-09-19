---
title: 'Cadastrar Coleções (Beta)'
id: yJBHqNMViOAnnnq4fyOye
status: PUBLISHED
createdAt: 2020-08-17T20:29:25.500Z
updatedAt: 2025-04-14T19:31:23.563Z
publishedAt: 2025-04-14T19:31:23.563Z
firstPublishedAt: 2020-08-27T15:16:59.673Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: creating-collections-beta
legacySlug: cadastrar-colecoes-beta
locale: pt
subcategoryId: 3aExYJkji3NIu9Ks8bxbWx
---

> ℹ️ Existem duas formas de configurar coleções: por meio do **Portal CMS Legado** ou utilizando o módulo de **Coleções (Beta)**. Este artigo refere-se à configuração de coleções por meio do módulo de **Coleções (Beta)**. Essa funcionalidade está em estágio Beta e disponível para ambientes a partir do Admin v3. Em caso de dúvidas [entre em contato com nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

O módulo de __Coleções (Beta)__ permite criar e gerenciar coleções de forma prática e rápida.

Ao agrupar produtos relacionados em coleções, você possibilita que seus clientes descubram outros produtos que podem interessá-los, o que pode levá-los a comprar mais, com uma melhor experiência de compra.

Este artigo explica como:

- Criar uma nova coleção.
- Adicionar e remover produtos à coleção.
- Alterar a posição dos itens na coleção.
- Exportar a sua coleção como uma planilha.
- Editar e deletar uma coleção.

## Pré-requisito

Para criar uma coleção, é preciso ter o [perfil de acesso](/en/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc?locale=pt) _Owner (Admin Super)_ ou criar outro perfil com o recurso **Write Collections**, na seção __Collections__ dos perfis do __Catalog__. Veja aqui [como criar um perfil de acesso](/pt/tutorial/access-profiles--7HKK5Uau2H6wxE1rH5oRbc#criando-um-perfil-de-acesso).

## Criar uma coleção

Siga o passo a passo abaixo para cadastrar uma nova coleção:

1. No Admin VTEX, acesse **Catálogo**, ou digite **Catálogo** na barra de busca no topo da página.
2. Clique em **Coleções**.
3. Clique no botão `Criar Coleção`.
4. Preencha os [campos do formulário de Coleção](/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#campos-de-cadastro-de-colecao).
5. Clique em `Criar` para atualizar as informações preenchidas no formulário.
6. Em seguida, [selecione os produtos](/pt/tutorial/cadastrar-colecoes-beta--yJBHqNMViOAnnnq4fyOye#selecao-de-produtos) que farão parte da coleção.

> ℹ️ É importante ressaltar que as coleções criadas neste módulo não são automaticamente alteradas. Coleções automáticas - feitas por seleção de filtros - não são possíveis de configurar no módulo.

### Campos de cadastro de coleção

Para entender melhor o significado dos campos de cadastro de uma coleção de produtos, veja abaixo a descrição completa de cada um deles:

#### Configurações da nova coleção

- **Nome da coleção:** nome da coleção criada. Esse é um campo obrigatório.
  > ❗ Não utilize caracteres especiais no nome da coleção.

- **Descrição simples:** descrição para uso interno com detalhes da coleção. Não será usada para mecanismos de busca.
- **Adicionar produtos automaticamente:** incluir produtos na coleção automaticamente de acordo com os critérios selecionados.

#### Agendamento

- **Data de início:** data e hora de início da coleção. Se for configuradas data e hora futuras, a coleção ficará com status agendada.
- **Configurar data de término:** seleção que permite configurar data e hora de término da coleção.
- **Data de término:** data e hora de término da coleção. Esta opção só aparece se a opção **Configurar data de término:** estiver ativada.

#### Ativar

- **Adicionar tag da coleção:** selecione essa opção para a coleção ter uma tag de destaque nos produtos.
- **Tornar coleção pesquisável:** opção para que a coleção possa ser encontrada ao fazer uma busca por ela na loja.

### Seleção de produtos

Os produtos podem ser adicionados tanto pela seleção de itens na lista do módulo de Coleções quanto por importação de uma planilha em formato CSV ou XML.

#### Via Admin VTEX

A seleção de produtos pelo Admin VTEX pode ser feita pela lista de produtos, pela barra de busca e pelos filtros. É possível buscar um produto por esses requisitos:

- Nome do produto.
- Product ID.
- Nome do SKU.
- SKU ID.
- Referência do Produto.

Há uma variedade de filtros que podem ser selecionados para reduzir a quantidade de produtos mostrados na lista.

![Coleções-PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_1.png)

Você pode criar novos filtros a partir de outros critérios que não são abordados nos filtros pré-determinados. As imagens abaixo exemplificam essas opções:

![Novo filtro - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_2.png)

![Novo filtro detalhes - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_3.png)

Para adicionar um produto à coleção, basta clicar no ícone <i class="fas fa-plus-circle" title = "check em círculo"></i> referente ao produto. Assim, ele será salvo na coleção automaticamente.

Caso deseje mais informações sobre o item, clique no ícone <i class="fas fa-external-link-alt" title = "link externo"></i> para abrir a página de produto ou clique na imagem para ampliá-la.

![PT-colecao-adicionar](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_4.gif)

Caso você deseje realizar uma inclusão massiva, aplique pelo menos um dos filtros e clique no botão `Adicionar Todos`. Vale ressaltar que o produto precisa ter pelo menos um SKU cadastrado para ser incluído a uma coleção.

![Coleções Adicionar Todos - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_5.png)

> ❗ Não adicione massivamente uma quantidade acima de 100 mil produtos. Isso pode comprometer a indexação do Catálogo e o funcionamento da sua loja.

#### Por planilha

Você também pode adicionar os itens em uma coleção por planilha.

> ℹ️ O limite máximo para importação e exportação é de 10 mil SKUs por operação.

Para isso, siga os passos a seguir:

  1. No painel da sua coleção, clique no botão `Importar`.  
  2. Clique na opção **Adicionar produtos à coleção** e, em seguida, no botão `Importar`.  
  3. Clique em **Baixe o modelo** para ter o modelo correto da planilha, como o  exemplo abaixo: ![Coleção planilha - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_6.png)
  4. Preencha a planilha com os IDs ou RefIDs dos Produtos ou dos SKUs. Adicione apenas um ID em cada linha. Independente do ID que você preencher, todos os SKUs do produto selecionado serão adicionados à coleção depois da importação.  
  5. Depois de preencher a planilha, salve as alterações e importe o documento no Admin. Você pode soltar o arquivo na área indicada ou clicar em **Escolha um arquivo**. São aceitos arquivos em formato CSV ou XML. Em caso de um arquivo CSV, use `,` para delimitar os campos.
  6. Para finalizar, clique em `Importar`.

> ⚠️ A planilha pode conter até 10 mil linhas. Porém, em lojas com um catálogo extenso, recomendamos incluir no máximo 50 linhas por vez para garantir o funcionamento correto da importação.

### Remoção de produtos

Os produtos podem ser removidos tanto pela seleção de itens na lista do módulo de Coleções quanto por uma importação de exclusão de uma planilha em formato CSV ou XML.

#### Via Admin VTEX

Para remover um item da coleção, basta clicar no <i class="far fa-check-circle" title="check em círculo"></i> do produto.

![PT-colecao-remover](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_7.gif)

Caso você deseje realizar uma remoção massiva, aplique um dos filtros e clique no botão `Remover Todos`.

![Coleções remover filtrados - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_8.png)

Você também pode clicar no botão <i class="far fa-check-circle" title = "check em círculo"></i> (**Produtos nesta coleção**) na barra superior e depois selecionar `Remover Todos`.

> ❗ Não remova massivamente uma quantidade acima de 150 mil produtos. Isso pode comprometer a indexação do Catálogo e o funcionamento da sua loja.

#### Por planilha

Você pode excluir os itens em uma coleção por planilha. Para isso, siga os passos a seguir:

1. No painel da sua coleção, clique no botão `Importar`.
2. Clique na opção **Remover produtos da coleção** e, em seguida, no botão `Importar`.
3. Clique em **Baixe o Modelo** para ter o modelo correto da planilha.
4. Depois de preencher a planilha, faça o envio da planilha. Você pode soltar o arquivo na área indicada ou clicar em **Escolha um arquivo**. São aceitos arquivos em formato CSV ou XML.
5. Para finalizar, clique em `Importar`.

## Alterar ordenação da coleção

Para alterar a ordem da sua coleção, siga os passos abaixo:

1. No painel da sua coleção, clique na aba **Minha coleção**.
2. É possível mudar a posição de duas formas:

  a. Clique no ícone <i class="fas fa-grip-vertical" title="arrastar vertical"></i>, arraste o item e solte para a posição desejada.

  > ℹ️ Não é possível utilizar essa opção caso um filtro esteja ativo.

  b. Selecione a caixa dos produtos que deseja alterar e clique em `Mover de Posição`. Indique o número da nova posição e, para finalizar, clique em `Mover`. Aqui é possível reordenar massivamente os itens da lista.

![Coleções mover - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/cat%C3%A1logo/cole%C3%A7%C3%B5es/cadastrar-colecoes-beta_9.PNG)

## Exportar planilha da coleção

Você pode ter acesso aos produtos da sua coleção por planilha. Para exportar sua coleção, siga os passos a seguir:

1. No painel da sua coleção, clique no botão `Exportar`.
2. Escolha o formato que você deseja exportar, CSV ou XML.
3. Selecione se você deseja receber a planilha por e-mail ou baixando diretamente para seu computador.
4. Para finalizar, clique em `Exportar` e o arquivo será baixado ou encaminhado para seu e-mail, dependendo das opções selecionadas anteriormente.

## Deletar e editar uma coleção

Para deletar uma coleção clique no ícone <i class="far fa-trash-alt" title="lixeira"></i> na lista de coleções. Caso queira editar uma coleção siga os passos a seguir:

1. Selecione a coleção que deseja editar.
2. Clique no botão `Configurações da Coleção`.
3. Realize as alterações desejadas.
4. Clique em `Salvar`.

## Status da coleção

As coleções apresentam três status distintos:

- **Ativa**: uma coleção está ativa quando a data de início é anterior ou igual a data atual, e a data de término é maior que a data atual.
- **Inativa**: uma coleção está inativa quando a data de término é anterior à data atual.
- **Agendada**: uma coleção está agendada quando a data de início é posterior à data atual.

> ℹ️ Ao utilizar o Intelligent Search, existem duas opções que definirão a ordem de suas coleções.  Usando o comando `map=productClusterIds`, estará definindo que a ordem de suas coleções será a que foi pré definida pelo lojista, com seu próprio critério de relevância. Se você optar por usar `productClusterNames`, definirá que deseja que suas coleções sigam os padrões de relevância do próprio Intelligent Search. 

