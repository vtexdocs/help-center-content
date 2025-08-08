---
title: 'É necessário ter certificado PCI para vender em apps mobile nativos?'
id: 7c36NBxoHugm0UoyMoCYWa
status: PUBLISHED
createdAt: 2019-01-24T20:45:33.947Z
updatedAt: 2019-12-31T15:22:27.674Z
publishedAt: 2019-12-31T15:22:27.674Z
firstPublishedAt: 2019-01-24T22:07:01.366Z
contentType: tutorial
productTeam: Financial
author: 2LFh4Ox3XiWIqUMWw4MOGw
slugEN: do-i-need-the-pci-certification-to-sell-in-native-mobile-apps
legacySlug: e-necessario-ter-certificado-pci-para-vender-em-apps-mobile-nativos
locale: pt
subcategoryId: 2Xay1NOZKE2CSqKMwckOm8
---

Para desenvolver um __aplicativo mobile nativo__ da sua loja (seja em Android ou iOS) e vender através dele, __é importante ter o certificado PCI__ em uma das suas classificações. Isso acontece porque apps nativos rodam em ambiente externo à VTEX e é necessário que se garanta a segurança da informação em todos os níveis do processo de compra.

Em uma compra realizada através de um app nativo, os dados do cliente (pessoais, de pagamento, de entrega etc.) são enviados para a VTEX por API. Só então o pedido é criado e o pagamento é processado. A VTEX possui certificação PCI (leia mais detalhes abaixo) e garante a segurança dos dados, mas o aplicativo também precisa estar em conformidade com o protocolo.



## Como obter certificação PCI?

Para conseguir um certificado PCI para sua loja, é necessário consultar uma empresa PCI QSA (PCI Qualified Security Assessors). Essas empresas possuem qualificação para avaliar sistemas e processos, caso a caso. Um bom exemplo é a [Cipher](https://cipher.com/br/avaliacao-consultoria-pci-qsa-asv/).

Você pode tirar todas as suas dúvidas sobre o processo de certificação no site oficial do __[PCI Security Standards Council](https://pt.pcisecuritystandards.org/index.php)__. 



## Alternativas

Não recomendamos que você invista em uma certificação PCI, você deve fazer o uso da certificação da VTEX pra não encorrer em custo, mas existem outras oportunidades para um aplicativo da sua loja, é possível trabalhar com as alternativas.

### Aplicativo mobile híbrido
Nos casos de __apps que rodam em Webview__ nos sistemas Android e iOS, entendemos que __não há necessidade de um certificado próprio__. Isso acontece porque tanto front-end quanto back-end rodam dentro da VTEX: seu cliente já está navegando e digitando os dados em ambiente seguro e certificado. 

### Progressive Web Apps
Na solução de __PWA__, também __não é necessário ter um certificado PCI próprio__. O [PWA](/pt/tutorial/como-transformar-o-site-da-minha-loja-em-um-pwa) é uma aplicação web que é criada no dispositivo mobile usando dados do seu website em cache. Ou seja, tudo o que o usuário final vê são informações obtidas e executadas na sua loja, que está em ambiente seguro e certificado. 



## Certificação VTEX

A VTEX é certificada pelo __PCI DSS__ (Payment Card Industry Data Security Standard), o que garante que os dados digitados na plataforma estão seguros. Nossa infraestrutura, processos de desenvolvimento, front-end e back-end passam por avaliações anuais para a renovação do Certificado PCI DSS. 

Veja mais detalhes sobre o certificado PCI da VTEX e como adicionar o selo PCI no rodapé da sua loja [aqui](/pt/faq/como-adicionar-o-selo-pci-ssc-a-minha-loja).





