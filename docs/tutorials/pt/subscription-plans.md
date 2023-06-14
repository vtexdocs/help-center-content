---
title: 'Planos de assinatura'
id: 5kczKRqHEsrs1tYtRcY8wR
status: CHANGED
createdAt: 2021-07-06T14:33:32.850Z
updatedAt: 2022-07-26T22:51:42.731Z
publishedAt: 2021-07-06T17:47:04.593Z
firstPublishedAt: 2021-07-06T15:07:38.880Z
contentType: tutorial
productTeam: Post-purchase
author: 1malnhMX0vPThsaJaZMYm2
slug: planos-de-assinatura
locale: pt
legacySlug: planos-de-assinatura-beta
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

A página **Planos** do módulo de **Assinaturas** exibe a lista de todos os planos de assinaturas configurados na sua loja, sejam eles criados a partir da [página Novo plano](https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) ou [dos anexos de SKU](https://help.vtex.com/pt/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK).

Para disponibilizar planos de assinatura, você precisa antes instalar o aplicativo de Assinaturas e realizar todas as configurações necessárias. Leia o artigo [Como configurar Assinaturas na sua loja](https://help.vtex.com/pt/tutorial/como-configurar-assinaturas--1FA9dfE7vJqxBna9Nft5Sj) para mais informações.

A partir da página **Planos**, você pode visualizar e gerenciar os planos de assinaturas disponibilizados para os clientes da sua loja, conforme ilustrado abaixo.

![planslist PT](https://images.ctfassets.net/alneenqid6w5/5PAOM3BmvgeIjU1ruAmEYG/a727c14ea5611ca6da8bb6207ef3b09a/planslist_PT.png)

As principais funcionalidades desta página são:

* [Criar novo plano](#criar-novo-plano)
* [Pesquisar](#pesquisar)
* [Filtrar](#filtrar)
* [Informações sobre planos](#informacoes-sobre-planos)
* [Mostrar linhas](#mostrar-linhas)
* [Paginação](#paginacao)

## Criar novo plano

Ao clicar no botão `Novo plano`, você será direcionado para a página de cadastro de um novo plano de assinatura. Acesse o artigo [Criar um plano de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) para mais detalhes sobre esse processo.

## Pesquisar

Para pesquisar por um plano de assinatura específico, você pode digitar o nome do plano na barra de busca, acima da lista de planos.

Os resultados da pesquisa são atualizados em tempo real, ou seja, enquanto você digita, a lista de planos exibidos é atualizada de acordo com o termo buscado.

## Filtrar

Você pode filtrar os planos de assinaturas exibidos na lista a partir do **Status**. As opções são:

* **Todos**: exibe planos ativos e inativos.
* **Ativo**: exibe somente planos ativos na sua loja.
* **Inativo**: exibe somente planos inativos na sua loja.

Para saber mais sobre o significado dos status, confira a seção [Informações sobre planos](#informações-sobre-planos).

## Informações sobre planos

Cada coluna da lista de planos de assinaturas exibe uma informação sobre o plano. Veja abaixo quais são as informações apresentadas e as ações possíveis a partir da lista.

* **Nome**: exibe o nome do plano de assinatura, configurado no momento da criação do plano. Uma vez que o novo plano é salvo, o nome não pode ser editado posteriormente.
* **Id**: apresenta o identificador do plano de assinatura, que segue o formato `vtex.subscription.{nome}`. A ID é gerada automaticamente ao preencher o nome do plano [na página de criar planos de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC) e equivale ao nome do anexo de assinatura [quando configurado manualmente](https://help.vtex.com/pt/tutorial/como-criar-um-anexo-de-assinatura--2bUuKyPflA8cOGLv8OvaKK). Este campo não é editável.
* **Produtos**: mostra a quantidade de produtos associados ao plano de assinatura, ou seja, o número de produtos do seu catálogo que oferecem a opção de assinatura no momento em que o cliente da loja vai finalizar a compra ou criar uma assinatura pelo Minha Conta, independentemente da quantidade de SKUs de cada produto.
* **Status**: exibe o atual status do plano de assinatura e um botão <i class="fas fa-toggle-on"></i> para mudar de um status para outro. Os status possíveis são:
    * **Ativo**: significa que o plano está disponível para utilização dos clientes ao criar novas assinaturas com produtos associados.
    * **Inativo**: significa que o plano não está disponível para uso ao criar novas assinaturas, mesmo que tenha produtos associados.

<div class="alert alert-info">
<p>Planos inativos são desabilitados somente para novas compras. Caso existam clientes que já haviam criado assinaturas enquanto o plano estava ativo, o plano vai continuar criando pedidos nas frequências estabelecidas durante os próximos ciclos desses clientes mesmo após ser inativado.</p>
</div>

* **Botão** <i class="fas fa-ellipsis-v"></i>: ao clicar neste botão, você pode optar pelas ações a seguir.
    * **Editar**: abre a página de editar o plano de assinatura.
    * **Deletar**: possibilita excluir o plano definitivamente. Antes de deletar, aparece uma tela de confirmação desta opção. Após clicar em `Deletar plano` para confirmar a escolha, essa ação **não** pode ser desfeita.

<div class="alert alert-warning">
<p>Quando um plano é deletado, os clientes que já compraram nas frequências desse plano <strong>não</strong> terão seus pedidos gerados a partir do próximo ciclo de assinatura. Para impedir o uso ao criar novas assinaturas, mas manter os próximos pedidos dos clientes que já criaram assinaturas no plano em questão, você precisa optar por inativar o plano em vez de deletá-lo.</p>
</div>

## Mostrar linhas

O número padrão de linhas exibidas nesta página é 5. Caso queira visualizar mais linhas, você pode optar por exibir 10 ou 15 linhas, selecionando a opção desejada abaixo da lista de planos.

## Paginação

Para navegar entre páginas da lista de planos de assinaturas, utilize as setas <i class="fas fa-chevron-left"></i> e <i class="fas fa-chevron-right"></i> no canto inferior direito da página.

## Saiba mais

* [Como criar um plano de assinatura](https://help.vtex.com/pt/tutorial/como-criar-um-plano-de-assinatura-beta--1qGRoFczm98Wgt81f9mUqC)

