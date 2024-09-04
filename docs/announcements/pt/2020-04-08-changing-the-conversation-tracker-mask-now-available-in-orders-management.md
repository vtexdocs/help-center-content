---
title: 'Alteração da máscara do Conversation Tracker agora disponível no Gerenciamento de Pedidos'
id: 4rjAD05fBp6zVeIJL7I6TY
status: CHANGED
createdAt: 2020-04-08T16:29:31.816Z
updatedAt: 2020-11-27T19:39:47.532Z
publishedAt: 2020-04-10T16:36:23.095Z
contentType: updates
productTeam: Post-purchase
author: 0QBQws7rk0t5Mnu8fgfUv
slug: alteracao-da-mascara-do-conversation-tracker-agora-disponivel-no-gerenciamento-de-pedidos
locale: pt
legacySlug: alteracao-da-mascara-do-conversation-tracker-agora-disponivel-no-gerenciamento-de-pedidos
announcementImageID: ''
announcementSynopsisPT: 'Agora é possível alterar a máscara do Conversation Tracker (modo Soft e Hard) pelo módulo de Gerenciamento de Pedidos.'
---

O [Conversation Tracker](https://help.vtex.com/pt/tutorial/conversation-tracker--tutorials_195) é utilizado para unificar toda a comunicação feita com um cliente durante o fluxo de um pedido. Estes e-mails, que também incluem as mensagens enviadas para o e-mail do cliente por qualquer outro sistema integrado, são registrados na linha do tempo do pedido em questão. O Conversation Tracker pode ter duas configurações de máscara:

**Hard** - cria um alias (e-mail alternativo) não legível para evitar a identificação do endereço de e-mail do seu cliente por sistemas externos.

**Soft** - cria um alias de menor complexidade, que pode ser lido no OMS, e JSON do pedido.

**Todas as lojas já vem com a configuração Hard como padrão**.

## O que mudou?
 
Agora é possível mudar entre o modo Hard e Soft do Conversation Tracker acessando o módulo de Gerenciamento de Pedidos do seu Admin. Antes essa configuração estava disponível somente através do Master Data.

>⚠️ **Atenção:** Se possível, recomendamos manter sua máscara no modo Hard para a proteção de dados sensíveis dos seus clientes (como o seu e-mail).

## Por que realizamos esta mudança?

Algumas lojas precisavam que a configuração estivesse no modo Soft para conseguir integrar sua loja VTEX com alguns ERPs e outros sistemas externos. Esta mudança visa simplificar a alteração dessa configuração nesses casos.

## Isso vai afetar minha loja?

Esta opção está disponível para todas as lojas, porém recomendamos que qualquer mudança de configuração seja feita __apenas se realmente necessária__. A configuração padrão para todas as lojas continuará sendo o modo Hard e só mudará caso você decida alterá-la.

## Como alterar?

A alteração pode ser feita acessando o menu *Pedidos > Gerenciamento de Pedidos > Configurações* e escolhendo a opção desejada em **Tipo de Máscara de Conversa**.

É possível verificar o funcionamento da configuração criando um pedido teste. Acessando os detalhes do pedido em *Pedidos > Gerenciamento de Pedidos*, você poderá passar o mouse em cima de um endereço de e-mail registrado na *Linha do tempo* para ver qual alias foi aplicado (Soft ou Hard).

Para saber mais, confira nossa documentação sobre o [Conversation Tracker](https://help.vtex.com/pt/tutorial/conversation-tracker--tutorials_195).
