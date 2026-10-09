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

O **AI Sales Team Management** é um agente de inteligência artificial que permite administrar [times, sales reps e carteiras de clientes](#conceitos) de quem usa o [VTEX Sales App](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes) por meio de uma experiência conversacional no Admin VTEX. Este artigo explica o funcionamento do agente e apresenta as ações que você pode realizar com o agente no contexto de operações B2B.

> ⚠️ O **AI Sales Team Management** administra times e carteiras de clientes no contexto do [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). Para a gestão de vendedores de lojas físicas, veja o artigo [Gerenciar vendedores no VTEX Sales App](https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app).

## Pré-requisitos

Para usar o **AI Sales Team Management**, é necessário que a conta utilize o [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt) e tenha [contratos](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) cadastrados.

## Conceitos

A tabela a seguir apresenta a terminologia utilizada no **AI Sales Team Management**:

| **Termo** | **Significado** |
| :---- | :---- |
| **Time** | Unidade da estrutura de vendas. Um time pode ficar hierarquicamente abaixo de outro, como time pai e subtime, para representar o organograma real. |
| **Sales rep** | Pessoa do time comercial cadastrada via agente. O perfil do Licence Manager disponível para sales reps é [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person). O **AI Sales Team Management** não cria perfis de acesso. |
| **Carteira de clientes** | Relação de vínculação entre contratos e times ou subtimes. É possível vincular um contrato a um único sales rep utilizando um subtime. |
| **Contrato** | [Contrato B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) já existente, usado para o vínculo com um time. |

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
- [Realizar ações comuns a times, sales reps e carteiras de clientes](#acoes-comuns-a-times-sales-reps-e-carteiras-de-clientes)
- [Vincular contrato a time](#vincular-contrato-a-time)

> ℹ️ Os exemplos de instrução apresentados nas seções são ilustrativos e não a única forma de realizar uma ação no **AI Sales Team Management**.

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
| Vincular contrato ao time | Nome do time e identificação do contrato. | "Associe o contrato 4521 ao time Vendas Sul" / "Vincule o contrato 1395 ao Time Sul, Time Norte, Time Nordeste" |
| Ver contratos do time | Nome do time. | "Quais contratos o Vendas Sul tem acesso?" / "O Time Norte tem quais contratos?" |
| Ver integrantes do time | Nome do time. | "Quais usuários existem no time Vendas Norte?" / "Quem são os sales reps do Time Sul?" |

> ⚠️ Após transformar um time pai em um subtime, não é mais possível devolvê-lo ao nível raiz. Portanto, antes de criar os times, defina a hierarquia.

### Realizar ações em sales reps

Os integrantes do time são cadastrados pelo **AI Sales Team Management** e chamados de sales reps. Para poder acessar o Admin VTEX, esses usuários precisam ter o perfil [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person). O agente não cria [perfis de acesso](https://help.vtex.com/pt/docs/tutorials/criar-perfil-de-acesso).

A tabela a seguir apresenta as ações que você pode realizar em sales reps:

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Registrar um sales rep | Nome do sales rep, email e time. O código do vendedor e da loja, quando aplicáveis, são opcionais. | "Registre o sales rep José Almeida, `jose@acme.com` no time Nordeste" / "Crie o sales rep Ricardo Alves, `ricardo.alves@empresa.com` código 204 e loja 578 no Vendas Norte" |
| Adicionar sales rep ao time | Nome do sales rep, email e time. | "Adicione o sales rep Ricardo Alves no time Vendas Norte, e-mail `ricardo.alves@empresa.com`." |
| Mover sales rep entre times | Nome do sales rep e do time de destino. | "Movimente o sales rep José Almeida para o time Sudeste" / "Mova José Almeida para time Nordeste." |
| Remover sales rep do time | Nome do sales rep. Remover um sales rep de um time apenas desvincula a pessoa do time, mas ela permance como usuário da conta. | "Remova o sales rep José Almeida do time Vendas Sul." |

> ℹ️ Quando você cria, edita ou remove mais de um sales rep em uma mesma ação, seja via arquivo ou conversacional, caso exista algum erro, o agente apresenta as mensagens de erro e um canvas de validação com o que será feito. É necessário que você revise e confirme esse resumo para que a ação seja executada.

### Realizar ações em carteiras de clientes

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Definir carteiras de clientes | Nome do time e identificação do contrato. Antes de realizar esta ação, confira as regras da [vinculação entre contratos e times](#vinculacao-entre-contratos-e-times). | "Associe o contrato 4521 ao time Vendas Sul" / "Vincule o contrato 1395 ao Time Sul, Time Norte, Time Nordeste" |
| Vincular a carteira por arquivo | Anexe um arquivo `.xlsx`, `.csv` ou `.txt` com os dados da carteira e time de correspondência. | "Segue a planilha com a carteira de clientes por time." / "Vincule os contratos da planilha ao time Vendas Sul" |

> ℹ️ Não existe carteira individual fora de um subtime. Para um sales rep ter uma carteira exclusiva, crie um subtime apenas para essa pessoa e vincule os contratos ao subtime.

### Realizar ações comuns a times, sales reps e carteiras de clientes

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Consultar a estrutura atual | Identificação do item a ser consultado. A resposta considera o nível de permissão do usuário às informações buscadas. | "Quais times existem na conta?" / "Quais contratos o Vendas Sul tem acesso?" / "Quais usuários existem no time Vendas Norte?" |
| Desfazer criações recentes de times e sales rep | Na mesma sessão, você pode desfazer criações recentes. Para isso, informe o item e a ação a ser desfeita. A criação de vínculos de contrato não pode ser desfeita pelo agente. | "Desfaça a criação do time Sul" / "Cancele a criação do sales rep José Almeida" / "Desfaça a definição da carteira de clientes do time Vendas Sul" |
| Realizar ações em massa | Anexe um arquivo `.xlsx`, `.csv` ou `.txt` com os dados a serem alterados e descreva a ação desejada. | "Processe a planilha de sales reps" / "Segue a planilha com a carteira de clientes por time" / "Mova os sales reps conforme os times da planilha" |

## Vincular contrato a time

Vincular um contrato a um time define a carteira daquele time e muda o que o sales rep visualiza no **Sales App**.

- **Contratos vinculados a times:** o **Sales App** mostra apenas as cotações e os pedidos daqueles contratos e a criação de pedidos fica restrita aos sales reps desse time.
  - Exemplo: o "Time Sul" está vinculado aos contratos `100` e `200`. Portanto, os sales reps visualizam e criam pedidos somente para esses dois contratos.
- **Contratos sem vinculação a times:** os sales reps visualizam todos os contratos da conta.
  - Exemplo: o "Time Norte" não está vinculado a um contrato, portanto os sales reps desse time visualizam e criam pedidos para todos os contratos da conta.

> ⚠️ Recomendamos que você confirme os vínculos contratuais antes de definir restrições ao time de vendas.

### Vincular contrato a múltiplos times

Um mesmo contrato pode ser vinculado a mais de um time. O **AI Sales Team Management** avisa quando detecta essa situação, mas não impede o vínculo.

**Exemplo:** o contrato `100` está vinculado aos "Time Sul" e "Time Sudeste". Portanto, os sales reps de ambos os times podem visualizar esse contrato.
