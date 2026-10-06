---
title: 'AI Sales Team Management e Customer Portfolio no VTEX Sales App'
createdAt: 2026-10-06T00:00:00.000Z
updatedAt: 2026-10-06T00:00:00.000Z
contentType: tutorial
productTeam: Physical Stores
slugEN: ai-sales-team-management-and-customer-portfolio-on-vtex-sales-app
locale: pt
---

O **AI Sales Team Management** é o agente conversacional para administrar times de vendas, sales reps e a carteira de clientes de quem usa o [VTEX Sales App - Primeiros passos e configurações](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes). No Admin VTEX, acesse **Apps** > **Sales Management** > **Sales Team**.

> ⚠️ A gestão de vendedores de loja física do **VTEX Sales App** está em [Gerenciar vendedores no VTEX Sales App](https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app). O **AI Sales Team Management** administra times de vendas, sales reps e a carteira de clientes da operação B2B.

Neste guia, você aprenderá a usar o **AI Sales Team Management** nas seguintes seções:

- [Casos de uso](#casos-de-uso)
- [Gerenciando times e carteira de clientes](#gerenciando-times-e-carteira-de-clientes)
  - [Como o agente funciona](#como-o-agente-funciona)
  - [Conceitos](#conceitos)
  - [Vínculo de contratos e visibilidade no VTEX Sales App](#vinculo-de-contratos-e-visibilidade-no-vtex-sales-app)
  - [Registrar e mover sales reps](#registrar-e-mover-sales-reps)
  - [Criar e mover times](#criar-e-mover-times)
  - [Definir a carteira de clientes](#definir-a-carteira-de-clientes)
  - [Fazer alterações em massa](#fazer-alteracoes-em-massa)
  - [Consultar a estrutura atual](#consultar-a-estrutura-atual)
  - [Desfazer uma ação](#desfazer-uma-acao)
- [O que o agente não faz](#o-que-o-agente-nao-faz)
- [Exemplos de solicitação](#exemplos-de-solicitacao)

## Casos de uso

O **AI Sales Team Management** interpreta o que você descreve e prepara a mudança na estrutura comercial para a sua confirmação. Veja alguns cenários comuns:

- **Montar o organograma de vendas:** crie times e subtimes na mesma lógica da operação, como regionais, cidades ou carteiras.
- **Cadastrar sales reps:** informe nome, email e time para incluir uma pessoa na estrutura.
- **Definir a carteira de clientes:** vincule [Contratos B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) já existentes a um time, para limitar o que os sales reps daquele time acessam no **VTEX Sales App**.
- **Alterar vários registros de uma vez:** descreva a mudança na conversa ou envie um arquivo, revise o plano e confirme.

## Gerenciando times e carteira de clientes

No Admin VTEX, acesse **Apps** > **Sales Management** > **Sales Team**.

### Como o agente funciona

Você pode escrever o pedido em linguagem natural. Para operações em massa, também pode enviar um arquivo XLSX, CSV ou TXT.

> ℹ️ Antes de criar, editar ou remover qualquer item, o agente apresenta um plano e espera a sua confirmação explícita. Nenhuma dessas ações é executada sem essa confirmação.

Quando o **AI Sales Team Management** não sabe ou não tem acesso a uma informação, ele diz isso.

Antes de agir, o agente também confere o pedido:

- **Nomes iguais ou parecidos:** se você pedir para criar o time "Vendass Sul" e já existir "Vendas Sul", o agente pergunta o que você pretende, em vez de assumir.
- **Papéis que não existem:** um pedido de papel que não está disponível, como "Diretor Regional", não é aplicado.
- **Contratos que não existem:** o agente não vincula um contrato que não está na conta.

### Conceitos

| **Termo** | **Significado** |
| :---- | :---- |
| **Time** | Unidade da estrutura de vendas. Um time pode ficar abaixo de outro, como time pai e subtime, para representar o organograma real. |
| **Sales rep** | Pessoa do time comercial cadastrada no agente. O papel disponível para atribuição é `inStore Sales Person`. O agente não cria papéis. |
| **Carteira de clientes** | Contratos vinculados a um time, ou a um subtime exclusivo de um sales rep. |
| **Contrato** | Contrato B2B já existente, usado para o vínculo com um time. |

### Vínculo de contratos e visibilidade no VTEX Sales App

Vincular um contrato a um time define a carteira daquele time e muda o que o sales rep vê no **VTEX Sales App**.

- **Time com contratos vinculados:** o **VTEX Sales App** mostra apenas as quotes e os pedidos daqueles contratos, e a criação de pedidos fica restrita a eles.
- **Time sem nenhum contrato vinculado:** os sales reps desse time enxergam todos os contratos, sem restrição.

> ⚠️ Um time sem contrato vinculado enxerga todos os contratos da conta. Confirme os vínculos antes de contar com uma visão restrita no **VTEX Sales App**.

Exemplo:

- O Time Sul tem os contratos 100 e 200 vinculados. Os sales reps desse time veem e criam pedidos apenas para esses contratos.
- O Time Norte não tem contrato vinculado. Os sales reps desse time veem todos os contratos da conta.

Um mesmo contrato pode ser vinculado a mais de um time. O agente avisa quando detecta isso, mas não impede o vínculo. Se o contrato 100 estiver no Time Sul e no Time Sudeste, os sales reps dos dois times passam a enxergar esse contrato.

Não há carteira individual fora de um subtime. Para um sales rep ter uma carteira só dele, crie um subtime exclusivo para essa pessoa e vincule os contratos apenas a esse subtime.

### Registrar e mover sales reps

Para registrar um sales rep, informe nome, email e time. O código do sales rep e a loja vinculada são opcionais.

Exemplo: "Registre o sales rep José Almeida, jose@acme.com, no time Nordeste."

Você pode adicionar ou remover sales reps de um time, um a um ou em massa. Remover um sales rep de um time desvincula essa pessoa do time. O usuário permanece na conta.

Para mover um sales rep, indique a pessoa e o time de destino.

Exemplo: "Movimente o sales rep José Almeida, jose@acme.com, para o time Sudeste."

### Criar e mover times

> ⚠️ Depois que um time teve um time pai, não é possível devolvê-lo ao nível raiz. Defina a hierarquia antes de criar a estrutura.

Você pode criar um time, editar um time existente ou movê-lo para dentro de outro time.

Exemplo de criação: "Cria o time Vendas Sul."

Exemplo de movimentação: "Move o subtime Contagem para dentro do time Nordeste."

### Definir a carteira de clientes

Para vincular um contrato a um time, indique o contrato e o time.

Exemplo: "Associa o contrato 4521 ao time Vendas Sul."

Para a carteira de um sales rep, crie antes o subtime exclusivo e vincule os contratos somente a esse subtime.

Exemplo: "Quero criar subtimes baseados na carteira de cada sales rep."

### Fazer alterações em massa

As operações deste guia podem ser pedidas na conversa ou por arquivo XLSX, CSV ou TXT.

Exemplos:

- "Processa essa planilha de sales reps."
- "Segue a planilha com a carteira de clientes por time."

O agente lê o arquivo e separa as linhas válidas das inválidas. Cada linha inválida, como uma linha sem email, é informada com o motivo da rejeição. As linhas válidas seguem no plano. Esse processamento parcial é o comportamento esperado.

Quando a alteração vale para mais de um usuário, por arquivo ou pela conversa, o agente mostra as mensagens de erro e um **canvas de validação** com o que será feito. Revise esse resumo e confirme antes de a mudança ser aplicada.

### Consultar a estrutura atual

Você pode perguntar pela estrutura sem alterá-la. A resposta considera o acesso de quem pergunta.

Exemplos:

- "Quais contratos o Vendas Sul tem acesso?"
- "Quais usuários existem no time Vendas Norte?"

### Desfazer uma ação

Na mesma sessão, você pode desfazer criações recentes de times e de usuários.

Exemplo: "Desfaz a criação do time X."

> ❗ O vínculo de um contrato não pode ser desfeito no **AI Sales Team Management**.

## O que o agente não faz

- Não acessa nem altera dados de compradores, contatos ou organizações do [**B2B Buyer Portal**](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). O agente usa contratos já existentes somente para vinculá-los a times.
- Não cria contratos B2B novos.
- Não envia emails nem outras mensagens.
- Não eleva permissões de usuário.
- Não mostra histórico de auditoria. Para consultar esse histórico, use o [**Audit**](https://help.vtex.com/pt/docs/tutorials/audit).

## Exemplos de solicitação

| **Quero** | **Solicitação** |
| :---- | :---- |
| Criar times de vendas | "Crie meus times de vendas: Time Sul, Time Norte, Time Nordeste." |
| Criar um time | "Cria o time Vendas Sul." |
| Mover um subtime | "Move o subtime Contagem para dentro do time Nordeste." |
| Registrar um sales rep | "Registre o sales rep José Almeida, jose@acme.com, no time Nordeste." |
| Adicionar um sales rep | "Adicione o sales rep Ricardo Alves no time Vendas Norte, e-mail ricardo.alves@empresa.com." |
| Mover um sales rep | "Movimente o sales rep José Almeida, jose@acme.com, para o time Sudeste." |
| Cadastrar vários sales reps | Anexe o arquivo e envie "Processa essa planilha de sales reps." |
| Vincular um contrato a um time | "Associa o contrato 4521 ao time Vendas Sul." |
| Vincular a carteira por arquivo | Anexe o arquivo e envie "Segue a planilha com a carteira de clientes por time." |
| Criar subtimes por sales rep | Anexe o arquivo e envie "Quero criar subtimes baseados na carteira de cada sales rep." |
| Ver os contratos de um time | "Quais contratos o Vendas Sul tem acesso?" |
| Ver os usuários de um time | "Quais usuários existem no time Vendas Norte?" |
| Desfazer uma criação recente | "Desfaz a criação do time X." Esse pedido não desfaz vínculo de contrato. |
