---
title: 'Como criar um canal no Twitter'
id: 105ZDpGE4db4bOwN4IGjEL
status: PUBLISHED
createdAt: 2025-09-15T14:14:31.530Z
updatedAt: 2025-10-03T14:20:33.673Z
publishedAt: 2025-10-03T14:20:33.673Z
firstPublishedAt: 2025-10-03T14:20:33.673Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-a-channel-on-twitter
legacySlug: como-criar-um-canal-no-twitter
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

Para criar um bot do Twitter, primeiro você precisa [solicitar acesso às API's](https://developer.twitter.com/en/apply-for-access.html) do Twitter para mensagens diretas. O processo de inscrição é curto e você precisará explicar a finalidade do seu bot e a funcionalidade que você fornecerá.

Observe que você pode se inscrever em qualquer nível, uma conta Sandbox (Dev environments) é suficiente se você planeja fazer com que seu bot funcione com uma única conta.

Depois de receber a aprovação da sua conta de desenvolvedor, o Twitter enviará um e-mail de boas-vindas. Agora você pode criar seu aplicativo e conectá-lo.

##### Etapas

1. Seu primeiro passo é criar seu aplicativo. Você será solicitado para o nome do aplicativo, descrição e URL. Preencha\-os de acordo com a funcionalidade do bot que você está construindo.

2. Em seguida, você precisará [criar um ambiente de desenvolvimento](https://developer.twitter.com/en/account/environments) para que seu aplicativo seja executado. Você desejará criar um ambiente para a ""Account Activity API / Sandbox"". Você pode nomeá\-lo como quiser, recomendamos ""production"", certifique\-se de selecionar o aplicativo que você criou na etapa
- Esse nome deverá ser utilizado ao conectar a conta na Plataforma Weni.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/como-criar-um-canal-no-twitter_1.png)

3. Agora você precisa criar as chaves e os tokens para seu aplicativo, que serão necessários ao criar seu canal. Volte ao seu aplicativo e selecione a guia Chaves e Tokens. Clique em Regenerate para as seções Consumer API Keys e Access token \& access token secret. As chaves e tokens devem ser geradas com as permissões ""Ler, escrever e direcionar mensagens"".

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/como-criar-um-canal-no-twitter_2.png)

Verifique se sua conta está habilitada para receber mensagens diretas de qualquer pessoa. Você pode fazer isso nas configurações de segurança/privacidade do Twitter.##### Conectando na plataforma

1. Para criar o canal na plataforma, dentro do seu projeto entre em Aplicativos > Descoberta na sessão de Canais de Comunicação e adicione clicando no \+:

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/como-criar-um-canal-no-twitter_3.png)

4. Logo após clique na aba Meus aplicativos o app estará na sessão Aplicativos instalados. Preencha a página com os dados coletados anteriormente, não se esqueça de colocar o ""Environment Name"" da mesma forma que foi configurado na etapa 2\. Ao terminar de preencher clique em Submit e o seu canal estará conectado.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/integrações/como-criar-um-canal-no-twitter_4.png)

Seu canal agora está conectado, você pode testar o envio e recebimento de mensagens diretas.
