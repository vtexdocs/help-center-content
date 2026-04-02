---
title: 'Introdução ao Agentic CX'
id: 50MhPxb5jmKTOyW1UcWER3
status: PUBLISHED
createdAt: 2025-09-23T16:56:02.600Z
updatedAt: 2025-10-03T14:20:03.474Z
publishedAt: 2025-10-03T14:20:03.474Z
firstPublishedAt: 2025-10-03T14:20:03.474Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: introduction-to-agentic-cx
legacySlug: introducao-ao-weni-agentic-ai
locale: pt
subcategoryId: 7BtmQ6zk6O7VJ7QumXJEiM
---

O Agentic CX é uma ferramenta nativa da VTEX de atendimento ao cliente com uso de agentes. Esses agentes usam inteligência artifical (IA) para conversar com os seus clientes, exibir o catálogo da sua loja e criar um carrinho, entre outras ações.

## Configurar Agentic CX

Para configurar essa ferramenta na sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Em **Agentic CX**, clique em **Dashboard**.
3. Na tela de onboarding, selecione entre **Escala suporte e eficiência** ou **WhatsApp Store**.

> ℹ️ Essa escolha inicial é apenas para o onboarding. Você pode habilitar a outra opção depois de configurar a ferramenta, no painel do Agentic CX.

### Escala suporte e eficiência

Se você selecionou essa opção no onboarding, siga os passos abaixo:

1. Selecione a URL da loja que vai ser sua fonte de dados.
2. Clique em `Confirmar`.
3. A etapa de ativação da ferramenta é automática. Se quiser, pode pular clicando em `Pular`.
4. Quando a configuração concluir, você pode pular a etapa ou testar os agentes.

Ao clicar em `Testar`, você consegue testar os agentes da configuração inicial, que são:

- Concierge de catálogo.
- Agente de cancelamentos.
- Agente de status de pedidos.
- Agente de FAQ inteligente.

Clicar em uma dessas opções envia uma mensagem para o chat na tela e você pode testar o agente em tempo real.

Nesse teste, você também consegue determinar as instruções que o agente segue, clicando em `Refinar instruções`.

Quando estiver pronto para terminar de configurar, escolha o tipo de ativação em **Pronto para ativação?**.

- Ativação segura (Recomendado): Ativa os agentes apenas para 10% dos clientes.
- Ativação completa: Ativa os agentes para todas as interações com seus clientes.

## Dashboard

O Dashboard mostra informações sobre o Agentic CX e contém essas seções:

- [Desempenho do time de IA](#desempenho-do-time-de-ia)
- [Auditoria](#auditoria)
- [Configurações](#configurações)

### Desempenho do time de IA

A tela de desempenho do time de IA informa como foram os atendimentos a clientes realizados pelos agentes. Essa tabela é dividida em três seções:

- Conversas: Número de conversas gerenciadas por agentes.
- Taxa de resolução: Porcentagem de conversas que foram resolvidas apenas por agentes. Se uma interação resolvida teve atendimento humano, essa interação não entra nessa taxa.
- Satisfação do cliente: Porcentagem que revela nível de satisfação dos clientes após atendimento com agentes.

### Auditoria

A tabela de Auditoria fornece informações individuais de cada atendimento.

| Dado | Descrição |
| --- | --- |
| Nome | Nome do agente que realizou o atendimento |
| Classificação | Status do atendimento |
| CSAT | Nota de 1 a 5 dada ao atendimento |
| Data | Data do atendimento |
| Hora | Hora do atendimento |

Para saber mais detalhes, clique em `Ver detalhes`. Você será redirecionado à página de **Auditoria** do VTEX Agentic CX Platform.

### Configurações

- [Webchat](#webchat)
- [Equipe de agentes](#equipe-de-agentes)

#### Webchat

Para modificar a aparência e o comportamento do assistente inteligente, clique em `Editar`. Essa ação levará você ao VTEX Agentic CX Platform. Para mais informações sobre a plataforma, acesse [esse artigo](docs/pt/tutorials/vtex-agentic-cx-platform/visão-geral-vtex-agentic-cx-platform/visao-geral-vtex-agentic-cx-platform.md).

Você também pode escolher a distribuição de tráfego entre:

- 10% (Canário/Validação): ativa os agentes para apenas 10% dos seus clientes.
- 100% (Lançamento completo): ativa os agentes para todos os seus clientes.

#### Equipe de agentes

Na seção **Equipe de agentes**, você pode:

- Refinar instruções.
- Atribuir agentes.
- Ativar ou desativar agentes já atribuídos.
- Editar o gerente de atendimento.

Para refinar as instruções, clique em `Refinar instruções`.

Na aba de **Instruções**, você consegue:

- Adicionar e salvar uma instrução personalizada.
- Ler, editar e remover as instruções personalizadas.
- Ler as instruções padrão.
- Ler os tópicos de segurança.

> ❗ As instruções padrão e os tópicos de segurança não podem ser modificados.

Clicar em `Ver na loja` abre uma janela com a sua loja, onde você pode testar como o Agentic CX.
