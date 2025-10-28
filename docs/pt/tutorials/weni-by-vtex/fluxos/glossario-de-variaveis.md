---
title: 'Glossário de Variáveis'
id: MOTwhIJlY251TLzK3UUPl
status: PUBLISHED
createdAt: 2025-09-16T16:20:16.591Z
updatedAt: 2025-10-03T14:20:04.252Z
publishedAt: 2025-10-03T14:20:04.252Z
firstPublishedAt: 2025-10-03T14:20:04.252Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: variables-glossary
legacySlug: glossario-de-variaveis
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

### Visão geral

As variáveis são locais criados para armazenar valores na plataforma, permitindo assim que os dados sejam salvos mesmo após a finalização de um fluxo.

Para utilizar uma variável deve se colocar o `@` e a expressão digitada será substituída pelo real valor da variável, desde que seja criada de forma adequada.

Abaixo, faremos uma lista de como se referenciar a todos os tipos de variáveis existentes na Weni Plataforma, sendo eles:
  * Contatos e campos de contato
  * Resultados e fluxos
  * Globals

### Contatos e campos de contato

  * `@contact`: variáveis para salvar valores ligados diretamente com o contato. Abaixo, segue a lista de sub-variáveis mais utilizadas:
    * `@contact.name`: Nome completo do contato;
    * `@contact.first_name`: Primeiro nome do contato;
    * `@contact.urns`: lista de URNs do contato. Também pode ser acessado pelo `@urns`;
    * `@contact.uuid`: ID único do contato;
    * `@contact.created_on`: Data em que o contato foi criado;
    * `@contact.language`: Língua preferencial do contato;
    * `@contact.channel`: Nome do canal preferencial do contato;
    * `@contact.groups`: Nome dos grupos que o contato participa;
    * `@contact.fields`: Campos de contato personalizados do contato. Para acessar basta utilizar `@contact.fields.nome_do_campo` ou `@fields.nome_do_campo`.

### Resultados e fluxos

  * `@results`: variáveis para salvar valores ligados diretamente aos resultados de fluxo. Para acessar um resultado basta utilizar `@results.nome_do_resultado`. Abaixo, segue a lista de sub-variáveis mais utilizadas:
    * `@results.nome_do_resultado.category`: categoria/rota a qual aquele resultado pertence;
    * `@results.nome_do_resultado.value`: valor de texto exato do resultado;
    * `@results.nome_do_resultado.extra`: valores além de texto que um resultado pode possuir, como anexos ou informações de requisição.

  * `@input`: variáveis que contêm o valor de entrada do contato. Abaixo, segue a lista de sub-variáveis mais utilizadas:
    * `@input.text`: valor de texto inserido pelo contato em sua última interação com a plataforma.

    * `@input.attachments`: anexos inseridos pelo contato em sua última interação com a plataforma.

  * `@child`: permite referenciar todas as variáveis do fluxo filho, ou seja, o fluxo chamado pela carta de ação Entrar em um Fluxo, dentro do fluxo pai. Caso você queira acessar um resultado do fluxo filho após a sua finalização, por exemplo, basta utilizar `@child.results.nome_do_resultado`. Ao utilizar outra carta de Entrar em um Fluxo, o valor de `@child` é sobrescrito.

  * `@parent`: permite referenciar todas as variáveis do fluxo pai, ou seja, o fluxo que chamou a carta de ação Entrar em um Fluxo, dentro do fluxo filho. Caso você queira acessar um resultado do fluxo pai durante a execução do fluxo filho, por exemplo, basta utilizar `@parent.results.nome_do_resultado`.

### Globals

Variáveis globais, ou globals, são variáveis criadas que podem ser acessadas de qualquer fluxo, a qualquer momento, porém não podem ter o seu valor modificado durante uma execução de fluxo. São muito utilizadas quando precisamos mandar a mesma informação para vários fluxos diferentes, e depois precisamos modificar esse valor de forma prática para todos os fluxos onde ela está inserida.

Para criar uma global, basta ir para as configurações gerais de sua organização e descer até o fim da página, onde você irá encontrar a aba para as globals.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/glossario-de-variaveis_1.png)

Após isso, basta clicar em Criar Global, digitar o nome da global que você deseja juntamente com o valor.

![](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/glossario-de-variaveis_2.png)

Assim, ela vai se tornar acessível em qualquer fluxo através da variável `@globals.nome_da_global`
