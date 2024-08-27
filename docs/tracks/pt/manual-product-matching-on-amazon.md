---
title: 'Matching manual de produtos na Amazon'
id: 6QPcQ2zvTROe3VuDQ3kF4X
status: DRAFT
createdAt: 2022-11-25T21:20:50.102Z
updatedAt: 2023-01-24T20:39:11.781Z
publishedAt: 
firstPublishedAt: 2022-12-22T17:54:57.602Z
contentType: trackArticle
productTeam: Channels
slug: matching-manual-de-produtos-na-amazon
locale: pt
trackId: 6sgd4Pagy3wNsWKBvmIFrP
trackSlugPT: integracao-com-a-amazon
---

Toda vez que um [SKU](https://help.vtex.com/pt/tracks/catalogo-101--5AF0XfnjfWeopIFBgs3LIQ/3mJbIqMlz6oKDmyZ2bKJoA) com [EAN](https://sellercentral.amazon.com.br/learn/courses?ref_=su_course_accordion&moduleId=71d0b122-4e43-4547-a05a-04517e8f41a2&courseId=959bc7cb-2866-499c-b24a-8d3f6def1306&modLanguage=Portuguese&videoPlayer=youtube) cadastrado é enviado para a Amazon, o marketplace realiza um processo chamado *matching*, que consiste em unificar anúncios de um mesmo produto através do seu EAN. 

O EAN cadastrado na VTEX é utilizado para fazer a equivalência com os [ASINs](https://associados.amazon.com.br/resource-center/asin-amazon?ac-ms-src=rc-home-card) *(Amazon Standard Identification Number)* correspondentes na Amazon.  Para realizar o pareamento entre o EAN e o ASIN, é necessário realizar o *matching* manual. A correspondência entre EAN e ASINs precisa ser exata para que os anúncios sejam vinculados corretamente pelo matching automático. Caso contrário, podem ocorrer erros no processo.

Após realizar o [envio desses produtos](https://help.vtex.com/pt/tracks/configurar-integracao-com-a-amazon--6sgd4Pagy3wNsWKBvmIFrP/5xklf2wSdeztQh4iy5kJvD), siga os passos abaixo:

1. No Admin VTEX, acesse *MARKETPLACE > Integrações > Produtos*.
2. Filtre os produtos com o campo **Afiliado** preenchido com `Amazon` e o campo **Status** com o valor `Processado com aviso`. Você visualizará os produtos que possuem a lista de ASINs correspondentes.
3. Selecione o ASIN correspondente.
4. Clique em `Sim`.

Após ter feito a confirmação do ASIN, você terá concluído o *matching* do produto.

>❗ Ainda é possível utilizar o *matching* automático através da sua ativação no card da integração, entretanto o seller assume a responsabilidade por possíveis *mismatchs*(erro de compatibilidade) que esse fluxo pode gerar.
