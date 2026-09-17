---
title: 'Relatórios de recomendações (Beta)'
createdAt: 2026-09-17T13:00:00.000Z
updatedAt: 2026-09-17T13:00:00.000Z
contentType: tutorial
productTeam: Intelligent Search
slugEN: recommendations-reports
locale: pt
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Se já é cliente da VTEX e deseja adotar essa funcionalidade em seu negócio, entre em contato com o [Suporte Comercial](https://help.vtex.com/pt/docs/tracks/suporte-comercial). É possível que taxas adicionais se apliquem. Se ainda não é cliente, mas tem interesse nesta solução, preencha o [formulário de contato](https://vtex.com/pt-br/contato/).

A aba **Relatórios**, em Recomendações, é uma aba do Admin VTEX que apresenta a listagem de relatórios sobre o desempenho das estratégias de recomendação de produtos da loja. Diferente do [dashboard de recomendações](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes), que exibe dados em tempo real e filtráveis, os relatórios são retratos estáticos de um período, que podem ser baixados.

O recurso está disponível a todos os clientes que já têm Recomendações de produtos habilitada na loja.

Para acessá-la no Admin VTEX, entre em *Storefront > Recomendações* e clique na aba **Relatórios**.

![relatorios-de-recomendacoes](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/beta/recomendações-de-produtos-beta/relatorios-de-recomendacoes_1.png)

## Requisitos

* Ter a funcionalidade de [Recomendações de produtos](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta) habilitada na loja.
* Ter [estratégias de recomendação](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta#estrategias-de-recomendacao) implementadas na loja.

## Periodicidade dos relatórios

Os relatórios são gerados de três formas:

* **Semanal**: gerado automaticamente toda segunda-feira, cobrindo os 7 dias anteriores.
* **Mensal**: gerado automaticamente no dia 1º de cada mês, cobrindo o mês anterior.
* **Sob demanda**: gerado manualmente a qualquer momento, para qualquer período personalizado.

Esta aba permite que você realize as seguintes ações:

* [Criar relatório](#criar-relatorio)
* [Baixar relatório](#baixar-relatorio)

A aba apresenta as seguintes informações em uma tabela:

| Coluna | Descrição |
| :---- | :---- |
| **Período** | Intervalo de datas coberto pelo relatório. |
| **Data de criação** | Quando o relatório foi gerado. |
| **Status** | Situação do relatório: <ul><li>**Criando:** em processamento.</li><li>**Disponível:** pronto para download.</li><li>**Visualizado:** já baixado.</li></ul> |

## Criar relatório

Você pode criar um relatório para um período personalizado.

1. No Admin VTEX, entre em **Storefront > Recomendações**, ou digite **Recomendações** na barra de busca no topo da página.
2. Clique na aba **Relatórios**.
3. Clique em **Criar relatório**.
4. No modal **Criar relatório**, selecione um dos períodos predefinidos (**Ontem**, **Últimos 7 dias** ou **Últimos 28 dias**) ou defina um intervalo personalizado em **Data de início**.
5. Clique em `Criar`.

O novo relatório é exibido na lista com o status **Criando**, enquanto está sendo processado.

## Baixar relatório

Você pode baixar qualquer relatório com status **Disponível** ou **Visualizado**.

Na linha do relatório desejado, clique no ícone de download <i class="fas fa-download"></i> para salvá-lo no seu dispositivo.

## Notificações por email

Quando um relatório automático (semanal ou mensal) é criado, a VTEX envia uma notificação por email, para que não seja necessário acessar o Admin para saber que um novo relatório está disponível.

## Estrutura do relatório

O relatório é gerado em PDF e apresenta as seguintes seções:

### Cabeçalho

Identifica a loja, o tipo de análise (semanal, mensal ou personalizada) e o período coberto, seguido de um resumo com a receita influenciada, o número de pedidos, as visualizações e os cliques totais gerados pelas prateleiras de recomendação no período.

### Métricas consolidadas

| Métrica | Descrição |
| ---- | ---- |
| Receita via vitrines | Receita atribuída aos itens recomendados. |
| Pedidos via vitrines | Pedidos influenciados pelas recomendações. |
| Visualizações | Produtos recomendados vistos. |
| GMV total da loja | Receita total da loja (canal próprio). |
| Pedidos totais da loja | Pedidos concluídos no período. |
| Taxa de visualização | Média geral das prateleiras. |
| Participação na receita da loja | Receita atribuída sobre o GMV da loja. |
| Participação nos pedidos da loja | Pedidos influenciados sobre o total da loja. |
| Cliques | Cliques em produtos recomendados. |
| Ticket médio da loja | Valor médio por pedido na loja. |
| Conversão por clique | Média geral das prateleiras. |

### Receita por prateleira

Gráfico com a participação de cada prateleira na receita total gerada pelas recomendações no período.

### Performance por prateleira

Tabela com o desempenho de cada prateleira no período: taxa de visualização, taxa de cliques, conversão por clique e vendas.

### Top 5 produtos por prateleira

Para cada prateleira, os 5 produtos de melhor desempenho no período, com receita e número de compras.

### Produto estrela do período

Destaque para o produto que mais gerou receita entre as prateleiras no período, com receita total, número de compras e em quantas prateleiras ele aparece entre os mais vendidos.

### Insights e recomendações

Cards gerados automaticamente, marcados como **Destaque**, **Atenção** ou **Oportunidade**, com uma breve análise (por exemplo, qual prateleira lidera em receita, qual tem a melhor conversão por clique, ou quais prateleiras têm muitas visualizações mas poucos cliques) e uma sugestão de próximo passo.

### Rodapé

Indica o período coberto, a data de geração do relatório e um aviso de confidencialidade.

## Saiba mais

* [Recomendações de produtos](https://help.vtex.com/pt/docs/tutorials/recomendacoes-de-produtos-beta)
* [Dashboard de recomendações (Beta)](https://help.vtex.com/pt/docs/tutorials/dashboard-de-recomendacoes)
* [Criar lista de recomendações (Beta)](https://help.vtex.com/pt/docs/tutorials/criar-lista-de-recomendacoes)
