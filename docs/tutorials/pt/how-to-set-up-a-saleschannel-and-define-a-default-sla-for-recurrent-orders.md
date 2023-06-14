---
title: 'Configurar um SalesChannel e definir um default SLA para os pedidos recorrentes '
id: 4AyJBkwoMEgCkKIAMomekK
status: DRAFT
createdAt: 2017-05-03T16:54:56.590Z
updatedAt: 2020-02-03T22:32:27.851Z
publishedAt: 
firstPublishedAt: 2017-05-05T18:28:48.785Z
contentType: tutorial
productTeam: Others
author: 12efi1hBSg0ag6yCQMiaQu
slug: como-configurar-um-saleschannel-e-definir-um-default-sla-na-recorrencia
locale: pt
legacySlug: como-configurar-um-saleschannel-e-definir-um-default-sla-na-recorrencia
subcategory: 1rA9wuuskW3PpjvMrhatAM
---

## Recorrência: Definir SalesChannel e default SLA

O objetivo deste mini tutorial é explicar um recurso novo o qual permite fazer configurações para o módulo de recorrência (Via API). Por enquanto é possível definir um SaleChannel para ser usado na geração de todos pedidos `recorrentes` da loja e também informar o SLA default.

## Rota (endpoint para API)
- Consulta: [GET configurations for Subscription](https://documenter.getpostman.com/view/27908/Hs3z#e3cfd743-1cf0-41ce-b9ce-3e35b32a137a)
- Configuração: [PUT Setup configurations for Subscription](https://documenter.getpostman.com/view/27908/Hs3z#b82e6ce4-ecf9-41f1-ab6e-a09310e983a9)

### SalesChannel (Política Comercial) 

Basta incluir um atributo com o nome `salesChannel`, conforme ilustrado na rota de configuração, com o valor do identificador do canal de vendas.  

A partir de então, os próximos pedidos serão criados com o canal de vendas configurado. Caso não tenha estoque para determinado item neste canal o item será excluido do pedido.   

![posicao.pt](https://images.ctfassets.net/alneenqid6w5/7aFEnASwXi9emVUzKJr4pm/8c5f2727be50812817612850e19769cb/posicao.pt.png)

*Tela onde se encontra o ID do salesChannel*

### SLA

Basta incluir um atributo com o nome `defaultSLA`, conforme ilustrado na rota de configuração, com o identificador do tipo da entrega.  

A partir de então, SLA configurado terá precedência sobre o SLA mais barato para os próximos pedidos que serão criados - sendo que se este possuir uma janela de entrega, será selecionado o primeiro intervalo disponível.

![transportadora.pt](https://images.ctfassets.net/alneenqid6w5/1NuCXhjhtIOiYBhtLev1ed/da96b6ce00fdc241f96d81e3184c194f/transportadora.pt.png)

*Tela onde se encontra o ID do SLA*
