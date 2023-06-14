---
title: 'Por que uma transação foi liquidada com sucesso mas não foi finalizada em Pagamentos?'
id: 5kOSpUYvTyuUKOOws2A8Me
status: PUBLISHED
createdAt: 2017-05-22T17:47:40.705Z
updatedAt: 2023-03-31T18:32:08.359Z
publishedAt: 2023-03-31T18:32:08.359Z
firstPublishedAt: 2017-06-13T15:25:12.427Z
contentType: frequentlyAskedQuestion
productTeam: Financial
author: authors_59
slug: por-que-uma-transacao-foi-liquidada-com-sucesso-mas-nao-foi-finalizada-no-pci
legacySlug: por-que-uma-transacao-foi-capturada-com-sucesso-mas-nao-foi-finalizada-no-pci
---

Para responder a esta questão, devemos entender a diferença entre os status `Aprovada` e `Finalizada` em Pagamentos. Uma transação fica com o status de `Aprovada` quando a análise de risco é realizada e a transação é aprovada nesta análise. 

Após essa aprovação, o valor da transação é liquidado. No entanto, a transação não muda automaticamente para o status de `Finalizada` após a liquidação. Para que isso ocorra, é necessário realizar a inclusão da Nota Fiscal do módulo **Pedidos**.

Após a inclusão da Nota Fiscal, o módulo **Pedidos** se comunica com Pagamentos, que altera o status da transação para `Finalizada`.
