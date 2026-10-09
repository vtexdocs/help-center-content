---
title: 'AI Sales Team Management e carteira de clientes no VTEX Sales App'
createdAt: 2026-10-06T00:00:00.000Z
updatedAt: 2026-10-06T00:00:00.000Z
contentType: tutorial
productTeam: Physical Stores
slugEN: ai-sales-team-management-and-customer-portfolio-on-vtex-sales-app
locale: pt
---

> ℹ️ O **AI Sales Team Management** está em fase beta, o que significa que estamos trabalhando para aprimorá-lo. Atualmente, a disponibilidade é somente para contas selecionadas. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/pt/support).

O **AI Sales Team Management** é um agente de inteligência artificial que permite administrar [times, sales reps e carteiras de clientes](#conceitos) de quem usa o [VTEX Sales App](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes) por meio de uma experiência conversacional no Admin VTEX. Este artigo explica o funcionamento do agente e as ações que ele pode realizar para você em operações B2B.

> ⚠️ O **AI Sales Team Management** administra times e carteiras de clientes no [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). Para a gestão de vendedores de lojas físicas, veja o artigo [Gerenciar vendedores no VTEX Sales App](https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app).

## Pré-requisitos

Para usar o **AI Sales Team Management**, é necessário que a sua conta utilize o [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt) e tenha [contratos](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) previamente cadastrados.

## Conceitos

A tabela a seguir apresenta a terminologia utilizada no **AI Sales Team Management**:

| **Termo** | **Significado** |
| :---- | :---- |
| [Time](#realizar-acoes-em-times) | Agrupamento de pessoas que constitui a unidade da estrutura de vendas. Pode ser organizado de forma hierárquica com com times e subtimes, refletindo o organograma da organização comercial. |
| [Sales rep](#realizar-açoes-em-sales-reps) | Pessoa do time comercial registrada via agente. O sales rep precisa ser um [usuário](https://help.vtex.com/pt/docs/tutorials/gerenciar-usuarios-administrativos) da conta com o perfil [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person). O agente não cria perfis de acesso. |
| [Carteira de clientes](#realizar-açoes-em-carteiras-de-clientes) | Relação de vínculação de um contrato com um time ou subtime, o que permite aos sales reps visualizar e criar pedidos relacionados ao contrato. Saiba mais em [Acesso de times a contratos](#acesso-de-times-a-contratos). |
| [Contrato B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) | Contrato B2B, previamente cadastrado na conta, utilizado na criação de carteiras de clientes. |

## Casos de uso

O **AI Sales Team Management** interpreta o que você descreve e prepara a mudança na estrutura comercial para a sua confirmação. Veja alguns cenários comuns:

- **Montar o organograma de vendas:** crie times e subtimes na mesma lógica da operação, como regionais, cidades ou carteiras.
- **Cadastrar sales reps:** informe nome, email e time para incluir uma pessoa do time comercial na estrutura.
- **Definir a carteira de clientes:** vincule [Contratos B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) já existentes a um time, para limitar o que os sales reps daquele time acessam no **VTEX Sales App**.
- **Alterar vários registros de uma vez:** descreva a mudança na conversa ou envie um arquivo, revise o plano e confirme.

## Acessar o agente

No Admin VTEX, acesse **Apps > Sales Management > Sales Team**. A interface apresentada é composta por uma janela conversacional, como mostra a imagem a seguir:

![ai-sales-team-management-interface-pt](XXX)

Nessa página, você pode escrever a solicitação em linguagem natural ou anexar um arquivo `.xlsx`, `.csv` ou `.txt` para operações em massa.

## Regras do funcionamento

> ℹ️ Antes de criar, editar ou remover qualquer item, o agente apresenta um plano e espera a sua confirmação explícita. Nenhuma dessas ações é executada sem essa confirmação.

Além da confirmação do plano, o **AI Sales Team Management** opera a partir das seguintes regras:

- **Desambiguação de nomes:** se você pedir para criar o time "vendas sul" e já existir "VENDAS SUL", o agente pergunta o que você pretende, em vez de assumir.
- **Validação de perfis de acesso do storefront:** um pedido de perfil de acesso do Storefront que não existe, não é aplicado. Veja a lista completa em [Adicionar usuários à organização compradora](https://help.vtex.com/pt/docs/tutorials/adicionar-usuarios-a-organizacao-compradora).
- **Validação de contratos:** o agente não vincula um contrato que não está na conta.
- **Alerta de contrato compartilhado:** quando um contrato já está vinculado a outro time, o agente avisa, mas não impede o vínculo.
- **Respostas sem suposições:** quando o agente não sabe ou não tem acesso a uma informação, ele informa isso.
- **Controle de permissão a usuários:** cada usuário consulta informações restritas ao seu nível de acesso. Por exemplo, um sales rep não pode ver os contratos de outro time.

### Restrições de escopo

O **AI Sales Team Management** tem as seguintes restrições:

- ❌ Não acessa nem altera dados de compradores, contatos ou organizações do [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt).
- ❌ Não cria contratos B2B.
- ❌ Não envia emails ou outras mensagens.
- ❌ Não configura a permissões de acesso de usuários.
- ❌ Não mostra histórico de auditoria. Para consultar o histórico, use o [Audit](https://help.vtex.com/pt/docs/tutorials/audit).

## Gerenciar times, sales reps e carteiras de clientes

Com o **AI Sales Team Management** você pode:

- [Revisar e confirmar o plano](#revisar-e-confirmar-plano)
- [Realizar ações em times](#acoes-em-times)
- [Realizar ações em sales reps](#acoes-em-sales-reps)
- [Realizar ações em carteiras de clientes](#acoes-em-carteiras-de-clientes)
- [Realizar ações em massa em times, sales reps e carteiras de clientes](#acoes-em-massa-em-times-sales-reps-e-carteiras-de-clientes)
- [Vincular contrato a time](#vincular-contrato-a-time)

> ℹ️ Os exemplos de instrução apresentados nas seções são ilustrativos e não a única forma de realizar uma ação no **AI Sales Team Management**.

As ações só podem ser executadas por usuários com [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) adequado. No caso de sales reps, o perfil é o [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person).

### Revisar e confirmar o plano

Antes que você crie, edite ou remova um item via arquivo ou de forma conversacional, o agente apresenta um plano do que será executado e só realiza as mudanças após a sua revisão e confirmação.

Caso exista algum erro ou inconsistência nas informações recebidas, o agente apresenta as mensagens de erro e uma tela de validação com o plano doque será feito. Para arquivos anexados, o agente processa o conteúdo inteiro e separa as linhas válidas das inválidas (quando existe erro). Ou seja, o processamento parcial das informações é o comportamento esperado: as linhas válidas seguem o plano e inválidas são rejeitadas e informadas sobre o motivo.

### Realizar ações em times

O time é a unidade da estrutura de vendas no **Sales App** no contexto [B2B](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). Você pode configurar uma estrutura hierarquizada com times pai e subtimes, de forma a refletir o organograma da organização comercial.

A tabela a seguir apresenta as ações que você pode realizar em times:

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Criar time | Nome do time. Caso esteja criando um subtime, informe também o nome do time pai. | "Crie o time Vendas Sul" / "Crie o subtime Contagem dentro do time Nordeste" / "Crie meus times de vendas: Time Sul, Time Norte, Time Nordeste." |
| Criar subtimes por sales rep | Anexe um arquivo `.xlsx`, `.csv` ou `.txt` com os dados dos sales reps e o time de destino. | "Crie subtimes baseados na carteira de cada sales rep." / "Quero criar subtimes baseados na carteira de cada sales rep." |
| Editar nome time | Nome do time e as informações a serem alteradas. | "Edite o time Vendas Sul para Vendas Sudeste" |
| Mover time | Nomes do time a ser movido e do time de destino. | "Mova o time Vendas Sul para dentro do time Nordeste" / " |
| Visualizar contratos ou integrantes do time | Identificação do contrato ou do time. | "Quais contratos o Vendas Sul tem acesso?" / "Quais usuários existem no time Vendas Norte?" / "Quem são os sales reps do Time Sul?" |
| Desfazer criação recente de times | Na mesma sessão, você pode desfazer times recém criados. Para isso, informe o time. | "Desfaça a criação do time" / "Cancele a criação do Time Sul" |
| Remover time | Nome do time. | "Remova o time Vendas Sul" / "Delete o subtime Vendas Sudeste" |

> ⚠️ Após transformar um time pai em um subtime, não é mais possível devolvê-lo ao nível raiz. Portanto, antes de criar os times, defina a hierarquia.

### Realizar ações em sales reps

Os integrantes do time são cadastrados pelo **AI Sales Team Management** e chamados de sales reps. Para poder acessar o Admin VTEX, esses usuários precisam ter o perfil [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person). O agente não cria [perfis de acesso](https://help.vtex.com/pt/docs/tutorials/criar-perfil-de-acesso).

A tabela a seguir apresenta as ações que você pode realizar em sales reps:

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Registrar um sales rep | Nome do sales rep, email e time. O código do vendedor e da loja, quando aplicáveis, são opcionais. | "Registre o sales rep José Almeida, `jose@acme.com` no time Nordeste" / "Crie o sales rep Ricardo Alves, `ricardo.alves@empresa.com` código 204 e loja 578 no Vendas Norte" |
| Adicionar sales rep ao time | Nome do sales rep, email e time. | "Adicione o sales rep Ricardo Alves no time Vendas Norte, e-mail `ricardo.alves@empresa.com`." |
| Visualizar informações do sales resp | Nome do sales rep. | "O Ricardo Alves pertence a quais times?" / "O sales rep José Almeida atende quais contratos?" |
| Mover sales rep entre times | Nome do sales rep e do time de destino. | "Movimente o sales rep José Almeida para o time Sudeste" / "Mova José Almeida para time Nordeste." |
| Editar informações do sales rep | Você pode editar o nome ou email do sales rep, para isso forneça a nova informação. | "Edite o email do sales rep José Almeida para `jose.vendedor@acme.com`" / "Atualize o sales rep Ricardo Alves, código 204 e loja 578 no Vendas Norte" |
| Desfazer criações recentes de sales rep | Na mesma sessão, você pode desfazer criações recentes. Para isso, informe o nome do sales rep e a ação a ser desfeita. | "Desfaça a criação do sales rep Ricardo Alves" / "Desconsidere a criação do sales rep José Almeida" |
| Remover sales rep do time | Nome do sales rep. Remover um sales rep de um time apenas desvincula a pessoa do time, mas ela permance como usuário da conta. | "Remova o sales rep José Almeida do time Vendas Sul." |

> ℹ️ Quando você cria, edita ou remove mais de um sales rep em uma mesma ação, seja via arquivo ou conversacional, caso exista algum erro, o agente apresenta as mensagens de erro e um canvas de validação com o que será feito. É necessário que você revise e confirme esse resumo para que a ação seja executada.

### Realizar ações em carteiras de clientes

A carteira de clientes representa os contratos para os quais um time ou subtime pode visualizar cotações e criar pedidos. Para que a carteira seja atendida por um único sales rep, crie um subtime com essa pessoa como único integrante.

A tabela a seguir apresenta as ações que você pode realizar em carteiras de clientes:

> ⚠️ A carteira de clientes não pode ser desfeita pelo agente.

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Definir carteiras de clientes do time | Identificação do contrato e o nome do time. A agente permite que um mesmo contrato seja vinculado a mais de um time, mas ele emite um aviso quando identifica esse tipo de situação. | "Vincule os contratos da planilha ao time Vendas Sul" / "Segue a planilha com a carteira de clientes por time." |
| Vincular contrato a múltiplos times | Nome do contrato e nomes dos times. Você também pode fazer essa [ação em massa](#realizar-acoes-em-massa) por meio da importação de arquivos. | "Vincule o contrato 1395 ao Time Sul, Time Norte, Time Nordeste" / Crie carteiras de cliente para o Time Norte para o contrato 1395" |
| Visualizar carteiras de clientes | Identificação do time. | "O Time Norte atende quais carteiras?" / "A quais contratos o Vendas Sul foi vinculado?" |

Para saber como controlar o nível de permissão de times a contratos, veja a seção a seguir.

#### Acesso de times a contratos

Vincular um contrato a um time define a carteira daquele time e muda o que o sales rep visualiza no **Sales App**.

- **Contratos vinculados a times:** os sales reps visualizam no **Sales App** apenas as cotações e pedidos referentes aos contratos vinculados. A criação de novos pedidos também fica restrita a esses contratos.
  - Exemplo: o "Time Sul" está vinculado aos contratos `100` e `200`, portanto, os sales reps desse time podem visualizar e criar pedidos somente para esses dois contratos.
- **Contratos sem vinculação a times:** os sales reps visualizam todos os contratos da conta.
  - Exemplo: o "Time Norte" não está vinculado a um contrato, portanto, os sales reps desse time podem visualizar e criar pedidos para todos os contratos da conta.

> ⚠️ Recomendamos que você confirme os vínculos contratuais antes de definir restrições ao time de vendas.

### Realizar ações em massa em times, sales reps e carteiras de clientes

O **AI Sales Team Management** permite que você realize ações em massa por meio da importação de arquivos no formato `.xlsx`, `.csv` ou `.txt`. Isso se aplica aos seguintes cenários:

- **Times:** criar, mover, editar ou remover times.
- **Sales reps:** registrar, adicionar, mover, editar ou remover sales reps.
- **Carteiras de clientes:** definir carteiras ou vincular contrato a múltiplos times.

Exemplos de instrução:

- "Processe a planilha de criação de sales reps"
- "Vincule os contratos com os times indicados no arquivo"
- "Mova os sales reps de acordo com o documento" |
