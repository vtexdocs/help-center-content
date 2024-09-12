---
title: 'Por que vejo vários e-mails transacionais repetidos em um pedido?'
id: frequentlyAskedQuestions_5310
status: PUBLISHED
createdAt: 2017-04-27T22:22:48.654Z
updatedAt: 2023-03-20T18:16:45.773Z
publishedAt: 2023-03-20T18:16:45.773Z
firstPublishedAt: 2017-04-27T23:02:45.541Z
contentType: frequentlyAskedQuestion
productTeam: Post-purchase
author: authors_37
slug: por-que-vejo-inumeros-e-mails-transacionais-repetidos-em-um-pedido
locale: pt
legacySlug: por-que-vejo-inumeros-e-mails-transacionais-repetidos-em-um-pedido-no-oms
---

No Admin VTEX, em **Pedidos > Todos os pedidos**, ao clicar em um pedido e acessar sua página de detalhes, existe uma Linha do Tempo mostrando as informações desse pedido, sendo possível checar os emails transacionais correspondentes. Se você notar nessa seção vários emails transacionais repetidos sendo enviados ao cliente final, verifique se um dos cenários abaixo está ocorrendo:

1) O seu ERP pode estar enviando a nota fiscal repetidas vezes.

Isso pode ocorrer por diversos cenários. Um exemplo é quando o total da nota fiscal não é o total do pedido. Nesse caso, o status do pedido não passará a `Faturado`. Enquanto o ERP verificar que o pedido ainda se encontra com o status `Preparando Entrega` (status anterior ao Faturado), é possível que ele siga executando a ação de envio de nota fiscal.

Você também pode verificar essa ação repetida na página de detalhes do pedido, clicando em **Ver Interações**, para ver as diversas interações feitas pelo seu ERP.

Pode ocorrer o mesmo para o envio de dados de **Tracking**, também pelo seu ERP.

2) O servidor de emails do cliente final pode estar com problemas que o impedem de responder com um "aceite" de recebimento do seu email.

O servidor de envio dos emails transacionais (SMTP), não conseguindo o OK do servidor de destino, seguirá tentando repetidamente entregar o email enviado pelo módulo **Pedidos**.
