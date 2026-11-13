---
title: 'Cartas de ação'
id: 5TQ44l4pp84PPWdnWdg3JN
status: PUBLISHED
createdAt: 2025-09-16T16:43:29.253Z
updatedAt: 2026-11-13T14:00:00.000Z
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

Uma carta de ação executa um comando em um [fluxo de automação](https://help.vtex.com/pt/docs/tutorials/visao-geral-fluxo-de-automacao), como enviar uma mensagem, atualizar um contato ou abrir um ticket. Use a lista abaixo para abrir a descrição de uma carta enquanto você monta um fluxo.

- [Enviar uma mensagem ao contato](#enviar-uma-mensagem-ao-contato)
- [Enviar uma mensagem a outra pessoa](#enviar-uma-mensagem-a-outra-pessoa)
- [Etiquetar uma mensagem recebida](#etiquetar-uma-mensagem-recebida)
- [Adicionar uma URN ao contato](#adicionar-uma-urn-ao-contato)
- [Adicionar um contato ao grupo](#adicionar-um-contato-ao-grupo)
- [Remover contato de um grupo](#remover-contato-de-um-grupo)
- [Atualizar o contato](#atualizar-o-contato)
- [Enviar um e-mail](#enviar-um-e-mail)
- [Salvar o resultado para este fluxo](#salvar-o-resultado-para-este-fluxo)
- [Entrar em outro fluxo](#entrar-em-outro-fluxo)
- [Iniciar outra pessoa em um fluxo](#iniciar-outra-pessoa-em-um-fluxo)
- [Enviar uma mensagem do WhatsApp](#enviar-uma-mensagem-do-whatsapp)
- [Abrir um ticket com um agente humano](#abrir-um-ticket-com-um-agente-humano)
- [Chamar um webhook](#chamar-um-webhook)

## Enviar uma mensagem ao contato

Esta carta envia uma mensagem ao contato na conversa atual. O contato recebe a mensagem no canal que está usando. Escreva a mensagem na caixa de texto.

### Facebook

Uma mensagem em massa em um canal do Facebook precisa de um tópico quando o contato não enviou uma mensagem nas últimas 24 horas. Defina um tópico para a primeira mensagem do fluxo.

### WhatsApp

Uma mensagem em um canal do WhatsApp precisa de um template quando você não recebeu uma mensagem do contato nas últimas 24 horas. Defina um template para a primeira mensagem do fluxo. Para saber mais, consulte [Disparo Ativo no WhatsApp](https://help.vtex.com/pt/docs/tutorials/disparo-ativo-no-whatsapp).

### Respostas rápidas

Respostas rápidas são botões de texto que orientam o próximo passo da conversa. Você pode adicionar até 10 botões de texto nesta carta.

> ⚠️ Os botões de texto estão disponíveis no Telegram, no canal Web, no Facebook Messenger e no WhatsApp.

### Anexos

Você pode enviar até 3 anexos nesta carta: fotos, vídeos, áudios ou documentos. Informe o link da mídia ou selecione o arquivo no computador. Para consultar as etapas de upload e os limites de tamanho, consulte [Adicionar mídias](https://help.vtex.com/pt/docs/tutorials/adicionando-midias-ao-cartao-de-enviar-mensagem).

> ⚠️ Confirme que o canal do contato aceita a mídia antes de enviá-la.

### Todos os destinos

Em **Avançado**, você pode enviar a mensagem para todos os canais vinculados ao contato, e não apenas para o canal preferencial. O canal que o contato usar para responder passa a ser o canal preferencial, e o fluxo continua nesse canal.

Por exemplo, se o canal preferencial for o WhatsApp e você enviar a mensagem para todos os destinos, o contato a recebe em todos os canais vinculados. Se o contato responder por SMS, o SMS passa a ser o canal preferencial.

> ⚠️ Envie a mensagem para todos os destinos apenas quando o contato precisar recebê-la em todos os canais vinculados. Caso contrário, deixe a opção desmarcada.

## Enviar uma mensagem a outra pessoa

Esta carta envia uma mensagem para um contato ou grupo diferente daquele que está executando o fluxo. O destinatário vê a mensagem. A carta não altera um fluxo ou uma conversa que já esteja em execução para esse destinatário.

Use esta carta quando você ou um grupo precisarem ser avisados de que um contato chegou a um ponto específico do fluxo.

## Etiquetar uma mensagem recebida

Esta carta aplica uma etiqueta à última mensagem enviada pelo contato. As mensagens etiquetadas ficam reunidas em um grupo de mensagens com o mesmo nome da etiqueta.

Por exemplo, etiquete uma mensagem quando o contato demonstrar interesse em um produto.

## Adicionar uma URN ao contato

Esta carta adiciona uma URN ao contato. A URN identifica o contato em um canal, como um número de telefone ou um número de WhatsApp. Selecione o tipo de URN, como telefone, WhatsApp, SMS ou Telegram, e informe um valor fixo ou uma variável de fluxo.

> ⚠️ Inclua o código do país ao adicionar ou alterar um número de telefone ou de WhatsApp.

Se o contato iniciou a conversa no site, peça o número de WhatsApp, adicione esse número como URN e continue a conversa no WhatsApp.

## Adicionar um contato ao grupo

Esta carta adiciona o contato a um [grupo estático](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos). Se o grupo ainda não existir na página Contatos, insira o nome do grupo no campo de seleção para criá-lo.

Por exemplo, depois que um contato concluir uma pesquisa de satisfação, adicione esse contato a um grupo com os outros contatos que responderam.

## Remover contato de um grupo

Esta carta remove o contato de um [grupo estático](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos). Você pode remover o contato de um grupo ou de todos os grupos dos quais participa.

Por exemplo, quando um contato deixa de ser cliente, remova-o desse grupo para que as ações limitadas ao grupo não o incluam mais.

## Atualizar o contato

Esta carta atualiza um [campo de contato](https://help.vtex.com/pt/docs/tutorials/campos-de-contato). Selecione o campo e informe um valor fixo ou um resultado de fluxo. Se o campo ainda não existir, informe um nome para criá-lo.

Por exemplo, quando você perguntar a idade do contato, salve a resposta em um campo de contato para um fluxo posterior usar.

## Enviar um e-mail

Esta carta envia um e-mail para o contato que está executando o fluxo ou para outro destinatário. Informe o destinatário, o assunto e o corpo da mensagem.

O e-mail não é um canal de conversa na VTEX CX Platform. Se o destinatário responder, a resposta vai para a caixa de entrada do e-mail configurado na organização.

Use esta carta para enviar um lembrete por e-mail, em vez de SMS ou ligação.

## Salvar o resultado para este fluxo

Esta carta cria um [resultado de fluxo](https://help.vtex.com/pt/docs/tutorials/cartas-de-decisao#resultados-de-fluxo) sem esperar um input ou uma carta de decisão. Informe o nome e o valor do resultado. Você também pode informar uma categoria ou atualizar o valor de um resultado que já existe.

Por exemplo, salve quantas perguntas um contato fez sem guardar essa contagem em um campo de contato.

## Entrar em outro fluxo

Esta carta inicia outro fluxo para o contato na conversa atual. O fluxo atual, o fluxo pai, espera enquanto o contato executa o novo fluxo, o fluxo filho. Quando o fluxo filho termina, o contato volta ao mesmo ponto do fluxo pai. Selecione o fluxo na lista.

Esta é a única carta de ação que cria [rotas](https://help.vtex.com/pt/docs/tutorials/cartas-de-decisao). A rota depende de como o fluxo filho termina:

- **Completo:** O fluxo filho terminou.
- **Expirado:** O fluxo filho expirou.

## Iniciar outra pessoa em um fluxo

Esta carta inicia um fluxo para um contato ou grupo que não está executando o fluxo atual. O fluxo atual não espera esse fluxo terminar, e esta carta não cria rotas.

Escolha quem entra no fluxo:

- Selecione os contatos ou os grupos.
- Crie uma regra, em geral baseada em campos de contato, que filtre quais contatos entram.
- Crie um contato e inicie esse contato no fluxo.

Depois de escolher quem entra, selecione o fluxo a ser iniciado.

Por exemplo, use esta carta para avisar um grupo quando um novo integrante entra.

## Enviar uma mensagem do WhatsApp

Esta carta envia uma mensagem interativa no WhatsApp. Ela não substitui um template aprovado pela Meta quando a empresa inicia a conversa. Para configurar a carta, consulte [Cartão de mensagem do WhatsApp](https://help.vtex.com/pt/docs/tutorials/cartao-de-mensagem-do-whatsapp).

A carta oferece estas mensagens interativas:

- **Respostas rápidas:** Até 3 respostas predefinidas que o contato pode selecionar.
- **Lista de opções:** Um menu de até 10 itens. Cada item tem um título e uma descrição.
- **Solicitar localização:** Uma solicitação da localização do contato.

Conforme o tipo de mensagem, você também pode adicionar um cabeçalho, com mídia ou texto, e um rodapé.

## Abrir um ticket com um agente humano

Esta carta abre um ticket para que um agente humano continue a conversa no Live Desk. Selecione o setor e a fila que recebem o ticket. Para configurar setores e filas, consulte [Configurar o Live Desk](https://help.vtex.com/pt/docs/tutorials/configurar-o-live-desk).

## Chamar um webhook

Esta carta envia uma requisição de API e guarda a resposta em uma variável que você pode usar depois no fluxo. Use a carta para conectar o fluxo a um sistema externo.
