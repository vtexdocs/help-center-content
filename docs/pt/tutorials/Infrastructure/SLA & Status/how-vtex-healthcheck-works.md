---
title: 'Como funciona o Healthcheck da VTEX'
id: 4Dkcpwvbm0mWOOyimwCaWw
status: ARCHIVED
createdAt: 2019-01-24T20:45:43.117Z
updatedAt: 2023-05-08T19:39:43.547Z
publishedAt: 
firstPublishedAt: 2019-01-24T22:13:46.649Z
contentType: tutorial
productTeam: Others
author: authors_59
slug: como-funciona-o-healthcheck-da-vtex
locale: pt
legacySlug: como-funciona-o-healthcheck-da-vtex
subcategoryId: 5PYkoNDZyo2G80yiiqG2YW
---

O Healthcheck da VTEX é uma página pública que tem por objetivo monitorar o status dos serviços de nossa plataforma. No Healthcheck, temos mais de 100 testes rodando por minuto. Por esse dashboard, você pode acompanhar a saúde de cada módulo em tempo real.

## Como funcionam os testes de status

Cada módulo possui robôs que fazem chamadas para verificar o status do serviço. Se o módulo responder com sucesso, isso significa que o serviço está funcionando corretamente. No Healthcheck, o módulo aparecerá com o sinal de `Healthy`.

Se o robô receber __duas vezes seguidas__ uma resposta inesperada, um alerta de `Warning` aparecerá na caixa deste módulo no Healthcheck. Já neste estágio, nossa equipe estará se mobilizando para resolver uma possível instabilidade do módulo. Neste momento, sua loja __não está sendo impactada__.

Se o robô receber __três vezes seguidas__ uma resposta inesperada, um alerta de `Unhealthy` aparecerá na caixa deste módulo no Healthcheck. Caso esta instabilidade esteja afetando __as vendas__ da sua loja, isto será informado na nossa página de [status](http://status.vtex.com/).

## O que significa cada caixa do Healthcheck

### Orders I e Orders II

Monitora o fechamento de compras nas lojas. Se elas estiverem com a sinalização de `Healthy`, isso significa que as compras estão sendo fechadas normalmente.

No __Orders I__, os testes são feitos a partir da nossa rede interna. No __Orders II__, os testes são feitos a partir de uma rede externa. Essas duas verificações são importantes para testarmos a conectivade a partir de datacenters diferentes.

### Promoções e Taxas

Monitora o módulo responsável pelas promoções.

### Payments

Monitora o módulo responsável pelos serviços de pagamento.

### JANUS

Monitora se as chamadas estão sendo roteadas corretamente para cada módulo.

### PortalV2

Monitora o Front-End do Checkout.

### Profile System

Monitora o módulo responsável por armazenar as informações dos seus clientes.

### Dynamic Storage

Monitora o módulo responsável pelas estruturas de dados do Master Data.

### Fulfillment

Monitora o módulo responsável pelas vendas da loja atuando como seller.

### Logistics

Monitora o módulo responsável pela gestão das informações de logística (Estoques, Docas, Transportadoras, Reservas etc.)

### License Manager

Monitora o módulo responsável pela gestão das contas, permissões e perfis de acesso à plataforma.

### VTEX ID

Monitora o módulo responsável pela identificação dos usuários na plataforma.

### Workflow

Monitora o módulo responsável pelas informações do fluxo do pedido.

### Catalog System

Monitora o módulo responsável pela gestão de informações do catálogo das lojas.

### File System

Monitora o serviço responsável pelos arquivos da sua loja. Isso inclui os arquivos de imagens dos produtos, arquivos `.css`, arquivos `.js` e etc.

### Giftcard

Monitora o serviço responsável pela criação e manutenção de vales.

### Master Data

Monitora o serviço do Master Data.
