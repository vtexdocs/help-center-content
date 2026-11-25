---
title: 'Campos de contato'
id: 5q7gMYEvFCLdk7tYsHXB0x
status: PUBLISHED
createdAt: 2025-09-12T17:20:52.053Z
updatedAt: 2026-11-12T15:00:00.000Z
publishedAt: 2025-10-03T14:21:49.309Z
firstPublishedAt: 2025-10-03T14:21:49.309Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: contact-fields
legacySlug: campos-de-contato
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
seeAlso:
  - /pt/docs/tutorials/introducao-a-contatos
  - /pt/docs/tutorials/cartas-de-acao
  - /pt/docs/tutorials/glossario-de-variaveis
---

Campos de contato armazenam informações sobre uma pessoa que a plataforma não fornece por padrão, como a idade. Você pode salvar um valor em um fluxo de automação e usá-lo em fluxos posteriores, mensagens, grupos de contatos e campanhas.

> ⚠️ Você não precisa criar campos para informações que a plataforma já armazena, como o nome, a data de criação e a URN do contato. A URN identifica o contato em um canal, como um número de WhatsApp. Para acessar essas informações em um fluxo, use `@contact`, por exemplo, `@contact.name`. Para conferir a lista completa de variáveis disponíveis, consulte o [Glossário de variáveis](https://help.vtex.com/pt/docs/tutorials/glossario-de-variaveis).

## Criar um campo de contato

Para definir o tipo de valor aceito por um campo antes de usá-lo em um fluxo, siga estas etapas:

1. Acesse a organização e o projeto que deseja modificar na [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Contatos**.
3. Clique em `Gerenciar campos`.

    A página exibe os campos do projeto, o nome da variável de cada campo, o tipo de valor aceito e quantas vezes o campo foi utilizado.

4. Clique em `Criar campo`.
5. Em **Nome**, insira o rótulo do campo.
6. Em **Tipo de Dados**, selecione o tipo de valor que o campo armazena:
    - **Texto**
    - **Número**
    - **Data & Horário**
    - **Estado**
    - **Distrito**
    - **Divisão**
7. (Opcional) Selecione **Destaque** para exibir o campo na pré-visualização do contato.

Também é possível criar um campo de contato ao configurar um fluxo. Na carta **Atualizar o contato**, insira um nome de campo que ainda não existe. Para mais informações, consulte [Cartas de ação](https://help.vtex.com/pt/docs/tutorials/cartas-de-acao).

## Editar um campo de contato

Na página **Gerenciar campos**, clique no campo que deseja alterar. A caixa de diálogo de edição será aberta.

## Salvar o valor de um campo de contato

Para salvar um valor enquanto o contato estiver em um fluxo, use a carta **Atualizar o contato**. Selecione o campo de contato e insira um valor fixo ou um resultado do fluxo.

## Consultar o valor de um campo de contato

Para usar o valor de um campo de contato em uma mensagem ou expressão, insira `@fields.nome_do_campo` ou `@contact.fields.nome_do_campo`. Substitua `nome_do_campo` pelo nome da variável exibido na página **Gerenciar campos**. As duas expressões retornam o mesmo valor.

Por exemplo, `@fields.idade` retorna o valor do campo cujo nome de variável é `idade`.

Para mais informações sobre expressões, consulte [Introdução a expressões e variáveis](https://help.vtex.com/pt/docs/tutorials/introducao-a-expressoes-e-variaveis).

## Usar campos de contato em outras tarefas

Depois que um campo recebe um valor, você pode utilizá-lo nas seguintes tarefas:

- Direcionar um fluxo com a carta **Dividir por campo de contato**. Para mais informações, consulte [Cartas de decisão](https://help.vtex.com/pt/docs/tutorials/cartas-de-decisao).
- Definir quais contatos pertencem a um grupo. Para mais informações, consulte [Grupos estáticos e grupos dinâmicos](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos).
- Agendar um evento de campanha para alguns minutos, horas, dias ou semanas antes ou depois do valor do campo. Para mais informações, consulte [Criar uma campanha](https://help.vtex.com/pt/docs/tutorials/como-criar-uma-campanha).
- Editar o valor durante uma conversa no Live Desk, quando o departamento permitir. Para mais informações, consulte [Live Desk](https://help.vtex.com/pt/docs/tutorials/visao-geral-do-live-desk#editar-campos-personalizados-do-contato).
- Importar valores de uma planilha. Para mais informações, consulte [Importar contatos](https://help.vtex.com/pt/docs/tutorials/como-importar-contatos).

> ⚠️ Para definir um campo de contato por meio da API de contatos, primeiro crie o campo. Para mais informações, consulte [Criando contatos com Webhooks externos](https://help.vtex.com/pt/docs/tutorials/criando-contatos-com-webhooks-externos).
