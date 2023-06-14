---
title: 'Porque a exportação de pedidos no OMS, fica com "quebra de linha" no excel?'
id: 2TW35qM4RGAmyMeYsK2GiW
status: DRAFT
createdAt: 2017-07-03T21:52:22.770Z
updatedAt: 2020-05-25T20:03:13.668Z
publishedAt: 
firstPublishedAt: 
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: 2LFh4Ox3XiWIqUMWw4MOGw
slug: porque-a-exportacao-de-pedidos-no-oms-fica-com-quebra-de-linha-no-excel
legacySlug: porque-a-exportacao-de-pedidos-no-oms-fica-com-quebra-de-linha-no-excel
---

Em algumas situações, após exportar pedidos do OMS e abrir o arquivo .CSV no excel, alguns registros ficam com quebra de linha, quebrando o layout do arquivo e as informações no relatório exportado.
Esses casos podem acontecer quando alguma informação no pedido gravou com espaço, com "enter".

Abaixo um caso, onde a __UTM do facebook__ postado em algum local da internet levou o cliente para o site contendo um espaço na URL, o browser trata o espaço com um código "enconding" e deixa seguir o processo normal de navegação e compra no site.

print1 - excel:
![print1-oms](//images.contentful.com/alneenqid6w5/1VCM1e8XOMO88yCiokKGS2/929622ce8f009c1a6fff007f5225ddce/print1-oms.jpg)

print2 - API:
![print2-oms](//images.contentful.com/alneenqid6w5/5uxbAw046W4mQuEQWkoEGe/dbd6b801f6706f5e7d57ba32b4df44f6/print2-oms.JPG)


Para situações desse tipo, __não podemos alterar o pedido__ uma vez que foi fechado na loja corretamente pelo cliente. __Deve-se ajustar na origem que está enviando o campo errado para a loja__ e exportar os dados do OMS, desconsiderando esse pedido com campo gravado errado (utilizando a data e hora na url do OMS, para exportar) ou utilizando API do OMS.

