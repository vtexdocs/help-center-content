---
title: 'Agent Builder'
createdAt: 2025-07-23T12:24:11.906Z
updatedAt: 2026-11-12T18:32:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: agent-builder-overview
locale: pt
categoryCover: true
---

O **Agent Builder** é uma ferramenta de conversação com o cliente baseada em inteligência artificial. Usando essa funcionalidade, você pode customizar agentes para interagir com seus clientes, permitindo que eles solicitem informações sobre um pedido em andamento, o catálogo da sua loja e o cancelamento de um pedido, por exemplo.

A funcionalidade se concentra em um agente orquestrador (ou manager), que é o ponto de contato com o cliente e assume o controle do chat. Esse orquestrador aciona agentes colaboradores que retornam dados e informações conforme as necessidades do usuário.

> ℹ️ Para saber mais sobre os agentes colaboradores, leia o artigo [Agentes oficiais do VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/agentes-oficiais-da-vtex-cx-platform).

Além de atribuir e testar esses agentes, você também pode criar agentes próprios que atendam a necessidades específicas da sua empresa.

> ⚠️ Para criar agentes customizados, use o CLI do VTEX CX Platform. Confira a [documentação](https://developers.vtex.com/docs/guides/using-the-weni-by-vtex-cli) para criar seu próprio agente.

## Agent Builder

Para acessar o **Agent Builder**, selecione a Organização na página inicial do VTEX CX Platform e, em seguida, o projeto que deseja gerenciar.

Em **Agent Builder**, as seguintes páginas estão disponíveis:

- [**Meus agentes**](#meus-agentes)
- [**Base de conhecimento**](#base-de-conhecimento)
- [**Fluxo de automação**](#fluxo-de-automacao)

### Meus agentes

> Nessa página, você pode atribuir e testar agentes para a sua loja, além de editar o manager e as instruções que ele deve seguir.

Para entender como atribuir agentes, leia o artigo [Atribuir e testar um agente](https://help.vtex.com/pt/docs/tutorials/atribuir-e-testar-agentes).

#### Editar manager

A opção **Editar Manager** do agente orquestrador possui as seguintes abas:

- [Perfil](#perfil)
- [Motor](#motor)

##### Perfil

Nessa aba, você encontra campos customizáveis para personalizar a identidade e o comportamento do seu agente orquestrador.

Para customizar o seu agente, preencha os campos a seguir:

- **Qual nome o agente usa para se apresentar?:** nome do agente que será exibido aos clientes.
- **Qual é a função principal do agente?:** função principal do agente para os usuários entenderem a sua especialidade (por exemplo: atendente).
- **Qual é o objetivo principal do agente?:** objetivo principal do agente (por exemplo: ajudar a tirar dúvidas).
- **Qual é o tom de voz do agente?:** tom de voz que o agente vai usar para se comunicar com os usuários. Selecione um dos tons de voz predefinidos.

Leia a seguir a descrição detalhada de cada tom de voz:

| Tom de voz do agente | Descrição |
| --- | --- |
| Amigável | Interage de forma calorosa e acolhedora, fazendo o cliente se sentir confortável e bem-vindo, estabelecendo uma conexão com empatia e compreensão. |
| Sistemático | Com um método claro e bem estruturado, segue passos definidos para resolver problemas. Usa uma abordagem lógica e ordenada, com consistência e precisão na comunicação e no suporte ao cliente. |
| Analítico | Garante que todas as informações estejam dispostas de forma clara e acessível. Ele é lógico e objetivo, guiando o cliente por cada etapa de maneira metodológica, para que nenhum detalhe seja perdido. |
| Criativo | Utiliza a imaginação para se comunicar, priorizando soluções originais. Ele é capaz de oferecer respostas diferenciadas e adaptar a linguagem para tornar o conteúdo mais relevante e cativante para o cliente. |
| Informal | É leve, energético e informal. Mantém um tom mais acessível e humano. |

##### Motor

Em **Fonte de motor**, você pode selecionar o modelo de agente nativo do VTEX CX Platform ou um modelo de LLM no qual você possua uma Chave API cadastrada. Caso deseje utilizar o modelo externo, selecione a opção **Chave API própria** e preencha os campos abaixo:

- **Provedor**: empresa proprietária do modelo.
- **Modelo**: versão disponível do modelo.
- **API Key**: sua chave de API cadastrada no provedor do modelo.

> ℹ️ Para ativar qualquer modificação realizada nas informações das abas **Perfil** ou **Motor**, é necessário clicar em `Salvar alterações`.

Se você selecionou o motor nativo da plataforma, poderá escolher, em **Versão do manager**, entre duas opções de agente orquestrador:

- **Manager 2.7** (Recomendado).
- **Manager 2.6** (Modelo legado).

Em **Prévia dos agentes**, existem duas configurações possíveis:

- **Formato de mensagem múltipla:** ative-o <i class="fas fa-toggle-on" aria-hidden="true"></i> se quiser que o agente envie várias mensagens, como respostas rápidas, listas, catálogo. Caso contrário, deixe-o desativado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

- **Feedback progressivo dos agentes:** ative-o <i class="fas fa-toggle-on" aria-hidden="true"></i> se quiser que o agente mostre atualizações curtas enquanto prepara a resposta final. Essas atualizações não alteram a resposta final e não exigem desenvolvimento adicional na loja. Caso contrário, deixe-o desativado <i class="fas fa-toggle-off" aria-hidden="true"></i>.

> ⚠️ As opções **Feedback progressivo dos agentes** e **Formato de mensagem múltipla** não podem ser ativadas ao mesmo tempo.

Em **Mensagens do sistema**, você pode personalizar a mensagem de erro enviada ao cliente quando um erro de API impede o agente de gerar uma resposta. Cada projeto pode ter a sua própria mensagem, adaptada ao tom de voz da marca.

> ⚠️ A mensagem de erro é enviada exatamente como configurada e não é traduzida automaticamente. Escreva o texto no idioma em que o seu agente atende os clientes.

Para salvar seus ajustes, clique em `Salvar alterações`.

#### Editar instruções

Ao clicar no botão `Editar instruções` do agente orquestrador, você acessa a página **Instruções**, onde pode adicionar instruções diretas para determinar como seu agente se comporta. Não há limite para a quantidade de instruções que podem ser criadas.

Toda instrução personalizada é revisada por IA antes de ser salva. A revisão analisa a instrução em busca de problemas, sugere uma reescrita quando necessário e atribui uma categoria para que você possa organizar instruções relacionadas.

##### Criar uma instrução

Para criar uma instrução personalizada, siga os passos a seguir:

1. Na página **Instruções**, clique em `Nova instrução`.
2. Digite a instrução.
3. Clique em `Validar`.
4. Em **Categoria sugerida**, mantenha a categoria atribuída pela IA, selecione outra opção em **Outras categorias** ou selecione **Sem categoria**.
5. Clique em `Salvar`.

> ℹ️ O botão `Salvar` fica disponível após a conclusão da revisão por IA. Quando nenhum problema é encontrado, o campo **Problemas encontrados** exibe **Tudo certo. Nenhum problema encontrado.** Para adicionar uma categoria antes de salvar, confira [Criar uma categoria](#criar-uma-categoria).

> ⚠️ Se o campo **Problemas encontrados** listar algum problema, atualize a instrução ou clique em `Aplicar` em **Sugestão de reescrita**. Clique em `Desfazer` para restaurar o texto anterior. Depois de alterar o texto, clique em `Re-validar` e, em seguida, em `Salvar`.

##### Criar uma categoria

Você pode criar uma categoria durante a criação ou edição de uma instrução e depois reutilizá-la em outras instruções.

Para criar uma categoria, siga os passos a seguir:

1. No painel lateral da instrução, abra **Categoria** ou **Categoria sugerida**.
2. Clique em `Nova categoria`.
3. Em **Nome da categoria**, digite um nome.
4. Clique em `Criar`.
5. Clique em `Salvar` para armazenar a instrução nessa categoria.

> ℹ️ O nome da categoria pode ter até 50 caracteres e incluir letras, números, espaços e hifens. Use um nome exclusivo. A opção **Sem categoria** é reservada para instruções sem categoria. Uma categoria criada no painel lateral fica marcada com a tag **Novo** até que você salve a instrução.

##### Componentes interativos

Com o **Manager 2.7**, o agente orquestrador pode responder usando componentes interativos nativos do WhatsApp:

| Componente | Descrição |
| --- | --- |
| Respostas rápidas (`quick_reply`) | Botões com opções predefinidas para o cliente escolher. |
| Botões de ação (`call_to_action`) | Botões que direcionam o cliente para um link externo. |
| Lista de mensagens (`list_message`) | Menu com uma lista de opções selecionáveis. |

Para orientar o agente a usar um componente, cite-o diretamente em uma instrução personalizada. Por exemplo: "Ao perguntar sobre o status do pedido, use o componente `quick_reply` com as opções Rastrear pedido, Cancelar pedido e Falar com atendente".

> ℹ️ Para que o agente envie componentes interativos, a opção **Formato de mensagem múltipla** deve estar ativada em **Editar Manager > Motor**.

> ⚠️ O catálogo de produtos não é um componente nativo do Manager 2.7. Quando há um agente Concierge atribuído ao time, o orquestrador aciona o Concierge para enviar o catálogo. Os agentes Concierge oficiais da VTEX já possuem essa capacidade.

##### Visualizar instruções

Selecione `Categorias` ou `Lista` para alterar o modo de exibição das instruções:

- **Categorias:** agrupa as instruções por categoria. Uma categoria personalizada sem instruções permanece visível e exibe **Nenhuma instrução nesta categoria ainda**.

- **Lista:** exibe cada instrução existente com a sua respectiva categoria.

Use o campo de busca para encontrar uma instrução. Para baixar as instruções, clique em `Exportar instruções`.

A página inclui os seguintes grupos:

- **Sem categoria:** instruções personalizadas que não possuem uma categoria. Você pode editá-las e excluí-las. Este grupo não pode ser removido.

- **Instruções padrão:** comportamentos definidos pela plataforma. Essas instruções não podem ser editadas ou removidas.

Para editar ou excluir uma instrução personalizada, siga os passos a seguir:

1. Clique no botão de três pontos <i class="fas fa-ellipsis-v" aria-hidden="true"></i> ao lado da instrução.
2. Para editá-la, clique em `Editar instrução`, altere o texto ou a categoria e clique em `Salvar`.
3. Para excluí-la, clique em `Excluir instrução` e confirme a exclusão.

> ℹ️ O campo **Categoria** fica disponível assim que você abre a instrução. Clique em `Re-validar` para revisar o texto novamente. A revalidação mantém a categoria já selecionada.

> ⚠️ A exclusão de uma instrução é permanente, e o agente deixa de segui-la.

Para excluir uma categoria personalizada, siga os passos a seguir:

1. Selecione `Categorias`.
2. Abra o menu de ações da categoria.
3. Clique em `Excluir categoria` e confirme a exclusão.

> ℹ️ As instruções de uma categoria excluída são movidas para **Sem categoria**. Uma categoria vazia é removida da lista.

Para escolher quais tópicos sensíveis o agente deve recusar, confira [Configurar camadas extras de segurança por projeto](https://help.vtex.com/pt/docs/tutorials/configurar-camadas-extras-de-seguranca-por-projeto).

### Base de conhecimento

Nessa página, você pode adicionar [arquivos](#arquivos), [sites](#sites) e [textos](#textos) à base de conhecimento do seu agente. Os agentes vão utilizar os dados desses documentos para responder aos usuários.

#### Arquivos

Para adicionar um arquivo à base de dados, clique em <i class="fas fa-plus" aria-hidden="true"></i> `Adicionar arquivo`.

> ⚠️ Os arquivos devem ter extensão `.pdf`, `.doc`, `.docx`, `.txt`, `.xls` ou `.xlsx` e tamanho de até 50 MB.

Clicando nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado do nome do arquivo, é possível:

- Baixar o arquivo.
- Remover o arquivo da base de conhecimento.

Você também pode usar o campo de busca para encontrar um arquivo na base de conhecimento.

#### Sites

Para inserir um site na base de dados do agente, siga este passo a passo:

1. Clique em <i class="fas fa-plus" aria-hidden="true"></i> `Adicionar site`.
2. Em seguida, copie a URL do site que deseja adicionar e cole-a no campo vazio.
3. Clique em `Concluir`.

Clicando nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado do site, é possível:

- Acessar o site.
- Remover o site da base de conhecimento.

Você também pode usar o campo de busca para encontrar um site na base de conhecimento.

#### Textos

Nessa aba, você pode adicionar conteúdos em texto à base de conhecimento, organizados em segmentos nomeados. Cada segmento tem um título próprio, e a lista é ordenada pela edição mais recente, com a indicação de quando cada segmento foi modificado.

Para criar um segmento de texto, siga os passos a seguir:

1. Clique em <i class="fas fa-plus" aria-hidden="true"></i> `Adicionar texto`.
2. Digite um título para identificar o segmento.
3. Insira o conteúdo na caixa de texto.
4. Clique em `Salvar`.

Clicando nos <i class="fas fa-ellipsis-v" aria-hidden="true"></i>três pontos ao lado do segmento, é possível:

- Editar o conteúdo.
- Renomear o título.
- Excluir o segmento. A exclusão exige confirmação.

Você também pode usar o campo de busca para encontrar um segmento pelo título.

> ℹ️ Bases de conhecimento criadas antes dessa organização mantêm o texto original como um único segmento, com um título padrão. Nenhum conteúdo é perdido. A divisão em segmentos é apenas uma mudança de interface e não altera a forma como o agente usa o conteúdo da base.

### Fluxo de automação

Você pode criar fluxos de automação para interagir com um grupo de usuários e determinar as respostas do agente com base nas mensagens dos usuários.

Para mais informações, acesse [Visão geral Fluxo de automação](https://help.vtex.com/pt/docs/tutorials/visao-geral-fluxo-de-automacao).
