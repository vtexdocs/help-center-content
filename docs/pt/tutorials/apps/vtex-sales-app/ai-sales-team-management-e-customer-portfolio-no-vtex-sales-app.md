---
title: 'AI Sales Team Management e Customer Portfolio no VTEX Sales App'
createdAt: 2026-10-06T00:00:00.000Z
updatedAt: 2026-10-06T00:00:00.000Z
contentType: tutorial
productTeam: Physical Stores
slugEN: ai-sales-team-management-and-customer-portfolio-on-vtex-sales-app
locale: pt
---

> ℹ️ O **AI Sales Team Management** está em fase beta, o que significa que estamos trabalhando para aprimorá-lo. Atualmente, a disponibilidade é somente para contas selecionadas. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/pt/support).

O **AI Sales Team Management** é um agente de inteligência artificial que permite administrar times de vendas, [sales reps](#conceitos) e a carteira de clientes de quem usa o [VTEX Sales App](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes) por meio de uma experiência conversacional no Admin VTEX. Este artigo explica o funcionamento do agente e apresenta as ações que você pode realizar de forma conversacional.

> ⚠️ A gestão de vendedores de loja física do **Sales App** está em [Gerenciar vendedores no VTEX Sales App](https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app). O **AI Sales Team Management** administra times de vendas, sales reps e a carteira de clientes da operação B2B.

## Casos de uso

O **AI Sales Team Management** interpreta o que você descreve e prepara a mudança na estrutura comercial para a sua confirmação. Veja alguns cenários comuns:

- **Montar o organograma de vendas:** crie times e subtimes na mesma lógica da operação, como regionais, cidades ou carteiras.
- **Cadastrar sales reps:** informe nome, email e time para incluir uma pessoa do time comercial na estrutura.
- **Definir a carteira de clientes:** vincule [Contratos B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) já existentes a um time, para limitar o que os sales reps daquele time acessam no **VTEX Sales App**.
- **Alterar vários registros de uma vez:** descreva a mudança na conversa ou envie um arquivo, revise o plano e confirme.

## Conceitos

| **Termo** | **Significado** |
| :---- | :---- |
| **Time** | Unidade da estrutura de vendas. Um time pode ficar hierarquicamente abaixo de outro, como time pai e subtime, para representar o organograma real. |
| **Sales rep** | Pessoa do time comercial cadastrada no agente. O perfil do Licence Manager disponível para sales reps é [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person). O **AI Sales Team Management** não cria perfis de acesso. |
| **Carteira de clientes** | Contratos vinculados a um time ou subtime exclusivo de um sales rep. |
| **Contrato** | Contrato B2B já existente, usado para o vínculo com um time. |

## Pré-requisitos

Como o **AI Sales Team Management** vincula contratos a times, a conta precisa ter [Contratos B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) cadastrados para que você defina a carteira de clientes. O agente não cria contratos novos e não vincula contratos que não existem na conta.

## Acessar o agente

No Admin VTEX, acesse **Apps > Sales Management > Sales Team**. Nessa página, você pode escrever a solicitação em linguagem natural ou anexar um arquivo `.xlsx`, `.csv` ou `.txt` para operações em massa.

## Regras do funcionamento

> ℹ️ Antes de criar, editar ou remover qualquer item, o agente apresenta um plano e espera a sua confirmação explícita. Nenhuma dessas ações é executada sem essa confirmação.

Além da confirmação do plano, o **AI Sales Team Management** opera a partir das seguintes regras:

- **Desambiguação de nomes:** se você pedir para criar o time "vendas sul" e já existir "VENDAS SUL", o agente pergunta o que você pretende, em vez de assumir.
- **Validação de perfis de acesso do storefront:** um pedido de perfil de acesso do Storefront que não existe, não é aplicado. Veja a lista completa em [Adicionar usuários à organização compradora](https://help.vtex.com/pt/docs/tutorials/adicionar-usuarios-a-organizacao-compradora).
- **Validação de contratos:** o agente não vincula um contrato que não está na conta.
- **Alerta de contrato compartilhado:** quando um contrato já está vinculado a outro time, o agente avisa, mas não impede o vínculo.
- **Respostas sem suposições:** quando o agente não sabe ou não tem acesso a uma informação, ele informa isso.
- **Controle de permissão a usuários:** cada usuário consulta informações restritas ao seu nível de acesso. Por exemplo, um sales rep não pode ver os contratos de outro time.

## Vínculo de contratos e visibilidade no Sales App

Vincular um contrato a um time define a carteira daquele time e muda o que o sales rep vê no **Sales App**.

- **Time com contratos vinculados:** o **Sales App** mostra apenas as cotações e os pedidos daqueles contratos e a criação de pedidos fica restrita aos sales reps desse time.
  - Exemplo: o "Time Sul" possui ao todo 80 contratos, sendo 30 deles vinculados. Portanto, os sales reps do time comercial têm acesso de visualição e criação de pedidos somente para esses 30 contratos.
- **Time sem contratos vinculados:** os sales reps desse time visualizam todos os contratos da conta.
  - Exemplo: o "Time Norte" tem 100 contratos e nenhum deles é vinculado. Isso significa que os sales reps do time visualizam e criam pedidos para os 100 contratos.

> ⚠️ Recomendamos que você confirme os vínculos contratuais antes de definir restrições ao time de vendas.

Um mesmo contrato pode ser vinculado a mais de um time. O agente avisa quando detecta isso, mas não impede o vínculo. Se o contrato 100 estiver no Time Sul e no Time Sudeste, os sales reps dos dois times passam a enxergar esse contrato.

Não há carteira individual fora de um subtime. Para um sales rep ter uma carteira só dele, crie um subtime exclusivo para essa pessoa e vincule os contratos apenas a esse subtime.

## Gerenciar times, sales reps e carteira de clientes

> ℹ️ Os exemplos de solicitação apresentados a seguir são apenas ilustrativos e não são a única forma de pedir uma ação ao agente.

Você pode realizar as seguintes ações:

- [Registrar e mover sales reps](#registrar-e-mover-sales-reps)
- [Criar e mover times](#criar-e-mover-times)
- [Definir a carteira de clientes](#definir-a-carteira-de-clientes)
- [Fazer alterações em massa](#fazer-alteracoes-em-massa)
- [Revisar e confirmar o plano](#revisar-e-confirmar-o-plano)
- [Consultar a estrutura atual](#consultar-a-estrutura-atual)
- [Desfazer uma ação](#desfazer-uma-acao)

### Registrar e mover sales reps

Para registrar um sales rep, informe nome, email e time. O código do sales rep e a loja vinculada são opcionais.

**Exemplo:** "Registre o sales rep José Almeida, jose@acme.com, no time Nordeste."

Você pode adicionar ou remover sales reps de um time, um a um ou em massa. Remover um sales rep de um time desvincula essa pessoa do time. O usuário permanece na conta.

Para mover um sales rep, indique a pessoa e o time de destino.

**Exemplo:** "Movimente o sales rep José Almeida, jose@acme.com, para o time Sudeste."

### Criar e mover times

> ⚠️ Depois que um time teve um time pai, não é possível devolvê-lo ao nível raiz. Defina a hierarquia antes de criar a estrutura.

Você pode criar um time, editar um time existente ou movê-lo para dentro de outro time.

**Exemplo de criação:** "Cria o time Vendas Sul."

**Exemplo de movimentação:** "Move o subtime Contagem para dentro do time Nordeste."

### Definir a carteira de clientes

Para vincular um contrato a um time, indique o contrato e o time. Antes de vincular, confira as regras de [vínculo de contratos e visibilidade no VTEX Sales App](#vinculo-de-contratos-e-visibilidade-no-vtex-sales-app).

**Exemplo:** "Associa o contrato 4521 ao time Vendas Sul."

Para a carteira de um sales rep, crie antes o subtime exclusivo e vincule os contratos somente a esse subtime.

**Exemplo:** "Quero criar subtimes baseados na carteira de cada sales rep."

### Fazer alterações em massa

As operações deste guia podem ser pedidas na conversa ou por arquivo XLSX, CSV ou TXT. Para usar um arquivo, anexe-o à conversa e envie a solicitação.

**Exemplos:**

- "Processa essa planilha de sales reps."
- "Segue a planilha com a carteira de clientes por time."

> ℹ️ O processamento parcial é o comportamento esperado. O agente lê o arquivo inteiro e separa as linhas válidas das inválidas, seguindo estas regras:
>
> - As linhas válidas seguem no plano.
> - Cada linha inválida, como uma linha sem email, é informada com o motivo da rejeição.

### Revisar e confirmar o plano

Antes de criar, editar ou remover qualquer item, o agente apresenta um plano com o que será feito. Revise o plano e confirme a operação para que o agente aplique as mudanças.

Quando a alteração vale para mais de um usuário, por arquivo ou pela conversa, o agente mostra as mensagens de erro e um **canvas de validação** com o que será feito. Como essa mudança afeta vários usuários de uma vez, revise esse resumo antes de confirmar.

### Consultar a estrutura atual

Você pode perguntar pela estrutura sem alterá-la. A resposta considera o acesso de quem pergunta.

**Exemplos:**

- "Quais contratos o Vendas Sul tem acesso?"
- "Quais usuários existem no time Vendas Norte?"

### Desfazer uma ação

Na mesma sessão, você pode desfazer criações recentes de times e de usuários.

**Exemplo:** "Desfaz a criação do time X."

> ❗ O vínculo de um contrato não pode ser desfeito no **AI Sales Team Management**.

## O que o agente não faz

O **AI Sales Team Management** tem as seguintes limitações de escopo:

- **Dados do B2B Buyer Portal:** não acessa nem altera dados de compradores, contatos ou organizações do [**B2B Buyer Portal**](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). O agente usa contratos já existentes somente para vinculá-los a times.
- **Criação de contratos:** não cria contratos B2B novos.
- **Comunicações:** não envia emails nem outras mensagens.
- **Permissões:** não eleva permissões de usuário.
- **Histórico de auditoria:** não mostra histórico de auditoria. Para consultar esse histórico, use o [**Audit**](https://help.vtex.com/pt/docs/tutorials/audit).

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
