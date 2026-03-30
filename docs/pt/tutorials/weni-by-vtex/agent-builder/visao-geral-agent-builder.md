---
title: 'Agent Builder - Visão geral'
id: 6t9oYS7E2AJH9c2AYReUrs
status: PUBLISHED
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-03-24T16:21:28.723Z
publishedAt: 2025-09-08T16:21:28.723Z
firstPublishedAt: 2025-07-29T16:45:36.827Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: agent-builder-overview
legacySlug: visao-geral-agent-builder
locale: pt
subcategoryId: 3TASbcSqDuDZwmgDLc0O5I
order: 1
---

O **Agent Builder** é uma ferramenta de conversação com o cliente baseada em inteligência artificial. Usando essa funcionalidade, você pode customizar agentes para interagir com seus clientes, permitindo que eles solicitem informações sobre um pedido em andamento, o catálogo da sua loja e o cancelamento de um pedido, por exemplo.

A funcionalidade se concentra em um agente orquestrador (ou manager), que é o ponto de contato com o cliente e assume o controle do chat. Esse orquestrador aciona agentes colaboradores que retornam dados e informações conforme as necessidades do usuário.

> ℹ️ Para saber mais sobre os agentes colaboradores, leia o artigo [Agentes oficiais da VTEX Agentic CX Platform](/pt/docs/tutorials/agentes-oficiais-da-weni-by-vtex).

Além de atribuir e testar esses agentes, você também pode criar agentes próprios que atendam a necessidades específicas da sua empresa.

> ⚠️ Para criar agentes customizados, use o CLI da Weni by VTEX. Confira a [documentação](https://weni-ai.github.io/weni-cli/getting-started/installation/) para criar seu próprio agente.

## Agent Builder

Para acessar o **Agent Builder**, selecione a Organização na página inicial da Weni by VTEX e, em seguida, o projeto que deseja gerenciar.

Em **Agent Builder**, as seguintes páginas estão disponíveis:

- [**Meus agentes**](#meus-agentes)
- [**Base de conhecimento**](#base-de-conhecimento)
- [**Fluxo de automação**](#fluxo-de-automação)

### Meus agentes

Nessa página, você pode atribuir e testar agentes para a sua loja, editar o manager e editar as instruções que esse manager deve seguir.

Para entender como atribuir agentes, leia o artigo [Atribuir e testar um agente](/pt/docs/tutorials/atribuir-e-testar-agentes).

#### Editar manager

Essa página contém duas abas:

- [Perfil](#perfil)
- [Configurações](#configurações)

##### Perfil

Nessa aba, você encontra campos customizáveis para personalizar a identidade e o comportamento do seu agente orquestrador.

Para customizar o seu agente, preencha os campos a seguir:

- **Qual nome o agente usa para se apresentar?:** nome do agente que será exibido aos clientes.
- **Qual é a função principal do agente?:** função principal do agente para os usuários entenderem a sua especialidade (por exemplo: atendente).
- **Qual é o objetivo principal do agente?:** objetivo principal do agente (por exemplo: ajudar a tirar dúvidas).
- **Qual é o tom de voz do agente?:** tom de voz que o agente vai usar para se comunicar com os usuários. Selecione um dos tons de voz predefinidos.

Leia a seguir a descrição detalhada de cada tom de voz:

| Tom de voz do agente | Descrição |
| --- | :--- |
| Amigável | Interage de forma calorosa e acolhedora, fazendo o cliente se sentir confortável e bem-vindo, estabelecendo uma conexão com empatia e compreensão. |
| Sistemático | Com um método claro e bem estruturado, segue passos definidos para resolver problemas. Usa uma abordagem lógica e ordenada, com consistência e precisão na comunicação e no suporte ao cliente. |
| Analítico | Garante que todas as informações estejam dispostas de forma clara e acessível. Ele é lógico e objetivo, guiando o cliente por cada etapa de maneira metodológica, para que nenhum detalhe seja perdido. |
| Criativo | Utiliza a imaginação para se comunicar, priorizando soluções originais. Ele é capaz de oferecer respostas diferenciadas e adaptar a linguagem para tornar o conteúdo mais relevante e cativante para o cliente. |
| Informal | É leve, energético e informal. Mantém um tom mais acessível e humano. |

##### Configurações

Em **Manager**, você pode selecionar o manager do seu agente orquestrador. Oferecemos duas opções:

- Manager 2.6.
- Vertex Manager.

Em **Prévia dos agentes**, há dois botões de alternância:

- **Feedback progressivo dos agentes:** ative-o <i class="fas fa-toggle-on" aria-hidden="true"></i> se quiser que o agente envie atualizações em tempo real ao usuário enquanto redige a resposta final. Caso contrário, deixe-o desativado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Formato de mensagem múltipla:** ative-o <i class="fas fa-toggle-on" aria-hidden="true"></i> se quiser que o agente envie várias mensagens, como respostas rápidas, listas, catálogo. Caso contrário, deixe-o desativado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

#### Editar instruções

Em **Instruções**, você pode adicionar instruções diretas para determinar como seu agente se comporta.

##### Validação por IA

Você pode passar todas as instruções pela validação por IA. A IA vai analisar a instrução e . Além disso, você também pode pedir uma sugestão para a IA, que vai analisar a instrução e editá-la conforme achar necessário.

Para validar a instrução por IA, siga os passos a seguir:

1. Ative o botão <i class="fas fa-toggle-on" aria-hidden="true"></i> **Validar instrução por IA**.
2. Digite sua instrução e clique em `Validar instrução`.
3. 
4. Ao final, clique em `Publicar`.

Se não quiser passar a instrução por validação da IA, desative a opção **Validar instrução por IA**. Após digitar sua instrução personalizada, clique em `Publicar instrução`.

Se você adicionou uma instrução e deseja removê-la ou editá-la, clique no botão de <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado da instrução. Para remover, clique em `Remover instrução` e, em seguida, em `Remover`. Para editá-la, clique em `Editar instruções` e em seguida, ao terminar, clique em `Salvar`.

> ℹ️ Não há um limite para a quantidade de instruções.

### Base de conhecimento

Nessa página, você pode adicionar [arquivos](#arquivos), [sites](#sites) e [textos](#textos) à base de conhecimento do seu agente. Os agentes vão utilizar os dados desses documentos para responder aos usuários.

#### Arquivos

Para adicionar um arquivo à base de dados, clique em <i class="fas fa-plus" aria-hidden="true"></i>`Adicionar arquivo`.

> ⚠️ Os arquivos devem ter extensão `.pdf`, `.doc`, `.docx`, `.txt`, `.xls` ou `.xlsx` e tamanho de até 50 MB.

Clicando nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado do nome do arquivo, é possível:

- Baixar o arquivo.
- Remover o arquivo da base de conhecimento.

Você também pode usar o campo de busca para encontrar um arquivo na base de conhecimento.

#### Sites

Para inserir um site na base de dados do agente, siga este passo a passo:

1. Clique em <i class="fas fa-plus" aria-hidden="true"></i>`Adicionar site`.
2. Em seguida, copie a URL do site que deseja adicionar e cole-a no campo vazio.
3. Clique em `Concluir`.

Clicando nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado do site, é possível:

- Acessar o site.
- Remover o site da base de conhecimento.

Você também pode usar o campo de busca para encontrar um site na base de conhecimento.

#### Textos

Nessa página, você pode inserir conteúdos e informações na caixa de texto **Escrever conteúdo**.

Após inserir um texto, clique em `Salvar`.

### Fluxo de automação

Você pode criar fluxos de automação para interagir com um grupo de usuários e determinar as respostas do agente com base nas mensagens dos usuários.

Para entender como criar fluxos, leia o artigo [Introdução a fluxos](https://help.vtex.com/pt/docs/tutorials/introducao-a-fluxos).
