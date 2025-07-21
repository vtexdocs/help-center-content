---
title: "Vale (GiftCard) de cliente não localizado no módulo administrativo ao realizar consulta por CPF"
id: 57ReN0F8H6iAsimuMoUe8Q
status: PUBLISHED
createdAt: 2017-07-27T15:42:13.805Z
updatedAt: 2022-12-22T15:07:19.226Z
publishedAt: 2022-12-22T15:07:19.226Z
firstPublishedAt: 2017-07-27T17:11:11.501Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_31
tag: Portal (CMS),Payments
slugEN: vale-giftcard-de-cliente-nao-localizado-no-modulo-administrativo-ao
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Ao realizar uma consulta de vales, no admin, por CPF (documento), o vale do cliente não é listado.

![vale](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketing%20&%20Merchandising/vale-giftcard-de-cliente-nao-localizado-no-modulo-administrativo-ao_1.png)

## Simulação

Ao realizar uma consulta por CPF, o sistema inclui uma máscara no seguinte formato: 999.999.999-99. No entanto, quando um Vale é criado por API, seu CPF é registrado no seguinte formato: 99999999999 (sem ponto e hífen).

Para simular o cenário:

1. Crie um Gift Card por API o relacionando a um cliente (Documentação para criação de Gift Card: https://documenter.getpostman.com/view/18468/giftcard-system/6YtyvrM);
2. Acesse o módulo administrativo dos Vales e faça uma consulta pelo CPF do cliente relacionado;
3. O vale não será listado pois o CPF consultado seguirá o padrão 999.999.999-99 e o CPF registrado seguirá o padrão 99999999999

## Workaround

Para contornar o problema, é possível, no próprio campo do filtro com máscara, remover os pontos e o hífen.

Para consultar um CPF sem pontos e hífen (criados por API), então:
1. Digite o CPF no campo de consulta;
2. Remova os pontos e o hífen;
3. Clique em "Buscar";

![vale animado](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/known-issues/Marketing%20&%20Merchandising/vale-giftcard-de-cliente-nao-localizado-no-modulo-administrativo-ao_2.gif)

