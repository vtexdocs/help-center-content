---
title: 'Ordenação de formulário não coloca campo no indexador'
id: 4rvX9Omm0gKqeuwiAYsIwu
status: PUBLISHED
createdAt: 2018-03-19T21:07:37.180Z
updatedAt: 2022-12-22T20:46:19.416Z
publishedAt: 2022-12-22T20:46:19.416Z
firstPublishedAt: 2018-03-19T21:28:13.258Z
contentType: knownIssue
productTeam: Master Data
author: 2mXZkbi0oi061KicTExNjo
tag: Master Data
slug: ordenacao-de-formulario-nao-coloca-campo-no-indexador
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Este cenário ocorre ao se configurar no formulário do Master Data um campo que não esteja no indexador como filtro ou como padrão de ordenação. Ao realizar esta ação e acessar a listagem do formulário, um erro é apresentado na tela, e os dados não são carregados, ficando indisponíveis para a UI.

## Simulação

1. Editar o formulário.
2. Selecionar um campo que não está como "buscável" ou como "filtro" na entidade como "ordenação padrão" ou como "filtro" no formulário.
3. Salvar o formulário.
4. Acessar a listagem.

## Workaround

Para resolver este comportamento, basta editar a entidade de dados e marcar o campo como "buscável" ou "filtro", para uso como "ordenação padrão" e "filtro", respectivamente.

1. Clique sobre o símbolo de engrenagem na aplicação onde está o formulário que deseja editar;
2. Clique em "Estrutura de dados";
3. Edite a entidade de dados;
4. Clique no símbolo de engrenagem no campo que deseja configurar;
5. Selecione a opção "buscável" para a configuração de ordenação ou "filtro" para a configuração de filtro;
6. Salve a entidade;
7. Publique a entidade.

Atenção! Existem tipos de campos que não permitem indexação, como o tipo "texto", por exemplo. Esses campos *nunca* devem ser configurados como ordenação padrão ou como filtro no formulário.

