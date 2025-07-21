---
title: 'Erros de SLA na integração de pedidos de marketplace'
id: X8lSfxT44OyxkxwvnRk1X
status: PUBLISHED
createdAt: 2021-08-02T22:55:49.181Z
updatedAt: 2023-03-29T23:48:42.116Z
publishedAt: 2023-03-29T23:48:42.116Z
firstPublishedAt: 2021-08-02T23:29:49.747Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: sla-errors-in-marketplace-integration-orders
locale: pt
legacySlug: erros-de-sla-na-integracao-de-pedidos-de-marketplace
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Quando um pedido realizado em marketplace não é integrado na VTEX, uma mensagem de erro sinaliza o tipo de problema que ocorreu. O _status_ de integração do pedido aparece no seu Admin, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem de erro, basta clicar sobre o pedido.

Muitas vezes a mensagem de erro faz menção a SLA, sigla para _Service Level Agreement,_ que é o acordo de serviço firmado entre a loja VTEX e o marketplace. Erros de SLA significam que algum fator está inviabilizando a entrega do pedido ao consumidor final. 

Para identificar a natureza do problema, realize uma [simulação de envio](/pt/tutorial/simulacao-de-frete). O Simulador de envio é uma ferramenta que possibilita checar as condições de entrega do produto sem de fato abrir um pedido.

Os problemas mais comuns que ocasionam erros de SLA são:

- **Falta de estoque**: indisponibilidade de um ou mais SKUs do pedido. Para mais informações, veja [Erros de falta de estoque na integração de pedidos de marketplace](/pt/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP).
- **Item não consta na coleção ou política comercial:** verifique se o SKU está marcado corretamente na coleção ou política comercial definida para o marketplace. Saiba mais em [Associação de SKU à Política Comercial](/pt/tutorial/associacao-de-sku-a-politica-comercial--1qFAiybogHCStRO65sy4vb).
- **CEP de entrega não atendido pela estratégia de envio:** a entrega do pedido para o endereço pretendido não está configurada na sua [política de envio](/pt/tutorial/politica-de-envio--tutorials_140).
- **Doca não associada à política comercial:** é preciso que, ao [cadastrar a doca](/pt/tutorial/como-cadastrar-doca--7K3FultD8I2cuuA6iyGEiW), ela tenha sido vinculada à política comercial definida para o marketplace
- **SKU inativo:** o SKU não está ativo, e somente SKUs ativos são integrados. Verifique o _status_ do item no seu Admin, no módulo _Catálogo > Produtos e SKUs_.

Após solucionar o erro, o pedido deve ser reprocessado manualmente. No seu Admin, no módulo **Marketplace > Conexões > Pedidos**, clique sobre o pedido com erro. Feito isso, o botão **Ações** se torna visível, clique sobre ele e escolha a opção **Reprocessar**.

<div class="alert alert-info">
Caso o erro persista, abra um <a href="https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex--16yOEqpO32UQYygSmMSSAM?locale=pt">chamado para suporte VTEX</a>.
</div>

### Saiba mais

- [Erros de falta de estoque na integração de pedidos de marketplace](/pt/tutorial/erros-de-falta-de-estoque-em-pedidos-de-integracao-com-marketplace--s1i5OCcPFslrMkZJLDnfP)
- [Simulador de envio](/pt/tutorial/simulacao-de-frete)
- [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/tutorial/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace--6MbmPX4SKyRkcTJxVhRna8)
