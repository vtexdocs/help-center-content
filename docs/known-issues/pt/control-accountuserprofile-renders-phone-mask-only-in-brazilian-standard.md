---
title: Controle accountUserProfile renderiza máscara de telefone apenas no padrão brasileiro
id: 76NuOCa920CYq2wSgSAyOc
status: PUBLISHED
createdAt: 2017-08-15T14:49:39.178Z
updatedAt: 2022-12-22T20:48:40.595Z
publishedAt: 2022-12-22T20:48:40.595Z
firstPublishedAt: 2017-08-15T15:01:09.167Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 2mXZkbi0oi061KicTExNjo
tag: Portal (CMS)
slug: controle-accountuserprofile-renderiza-mascara-de-telefone-apenas-no-padrao-brasileiro
kiStatus: Backlog
internalReference: 
---

## Sumário

O controle (viewPart) accountUserProfile está renderizando a máscara de telefone apenas para o padrão brasileiro: (99) 9999-99999. Os paises que possuem outros padrões não conseguem utilizar o controle sem aplicar uma customização (JS) sobre esse campo.

## Simulação

Para simular:

1. Configure o controle "accountUserProfile" no template utilizado pelo layout "account";
2. Acesse a página (/account) e verifique que a máscara aplicada aos campos de telefone estão no formato brasileiro;

## Workaround

Para contornar o cenário, utilize customizações em JS para modificar a máscara de acordo com o necessidade. Faça adaptações também com JS para valorar os campos de telefone, já que com a troca da máscara pode acontecer do campo ficar vazio (mesmo com a propriedade value do campo preenchida).

