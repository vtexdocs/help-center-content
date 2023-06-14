---
title: 'Como lidar com erro de Timeout com a integração com o catálogo?'
id: 41SucuGFjn1ndIN2iR1vvr
status: DRAFT
createdAt: 2019-03-20T21:50:15.029Z
updatedAt: 2022-08-24T18:35:53.247Z
publishedAt: 
firstPublishedAt: 2019-03-21T19:24:44.908Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: 4iKDU1m0huXy1qFWff7vY5
slug: como-lidar-com-erro-de-timeout-com-a-integracao-com-o-catalogo
legacySlug: como-lidar-com-erro-de-timeout-com-a-integracao-com-o-catalogo
---

É possível que, ao cadastrar produtos via [ERP (Enterprise Resource Planning)](https://help.vtex.com/pt/tutorial/guia-de-integracao-de-erps-arquitetura-do-catalogo?locale=pt "ERP (Enterprise Resource Planning)") no catálogo de uma loja, a integração não funcione logo na primeira tentativa. Ao invés disso, o [API (Application Programming Interface)](https://help.vtex.com/pt/tutorial/introducao-as-apis-vtex--3SjAqQ0BeUqu2ge8AiIkmW "API (Application Programming Interface)") responde por meio do erro `Timeout`.

Às vezes, essa resposta é uma simples questão de sistema, por mais que a integração tenha sido configurada da forma correta. Em outros casos, o erro ocorre por conta de algum problema de programação, de fato. 

Independente do cenário, o `Timeout` é uma forma do sistema indicar ao usuário que o comando levou mais tempo que o esperado para completar a ação requerida.

Por mais que seja considerado um “erro”, receber o retorno `Timeout` é __previsto__ dentro do fluxo de integração. Por conta disso, a programação deve estar preparada para as retentativas. Se esse for o caso, repita o processo de cadastro do produto normalmente. 

Se, ainda assim, o problema persistir, consulte o nosso time de suporte para avaliar a situação.
