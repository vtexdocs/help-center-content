---
title: 'Como criar um canal no Viber'
id: 4FnOuBsgb3OlRTxGFxeRWf
status: PUBLISHED
createdAt: 2025-09-15T14:06:26.972Z
updatedAt: 2025-10-28T20:11:09.732Z
publishedAt: 2025-10-28T20:11:09.732Z
firstPublishedAt: 2025-10-03T14:20:33.800Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: adding-a-viber-channel
legacySlug: como-criar-um-canal-no-viber
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

## Processo inicial de integração do canal viber

Para criar o canal, clique em **""Aplicações > Descobertas""** dentro do seu projeto:

Logo após, clique no botão de adicionar e uma janela de confirmação será aberta.

Poderá encontrar o canal em **Configurações > Canais**. Ao clicar no local indicado na imagem > Configurar, uma nova janela será aberta

O único requisito é o Token de autorização (chamado token de aplicativo pela equipe do Viber)

O processo principal consiste em aprovar a conta pública de um Viber e coletar o token do aplicativo.

## Criando uma conta no Viber

Instale o aplicativo móvel do Viber e passe pelo processo de registro do seu número de celular.

Tendo uma conta válida, acesse o painel de administração neste link: <https://partners.viber.com/login> e vincule\-o a conta com o número que foi registrado no aplicativo.

Você receberá um token de verificação no celular, confirme\-o também.

 No painel esquerdo, selecione ***""Create bot account"".***

  Preencha todos os requisitos apresentados e clique em *Criar* no final da página.

Levará alguns segundos para processar e uma nova janela será exibida com o token necessário. copie e guarde este token para o próximo passo de integração do canal com o VTEX CX Platform

## Concluir a configuração do canal

Agora volte ao processo de adição do canal, cole o token e pressione **Salvar alterações**.

Logo, irá aparecer como conectado com a URL da Webhook.

## Publique a conta

Uma etapa final é necessária na conta pública. Acesse o aplicativo do Viber no celular, abra Mais, selecione ""**Configurações""** e abra a guia ""**Meus Bots""**. Selecione a página que acabamos de criar e você verá a opção Publicar, que precisa ser ativada para que a página possa ser utilizada pelos usuários.

### Mais informações

Gostaria de saber como se informar mais sobre o que é Webhook e como usar? para mais informações, saiba mais em [Criando contatos com Webhooks externos](/pt/docs/tutorials/criando-contatos-com-webhooks-externos) e [Call Webhook: Como fazer chamadas para sistemas externos](/pt/docs/tutorials/call-webhook-como-fazer-chamadas-para-sistemas-externos).
