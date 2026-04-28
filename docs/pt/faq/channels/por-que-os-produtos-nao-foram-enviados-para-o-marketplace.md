---
title: 'Por que os produtos não foram enviados para o marketplace?'
id: frequentlyAskedQuestions_727
status: PUBLISHED
createdAt: 2017-04-27T22:27:52.318Z
updatedAt: 2019-12-31T14:24:53.255Z
publishedAt: 2019-12-31T14:24:53.255Z
firstPublishedAt: 2017-04-27T23:02:34.481Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slugEN: why-were-products-not-sent-to-the-marketplace
locale: pt
legacySlug: por-que-os-produtos-nao-foram-enviados-para-o-marketplace
---

O envio de produtos para o marketplace passa por dois grandes processos: o processo de integração em si, que pode ser acompanhado no menu Integrações e o processo de catalogação, que é realizado pelo marketplace. Veja mais detalhes sobre cada um desses processos abaixo.

## Verifique o menu Integrações

O item Integrações é o primeiro local que deve ser considerado para entender o cenário. [Acesse e verifique o status de integração de cada produto](/pt/docs/tutorials/verificando-integracao-no-bridge).

Caso não tenha nenhum registro, pode significar que as configurações não foram realizadas corretamente, portanto [revalide as configurações de marketplace](/pt/tutorial/integrando-com-marketplace/).

Nos registros da Integração, os cenários mais comuns são:
- Produto inativo.
- SKU sem estoque para a política comercial do marketplace.
- SKU sem preço válido.
- SKU sem logística que atenda a política comercial do marketplace.
- Produto não está com a "Flag Loja" ativa para a política comercial do marketplace.
- SKU não faz parte da coleção enviada ao marketplace.

Para corrigir, basta ajustar o item incorreto e aguardar a indexação do produto, sempre acompanhando o processo pelo menu Integrações.

## Entenda o processo de catalogação

A catalogação é o ajuste de todos os produtos integrados com as categorias e marcas do marketplace. Esse processo é feito exclusivamente pelo marketplace e a VTEX não possui meios de interferir sobre ele.

Normalmente, este processo é manual e varia de marketplace para marketplace. Para saber se seu produto está passando por este processo, entre em contato com seu marketplace.

## Como resolver

Para todos os cenários, a solução recomendada é a de [reprocessar o produto no menu Integrações](/pt/docs/tutorials/verificando-integracao-no-bridge).
