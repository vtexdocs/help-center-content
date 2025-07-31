---
title: 'Amazon Listing '
id: 5HIhbnYzJWkl2yM0o72WrL
status: PUBLISHED
createdAt: 2025-01-31T15:04:46.985Z
updatedAt: 2025-03-19T14:41:51.711Z
publishedAt: 2025-03-19T14:41:51.711Z
firstPublishedAt: 2025-01-31T15:23:33.368Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: amazon-listing
locale: pt
legacySlug: amazon-listing
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

O **Amazon Listing** é a funcionalidade utilizada pelo seller para cadastrar produtos através da interface do Admin VTEX e disponibilizá-los em um anúncio na Amazon. Ao finalizar a [integração com a Amazon](/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5J9CWPIbYQdAegJJWGsxan), é necessário disponibilizar os produtos de sua loja, para serem anunciados no marketplace. Para disponibilizar os produtos, existem duas possibilidades:
- Se o produto já existe na Amazon, o seller deve seguir as instruções do [Tutorial Match de anúncios Amazon](/pt/tutorial/match-de-anuncios-amazon--7fRfoP69kYgg8znImMhyQ0) para vincular seu produto a um anúncio na Amazon.  
- Se o produto ainda não existe na Amazon, o seller deve seguir as instruções deste tutorial para cadastrar seu produto e criar um novo anúncio na Amazon. 

![overview amazon listing](https://images.ctfassets.net/alneenqid6w5/6WBSbS8HiLi35enIvScFvC/f8ff5fccdf993505c11f30e83b3295f2/Overview-Amazon-Listing.gif)

<div class="alert alert-info">
Todos os produtos precisam ter <a href="https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb">Estoque</a> e <a href="https://help.vtex.com/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP">Preço</a> configurados antes de serem enviados ao marketplace.
</div>  

## Conhecendo a página

Para acessar o Amazon Listing, clique em **Marketplace > Conexões > Amazon Listing,** ou digite **Amazon Listing**  na barra de busca do Admin VTEX.

A página é composta pelos seguintes itens:

- [Barra de busca](#barra-de-busca)  
- [Filtros](#filtros)  
- [Listagem de SKUs](#listagem-de-skus)  

### Barra de busca

Na barra de busca, o seller pesquisará SKUs por **nome** ou por **SKU ID.** Veja exemplos abaixo.

![busca-nome-pt](https://images.ctfassets.net/alneenqid6w5/2tNnsb4mwSadZd91bIJufP/9d0bd4c705f4651f1768239b461113e3/busca-nome-pt.jpg)
![busca-sku-pt](https://images.ctfassets.net/alneenqid6w5/1p47pPgdDFnOsbrDLaIFv2/92159d05716cfa3b39c17ee724fc31a8/busca-sku-pt.jpg)

### Filtros

Os SKUs podem ser filtrados por sua **Categoria VTEX, Categoria Amazon, Marca** ou **Status.** Os filtros podem ser utilizados individualmente ou combinados, de acordo com a estratégia de cada seller.  

#### Tipos de filtro

- **Categoria VTEX:** este filtro apresenta as opções de categorias dos SKUs no catálogo da VTEX.  
- **Categoria Amazon:** este filtro apresenta as opções de categorias de SKUs na Amazon.  
- **Marca:** este filtro apresenta todas as marcas cadastradas no catálogo do seller.  
- **Status:** este filtro apresenta os status dos SKUs na listagem de produtos disponíveis no  Amazon Listing.  
Cada SKU apresentará um status. Veja a seguir quais são e o que cada um representa:

  - **Pronto para cadastro:** este status indica que os SKUs que estão disponíveis para o seller preencher os atributos e enviar à Amazon.
  - **Cadastro incompleto:** este status  indica que os SKUs tiveram os atributos preenchidos parcialmente pela VTEX.   
  - **Devolvido com erro:** este status indica os SKUs que foram enviados para a Amazon, porém com alguma informação incorreta. Neste caso a Amazon retorna o erro no SKU e o seller corrige e reenvia.  
  - **Enviado:** este status indica os SKUs que foram preenchidos corretamente e enviados à Amazon.  
  - **Publicado:** este status indica os SKUs que foram enviados e aceitos pela Amazon. Estes já estão disponíveis no marketplace.  

### Listagem de SKUs

Ao acessar o **Amazon Listing,** é apresentado uma listagem dos SKUs do catálogo do seller na VTEX, os quais estão disponíveis para a integração com a Amazon. Cada SKU na listagem apresenta as seguintes informações, **Nome do SKU, SKU ID, Categoria na Amazon** e **Status.**

## Cadastrando SKUs

O processo de cadastro de um SKU é realizado **exclusivamente** via **Amazon Listing.**  
O cadastro dos produtos apresentados nesta página é realizado manualmente, um a um, ou utilizando [templates](#template-de-cadastro) criados pelo seller.

Os SKUs que têm atributos mapeados anteriormente aparecerão na listagem com o status **cadastro incompleto.**   

Conheça a seguir o processo de cadastro via Amazon Listing: 

1. No Admin VTEX acesse **Marketplace > Conexões > Amazon Listing** ou digite **Amazon Listing** na barra de busca.  
2. Selecione o SKU que deseja cadastrar.  
3. Preencha os campos **Título, Descrição, Palavras-chave** e **Categoria.**  
4. Clique no botão `Salvar e enviar` para validar o cadastro e enviar à Amazon, ou clique no botão `Finalizar depois` para armazenar os dados já cadastrados e finalizar posteriormente.  

Ao finalizar o cadastro e enviar o SKU, ele entra em uma fila de processamento. O status muda para **Enviado,** aguardando aprovação ou rejeição da Amazon. Quando aceito, o SKU tem seu status alterado para **Publicado** e se rejeitado, o status é alterado para **Devolvido com erro**  para correção do seller.

## Template de cadastro de produtos

Para otimizar o cadastro, o seller pode criar templates que serão utilizados para aplicar os valores dos atributos selecionados para todos os SKUs de uma mesma categoria Amazon. Veja a seguir como criar e gerenciar os templates.

### Criar um template

1. No Admin VTEX acesse **Marketplace > Conexões > Amazon Listing,** ou digite **Amazon Listing** na barra de busca.  
2. Clique em um produto com o status **Enviado** ou **Publicado.**  
3. Clique no botão `Criar template` e um modal aparecerá na tela.  
4. Selecione os atributos desta categoria que você deseja aplicar para outros SKUs da mesma categoria.  
5. Clique no botão `Confirmar`.  

### Gerenciar templates

Na página de Gerenciamento de templates é possível filtrar os templates por categoria Amazon, excluir um template e editar um template. 

#### Editar template 

1. No Admin VTEX acesse **Marketplace > Conexões > Amazon Listing,** ou digite **Amazon Listing** na barra de busca.  
2. Clique no botão `Gerenciar templates`.  
3. Selecione o template que deseja editar.  
4. Faça as alterações necessárias.  
5. Clique no botão `Salvar` para prosseguir com as alterações, ou `Descartar` para excluir as alterações realizadas.  

Ao realizar a edição de um template, é possível adicionar novos atributos e excluir atributos do template já criado. Para realizar essa edição, siga os seguintes passos:

1. Na seção **Atributos,** clique no botão <i class="fas fa-pencil-alt" aria-hidden="true"></i> .  
2. Selecione o checkbox dos atributos que deseja incluir ou remover.
3. Clique no botão `Confirmar`.  

Quando alguma edição é feita no template, será apresentado no rodapé da página a opção de visualizar as alterações como na imagem a seguir.

![Gerenciar template Listing](https://images.ctfassets.net/alneenqid6w5/7arqSe1SUKeozJ5ObMOYSk/1d97d4c2a86ee45bc733600e7b5b8d3e/gerenciamento-template.jpg)

<div class="alert alert-info">
Todas as alterações realizadas no template, serão refletidas nos SKUs da categoria que ainda não foram enviados.
</div>

#### Deletar template

1. No Admin VTEX acesse **Marketplace > Conexões > Amazon Listing,** ou digite **Amazon Listing** na barra de busca.  
2. Clique no botão `Gerenciar templates`.  
3. No template que deseja excluir, clique no botão <i class="far fa-trash-alt" aria-hidden="true"></i> `lixeira`.  
4. No modal que aparecerá na tela, clique no botão `Concluir`.  

