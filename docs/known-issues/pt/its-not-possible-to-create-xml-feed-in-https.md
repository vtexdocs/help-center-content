---
title: Não é possível criar feed XML em HTTPS
id: 1nWCF9Rq1GM6AScc0ce2M8
status: PUBLISHED
createdAt: 2017-07-09T23:54:48.739Z
updatedAt: 2019-12-31T15:18:00.585Z
publishedAt: 2019-12-31T15:18:00.585Z
firstPublishedAt: 2017-07-11T15:30:31.425Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: 5fYXkMJagMwcSAeMAsAuOI
tag: Catalog
slug: nao-e-possivel-criar-feed-xml-em-https
kiStatus: Fixed
internalReference: 
---

## Sumário

<div class="alert alert-success">
<b>Problema solucionado</b><br>
Agora as URLs do XML seguem o mesmo protocolo configurado para a página de produto.
</div>

---

O link dos feeds de XML gerado usa HTTP em vez de HTTPS.

Ao configurar o feed em sistemas externos de parceiros, tais como Google, gera-se um redirecionamento para um link em HTTPS e isso faz com que se percam os parâmetros de métricas.

É necessário usar o link em HTTPS para serem mantidas as métricas.

## Simulação

1. Acessar Catalog > Configurações > XML
2. Criar um feed de XML e obter sua URL
3. Esta URL será em HTTP e ao usá-la em qualquer sistema que requeira HTTPS, deverá ser feito um redirecionamento que vai causar a perda dos parâmetros que vêm na URL.

## Workaround

Arquitetura sugerida:
1. Sugerimos usar a API Search para consumir o catálogo;
2. Gerar o XML deseado;
3. Expor o XML em um ambiente com HTTPS que permita ser consumido externamente.

Esta estratégia não é apenas um workaround, mas também a estratégia sugerida para a escalabilidade e o tratamento de feed XML em catálogos grandes, já que é possível atualizar o feed com a frequência necessária, otimizar o tamanho do XML e torná-lo mais leve, assim como ter mais opções de segmentação de produtos.

