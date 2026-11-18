---
title: 'Disparo ativo no WhatsApp'
id: 20E0eUtogj84N0vf6nZeia
status: PUBLISHED
createdAt: 2025-09-15T15:27:41.354Z
updatedAt: 2026-11-13T18:56:00.000Z
publishedAt: 2025-10-03T14:20:32.448Z
firstPublishedAt: 2025-10-03T14:20:32.448Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: active-message-dispatch-on-whatsapp
legacySlug: disparo-ativo-no-whatsapp
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

O disparo ativo é quando você inicia uma conversa com um contato, por exemplo para enviar uma notificação, uma confirmação ou um acompanhamento. Isso é diferente do disparo passivo, que começa quando o contato envia a primeira mensagem.

No WhatsApp, o disparo ativo exige um modelo de mensagem. A Meta precisa aprovar cada modelo antes do envio. A VTEX CX Platform usa o mesmo processo de disparo ativo em todos os canais, mas só o WhatsApp exige um modelo de mensagem. Nos outros canais, o modelo não é necessário, e você pode enviar mais de uma mensagem.

## Antes de começar

Antes de começar, confirme que:

- O canal do WhatsApp está conectado. Para mais informações, consulte [WhatsApp: Integração com o VTEX CX Platform](https://help.vtex.com/pt/docs/tutorials/whatsapp-integracao-com-o-vtex-cx-platform).
- O modelo de mensagem que você quer enviar está aprovado pela Meta. Para criar um modelo, consulte [WhatsApp: Como criar Template Messages](https://help.vtex.com/pt/docs/tutorials/whatsapp-como-criar-template-messages).
- Seu papel permite criar fluxos. Apenas usuários com permissão de administrador, moderador ou colaborador podem criar fluxos.

## Criar um fluxo que começa com um modelo de mensagem

> ⚠️ No WhatsApp, a primeira mensagem do fluxo precisa ser um modelo de mensagem. Outros tipos de mensagem não alcançam um contato que não enviou mensagem nas últimas 24 horas.

Para criar o fluxo, siga estes passos:

1. Adicione uma carta **Atualizar contato** ao fluxo.
2. Na opção **Canal**, selecione o canal do WhatsApp. Essa opção define o canal de origem do disparo.
3. Adicione uma carta **Enviar mensagem** depois da carta **Atualizar contato**.
4. Na caixa de texto da carta **Enviar mensagem**, digite `@(“”)`.

    Essa expressão não altera a mensagem. O modelo de mensagem é selecionado na aba **WhatsApp** da mesma carta.

5. Na carta **Enviar mensagem**, clique na aba **WhatsApp**. Selecione o modelo de mensagem que você quer enviar. A aba mostra apenas os modelos aprovados pela Meta.
6. (Opcional) Adicione variáveis para personalizar a mensagem. Por exemplo, `@contact.name` insere o nome do contato.
7. (Opcional) Adicione o restante do fluxo depois da carta **Enviar mensagem**. Para o contato poder responder, adicione uma carta **Aguarde por resposta**.

## Permitir que o agente preencha variáveis no Live Desk

Se um agente do Live Desk precisar informar um valor antes do envio do modelo, configure a variável desta forma:

1. No campo da variável, na aba **WhatsApp**, informe `@trigger.params.variable_name`. Substitua `variable_name` pelo nome que deve aparecer em **Mapeamento de variáveis**. Você define esse nome no fluxo. Ele não precisa corresponder a um campo de contato.
2. Se o fluxo incluir mais de um modelo de mensagem com variáveis, repita o passo 1 para cada variável que o agente deve preencher.

Variáveis que usam outras expressões, como `@contact.name`, são preenchidas automaticamente e não aparecem para edição.

Por exemplo, um modelo chamado `retornar_contato` pode ter as variáveis `@trigger.params.contact_name` e `@trigger.params.atendente`. No Live Desk, a tela de mapeamento mostra esses campos como **Variável contact_name** e **Variável atendente**.

Para saber como o agente completa esses valores antes do envio, consulte [Utilizando o disparo ativo de fluxos](https://help.vtex.com/pt/docs/tutorials/utilizando-disparo-ativo-de-fluxos).

## Disparar o fluxo

Para enviar o fluxo aos contatos, siga estes passos:

1. Clique em `Disparar fluxo` no canto superior direito da tela.
2. Selecione o contato ou o grupo de contatos que deve receber o fluxo e envie.

## Enviar pelo módulo de Contatos

Você também pode iniciar um fluxo para um único contato no módulo **Contatos**:

1. Selecione o contato que deve receber a mensagem.
2. Clique no menu de opções no canto superior direito.
3. Clique em `Iniciar no fluxo`, selecione o fluxo e envie.

## Saiba mais

- [Whatsapp Template Messages: impedimentos e configurações](https://help.vtex.com/pt/docs/tutorials/whatsapp-template-messages-impedimentos-e-configuracoes): Saiba como resolver modelos de mensagem rejeitados ou desativados.
- [Fluxo de automação](https://help.vtex.com/pt/docs/tutorials/visao-geral-fluxo-de-automacao)
