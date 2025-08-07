---
title: "A Faststore está enviando eventos de pesquisa em páginas de coleções com o ID da coleção para relatórios IS"
id: 14ovp9q1EJXWMRI4uCuFFY
status: PUBLISHED
createdAt: 2025-01-07T13:59:30.793Z
updatedAt: 2025-01-14T13:38:41.696Z
publishedAt: 2025-01-14T13:38:41.696Z
firstPublishedAt: 2025-01-07T13:59:32.030Z
contentType: knownIssue
productTeam: FastStore
author: 2mXZkbi0oi061KicTExNjo
tag: FastStore
slugEN: a-faststore-esta-enviando-eventos-de-pesquisa-em-paginas-de-colecoes-com-o-id-da-colecao-para-relatorios-is
locale: pt
kiStatus: Fixed
internalReference: 1159040
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Quando um evento de pesquisa é feito em uma página de coleção nas lojas Faststore, a resposta do módulo de análise IS também contém o ID da coleção. Isso também pode ter efeitos ruins no preenchimento automático.

## Simulação



- Tente entrar em uma página de coleção
- Aguarde até que o módulo IS Analytics seja atualizado com essas informações
- O ID da coleção aparecerá onde deveria estar apenas o nome da coleção



## Workaround


N/A





