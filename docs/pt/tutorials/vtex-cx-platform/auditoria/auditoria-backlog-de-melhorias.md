---
title: 'Auditoria: Backlog de melhorias'
createdAt: 2026-08-05T16:25:21.244Z
updatedAt: 2026-08-05T16:25:21.244Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-improvements-backlog
locale: pt
---

O **Backlog de melhorias** é uma funcionalidade do VTEX CX Platform que analisa uma amostra das conversas do seu agente de inteligência artificial (IA) e identifica padrões de falha recorrentes, como desvios de comportamento, lacunas de conhecimento e problemas técnicos.

Em vez de revisar manualmente todas as conversas, você executa uma análise e recebe uma lista organizada de problemas, cada um com diagnóstico, solução sugerida e as conversas afetadas. A partir desse relatório, você pode ajustar seu agente, adicionar informações na base de conhecimento, entre outros.

> ℹ️ A análise usa uma amostra representativa das conversas, e não todas as conversas.

## Executar uma análise

> ❗ Você só poderá executar **uma** análise por dia.

> ❗ Executar uma nova análise substitui os itens que não foram resolvidos ou ignorados da análise anterior. Por isso, recomendamos tratar as melhorias apontadas da análise anterior antes de executar uma nova.

Para executar uma análise, siga os passos abaixo:

1. Acesse o VTEX CX Platform.
2. Entre em **Auditoria**.
3. Selecione a aba **Backlog de melhorias**.
4. Clique em `Executar análise`. A análise começará a rodar em segundo plano.

> ℹ️  A análise pode levar algumas horas para ser concluída. Enquanto a análise estiver processando os dados, você já consegue visualizar algumas melhorias apontadas.

## Visualizar resultado da análise

Os resultados aparecerão em uma lista com três colunas:

- **Melhoria:** Indica o tópico que pode ser melhorado ou o problema identificado.
- **Tipo:** Identifica o tipo de problema. Leia os tipos e a descrição de cada um a seguir: 

| Tipos de problema | Descrição |
| --- | --- |
| **Comportamento** | O agente saiu do tom de voz esperado da marca, fez perguntas em excesso antes de ajudar ou não seguiu as instruções configuradas. |
| **Conhecimento** | O agente precisou de uma informação para responder o cliente, mas não encontrou na base de conhecimento. |
| **Problema técnico** | Falha técnica, como de integração externa. |
| **Análise personalizada** | Problema encontrado a partir de um monitor que você configurou. |

- **Conversas afetadas:** Indica a quantidade de conversas afetadas por cada problema.

> ℹ️ A lista não tem limite de itens. Uma mesma conversa pode aparecer em mais de um item, caso apresente mais de um tipo de problema.

## Investigar uma melhoria

Clique em qualquer melhoria para abrir o painel de detalhe. O painel traz as informações a seguir:

- **Diagnóstico:** a explicação do que está acontecendo e por quê.
- **Solução sugerida:** a recomendação de como corrigir o problema.
  - No caso de um **Problema técnico**, a solução sugerida contém o botão `Acionar suporte técnico`. Essa solução envia um email com as informações do erro para o nosso time de Suporte para análise.
- **Conversas afetadas:** a lista das conversas em que o problema apareceu. Quando há muitas conversas, elas são paginadas, e cada linha pode ser expandida para exibir os trechos relevantes.

> ℹ️ Se a solução sugerida faz referência a uma instrução que foi alterada ou removida desde que a análise foi executada, um aviso é exibido. A sugestão continua na lista; o aviso apenas sinaliza que o cenário mudou desde a análise.

Ao final de cada item, você pode selecionar uma das duas ações a seguir:

- **`Marcar como resolvido`:** quando um item é resolvido, ele sai da lista de pendências. Recomendamos marcar ele como resolvido apenas após aplicar a correção. Itens resolvidos não voltam a aparecer na lista nem em novas análises.

> ⚠️ Marcar como resolvido não altera o agente automaticamente. Você deve implementar a melhoria nas instruções ou na base de conhecimento.

- **`Ignorar melhoria`:** quando um item é ignorado, ele sai da lista imediatamente. Recomendamos usar quando não é relevante ou não será tratado. Itens ignorados não voltam a aparecer na lista nem em novas análises.

## Criar análise personalizada

Você também pode definir comportamentos próprios para monitorar, específicos do seu negócio ou da sua operação.

Para criar uma análise personalizada, siga os passos a seguir:

1. Na aba **Backlog de melhorias**, clique em `Análise personalizada`.
2. Preencha os dois campos:
  - **Título:** nome da melhoria identificada.
  - **Definição:** descrição do comportamento que você quer monitorar.
3. Clique em `Adicionar`.

A partir de então, esse critério passa a ser avaliado nas próximas análises, com as outras melhorias. Os resultados aparecem no backlog com o título que você selecionou em **Melhorias** e com a tag **Análise personalizada**.

> ℹ️ Você pode criar até 10 análises personalizadas por projeto.

## Visualizar e excluir análises personalizadas criadas

Para visualizar as análises que você já criou, siga os passos a seguir:

1. Na aba **Backlog de melhorias**, clique em `Análise personalizada`.
2. A lista de análises personalizadas vai aparecer, com a quantidade de conversas afetadas por cada uma
3. Para ver as conversas afetadas, clique na análise desejada.

Para excluir uma análise personalizada, siga os passos a seguir:

1. Na aba **Backlog de melhorias**, clique em `Análise personalizada`.
2. Clique no botão de <i class="far fa-trash-alt" aria-hidden="true"></i> lixeira ao lado da análise que deseja excluir.
3. Por fim, clique em `Deletar` para confirmar a exclusão.
