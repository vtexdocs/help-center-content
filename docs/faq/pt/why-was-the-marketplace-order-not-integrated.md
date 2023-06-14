---
title: 'Por que o pedido do marketplace não integrou?'
id: frequentlyAskedQuestions_717
status: CHANGED
createdAt: 2017-04-27T22:28:15.676Z
updatedAt: 2020-11-27T19:02:07.748Z
publishedAt: 2019-12-31T14:23:55.880Z
firstPublishedAt: 2017-04-27T23:02:34.518Z
contentType: frequentlyAskedQuestion
productTeam: Channels
author: authors_3
slug: por-que-o-pedido-do-marketplace-nao-integrou
legacySlug: por-que-o-pedido-do-marketplace-nao-integrou
---

O primeiro passo a ser feito é a verificação do Integrações , que é a ferramenta que monitora e grava logs das interações com os marketplaces. O próprio Integrações já indicará qual o empecilho e dará a opção de reprocessamento do pedido.

Veja nossa documentação para [análise de pedidos no Integrações](https://help.vtex.com/pt/tutorial/verificando-integracao-no-bridge?locale=pt "Verificar status de integração no painel do Bridge"). 

Abaixo, temos os principais cenários encontrados.

### Indisponibilidade do estoque

[Entenda como funciona a integração de estoque](/pt/tutorial/entendendo-a-regra-de-disponibilidade-minima/) e [saiba por que ocorre a indisponibilidade](/pt/faq/por-que-o-pedido-foi-fechado-sem-estoque/).

### Divergência de valores

[Entenda como funciona a integração de preço](/pt/tutorial/atualizando-preco-para-marketplace) e [saiba porque ocorre a divergência](/pt/faq/por-que-o-pedido-foi-fechado-com-um-preco-errado/).

### ID de SKU inválido

Isso acontece quando a loja já possuía um catálogo associado ao marketplace antes da configuração pela VTEX. Quando a configuração pela VTEX foi realizada, os Ids dos SKUs não eram os mesmos e isso impede a integração. A maneira de resolver é alterando os ids dos SKUs no parceiro, para que fiquem com os mesmos códigos que a VTEX.

### Pedido com dados de entrega incompletos

Todo pedido na VTEX necessita de informações de Entrega. Caso contrário o que fazer com um pedido que não há como ser entregue? Logo é necessário inserir todas as informações pertinentes para que o pedido consiga avançar.    
    
### Status de Indisponibilidade

É possível que o marketplace bloqueie o pedido até que o item associado ao SKU esteja novamente disponível. Normalmente, no marketplace, o status do pedido passa a ser **Unavailable**. Isto impede a evolução do pedido, impossibilitando a evolução.

Nesses casos não é possível aprovar os pedidos automaticamente pela API, pois os mesmos não estão aptos para aprovação. Para a correção, será necessário o contato com o próprio marketplace para o ajuste do cenário.

### De/para de transportadoras não cadastrado no ERP

Muitos sistemas de ERP possuem um De/Para para relacionar as transportadoras cadastradas na VTEX com as transportadoras cadastradas nesse sistema. Por isso, sempre que uma nova transportadora for cadastrada na VTEX é necessário atualizar também esse De/Para. Caso contrário, erros de integração de pedido podem ocorrer, tais como este abaixo:

`PEDIDO 3352226239 27/03/2017 16:32:37 Interface = 15  Msg = transportadora / servico de entrega (Correios - Correios) nao cadastrados`
