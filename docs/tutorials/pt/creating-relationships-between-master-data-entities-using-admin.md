---
title: 'Criar relacionamentos entre entidades do Master Data usando o Admin'
id: 1qzbCit8SYXbKwrT5x2FfA
status: PUBLISHED
createdAt: 2020-08-11T13:48:26.272Z
updatedAt: 2022-10-17T19:11:39.513Z
publishedAt: 2022-10-17T19:11:39.513Z
firstPublishedAt: 2020-08-18T19:47:29.772Z
contentType: tutorial
productTeam: Master Data
author: 1ofpAV0ehUdsaOloLrmD40
slug: criar-relacionamentos-entre-entidades-do-master-data-usando-o-admin
legacySlug: criar-relacionamento-com-entidades-e-documentos-do-master-data-usando-o
subcategory: 2AThnkEZAYbk4G4EIs53rL
---

## O que é um relacionamento entre entidades do Master Data?
Um relacionamento entre entidades é uma referência entre documentos que pertencem a domínios distintos. Essa referência é definida por um campo em uma dessas entidades. Na prática, esse campo será preenchido com o ID de um documento da entidade relacionada, sendo este invisível para o usuário.

Por exemplo, digamos que você tem uma entidade Clientes e outra Lista de Compras, e quer que cada cliente possa ter várias listas de compras. Basta criar um campo na entidade Lista de Compras para informar a qual cliente ela pertence. 

Se você é familiarizado com SQL, pode pensar em um relacionamento como uma [foreign key](https://www.sqltutorial.org/sql-foreign-key/).

O Master Data já possui por padrão alguns relacionamentos pré-definidos, como os de Cliente (CL) e Endereço (AD). 

## Como criar um relacionamento entre entidades?
Para criar um relacionamento, primeiro são necessárias duas entidades. Para saber como criá-las, consulte o guia [Criar entidade de dados](https://help.vtex.com/pt/tutorial/creating-data-entity--tutorials_1265). Também será necessário criar pelo menos um campo em uma entidade de dados e adicioná-lo ao formulário, o que pode ser visto no artigo [Criar um campo no Master Data](https://help.vtex.com/pt/tutorial/how-can-i-create-a-field-in-master-data--frequentlyAskedQuestions_1829).

Neste exemplo, é criada uma entidade chamada `Lista de Compras` que se relacionará com a entidade `Cliente`. Esse relacionamento permitirá que um cliente possa ter várias listas de compras, porém uma lista de compras só pode pertencer a um único cliente.

1. No Master Data, clique na aba **Aplicações**.
2. Depois, clique no botão **Advanced settings** (Configurações avançadas).  
![Configurações Avançadas](//images.ctfassets.net/alneenqid6w5/6wFQw4Qk1qjan3kff0slhB/f35565fd34625205f1e28006292fc110/Advanced_settings.png)
3. Selecione a opção **Estrutura de dados**. Isso abrirá uma nova aba para o Dynamic Storage (DS).  
![Estrutura de dados](//images.ctfassets.net/alneenqid6w5/24pLSQHFkz2TnB0VMU6yKk/04a32ffbeeedc0f615b2adb42038e676/Estrutura_de_dados.png)
4. No Dynamic Storage, clique na aba **Data Entities** (Entidades de dados).
5. Se deseja criar um relacionamento em uma nova entidade, clique no botão **Add new** (Adicionar nova) para criar uma nova entidade de dados. _Caso queira criar um relacionamento em uma entidade existente, localize-a e clique no botão **Edit** (Editar), e siga para o passo 7_.  
![Adicionar nova entidade de dados](//images.ctfassets.net/alneenqid6w5/6RnSgkbz7LF0S8kwMHBReK/7895df7b2ac14d5fea332040a40977d8/Adicionar_nova_entidade_dados.png)  
![Editar entidade Lista de Compras](//images.ctfassets.net/alneenqid6w5/1NMNJbWq3qnVjc0nt4x8ok/4a9f852803c1c3cc391c572bd61ba8a9/Editar_entidade_Lista_de_Compras.png)
6. Configure a entidade que será criada preenchendo os campos **Acronym** (Acrônimo) e **Name** (Nome) e adicionando os campos desejados. Neste exemplo, a entidade utilizará o nome `Lista de compras`, o acrônimo `LC` e o campo `compras` de tipo `Varchar 750`.
7. Adicione um campo de tipo `Relationship` (Relacionamento) e defina seu nome. Neste exemplo, ele será chamado de `Cliente`.
8. Então, clique no botão **Edit** (Editar, no ícone de engrenagem) do campo de relacionamento para configurá-lo.
9. Na configuração **Custom field type settings** (Configurações de tipo de campo personalizado), selecione a entidade à qual se deseja fazer referência e o campo que será mostrado no relacionamento. Neste exemplo, o relacionamento será feito com a entidade "Cliente" e será exibido o campo "email".  
![Relacionamento entidade Lista de Compras](//images.ctfassets.net/alneenqid6w5/3YjtdLHluQz9ve11TkmylY/41cb881fc6bfe93744e4a68cca8ea43a/Lista_Compras_Relacionamento.png)
10. Clique no botão **Save**  (Salvar) para salvar as configurações.
![Salvar entidade de dados](//images.ctfassets.net/alneenqid6w5/3HaACxzYeRsUE5i8jLRGf/c96ed109ce54f70138489cf25cb87cd8/Salvar_entidade_de_dados.png)
11. Volte para a lista de entidades. Lembre-se que a entidade com o relacionamento deve ser publicada clicando em seu botão **Publish** (Publicar, no ícone de disquete). Também pode ser necessário atualizar as aplicações para que sejam implementadas as modificações. Para isso, vá em **Aplicações** e clique no botão **Reload applications** (Recarregar aplicações).  
![Publicar entidade Lista de Compras](//images.ctfassets.net/alneenqid6w5/4R9mLqBcx8Vq2JaurbmLkG/6ace79062a37f8a0ecd24f95a6ec2c2d/Publicar_entidade_Lista_de_Compras.png) 

![Master Data Reload applications](//images.ctfassets.net/alneenqid6w5/6gud9kq3gpHbU9a23xzzSZ/e3e9f10a22b7567b1698342374f10bb6/Master_Data_Reload_applications.png)

## Como criar um relacionamento entre documentos?

Os relacionamentos também podem ser aplicados a documentos específicos das entidades de dados. A entidade de relacionamento `Lista de Compras` será utilizada novamente como exemplo e também será considerado que alguns documentos foram criados nela. Além disso, será necessário modificar o formulário de uma entidade de dados, o que pode ser visto no artigo [Criar um campo no Master Data](https://help.vtex.com/pt/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829).

1. Para relacionar os documentos, adicione o campo de relacionamento ao formulário da entidade que contém a referência. Para facilitar, você pode definir o campo como uma combo box para mostrar todos os valores disponíveis. Mais detalhes podem ser vistos no artigo [Criar um campo no Master Data](https://help.vtex.com/pt/tutorial/como-crio-um-campo-no-master-data--frequentlyAskedQuestions_1829#crm).
2. Selecione o valor desejado (neste caso, o cliente que irá se relacionar com a lista de compras).
![Selecionar relacionamento de documento Master Data](//images.ctfassets.net/alneenqid6w5/6Ss4S4Be4qRqNKLWBz51KF/a913e0402c87456ab9ca07e7431d4eac/Selecionar_relacionamento_de_documento_Master_Data.png)
3. Clique em **Salvar**.

Ao adicionar o campo na tabela, observe os valores que foram definidos. 
![Tabela de relacionamento de documentos Master Data](//images.ctfassets.net/alneenqid6w5/43607tgaCHpBOeKQ3w9VUd/5658949f4c0a72a5ed7bdd9af7819896/Tabela_de_relacionamento_de_documentos_Master_Data.png)

## Como adicionar filtros aos campos de relacionamento?

Os relacionamentos são mantidos através dos IDs dos documentos. Então, ao tentar inserir o valor do campo de relacionamento como filtro no formulário, obteremos apenas os valores dos IDs dos documentos referidos, e não os valores do campo escolhido para cada documento. As duas figuras abaixo mostram esse resultado. Veja mais informações no artigo [Filtrar dados no Master Data](https://help.vtex.com/pt/tutorial/filtrando-dados-no-master-data--tutorials_778).

![Selecionar filtro relacionamento](//images.ctfassets.net/alneenqid6w5/Kh7PNTktepTfJn4s5AQlI/cc64d40a1bcfcd5b508dae36b7ee80cd/Selecionar_filtro_relacionamento.png)

![Filtro relacionamento ID](//images.ctfassets.net/alneenqid6w5/4O1qpGWOrnnM3Zzmyqzymu/a9e179027658143481e6a6f3444e24cd/Filtro_relacionamento_ID.png)

Caso queira ver os valores dos campos, e não seus IDs, a filtragem pode ser feita com um campo automático. Para isso:

1. No Master Data, vá em **Aplicações** > **Advanced settings** (Configurações avançadas) > **Estrutura de dados** para acessar o Dynamic Storage.
2. Depois, para ver as entidades de dados, selecione **Data Entities** (Entidades de dados).
3. Na entidade que contém o relacionamento (neste caso é `Lista de Compras`), clique no botão **Editar**.  
![Editar entidade Lista de Compras](//images.ctfassets.net/alneenqid6w5/1NMNJbWq3qnVjc0nt4x8ok/01edd05338b039279672d9cfc4a49164/Editar_entidade_Lista_de_Compras.png)
4. Selecione a aba **Automatic fields** (Campos automáticos).
5. Clique no botão **New Calculated Field** (Novo campo calculado).  
![Relacionamento automatic fields](//images.ctfassets.net/alneenqid6w5/5StRAtwfrzUWnSzOLrHJqM/603a35102ef272d3c5b633eaa3e757e7/Relacionamento_automatic_fields.png)
6. Preencha os campos **Name** (Nome), **Display Name** (Nome de exibição) e **Type** (Tipo) conforme desejado. Neste exemplo, serão utilizados `emailCliente`, `E-mail cliente` e Varchar 50.
7. Clique no ícone de engrenagem para inserir configurações adicionais.  
![Nome automatic field](//images.ctfassets.net/alneenqid6w5/4lAatUDVlXMOpNLKX1kx0J/c2c03a8312fecf60f203fca29aca8d3c/Nome_automatic_field.png)
8. Insira as configurações desejadas e use a fórmula para escolher o campo da entidade relacionada que se deseja mostrar no filtro. Neste exemplo, será utilizado o email do cliente.
![Configurar relacionamento automatic fields](//images.ctfassets.net/alneenqid6w5/1cmXmQDZaepVddzoExEl1r/8605aa25dbc22ba6d28674472fc80232/Configurar_relacionamento_automatic_fields.png)
9. Clique no botão **Validate** (Validar).
10. Na janela que abrirá, insira um email genérico e clique em **Ok**.  
![Validar automatic field](//images.ctfassets.net/alneenqid6w5/5nLfBVHL6YfedIALJsf6QX/4855b244c37edd42b9c65398153b93a0/Validar_automatic_field.png)
11. Em seguida, aparecerá um aviso indicando que a fórmula é válida, como mostrado na imagem abaixo. Clique em **Ok**.  
![Fórmula válida automatic field](//images.ctfassets.net/alneenqid6w5/79A6B2D9TMjkpkj6gkez9Y/2c91fa6856ae00b4ae824b25216a6a46/F__rmula_v__lida_automatic_field.png)
12. Clique em **Save** (Salvar) para salvar as configurações.

Depois de realizar os passos acima, o filtro será aplicado ao relacionamento. No formulário da entidade (`Lista de Compras`), adicione esse novo campo ao filtro após atualizar os registros.
![Selecionar filtro relacionamento valor](//images.ctfassets.net/alneenqid6w5/6KQwyXBZ0VaK2srXFiupmv/731c3fa19a7a8c3d9cf91a3733d86c7c/Selecionar_filtro_relacionamento_valor.png)

Dessa forma, podemos ver o filtro com os valores no lugar dos IDs.
![Filtro relacionamento valor](//images.ctfassets.net/alneenqid6w5/2mcBmzqxJLm7L3GrZuFeVa/5c63307856159af60995094fa6e99f42/Filtro_relacionamento_valor.png)

