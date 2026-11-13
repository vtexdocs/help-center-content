---
title: 'Criar uma campanha'
id: 552TQfDeoedLJoKg6RFBB3
status: PUBLISHED
createdAt: 2025-09-12T18:03:34.475Z
updatedAt: 2026-11-12T15:10:00.000Z
publishedAt: 2025-10-03T14:20:33.938Z
firstPublishedAt: 2025-10-03T14:20:33.938Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: how-to-create-a-campaign
legacySlug: como-criar-uma-campanha
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Uma campanha permite programar mensagens ou fluxos para um grupo de contatos. Cada ação é executada em um horário calculado com base em uma data armazenada no perfil do contato. Por exemplo, você pode enviar um lembrete antes da data de um compromisso ou iniciar um fluxo de acompanhamento depois da data de uma compra.

Para saber mais sobre como as campanhas funcionam e quando usá-las, consulte [Campanhas](https://help.vtex.com/pt/docs/tutorials/introducao-a-campanhas).

## Antes de começar

Antes de criar uma campanha, você deve ter:

- **Um grupo de contatos:** Os eventos da campanha se aplicam somente aos contatos do grupo selecionado. Para alcançar outro grupo, crie uma campanha separada. Para criar um grupo, consulte [Grupos estáticos e grupos dinâmicos](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos).
- **Um campo de data e horário:** A programação do evento usa uma data armazenada no perfil de cada contato. Você pode usar **Created On**, que armazena a data em que o contato foi criado. Para usar outra data, crie um campo de contato com o tipo de dados **Data & Horário**. Consulte [Campos de contato](https://help.vtex.com/pt/docs/tutorials/campos-de-contato).
- **Um fluxo:** Este requisito se aplica somente se o evento iniciar um fluxo em vez de enviar uma mensagem.

## Criar a campanha

Para criar uma campanha, siga estes passos:

1. Em **Contatos**, acesse **Campanhas**.
2. Clique em `Criar campanha`.
3. Em **Nome**, insira um nome para a campanha.
4. Em **Grupo**, selecione o grupo de contatos.
5. Clique em `Criar`.

A página da campanha é aberta e exibe o nome da campanha e o grupo selecionado. Uma campanha não executa nenhuma ação até que você adicione um evento.

## Adicionar um evento

Um evento é uma mensagem ou um fluxo programado em relação a uma data no perfil do contato. Uma campanha pode ter vários eventos, cada um com sua própria ação e programação. Por exemplo, um evento pode enviar um lembrete 1 dia antes de uma data armazenada, enquanto outro inicia um fluxo 2 dias depois dessa data.

Para adicionar um evento, siga estes passos:

1. Na página da campanha, clique em `Adicionar evento`.

    O diálogo é aberto com **Enviar uma mensagem** selecionado. A programação padrão é de 15 dias depois de **Created On**, com entrega **durante a mesma hora**.

2. Selecione **Enviar uma mensagem** ou **Começar um fluxo**.
    - Se você selecionar **Enviar uma mensagem**, insira a mensagem. Você pode personalizá-la com uma variável de contato, como `@contact.name`.
    - Se você selecionar **Começar um fluxo**, selecione o fluxo.
3. Em **Se o contato já está ativo em um fluxo**, selecione como a campanha deve processar esse contato. Em eventos de mensagem, **Pare e envie a mensagem** interrompe o fluxo atual do contato antes de enviar a mensagem.
4. Defina quando o evento ocorre, em relação a um campo de contato:
    - Insira o período e selecione a unidade: minutos, horas, dias ou semanas.
    - Selecione se o evento ocorre antes ou depois da data armazenada no campo de contato.
    - Selecione o campo de contato que contém a data de referência. **Created On** é a data em que o contato foi criado.
5. Em **Entregue**, selecione o horário de entrega. A opção **durante a mesma hora** executa o evento durante a mesma hora da data e do horário armazenados no campo de contato.
6. Clique em `Adicionar evento`.

O evento é adicionado à campanha e executado para cada contato do grupo de acordo com a programação definida. Para programar outra ação, clique em `Adicionar evento` e repita o procedimento.

## Saiba mais

Para alterar um evento depois de adicioná-lo, consulte:

- [Editar eventos](https://help.vtex.com/pt/docs/tutorials/modificando-eventos)
