---
title: 'Sales Operations Agent e carteira de clientes no VTEX Sales App'
createdAt: 2026-10-16T00:00:00.000Z
updatedAt: 2026-10-16T00:00:00.000Z
contentType: tutorial
productTeam: Physical Stores
slugEN: sales-operations-agent-and-customer-portfolio-on-vtex-sales-app
locale: pt
---

> ℹ️ O **Sales Operations Agent** está em fase beta, o que significa que estamos trabalhando para aprimorá-lo. Atualmente, a disponibilidade é somente para contas selecionadas utilizando o **Sales App B2B**. Em caso de dúvidas, entre em contato com nosso [Suporte](https://help.vtex.com/support).

O **Sales Operations Agent** é um agente de inteligência artificial do [VTEX Sales App](https://help.vtex.com/pt/docs/tracks/vtex-sales-app-primeiros-passos-e-configuracoes) que permite administrar [times de vendas, sales reps e carteiras de clientes](#conceitos) por meio de uma experiência conversacional. Este artigo explica o funcionamento do agente no Admin VTEX e quais ações ele pode realizar para você em operações B2B.

> ⚠️ O **Sales Operations Agent** permite administrar times e carteiras de clientes do [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). Para a gestão de vendedores de lojas físicas, veja o artigo [Gerenciar vendedores no VTEX Sales App](https://help.vtex.com/pt/docs/tracks/gerenciar-vendedores-no-vtex-sales-app).

## Pré-requisitos

É necessário que a sua conta utilize o [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt). Se você trabalha com times de vendas que atendem carteiras de clientes, é necessário que já tenha um [contrato B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) cadastrado.

## Conceitos

A tabela a seguir apresenta a terminologia utilizada no **Sales Operations Agent**:

| **Termo** | **Significado** |
| :---- | :---- |
| [Time](#realizar-acoes-em-times) | Unidade da estrutura de vendas. Pode ser organizado de forma hierárquica com times e subtimes, refletindo o organograma da organização comercial. |
| [Sales rep](#realizar-acoes-em-sales-reps) | Pessoa do time comercial registrada via agente e com [perfil de acesso](#permissoes-de-acesso-de-sales-reps) restrito. |
| [Carteira de clientes](#realizar-acoes-em-carteiras-de-clientes) | Vínculo entre um contrato e um time ou subtime, que permite aos sales reps visualizar e criar pedidos relacionados ao contrato. Saiba mais em [Acesso de times a contratos](#acesso-de-times-a-contratos). |
| [Contrato B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) | [Contrato](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) previamente cadastrado na conta, utilizado na criação de carteiras de clientes. |

## Permissões de acesso

Para usar o agente, o [perfil de acesso](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso) do usuário precisa ter os [recursos do License Manager](https://help.vtex.com/pt/docs/tutorials/recursos-do-license-manager) correspondentes às ações a serem executadas.

> ℹ️ O agente não cria perfis de acesso.

A tabela a seguir lista quais recursos são necessários para cada ação:

| Produto | Categoria | Recurso | Operações permitidas |
| :--- | :--- | :--- | :--- |
| Organization Units | units | **View Organization Unit** | Listar times e visualizar detalhes, integrantes e contratos vinculados. |
| Organization Units | units | **Edit Organization Unit** | Criar, renomear, mover e desativar times, adicionar e remover usuários e vincular contratos. |
| Organization Units | units | **Move Organization Unit** | Transformar um time pai em subtime ou mover um subtime na hierarquia. |
| License Manager | Services access control | **Edit Admin Users** | Criar, editar ou remover usuários ou chaves de aplicação. |
| License Manager | Services access control | **View Admin Users** | Listar todos os usuários da conta. |
| Dynamic Storage | Dynamic storage generic resources | **Read only documents** | Ler documentos. |
| Dynamic Storage | Dynamic storage generic resources | **Insert or update document (not remove)** | Criar e atualizar documentos, mas não removê-los. |

> ℹ️ Se o usuário precisar apenas consultar informações, o recurso **Read only documents** do Dynamic Storage é suficiente.

Para conceder o acesso mínimo necessário, recomendamos [criar um perfil de acesso](https://help.vtex.com/pt/docs/tutorials/criar-perfil-de-acesso) personalizado apenas com os recursos listados acima. O agente não cria [perfis de acesso](https://help.vtex.com/pt/docs/tutorials/criar-perfil-de-acesso).

### Permissões de acesso de sales reps

Ao criar um sales rep, o agente automaticamente atribui a ele o perfil de acesso [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person). Não é possível atribuir outro perfil a sales reps.

O perfil [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person) permite aos usuários acesso ao **Sales App** para visualizar e criar pedidos em nome de clientes.

## Casos de uso

O **Sales Operations Agent** interpreta a sua instrução, prepara e apresenta o plano de mudança na estrutura comercial e só executa a ação após sua revisão e confirmação. Veja alguns casos de uso:

- **Montar organograma de vendas:** criar times e subtimes seguindo a mesma lógica da operação, como estruturas por regiões, cidades ou carteiras de clientes.
- **Registrar representantes de vendas:** cadastrar membros da equipe comercial na estrutura de vendas, associando cada pessoa ao time desejado.
- **Controlar carteiras de clientes:** vincular [contratos B2B](https://help.vtex.com/pt/docs/tutorials/contratos-b2b-pt) a um time ou subtime para definir a quais contratos os sales reps terão acesso pelo **Sales App**.
- **Alterar diversos registros simultaneamente:** modificar diversos registros ao mesmo tempo, seja de forma inteiramente conversacional ou com a importação de arquivos `.xlsx`, `.csv`, `.txt` ou `.json`.

## Acessar o agente

Para abrir o **Sales Operations Agent**, no Admin VTEX, acesse **Aplicativos > Gestão de Vendas > Agente de Equipe**. A interface apresentada é composta por uma janela conversacional, como mostra a imagem a seguir:

![sales-operations-agent-interface-pt](XXX)

A tela apresenta algumas sugestões para começar. Ao clicar em uma delas ou digitar uma instrução no chat e clicar em **Enviar**, o agente dará início ao atendimento.

> ℹ️ Para conhecer as ações executadas pelo agente, confira a seção [Gerenciar times, sales reps e carteiras de clientes](#gerenciar-times-sales-reps-e-carteiras-de-clientes).

O **Sales Operations Agent** pode realizar solicitações de forma inteiramente conversacional ou fazer [alterações em massa](#realizar-acoes-em-massa-em-times-sales-reps-e-carteiras-de-clientes) por meio da importação de arquivos, como será visto adiante.

## Regras de funcionamento

O agente só executa ações após apresentar um plano e obter a sua [confirmação](#revisao-e-confirmacao-do-plano). As regras de funcionamento são:

- **Respostas sem suposições:** quando não dispõe de uma informação ou não tem permissão para acessá-la, o agente comunica essa limitação.
- **Desambiguação de nomes:** quando identifica nomes semelhantes ou duplicados, o agente solicita esclarecimentos antes de montar o plano. Por exemplo, se você solicitar a criação de um time chamado "vendas sul" e já existir um "VENDAS SUL", isso será comunicado pelo agente.
- **Validação e controle de usuários:** cada [usuário](https://help.vtex.com/pt/docs/tutorials/gerenciar-usuarios-administrativos) pode consultar apenas as informações [permitidas pelos recursos do perfil](#permissoes-de-acesso).
- **Validação de contratos:** o agente permite vincular apenas contratos B2B previamente cadastrados na conta.
- **Alerta de contrato compartilhado:** se um contrato já estiver vinculado a outro time, o agente informa essa condição, mas permite realizar o vínculo.
- **Mensagens de erro:** caso sejam identificados erros ou inconsistências, o agente informa os motivos e apresenta o plano de execução parcial com os dados válidos para você [revisar e confirmar](#revisao-e-confirmacao-do-plano).

### Restrições de escopo

O **Sales Operations Agent** tem as seguintes restrições:

- ❌ Não acessa nem altera dados de compradores, contatos ou organizações do [B2B Buyer Portal](https://help.vtex.com/pt/docs/tutorials/b2b-buyer-portal-pt).
- ❌ Não cria contratos B2B.
- ❌ Não envia emails ou outras mensagens.
- ❌ Não configura permissões de acesso de usuários. A única exceção é o perfil [inStore Sales Person](https://help.vtex.com/pt/docs/tutorials/perfis-de-acesso-predefinidos#instore-sales-person), atribuído por padrão na criação de sales reps.
- ❌ Não mostra histórico de auditoria. Para consultar o histórico, use o [Audit](https://help.vtex.com/pt/docs/tutorials/audit).

### Revisão e confirmação do plano

Antes que você crie, edite ou remova um item de forma conversacional ou por meio da importação de arquivos, o agente apresenta um plano do que será executado e só realiza as mudanças após a sua revisão e confirmação.

Caso exista algum erro ou inconsistência nas informações recebidas, o agente mostra as mensagens de erro e apresenta uma tela de validação com o plano do que será feito. Para arquivos importados, o agente processa o conteúdo inteiro e separa as linhas válidas das inválidas (quando existe erro): as linhas válidas seguem o plano e as inválidas são rejeitadas com a indicação do motivo.

## Gerenciar times, sales reps e carteiras de clientes

Com o **Sales Operations Agent** você pode:

- [Realizar ações em sales reps](#realizar-acoes-em-sales-reps)
- [Realizar ações em times](#realizar-acoes-em-times)
- [Realizar ações em carteiras de clientes](#realizar-acoes-em-carteiras-de-clientes)
- [Realizar ações em massa em times, sales reps e carteiras de clientes](#realizar-acoes-em-massa-em-times-sales-reps-e-carteiras-de-clientes)

As ações são executadas somente após a [confirmação do plano](#revisao-e-confirmacao-do-plano) por um usuário com as [permissões de acesso](#permissoes-de-acesso) necessárias.

> ⚠️ Os exemplos de instrução apresentados nas seções são ilustrativos e não são a única forma de o agente entender e executar uma ação.

### Realizar ações em sales reps

Os integrantes do time cadastrados pelo **Sales Operations Agent** são chamados de sales reps. A tabela a seguir apresenta as ações que você pode realizar em sales reps:

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Criar sales rep | Nome do sales rep + email + nome ou ID do time. O código do vendedor e da loja são opcionais. Saiba mais sobre as restrições desse usuário em [Permissões de acesso de sales reps](#permissoes-de-acesso-de-sales-reps). | "Crie José Almeida `jose@acme.com` no time Nordeste" ou "Registre Ricardo Alves `ricardo.alves@empresa.com` código 204 e loja 573 no Vendas Norte" |
| Adicionar sales rep ao time | Nome, ID ou email do sales rep + nome ou ID do time. | "Adicione Ricardo Alves no time Vendas Norte" ou "Inclua `jose.vendedor@acme.com` no Vendas Sul" |
| Buscar ou visualizar informações do sales rep | Nome, ID ou email do sales rep. | "Ricardo Alves pertence a quais times?" ou "`jose@acme.com` atende quais contratos?" |
| Mover sales rep entre times | Nome, ID ou email do sales rep + nome ou ID do time de destino. | "Movimente José Almeida para o time Sudeste" ou "Mova ID 7329 para o time Nordeste" |
| Desfazer criação recente de sales rep | Você pode desfazer criações recentes, desde que esteja na mesma sessão. Para isso, informe o nome, ID ou email do sales rep e a ação a ser desfeita. | "Desfaça a criação do sales rep Ricardo Alves" ou "Desconsidere a criação de José Almeida" |
| Remover sales rep do time | Nome, ID ou email do sales rep. Remover um sales rep de um time apenas desvincula a pessoa do time, mas ela permanece como [usuário](#permissoes-de-acesso-de-sales-reps) da conta. | "Remova o José Almeida do Vendas Sul" |

> ℹ️ Quando você cria, adiciona ou remove mais de um sales rep em uma mesma ação, seja via arquivo ou de forma conversacional, caso exista algum erro, o agente apresenta as mensagens de erro e uma tela de validação com o que será feito. É necessário que você revise e confirme esse resumo para que a ação seja executada.

### Realizar ações em times

O time é a unidade da estrutura de vendas no contexto do **Sales Operations Agent**. Você pode organizar os times de forma hierárquica, com times pai e subtimes.

> ⚠️ Após transformar um time pai em um subtime, não é mais possível devolvê-lo ao nível raiz. Portanto, antes de criar os times, recomendamos que você defina uma hierarquia que reflita o organograma da organização comercial.

A tabela a seguir apresenta as ações que você pode realizar em times:

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Criar time | Nome do time. Caso esteja criando um subtime, informe também o nome do time pai. | "Crie o time Vendas Sul" ou "Crie o subtime Contagem dentro do time Nordeste" ou "Crie meus times de vendas: Time Sul, Time Norte, Time Nordeste." |
| Criar subtimes por sales rep | Anexe um arquivo `.xlsx`, `.csv`, `.txt` ou `.json` com os dados dos sales reps e o time de destino. | "Crie subtimes baseados na carteira de cada sales rep" ou "Quero criar subtimes baseados na carteira de cada sales rep" |
| Editar nome do time | Nome atual do time e o novo nome. | "Edite o time Vendas Sul para Vendas Sudeste" ou "Mude o nome Vendas Sudeste para Vendas Sudeste Principal" |
| Mover time | Nomes do time a ser movido e do time de destino. | "Mova o time Vendas Sul para dentro do time Nordeste" ou "Coloque o time Vendas Sul sob o time Vendas Nordeste" |
| Visualizar detalhes do time | Nome ou ID do time + informações que deseja visualizar (sales reps, contratos vinculados ou subtimes). | "A quais contratos o Vendas Sul tem acesso?" ou "Quais sales reps existem no time Vendas Norte?" |
| Listar times | Apenas o comando. | "Liste os times" ou "Mostre todos os times" |
| Desfazer criação recente de times | Na mesma sessão, você pode desfazer times recém-criados. Para isso, informe o nome ou ID do time e a ação a ser desfeita. | "Desfaça a criação do Vendas Sul" ou "Cancele o novo time 8934" |
| Desativar time | Nome ou ID do time. | "Desative o time Vendas Sul" ou "Remova o subtime Vendas Sudeste" |

### Realizar ações em carteiras de clientes

A carteira de clientes representa os contratos aos quais o time ou subtime tem acesso para visualizar cotações e criar pedidos. Para que uma carteira seja atendida por um único sales rep, crie um subtime com ele como único integrante.

A tabela a seguir apresenta as ações que você pode realizar sobre as carteiras de clientes:

| **Ação** | **Informações necessárias** | **Exemplos de instrução** |
| :--- | :--- | :--- |
| Vincular contrato a um ou mais times | Nome ou ID do contrato + nome ou ID de um ou mais times. Você também pode fazer essa [ação em massa](#realizar-acoes-em-massa-em-times-sales-reps-e-carteiras-de-clientes) por meio da importação de arquivos. | "Vincule o contrato `9eea9b43-c83c-42e9-86a8-fbef4ed228d5` ao Time Sul, Time Norte e Time Nordeste" ou "Crie a carteira de clientes do Time Norte com o contrato Empresa AG" |
| Visualizar carteiras de clientes | Nome ou ID do time ou do contrato. | "O Time Norte atende quais carteiras?" ou "A quais contratos o Vendas Sul foi vinculado?" |
| Remover contrato de uma carteira | Nome ou ID do contrato + nome ou ID do time. | "Remova o contrato `9eea9b43-c83c-42e9-86a8-fbef4ed228d5` da carteira do Time Sul" ou "Remova o contrato Empresa AG da carteira do Time Norte" |

> ⚠️ Por padrão, quando você não vincula um contrato a um time ou subtime, os sales reps podem visualizar e criar pedidos para todos os contratos da conta. Portanto, se você não pretende utilizar carteiras de clientes de forma segmentada, recomendamos não vincular contratos a times. Desta forma, toda a sua lista de clientes será disponibilizada no **Sales App**.

#### Acesso de times a contratos

Vincular um contrato a um time define a carteira de clientes daquele time e muda o que o sales rep visualiza no **Sales App**.

- **Times com contratos vinculados:** os sales reps visualizam no **Sales App** apenas as cotações e pedidos referentes aos contratos vinculados. A criação de novos pedidos também fica restrita a esses contratos.
  - Exemplo: o Time Sul está vinculado aos contratos A e B, portanto, os sales reps desse time podem visualizar e criar pedidos somente para esses dois contratos.
- **Times sem contratos vinculados:** os sales reps visualizam todos os contratos da conta.
  - Exemplo: o Time Norte não está vinculado a nenhum contrato, portanto, os sales reps podem visualizar e criar pedidos para todos os contratos da conta.

> ⚠️ Recomendamos que você confirme os vínculos contratuais antes de definir restrições ao time de vendas.

### Realizar ações em massa em times, sales reps e carteiras de clientes

O **Sales Operations Agent** permite que você realize ações em massa por meio da importação de arquivos nos formatos `.xlsx`, `.csv`, `.txt` ou `.json`. Isso se aplica aos seguintes cenários:

- **Times:** criar, mover, editar ou desativar times (desativação apenas para times vazios) e criar subtimes a partir dos sales reps.
- **Sales reps:** criar, adicionar ou remover sales reps de times.
- **Carteiras de clientes:** vincular contratos a um ou mais times.

Exemplos de instrução:

- "Crie 5 novos times regionais conforme o arquivo"
- "Vincule os contratos com os times indicados na planilha"
- "Adicione todos os sales reps da planilha aos times indicados"
