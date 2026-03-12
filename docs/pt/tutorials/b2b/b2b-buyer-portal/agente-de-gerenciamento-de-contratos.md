---
title: 'Agente de Gerenciamento de Contratos'
createdAt: 2026-03-06T00:00:00.000Z
updatedAt: 2026-03-06T00:00:00.000Z
contentType: tutorial
productTeam: B2B
slugEN: contracts-manager-agent
locale: pt
---

> ⚠️ Esta funcionalidade está disponível apenas para lojas que usam B2B Buyer Portal, atualmente disponível para contas selecionadas.

O **Agente de Gerenciamento de Contratos** ajuda operadores B2B a gerenciar [contratos](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) usando linguagem natural. Em vez de atualizar manualmente cada contrato, você pode descrever o que deseja alterar, revisar o plano proposto e executá-lo diretamente pela interface.

Neste guia, você aprenderá mais sobre o **Agente de Gerenciamento de Contratos** nas seguintes seções:

- [Casos de uso](#casos-de-uso)
- [Gerenciando contratos com o agente](#gerenciando-contratos-com-o-agente)
  - [Solicitando uma tarefa ao agente](#solicitando-uma-tarefa-ao-agente)
  - [Acompanhando tarefas e histórico](#acompanhando-tarefas-e-historico)

## Casos de uso

O agente utiliza linguagem natural para interpretar suas instruções e automatizar atualizações de contratos em escala, reduzindo esforço manual e erros operacionais. Veja alguns cenários comuns:

- **Conceder acesso a novos sortimentos de produtos:** quando você lança uma nova coleção (por exemplo, "Especial de Verão 2026"), pode adicioná-la a vários contratos de compradores de uma só vez, em vez de editar cada contrato individualmente.
- **Restringir a visibilidade de produtos:** se uma linha de produtos não deve mais estar disponível para determinados compradores, você pode remover a coleção associada dos contratos deles.
- **Atualizar condições comerciais:** ao renegociar termos, você pode adicionar ou remover tabelas de preço e métodos de pagamento, ou reorganizar a prioridade das tabelas de preço entre contratos.
- **Aplicar alterações em massa:** se centenas de contratos exigirem o mesmo ajuste, você pode descrever a alteração uma única vez e o agente a aplicará a todos os contratos correspondentes.

## Gerenciando contratos com o agente

Você pode acessar o agente no Admin VTEX. Vá em **Apps > Customers > Contracts Manager Agent** ou digite **Contracts Manager Agent** na barra de busca no topo da página.

Na tela inicial, você verá o campo de texto `Ask the agent`, ações sugeridas (como `Add collections`, `Remove payment methods` ou `Change price table position`) e a seção `Most recent tasks`, que mostra suas operações mais recentes.

### Solicitando uma tarefa ao agente

1. No campo `Ask the agent`, digite sua solicitação em linguagem natural. Por exemplo:
   - "Add Office Supplies and Tools collections to ACME Corp and Daily Planet."
   - "Remove all collections from contract X."
   - "Add price table B2B-2026 to contracts A and B."
2. Envie a solicitação. O agente interpretará a instrução e gerará um plano de ação proposto.
3. Clique no botão do plano (por exemplo, `Add collections`) para abrir um painel lateral com os detalhes completos.
4. No painel lateral, verifique os contratos e condições listados (coleções, tabelas de preço ou métodos de pagamento).
   > ⚠️ Sempre confirme se os contratos e condições afetados estão corretos antes de prosseguir. As alterações impactam o que os compradores podem visualizar, comprar e as respectivas condições comerciais.
5. Clique em `Start Update`. Quando todas as atualizações forem concluídas, você verá uma mensagem de confirmação.

> ℹ️ O tempo que o agente leva para concluir as tarefas solicitadas depende da escala das alterações. Por exemplo, adicionar coleções a centenas de contratos pode levar alguns minutos, enquanto adicionar coleções a três contratos geralmente leva apenas alguns segundos.

Enquanto o agente executa a tarefa, você pode navegar para outras páginas e voltar depois para verificar os resultados.

Também é possível iniciar novas tarefas em conversas separadas enquanto uma operação anterior ainda está em execução. Cada conversa funciona de forma independente, permitindo que você coloque várias alterações em fila sem precisar esperar uma terminar.

Para executar novas tarefas, você pode continuar a conversa no mesmo diálogo ou retornar à tela inicial do **Contracts Manager Agent** clicando no ícone de seta <i class="fas fa-angle-left" aria-hidden="true"></i> no canto superior esquerdo.

### Acompanhando tarefas e histórico

1. Clique em `View tasks` no canto superior direito.
2. No painel lateral, revise as tarefas dos últimos 7 dias, incluindo o nome da operação e os identificadores de contratos relacionados.

> ℹ️ Para gerenciar contratos via API, consulte a documentação para desenvolvedores da [B2B Contracts API](https://developers.vtex.com/docs/api-reference/).