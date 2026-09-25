---
title: 'Carteira de Crédito: acompanhe o crédito que abate sua cobrança de Master Data'
createdAt: '2026-09-28T00:00:00.000Z'
updatedAt: '2026-09-28T00:00:00.000Z'
contentType: updates
productTeam: Billing
slugEN: 2026-09-28-credit-wallet-track-the-credit-that-offsets-your-master-data-charges
locale: pt
announcementSynopsisPT: 'Acompanhe sua Carteira de Crédito pela nova página Crédito, no Admin VTEX, e veja como ela abate a cobrança de Master Data.'
tags:
  - Nova funcionalidade
  - Billing
---

O Admin VTEX agora oferece a página **Crédito**, em **Informações de faturamento**, onde você consulta o saldo e o consumo da [Carteira de Crédito](/pt/docs/tutorials/carteira-de-credito) da sua empresa. A Carteira de Crédito é um crédito de faturamento concedido automaticamente pela VTEX e usado para abater a cobrança de [Master Data](/pt/docs/tutorials/master-data).

## O que mudou?

**Informações de faturamento** passa a reunir uma nova página, **Crédito**, ao lado de Contratos, Faturas, Dados cadastrais e Contatos de faturamento. Para acessá-la, clique no seu avatar — identificado pela inicial do seu e-mail — no canto superior direito da tela e, em seguida, em **Informações de faturamento > Crédito**.

Na página **Crédito**, você encontra:

- **Saldo total**: saldo atual da sua Carteira de Crédito.
- **Cobertura estimada para o consumo atual**: estimativa de quantos meses o saldo atual cobriria, mantendo o ritmo de consumo recente.
- **Resumo anual de crédito**: total de crédito gerado e usado no período (**Entradas e saídas**) e o percentual do crédito acumulado que foi consumido (**Taxa de consumo**).
- **Extrato de crédito**: extrato mês a mês com saldo inicial, crédito gerado, valor usado, valor expirado e saldo final.
- **Detalhamento por Master Data**: custo estimado para o próximo ciclo, percentual desse custo coberto pelo crédito, volume de documentos armazenados e o tier de preço correspondente.

A página também deixa explícito como o crédito é formado e consumido: todo mês, a VTEX soma tudo o que a empresa — ou seja, todas as contas agrupadas sob ela para fins de faturamento — pagou à VTEX no mês anterior e concede, no mês seguinte, um crédito equivalente a 2% desse total. Esse crédito é aplicado exclusivamente para abater a cobrança de Master Data, e o saldo não utilizado continua acumulando até o fim do ciclo contratual vigente.

> ⚠️ Pagamentos de Ads, Professional Services e consultorias em geral não entram na base de cálculo do crédito.

## Por que fizemos essa mudança?

O crédito da Carteira de Crédito é calculado e aplicado automaticamente nas faturas, mas até agora não havia onde acompanhá-lo. A página **Crédito** dá visibilidade ao saldo disponível, ao histórico de uso e à relação entre esse crédito e o custo de Master Data, permitindo prever se o consumo do próximo ciclo será totalmente coberto ou se vai gerar cobrança adicional.

## O que precisa ser feito?

Somente usuários com o perfil de acesso [Finance](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance), [Finance Full Access](/pt/docs/tutorials/perfis-de-acesso-predefinidos#finance-full-access) ou com o recurso `View Credits` de [Billing](/pt/docs/tutorials/perfis-de-acesso-predefinidos#billing) vinculados ao perfil podem acessar **Informações de faturamento** no Admin VTEX.

O crédito é concedido e aplicado automaticamente. Para consultar o saldo e o consumo, acesse **Informações de faturamento > Crédito** no Admin VTEX.
