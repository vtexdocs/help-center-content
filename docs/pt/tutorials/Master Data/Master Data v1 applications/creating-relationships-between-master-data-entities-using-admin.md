---
title: 'Criar relacionamentos entre entidades do Master Data v1'
id: 1qzbCit8SYXbKwrT5x2FfA
status: PUBLISHED
createdAt: 2020-08-11T13:48:26.272Z
updatedAt: 2024-08-06T18:27:27.318Z
publishedAt: 2024-08-06T18:27:27.318Z
firstPublishedAt: 2020-08-18T19:47:29.772Z
contentType: tutorial
productTeam: Master Data
author: 1malnhMX0vPThsaJaZMYm2
slug: criar-relacionamentos-entre-entidades-do-master-data-usando-o-admin
locale: pt
legacySlug: criar-relacionamento-com-entidades-e-documentos-do-master-data-usando-o
subcategoryId: 2AThnkEZAYbk4G4EIs53rL
---

Um relacionamento entre entidades é uma referência entre documentos que pertencem a domínios distintos. Essa referência é definida por um campo em uma dessas entidades. Na prática, esse campo será preenchido com o ID de um documento da entidade relacionada, sendo este invisível para o usuário.

Por exemplo, sua loja tem uma entidade **Cliente** e outra **Lista de Compras**, e você quer que cada cliente possa ter várias listas de compras. Para isso, é necessário criar um campo na entidade **Lista de Compras** para informar a qual cliente ela pertence. 

>ℹ️ O Master Data já possui por padrão alguns relacionamentos pré-definidos, como os de Cliente (CL) e Endereço (AD).

## Criar um relacionamento entre entidades de dados

Para criar um relacionamento, é necessário ter duas entidades de dados. Se só tiver uma, você poderá criar outra durante o passo a passo a seguir. Para mais informações sobre entidades de dados, consulte o guia [Entidade de dados](https://help.vtex.com/pt/tutorial/entidade-de-dados--tutorials_1265).

No exemplo citado na introdução, é necessário criar uma entidade de dados chamada **Lista de Compras** que se relacionará com a entidade **Cliente**. Esse relacionamento permitirá que um cliente possa ter várias listas de compras, porém uma lista de compras só pode pertencer a um único cliente.

Confira o passo a passo a seguir, ilustrado com esse exemplo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Clique em `Configurações avançadas`.  
3. Clique em **Estrutura de dados**. Você será direcionado(a) a uma nova aba.
4. Clique na aba **Entidades de dados**.
5. Se deseja criar um relacionamento em uma nova entidade, clique no botão `Adicionar` para criar uma nova entidade de dados.

   Caso queira criar um relacionamento em uma entidade existente, localize-a e clique no botão de edição <i class="fas fa-edit"></i>, depois siga para o passo 7.
6. Configure a entidade que será criada preenchendo os campos **Acrônimo** e **Nome** e adicionando os campos desejados. Saiba mais sobre campos no guia [Criar um campo no Master Data](https://help.vtex.com/pt/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829).

   Neste exemplo, a entidade utilizará o nome `Lista de compras`, o acrônimo `LC` e, inicialmente, o campo `compras` de tipo `Varchar 750`.

   Para mais detalhes sobre o preenchimento, consulte o guia [Entidade de dados](https://help.vtex.com/pt/tutorial/entidade-de-dados--tutorials_1265). 
7. Adicione um campo de tipo **Relacionamento** e defina seu nome. Neste exemplo, ele será chamado de `Cliente`.
8. Clique no ícone de engrenagem <i class="fas fa-cog"></i> ao lado do campo de **Relacionamento** para configurá-lo.
9. Em **Configurações de campo personalizado**, selecione a entidade à qual deseja fazer referência e o campo que será mostrado no relacionamento. Neste exemplo, o relacionamento será feito com a entidade **Cliente** e será exibido o campo **email**.

   ![Relacionamento entidade Lista de Compras](//images.ctfassets.net/alneenqid6w5/3YjtdLHluQz9ve11TkmylY/41cb881fc6bfe93744e4a68cca8ea43a/Lista_Compras_Relacionamento.png)

10. Clique no botão `Salvar` para salvar as configurações.
11. Clique no ícone de publicação <i class="fas fa-save"></i> para publicar a entidade.
12. Também pode ser necessário atualizar as aplicações para que sejam implementadas as modificações. Para isso, vá em **Configurações da loja** > **Storefront** > **Master Data** e clique no botão `Recarregar aplicações`.

## Criar um relacionamento entre documentos

Os relacionamentos também podem ser aplicados a documentos, uma vez que houver um [relacionamento entre entidades de dados](#criar-um-relacionamento-entre-entidades-de-dados). Para isso, será necessário modificar o [formulário](https://help.vtex.com/pt/tutorial/criando-formulario-no-master-data--tutorials_1047) de uma entidade de dados.

Confira o passo a passo a seguir:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Clique no ícone de engrenagem <i class="fas fa-cog"></i> ao lado do nome da aplicação.

   Você será direcionado(a) para a listagem de formulários existentes nessa aplicação.

3. Para criar um novo formulário, clique em `+ Novo`.
4. Preencha o **Nome** do formulário.
5. Selecione a **Entidade de dados** à qual o formulário será vinculado. Neste passo a passo, vamos utilizar a entidade Lista de Compras como exemplo.

   Os campos da entidade serão exibidos em uma listagem na aba **Campos da lista** e podem ser selecionados para compor o formulário.
6. Selecione o campo de relacionamento e quaisquer outros que desejar incluir no formulário. Seguindo o exemplo, vamos incluir o campo **Cliente** (relacionamento) e os campos **ID do documento** e **Compras**.
7. Clique na aba **Esquemas de layout** para configurar o layout do formulário.
8. Clique em `Adicionar nova seção` para criar uma seção no formulário.
9. Nomeie a seção.
10. Arraste o campo de relacionamento (nesse caso, **Cliente**) para a seção e os demais campos que desejar incluir no formulário.
11. Clique em `Salvar`. Você será conduzido(a) para a listagem de formulários da aplicação, incluindo o novo formulário.
12. Na linha do novo formulário, clique no ícone de edição <i class="fas fa-edit"></i>.
13. Clique na aba **Esquemas de layout**.
14. Ao lado do campo de relacionamento (no exemplo, **Cliente**), clique no ícone de edição <i class="fas fa-edit"></i>.
15. Selecione a opção **Caixa de combinação** e clique em `OK`. Essa opção fará com que seja possível selecionar valores existentes do campo armazenados na entidade relacionada ao preencher o formulário.
16. Clique em `Salvar`.
17. Clique na aba **Aplicações**.
18. Clique no botão `Recarregar aplicações`.

Agora, ao criar um novo documento a partir do formulário, você pode selecionar o valor desejado (neste exemplo, o Cliente preexistente que irá se relacionar com a Lista de Compras).

Além do relacionamento, é possível também visualizar os registros relacionados ao visualizar cada registro de uma entidade, por exemplo, visualizar a ‘Lista de compras’ criada por um ‘Cliente’ ao consultar o registro do cliente.

Para isso, você precisa adicionar ao formulário da entidade o valor `{acronimo_da_entidade_relacionada}.{nome_campo_relacionamento}` no campo **Consultas de visualização**. Exemplo de preenchimento: `LC.cliente`.

## Adicionar filtros aos campos de relacionamento

Os relacionamentos são mantidos através dos IDs dos documentos. Então, ao tentar inserir o valor do campo de relacionamento como filtro no formulário, obteremos apenas os valores dos IDs dos documentos referidos, e não os valores do campo escolhido para cada documento. As imagem abaixo mostra esse resultado. Veja mais informações no artigo [Filtrar dados no Master Data](https://help.vtex.com/pt/tutorial/filtrando-dados-no-master-data--tutorials_778).

![Filtro relacionamento ID](//images.ctfassets.net/alneenqid6w5/4O1qpGWOrnnM3Zzmyqzymu/a9e179027658143481e6a6f3444e24cd/Filtro_relacionamento_ID.png)

