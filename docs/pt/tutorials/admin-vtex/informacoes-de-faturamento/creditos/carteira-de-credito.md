---
title: 'Carteira de crédito'
createdAt: '2026-10-08T00:00:00.000Z'
updatedAt: '2026-11-18T00:00:00.000Z'
contentType: tutorial
productTeam: Billing
slugEN: credit-wallet
locale: pt
seeAlso:
  - "/pt/docs/tutorials/visao-geral-informacoes-de-faturamento"
  - "/pt/docs/tutorials/master-data-pt"
  - "/pt/docs/tutorials/consultar-o-uso-do-master-data-no-admin-vtex"
  - "/pt/docs/tutorials/transferir-credito-entre-empresas-do-mesmo-grupo-economico"
---

A **carteira de crédito** é um crédito de faturamento concedido automaticamente à sua empresa, usado para abater a cobrança de [Master Data](/pt/docs/tutorials/master-data-pt).

Neste artigo, entenda como o crédito da carteira de crédito é calculado, como ele é aplicado à cobrança de Master Data e o que acontece com o saldo não utilizado.

> ℹ️ Para saber como consultar as informações da sua carteira de crédito, acesse [Consultar carteira de crédito](/pt/docs/tutorials/consultar-carteira-de-credito).

## Estrutura de faturamento

A estrutura de faturamento da VTEX segue esta hierarquia: **conta → empresa → grupo econômico**.

- **Conta:** uma loja ou ambiente VTEX. Cada conta pertence a uma única empresa. O crédito não fica na conta, e sim na empresa a que ela pertence.
- **Empresa:** unidade que possui a carteira de crédito, o extrato de crédito e a fatura consolidada. Agrupa uma ou mais contas e tem a sua própria política de validade do crédito.
- **Grupo econômico:** conjunto de empresas que pertencem ao mesmo cliente.

## Como o crédito é calculado

Quando uma empresa opera com mais de uma conta na VTEX (por exemplo, [contas franquia](/pt/docs/tutorials/o-que-e-conta-franquia) ou ambientes adicionais), todas são agrupadas em uma empresa para fins de [faturamento](/pt/docs/tutorials/visao-geral-informacoes-de-faturamento). É essa empresa que recebe uma fatura consolidada, e é nesse nível que o crédito da carteira de crédito é calculado e aplicado.

Todo mês, a VTEX soma o valor total pago pela empresa — considerando todas as contas vinculadas a ela — à VTEX no mês anterior (do dia 1º ao último dia do mês) e concede, no mês seguinte, um crédito equivalente a 2% desse valor total.

> ⚠️ Pagamentos de Ads, Professional Services e consultorias em geral não entram nessa base de cálculo.

## Como o crédito é usado

O crédito da carteira de crédito é aplicado exclusivamente para abater a cobrança de Master Data na fatura do mês seguinte.

O [consumo de Master Data](/pt/docs/tutorials/consultar-o-uso-do-master-data-no-admin-vtex) acontece dentro de cada conta, mas a VTEX soma o consumo de Master Data de todas as contas de uma empresa para calcular o custo total de Master Data. É sobre este total consolidado que o crédito é abatido.

Se o valor do crédito for maior que a cobrança de Master Data do período, o saldo remanescente permanece disponível para uso em meses futuros. O crédito não utilizado se acumula.

> ℹ️ O crédito acumulado na carteira de crédito vale até o fim do ciclo contratual vigente. Ele não continua acumulando indefinidamente.

## Transferir crédito entre empresas do mesmo grupo econômico

Se o seu grupo econômico tem mais de uma empresa, você pode transferir parte do saldo da carteira de crédito para outra empresa do grupo. Caso o grupo tenha apenas uma empresa, não é possível realizar transferências. Saiba mais em [Transferir crédito entre empresas do mesmo grupo econômico](/pt/docs/tutorials/transferir-credito-entre-empresas-do-mesmo-grupo-economico).
