---
title: 'Classificação e Resposta Inteligente'
id: 5Qk9g3o19n26jSz7cnbVL8
status: PUBLISHED
createdAt: 2025-09-16T16:48:11.308Z
updatedAt: 2025-10-03T14:20:03.861Z
publishedAt: 2025-10-03T14:20:03.861Z
firstPublishedAt: 2025-10-03T14:20:03.861Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: zero-shot-learning
legacySlug: classificacao-e-resposta-inteligente
locale: pt
subcategoryId: hXGU8pFfABVFIg724zWBN
---

#### Aplicação e Funcionalidades

O funcionamento da aplicação da Classificação e Resposta Inteligente consiste em receber como entrada uma frase, que será categorizada, e identificar a qual categoria essa entrada pertence de acordo com o contexto do cliente. As categorias são definidas através de Frases de comando, que servem de contexto para identificar e gerar a classificação correta. A partir dos dados de entrada é esperado que o modelo retorne a categoria da frase.

Quando falamos de contexto, leve em consideração que sempre que for usar o Zero Shot, devemos configurar as Frases de Comando. **As frases de comando v ão instruir a inteligência para classificar suas intenções (chamadas de ""Classes"") de acordo com regras definidas por você**.

#### Na Prática

Existem duas formas de se criar uma IA de classificação na Weni Plataforma: através dos cards de fluxo **Classificar automaticamente** e **Aguarde por resposta inteligente**.

##### Aguarde por resposta inteligente

Com o cartão **Aguarde por resposta inteligente** , você consegue aguardar pela resposta do usuário e enviar essa resposta direto para a sua Classificação de IA, assim você cria suas categorias e trata cada intenção como desejar:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/classificacao-e-resposta-inteligente_1.png)

No exemplo abaixo, criamos as intenções e seus devidos contextos para que possamos categorizar e tratar as solicitações do usuário:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/classificacao-e-resposta-inteligente_2.png)

Lembre-se, cada categoria deve ter uma Frase de Comando. **As frases de comando v ão instruir a inteligência e você pode usar esses exemplos**:

- quando o usuário quer saber quais são as modalidades e os prazos de entrega > Entrega
- quando o usuário quer saber por que o pedido dele atrasou ou se vai atrasar > Atraso
- quando o usuário quer substituir um produto ou falar sobre um produto que foi substituído ou mudar um item > Substituição

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/classificacao-e-resposta-inteligente_3.png)

##### Classificar automaticamente

Com o cartão **Classificar automaticamente** , você pode utilizar uma expressão ou variáveis como a entrada para a classificação da intenção (Classe) do usuário. Normalmente esse cartão é usado quando você já tem um texto para tratar e não precisa aguardar uma resposta do usuário antes de consultar a Inteligência artificial:

![](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/weni-by-vtex/fluxos/classificacao-e-resposta-inteligente_4.png)

Diferença entre o cartão **Aguarde por resposta inteligente** e o **Classificar automaticamente -** O **Classificar automaticamente** não irá provocar uma pausa no fluxo para receber a resposta do contato.
