---
title: 'Como criar um canal no Telegram'
id: 2HpxHtgeLai6EpgEFxQL2p
status: PUBLISHED
createdAt: 2025-09-15T14:59:37.246Z
updatedAt: 2025-10-03T14:20:32.736Z
publishedAt: 2025-10-03T14:20:32.736Z
firstPublishedAt: 2025-10-03T14:20:32.736Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-a-telegram-channel
legacySlug: como-criar-um-canal-no-telegram
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Para conectar o seu chatbot com o Telegram, siga estes passos:

## Converse com o BotFather

O BotFather é um chatbot que cria e gerencia outros chatbots para o Telegram. Para encontrá-lo, procure por @BotFather na barra de pesquisa do seu Telegram.

## Crie um novo chatbot com o BotFather

Assim que iniciar a conversa com o BotFather, envie a mensagem **/newbot** para criar um novo chatbot. Em seguida escolha um nome e um Username (os usernames devem sempre acabar com “\_bot”, Ex. test\_bot).

## Receba o Token de acesso

Pronto! Você criou seu novo chatbot e já recebeu o seu token! Copie e guarde ele para usarmos no VTEX Agentic CX Platform.

## Cadastrando o Telegram na plataforma

1. Com o token em mãos, agora você já pode realizar a integração com o Telegram dentro do seu projeto.
2. Localize o projeto ao qual você deseja integrar.
3. Na barra lateral, clique em **Canais** (em **Configurações**).
4. Selecione a opção ""Telegram"" e adicione o canal ao seu projeto.
5. Após adicionado, vá até a aba de **Canais** e clique no ícone do Telegram para adicionar o *token* que foi adquirido no passo anterior pelo **Botfather** e clique em **""validar""**

6. Tudo pronto! O canal gerado terá o mesmo nome do bot criado.

## Habilitando os gatilhos

O bot do Telegram exibe um botão ""Começar"" quando você interage com ele pela primeira vez:

Para que o botão inicie uma nova conversa ao ser clicado, é preciso configurar o [gatilho correspondente](/pt/docs/tutorials/tipos-de-gatilho#iniciar_um_fluxo_quando_uma_conversa_for_iniciada_por_um_contato) informando o nome do canal do Telegram e o fluxo desejado.

Como essa modalidade de gatilho funciona apenas no primeiro contato, para que haja interações em fluxos subsequentes, é preciso ter pelo menos mais um gatilho configurado, como o que [captura mensagens não tratadas por outro fluxo](/pt/docs/tutorials/tipos-de-gatilho#iniciar_um_fluxo_depois_de_receber_uma_mensagem_n_o_tratada_em_outro_lugar) .
