---
title: 'Agente de Catálogo'
createdAt: 2026-11-25T00:00:00.000Z
updatedAt: 2026-11-25T00:00:00.000Z
contentType: tutorial
productTeam: Catalog
slugEN: catalog-agent
locale: pt
seeAlso:
  - /pt/docs/tutorials/ai-workspace-visao-geral
  - /pt/docs/tutorials/lista-agentes
  - /pt/docs/tutorials/agente-de-colecoes
---

> ℹ️ O **Agente de Catálogo** está em Beta fechado e disponível somente para contas selecionadas. Em caso de dúvidas, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).

O **Agente de Catálogo** é um agente de inteligência artificial do [AI Workspace](https://help.vtex.com/pt/docs/tutorials/ai-workspace-visao-geral) que ajuda equipes de catálogo a melhorar o conteúdo de vários produtos de uma vez. Assim, você pode corrigir textos e incluir informações mais completas sem editar cada produto separadamente no Admin VTEX.

O agente fica no AI Workspace e é voltado para operadores de conteúdo e líderes de catálogo. Você pode receber sugestões em iniciativas criadas pelo agente ou solicitar alterações pelo chat. Nos dois casos, a sua equipe revisa as sugestões antes que qualquer alteração seja aplicada ao catálogo.

## Como o Agente de Catálogo funciona

O agente sugere alterações para quatro campos:

- **Nome do produto:** nome apresentado aos clientes na página do produto e em outras áreas da loja.
- **Descrição:** texto principal que apresenta as características e os benefícios do produto.
- **Título de SEO:** título que pode aparecer como link para a página do produto em mecanismos de busca, como o Google.
- **Meta descrição de SEO:** resumo que pode aparecer abaixo desse link nos resultados dos mecanismos de busca.

SEO significa otimização para mecanismos de busca e reúne práticas que ajudam as páginas a aparecer nos resultados de busca.

As sugestões podem seguir as diretrizes de conteúdo da sua loja, incluindo regras de redação, tom de voz e restrições. Como os textos são gerados por inteligência artificial, revise cada sugestão antes de aprová-la.

O agente não cria nem exclui itens do catálogo e não altera dados como preço, estoque ou imagens. A tabela a seguir indica onde realizar essas ações.

| Ação | Onde realizar |
| :--- | :--- |
| Criar ou excluir produtos, categorias e marcas | Admin VTEX |
| Alterar preço ou estoque | Admin VTEX |
| Alterar imagens | Cadastro do produto ou SKU no Admin VTEX |

## Antes de começar

Para trabalhar com o Agente de Catálogo, confira os seguintes requisitos:

- Sua conta deve ter acesso ao Beta fechado do AI Workspace.
- Para criar ou alterar diretrizes de conteúdo, o seu usuário precisa ter a permissão de gerenciamento de diretrizes. Sem essa permissão, você pode apenas visualizá-las.
- Para solicitar melhorias com base nas regras de escrita da loja, crie as diretrizes de conteúdo antes de iniciar a solicitação.

Para saber como iniciativas, tarefas e chats funcionam, consulte [AI Workspace - Iniciativas](https://help.vtex.com/pt/docs/tutorials/ai-workspace-iniciativas), [AI Workspace - Tarefas](https://help.vtex.com/pt/docs/tutorials/ai-workspace-tarefas) e [AI Workspace - Chat](https://help.vtex.com/pt/docs/tutorials/ai-workspace-chat).

## Configurar diretrizes de conteúdo

As diretrizes de conteúdo são as regras de escrita da sua loja. Elas ficam armazenadas na conta, são compartilhadas por todos os usuários e podem conter:

- **Regras de conteúdo:** por exemplo, usar o formato "nome do produto + marca" no título.
- **Tom de voz:** por exemplo, escrever de forma amigável e usar parágrafos curtos.
- **Restrições:** por exemplo, nunca mencionar preço ou promoções.

> ❗ Atualizar as diretrizes substitui a versão anterior, que não pode ser recuperada.

Para criar ou atualizar as diretrizes, siga os passos abaixo:

1. No AI Workspace, acesse a página **Meu assistente**.
2. Na **Caixa de mensagem**, selecione **Agente de Catálogo**.
3. Envie as regras que o agente deve seguir.

    Exemplos de solicitação:

    - "Crie as diretrizes de conteúdo da loja com base neste texto:", seguido das regras.
    - "Atualize as diretrizes de conteúdo com base neste texto:", seguido das novas regras.

4. Revise as diretrizes no painel lateral, chamado de [canvas](https://help.vtex.com/pt/docs/tutorials/ai-workspace-chat#canvas).
5. Confirme para salvar.

As diretrizes confirmadas passam a orientar as próximas sugestões geradas para todos os usuários da conta.

### Exemplo de diretrizes

O exemplo a seguir organiza as regras por campo e inclui restrições gerais:

- **Nome do produto:** usar o formato tipo de produto + marca + modelo + característica principal. Não escrever palavras inteiras em letras maiúsculas.
- **Descrição:** usar tom amigável e parágrafos curtos. Começar pelo principal benefício e depois listar as características.
- **Título de SEO:** usar o formato nome do produto + marca.
- **Meta descrição de SEO:** escrever uma ou duas frases que indiquem o que é o produto e para quem ele é recomendado.
- **Restrições gerais:** nunca mencionar preço, promoções ou prazo de entrega. Não usar informações ausentes no cadastro do produto.

Ao escrever as diretrizes:

- Organize as regras por campo.
- Defina formato, ordem das informações e termos proibidos.
- Registre as restrições de forma explícita.
- Guarde uma cópia fora do AI Workspace, pois não há histórico de versões.

## Iniciativas do Agente de Catálogo

No AI Workspace, uma iniciativa reúne tarefas criadas para corrigir um problema identificado pelo agente. O Agente de Catálogo cria iniciativas quando encontra os seguintes problemas:

- Título de SEO fraco
- Meta descrição de SEO fraca
- Nome do produto de baixa qualidade
- Descrição de baixa qualidade

Para identificar esses problemas, o agente considera critérios como clareza, quantidade de informações, especificidade e consistência com os dados cadastrados no produto.

Para montar uma iniciativa, o agente analisa os produtos em estoque responsáveis pela maior parte da receita recente da loja. Em seguida, prioriza os produtos de maior receita entre os que apresentam o problema. Cada iniciativa reúne até 20 produtos.

Cada tarefa trata de um único campo e apresenta sugestões para os produtos da iniciativa. Quando a tarefa aguardar a sua ação, abra a revisão e siga as orientações da seção [Revisar e aplicar sugestões](#revisar-e-aplicar-sugestoes).

## Solicitar alterações pelo chat

Pelo chat, você envia uma lista de produtos, informa os campos que deseja alterar e escolhe uma das seguintes formas de gerar sugestões:

- **Correção específica:** descreva exatamente o que deseja alterar.
- **Melhoria baseada nas diretrizes:** informe os campos para que o agente sugira textos de acordo com as regras da loja.

Para solicitar alterações, siga os passos abaixo:

1. No AI Workspace, acesse a página **Meu assistente**.
2. Na **Caixa de mensagem**, selecione **Agente de Catálogo**.
3. Envie a lista de produtos, os campos e, para uma correção específica, a alteração desejada.

    Se você não informar os campos, o agente pergunta se deseja alterar o nome do produto, a descrição, o título de SEO ou a meta descrição de SEO. Nenhuma sugestão é gerada antes da sua resposta.

4. Revise as sugestões apresentadas no canvas.

> ℹ️ As solicitações abaixo são exemplos ilustrativos. Você pode escrever as instruções de outras formas.

Nos exemplos, o ID é o código numérico que identifica o produto no catálogo.

| Forma | Exemplo de solicitação | Resultado esperado |
| :--- | :--- | :--- |
| Correção específica | "Remova o termo 'Lançamento' do nome dos produtos de ID 1021, 1022 e 1035." | O agente apresenta uma sugestão de nome sem o termo para cada produto. |
| Melhoria baseada nas diretrizes | "Melhore o título de SEO e a meta descrição de SEO dos produtos de ID 2040, 2041, 2042 e 2043." | O agente apresenta sugestões para os dois campos de cada produto, de acordo com as diretrizes. |

O agente não gera uma sugestão quando o texto já segue as diretrizes ou não precisa da correção solicitada. Se nenhum campo precisar de alteração, o agente informa o resultado no chat.

Quando uma sugestão entra em conflito com as diretrizes, o agente informa o conflito. Nesse caso, atualize as diretrizes ou confirme que deseja aplicar a alteração mesmo assim.

## Revisar e aplicar sugestões

O canvas de revisão mostra o valor **Atual** e a **Sugestão** de cada campo. Toda sugestão começa pendente, e nenhuma alteração é aplicada ao catálogo sem a sua aprovação. A mesma revisão é usada em tarefas de iniciativas e em solicitações feitas pelo chat.

### Aprovar sugestões

Você pode aprovar todas as sugestões pendentes ou apenas uma seleção:

- **Todas as sugestões pendentes:** clique em `Aprovar todas`. O botão mostra quantas sugestões serão aprovadas.
- **Uma seleção:** marque as sugestões desejadas e clique em `Aprovar` na barra de seleção. A ação afeta somente as sugestões marcadas.

Antes de aplicar as alterações, uma confirmação informa quantas sugestões serão aplicadas ao catálogo e quantas continuarão pendentes.

Depois da confirmação, o campo mostra **Aplicando…** e a opção `Desfazer`. Enquanto essa opção estiver disponível, clique em `Desfazer` para devolver a sugestão ao estado pendente sem alterar o catálogo. Depois de `Aprovar todas`, um único `Desfazer` reverte todas as aprovações daquela ação.

Quando a alteração é aplicada ao catálogo, o campo passa a mostrar **Aprovada**. Se a aplicação falhar, o campo mostra **Erro** e mantém o valor atual. Clique em `Tentar novamente` para repetir a ação. A falha de um campo não impede a aplicação das demais sugestões aprovadas.

### Ignorar sugestões

Para ignorar várias sugestões, marque-as e clique em `Ignorar` na barra de seleção. Para ignorar uma única sugestão, clique em `Ignorar` no menu de ações correspondente.

Uma sugestão ignorada não altera o catálogo. O campo mostra **Ignorada** e a opção `Desfazer`, disponível até a tarefa ser finalizada.

### Solicitar um ajuste ou uma explicação

Em cada sugestão, você pode:

- **Solicitar um ajuste:** clique em `Ajustar`, descreva a alteração e envie. O agente gera uma nova versão, que substitui a anterior e continua pendente. Por exemplo: "Deixe o título mais curto e mantenha a marca no início."
- **Solicitar uma explicação:** no menu de ações, clique em `Explicar`. O agente informa no chat por que fez a sugestão. Por exemplo: "Por que você sugeriu esse título para o produto de ID 1021?"

### Finalizar a tarefa

Quando todas as sugestões são aprovadas, a tarefa é finalizada automaticamente. Se todas tiverem sido revisadas e pelo menos uma tiver sido ignorada, o AI Workspace solicitará a confirmação da finalização. Você também pode finalizar a tarefa enquanto houver sugestões pendentes.

> ❗ A finalização não pode ser desfeita. Sugestões pendentes são registradas como ignoradas e não alteram o catálogo.

Para finalizar a tarefa manualmente:

1. No canvas de revisão, clique em `Finalizar`.
2. Confira quais sugestões não serão aplicadas.
3. Confirme a finalização.

Depois da finalização, o canvas mostra **Tarefa concluída** e fica disponível somente para leitura. As sugestões aprovadas permanecem aplicadas; as ignoradas e as não revisadas mantêm o valor atual do campo. O chat continua disponível para consultas, como solicitar a lista de produtos alterados.

## Limitações do Beta fechado

Durante o Beta fechado:

- O agente altera apenas nome do produto, descrição, título de SEO e meta descrição de SEO.
- Cada solicitação aceita uma quantidade limitada de produtos. Se a lista ultrapassar esse limite, o agente não processa a solicitação. Divida os produtos em listas menores e envie uma solicitação para cada lista.
- Depois que os produtos e os campos de uma tarefa são definidos, você não pode adicionar outros itens. Inicie um novo chat para trabalhar com outros produtos ou campos.
- As diretrizes são criadas e atualizadas somente pelo chat. Não é possível enviar um arquivo nem recuperar versões anteriores.
- O agente não garante uma redação exata. Revise as sugestões e solicite ajustes quando necessário.

## Perguntas frequentes

### Por que meu produto não foi incluído?

Em iniciativas, o produto pode não atender aos critérios de estoque, receita ou priorização. Cada iniciativa reúne até 20 produtos. Em solicitações feitas pelo chat, o produto não aparece na revisão quando nenhum dos campos solicitados precisa de alteração.

### Por que o agente não sugeriu uma alteração para um campo?

O agente não gera sugestões quando o texto já segue as diretrizes ou não precisa da correção solicitada. O agente também não altera campos diferentes de nome do produto, descrição, título de SEO e meta descrição de SEO.

### Por que minha solicitação não foi processada?

A lista pode ter ultrapassado o limite de produtos, ou o agente pode não realizar a ação solicitada. Para listas extensas, divida os produtos em grupos menores. Para criar produtos ou alterar preço, estoque e imagens, use o Admin VTEX.

### Posso adicionar produtos a uma tarefa concluída?

Não. Para trabalhar com outros produtos ou campos, inicie um novo chat.
