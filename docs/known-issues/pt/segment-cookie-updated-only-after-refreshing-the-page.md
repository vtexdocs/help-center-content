---
title: 'Cookie de segmento atualizado somente depois de atualizar a página'
id: 3QBmp4D2tvIAxEzEy2LpNf
status: PUBLISHED
createdAt: 2022-11-01T16:33:05.698Z
updatedAt: 2023-03-08T20:36:59.962Z
publishedAt: 2023-03-08T20:36:59.962Z
firstPublishedAt: 2022-11-01T16:33:06.403Z
contentType: knownIssue
productTeam: Store Framework
author: 2mXZkbi0oi061KicTExNjo
tag: Store Framework
slug: cookie-de-segmento-atualizado-somente-depois-de-atualizar-a-pagina
kiStatus: Backlog
internalReference: 647116
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>


Algumas características e componentes da VTEX podem usar os dados solicitados ao Cookie do Segmento para apresentar informações (como preço, dados de promoção, disponibilidade de SKU, etc.) na vitrine. Este cookie é armazenado no navegador do usuário quando a sessão é criada. Algumas vezes, principalmente em cenários dinâmicos onde é necessário fazer mudanças na frente onde aciona uma atualização do Segmento do Cookie, o próprio cookie perde alguns dados que é um comportamento em render-runtime que não aciona uma mudança de segmento no contexto

Como recuperar informações sobre a sessão:
https://developers.vtex.com/vtex-rest-api/reference/getsession

Você pode obter os dados do Cookie do segmento através do símbolo do segmento:

- Abra o console do navegador;
- Decodificar a ficha de segmento apresentada no objeto de tempo de execução de renderização;
- No console, execute:` atob(__RUNTIME__.segmentToken)`
 ![](https://vtexhelp.zendesk.com/attachments/token/wHuslnrutSh5W2CZS4FlHBm0d/?name=Captura+de+Tela+2022-09-23+a%CC%80s+14.09.57.png)


##

## Simulação



- Selecione uma loja que apresente informações com base nos dados de um Cookie de Segmento:
- Ex.: Diferentes preços são mostrados com base na identificação do cliente - relacionados às tabelas de preços;
- Obtenha os dados do Segmento de Cookie em diferentes cenários usando o aplicativo que recupera a identificação do usuário;


##

## Workaround


Atualize a página





