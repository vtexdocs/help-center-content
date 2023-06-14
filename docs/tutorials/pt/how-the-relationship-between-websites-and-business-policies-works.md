---
title: 'Como funciona a relação entre websites e políticas comerciais'
id: 1VuakBcyNOgg4AM4cUeeQg
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.855Z
updatedAt: 2023-03-29T14:43:46.618Z
publishedAt: 2023-03-29T14:43:46.618Z
firstPublishedAt: 2019-01-24T22:07:42.559Z
contentType: tutorial
productTeam: Channels
author: authors_59
slug: como-funciona-a-relacao-entre-websites-e-politicas-comerciais
legacySlug: como-funciona-a-relacao-entre-websites-e-politicas-comerciais
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

Políticas comerciais informam quais conteúdos podem ser renderizados em um website. Abaixo, vamos explicar as regras da relação entre websites e politicas comerciais. 

## Regra de elegibilidade

Como saber quais políticas comerciais estão elegíveis para um website? 

Esta elegibilidade é determinada na configuração do __binding__ do website. [Neste artigo](/pt/tutorial/vincular-um-account-name-a-um-website-binding), no __passo 8__, temos a explicação de como se vincula uma política comercial a um website. 

A seguir, vamos ver as regras de marcação de elegibilidade:

&bull; Se você marcou a caixa de uma política comercial para um website, esta política se torna elegível a este website. Caso você queira, esta política ainda pode ser vinculada a outros websites.

&bull; Se você __não marcou__ uma política comercial em __nenhum website__, esta política se torna elegível a __todos__ os seus websites.

## Regra de prioridade

Entre as __políticas elegíveis__, a política que será renderizada no website será a política que estiver em primeiro na ordenação de políticas comerciais.

Para saber a ordenação das políticas comerciais, siga os passos abaixo:

1. Em seu Admin VTEX, acesse **Configurações da loja > Canais > Políticas Comerciais**.
2. Na coluna __Posição__, você verá a ordenação das suas políticas comerciais. A posição 1 exibe a política comercial de maior prioridade.

<div class="alert alert-danger">
Recomendamos não alterar a posição da política comercial de <strong>ID 1</strong>.
</div>

### Exemplos

Vamos supor um account com três políticas comerciais (A, B e  C) cadastradas. A ordenação das políticas comerciais está configurada da seguinte forma:

1. C
2. B
3. A

Um website que tenha essas três políticas comerciais elegíveis vai renderizar as informações da __política comercial C__.

Um website que tenha apenas as políticas A e B como elegíveis vai renderizar as informações da __política comercial B__.

## Exceção à regra de prioridade

Se uma política *com restrição de acesso* estiver listada na ordenação com prioridade acima de uma outra política elegível, *mas sem restrição de acesso*, a política renderizada será a __política elegível sem restrição de acesso__.

### Exemplos

Vamos supor um account com três políticas comerciais (A, B e  C) cadastradas. A política B é uma política específica para B2B e, portanto, __possui restrição de acesso__. A política A é uma política específica para Marketplace, __sem restrição de acesso__.

A ordenação das políticas comerciais está configurada da seguinte forma:

1. C
2. B
3. A

Um website que tenha apenas as políticas A e B como elegíveis vai renderizar as informações da __política comercial A__.
