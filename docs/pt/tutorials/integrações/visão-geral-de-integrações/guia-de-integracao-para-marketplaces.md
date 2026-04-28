---
title: 'Guia de integração para marketplaces'
id: 3yYUDMTpNSYueYSOuOyui8
status: PUBLISHED
createdAt: 2017-10-14T20:33:44.462Z
updatedAt: 2020-12-03T15:48:06.203Z
publishedAt: 2020-12-03T15:48:06.203Z
firstPublishedAt: 2017-10-14T21:29:43.102Z
contentType: tutorial
productTeam: Channels
author: authors_84
slugEN: integration-guide-for-marketplaces
legacySlug: guia-de-integracao-para-marketplaces
locale: pt
subcategoryId: 6riYYNZCpO8wyksi8Ksgyq
---

> ⚠️ Confira a versão atualizada desse [guia de integração com marketplace](https://developers.vtex.com/vtex-developer-docs/docs/external-marketplace-integration-guide) em nosso Developer Portal. 

## Marketplaces e sellers

Modelo de e-commerce entre _Marketplace_ e _Seller_, podendo as lojas estarem hospedadas ou **não** na plataforma VTEX. Vendas entre Marketplace e Seller envolvem uma negociação entre as duas pontas, dono do produto (o Seller) e o dono da vitrine (o Marketplace). Essa negociação geralmente envolve política comercial dos itens comercializados (_SKUs_) e a manutenção do pagamento.

A VTEX além de oferecer as integrações com os grandes players do mercado nativamente, também oferece um conjunto de _APIs_ e instruções para que terceiros se integrem.

- _Seller_ - Responsável por cumprir com a entrega do pedido (o dono do produto). 
- _SKU_ - Define uma variação de um produto, Ex. geladeira branca 110V.  
- _Marketplace_ - Vitrine onde se expõe os SKUs (o dono da vitrine)  
- _SLA_ - Acordo de serviço, Ex. prazo e custo de entrega.  
- _API_ - Interfaces de serviço para comunicação entre sistemas de computador.

## Ferramentas de apoio ao integrador

### Postman

Extensão do navegador chrome, nesta ferramenta pode se testar, armazenar histórico, salvar coleções de requests do acesso de todas as APIs dos módulos VTEX (OMS, Logistics, Pricing, GCS, Catalog, módulo de Pagamentos etc), além de permitir exportar e importar requests de outros desenvolvedores.

[[Developer] - Collection das APIs da VTEX](http://help.vtex.com/developer-docs/)

É de suma importância que o integrador tenha o conhecimento de ferramentas desse tipo, ou outras parecidas, antes de inciar um processo de integração usando as APIs REST VTEX.

### Credenciais para acesso nas APIs REST

Toda chamada feita as APIs REST da VTEX devem ser feitas em "https" e devem conter em seu header as chaves de autenticação. As chaves de autenticação do header(para acessar as APIs REST) devem ser solicitados ao administrador da loja, ou ao time de operações que está implantando a loja.

> ⚠️ **Atenção**: Deverá ser criada uma chave e um token exclusivos para cada integrador. **Não** se deve usar a chave da própria loja.

## Modelos de integração

### Seller vendendo em marketplace hospedado na plataforma VTEX

Este modelo permite a um Seller **não** hospedado na plataforma VTEX expor e vender os seus produtos (SKUs) em Marketplaces hospedados na plataforma VTEX. Para implementar esse modelo o Seller deverá expor alguns endpoints que serão chamados pelo Marketplace e chamar alguns endpoints expostos pelo Marketplace, seguindo o protocolo VTEX. Neste modelo o Marketplace controla todo processo de pagamento. Segue abaixo instruções para realizar essa integração.

[[Guia] Sellers Não VTEX Vendendo em Marketplace Hospedado na VTEX](/pt/tutorial/guia-de-integracao-para-marketplaces-seller-nao-vtex--yMji0ow0rQuYgQsg26Kus)

### Seller vendendo em marketplace hospedado na plataforma VTEX e processando o pagamento

Este modelo permite a um Seller **não** hospedado na plataforma VTEX expor e vender os seus produtos (SKUs) em Marketplaces hospedados na plataforma VTEX. Para implementar esse modelo o Seller deverá expor alguns endpoints que serão chamados pelo Marketplace e chamar alguns endpoints expostos pelo marketplace, seguindo o protocolo VTEX. Neste modelo o Marketplace envia os dados de pagamento para serem processados no Seller. Segue abaixo instruções para realizar essa integração.

[[Guia] Sellers Não VTEX Vendendo em Marketplace VTEX Recebendo Pagamento](/pt/tutorial/guia-de-integracao-para-marketplaces-seller-nao-vtex-com-pagamento--bNY99qbQ7mKsSMMuq2m4g)

### Marketplace vendendo para seller hospedado na plataforma VTEX

Este modelo permite a um Marketplace **não** hospedado VTEX expor e vender os produtos (SKUs) de Sellers hospedados na plataforma VTEX. Para implementar esse modelo o Marketplace deverá expor alguns endpoints que serão chamados pelo Seller e chamar alguns endpoints expostos pelo Seller, seguindo o protocolo VTEX. Neste modelo o Marketplace controla toda a transação de pagamento. Segue abaixo instruções para realizar essa integração.

[[Guia] Marketplace Não VTEX vendendo para Sellers VTEX](/pt/docs/tutorials/guia-de-integracao-para-marketplaces-marketplace-nao-vtex)

### Marketplace vendendo para seller hospedado na plataforma VTEX enviando o pagamento

Este modelo permite a um Marketplace **não** VTEX expor e vender os produtos (SKUs) de Sellers hospedados na plataforma VTEX. Para implementar esse modelo o Marketplace deverá expor alguns endpoints que serão chamados pelo Seller e chamar alguns endpoints expostos pelo Seller, seguindo o protocolo VTEX. Neste modelo o Marketplace cria a transação de pagamento no Seller. Segue abaixo instruções para realizar essa integração.

[[Guia] Marketplace Não VTEX vendendo para Sellers VTEX Com Pagamento](http://help.vtex.com/pt/tutorial/guia-de-integracao-para-marketplaces-marketplace-nao-vtex-com-pagamento)
