---
title: 'FAQ sobre trigger de email Pedido Entregue, Faturado, Enviado'
id: 7r0yMXe10sYC2cyOwywk2K
status: ARCHIVED
createdAt: 2017-06-16T18:57:28.225Z
updatedAt: 2020-03-05T18:41:52.078Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_2
slug: faq-sobre-trigger-de-email-pedido-entregue-faturado-enviado
locale: pt
legacySlug: faq-sobre-trigger-de-email-pedido-entregue-faturado-enviado
---

**Alguém aqui sabe me dizer quais são os triggers que disparam os emails "Pedido Enviado" e "Pedido Entregue"?**
 
**Pedido enviado** é o tracking junto com a fatura, para o de **Pedido Entregue** e tem que ter o tracking, sem esse não tem como enviar. E o mesmo é enviado através https://documenter.getpostman.com/view/94611/oms/Hs41#a42afd10-e62a-f806-dcd7-226ccf49846d. E o **Pedido Faturado** é o invoice

**Se enviarmos em uma única chamada o número da NF e tracking, os dois e-mails serão disparados?**
Exato!

**E o "Pedido Enviado"? Não deveria ser disparado quando se posta o tracking, ao invés do "Pedido Entregue"? E "Pedido Entregue" deveria ser disparado apenas quando temos a confirmação de entrega pela transportadora, não?**
São duas coisas diferentes. **Pedido Enviado** = disparado quando se envia o tracking junto ou separado a fatura.
**Pedido Entregue** = depende do tracking, pois se não tiver um tracking, por mais que vc utilize a API, o email não é enviado
**Pedido enviado** é confirmado quando o nosso sistema que verifica a tracking (em alguns casos)  e confirma que foi entregue mesmo.
  
**Então fiquei apenas com a dúvida sobre o que faz disparar o email do "Pedido ENTREGUE". "Pedido Enviado" entendi que basta postas o código de rastreio.**
O email de **Pedido entregue** é disparado quando o OMS tem a confirmação da transportadora (correios, total, etc) que o pedido foi entregue mesmo. http://help.vtex.com/pt/faq/quais-transportadoras-disponibilizam-o-rastreio-de-frete. Mas para isso, é necessário alguma configuração do nosso lado. Somente para o caso dos Correios que temos o feedback da entrega automaticamente, se no tracking, informar o numero de rastreio. Ou quando Via API, recebemos um atualização do Tracking com o campo "isDelivered": true
