---
title: 'Shopping Assistant'
createdAt: 2026-11-12T18:32:00.000Z
updatedAt: 2026-11-12T22:40:00.000Z
contentType: tutorial
productTeam: VTEX CX Platform
slugEN: shopping-assistant-overview
locale: pt
categoryCover: true
seeAlso:
  - /pt/docs/tutorials/configurar-o-shopping-assistant
  - /pt/docs/tutorials/shopping-assistant-perguntas-sugeridas
---

O **Shopping Assistant** é o canal de webchat do VTEX CX Platform para atender os visitantes da loja com um agente de inteligência artificial (IA). Ele permite levar a experiência de commerce conversacional ao site para ajudar clientes a tirar dúvidas e encontrar produtos durante a compra.

O chat é exibido em um widget que pode ser personalizado e instalado no site por meio de um script gerado pelo VTEX CX Platform.

## Principais recursos

Com o Shopping Assistant, você pode:

- Personalizar o título, as mensagens, a cor, o avatar e os estilos do widget.
- Exibir o chat como uma janela flutuante ou incorporá-lo à página da loja.
- Permitir que o cliente expanda o chat para tela cheia.
- Exibir perguntas sugeridas por IA nas páginas de produto para facilitar o início da conversa.
- Permitir o envio de mensagens de voz e imagens.
- Preservar o histórico das conversas entre as sessões do cliente.
- Definir quando uma conversa deve ser reiniciada por inatividade.
- Permitir que o agente redirecione o cliente para outra página quando enviar um link. Esse recurso está em beta.
- Adicionar produtos sugeridos pela IA ao carrinho nativo da loja. Esse recurso está em beta.
- Permitir que o cliente informe a quantidade no card de produto da conversa e adicione essa quantidade ao carrinho em uma única ação.

As funcionalidades exibidas no chat dependem das preferências definidas na configuração do canal.

## Experiência do cliente

Depois que o script é instalado, o widget do Shopping Assistant fica disponível nas páginas configuradas da loja. O cliente pode abrir o chat e conversar com o agente de IA sem sair do site.

Nas páginas de produto, o Shopping Assistant pode exibir até três perguntas sugeridas com base nas informações publicadas sobre o produto, como nome, descrição, marca e especificações técnicas. Ao selecionar uma pergunta, o cliente abre o chat e envia a mensagem automaticamente.

A qualidade das perguntas sugeridas depende da qualidade das informações do catálogo. Descrições completas e especificações bem preenchidas ajudam a gerar perguntas mais relevantes.

Quando o agente mostra produtos recomendados ou do catálogo na conversa, cada card de produto exibe `-`, a quantidade e `+`. O cliente pode informar a quantidade desejada, e essa quantidade é adicionada ao carrinho em uma única ação. Isso ajuda clientes que compram várias unidades, como em operações B2B, supermercados e pedidos em volume. O controle de quantidade funciona com FastStore e Store Framework e está incluído no Shopping Assistant sem custo adicional.

## Configurar o Shopping Assistant

Para disponibilizar o Shopping Assistant na loja, você precisa adicionar o aplicativo ao projeto, personalizar o widget, definir suas preferências e instalar o script no site. Para ver as instruções, consulte [Configurar o Shopping Assistant](https://help.vtex.com/pt/docs/tutorials/configurar-o-shopping-assistant).

Para entender como as perguntas são geradas e como habilitá-las ou desabilitá-las, consulte [Shopping Assistant: perguntas sugeridas](https://help.vtex.com/pt/docs/tutorials/shopping-assistant-perguntas-sugeridas).
