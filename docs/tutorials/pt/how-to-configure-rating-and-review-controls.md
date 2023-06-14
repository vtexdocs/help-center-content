---
title: Configurar controle de avaliação e resenha
id: frequentlyAskedQuestions_585
status: DRAFT
createdAt: 2019-01-24T20:45:54.562Z
updatedAt: 2021-05-26T19:52:40.600Z
publishedAt: 
firstPublishedAt: 2019-01-24T21:59:55.793Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: authors_84
slug: como-configurar-controle-de-avaliacao-e-resenha
legacySlug: como-configurar-controle-de-avaliacao-e-resenha
subcategory: 2g6LxtasS4iSeGEqeYUuGW
---

<div class="alert alert-danger">
Este recurso está obsoleto. Sugerimos utilizar serviços de avaliação externos.
</div>

Esse artigo tem o intuito de ensinar como utilizar os controles de avaliação e resenha.

## Controles responsáveis

`vtex.cmc:evaluationRate` – Avaliações dos consumidores (estrelas)

_Retorna o total de classificações feitas pelos usuários_


`vtex.cmc:UserReview` – Avaliações e comentários

_Adiciona opção de avaliar e resultado das avaliações, formulário para comentar e visualização de comentários_


`vtex.cmc:welcomeMessage` – Login do usuário

_Responsável pela criação do cookie IPI utilizado pelo controle UserReview. Sem ele, ao tentar fazer uma avaliação, o login será requerido em loop.


## Conceitos e utilização

Normalmente estes controles são utilizados em conjunto, pois o ‘evaluationRate’ mostra a classificação média das avaliações feitas no ‘UserReview’.

Estes controles, diferentes dos demais, necessitam de uma configuração imprescindível para que funcionem, veja abaixo como fazer:

No cadastro de Categoria existe a opção de configurar a Avaliação, e normalmente esta configuração é feita na categoria raiz:

![avaliação-categoria PT](https://images.ctfassets.net/alneenqid6w5/TtskX9FjmSS0C0UMAeIcM/36a5e64b42da3a23766d7256ade0d8c9/avalia____o_pt.png)

Clique em **Nova Avaliação** e preencha os dados Nome e Texto e depois salve.

![nova-avaliação-categorias PT](https://images.ctfassets.net/alneenqid6w5/6ASmMpGULegqwGKYSm8MSW/10966c7137236f5e9b7d74feb266789c/Nova_avalia____o.png)

Pronto seus controles de Resenha e Avaliação estão prontos para serem utilizados.
