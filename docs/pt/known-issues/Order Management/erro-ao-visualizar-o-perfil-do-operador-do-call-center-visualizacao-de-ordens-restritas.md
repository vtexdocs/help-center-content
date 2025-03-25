---
title: 'Erro ao visualizar o perfil do operador do call center (visualização de ordens restritas)'
id: 7aKQPtGvzYBaRksiuBa4YJ
status: PUBLISHED
createdAt: 2024-11-05T16:34:35.960Z
updatedAt: 2024-11-05T16:34:37.230Z
publishedAt: 2024-11-05T16:34:37.230Z
firstPublishedAt: 2024-11-05T16:34:37.230Z
contentType: knownIssue
productTeam: Order Management
author: 2mXZkbi0oi061KicTExNjo
tag: Order Management
slugEN: error-when-viewing-the-call-center-operator-profile-restricted-orders-view
locale: pt
kiStatus: Backlog
internalReference: 1129938
---

## Sumário

>ℹ️ Este problema conhecido foi traduzido automaticamente do inglês.


Para limitar o acesso de um usuário de televendas aos pedidos criados por ele, é necessário dar ao usuário o seguinte perfil "`Operador de call center (visualização restrita de pedidos)`" No entanto, ao acessar a tela de perfis, você perceberá que o recurso associado "`Mostrar apenas os pedidos criados pelo usuário (via call center)`" não está selecionado, o que dá a impressão de que o perfil não atende às suas expectativas, mas ao validá-lo acessando o admin com um usuário com esse perfil, vemos que o comportamento está correto, restringindo o acesso do usuário aos pedidos criados por ele.

## Simulação



Acesse a tela New Role (Nova função)

Procure por `Operador de call center (visualização de ordens restritas)`_ _ _

Ao acessar os detalhes do perfil, você verá que a opção "`Only show orders created by the user (via call center)`" não está marcada;

Associe um usuário a esse perfil;

Agora, quando você acessar o OMS com o usuário que associou ao perfil na etapa anterior, verá que o acesso dele está limitado aos pedidos que ele mesmo criou, exatamente como esperado, mesmo que na interface do usuário do gerenciador de licenças essa opção não esteja sendo exibida corretamente

## Workaround


Não há nenhuma solução alternativa para esse cenário, mas o impacto é apenas visual, pois a funcionalidade ainda está ok






