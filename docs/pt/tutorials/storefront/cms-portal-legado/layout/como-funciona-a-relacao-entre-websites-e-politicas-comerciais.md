---
title: 'Como funciona a relação entre websites e políticas comerciais'
id: 1VuakBcyNOgg4AM4cUeeQg
status: PUBLISHED
createdAt: 2019-01-24T20:45:42.855Z
updatedAt: 2026-10-14T18:21:41.930Z
publishedAt: 2023-03-29T14:43:46.618Z
firstPublishedAt: 2019-01-24T22:07:42.559Z
contentType: tutorial
productTeam: Channels
author: authors_59
slugEN: how-the-relationship-between-websites-and-business-policies-works
legacySlug: como-funciona-a-relacao-entre-websites-e-politicas-comerciais
locale: pt
subcategoryId: 2g6LxtasS4iSeGEqeYUuGW
---

Políticas comerciais informam quais conteúdos podem ser renderizados em um website. Abaixo, vamos explicar as regras da relação entre websites e políticas comerciais. 

## Regra de elegibilidade

Como saber quais políticas comerciais estão elegíveis para um website? 

Esta elegibilidade é determinada na configuração do **binding** do website. Para saber como vincular uma política comercial a um website, veja o **passo 8** do artigo [Vincular uma loja a uma estrutura de pastas do CMS (binding)](/pt/docs/tutorials/vincular-um-account-name-a-um-website-binding).

As regras de marcação de elegibilidade são as seguintes:

- Se você marcou a caixa de uma política comercial para um website, esta política se torna elegível a este website. Caso você queira, esta política ainda pode ser vinculada a outros websites.

- Se você **não marcou** uma política comercial em **nenhum website**, esta política se torna elegível a **todos** os seus websites.

> ℹ️ Quando um [seller white label](/pt/docs/tutorials/seller-white-label) realiza o fulfillment de pedidos da sua loja, a política comercial atendida por esse seller precisa estar elegível no binding da **conta principal**, mesmo que ele entregue apenas os pedidos de outro website.

## Regra de prioridade

Entre as **políticas elegíveis**, a que será renderizada no website será aquela que estiver em primeiro na ordenação de políticas comerciais.

Para saber a ordenação das políticas comerciais, siga os passos abaixo:

1. Em seu Admin VTEX, acesse **Configurações da loja > Canais > Políticas Comerciais**.
2. Na coluna **Posição**, você verá a ordenação das suas políticas comerciais. A posição 1 exibe a política comercial de maior prioridade.

> ❗ Recomendamos não alterar a posição da política comercial de **ID 1**. Por ser a política padrão da conta, mudar sua posição pode alterar qual política é renderizada nos websites e causar divergências em preços, catálogo e frete. Se precisar alterar a ordenação, valide o resultado em cada website depois da mudança.

### Caso de uso

Considere uma loja com três políticas comerciais (A, B e C) cadastradas. A ordenação das políticas comerciais está configurada da seguinte forma:

1. C
2. B
3. A

Um website que tenha essas três políticas comerciais elegíveis vai renderizar as informações da **política comercial C**.

Um website que tenha apenas as políticas A e B como elegíveis vai renderizar as informações da **política comercial B**.

## Exceção à regra de prioridade

Se uma política *com restrição de acesso* estiver listada na ordenação com prioridade acima de uma outra política elegível, *mas sem restrição de acesso*, a política renderizada será a **política elegível sem restrição de acesso**.

### Caso de uso

Considere uma loja com três políticas comerciais (A, B e  C) cadastradas. A política B é uma política específica para B2B e, portanto, **possui restrição de acesso**. A política A é uma política específica para Marketplace, **sem restrição de acesso**.

A ordenação das políticas comerciais está configurada da seguinte forma:

1. C
2. B
3. A

Um website que tenha apenas as políticas A e B como elegíveis vai renderizar as informações da **política comercial A**.

> ℹ️ Se a política da conta principal atendida por um [seller white label](/pt/docs/tutorials/seller-white-label) possuir restrição de acesso, a exigência de elegibilidade no binding se combina com esta exceção. Se usuários não logados visualizam informações indevidas em uma loja com restrição de acesso, veja [Usuários não logados veem informações na minha loja com restrição de acesso](/pt/docs/troubleshooting/usuarios-nao-logados-veem-informacoes-na-minha-loja-com-restricao-de-acesso).
