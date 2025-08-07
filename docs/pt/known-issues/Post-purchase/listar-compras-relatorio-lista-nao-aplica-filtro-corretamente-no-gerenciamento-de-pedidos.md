---
title: 'Link "Listar Compras" no relatório de lista de presentes não aplica o filtro corretamente no Gerenciamento de Pedidos'
id: 5p7nqrzUqIK88cYkkOqMMG
status: PUBLISHED
createdAt: 2017-04-03T19:36:10.117Z
updatedAt: 2022-12-22T14:44:09.191Z
publishedAt: 2022-12-22T14:44:09.191Z
firstPublishedAt: 2017-04-03T19:48:46.372Z
contentType: knownIssue
productTeam: Post-purchase
author: authors_31
tag: Catalog,Order Management
slugEN: listar-compras-relatorio-lista-nao-aplica-filtro-corretamente-no-gerenciamento-de-pedidos
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

No módulo __Catalog__, no relatório de listas, ao clicar no link "Listar Compras", o sistema redireciona para o Gerenciamento de Pedidos sem aplicar o filtro corretamente, listando todos os pedidos e não apenas os pedidos da lista escolhida.

## Simulação

1. No admin, acesse o módulo __Catalog__;
2. No menu, navegue por Relatórios > Listas > Todas as Listas;
3. Escolha uma lista que esteja com a coluna "Qtd Comprada" preenchida com um valor maior do que 0 (zero);
4. Na lista, ao lado do botão "Visitar", passe o mouse sobre a setinha e clique na opção "Listar Compras";

O sistema o redirecionará para o Gerenciamento de Pedidos sem aplicar o filtro corretamente.

## Workaround

1. Acesse o módulo __Gerenciamento de Pedidos__;
2. No módulo Gerenciamento de Pedidos, na listagem de pedidos, clique no filtro;
3. No grupo "Outros", clique na opção "Campo buscado";
4. Escolha a opção "ID de lista de presente";
5. Retorne para o campo principal de busca e inclua o ID da lista que deseja buscar.

