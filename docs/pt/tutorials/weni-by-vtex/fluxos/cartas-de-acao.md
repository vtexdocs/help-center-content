---
title: 'Cartas de ação'
id: 5TQ44l4pp84PPWdnWdg3JN
status: PUBLISHED
createdAt: 2025-09-16T16:43:29.253Z
updatedAt: 2025-10-03T14:20:03.887Z
publishedAt: 2025-10-03T14:20:03.887Z
firstPublishedAt: 2025-10-03T14:20:03.887Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: action-cards
legacySlug: cartas-de-acao
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

Depois de entender um pouco mais sobre o que são Cartas de ação na nossa [Introdução a fluxos](https://docs.weni.ai/l/pt/fluxos/introducao-a-fluxos), agora iremos avançar sobre quais cartas existem e o que podemos fazer com cada uma delas.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_1.gif)

Para facilitar a navegação por esse artigo, caso queira ir diretamente para uma carta de ação específica, basta clicar no nome dela abaixo:
  * Envie uma mensagem ao contato
  * Envie uma mensagem a outra pessoa
  * Etiquete uma mensagem recebida
  * Adicione uma URN ao contato
  * Remover contato de um grupo
  * Atualizar o contato
  * Envie um email
  * Salve o resultado para este fluxo
  * Entrar em outro fluxo
  * Iniciar outra pessoa em um fluxo
  * Enviar uma mensagem do WhatsApp
  * Adicione um contato a um grupo
  * Abrir um ticket com um agente humano
  * Chamar um webhook

### Envie uma mensagem ao contato

A carta de ação mais conhecida e mais utilizada da plataforma. Sua função é a de mandar uma mensagem para o contato. Essa mensagem será recebida independentemente do canal que o usuário está conversando, basta escrevê-la na caixa de texto.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_2.png)

  1. **Facebook**
O envio de mensagens em massa por um canal do Facebook exige que um tópico seja especificado se o usuário não tiver enviado uma mensagem nas últimas 24 horas. Definir um tópico para usar no Facebook é especialmente importante para a primeira mensagem no seu fluxo.![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_3.png)

  2. **WhatsApp**
O envio de mensagens por um canal do WhatsApp exige que um template seja usado se você não recebeu uma mensagem de um contato nas últimas 24 horas. A configuração de template para uso no WhatsApp é especialmente importante para a primeira mensagem no seu fluxo. Leia o artigo sobre [disparo ativo no WhatsApp](/l/pt/whatsapp-business-api/disparo-ativo-no-whats-app)![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_4.png)

  3. **Respostas rápidas**
Existe a possibilidade de enviar _repostas r ápidas_ (botões de texto) para os usuários, assim facilitando a resposta e servindo como uma possibilidade de guia para sua conversa. Atualmente, você pode adicionar até 10 botões de texto por carta.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_5.png)

Fique atento! Nem todos os canais tem suporte para botões de texto. Atualmente os canais que possuem os botões são: Telegram, Weni Web Chat, Facebook Messenger e WhatsApp.
  1. **Arquivos**

Também é possível enviar _arquivos_ (anexos) para um usuário. Esses anexos podem ser fotos, vídeos, áudios e documentos. Para enviar esses anexos, basta colocar o link das mídias, ou escolher o arquivo pelo seletor de arquivos do seu computador. Atualmente, você pode adicionar até 3 anexos por carta.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_6.png)

Sempre verifique se o canal em que seu público está trabalhando tem suporte para a mídia que você quer enviar.
  1. **Avançado**

A opção _Avançados_ (Configuração avançada) permite ativarmos o envio de mensagens para todos os destinos, ou seja, enviar mensagens para todos os canais que o contato possui vínculo, e não apenas para o canal preferencial. Depois disso, o canal escolhido pelo usuário para responder virará o canal preferencial para aquela conversa.

Ou seja, caso seu canal preferencial seja o WhatsApp, ao marcar a opção de todos os destinos, o contato receberá a mensagem em todos os canais que ele possui, e caso ele responda pelo SMS, o SMS se tornará o novo canal preferencial do contato e o fluxo continuará por lá.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_7.png)

Essa configuração é útil apenas em casos específicos! Caso tenha dúvida sobre o uso, deixe preferencialmente desmarcado.

### Envie uma mensagem a outra pessoa

Podemos mandar uma mensagem para um contato ou grupo diferente do que está executando o fluxo. Essa mensagem será exibida para o contato/grupo sem afetar qualquer fluxo ou conversa que possa estar em execução para ele no momento.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_8.png)

Com isso, você ou um grupo de pessoas a sua escolha, pode receber notificações de usuários que passarem por pontos específicos dos seus fluxos.

### Etiquete uma mensagem recebida

Você pode marcar a última mensagem enviada pelo contato com uma _etiqueta_ (rótulo). Todas as mensagens rotuladas vão para um grupo de mensagens com o mesmo nome do rótulo. Você pode aprender mais sobre mensagens e rótulos no artigo de [mensagens](/l/pt/mensagens/mensagens-do-contato)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_9.png)

Que tal marcar todos os interesses nos produtos da sua empresa? Seria uma boa forma de utilizar os rótulos.

### Adicione uma URN ao contato

É possível adicionar novas URNs para o seu contato. Você pode selecionar o tipo da URN que vai ser adicionada (Phone Number, Whatsapp, SMS, Telegram, etc) e informar o novo valor, utilizando algum valor fixo ou uma variável de fluxo.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_10.png)

Seu lead chegou pelo seu site? Pergunta o número do Whatsapp dele e manda uma mensagem por lá!

### Adicionar um contato ao grupo

Você consegue adicionar o contato em um grupo estático. Caso o grupo não exista na aba de contatos, você pode criar digitando o nome que deseja para o grupo no campo de seleção.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_11.png)

Para entender um pouco mais sobre grupos estáticos, clique [aqui](https://docs.weni.ai/l/pt/grupos/grupos-est-ticos-e-din-micos).

O contato respondeu uma pesquisa de satisfação? Você pode agrupá-lo com todos que responderam à pesquisa.

### Remover contato de um grupo

Você pode remover o contato de algum [grupo estático](/l/pt/grupos/grupos-est-ticos-e-din-micos). Além disso, você tem a opção de marcar para remover o contato de todos os grupos que ele faz parte, sem distinção.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_12.png)

O contato não é mais seu cliente? Você pode removê-lo do grupo e assim bloquear as ações exclusivas para clientes.

### Atualizar o contato

Para preencher os campos do contato, basta utilizar o Update Contact. Nele, você seleciona o campo de contato que deseja atualizar, e depois disso pode inserir um valor fixo ou um resultado de fluxo. Caso o campo do contato ainda não exista, basta escrever o nome que você deseja para ele.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_13.png)

Perguntou a idade do seu contato? Você pode salvar o valor para consultar mais tarde.

### Envie um email

Aqui você pode enviar um e-mail para alguém. Esse e-mail pode ser tanto do contato que está executando o fluxo, como qualquer outro. Lembrando que o e-mail não é um canal de conversa na Weni Plataforma, ou seja, caso alguém responda o e-mail enviado, ele irá cair na caixa de entrada do e-mail configurado na organização para saber mais, visite o artigo de [configurações do projeto](/l/pt/configuracoesgerais/configura-es-gerais-da-organiza-o).

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_14.png)

Para enviar o e-mail, basta colocar o destinatário, o assunto e o corpo da mensagem nos campos correspondentes.

Deseja enviar lembretes rápidos para um contato sem gastar com SMS ou ligações? Manda um e-mail!

### Salve o resultado para este fluxo

Conseguimos simular um resultado de fluxo com essa carta de ação. Criando do zero, sem a necessidade de um input ou passar por alguma carta de decisão. Sendo assim, basta escolher o nome do resultado de fluxo, colocar o seu valor e caso queira, uma categoria. Além disso, podemos atualizar o valor de alguns resultados de fluxo já existentes.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_15.png)

Deseja salvar a quantidade de perguntas que um contato fez, mas não deseja atrelar isso diretamente a um campo de contato? A melhor forma é criando uma variável de fluxo.

### Entrar em outro fluxo

Aqui, podemos iniciar novo fluxo para o usuário. Quando o usuário entra em um novo fluxo, o fluxo em que ele estava antes (que agora pode ser chamado de fluxo pai), fica em espera até a conclusão. Enquanto isso, o usuário irá executar o fluxo novo (que agora pode ser chamado de fluxo filho) e no final da execução, retornará para o ponto de onde parou no fluxo pai. Para funcionar, basta escolher o nome do fluxo que deseja entre em opções existentes.

Quando a execução do fluxo filho é encerrada, a carta de enter a flow nos da a oportunidade de duas rotas, sendo assim a única carta de ação que utiliza esse conceito (para entender o conceito de rota, visite o artigo de cartas de decisão). Essas duas rotas possíveis, são baseadas em como o fluxo filho terminou. Caso ele tenha sido completado sem nenhum problema, o fluxo irá tomar a rota de _Completo_ e caso o fluxo filho tenha expirado, o fluxo pai utilizará a rota de _Expirado_.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_16.png)

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_17.png)

Enter a flow é uma ótima forma para organizar seus projetos.

### Iniciar outra pessoa em um fluxo

Da mesma forma que podemos mandar uma mensagem para um contato/grupo que não é o atual, nós também podemos começar um novo fluxo.
Para decidir quem vai ser iniciado pelo fluxo, podemos escolher entre três opções:
  1. Definir manualmente os contatos/grupos que serão iniciados no novo fluxo;
  2. Criar uma regra lógica (normalmente baseada em campos de contato) para filtrar os contatos que devem entrar no fluxo;
  3. Criar um novo contato, e esse contato ser iniciado no fluxo;

Depois de decidir sobre essas opções, basta selecionar um fluxo para ser iniciado. Diferentemente do _Entrar em outro fluxo_ _,_ esse card não cria opções de rota, afinal, ele não espera o fim dos fluxos filhos para continuar a execução do fluxo pai.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_18.png)

Essa carta pode ser utilizada para criar campanhas reativas, como notificar um grupo sobre a chegada de um novo integrante.

### Enviar uma mensagem do WhatsApp

O card nativo para envio de mensagens interativas no WhatsApp possibilita que os usuários utilizem de forma prática as funcionalidades disponíveis no canal, integrando essas opções em seus projetos de maneira simples.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_19.png)

Ele oferece três tipos de mensagens interativas:
  1. **Respostas rápidas**: Permite criar até 3 respostas predefinidas que os destinatários podem selecionar rapidamente.
  2. **Lista de opções**: Oferece um menu interativo com até 10 itens, cada um com título e descrição.
  3. **Solicitar localização**: Possibilita solicitar a localização do cliente final, facilitando o atendimento.

Além dessas interações, é possível incluir cabeçalhos (com mídia ou texto) e rodapés nas mensagens. A disponibilidade desses elementos varia conforme o tipo de mensagem interativa escolhida.
A utilização deste card não substitui o uso de templates (mensagens pré-aprovadas pela Meta) para disparos ativos.

### Adicione um contato a um grupo

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_20.png)

### Abrir um ticket com um agente humano

Este card é utilizado para abrir tickets de atendimento humano. Para que os atendimentos sejam direcionados ao módulo Chats, é necessário selecionar o setor (1) e a fila (2). Saiba mais sobre como configurar o [atendimento humano no módulo Chats](/l/pt/atendimento-humano/weni-chats-configurando-o-m-dulo-de-chats).

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_21.png)

### Chamar um webhook

Este card permite fazer requisições para APIs, armazenando o retorno dessas requisições em uma variável que pode ser utilizada no fluxo. Isso facilita a conexão com outros sistemas externos.

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/cartas-de-acao_22.png)

[Como fazer chamadas para sistemas externos](/l/pt/fluxos/webhook-como-fazer-chamadas-para-servidores-externos)
