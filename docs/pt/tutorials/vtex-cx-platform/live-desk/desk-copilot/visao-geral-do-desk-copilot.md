---
title: 'Desk Copilot'
createdAt: 2026-11-17T12:00:00.000Z
updatedAt: 2026-11-17T12:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: desk-copilot-overview
locale: pt
hidden: false
categoryCover: true
seeAlso:
  - "/pt/docs/tutorials/usando-o-desk-copilot-para-apoiar-atendentes-no-live-desk"
  - "/pt/docs/tutorials/visao-geral-do-live-desk"
---

O Desk Copilot ajuda atendentes humanos no [Live Desk](https://help.vtex.com/pt/docs/tutorials/visao-geral-do-live-desk) a responder a clientes com mais agilidade. Ele lê a conversa ativa, reage a cada mensagem do cliente e sugere a próxima melhor ação. O atendente humano continua no controle: ele decide se copia, edita ou envia cada sugestão.

## Como o Desk Copilot funciona

O **Desk Copilot** funciona como um projeto separado, dentro da mesma organização do seu projeto de atendimento do **VTEX CX Platform**. Esse projeto conta com os seguintes componentes:

- **Manager:** agente configurado para coordenar as sugestões e apoiar os atendentes humanos.
- **Base de conhecimento interna:** reúne informações de uso exclusivo da equipe de atendimento, que não devem ser compartilhadas diretamente com os clientes.
- **Agentes comerciais oficiais:** os mesmos agentes utilizados pelos agentes de IA para acessar funcionalidades comerciais.

Para gerar sugestões, o **Desk Copilot** analisa o contexto da conversa, incluindo mensagens de texto, áudios transcritos e arquivos compartilhados pelo cliente, como PDFs.

Você também pode utilizar [agentes personalizados](https://help.vtex.com/pt/docs/tutorials/atribuir-e-testar-agentes#atribuir-um-agente-ao-time) no Desk Copilot para estender as suas funcionalidades. Para saber como ativar e configurar o Copilot, consulte [Usando o Desk Copilot para apoiar atendentes no Live Desk](https://help.vtex.com/pt/docs/tutorials/usando-o-desk-copilot-para-apoiar-atendentes-no-live-desk).

## Tipos de sugestão

A cada mensagem do cliente, o Desk Copilot pode propor uma das seguintes ações:

- Respostas: mensagens prontas para envio, com tom adequado ao atendimento.

- Busca de produtos: resultados de buscas conversacionais apresentados em carrosséis.

- Carrinhos: carrinhos com produtos mencionados na conversa.

- Consultas de pedidos: ações para consultar informações de pedidos.

- Links de pagamento: sugestões de links para facilitar a conclusão de compras.

Para saber como usar e avaliar as sugestões no Live Desk, consulte [Usando o Desk Copilot para apoiar atendentes no Live Desk](https://help.vtex.com/pt/docs/tutorials/usando-o-desk-copilot-para-apoiar-atendentes-no-live-desk).

## Como ativar o Desk Copilot

1. No projeto desejado do VTEX CX Platform, clique em **Configurações > Live Desk**.
2. Selecione a aba **Desk Copilot**.
3. Clique em `Criar projeto Copilot`.
4. Defina o nome do projeto.

    > ⚠️ Por padrão, o nome sugerido é o mesmo do projeto de atendimento. Para facilitar a identificação, recomendamos utilizar um nome diferente ou adicionar **Copilot** ao nome original. Por exemplo: **Projeto X Copilot**.

5. Clique em `Criar`.

Após criar o projeto Desk Copilot, você será redirecionado à página **Analytics**.

## Cobrança

As conversas assistidas pelo Desk Copilot são faturadas como conversas regulares do VTEX CX Platform. Não é necessário alterar o contrato para usar a funcionalidade.

