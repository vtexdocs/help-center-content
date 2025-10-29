---
title: 'Produtos e SKUs'
id: 2ig7TmROlirWirZjFWZ3By
status: PUBLISHED
createdAt: 2022-11-30T17:55:25.970Z
updatedAt: 2025-06-12T15:40:53.270Z
publishedAt: 2025-06-12T15:40:53.270Z
firstPublishedAt: 2022-11-30T19:04:31.183Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: products-and-skus
legacySlug: produtos-e-skus-beta
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

A página **Produtos e SKUs** possibilita visualizar e gerenciar a lista completa de produtos cadastrados na sua loja, incluindo informações sobre SKUs, data da última atualização e status. Para acessá-la, entre no menu **Catálogo > Produtos e SKUs**.

![products_and_skus_listing_page_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/produtos-e-skus_1.png)

A página permite que você realize as seguintes ações:

- [Criar produto](#criar-produto)
- [Buscar produtos](#buscar-produtos)
- [Filtrar produtos](#filtrar-produtos)
- [Acompanhar disponibilidade de produtos](#acompanhar-disponibilidade-de-produtos)
- [Visualizar lista de SKUs](#visualizar-lista-de-skus)
- [Editar produtos](#editar-produtos)
- [Acessar menu de ações](#acessar-menu-de-acoes)
- [Ver informações de indexação](#ver-informacoes-de-indexacao)

A partir da lista de produtos, você pode visualizar as seguintes informações: 

| **Coluna** | **Descrição** |
|----|----|
| **Nome** | Nome que identifica o produto, definido na etapa de criação. Abaixo do nome, a página exibe a ID do produto, ou seja, o código identificador único do produto. <br/><br/> Ao lado do nome, cada linha exibe uma seta <i class="fas fa-chevron-right"></i> para [visualizar a lista de SKUs](#visualizar-lista-de-skus) associados ao produto, um ícone de [status do produto](#acompanhar-disponibilidade-de-produtos) e a imagem cadastrada para o produto. |
| **Última atualização** | Data da [indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) mais recente do produto. Para visualizar detalhes sobre esse processo, confira a seção [Ver informações de indexação](#ver-informacoes-de-indexacao). |

## Criar produto

Ao clicar no botão `Adicionar produto`, você abrirá a página para o [cadastro de um novo produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8) no Catálogo. Para mais informações sobre o preenchimento de cada campo, veja o artigo [Preencher campos de cadastro de produto](/pt/tutorial/campos-de-cadastro-de-produto).

## Buscar produtos

Para localizar um produto específico, você pode digitar um dos seguintes dados na barra de busca:

* ID do produto
* ID do SKU
* EAN do SKU
* Nome do produto
* Nome do SKU
* Código de referência do produto
* Código de referência do SKU

Após digitar a informação na barra de busca, a barra se expande e apresenta os critérios existentes. Ao clicar na opção desejada, a busca é imediatamente realizada e retorna os resultados. Para limpar a busca, basta clicar no ícone X na barra de busca.

> ℹ️ A ordenação das buscas é conforme a data de atualização: quanto mais recente a atualização de um produto ou SKU, maior sua prioridade nos resultados buscados.

## Filtrar produtos

A lista de produtos pode ser filtrada pelas opções da lista abaixo. Para isso, basta selecionar os filtros desejados e clicar em `Aplicar`. Para cancelar a seleção, clique no filtro selecionado e em seguida clique em `Limpar`.

* [Status](#filtrar-por-status)
* [Marca](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7i3sB8fgkqUp5NoH5yJtfh)
* [Categoria](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/2gkZDjXRqfsq62TlAkj4uf)
* [Seller](/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w)
* [Kit](/pt/tutorial/o-que-e-um-kit--5ov5s3eHM4AqAAgqWwoc28)
* [Exibição na loja](/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke?&utm_source=autocomplete)
* [Política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)
* Data de criação

> ℹ️ Uma forma rápida de encontrar produtos criados recentemente é utilizando o filtro `Data de criação`. Você pode escolher entre as opções de produtos criados `Hoje` ou nos `Últimos 7 dias`.

### Filtrar por status

| **Tipo de status** | **Descrição** |
| :----------: | :---------- |
| Ativo | O produto se torna ativo quando o lojista habilita essa configuração no produto, demonstrando querer vendê-lo.Para ser vendido, o produto precisa estar ativo, mas essa ativação não garante sua disponibilidade, pois o produto disponível precisa atender a outros fatores, como preço, inventário, entre outros. Saiba mais em [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). |
| Inativo | O produto se torna inativo quando o lojista desabilita essa configuração, indicando não querer vendê-lo no momento.Todo produto inativo se encontra indisponível para vendas. |

## Acompanhar disponibilidade de produtos

Na página **Produtos e SKUs**, cada produto tem um ícone colorido que sinaliza sua disponibilidade para vendas. Ao passar o mouse sobre o ícone, são fornecidas algumas informações, veja mais detalhes na tabela abaixo:

| **Cor de ícone** | **Nome** | **Significado** |
| :---: | :---: | :--- |
| Verde | `Disponível para venda` | O produto está habilitado para o status ativo e se encontra disponível para vendas na loja, associado a pelo menos uma [política comercial](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV). |
| Laranja | `Produto indisponível` | O produto está indisponível para venda, apesar de estar ativo. Ou seja, o lojista habilitou o status que demonstra querer vender o produto, mas no momento isso não é possível.Diferentes motivos podem causar a indisponibilidade do produto, tais como preço, inventário, logística ou outro. Para mais informações, confira o artigo [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382). |
| Branco | `Inativo no catálogo` | O produto está desabilitado e tem status inativo.Quando o lojista desativa o produto, é porque não deseja vendê-lo e, neste caso, o acompanhamento de sua disponibilidade não se aplica. |

Os ícones de disponibilidade do produto são igualmente aplicáveis para o SKU, conforme apresentado na seção a seguir.

## Visualizar lista de SKUs

Ao clicar na seta <i class="fas fa-chevron-right"></i> na linha de um produto, a plataforma exibe uma lista com todos os SKUs cadastrados para aquele produto, conforme apresentado na imagem abaixo:

![products_and_skus_sku_icons_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/produtos-e-skus_2.gif)

Na lista de SKUs, é possível identificar as informações a seguir:

* **Ícone colorido:** situação atual do SKU com relação a sua disponibilidade para vendas. Os ícones têm o mesmo significado daqueles relacionados ao produto, como apresentado em [Acompanhar disponibilidade de produtos](#acompanhar-disponibilidade-de-produtos).
* **Imagem:** principal imagem associada ao SKU.
* **ID:** código numérico identificador único do SKU.
* **Nome:** nome do SKU.

Quando você passa o mouse sobre a linha de um SKU, aparecem ícones que te permitem realizar diferentes ações:

* <i class="fas fa-cube" aria-hidden="true"></i> __Editar inventário:__ conduz para a tela de gerenciamento de inventário no Admin VTEX, para alterar a quantidade do SKU disponível para a venda em estoque. Confira o artigo [Gerenciar inventário](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) para mais informações.
* <i class="fas fa-dollar-sign" aria-hidden="true"></i> __Editar preços:__ conduz para a **Lista de preços** no Admin VTEX, para alterar os preços cadastrados para o SKU.
* <i class="fas fa-info-circle" aria-hidden="true"></i> __Informação:__ abre um modal para consultar as informações de preço, inventário e política comercial do SKU.
* <i class="far fa-clone" aria-hidden="true"></i> __Copiar código do SKU:__ copia o ID do SKU para a área de transferência.
* <i class="far fa-eye"></i> __Ativar__ / <i class="far fa-eye-slash"></i> __Desativar:__  abre uma janela que permite ativar o SKU na loja ou torná-lo inativo.

## Editar produtos

Para modificar informações no cadastro de um produto, você pode clicar em qualquer lugar na linha do produto. Assim, você pode acessar a página de [cadastro do produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8) e alterar as informações desejadas.

Também é possível editar o produto a partir do [menu de ações](#acessar-menu-de-acoes) > `Editar produto`.

## Acessar menu de ações

Ao clicar no ícone de menu <i class="fas fa-ellipsis-v"></i> em um produto, você pode realizar as seguintes ações:

* **Editar produto:** conduz para a tela de [cadastro do produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8) para alterar informações.
* **Duplicar:** duplica o produto, criando um novo produto com as mesmas configurações e os mesmos SKUs.
* **Ver lista de SKUs:** conduz para a tela de listagem de SKUs.
* **Editar categoria similar:** conduz para a tela de cadastro de categoria similar, que permite associar uma outra categoria ao produto. Para mais informações, leia [Configurar categoria similar](/pt/tutorial/configurando-categoria-similar--tutorials_204).
* **Editar preços:** conduz para a **Lista de preços** no Admin VTEX, para alterar os preços cadastrados para o produto e seus SKUs.
* **Editar inventário:** conduz para a tela de gerenciamento de inventário no Admin VTEX, para alterar a quantidade de cada SKU do produto disponível para a venda em estoque. Confira o artigo [Gerenciar inventário](/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) para mais informações.
* **Ver na loja:** conduz para a página de detalhes do produto (PDP) no [storefront](/pt/tutorial/visao-geral-storefront--7cRrL2xtY7HDqiyep1PxIS) da loja.
* **Ver informações de indexação:** abre um modal com informações sobre a indexação do produto e dos SKUs. Confira a seção [Ver informações de indexação](#ver-informacoes-de-indexacao) para mais detalhes.

## Ver informações de indexação

A página **Produtos e SKUs** permite que você acompanhe os registros técnicos da [indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) de produtos e SKUs, também chamados de logs. Para isso, na linha correspondente ao produto desejado, clique no [menu de ações](#acessar-menu-de-acoes) <i class="fas fa-ellipsis-v" aria-hidden="true"></i> e escolha a opção `Ver as informações de indexação`. Feito isso, o modal **Log de indexação** será aberto, como na imagem abaixo:

![products_and_skus_indexing_modal_PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/catálogo/produtos-e-skus/produtos-e-skus_3.png)

No canto superior direito do modal, você tem a opção de copiar o conteúdo para a área de transferência, clicando em <i class="far fa-clone" aria-hidden="true"></i> `Copiar`. Para fechar o modal, clique no ícone <i class="far fa-times-circle" aria-hidden="true"></i> ou clique fora do modal.

## Saiba mais

* [Adicionar ou editar produto](/pt/tutorial/adicionar-ou-editar-produto--29IkdEu6GofCFlltsZh2H8)
* [Adicionar ou editar SKU](/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN)
* [Preencher campos de cadastro de produto](/pt/tutorial/campos-de-cadastro-de-produto--4dYXWIK3zyS8IceKkQseke)
* [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382)
* [Quais configurações logísticas impactam na disponibilidade do produto no carrinho?](/pt/tutorial/quais-configuracoes-logisticas-impactam-na-disponibilidade-do-produto-no-carrinho--NAyBFToRdvlDyOzeeAeNw)
