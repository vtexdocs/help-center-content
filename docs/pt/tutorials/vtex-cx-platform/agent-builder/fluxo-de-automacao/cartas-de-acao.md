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

Nesse artigo, vamos explicar sobre as cartas que existem e o que você pode fazer com cada uma.

- [Enviar uma mensagem ao contato](#enviar-uma-mensagem-ao-contato)
- [Enviar uma mensagem a outra pessoa](#enviar-uma-mensagem-a-outra-pessoa)
- [Etiquetar uma mensagem recebida](#etiquetar-uma-mensagem-recebida)
- [Adicionar uma URN ao contato](#adicionar-uma-urn-ao-contato)
- [Remover contato de um grupo](#remover-contato-de-um-grupo)
- [Atualizar o contato](#atualizar-o-contato)
- [Enviar um email](#enviar-um-email)
- [Salvar o resultado para este fluxo](#salvar-o-resultado-para-este-fluxo)
- [Entrar em outro fluxo](#entrar-em-outro-fluxo)
- [Iniciar outra pessoa em um fluxo](#iniciar-outra-pessoa-em-um-fluxo)
- [Enviar uma mensagem do WhatsApp](#enviar-uma-mensagem-do-whatsapp)
- [Adicionar um contato ao grupo](#adicionar-um-contato-ao-grupo)
- [Abrir um ticket com um agente humano](#abrir-um-ticket-com-um-agente-humano)
- [Chamar um webhook](#chamar-um-webhook)

## Enviar uma mensagem ao contato

A carta de ação mais conhecida e mais utilizada da plataforma. Sua função é a de mandar uma mensagem para o contato. Essa mensagem será recebida independentemente do canal que o usuário está conversando, basta escrevê-la na caixa de texto.

- **Facebook**
O envio de mensagens em massa por um canal do Facebook exige que um tópico seja especificado se o usuário não tiver enviado uma mensagem nas últimas 24 horas. Definir um tópico para usar no Facebook é especialmente importante para a primeira mensagem no seu fluxo.

- **WhatsApp**
O envio de mensagens por um canal do WhatsApp exige que um template seja usado se você não recebeu uma mensagem de um contato nas últimas 24 horas. A configuração de template para uso no WhatsApp é especialmente importante para a primeira mensagem no seu fluxo. Leia o artigo sobre [disparo ativo no WhatsApp](https://help.vtex.com/pt/docs/tutorials/disparo-ativo-no-whatsapp)

- **Respostas rápidas**
Existe a possibilidade de enviar _respostas rápidas_ (botões de texto) para os usuários, assim facilitando a resposta e servindo como uma possibilidade de guia para sua conversa. Atualmente, você pode adicionar até 10 botões de texto por carta.

Fique atento! Nem todos os canais têm suporte para botões de texto. Atualmente os canais que possuem os botões são: Telegram, VTEX CX Platform Web Chat, Facebook Messenger e WhatsApp.

- **Arquivos**

Também é possível enviar _arquivos_ (anexos) para um usuário. Esses anexos podem ser fotos, vídeos, áudios e documentos. Para enviar esses anexos, basta colocar o link das mídias, ou escolher o arquivo pelo seletor de arquivos do seu computador. Atualmente, você pode adicionar até 3 anexos por carta.

Sempre verifique se o canal em que seu público está trabalhando tem suporte para a mídia que você quer enviar.
  
- **Avançado**

A opção _Avançados_ (Configuração avançada) permite ativarmos o envio de mensagens para todos os destinos, ou seja, enviar mensagens para todos os canais que o contato possui vínculo, e não apenas para o canal preferencial. Depois disso, o canal escolhido pelo usuário para responder virará o canal preferencial para aquela conversa.

Ou seja, caso seu canal preferencial seja o WhatsApp, ao marcar a opção de todos os destinos, o contato receberá a mensagem em todos os canais que ele possui, e caso ele responda pelo SMS, o SMS se tornará o novo canal preferencial do contato e o fluxo continuará por lá.

Essa configuração é útil apenas em casos específicos! Caso tenha dúvida sobre o uso, deixe preferencialmente desmarcado.

## Enviar uma mensagem a outra pessoa

Podemos mandar uma mensagem para um contato ou grupo diferente do que está executando o fluxo. Essa mensagem será exibida para o contato/grupo sem afetar qualquer fluxo ou conversa que possa estar em execução para ele no momento.

Com isso, você ou um grupo de pessoas a sua escolha, pode receber notificações de usuários que passarem por pontos específicos dos seus fluxos.

## Etiquetar uma mensagem recebida

Você pode marcar a última mensagem enviada pelo contato com uma _etiqueta_ (rótulo). Todas as mensagens rotuladas vão para um grupo de mensagens com o mesmo nome do rótulo. Você pode aprender mais sobre mensagens e rótulos no artigo de [mensagens](https://help.vtex.com/pt/docs/tutorials/disparo-ativo-no-whatsapp)

Que tal marcar todos os interesses nos produtos da sua empresa? Seria uma boa forma de utilizar os rótulos.

## Adicionar uma URN ao contato

É possível adicionar novas URNs para o seu contato. Você pode selecionar o tipo da URN que vai ser adicionada (Phone Number, Whatsapp, SMS, Telegram, etc) e informar o novo valor, utilizando algum valor fixo ou uma variável de fluxo.

Se o lead chegou pelo seu site, você pode solicitar o número do WhatsApp e enviar uma mensagem por esse canal.

## Adicionar um contato ao grupo

Você consegue adicionar o contato em um grupo estático. Caso o grupo não exista na aba de contatos, você pode criar digitando o nome que deseja para o grupo no campo de seleção.

Para entender um pouco mais sobre grupos estáticos, clique [aqui](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos).

O contato respondeu uma pesquisa de satisfação? Você pode agrupá-lo com todos que responderam à pesquisa.

## Remover contato de um grupo

Você pode remover o contato de algum [grupo estático](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos). Além disso, você tem a opção de marcar para remover o contato de todos os grupos que ele faz parte, sem distinção.

O contato não é mais seu cliente? Você pode removê-lo do grupo e assim bloquear as ações exclusivas para clientes.

## Atualizar o contato

Para preencher os campos do contato, basta utilizar o Update Contact. Nele, você seleciona o campo de contato que deseja atualizar, e depois disso pode inserir um valor fixo ou um resultado de fluxo. Caso o campo do contato ainda não exista, basta escrever o nome que você deseja para ele.

Perguntou a idade do seu contato? Você pode salvar o valor para consultar mais tarde.

## Enviar um email

Aqui você pode enviar um e-mail para alguém. Esse e-mail pode ser tanto do contato que está executando o fluxo, como qualquer outro. Lembrando que o e-mail não é um canal de conversa no VTEX CX Platform, ou seja, caso alguém responda o e-mail enviado, ele irá cair na caixa de entrada do e-mail configurado na organização para saber mais, visite o artigo de [configurações do projeto](https://help.vtex.com/pt/docs/tutorials/configuracoes-gerais-do-projeto).

Para enviar o e-mail, basta colocar o destinatário, o assunto e o corpo da mensagem nos campos correspondentes.

Você pode usar este cartão para enviar lembretes rápidos a um contato sem gastar com SMS ou ligações.

## Salvar o resultado para este fluxo

Conseguimos simular um resultado de fluxo com essa carta de ação. Criando do zero, sem a necessidade de um input ou passar por alguma carta de decisão. Sendo assim, basta escolher o nome do resultado de fluxo, colocar o seu valor e caso queira, uma categoria. Além disso, podemos atualizar o valor de alguns resultados de fluxo já existentes.

Deseja salvar a quantidade de perguntas que um contato fez, mas não deseja atrelar isso diretamente a um campo de contato? A melhor forma é criando uma variável de fluxo.

## Entrar em outro fluxo

Aqui, podemos iniciar novo fluxo para o usuário. Quando o usuário entra em um novo fluxo, o fluxo em que ele estava antes (que agora pode ser chamado de fluxo pai), fica em espera até a conclusão. Enquanto isso, o usuário irá executar o fluxo novo (que agora pode ser chamado de fluxo filho) e no final da execução, retornará para o ponto de onde parou no fluxo pai. Para funcionar, basta escolher o nome do fluxo que deseja entre em opções existentes.

Quando a execução do fluxo filho é encerrada, a carta de enter a flow nos dá a oportunidade de duas rotas, sendo assim a única carta de ação que utiliza esse conceito (para entender o conceito de rota, visite o artigo de cartas de decisão). Essas duas rotas possíveis, são baseadas em como o fluxo filho terminou. Caso ele tenha sido completado sem nenhum problema, o fluxo irá tomar a rota de _Completo_ e caso o fluxo filho tenha expirado, o fluxo pai utilizará a rota de _Expirado_.

Enter a flow é uma ótima forma para organizar seus projetos.

## Iniciar outra pessoa em um fluxo

Da mesma forma que podemos mandar uma mensagem para um contato/grupo que não é o atual, nós também podemos começar um novo fluxo.
Para decidir quem vai ser iniciado pelo fluxo, podemos escolher entre três opções:

  1. Definir manualmente os contatos/grupos que serão iniciados no novo fluxo;
  2. Criar uma regra lógica (normalmente baseada em campos de contato) para filtrar os contatos que devem entrar no fluxo;
  3. Criar um novo contato, e esse contato ser iniciado no fluxo;

Depois de decidir sobre essas opções, basta selecionar um fluxo para ser iniciado. Diferentemente do _Entrar em outro fluxo_, esse card não cria opções de rota, afinal, ele não espera o fim dos fluxos filhos para continuar a execução do fluxo pai.

Essa carta pode ser utilizada para criar campanhas reativas, como notificar um grupo sobre a chegada de um novo integrante.

## Enviar uma mensagem do WhatsApp

O card nativo para envio de mensagens interativas no WhatsApp possibilita que os usuários utilizem de forma prática as funcionalidades disponíveis no canal, integrando essas opções em seus projetos de maneira simples.

Ele oferece três tipos de mensagens interativas:

  1. **Respostas rápidas**: Permite criar até 3 respostas predefinidas que os destinatários podem selecionar rapidamente.
  2. **Lista de opções**: Oferece um menu interativo com até 10 itens, cada um com título e descrição.
  3. **Solicitar localização**: Possibilita solicitar a localização do cliente final, facilitando o atendimento.

Além dessas interações, é possível incluir cabeçalhos (com mídia ou texto) e rodapés nas mensagens. A disponibilidade desses elementos varia conforme o tipo de mensagem interativa escolhida.
A utilização deste card não substitui o uso de templates (mensagens pré-aprovadas pela Meta) para disparos ativos.

## Abrir um ticket com um agente humano

Este card é utilizado para abrir tickets de atendimento humano. Para que os atendimentos sejam direcionados ao Live Desk, é necessário selecionar o setor (1) e a fila (2). Saiba mais sobre como configurar o [atendimento humano no módulo Live Desk](https://help.vtex.com/pt/docs/tutorials/dashboard-do-live-desk).

## Chamar um webhook

Este card permite fazer requisições para APIs, armazenando o retorno dessas requisições em uma variável que pode ser utilizada no fluxo. Isso facilita a conexão com outros sistemas externos.

[Como fazer chamadas para sistemas externos](https://help.vtex.com/pt/docs/tutorials/call-webhook-como-fazer-chamadas-para-sistemas-externos)
