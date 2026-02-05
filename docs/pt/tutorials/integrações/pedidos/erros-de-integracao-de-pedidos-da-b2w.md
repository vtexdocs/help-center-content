---
title: 'Erros de integração de pedidos da B2W'
id: 2iQqCJIfySN0JsCJkOG2h8
status: PUBLISHED
createdAt: 2021-08-26T15:31:43.878Z
updatedAt: 2023-03-29T21:25:20.723Z
publishedAt: 2023-03-29T21:25:20.723Z
firstPublishedAt: 2021-08-26T15:57:34.837Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: order-errors-in-the-b2w-integration
legacySlug: erros-de-integracao-de-pedidos-da-b2w
locale: pt
subcategoryId: 5m1qqfnmfYKsO0KiOQC8Ky
---

Há diversas razões pelas quais um pedido entre um marketplace e sua loja VTEX pode não integrar, e para cada uma delas existe uma notificação que indica a natureza do erro. Você encontra a mensagem de erro no Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**. Para visualizar a mensagem, basta clicar sobre o pedido.

Na B2W, há erros de integração de pedidos que ocorrem com mais frequência que outros. Este artigo seleciona os mais comuns e indica como resolvê-los.

#### Mensagens de erro

`Não há SLA disponível para o item do pedido`<br>
</br>`O SLA não está disponível`

`O item não está mais disponível`

Erros de SLA significam que algum fator está inviabilizando a entrega do pedido ao consumidor final. Para identificar a origem do erro e corrigi-lo, confira [Erros de SLA na integração de pedidos de marketplace](/pt/docs/tutorials/erros-de-sla-na-integracao-de-pedidos-de-marketplace).

____

#### Mensagem de erro

`Não é possível integrar o pedido pois o mesmo se encontra cancelado`

O cancelamento de um pedido na VTEX pode ser feito pelo Admin VTEX ou diretamente pelo consumidor. No entanto, uma vez que um pedido é cancelado, não é mais possível alterar seu _status_, portanto, não há uma solução para este tipo de erro. Caso deseje mais informações sobre o que ocasionou o cancelamento, consulte [Por que meu pedido foi cancelado?](/pt/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493).

____

#### Mensagem de erro

`Não é possível avançar com pedido incompleto`

Um pedido é considerado incompleto quando não recebeu todas as informações necessárias para ser finalizado. Apesar de, em geral, não ser possível recuperar pedidos incompletos, existe a possibilidade de resolver o erro com um reprocessamento manual. No seu Admin VTEX, no módulo **Marketplace > Conexões > Pedidos**, clique sobre o pedido com erro. Feito isso, o botão **Ações** se torna visível, clique sobre ele e escolha a opção **Reprocessar**. Para entender possíveis causas para este tipo de erro, veja [Como funcionam os pedidos incompletos](/pt/docs/tutorials/entendendo-os-pedidos-incompletos).

____

#### Mensagem de erro

`Pedido não encontrado`

Quando um pedido da B2W é dado como não encontrado, é necessário abrir um [chamado para suporte VTEX](/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).

____

#### Mensagem de erro

`Pedido fora do status para integrar`

Este erro ocorre quando o usuário prossegue com um pedido diretamente pela plataforma da B2W. Isso faz com que o sistema da VTEX não mais consiga identificar o _status_ do pedido, o que impossibilita sua integração, pois um pedido da B2W só é integrado quando está em um de dois _status_: _New_ (novo) ou _Approved_ (aprovado). Outros _status_ que existem são _Shipped_ (despachado), _Delivered_ (entregue), _Canceled_ (cancelado) e _Overdue_ (atrasado). Não existe uma solução para o erro mencionado, a orientação é que um pedido do marketplace nunca seja processado diretamente pela plataforma do marketplace, e sim pelo Admin VTEX.

____

#### Mensagem de erro

`Pedido com chave da nota inválida`

Para que um pedido seja integrado na plataforma VTEX, é necessário que ele tenha o valor da chave de acesso da nota fiscal eletrônica preenchido corretamente. Os valores aceitos são sequências numéricas de 44 caracteres. O erro mencionado acontece quando um pedido não possui um valor válido para a chave de acesso da nota fiscal eletrônica. A solução é alterar essa chave para um valor aceito, como pode ser visto em [Inserir nota fiscal no pedido](/pt/tutorial/como-inserir-a-nota-fiscal--tutorials_193). Feita a alteração, reprocesse manualmente o pedido. No Admin VTEX, no módulo **MARKETPLACE > Integrações > Pedidos**, clique sobre o pedido com erro. Isso tornará visível o botão **Ações,** clique sobre ele e escolha a opção **Reprocessar**.

____

#### Mensagem de erro

`O preço do pedido no marketplace é diferente do seu valor determinado na VTEX. Para integrar automaticamente pedidos com divergência de valores no OMS, acesse Pedidos > Gerenciamento de pedidos > Autorização de pedidos, e configure uma regra de Divergência de valores.`

Quando o preço definido por um seller é diferente do preço oferecido pelo marketplace, pedidos realizados em marketplaces podem não ser processados corretamente. Na VTEX, o fluxo de Autorização de pedidos permite o controle e a aprovação automática desses pedidos, a partir da configuração que o seller faz de uma [regra de Divergência de valores](/pt/docs/tutorials/regra-de-divergencia-de-valores). Somente usuários com [perfil de acesso](/pt/docs/tutorials/perfis-de-acesso) Admin Super (_Owner_) ou OMS Full podem [configurar uma regra de Divergência de valores](/pt/docs/tutorials/configuracao-da-regra-de-divergencia-de-valores).

Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você seja um seller. Enquanto você não criar a regra de Divergência de valores, pedidos com divergência de preço ficam retidos, sendo possível acompanhá-los no Admin VTEX, em **Marketplace > Conexões > Pedidos**.

### Saiba mais

- [Erros de falta de estoque na integração de pedidos de marketplace](/pt/docs/tutorials/erros-de-falta-de-estoque-na-integracao-de-pedidos-de-marketplace)
- [Erros de SLA na integração de pedidos de marketplace](/pt/docs/tutorials/erros-de-sla-na-integracao-de-pedidos-de-marketplace)
- [Resolução de erros de divergência de preço em pedidos de marketplace](/pt/docs/tutorials/resolucao-de-erros-de-divergencia-de-preco-em-pedidos-de-marketplace)
