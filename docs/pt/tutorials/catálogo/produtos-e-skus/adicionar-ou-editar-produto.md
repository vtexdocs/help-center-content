---
title: 'Adicionar ou editar produto'
id: 29IkdEu6GofCFlltsZh2H8
status: PUBLISHED
createdAt: 2024-08-29T19:11:09.043Z
updatedAt: 2025-10-20T15:24:51.383Z
publishedAt: 2025-10-20T15:24:51.383Z
firstPublishedAt: 2024-08-29T19:14:22.359Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: adding-or-editing-products
legacySlug: cadastro-de-produtos-beta
locale: pt
subcategoryId: pwxWmUu7T222QyuGogs68
---

A página [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By) permite ao lojista gerenciar produtos e variações existentes ou cadastrar novos. Este artigo orienta sobre como adicionar ou editar produtos. Caso deseje informações relacionadas a SKUs, confira o artigo [Adicionar ou editar SKU](/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN).

> ℹ️ Também é possível cadastrar produtos pela [importação de planilha](/pt/tutorial/preencher-campos-da-planilha-de-importacao--4nYhx63Q5yokQWaMguaIgI) ou via ERP, seguindo as orientações do [Back office integration guide (ERP/PIM/WMS)](https://developers.vtex.com/docs/guides/erp-integration-import-products) do nosso portal para desenvolvedores.

Para adicionar um novo produto ao catálogo da loja, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Produtos e SKUs**, ou digite **Produtos e SKUs** na barra de busca no topo da página.
2. Clique em `+ Adicionar produto`.
3. Na aba **Produto**, preencha os campos da etapa **Padrão**, conforme descrito nas seções:

    - [Informações gerais](#informacoes-gerais)
    - [SEO](#seo)
    - [Frente de Loja](#frente-de-loja)
    - [Identificadores](#identificadores)

    > Os campos de preenchimento obrigatório estão marcados com um asterisco (*).

4. Dependendo da categoria do produto, pode surgir a etapa **Atributos da categoria** e apresentar novas seções. Preencha os campos conforme orientado em [Atributos de categoria](#atributos-de-categoria).
5. Clique em `Salvar`.

> ❗ Uma vez que o produto seja criado, ele pode ser inativado, mas não é possível excluir um único produto. A plataforma só permite excluir produtos e SKUs em massa por meio da [Manutenção de Base (Full Cleanup)](/pt/tutorial/manutencao-de-base-full-cleanup--34P9LGs7BCIQK6acQom802).

> ℹ️ Se após criar o produto ele não aparecer na vitrine da loja, confira o artigo [Por que o produto não aparece no site?](/pt/faq/por-que-o-produto-nao-aparece-no-site--frequentlyAskedQuestions_382) e saiba como resolver o problema.

Veja nas próximas seções as orientações sobre como preencher os campos de criação do produto.

## Informações gerais

Os campos desta seção são sobre os dados gerais do produto:

- **Nome do produto*:** insira o nome do produto, que será apresentado para os clientes na experiência de navegação. O limite são 150 caracteres. Este campo é muito importante para [SEO](/pt/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG), por isso temos algumas recomendações:
  - ✅ Use palavras simples
  - ❌ Evite outros idiomas
  - ❌ Evite escrita complexa

- **Ativo:** para ativar o produto, habilite o toggle <i class="fas fa-toggle-on" aria-hidden="true"></i> **Ativo**. Para mantê-lo inativo, deixe o toggle desabilitado <i class="fas fa-toggle-off" aria-hidden="true"></i>. Saiba mais sobre status de produto no artigo [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By).
- **Descrição:** na caixa de texto, digite as informações gerais sobre o produto. Esse conteúdo é apresentado aos clientes na vitrine da loja, por isso recomendamos criar um resumo simples e de fácil entendimento.
- **Descrição complementar:** ao ativar o toggle <i class="fas fa-toggle-on" aria-hidden="true"></i> **Descrição complementar**, aparece uma caixa de texto para preencher com conteúdo adicional do produto, como informações resumidas.
- **Marca*:** digite ou busque o nome da [marca](/pt/tutorial/o-que-e-uma-marca--QU07yhHoaWcEYseEucOQW) do produto, e selecione a opção desejada. É necessário [cadastrar a marca](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/7lEGOSpAlQJCs5eUc5XFmR) previamente e garantir que ela esteja ativa.
- **Categoria*:** digite ou busque o nome da [categoria](/pt/tutorial/o-que-e-uma-categoria--6HV4Q3E2FauUoOQoiCCgCg) do produto, e selecione a opção desejada, dando preferência ao nível de categoria mais específico. Além de [cadastrar a categoria](/pt/tutorial/cadastrar-uma-categoria--tutorials_206) previamente, você deve garantir que ela esteja ativa.
- **Políticas comerciais:** escolha se o produto deve ser vinculado a “Todas as [políticas comerciais](/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV)” ou a “Políticas comerciais específicas”. A segunda opção vem marcada por padrão, mas você precisa atribuir um ou mais valores para o campo.

## SEO

A seção [SEO](/pt/tutorial/melhorando-o-seo-das-paginas-de-lista-de-produtos--UrQtlKAMuSaLBP5wG9ftG) (Search Engine Optimization) é sobre a otimização de mecanismos de busca, para que seu site tenha destaque nos resultados de buscas no Google, Bing, entre outros.

* **Categoria global:** preencha com a [categoria global do produto](/pt/tutorial/configurando-a-categoria-global--tutorials_188), ou seja, a taxonomia criada pelo Google para o [Merchant Center](https://support.google.com/merchants/answer/6324436?hl=pt-BR), que fica pré-definida como uma árvore única na plataforma VTEX.
* **URL do produto:** informe a URL do produto. O link não pode conter espaços e as palavras devem estar separadas por hífen ( - ). Caso você não preencha nenhum valor, a plataforma vai automaticamente gerar uma URL. Saiba mais no artigo [Como definir a URL de um produto](/pt/tutorial/como-definir-a-url-de-um-produto--frequentlyAskedQuestions_368).

  > ❗ Ao preencher a **URL do produto**, evite utilizar as seguintes palavras reservadas, pois isso pode prejudicar o desempenho da sua loja e interferir no funcionamento de páginas definidas no Admin VTEX: `a`, `meta`, `api` e `admin`.

* **Título da página:** digite o nome escolhido para aparecer tanto na página de detalhes do produto (PDP) quanto na aba do navegador. Este campo é especialmente importante para SEO. Evite usar mais de 60 caracteres.
* **Meta descrição:** preencha com uma breve descrição da categoria, preferencialmente usando menos de 160 caracteres. Isso permite que os mecanismos de busca possam apresentar a descrição de forma correta nas páginas de resultados.

> ℹ️ À medida que os campos desta seção são preenchidos, a **Pré-visualização do Google** apresenta a estrutura que será refletida no site.

## Frente de Loja

Os campos desta seção tratam do produto no contexto de [storefront](/pt/tutorial/visao-geral-storefront--7cRrL2xtY7HDqiyep1PxIS):

* **Mostrar no site:** se deseja que o produto esteja visível na vitrine, habilite o toggle <i class="fas fa-toggle-on" aria-hidden="true"></i>. Se prefere que ele fique oculto, mantenha o toggle desabilitado <i class="fas fa-toggle-off" aria-hidden="true"></i>.
* **Mostrar quando estiver fora de estoque:** se deseja que o produto esgotado apareça na vitrine, habilite o toggle <i class="fas fa-toggle-on" aria-hidden="true"></i>. Isso permite usar a configuração [Avise-me](/pt/tutorial/configurar-a-opcao-avise-me--2VqVifQuf6Co2KG048Yu6e#) para que o cliente informe seu email e seja avisado quando o produto estiver disponível. Se prefere que o produto esgotado se torne oculto, mantenha o toggle desabilitado <i class="fas fa-toggle-off" aria-hidden="true"></i>.
* **Data de lançamento:** defina uma data para disponibilizar o produto para venda. Este campo é utilizado para auxiliar na ordenação do resultado de busca do site. Por meio da querystring `O=OrderByReleaseDateDESC`, é possível puxar esse valor e mostrar a ordem de exibição por data de lançamento. Além disso, o valor deste campo influencia a criação de [coleções automáticas](/pt/tutorial/creating-collections-beta--yJBHqNMViOAnnnq4fyOye) e determina a data de [indexação](/pt/tutorial/entendendo-o-funcionamento-da-indexacao--tutorials_256) do produto.
* **Palavras similares:** inclua sinônimos dos nomes do departamento e/ou categoria do produto. Para isso, após digitar o termo desejado, aperte `enter`. Este campo é importante para que as buscas do produto sejam mais abrangentes, você pode incluir diversas palavras, até o limite de 8.000 caracteres.
  > Exemplo: para o produto "Televisão", algumas palavras substitutas seriam "TV", "Tevê" e “televisor”.

* **Categorias similares:** adicione os nomes das [categorias similares](/pt/tutorial/configurando-categoria-similar).
* **Prioridade na ordenação da busca:** clicando nas setas, atribua um nível de prioridade do produto na página de resultados de buscas. Valores negativos não são possíveis. Para mais informações, veja o artigo [Como funciona o campo Score?](/pt/tutorial/como-funciona-o-campo-score--1BUZC0mBYEEIUgeQYAKcae).

## Identificadores

Esta seção apresenta os campos de códigos que identificam o produto:

* **Código de referência:** código de referência único, criado para auxiliar o lojista no gerenciamento do catálogo. Ele é utilizado internamente pela loja. Para preencher este campo, use uma combinação única de letras e/ou números.
* **Código fiscal:** sequência numérica que identifica o produto.

## Atributos da categoria

Dependendo da categoria do produto criado, abaixo da etapa Padrão, podem surgir **Atributos da categoria**. Esta etapa inclui campos informativos que atribuem características ao produto, chamados de [especificações de produto](/pt/tutorial/criando-um-campo-de-produto?locale=pt).

A tabela abaixo apresenta exemplos de especificações de produto para produtos de diferentes categorias:

| **Categoria** | **Produto** | **Especificação** | **Valor** |
| :---: | :---: | :---: | :---: |
| Roupas | Camisa | Tecido | Algodão |
| Eletrônicos | Celular | Duração da bateria | 12 horas |
| Bebidas | Vinho | País de origem | Chile |

> ❗ É possível criar um produto sem preencher campos de especificação de produto marcados como obrigatórios. No entanto, para que o produto seja ativado, você precisa preencher todos os campos obrigatórios.

## Saiba mais

* [Produtos e SKUs](/pt/tutorial/produtos-e-skus--2ig7TmROlirWirZjFWZ3By)
* [Adicionar ou editar SKU](/pt/tutorial/adicionar-ou-editar-sku--4ryZ6J45kwn3jDiQBxGiiN)
* [Catálogo: Visão Geral](/pt/tutorial/catalogo-visao-geral--77M8ItLhDXs6aBdQTqToVe)
* [Catálogo](/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ) (trilha)

