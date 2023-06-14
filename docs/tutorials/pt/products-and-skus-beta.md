---
title: Produtos e SKUs (Beta)
id: 2ig7TmROlirWirZjFWZ3By
status: PUBLISHED
createdAt: 2022-11-30T17:55:25.970Z
updatedAt: 2023-05-09T22:11:41.664Z
publishedAt: 2023-05-09T22:11:41.664Z
firstPublishedAt: 2022-11-30T19:04:31.183Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: produtos-e-skus-beta
legacySlug: produtos-e-skus-beta
subcategory: 6XPsLadoT3moZ7eTduCg3c
---

<div class = "alert alert-info">
  <p>Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href = "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.</p>
</div>

A página **Produtos e SKUs** possibilita visualizar e gerenciar a lista completa de produtos cadastrados na sua loja, incluindo informações sobre SKUs, data da última atualização e status. Para acessá-la, entre no menu **Catálogo > Produtos e SKUs**.

![produtos-skus-pt](https://images.ctfassets.net/alneenqid6w5/1XLBRg7olhbAUmgkD6kb7K/46b067813ff58d78ebccde46c37b8079/produtos-skus-pt.PNG)

<div class="alert alert-info">
  <p>Esta página está disponível somente para lojas que estão operando com o <a href="https://help.vtex.com/pt/announcements/bem-vindo-ao-novo-admin-vtex--5tLPBodp6Xu03vYdyBTGTa">Novo Admin VTEX</a>. Para acessar esta página e fazer parte de uma nova experiência, participe do <a href="https://content.vtex.com/participe-do-programa-beta-pt/?utm_source=landing_page&utm_medium=help_center&utm_campaign=new_admin_beta">programa Beta</a> do Novo Admin VTEX.</p>
</div>

A página permite que você realize as seguintes ações:

- [Criar produto](#criar-produto)
- [Buscar produtos](#buscar-produtos)
- [Filtrar produtos](#filtrar-produtos)
- [Acompanhar status de produtos](#acompanhar-status-de-produtos)
- [Visualizar lista de SKUs](#visualizar-lista-de-skus)
- [Editar produtos](#editar-produtos)
- [Acessar menu de ações](#acessar-menu-de-acoes)
- [Ver informações de indexação](#ver-informacoes-de-indexacao)

A partir da lista de produtos, você pode visualizar as seguintes informações: 

| **Coluna** | **Descrição** |
|----|----|
| **Nome** | Nome que identifica o produto, definido na etapa de criação do produto. Abaixo do nome, a página exibe a ID, ou seja, o código identificador único do produto. |
| **SKUs** | Exibe a opção `Mostrar SKUs` e, entre parênteses, a quantidade de SKUs cadastrados para o produto. Para mais detalhes sobre essa opção, leia a seção [Visualizar lista de SKUs](#visualizar-lista-de-skus). <br/><br/> Para deixar de visualizar os SKUs referentes a um produto, clique no botão `Ocultar SKUs`. |
| **Última atualização** | Data da [indexação](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) mais recente do produto. Para visualizar detalhes sobre esse processo, confira a seção [Ver informações de indexação](#ver-informacoes-de-indexacao). |
| **Status** | Situação atual do produto. Confira os status possíveis na seção [Acompanhar status de produtos](#acompanhar-status-de-produtos).|

## Criar produto

Ao clicar no botão `Adicionar produto`, você abrirá a página para cadastro de um novo produto no Catálogo. Acesse o artigo [Preencher campos de cadastro de produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto) para saber como realizar esse procedimento.

## Buscar produtos

Para localizar um produto específico, você pode digitar um dos seguintes dados na barra de busca:

* ID do produto
* ID do SKU
* EAN do SKU
* Nome do produto
* Nome do SKU
* Código de referência do produto
* Código de referência do SKU

Em seguida, clique no critério que você deseja utilizar para a busca, conforme ilustrado na imagem a seguir:

![facelift-product-search-pt](https://images.ctfassets.net/alneenqid6w5/PCBjrNpVcVr5Z4x3RdTgW/83ece197b90922dac3fcad64b312294e/facelift-product-search-pt.gif)

A lista de produtos exibida será atualizada de acordo com sua busca. 

Para limpar a busca, clique no ícone <i class="far fa-times-circle"></i> na barra de busca.

## Filtrar produtos

A lista de produtos pode ser filtrada conforme a sua necessidade. Você pode utilizar os filtros a seguir:

* [Status](#acompanhar-status-de-produtos)
* [Marca](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh)
* [Categoria](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Seller](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w)
* [Kit](https://help.vtex.com/pt/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28)
* [Exibição na loja](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke?&utm_source=autocomplete)
* [Política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)

Selecione os filtros desejados e clique em `Aplicar` para filtrar os produtos. Para cancelar a seleção, clique em `Limpar`.

<div class="alert alert-warning">
  <p>Não é possível filtrar produtos por <a href="https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w">seller</a> ou por data da pré-venda nesta versão do Catálogo.</p>
</div>

## Acompanhar status de produtos

A última coluna da lista de produtos exibe a situação atual do produto, que pode ser:

| **Status** | **Descrição** |
|----|----|
| **Publicado** |Indica que o produto está ativo e disponível para compra na loja em pelo menos uma [política comercial](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV).|
| **Pendente** | Indica que faltam informações de cadastro do produto, de preço ou de logística para que ele possa ficar disponível na loja. <br/><br/> Para entender quais informações podem deixar a publicação do produto pendente, leia o artigo [Por que o produto não aparece no site?](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).|
| **Inativo** |Indica que o produto está desativado, portanto não está disponível para venda.|

Para visualizar o status dos SKUs de um produto, leia a seção [Visualizar lista de SKUs](#visualizar-lista-de-skus).

## Visualizar lista de SKUs

Ao clicar em `Ver SKUs` na linha de um produto da lista, a plataforma exibe uma lista com todos os SKUs cadastrados para aquele produto.

![sku-quick-actions-pt](https://images.ctfassets.net/alneenqid6w5/71pxP9DeCFZ9UrQdl67r9X/b75ddd51b11d3e3d9ab199be1a011f84/sku-quick-actions-pt.gif)

Na lista de SKUs, é possível identificar as informações a seguir:

* **Status**: situação atual do SKU, representada pelo ícone colorido na linha do SKU. Os status possíveis são os mesmos relacionados ao produto:
    * **Publicado:** indica que o SKU está ativo.
    * **Pendente:** indica que faltam informações de cadastro do SKU, de preço ou de logística para que ele possa ficar disponível na loja. Para entender quais informações podem deixar a publicação do SKU pendente, leia o artigo [Por que o produto não aparece no site?](https://help.vtex.com/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382).
    * **Inativo:** indica que o SKU está desativado, portanto não é visível na loja.
* **Imagem:** principal imagem associada ao SKU.
* **ID:** código identificador único do SKU.
* **Nome:** nome do SKU.
* <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class=" admin-ui-c-dnTJPl"><rect width="16rem" height="16rem" fill="none"></rect><path d="M224,177.32117V78.67873a8,8,0,0,0-4.07791-6.9726l-88-49.5a8,8,0,0,0-7.84418,0l-88,49.5A8,8,0,0,0,32,78.67873v98.64244a8,8,0,0,0,4.07791,6.97261l88,49.5a8,8,0,0,0,7.84418,0l88-49.5A8,8,0,0,0,224,177.32117Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></path><polyline points="222.897 74.626 128.949 128 33.108 74.617" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></polyline><line x1="128.94915" y1="127.99996" x2="128.01036" y2="234.82127" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line></svg> &nbsp; <strong>Editar inventário:</strong> conduz para a tela de gerenciamento de inventário no Admin VTEX, para alterar a quantidade do SKU disponível para a venda em estoque. Confira o artigo [Gerenciar inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) para mais informações.
* <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" fill="currentColor" viewBox="0 0 256 256" class=" admin-ui-c-dnTJPl"><rect width="16rem" height="16rem" fill="none"></rect><line x1="128" y1="72" x2="128" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line><line x1="128" y1="168" x2="128" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></line><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></circle><path d="M104,168h36a20,20,0,0,0,0-40H116a20,20,0,0,1,0-40h36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="18"></path></svg> &nbsp;<strong>Editar preços:</strong> conduz para a **Lista de preços** no Admin VTEX, para alterar os preços cadastrados para o SKU.

## Editar produtos

Para modificar informações no cadastro de um produto, você pode clicar em qualquer lugar na linha do produto. Assim, você pode acessar a página de cadastro do produto e alterar as informações desejadas.

Também é possível editar o produto a partir do [menu de ações](#acessar-menu-de-acoes) > `Editar produto`.

## Acessar menu de ações

Ao clicar no ícone de menu <i class="fas fa-ellipsis-v"></i> em um produto, você pode realizar as seguintes ações:

* **Editar produto:** conduz para a tela de cadastro do produto para alterar informações.
* **Ver lista de SKUs:** conduz para a tela de listagem de SKUs.
* **Editar categoria similar:** conduz para a tela de cadastro de categoria similar, que permite associar uma outra categoria ao produto. Para mais informações, leia [Configurar categoria similar](https://help.vtex.com/pt/tutorial/configurando-categoria-similar--tutorials_204).
* **Editar preços:** conduz para a **Lista de preços** no Admin VTEX, para alterar os preços cadastrados para o produto e seus SKUs.
* **Editar inventário:** conduz para a tela de gerenciamento de inventário no Admin VTEX, para alterar a quantidade de cada SKU do produto disponível para a venda em estoque. Confira o artigo [Gerenciar inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) para mais informações.
* **Ver na loja:** conduz para a página de detalhes do produto no storefront.
* **Ver informações de indexação:** abre um modal com informações sobre a indexação do produto e dos SKUs. Confira a seção [Ver informações de indexação](#ver-informacoes-de-indexacao) para mais detalhes.

## Ver informações de indexação

Ao clicar no menu <i class="fas fa-ellipsis-v"></i> na linha de um produto e optar por **Ver informações de indexação**, você tem acesso a um modal com duas abas que apresentam detalhes sobre a [indexação](https://help.vtex.com/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) do produto e dos SKUS:

- [Preço e Inventário](#preco-e-inventario)
- [Log de indexação](#log-de-indexacao)

### Preço e inventário

Esta aba do modal exibe a lista de SKUs associados ao produto e suas respectivas informações indexadas.

![catalog-price-inventory-pt](https://images.ctfassets.net/alneenqid6w5/4JWODR51ILI7KhEnzVC2t2/6ae475a3c76de0310e1fc08b8d087312/preco-inventario-pt.PNG)

Ao clicar na seta `>` na linha de cada SKU, você pode visualizar uma tabela com as as seguintes informações:

| **Coluna** | **Descrição** |
|---|---|
| **Seller** | Nome do seller apto a vender o SKU. |
| **Política comercial** | Número e nome da política comercial relacionada. |
| **Preço** | Preço do SKU na política comercial. |
| **Inventário** | Quantidade do SKU disponível para a venda em estoque. |

### Log de indexação

Esta aba do modal apresenta o log, ou seja, o registro técnico detalhado da indexação referente ao produto e aos SKUs relacionados.

![indexed-log-pt](https://images.ctfassets.net/alneenqid6w5/4pPJmvun6SB9jTFqSR7XSX/1d3d2899be6f6fb3b6b3aa8b993d71a4/log-indexacao-pt.PNG)

## Saiba mais

* [Preencher campos de cadastro de produto](https://help.vtex.com/pt/tutorial/campos-de-cadastro-de-produto)

