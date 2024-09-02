---
title: 'Os banners de pesquisa não seguem o operador "AND" para condições de acionamento'
id: 4nQLt5q3Mz2DxvBIyZknXj
status: PUBLISHED
createdAt: 2024-06-20T21:17:46.485Z
updatedAt: 2024-06-20T21:17:47.308Z
publishedAt: 2024-06-20T21:17:47.308Z
firstPublishedAt: 2024-06-20T21:17:47.308Z
contentType: knownIssue
productTeam: Intelligent Search
author: 2mXZkbi0oi061KicTExNjo
tag: Intelligent Search
slug: os-banners-de-pesquisa-nao-seguem-o-operador-and-para-condicoes-de-acionamento
locale: pt
kiStatus: Backlog
internalReference: 1053614
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


As condições para banners de pesquisa (gerenciados por meio de "/admin/search/v4/banners/") não são compatíveis com o operador "AND", conforme apresentado em suas regras de acionamento. A interface do usuário está errada, e o operador se comporta como "OR" de forma fixa.

Qualquer uma das condições preenchidas ali será suficiente para apresentar o banner na página (PLP).

Lembre-se de que a configuração de um departamento ali (nível de categoria 1) aplicará o banner em qualquer uma de suas subcategorias, pois isso faz parte do caminho completo da categoria.

## Simulação


Crie um banner com as seguintes regras de acionamento:

- onde "departamento" é "eletrodomésticos"
- **e**"categoria" é "refrigeradores"

O banner não será restrito ao caminho completo da categoria "/appliances/refrigerators?map=c,c". Ele será aplicado no departamento e em suas subcategorias, e em qualquer categoria chamada "refrigeradores", mesmo que não faça parte desse departamento específico

## Workaround


N/A





