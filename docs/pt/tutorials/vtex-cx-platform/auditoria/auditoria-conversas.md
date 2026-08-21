---
title: 'Auditoria: Conversas'
createdAt: 2026-08-05T00:00:00.000Z
updatedAt: 2026-08-05T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: audit-conversations
locale: pt
---

No módulo **Auditoria**, você pode acessar a aba de **Conversas**, onde ficam registradas as mensagens entre seus agentes de IA e seus clientes. Neste tutorial, você vai aprender a navegar pela lista de conversas, filtrar e buscar atendimentos, interpretar os status e o feedback, e investigar uma conversa em detalhe para avaliar a qualidade do atendimento do seu agente.

**Conversas** exibe uma tabela com todos os atendimentos, com as seguintes informações:

| Dado | Descrição |
| --- | --- |
| **Contato** | Nome e número de telefone do cliente atendido. As [Conversas incríveis](#conversas-incríveis) são identificadas com uma tag de estrela no nome do contato. |
| **Status** | Situação atual da conversa. Os status possíveis são: <br> `Não atendido`: O atendimento não foi resolvido por falha do agente de IA (por exemplo: forneceu informação errada, ignorou reclamação, não executou uma ação prometida, entre outros). <br> `Atendido por IA`: O atendimento foi resolvido com sucesso pelo agente de IA. <br> `Em progresso`: O atendimento ainda está em andamento. <br> `Encaminhado para suporte humano`: O atendimento não pôde ser resolvido pelo agente de IA e precisou ser encaminhado para um atendente humano. |
| **Feedback** | Avaliação de satisfação (CSAT), de 1 a 5, enviada ao final do atendimento. As notas possíveis são: <br> 😡`Muito insatisfeito / CSAT: 1` <br> 😔`Insatisfeito / CSAT: 2` <br> 😐`Neutro / CSAT: 3` <br> 😃`Satisfeito / CSAT: 4` <br> 🤩`Muito satisfeito / CSAT: 5` <br> Conversas não avaliadas recebem um traço (`-`). |
| **Data** | Data da conversa. |
| **Hora** | Hora da conversa. |

## Conversas incríveis

As **Conversas incríveis** são conversas que mostram o valor dos agentes de IA ao resolverem uma demanda real de forma eficaz. Ao fazer uma análise no **Backlog de melhorias**, essas conversas recebem uma tag de estrela e indicam que o agente realizou ações relevantes, como:

- Resolver uma dúvida ou um problema de forma completa, utilizando a [base de conhecimento](https://help.vtex.com/pt/docs/tutorials/visao-geral-agent-builder#base-de-conhecimento), as ferramentas ou os colaboradores.
- Conduzir um fluxo complexo com sucesso (de pedido, troca, cancelamento, entre outros).
- Coletar apenas as informações necessárias e ser direto, sem fazer perguntas adicionais.
- Lidar com múltiplas demandas na mesma conversa com sucesso.

Receber uma nota CSAT alta e uma mensagem de satisfação do cliente também conta ao determinar uma **Conversa incrível**.

> ℹ️ Para saber mais, consulte nosso artigo [Auditoria: Backlog de melhorias](https://help.vtex.com/pt/tutorial/audit-improvements-backlog).

## Buscar e filtrar conversas

Para encontrar atendimentos específicos, você pode utilizar os recursos de busca e filtro.

- Para localizar um atendimento por contato, digite o nome do contato no campo **Buscar**.
- Para filtrar a lista por critérios como intervalo de tempo, status, CSAT, tópico ou tipo de conversa, clique em `Filtrar conversas` e selecione as opções desejadas. Ao final, clique em `Aplicar filtros`.

## Abrir e ler uma conversa

Para visualizar detalhes de uma conversa, clique na conversa desejada.

No topo do painel, você encontra os dados de identificação da conversa:

- **URN do contato:** o número de telefone do cliente.
- **Tópico:** o assunto associado à conversa, quando houver.
- **Detalhes da conversa:** seção expansível com informações adicionais do atendimento.
  - Ao clicar em `Detalhes da conversa`, você poderá visualizar a nota CSAT (quando houver) e poderá ir para o histórico completo de conversas com esse cliente. Para visitar o histórico, clique em `Ver histórico completo`. O navegador abrirá uma nova aba na página de **Contatos**.

O corpo do painel exibe a conversa completa, na ordem em que aconteceu, com a data e a hora de cada mensagem.

## Consultar os logs de uma mensagem

Nas mensagens enviadas pelo agente de IA, você pode consultar os registros técnicos que explicam como aquela resposta foi gerada. Os logs ajudam a entender o raciocínio e as ações do agente por trás de cada resposta, se ele buscou informação na [base de conhecimento](https://help.vtex.com/pt/docs/tutorials/visao-geral-agent-builder#base-de-conhecimento), se procurou aquele cliente entre os contatos existentes, entre outras ações.

Para consultar os logs, clique em `Mostrar logs` na mensagem desejada.
