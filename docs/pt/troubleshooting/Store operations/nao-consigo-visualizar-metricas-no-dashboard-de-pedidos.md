---
title: 'Não consigo visualizar métricas no dashboard de pedidos'
id: 1B5OAicmK3AvnwPzs4iq7Z
status: PUBLISHED
createdAt: 2024-06-10T11:28:08.507Z
updatedAt: 2024-11-08T18:41:59.361Z
publishedAt: 2024-11-08T18:41:59.361Z
firstPublishedAt: 2024-06-10T17:15:44.616Z
contentType: tutorial
productTeam: Others
author: 2AhArvGNSPKwUAd8GOz0iU
slugEN: metrics-are-not-displayed-in-the-order-dashboard
locale: pt
legacySlug: nao-consigo-visualizar-metricas-no-dashboard-de-pedidos
subcategoryId: 2Q0IQjRcOqSgJTh6wRHVMB
tags:  Dashboard, Admin VTEX, Visão geral, Perfis de acesso
---

Ao acessar o painel Admin, pode ser que sua loja não carregue métricas na **Visão geral** do dashboard, e vir acompanhadas de ícones de alerta e a mensagem "Ocorreu um problema". Isso pode ocorrer devido a:

- **Atraso na atualização de dados:** pode haver um atraso na atualização das informações exibidas no dashboard.
- **Período de comparação inadequado:** o período selecionado no canto superior direito do dashboard pode não conter dados de pedidos suficientes para a comparação.
- **Permissões de acesso insuficientes:** você pode não ter o perfil de acesso necessário para visualizar determinadas informações no dashboard.

![Visão geral - PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/Store%20operations/nao-consigo-visualizar-metricas-no-dashboard-de-pedidos_1.png)

## Solução
Para resolver inconsistências no dashboard inicial do painel administrativo, você pode testar as ações descritas abaixo:

### Ajuste o período de comparação
Ajustar o período de comparação pode resolver o problema ao exibir métricas que são relevantes.Para  verificar se o período selecionado em **Visão geral** do dashboard contém dados de pedidos válidos, siga os passos abaixo:

1. No Admin VTEX, acesse **Dashboard > Visão geral**.
2. No canto superior direito, selecione o período de comparação.

![Dashboard- PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/troubleshooting/Store%20operations/nao-consigo-visualizar-metricas-no-dashboard-de-pedidos_2.png)

### Aguarde a atualização das informações
Considere o tempo de espera de 10 a 80 minutos para a atualização das informações no painel. Este período é necessário para que os dados sejam processados e exibidos corretamente. Para mais informações sobre o tempo de espera, acesse  [Comparação de períodos](https://help.vtex.com/pt/tutorial/visao-geral-da-loja--P8ahguoRs0U3PzmXg2wuQ?&utm_source=autocomplete#comparacao-de-periodos).

### Verifique as permissões de acesso
Para visualizar as informações no dashboard, certifique de que você possui um perfil de acesso que contenha o [recurso](https://help.vtex.com/pt/tutorial/recursos-do-license-manager--3q6ztrC8YynQf6rdc6euk3) Insights Metrics. Para mais informações sobre os perfis de acesso e como configurá-los, acesse o artigo [Perfis de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc).