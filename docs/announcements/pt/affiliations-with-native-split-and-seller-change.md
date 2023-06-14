---
title: Afiliações com split nativo e alteração de seller
id: HZrgfF4RMTX9DHv4erOR6
status: PUBLISHED
createdAt: 2020-12-22T23:33:48.841Z
updatedAt: 2020-12-29T15:20:14.835Z
publishedAt: 2020-12-29T15:20:14.835Z
contentType: updates
productTeam: Financial
author: 5WE9zkDdoqqUMRbxIgmp1o
slug: afiliacoes-com-split-nativo-e-alteracao-de-seller
legacySlug: afiliacoes-com-split-nativo-e-alteracao-de-seller
announcementImageID: 
announcementSynopsisPT: Novos comportamentos de captura permitem alteração de seller e flexibilizam marketplaces com afiliações de split nativo.
---

Marketplaces podem precisar alterar sellers (quem entrega o produto) em diversas situações, incluindo por exemplo, quando o seller cancelar um produto em caso de ruptura de estoque. Alterar o seller, nesse caso pode garantir a venda ao Marketplace e prevenir o estorno do pagamento.

Quatro novos comportamentos de captura de pagamentos foram criados para dar mais autonomia e flexibilidade na alteração do seller para marketplaces que fazem uso de afiliações com split de pagamentos nativos. 

# O que mudou?
A captura de pagamentos em afiliações que suportam split de pagamentos era realizada de forma automática por padrão, agora é possível selecionar entre quatro comportamentos diferentes. Em dois deles, a captura de pagamentos não acontece de forma automática, são eles:

  **- Use O Comportamento Recomendado Pelo Processador de Pagamentos**

  **- Desativado: Não Capturado Automaticamente**

Em outros dois, a captura acontece de forma automática:

  **- Imediatamente: Captura Automática Ao Autorizar O Pagamento**

  **- Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude**

Veja o artigo [Configurar split de pagamentos][1] para detalhes de cada comportamento e instruções de configuração.

# Por que realizamos esta mudança?
A alteração de seller só podia ser feita por marketplaces que não usavam afiliações com split de pagamentos nativo pois a autorização e captura do pagamento ocorriam de forma automática por padrão. Poder configurar o comportamento da captura de pagamento para que não aconteça de forma automática aumenta a janela de tempo entre autorização e captura e consequentemente permite alteração do seller (veja o artigo [Como usar o Change Seller][2] para detalhes).

# O que precisa ser feito?
As afiliações com split de pagamentos já passam a capturar pagamentos com o comportamento **Use O Comportamento Recomendado Pelo Processador de Pagamentos**. Caso você opte por manter o comportamento automático na afiliação que suporta split, é necessário selecionar o comportamento desejado na página de visualização da afiliação na qual o split acontece.

[1]: https://help.vtex.com/pt/tracks/split-de-pagamentos--1ouDg8q56Kuz1AgtJUY9nv/4EOhp8cdVXaHl68KykPG6
[2]: https://help.vtex.com/pt/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO?&utm_source=autocomplete
