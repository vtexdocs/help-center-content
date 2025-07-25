---
title: 'Como gerenciar Assinaturas'
id: 6Jk50FPbv6iuz1OsFypv8x
status: PUBLISHED
createdAt: 2020-02-05T14:18:54.781Z
updatedAt: 2023-12-21T14:08:39.725Z
publishedAt: 2023-12-21T14:08:39.725Z
firstPublishedAt: 2020-02-11T14:56:17.333Z
contentType: tutorial
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slugEN: how-to-manage-subscriptions
locale: pt
legacySlug: como-gerenciar-assinaturas
subcategoryId: 1rA9wuuskW3PpjvMrhatAM
---

O módulo **Assinaturas** é um app desenvolvido pela VTEX para facilitar as vendas recorrentes. Funciona como um agendador automático, executando uma recompra na frequência solicitada pelo cliente da loja.

Seu cliente indica a periodicidade que deseja repetir a compra de um determinado SKU, e o sistema refaz o pedido de compra (com as mesmas características configuradas no pedido original), automaticamente a cada período agendado.

Para instalar e configurar a funcionalidade de **Assinaturas** na sua loja, acesse [nosso artigo](/pt/tutorial/como-configurar-assinatura-v2--1FA9dfE7vJqxBna9Nft5Sj).

O gerenciamento de assinaturas é feito pela aba **Dashboards** do módulo **Assinaturas** no Admin.

## Dashboards

A aba **Dashboards** é voltada para o acompanhamento e supervisão de Assinaturas. Ela permite obter informações para gerenciar o seu negócio de forma eficiente, utilizando as seções **Assinaturas Únicas**, **Pedidos de Assinatura** e **Assinantes**.  

### Assinaturas Únicas

A seção **Assinaturas Únicas** permite:

- Filtrar a visualização de assinaturas por período, usando os seguintes valores: `hoje`, `ontem`, `esta semana`, `este mês`, `este ano`, `semana passada`, `mês passado`, `ano passado`, ou um período `personalizado`, selecionando datas específicas. 
- Visualizar um **gráfico dinâmico** com a relação entre assinaturas ativas, canceladas e o total de assinaturas, dentro do período filtrado. Passando o cursor em cima das linhas do gráfico, é possível ver com detalhes a movimentação de assinaturas por dia.
- **Exportar assinaturas** únicas dentro do período filtrado, pelo botão no canto superior direito da tela.

 ![PT Dashboard Assinatura única](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Subscriptions/Subscription%20Guides/como-gerenciar-assinaturas_1.png)

### Pedidos de Assinatura

<div class = "alert alert-info">
É possível acessar informações somente de pedidos criados nos últimos dois anos, sendo o mesmo período válido para clientes acessarem pedidos pelo <a href="https://help.vtex.com/pt/tutorial/how-my-account-works--2BQ3GiqhqGJTXsWVuio3Xh">Minha Conta</a>.
</div>

A seção **Pedidos de Assinatura** permite:

- Filtrar a visualização do **Funil de Pedidos de Assinatura** por período, podendo aplicar os seguintes filtros: `hoje`, `ontem`, `esta semana`, `este mês`, `este ano`, `semana passada`, `mês passado`, `ano passado`, ou um período `personalizado`, selecionando datas específicas.   
- Acompanhar o número absoluto e porcentagem correspondente de Pedidos de Assinatura que foram agendados, processados, gerados e completos por período.  
- Visualizar um gráfico com a porcentagem de pedidos pulados, ciclos com problema e erro de pagamento.  

![PT Dashboard Pedidos Assinatura](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Subscriptions/Subscription%20Guides/como-gerenciar-assinaturas_2.png)

- Ao acessar cada aba do quadro **Pedidos de Assinatura**, é possível visualizar o fluxo e detalhes dos pedidos que foram Pulados, os que apresentaram Ciclos com problema, aqueles que contém um Erro de Pagamento e pedidos Completos.    
- Além de listar detalhes dos erros que ocorreram durante  o fluxo de pedidos de Assinatura, também é possível realizar a **retentativa manual** dos pedidos com erros. Confira nosso artigo sobre a [Resolução de problemas de pedidos com Assinatura](/pt/tutorial/como-solucionar-pedidos-de-assinatura-com-erros--uLL8AYBGdtAmbbdL5gRCf) para saber mais. 

![PT Log Pedidos Assinatura](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Subscriptions/Subscription%20Guides/como-gerenciar-assinaturas_3.png)

### Assinantes

Nesta seção, os pedidos de Assinatura são agrupados por cliente para melhorar a visualização dos resultados de assinatura da sua loja. O painel de **Assinantes** oferece o acompanhamento da saúde do seu negócio, trazendo números e análises dos clientes com pedidos de assinatura.

A seção **Assinantes** do Dashboard de Assinaturas permite:

- Visualizar a progressão de assinantes **Novos** em comparação com os **Perdidos**. É apresentado tanto o número absoluto, quanto um gráfico com essa relação. 

- Visualizar o número **total de assinantes ativos** na sua loja.

- O quadro de assinantes contém as seguintes abas: **Novos**, **Perdidos** e **Todos**. Em cada uma é possível visualizar o fluxo e detalhes dos assinantes. Os *Novos* são os assinantes que entraram naquele período determinado no filtro, e que tem ao menos uma assinatura ativa na loja. Os *Perdidos* são assinantes que não tem nenhuma assinatura ativa na loja e que saíram naquele determinado período.

- **Exportar relatório** em CSV, que contém os dados da aba correspondente, com os filtros aplicados. 
> Essa funcionalidade requer um perfil de acesso com o recurso `Subscription Metrics` ativado. 

- **Buscar por assinantes** específicos, digitando o email na barra de busca.

- O botão **Personificar** permite edições na Assinatura de cada assinante, como  alterar a frequência de assinatura, alterando a data do ciclo de assinatura (data em que os pedidos são criados). 
> Somente usuários com acesso ao Televendas podem utilizar o botão *Personificar*.
