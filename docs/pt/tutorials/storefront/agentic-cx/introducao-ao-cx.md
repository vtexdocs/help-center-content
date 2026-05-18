---
title: 'Introdução ao CX'
id: 50MhPxb5jmKTOyW1UcWER3
status: PUBLISHED
createdAt: 2025-10-03T16:56:02.600Z
updatedAt: 2025-05-13T14:20:03.474Z
publishedAt: 2025-10-03T14:20:03.474Z
firstPublishedAt: 2025-10-03T14:20:03.474Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: introduction-to-cx
legacySlug: introducao-ao-weni-agentic-ai
locale: pt
subcategoryId: 7BtmQ6zk6O7VJ7QumXJEiM
---

O CX é uma ferramenta nativa da VTEX de atendimento ao cliente com uso de agentes. Esses agentes usam inteligência artificial (IA) para conversar com os seus clientes, exibir o catálogo da sua loja e criar um carrinho, entre outras ações.

## Configurar o CX

Para configurar essa ferramenta na sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Em **CX**, clique em **Dashboard**.
3. Na tela de onboarding, selecione entre [Escala suporte e eficiência](#escala-suporte-e-eficiência) e [WhatsApp Store](#whatsapp-store).

> ℹ️ Essa escolha inicial é apenas para o onboarding. Você pode habilitar a outra opção depois, no menu de Configurações do CX.

### Escala suporte e eficiência

A Escala suporte e eficiência é uma ferramenta que utiliza

Para ativar essa ferramenta, siga os passos abaixo:

1. Clique no card Escala suporte e eficiência.
2. Selecione a URL da loja que vai ser sua fonte de dados.
3. Clique em `Confirmar`.
4. A etapa de ativação da ferramenta é automática. Se quiser, pode pular clicando em `Pular`.
5. Quando a configuração concluir, você pode pular a etapa ou testar os agentes.

Ao clicar em `Testar`, você consegue testar os agentes da configuração inicial, que são:

- Concierge de catálogo: recomenda produtos baseados no perfil de cada cliente.
- Agente de cancelamentos: cancela a compra do cliente.
- Agente de status de pedidos: mostra ao cliente o status do pedido realizado.
- Agente de FAQ inteligente: responde perguntas do cliente a partir da base de dados da loja, como estoque, valor, entre outros.

Clicar em uma dessas opções envia uma mensagem para o chat na tela e você pode testar o agente em tempo real.

Nesse teste, você também consegue determinar as instruções que o agente segue, clicando em `Refinar instruções`.

Quando estiver pronto para terminar de configurar, escolha o tipo de ativação em **Pronto para ativação?**.

- Ativação segura: Ativa os agentes apenas para 10% dos clientes.

> ℹ️ Recomendamos iniciar com a ativação segura para você testar a ferramenta com poucos clientes. Depois, é possível fazer a ativação completa nas configurações.

- Ativação completa: Ativa os agentes para todas as interações com seus clientes.

### WhatsApp Store

Com o WhatsApp Store, você oferece para seus clientes pagamento Pix integrado, recuperação de carrinhos abandonados, ofertas personalizadas de produtos, entre outros. Essa conexão é feita através da sua conta no Meta for Business. No Meta for Business da sua loja, você poderá criar um número de telefone novo, usar um número de telefone existente na sua conta ou até associar um número pré-verificado à sua conta.

> ℹ️ Números pré-verificados são números de telefone que já passaram por aprovação da Meta e estão prontos para serem usados pela API do WhatsApp Business. Um número pré-verificado não precisa receber SMS ou ligação para ser ativado. Quando você seleciona um número pré-verificado, ele passa a pertencer à sua conta do WhatsApp Business.

Para ativar essa ferramenta, siga os passos abaixo:

1. Clique no card WhatsApp Store.
2. Ative a conta com uma das opções abaixo:
    - Ativar com um número instantâneo.
    - Conectar seu número oficial.
3. Clique em `Continuar`. Você vai ser direcionado à página de login do Meta for Business.
4. Selecione o **Portfólio do Business**.
5. Em **Conta do WhatsApp Business**, você poderá:
    - Criar uma conta do WhatsApp Business.
    - Usar uma conta do WhatsApp Business existente.
6. Clique em `Adicionar um novo número`.
    - Para adicionar um número pré-verificado, selecione `Número fornecido pelo BSP`. O número estará listado com o status `Verificado`.
7. Em **Nome de exibição**, digite o nome que vai aparecer para seus clientes.
8. Selecione o modo de verificação do número.
    - Com o número pré-verificado, você pode pular esse passo.
9. Leia as permissões concedidas ao VTEX CX Platform e clique em `Confirmar`.
10. Ao final, clique em `Concluir`. Você vai ser direcionado de volta ao CX no Admin da VTEX.

## Dashboard

O Dashboard mostra informações sobre o CX e é dividido em duas páginas:

- [Desempenho do time de agentes](#desempenho-do-time-de-agentes)
- [Recuperação de carrinho abandonado](#recuperação-de-carrinho-abandonado)

### Desempenho do time de agentes

A tela de desempenho do time de agentes fornece uma visão geral dos atendimentos, com detalhes como taxa de resolução e nível de satisfação do cliente.

- Conversas: Número de conversas gerenciadas por agentes em um mesmo dia (até as 23h59).
- Taxa de resolução: Porcentagem de conversas que foram resolvidas apenas por agentes. Se uma interação resolvida teve atendimento humano, essa interação não entra nessa taxa.
- Satisfação do cliente: Porcentagem que revela o nível de satisfação dos clientes após atendimento com agentes.

### Recuperação de carrinho abandonado

A tela de recuperação de carrinho abandonado fornece uma visão geral das interações do WhatsApp.

- **Enviadas**: número de mensagens enviadas para clientes.
- **Entregues**: número de mensagens entregues aos clientes.
- **Lidas**: número de mensagens lidas pelos clientes.

> ℹ️ O número de mensagens lidas depende das configurações do WhatsApp do cliente. Se as leituras de mensagem estiverem desativadas, essa métrica vai ser afetada.

- **Cliques**: número de cliques no link de recuperação de carrinho abandonado.

## Auditoria

A tabela de Auditoria fornece informações individuais de cada atendimento.

| Dado | Descrição |
| --- | --- |
| Nome | Nome do cliente que foi atendido. |
| Classificação | Status do atendimento. <br> `Assistido por IA`: a interação foi resolvida exclusivamente pelos agentes. <br> `Não assistido`: a interação não pôde ser resolvida pelos agentes e passou para atendimento humano. <br> `Em progresso`: a interação ainda não foi analisada. |
| CSAT | Nota de avaliação do atendimento, de 1 a 5. |
| Data | Data do atendimento. |
| Hora | Hora do atendimento. |

Para saber mais sobre os atendimentos, clique em `Ver detalhes`. Você será redirecionado à página de **Auditoria** do VTEX CX Platform.
