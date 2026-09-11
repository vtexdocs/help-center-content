---
title: 'Configurar o VTEX CX Platform no Admin VTEX'
createdAt: 2026-09-10T18:00:00.000Z
updatedAt: 2026-09-10T18:00:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: configuring-vtex-cx-platform-inside-vtex-admin
locale: pt
---

O [VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/introduction-to-cx) reúne, no Admin VTEX, o Shopping Assistant da sua loja, a equipe de agentes de IA e as automações de WhatsApp. Todas essas ferramentas são gerenciadas na página **Configurações** do Dashboard.

Neste tutorial, você vai aprender a acessar essa página e a usar cada uma de suas abas: **Atendimento ao Cliente**, onde ficam o webchat e a equipe de agentes, e **WhatsApp**, onde ficam o perfil do número e as automações de mensagens.

> ⚠️ Este tutorial parte de um CX já configurado na conta, com o onboarding concluído. Se você ainda não fez essa etapa, siga as instruções em [Introdução ao CX](https://help.vtex.com/pt/docs/tutorials/introduction-to-vtex-cx-platform#configurar-o-cx). Para usar a aba **WhatsApp**, a loja precisa ter um número conectado ao WhatsApp Store. Consulte a seção [WhatsApp Store](https://help.vtex.com/pt/docs/tutorials/introduction-to-vtex-cx-platform#whatsapp-store) para saber como ativar essa conexão.

## Acessar as configurações

Para abrir a página **Configurações**, siga os passos abaixo:

1. No Admin VTEX, acesse **Storefront**, ou digite **Storefront** na barra de busca no topo da página.
2. Em **VTEX CX Platform**, clique em **Dashboard**.
3. No canto superior direito do **CX Dashboard**, clique em `Configurações`.

A página **Configurações** abre na aba **Atendimento ao Cliente**.

O botão `Ir para VTEX CX Platform` leva ao ambiente completo da plataforma, onde estão os agentes que exigem integrações de terceiros.

## Configurar o atendimento ao cliente

A aba **Atendimento ao Cliente** reúne as configurações do Shopping Assistant exibido na loja (webchat) e da **Equipe de agentes** que responde aos clientes.

### Webchat

A seção **Webchat** tem dois cards:

- **Aparência e Comportamento:** mostra uma prévia do widget do Shopping Assistant com o nome e a mensagem de boas-vindas atuais.

Para alterar os campos de nome, imagem e mensagem de boas-vindas do Shopping Assistant, clique em `Editar`.

- **Distribuição de Tráfego:** define para qual parcela dos clientes da loja o Shopping Assistant fica visível. Use a chave para ativar ou desativar o assistente e arraste o controle deslizante para escolher o percentual de clientes, entre 10% e 100%.

### Equipe de agentes

A seção **Equipe de agentes** lista os agentes pré-configurados pela VTEX. Agentes que requerem integrações de terceiros estão disponíveis apenas no ambiente completo do VTEX CX Platform, acessível pelo botão `Ir para VTEX CX Platform`.

A equipe é organizada da seguinte forma:

- **Agente gerente:** card no topo da lista, identificado pela tag `Gerente`. Ele recebe as mensagens dos clientes e aciona os demais agentes conforme o assunto. Para alterar seu objetivo e suas instruções, clique em `Editar`.
- **Agentes oficiais:** cards identificados pela tag `Oficial`, cada um com uma descrição da tarefa que executa. Use a chave em cada card para ativar ou desativar o agente.

Os agentes oficiais disponíveis no momento são:

| Agente | Função |
| :--- | :--- |
| **Order Cancellation** | Trata solicitações de cancelamento de pedidos. |
| **Product Concierge Agent** | Ajuda o cliente a descobrir e escolher produtos do catálogo da loja. |
| **Store Pickup Points Agent** | Localiza os pontos de retirada mais próximos a partir de um CEP. |
| **Orders Agent Commerce** | Fornece detalhes sobre os pedidos do cliente. |
| **Checkout Concierge Agent** | Conduz o carrinho e o processo de checkout. |

Para ajustar o comportamento da equipe, utilize os botões a seguir:

- `Refinar instruções`: permite complementar as instruções seguidas pelos agentes.
- `Atribuir agentes`: adiciona novos agentes à equipe.

## Configurar o WhatsApp

A aba **WhatsApp** reúne o perfil do número conectado à loja e as automações de mensagens.

### Perfil do WhatsApp

A seção **Perfil do WhatsApp** mostra o nome de exibição e o número de telefone conectados ao WhatsApp Store. Para alterar a foto de perfil exibida para os clientes, clique em `Editar imagem`.

### Automações

A seção **Automações** lista as automações conectadas à loja, com o idioma dos templates ao lado do nome. As automações disponíveis são:

- **WhatsApp Cart Recovery:** envia templates de recuperação de carrinho abandonado, com base nos dados do carrinho recebidos da VTEX.
- **WhatsApp Order Notifications:** envia templates de status do pedido, com base nas mudanças de status recebidas da VTEX.
- **WhatsApp Payment Recovery:** envia templates de recuperação de pagamento quando o pedido é criado sem pagamento aprovado.

Para conectar uma nova automação, clique em <i class="fas fa-plus" aria-hidden="true"></i>`Conectar automações`.

Para remover uma automação, clique no ícone de três pontos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> no card e, em seguida, em `Desconectar automação`.

## Gerenciar uma automação de WhatsApp

Para abrir os detalhes de uma automação, clique em `Ver detalhes` do card correspondente. A página da automação tem três abas: **Sobre**, **Configurações** e **Logs**. Os exemplos abaixo usam a automação **WhatsApp Cart Recovery**.

### Sobre

A aba **Sobre** exibe a descrição da automação, o **Status** da conexão (`Conectado`) e a seção **Templates**, com os modelos de mensagem usados nos envios.

Cada card de template mostra o nome, o status de aprovação pela Meta (por exemplo, `Aprovado`) e o texto da mensagem, em que `{{1}}` representa uma variável preenchida no envio, como o nome do cliente. Para alterar a mensagem ou criar um novo template, clique em `Editar template`.

### Configurações

Na aba **Configurações**, você define as regras de disparo da automação.

| Campo | Descrição |
| :--- | :--- |
| **URL de Webhook** | Endereço que recebe os eventos da VTEX que acionam a automação. Use o ícone ao lado do campo para copiar a URL e configurá-la em um sistema externo, se necessário. |
| **Porcentagem da base de contatos que será acionada** | Percentual dos contatos elegíveis que recebem a mensagem. |
| **Valor mínimo do carrinho para disparo** | Valor a partir do qual um carrinho abandonado gera envio. Carrinhos abaixo desse valor são ignorados. |
| **Tempo de abandono do carrinho em minutos** | Tempo, em minutos, que o carrinho precisa ficar sem atividade para ser considerado abandonado. |
| **Horário de operação** | Marque a caixa para restringir os envios a uma janela de tempo. |

Após alterar qualquer campo, clique em `Salvar alterações`.

### Logs

A aba **Logs** registra cada tentativa de envio da automação, para você confirmar se uma mensagem foi enviada e entender por que ela foi ignorada ou falhou.

Cada registro apresenta as seguintes informações:

| Coluna | Descrição |
| :--- | :--- |
| **Template** | Modelo de mensagem usado no envio, como `Abandoned Cart`. Fica vazio quando a execução foi ignorada antes da escolha do template. |
| **Contato** | Número de WhatsApp do cliente. |
| **ID do OrderForm** | Identificador do carrinho que originou a execução. |
| **Valor** | Valor do carrinho ou do pedido, na moeda da compra. |
| **Status** | Resultado da execução. `Ignorado` indica que o contato ou o carrinho não atendeu aos critérios de disparo definidos na aba **Configurações**; `Erro` indica falha no envio. |
| **Data** | Data e hora da execução. |

#### Buscar e filtrar execuções

Para localizar execuções específicas, use as opções no topo da lista:

- **Contato ou ID do OrderForm:** digite o número de WhatsApp do cliente ou o ID do carrinho (na automação de recuperação de pagamento, o ID do pedido).
- **Período:** selecione as datas de início e fim no calendário.
- **Template:** filtre pelo modelo de mensagem usado.
- **Status:** filtre pelo resultado da execução:
  - `Enviado`: O disparo foi enviado ao cliente.
  - `Entregue`: O disparo foi entregue ao cliente.
  - `Lido`: O disparo foi visualizado pelo cliente.
  - `Processando`: O disparo está sendo processado.
  - `Ignorado`: O carrinho não atendeu aos critérios de disparo e, por isso, o disparo não foi realizado.
  - `Erro`: O disparo não foi feito devido a uma falha no envio.

Quando nenhum registro atende aos filtros, a lista exibe a mensagem **Nenhum log encontrado**. Para ver mais resultados, ajuste os filtros ou o período.

#### Ver os detalhes de uma execução

Para entender o resultado de uma execução, clique na seta (`>`) à esquerda do registro. A linha se expande e exibe o **Resumo**, com a explicação do resultado do status. Para ver o rastreamento completo da execução, clique em `Ver JSON`.

#### Exportar os logs

Para analisar ou compartilhar os registros fora do Admin VTEX, clique em `Exportar dados`. A exportação respeita a busca, o período e os filtros aplicados.s
