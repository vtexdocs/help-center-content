---
title: 'Como criar um plano de assinatura'
id: 1qGRoFczm98Wgt81f9mUqC
status: PUBLISHED
createdAt: 2021-07-06T14:35:00.792Z
updatedAt: 2022-12-22T20:39:08.965Z
publishedAt: 2022-12-22T20:39:08.965Z
firstPublishedAt: 2021-07-06T17:39:43.728Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: como-criar-um-plano-de-assinatura
locale: pt
legacySlug: como-criar-um-plano-de-assinatura-beta
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

Para disponibilizar planos de **Assinaturas**, você precisa antes instalar o aplicativo de Assinaturas e realizar as configurações necessárias. Leia o artigo [Como configurar Assinaturas na sua loja](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj) para mais informações sobre esse processo.

Após realizar as configurações, é necessário criar planos de assinatura para disponibilizar para seus clientes e associar produtos a esses planos. Os planos servem para indicar que a funcionalidade de Assinaturas está ativa para determinados produtos e apresentar as frequências de assinaturas disponíveis.

Existem dois caminhos possíveis para criar um plano de assinatura. O caminho **mais recomendado** é criar um [novo plano diretamente no módulo de Assinaturas](#novo-plano-no-modulo-de-assinaturas).

Outra possibilidade é criar um [Anexo de SKU referente à assinatura no Catálogo](#caminho-alternativo-anexo-de-sku-no-catalogo). O Anexo de SKU é equivalente ao plano.

>⚠️ Você **não** deve realizar ambas as configurações, basta optar por uma delas. Crie apenas o novo plano no módulo de **Assinaturas** ou o anexo de SKU no **Catálogo**. Caso contrário, o plano será duplicado.

## Novo plano no módulo de Assinaturas

Criar um novo plano a partir do módulo de **Assinaturas** é o caminho mais recomendado, por centralizar a experiência em um só módulo da plataforma VTEX. Siga os passos abaixo para realizar esse procedimento.

1. Acesse a página **Planos** no módulo de **Assinaturas**.
2. Clique no botão `Novo plano`.
3. Preencha as informações listadas abaixo na aba [Configurações](#configuracoes).
4. Clique na aba [Produtos Associados](#produtos-associados) e selecione os produtos que você deseja associar aos planos de assinatura.
5. Clique em `Salvar`.

>⚠️ Todo plano é salvo como ativo, mesmo que não tenha nenhum produto associado. Planos sem produtos associados não aparecem como opção para o cliente no momento da compra.

### Configurações

Na aba **Configurações**, você precisa preencher os campos a seguir.

#### Identificação

* **Nome:** digite um nome para o novo plano de assinatura.
* **Id:** este campo é preenchido automaticamente com um identificador do plano de assinatura no formato `vtex.subscription.{nome}`. O `{nome}` é preenchido pelo sistema com o nome do plano digitado no campo anterior.

#### Frequências Permitidas

Nesta seção, você precisa clicar no botão `Adicionar frequência` para criar uma periodicidade permitida para a assinatura. Este valor será exibido para que o cliente da loja escolha de quanto em quanto tempo ele quer repetir um pedido.

Você pode disponibilizar a opção de criar pedidos diariamente, semanalmente, mensalmente ou anualmente, dependendo da sua estratégia de negócio.

Preencha os campos abaixo para configurar a frequência desejada.

* **Selecione uma frequência**: escolha uma das opções listadas, entre Dia, Semana, Mês ou Ano.
* **Executar a cada**: escolha uma quantidade de dias, semanas, meses ou anos que correspondem ao ciclo de criação de pedidos.

**Exemplo de preenchimento:** caso você queira disponibilizar a opção de assinar um produto diariamente, você pode selecionar a frequência **Dia** e escolher a opção **1 dia**. Caso você queira disponibilizar a opção de assinar um produto a cada 2 semanas, você pode selecionar a frequência **Semana** e escolher a opção **2 semanas**.

Para salvar a frequência criada, clique no botão `Adicionar`.

Para excluir uma frequência criada anteriormente, você precisa clicar no botão <i class="far fa-trash-alt"></i>.

Você pode disponibilizar múltiplas opções de frequência no mesmo plano, se desejar. Nesse caso, você deve clicar novamente no botão `Adicionar frequência` e repetir esse processo, preenchendo as configurações com as outras frequências desejadas. Dessa forma, o cliente poderá escolher a frequência que preferir dentre as opções.

>⚠️ Não é possível atribuir um prazo de validade ao plano de assinatura pelo módulo de **Assinaturas**. Somente planos de assinatura configurados como Anexos de SKU no **Catálogo** podem ter prazos de validade configurados.

### Produtos Associados

A aba **Produtos Associados** apresenta a lista de Produtos e SKUs cadastrados na sua loja e permite que você selecione produtos ou SKUs para associar ao plano de assinatura. Esta aba permite navegar entre a lista **Todos** e a lista **Associados**.

Na lista **Todos**, você tem acesso a todos os produtos e SKUs do catálogo da sua loja. Para realizar uma pesquisa, você pode digitar a ID do produto ou do SKU na barra de busca.

A lista de produtos e SKUs apresenta as colunas abaixo.

* **Imagem**: imagem cadastrada para o produto ou SKU.
* **Produto**: nome do produto.
    * **Id**: número que corresponde à ID do produto.
    * **SkuId**: número que corresponde à ID do SKU.
* **Marca**: nome da marca do produto.
* **Categoria**: nome da categoria do produto.

Nesta tela, você pode realizar as seguintes ações:

* **Selecionar:** ao clicar no <i class="far fa-square"></i> na linha de cada produto, você pode selecionar produtos ou SKUs individualmente. Outra opção é clicar no primeiro <i class="far fa-square"></i> e selecionar todos os produtos e SKUs exibidos na página para adicioná-los ao plano, conforme ilustrado na imagem abaixo.

![selecionarskus PT](https://images.ctfassets.net/alneenqid6w5/3nBgV1SCLFqG92L1rOBXOX/d5166c26395bfd131c45fe27f51ec5a8/selecionarskus_PT.gif)

* **Botão** <i class="fas fa-chevron-down"></i>: exibe os SKUs, ou seja, as variações do produto.
* **Adicionar:** ao clicar neste botão, você adiciona o(s) produto(s) ou SKU(s) ao plano de assinatura.
* **Remover**: ao clicar neste botão, você remove o(s) produto(s) ou SKU(s) do plano de assinatura.

Os produtos adicionados ao plano de assinatura são exibidos na lista **Associados**, onde é possível optar por removê-los do plano individualmente ou por seleção.

Para navegar entre páginas de ambas as listas, utilize as setas <i class="fas fa-chevron-left"></i> e <i class="fas fa-chevron-right"></i> no canto inferior direito da página.

## Caminho alternativo: anexo de SKU no Catálogo

Criar um anexo de SKU é um caminho alternativo que tem função equivalente ao plano de assinatura. O anexo é responsável por indicar que a funcionalidade de Assinatura está ativa para determinado SKU, e também quais são as frequências disponíveis.

Recomendamos utilizar o caminho descrito anteriormente para criar um plano diretamente no módulo de **Assinaturas**. Porém, caso você deseje utilizar o Anexo de SKU, siga as etapas listadas no artigo [Como criar um anexo de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK).

## Saiba mais

* [Planos de assinatura](https://help.vtex.com/pt/tutorial/planos-de-assinatura-beta--5kczKRqHEsrs1tYtRcY8wR)
