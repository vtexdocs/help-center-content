---
title: 'Visão geral Agent Builder'
id: 6t9oYS7E2AJH9c2AYReUrs
status: PUBLISHED
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2025-09-08T16:21:28.723Z
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

A funcionalidade se concentra em um agente orquestrador, que é o ponto de contato com o cliente e assume o controle do chat. Esse orquestrador aciona agentes colaboradores que retornam dados e informações conforme as necessidades do usuário.

> ℹ️ Para saber mais sobre os agentes colaboradores, leia o artigo [Agentes oficiais da Weni by VTEX](/pt/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

Além de atribuir e testar esses agentes, você também pode criar agentes próprios que atendam a necessidades específicas da sua empresa.

> ⚠️ Para criar agentes customizados, use o CLI da Weni by VTEX. Confira a [documentação](https://weni-ai.github.io/weni-cli/getting-started/installation/) para criar seu próprio agente.

## Agent Builder

Para acessar o **Agent Builder**, selecione a Organização na página inicial da Weni by VTEX e, em seguida, o projeto que deseja gerenciar. No menu lateral, clique em **Agent Builder**.

Em **Agent Builder**, as seguintes páginas estão disponíveis:

- [**Supervisor**](#supervisor)
- [**Perfil**](#perfil)
- [**Agentes**](#agentes)
- [**Conhecimento**](#conhecimentos)
- [**Ajustes**](#ajustes)

### Supervisor

Nessa página, você pode analisar e revisar as conversas entre agentes e clientes. Ela é dividida em duas seções:

- **Atendido pelo agente**
- **Encaminhado para suporte humano**

A seção **Atendido pelo agente** mostra o percentual de conversas atendidas e resolvidas pelos agentes. Já a seção **Encaminhado para suporte humano** mostra o percentual de atendimentos que precisaram ser encaminhados a humanos.

No campo <i class="fas fa-search" aria-hidden="true"></i>`Buscar`, você pode buscar conversas e observar os resultados.

No canto superior, estão as datas das interações. Você pode clicar na data para alterar o intervalo de tempo e filtrar os resultados exibidos.

![Imagem Supervisor](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/agent-builder/visao-geral-agent-builder_1.png)

### Perfil

Essa página contém campos customizáveis para personalizar a identidade e o comportamento do seu agente orquestrador.

Para customizar o seu agente, use os campos a seguir:

**Como o agente se apresenta?:** nome do agente que será exibido aos clientes.
**Qual é a função principal do agente?:** função principal do agente para os usuários entenderem a sua especialidade (por exemplo: atendente).
**Qual é o objetivo principal do agente?:** objetivo principal do agente (por exemplo: ajudar a tirar dúvidas).
**Qual é o tom de voz do agente?:** tom de voz que o agente vai usar para se comunicar com os usuários. Clique nesse campo e selecione um dos tons de voz predefinidos no menu dropdown.

Leia a seguir a descrição detalhada de cada tom de voz:

| Tom de voz do agente  | Descrição |
| :-------------: | :------------- |
| Amigável      | Interage de forma calorosa e acolhedora, fazendo o cliente se sentir confortável e bem-vindo, estabelecendo uma conexão com simpatia e compreensão. |
| Cooperativo  | Trabalha em conjunto com o cliente para encontrar soluções. Prioriza o trabalho em equipe e está focado em garantir que as necessidades do cliente sejam atendidas com o menor esforço possível. |
| Extrovertido  | Com uma personalidade animada e expressiva, comunica-se de forma aberta e entusiástica. Está sempre motivado e transmite energia positiva durante as interações, tornando as conversas dinâmicas e envolventes. |
| Generoso     | Oferece informações adicionais e recursos que podem ser úteis, mesmo antes de serem solicitados.   |
| Relaxado | É descontraído e lida com situações difíceis de forma calma. Mantém uma conversa agradável e dá ao cliente o tempo necessário para processar informações e tomar decisões. |
| Organizado   | Garante que todas as informações estejam dispostas de forma clara e acessível. Ele é meticuloso e eficaz, guiando o cliente por cada etapa de maneira lógica, para que nenhum detalhe seja perdido.  |
| Sistemático    | Com um método claro e bem estruturado, segue passos definidos para resolver problemas. Usa uma abordagem lógica e ordenada, com consistência e precisão na comunicação e no suporte ao cliente.   |
| Inovador         | Quando confrontado com um problema ou situação difícil, propõe novas soluções e apresenta ideias criativas e eficazes.  |
| Criativo          | Utiliza a imaginação para se comunicar. Ele é capaz de oferecer respostas diferenciadas e adaptar a linguagem para tornar o conteúdo mais relevante e cativante para o cliente.  |
| Intelectual      | Oferece respostas detalhadas e informadas. Ele fornece uma explicação aprofundada, baseada em fatos e lógica, atendendo às necessidades dos clientes que desejam mais clareza e entendimento.  |

Na seção **Instruções gerais**, você pode adicionar instruções diretas para seu agente para determinar como ele se comporta.

Se você adicionou uma instrução e deseja excluí-la, clique no botão de <i class="far fa-trash-alt" aria-hidden="true"></i> lixeira ao lado da instrução. Será exibida uma mensagem perguntando se você deseja excluir a instrução. Clique em `Excluir` para excluí-la ou `Cancelar` se deseja mantê-la. 

> ℹ️ Não há um limite para a quantidade de instruções.

Ao final, para salvar as características do seu agente, clique no botão `Salvar alterações`, no canto direito da tela.

### Agentes

Nessa página, você pode atribuir e testar agentes para a sua loja.

Para entender como fazer isso, leia o artigo [Como atribuir e testar um agente](/pt/tutorial/atribuir-e-testar-agentes-no-agent-builder--41beBpRcBouxMywt6dUW2z).

### Conhecimento

Nessa página, você pode adicionar arquivos, sites e textos à base de conhecimento do seu agente. Os agentes vão utilizar os dados desses documentos para responder aos usuários.

#### Arquivos

Para adicionar um arquivo à base de dados, clique em <i class="fas fa-plus" aria-hidden="true"></i>`Adicionar arquivo`.

> ⚠️ O envio do arquivo só ocorrerá se os arquivos tiverem extensão `.pdf`, `.doc`, `.docx`, `.txt`, `. xls` ou `.xlsx` e tamanho de até 50 MB.

Clicando nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado do nome do arquivo, é possível:

- Ver detalhes (como a data em que foi adicionado e o conteúdo).
- Baixar o arquivo.
- Remover o arquivo.

Você também pode usar o campo de busca para encontrar um arquivo.

#### Sites

Para inserir um site na base de dados do agente, siga este passo a passo:

1. Clique em <i class="fas fa-plus" aria-hidden="true"></i>`Adicionar site`.
2. Em seguida, copie a URL do site que deseja adicionar e cole-a no campo vazio.
3. Clique em `Concluir`.

Clicando nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado do site, é possível:

- Ver detalhes (como a data em que foi adicionado e o conteúdo).
- Acessar o site.
- Remover o site.

Você também pode usar o campo de busca para encontrar um site.

#### Textos:

Nessa página, você pode inserir conteúdos e informações na caixa de texto **Escrever conteúdo.**

Após inserir um texto, clique em `Salvar alterações`. 

### Ajustes

Nessa página, você pode alterar os ajustes dos seus agentes.

#### Configurações:

Abaixo de **Prévia dos agentes,** há dois botões de alternância:

- **Feedback progressivo dos agentes:** ative-o <i class="fas fa-toggle-on" aria-hidden="true"></i> se quiser que o agente envie atualizações em tempo real ao usuário enquanto redige a resposta final. Caso contrário, deixe-o desativado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

![GIF Feedback progressivo dos agentes](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/agent-builder/visao-geral-agent-builder_2.gif)

- **Formato de mensagem múltipla:** ative-o <i class="fas fa-toggle-on" aria-hidden="true"></i> se quiser que o agente envie várias mensagens, como respostas rápidas, listas, catálogo. Caso contrário, deixe-o desativado <i class="fas fa-toggle-off" aria-hidden="true"></i>. 

![Formato de mensagem múltipla](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/agent-builder/visao-geral-agent-builder_3.png)

Abaixo de **Suporte humano,** há um botão de alternância:

**Suporte humano:** ative-o <i class="fas fa-toggle-on" aria-hidden="true"></i> para que o agente possa encaminhar a conversa para um humano. Caso contrário, deixe-o desativado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

Na caixa de texto **Quando o agente deve transferir a conversa para um humano?**, adicione uma frase ou texto que exemplifique para o agente em que momento ele deverá encaminhar a conversa.

#### Credenciais

Nessa seção, você pode visualizar as credenciais utilizadas pelos agentes oficiais e personalizados.

> ℹ️ Leia mais sobre o assunto no artigo [Agentes oficiais da Weni by VTEX](/pt/tutorial/agentes-oficiais-da-weni-by-vtex--7E8wlD3T41CiOexDVH1SIy).

#### Histórico de alterações

Nessa seção, você pode visualizar quais alterações foram feitas nos agentes, quem as fez e a data dessas alterações.

Os logs indicam:

- Adição, alteração ou remoção de instrução.
- Adição, alteração ou remoção de conteúdo de conhecimento.
- Alteração de nome, função e objetivo do agente.

Você também pode utilizar a caixa de filtro do lado direito para visualizar por tipo de alteração, como:

- Todas as alterações
- Alterações de personalização
- Alterações de conteúdo
- Alterações de ações
- Alterações de configurações

