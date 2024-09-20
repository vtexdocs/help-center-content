---
title: 'Criar formulário no Master Data'
id: tutorials_1047
status: PUBLISHED
createdAt: 2017-04-27T21:57:35.614Z
updatedAt: 2024-06-19T15:04:30.932Z
publishedAt: 2024-06-19T15:04:30.932Z
firstPublishedAt: 2017-04-27T23:03:43.083Z
contentType: tutorial
productTeam: Master Data
author: authors_3
slug: criando-formulario-no-master-data
locale: pt
legacySlug: criando-formulario-no-master-data
subcategoryId: WpbGhubuRZaNZilJSXnqu
---

Um formulário serve como interface para visualização e manipulação de uma entidade de dados. Em essência, ele atua como um agrupador de campos.

Embora esteja sempre associado a uma entidade de dados, não é obrigatório que contenha todos os campos relacionados a ela, podendo ser personalizado conforme a demanda. Dessa forma, é possível criar diferentes formulários para uma mesma entidade, adaptando-se às distintas necessidades. Por exemplo, um formulário de compra pode incluir campos como ID, cliente e data.

Para criar um formulário, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Certifique-se que está na aba __Aplicações__.
3. Na aplicação em que deseja criar o formulário, clique no ícone de engrenagem <i class="fas fa-cog"></i>.
4. Na listagem de formulários, clique no botão `Novo`.
5. Preencha os campos descritos na seção [Campos do formulário](#campos-do-novo-formulario).
6. Clique no botão `Salvar`.

## Campos do novo formulário

- **Nome:** Nome do formulário.
- **Filtros:** Campos marcados como filtro da entidade, esses campos formarão os filtros laterais do formulário. Deve ser inserido o nome interno do campo. Para mais de um campo, separe-os por vírgulas. Exemplo: campo1,campo2.
- **Entidade de dados:** A entidade de dados para a qual o formulário vai salvar e exibir os dados. 
- **Destaques da busca:** Os campos que serão listados nos resultados de busca. Deve ser inserido o nome interno do campo. Para mais de um campo, separe-os por vírgulas. Exemplo: para buscar por cliente e fazer com que na listagem de resultado apareça o CPF do cliente e o nome, é necessário preencher o campo com CPF e nome.
- **Consultas de visualização:** Habilita uma nova seção no formulário de exibição, com registros de uma entidade relacionada à entidade do formulário. As informações exibidas serão relacionadas ao registro que está sendo visualizado.

   Por exemplo, na entidade __Lista de compras__, existe um campo relacionado com a entidade __Cliente__. Então, no formulário __Cliente__, no campo __Consultas de visualização__, insira este campo de atendimento que faz referência à entidade __Cliente__.

   Se a sigla da entidade __Lista de compras__ for __LC__ e o nome do campo for __Cliente__, deve ser inserido `LC.Cliente` para carregar os atendimentos do cliente que está sendo visualizado no formulário.

   ![registrosRelacionados-pt](//images.ctfassets.net/alneenqid6w5/3j6iBpbL7ao6soYaME4e2a/ce0d55331a7bbb03ce1213bb85b7efd0/image_3.png)

Após preencher os campos obrigatórios, aparecerão as abas disponíveis para configuração. Confira abaixo os campos de cada uma delas.

- **Campos da lista:** Aqui, devem ser selecionados os campos que aparecerão na listagem de registros, ao clicar para visualizar o formulário. Para isso, basta marcar as caixas de seleção ao lado dos campos que você deseja que apareçam na listagem. Além disso, é possível configurar a largura do campo na listagem (a largura da coluna), a ordem de exibição e a ordenação.

   A ordem de exibição dos campos da listagem seguirá a ordem dessa tela, ou seja, para que um campo apareça na primeira coluna, clique na seta para cima, até que este seja o primeiro campo. A ordenação é definida por um campo, você deve selecioná-lo e escolher entre ordenação ascendente (Asc) ou descendente (Desc).
- **Esquemas de layout:** neste campo, será feita a definição de como realmente os campos serão exibidos no formulário, tanto para visualização quanto para edição e criação. Ou seja, nesta parte você deve configurar onde cada campo ficará dentro do formulário e como os campos serão divididos por seções. Para isso, siga os passos abaixo:

   1. Clique no botão `Adicionar nova seção`.
   2. Preencha o campo **Nome** para nomear a seção.
   3. Arraste um campo da lista **Campos disponíveis** para a coluna **Campos da coluna 1**. O mesmo pode ser feito para a coluna **Campos da coluna 2**. 

  Esses três passos podem ser repetidos até que se tenha o formulário no formato em que se deseja. É possível inserir vários campos na mesma coluna, assim como é possível criar várias seções. 

- **Consultas:** Essa aba serve apenas para exibir as [consultas criadas na listagem](https://help.vtex.com/pt/tutorial/criando-uma-consulta-personalizada-no-master-data--tutorials_799).
- **Folha de estilo:** Local para inserção de CSS para edição do frontend do formulário.
