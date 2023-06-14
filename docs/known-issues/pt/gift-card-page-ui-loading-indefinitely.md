---
title: UI da página de Vale-compra está carregando indefinidamente, impedindo que usuários com permissão a acessem corretamente
id: 6HfglIfAEuXfQlVVnIJiQO
status: PUBLISHED
createdAt: 2021-07-29T12:25:51.576Z
updatedAt: 2022-12-22T20:51:53.612Z
publishedAt: 2022-12-22T20:51:53.612Z
firstPublishedAt: 2021-07-29T14:30:28.706Z
contentType: knownIssue
productTeam: Financial
author: 4ubliktPJIsvyl1hq91RdK
tag: Gift Card
slug: ui-da-pagina-vale-compra-carregando-indefinidamente
kiStatus: Backlog
internalReference: 
---

## Sumário

A UI da página de Vale-compra, no módulo Pagamentos, não está carregando corretamente. Se você tiver permissão para acessar a página de Vale-compra no Admin previamente, você pode acessá-la sem problemas. Mas se você primeiro tentar acessá-la sem permissão, depois obter a permissão e tentar acessá-la novamente, isso pode gerar um problema no qual a UI parece estar carregando para sempre e o usuário não pode acessar a página.

## Simulação

1. Crie um usuário e dê a ele permissão para acessar outra página que não seja a de Vale-compra.
2. Peça ao usuário para tentar acessar a página de Vale-compra e certifique-se de que ele receba a página de acesso negado.
3. Altere a permissão e dê ao usuário acesso à página de Vale-compra.
4. Quando ele tentar acessar a página, esta estará carregando.


## Workaround

Ainda estamos trabalhando nisso, mas se você esperar o suficiente (cerca de uma hora), você poderá acessá-la.

Além disso, provavelmente funcionará se você excluir o usuário e criá-lo novamente e lhe der permissão para acessar a página de Vale-compra.


