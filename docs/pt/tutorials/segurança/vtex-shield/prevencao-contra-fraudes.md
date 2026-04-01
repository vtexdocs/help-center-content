---
title: 'Prevenção contra fraudes (Beta)'
status: PUBLISHED
createdAt: 2026-03-27T00:00:00.000Z
updatedAt: 2026-03-27T00:00:00.000Z
contentType: tutorial
productTeam: Others
slugEN: fraud-prevention
legacySlug: fraud-prevention
locale: pt
subcategoryId: jrgbOxKaOW0kdZs7rdgvS
---

>ℹ️ Esta funcionalidade faz parte do produto [VTEX Shield](https://help.vtex.com/pt/docs/tutorials/vtex-shield). Se já é cliente da VTEX e deseja adotar o VTEX Shield no seu negócio, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/br-pt/contato/).

A **Prevenção contra fraudes** é uma funcionalidade do **VTEX Shield** que protege sua loja contra ataques de esquenta cartão (*card attack*).

Ataques de esquenta cartão acontecem quando fraudadores testam diversas combinações de cartões roubados em um curto intervalo de tempo para identificar quais estão ativos. Esse tipo de prática pode gerar alto volume de tentativas de pagamento malsucedidas, custos adicionais com adquirentes e ferramentas antifraude, além de impacto na operação da loja.

A cada tentativa de pagamento realizada no checkout, a solução faz uma análise de risco de fraude em pagamento e atribui um score de fraude (0 a 1), que indica a probabilidade de a transação fazer parte de um ataque de esquenta cartão.

Com base nesse score, o sistema recomenda ações preventivas e, quando o bloqueio automático está habilitado, pode bloquear tentativas consideradas suspeitas.

O objetivo da funcionalidade é permitir ações no fluxo de compra sempre que o risco da transação for elevado, reduzindo o impacto de ataques e protegendo a operação do lojista.

Para acessar a página, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja**.
2. Em **Shield**, clique em **Prevenção de Fraude**.

![prevencao-de-fraude-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/segurança/vtex-shield/prevencao-contra-fraudes.png)

## Visão geral

A página apresenta os seguintes indicadores:

* **Tentativas de transações:** total de tentativas de transações processadas no período selecionado.
* **Tentativas de transações suspeitas:** transações identificadas como potencialmente fraudulentas pelo algoritmo.

### Histórico de detecções

A tabela **Histórico de detecções** exibe os detalhes das tentativas analisadas:

| Colunas | Descrição |
| :---- | :---- |
| ID da tentativa de transação | Identificador único da tentativa de pagamento gerado pela plataforma. |
| Hora de início | Data e horário em que a tentativa de transação foi iniciada. |
| Valor | Valor total da transação. |
| Pagamento  | Bandeira do cartão utilizado. |
| Ação do algoritmo | Ação executada automaticamente com base no score de fraude (liberar ou bloquear a transação). Corresponde ao que ocorreu no checkout. A ação executada pode diferir da ação sugerida caso o bloqueio automático esteja desativado no momento da tentativa. |
| Ação sugerida | Ação recomendada pelo mecanismo de análise de fraude para aquela tentativa de transação, de acordo com o risco identificado. Por padrão, a partir do score 0.9 a ação sugerida é de bloquear a transação, mas essa configuração pode ser modificada ao contratar o produto ou mediante contato com o [Suporte](https://help.vtex.com/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex). |
| Score de fraude | Pontuação de 0 a 1 que indica a probabilidade de fraude. Quanto mais próximo de 1, maior a probabilidade. |

Esta página permite que você realize as seguintes ações:

* [Filtrar tentativas de transação por período](#filtrar-tentativas-de-transação-por-período)
* [Ativar bloqueio](#ativar-bloqueio)
* [Desativar bloqueio](#desativar-bloqueio)

## Permissões necessárias

Para acessar e gerenciar a funcionalidade de Prevenção contra fraudes, o usuário deve ter um [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) com os [recursos do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager) listados a seguir:

* **Produto:** *Fraud Prevention*
* **Categoria:** *Transaction Attempts*
* **Recursos:** *View transaction attempts* e *Edit transaction attempt action settings*

## Filtrar tentativas de transação por período

Por padrão, a página exibe os dados dos **Últimos 7 dias**.

Para alterar o período, clique no período atual e depois na opção desejada:

* **Hoje**
* **Últimos 7 dias**
* **Últimos 30 dias**
* **Personalizada:** selecione a data de Início e a data de Término, depois clique em `Aplicar`.

A listagem será atualizada automaticamente com as tentativas de transação no período selecionado.

## Ativar bloqueio

Para ativar o bloqueio automático de transações com alto risco:

1. Clique no menu **⋮**.
2. Clique em **Ativar bloqueio**.

A partir desse momento, transações consideradas suspeitas poderão ser bloqueadas automaticamente com base na configuração do algoritmo.

## Desativar bloqueio

Para desativar o bloqueio automático:

1. Clique no menu **⋮**.
2. Clique em **Desativar bloqueio**.
3. Clique em **Confirmar**.

As tentativas continuarão sendo analisadas e exibidas no histórico, mas não serão bloqueadas automaticamente. Quando o bloqueio automático está desativado, a funcionalidade opera em modo de monitoramento (escuta), registrando e analisando as tentativas sem impedir o checkout.

## Saiba mais

* [VTEX Shield](https://help.vtex.com/pt/docs/tutorials/vtex-shield)
