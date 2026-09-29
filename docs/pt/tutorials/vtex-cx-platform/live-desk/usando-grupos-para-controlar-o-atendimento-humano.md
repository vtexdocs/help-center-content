---
title: 'Usando grupos para controlar o atendimento humano'
createdAt: 2025-09-12T16:48:55.585Z
updatedAt: 2026-07-10T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: using-groups-to-organize-human-attendance
locale: pt
hidden: false
---

Quando um contato inicia um atendimento humano no [Live Desk](https://help.vtex.com/pt/docs/tutorials/visao-geral-do-live-desk), o chatbot continua ativo em segundo plano. Se nada for feito, as mensagens automáticas configuradas nos disparadores podem ser acionadas durante a conversa e interromper o atendimento. Para evitar esse conflito, use um **grupo de controle**: um [grupo estático](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos) que reúne todos os contatos que estão em atendimento humano e que deve ser ignorado pelos disparadores.

> ⚠️ Caso os contatos não sejam adicionados a um grupo de controle, o chatbot irá conflitar e interromper o atendimento humano, enviando as mensagens padrão configuradas no seu ambiente.

Neste artigo você aprenderá a:

- [Criar o grupo de controle](#criar-o-grupo-de-controle)
- [Adicionar contatos ao grupo de controle](#adicionar-contatos-ao-grupo-de-controle)
- [Ignorar o grupo de controle nos disparadores](#ignorar-o-grupo-de-controle-nos-disparadores)
- [Remover contatos do grupo de controle](#remover-contatos-do-grupo-de-controle)
- [Enviar campos customizados no ticket](#enviar-campos-customizados-no-ticket)

## Criar o grupo de controle

O grupo de controle é um grupo estático, ou seja, os contatos são adicionados e removidos manualmente ou por meio de cartas de ação nos fluxos. Para criá-lo, siga as etapas abaixo:

1. Acesse a organização e o projeto que deseja modificar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Contatos**.
3. Clique em `Criar Grupo`.
4. No pop-up, insira o nome do grupo (por exemplo, _Atendimento Humano_) e clique em `Criar`.

O grupo passará a ser listado junto às demais categorias de contatos no menu lateral. Para mais detalhes, consulte o artigo [Grupos estáticos e grupos dinâmicos](https://help.vtex.com/pt/docs/tutorials/grupos-estaticos).

## Adicionar contatos ao grupo de controle

O contato deve entrar no grupo de controle no mesmo [fluxo de automação](https://help.vtex.com/pt/docs/tutorials/visao-geral-fluxo-de-automacao) em que o ticket de atendimento humano é aberto. Assim, ele passa a ser controlado quando a conversa é direcionada a um agente.

No fluxo em que você utiliza a carta de ação **Abrir um ticket com um agente humano**, adicione também a carta de ação **Adicionar um contato ao grupo** e selecione o grupo _Atendimento Humano_. Para isso, siga as etapas abaixo:

1. Acesse a organização e o projeto que deseja modificar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Fluxo de automação**.
3. Clique no nome do fluxo responsável por abrir o ticket.
4. Dentro do fluxo, clique no bloco inicial.
5. No pop-up, em **Quando um contato chegar a esse ponto do fluxo...**, selecione a opção **Adicione o contato a um grupo**.
6. Em **Selecione os grupos para adicionar o contato**, selecione o grupo `Atendimento Humano`.
7. Clique em **Confirmar**.
8. Posicione esse novo bloco junto ao bloco **Abrir um ticket com um agente humano**, de modo que o contato entre no grupo ao iniciar o atendimento.
9. Salve as alterações do fluxo.

> ⚠️ Caso você abra tickets em fluxos diferentes, é necessário adicionar essa carta em todos os fluxos que direcionam contatos ao atendimento humano.

Para saber mais sobre essas cartas, consulte o artigo [Cartas de ação](https://help.vtex.com/pt/docs/tutorials/cartas-de-acao).

## Ignorar o grupo de controle nos disparadores

Após adicionar o contato ao grupo, é preciso configurar cada disparador do projeto para ignorar os contatos que estão no grupo _Atendimento Humano_. Assim, o chatbot não interrompe o atendimento. Para isso, siga as etapas abaixo:

1. Acesse a organização e o projeto que deseja modificar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Contatos**.
3. Clique em **Disparadores**.
4. Clique em um disparador configurado no seu projeto.
5. No campo **Grupos a Excluir**, selecione o grupo _Atendimento Humano_.
6. Clique em `Salvar alterações`.
7. Repita o processo para **todos os disparadores** do projeto.

Com isso, enquanto o contato estiver no grupo de controle, ele não será acionado pelas mensagens automáticas, e o atendimento humano seguirá sem interrupções. Para mais informações sobre disparadores, consulte os artigos [Como criar um disparador](https://help.vtex.com/pt/docs/tutorials/como-criar-um-disparador) e [Tipos de Gatilho](https://help.vtex.com/pt/docs/tutorials/tipos-de-gatilho).

## Remover contatos do grupo de controle

É importante remover o contato do grupo de controle quando a sessão de atendimento humano for concluída. Caso contrário, ele continuará sendo ignorado pelos disparadores mesmo após o fim do atendimento.

Essa automação envolve dois elementos com funções distintas:

- Um **fluxo de encerramento**, que remove o contato do grupo de controle.
- Um **disparador**, que inicia esse fluxo sempre que um ticket do Live Desk é encerrado.

Por isso, primeiro crie o fluxo de encerramento e, em seguida, o disparador que o aciona.

### Criar o fluxo de encerramento

O fluxo de encerramento requer apenas um bloco com a carta de ação **Remover contato de um grupo**, responsável por retirar o contato do grupo de controle. Para criá-lo, siga as etapas abaixo:

1. Acesse a organização e o projeto que deseja modificar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Fluxo de automação**.
3. Clique em `Criar fluxo` e insira um nome para o fluxo (por exemplo, _Encerramento de atendimento_).
4. Dentro do fluxo, clique em **Criar bloco**.
5. No pop-up, em **Quando um contato chegar a esse ponto do fluxo...**, selecione a opção **Remover contato de um grupo**.
6. Em **Grupos que o contato será removido:**, selecione o grupo _Atendimento Humano_.
7. Clique em **Ok**.
8. Salve as alterações do fluxo.

### Criar o disparador de encerramento

Depois de criar o fluxo, configure o disparador que o inicia automaticamente quando um ticket é encerrado. Para isso, siga as etapas abaixo:

1. Acesse a organização e o projeto que deseja modificar no [VTEX CX Platform](https://dash.weni.ai/orgs).
2. No menu lateral, clique em **Contatos**.
3. Clique em **Disparadores**.
4. Clique em `Criar disparador`.
5. Clique em **Iniciar um fluxo após um ticket ser fechado.**.
6. Em **Fluxo**, selecione o fluxo de encerramento criado anteriormente.
7. Deixe o campo **Grupos a Excluir** vazio para aplicar o gatilho a todos os contatos.
8. Clique em `Criar disparador`.

Dessa forma, ao encerrar o ticket, o disparador inicia o fluxo de encerramento, que remove o contato do grupo de controle. Assim, o contato volta a interagir normalmente com o chatbot.

## Enviar campos customizados no ticket

Ao abrir o ticket com a carta de ação **Abrir um ticket com um agente humano**, você pode enviar campos customizados para o atendimento. Esses campos devem ser definidos no corpo dessa carta, no formato JSON, com cada campo como atributo de `custom_fields`, representado por sua chave e valor.

O exemplo abaixo configura o campo `origin`, cujo valor é definido por um resultado de fluxo (`origem`). Como o valor é do tipo texto, ele é informado entre aspas:

```json
{
  "custom_fields": {
    "origin": "@results.origem"
  }
}
```

> ℹ️ Valores de texto devem ser informados entre aspas. Valores numéricos ou booleanos podem ser informados sem aspas.
