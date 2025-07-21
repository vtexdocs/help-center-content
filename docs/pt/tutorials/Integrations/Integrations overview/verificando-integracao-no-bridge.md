---
title: 'Status de integrações'
id: tutorials_422
status: PUBLISHED
createdAt: 2017-04-27T22:05:50.596Z
updatedAt: 2025-06-10T18:20:24.338Z
publishedAt: 2025-06-10T18:20:24.338Z
firstPublishedAt: 2017-04-27T23:03:24.679Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: checking-integrations-in-bridge
locale: pt
legacySlug: verificando-integracao-no-bridge
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

A seção **Conexões** é onde estão disponíveis os logs das integrações de uma loja VTEX com outros marketplaces. Para acessá-la, vá em **Admin VTEX >  Marketplace > Conexões.**  

Nesta seção é possível acompanhar os status de cada tipo de integração e reprocessar os status com erros. 

## Conexões

Na seção **Conexões,** é possível consultar os seguintes tipos de integração:

[Pedidos](#pedidos)  
[Produtos](#produtos)  
[Rastreamento](#rastreamento)  
[Preço](#preco)  
[Inventário](#inventario)  

Em cada uma das páginas há um filtro, uma barra de busca, o botão `Expandir todos` e o botão `Exportar para excel`.

### Pedidos

A página **Pedidos** pode ser acessada em **Admin VTEX >  Marketplace > Conexões > Pedidos.** Nesta página são exibidos os logs de pedidos realizados nos marketplaces com os quais sua loja está integrada. Esta página apresenta as seguintes informações:  

- **ID:** número do pedido.  
- **Afiliado:** marketplace de origem do pedido.  
- **Status:** pode ser **processado com sucesso** ou **processado com erro.**  
- **Data de processamento:** última vez que a plataforma VTEX processou o pedido.  

Para visualizar mais detalhes do pedido, clique no pedido. Em caso de erro, a plataforma exibirá um log detalhado sobre as causas do erro no pedido. Para solucionar esses erros, acesse a seção [Troubleshooting](/pt/subcategory/integracoes--2LcLWCYaEm5qPmOuYUiKIS) no Help Center e veja o tutorial de solução baseado no marketplace em que o pedido foi realizado.  

### Produtos  
A página **Produtos** pode ser acessada em **Admin VTEX >  Marketplace > Conexões > Produtos.** Nesta página são exibidos os logs de envio dos produtos para os marketplaces com os quais sua loja está integrada. Esta página apresenta  seguintes informações:  

- **Código do SKU:** ID que identifica o SKU no seu catálogo VTEX.  
- **Afiliado:** marketplace para o qual você enviou o SKU.  
- **Status:** status do envio do SKU que pode ser **processado com sucesso,** ou **processado com erro.**  
- **Data de processamento:** última vez que plataforma VTEX processou o envio do SKU.  

Para visualizar mais detalhes, clique sobre o SKU desejado. Em caso de erro, será exibido um log detalhado sobre as causas de não envio do produto para o afiliado. Para solucionar esses erros, é necessário realizar as correções e em seguida reprocessar o envio.

Para reprocessar o envio clique no botão `Ações` e escolha a opção **Reprocessar SKU.**  

### Rastreamento

A página **Rastreio** pode ser acessada em **Admin VTEX >  Marketplace > Conexões > Rastreamento.** Esta página exibe os logs de envio dos pedidos realizados nos marketplaces com os quais sua loja está integrada. Nela você encontra as seguintes informações:  

- **Código do pedido:** ID alfanumérico que identifica o pedido.  
- **Afiliado:** marketplace onde foi realizado o pedido.  
- **Status:** status do rastreamento do pedido que pode ser **processado com sucesso, processado com aviso** ou **processado com erro.**  
- **Data de processamento:** a última vez que o rastreamento foi processado.  

Para visualizar mais detalhes do rastreio, clique sobre o pedido desejado. Em caso de erro, será exibido um log detalhado sobre o envio do pedido. 
Para solucionar esses erros, você deve realizar as correções e em seguida reprocessar o envio.

Para reprocessar o envio, clique no botão `Ações` e escolha a opção **Reprocessar.**  

### Preço  

A página **Preço** pode ser acessada em **Admin VTEX >  Marketplace > Conexões > Preço.** Nesta página são exibidas as informações sobre o envio de preços dos produtos aos marketplaces que sua loja está integrada. Esta página apresenta as seguintes informações:  

- **Código do SKU:** ID que identifica o SKU no seu catálogo VTEX.  
- **Afiliado:** marketplace para o qual foi enviado o SKU.  
- **Status:** status do envio do preço do SKU, que pode ser **processado com sucesso, processado com aviso** ou **processado com erro.**  
- **Data de processamento:** última vez que o envio do preço do SKU foi processado.  

Para visualizar detalhes do envio de preço, clique sobre o SKU desejado. Em caso de erro, será exibido um log detalhado. 
Para solucionar esses erros, é necessário realizar as correções no catálogo e em seguida reprocessar o envio.  

Para reprocessar o envio, clique no botão `Ações` e escolha a opção **Reprocessar.**  

### Inventário

A página de **Inventário** pode ser acessada em **Admin VTEX >  Marketplace > Conexões > Inventário.** Esta página exibe informações de inventário que foram enviadas aos marketplaces em que sua loja está integrada. Nela você encontra as seguintes informações:

- **Código do SKU:** ID que identifica o SKU no seu catálogo VTEX.  
- **Afiliado:** marketplace para o qual foi enviado o inventário do SKU.  
- **Status:** status do envio do inventário do SKU, que pode ser **processado com sucesso,** ou **processado com erro.**  
- **Data de processamento:** última vez que o envio do inventário foi processado.  

Para visualizar detalhes do envio de inventário, clique sobre o SKU desejado. Em caso de erro, será exibido um log detalhado.  
Para solucionar esses erros, é necessário realizar as correções indicadas na mensagem e em seguida reprocessar o envio.  

Para reprocessar o envio, clique no botão `Ações` e escolha a opção **Reprocessar.**  
