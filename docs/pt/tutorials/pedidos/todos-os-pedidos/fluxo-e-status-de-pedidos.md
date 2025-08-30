---
title: 'Fluxo e status de pedidos'
id: tutorials_196
status: PUBLISHED
createdAt: 2017-04-27T22:14:33.518Z
updatedAt: 2025-08-15T14:14:28.169Z
publishedAt: 2025-08-15T14:14:28.169Z
firstPublishedAt: 2017-04-27T23:02:47.616Z
contentType: tutorial
productTeam: Post-purchase
author: 30TBnJ838LXSZvdJFlcB8H
slugEN: order-flow-and-status
legacySlug: fluxo-de-pedido
locale: pt
subcategoryId: 2t00bBkcAwIkgSCGKsMOwY
---

O fluxo de pedidos descreve os estados, as possibilidades e as ações ao longo do ciclo de vida de um pedido. Com o fluxo, o lojista também acompanha as etapas mapeadas do pedido na plataforma (status).

Esse artigo contém as seguintes informações:
- Os [tipos de fluxos](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#tipos-de-fluxo) de pedidos possíveis na plataforma: [marketplace](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-do-marketplace), [seller](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-do-seller), [chain](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-chain) e [completo](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-completo).
- Uma [tabela com todos os status vistos pelo Admin e API](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#tabela-de-status-de-pedidos).
- Os casos em que [ocorre o cancelamento de um pedido](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#cancelamento-de-pedido).

> ℹ️ Para saber como acompanhar o fluxo de um pedido, confira o artigo [Acompanhamento de pedido](https://help.vtex.com/pt/tutorial/acompanhamento-de-pedidos--et0Ei7F3bjcrEmVAR2kKS).

## Tipos de fluxo

Há quatro fluxos de pedidos possíveis na VTEX:
- [Fluxo marketplace](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-do-marketplace): é o fluxo do pedido feito na [loja responsável apenas pela venda](https://help.vtex.com/pt/tutorial/o-que-e-um-marketplace--680lLJTnmEAmekcC0MIea8).
- [Fluxo seller](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-do-seller): é o fluxo do pedido visto pela [loja responsável por manusear o pedido para enviá-lo](https://help.vtex.com/pt/tutorial/o-que-e-um-seller--5FkLvhZ3Few4CWWIuYOK2w).
- [Fluxo completo](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-completo): é o fluxo de um pedido feito na loja responsável pela venda e entrega do pedido. Nesse caso, a loja atua simultaneamente como seller e marketplace. 
- [Fluxo chain](https://help.vtex.com/pt/tutorial/fluxo-e-status-de-pedidos--tutorials_196#fluxo-chain): é o fluxo do pedido visto pela loja que intermedia a venda entre marketplace e seller. Esse fluxo é similar ao fluxo de marketplace, no entanto, o processo de pagamento é feito somente no marketplace, e não na loja que atua como chain. Esse fluxo ocorre nos cenários de venda de [Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4).

> ⚠️ Para os casos de pedidos incompletos, confira o artigo [Como funcionam os pedidos incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294) para entender os motivos desse fluxo e de seu cancelamento.

### Fluxo do marketplace

![pedido_marketplace_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/fluxo-e-status-de-pedidos_1.png)

O fluxo do marketplace está integrado ao fluxo do seller. Quando um pedido que será entregue por um seller externo (não sendo o seller principal) é finalizado, o fluxo visto pelo marketplace é:

1. Iniciado com o status `Aguardando confirmação do seller` e automaticamente passa para o status `Pagamento Pendente`. Como o marketplace é responsável pelo recebimento do pagamento, há dois possíveis status seguintes: 
    * **O marketplace recebe a aprovação do pagamento**: o status passa para `Pagamento aprovado`. 
    * **O marketplace não recebe o pagamento**: é dado início ao processo de cancelamento do pedido, e o status passa para `Cancelando`.
2. Depois do pagamento aprovado e o tempo de [carência para cancelamento](https://help.vtex.com/pt/tutorial/configurar-o-tempo-de-carencia-para-cancelamento-do-pedido--jYFdnPDtNm4WCEkYWqqC) (estágio visível para o seller), o marketplace deve esperar o seller iniciar o manuseio do pedido. Essa é uma ação ativa e indica que o seller iniciou a preparação dos pacotes do pedido. Caso o seller não realize essa ação, o [pedido permanece no status Pronto para manuseio](https://help.vtex.com/pt/faq/pedido-esta-travado-em-pronto-para-manuseio-o-que-fazer--frequentlyAskedQuestions_771).
3. Depois da confirmação do preparo pelo seller, o status do pedido visto pelo marketplace poderá ficar em `Verificando nota fiscal` caso haja algum erro. Confira [os casos mais comuns](https://help.vtex.com/pt/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm) para que o pedido permaneça nesse status. Vale lembrar que se o pedido estiver parcialmente faturado, ele poderá voltar para o status `Pagamento aprovado` e a plataforma espera que o lojista [inclua as notas fiscais](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido-manualmente-beta--7p1h852V5t54KyscpgxE2v) corretamente. O valor da soma das notas fiscais deve corresponder ao valor total do pedido. 
4. Depois da confirmação do manuseio, o pedido é preparado para envio pelo seller.
5. Quando o seller insere corretamente as faturas, o status passa para `Faturado`. Esse status significa que a transação de compra foi realizada com sucesso e não é mais possível reverter ou alterar o status do pedido. A liquidação do pagamento ocorre quando o pedido chega nesse estágio.
6. O seller deve concluir o processo de envio do pedido.

Para saber como identificar pedidos que são provenientes de marketplace, consulte o artigo [Visualizar pedidos de marketplace em Todos os pedidos](https://help.vtex.com/pt/tutorial/lista-de-pedidos-beta--2QTduKHAJMFIZ3BAsi6Pi).

### Fluxo do seller

![pedido_fluxo_seller_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/fluxo-e-status-de-pedidos_2.png)

Esse é o fluxo do pedido visto pela loja responsável pelo envio dos produtos que compõem o pedido. O pedido foi realizado através de outra loja (o marketplace), e o fluxo do seller é iniciado depois da confirmação do pedido.

1. Quando o pedido é recebido pelo seller, seu status inicial é `Pedido aceito`.
2. Logo após o pedido ser recebido pelo seller, o status do pedido passa automaticamente para `Aguardando autorização para despachar`. Esse é um status de espera, para que o marketplace sinalize que obteve a confirmação do pagamento do pedido.

  > ❗ A plataforma permite o avanço manual do status *Aguardando autorização para despachar* clicando em `Autorizar despacho`. Porém, quando o seller avança manualmente, não significa que o marketplace liberou o pedido para manuseio, e isso implica em um desencontro de informações. Utilize a movimentação manual com cautela. Recomendamos utilizá-la somente mediante autorização do marketplace para o despacho do pedido.

3. O status passa automaticamente para `Janela para cancelamento`. O pedido ficará nesse estágio até o limite da [janela para cancelamento](https://help.vtex.com/pt/tutorial/configuracoes-gerais/#pedidos).

  > ℹ️ A carência do cancelamento existe para que o cliente possa cancelar a compra sem a aprovação da loja, em um determinado período de tempo configurado previamente. Depois desse período, a loja precisa autorizar a solicitação de cancelamento do cliente.

4. No status `Janela para cancelamento`, há duas possibilidades:
    * **Pedido não cancelado**: se o tempo de carência expira e o cliente não solicita o cancelamento da compra, o status segue para `Pronto para manuseio`. Esse é o status que indica ao seller que o pedido já deve ser preparado para o envio.
    * **Pedido cancelado**: caso o cliente tenha solicitado o cancelamento, ao invés de seguir para o manuseio, o pedido segue para cancelamento, e o status passará para `Iniciando cancelamento`. 
5. O pedido permanecerá no status `Pronto para manuseio` até que haja uma confirmação do seller de que ele iniciou o manuseio do pedido. A confirmação pode ser feita manualmente pelo Admi ou via integração com ERP utilizando a API [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling).
> ❗ Ao confirmar o início do manuseio, o seller assume a responsabilidade da reserva dos itens do pedido. A partir desse momento, se houver qualquer atualização no inventário, a plataforma VTEX desconsidera a reserva destes SKUs. Portanto, atualize o inventário para SKUs de um dado pedido apenas quando este for faturado. Dessa forma, evita-se a divergência de inventário dependendo da interação com a [integração de backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) da sua loja.

6. Uma vez que o manuseio foi iniciado, é hora de faturar o pedido. A plataforma espera que a nota fiscal seja incluída. Caso haja algum erro, o status do pedido poderá permanecer em `Verificando nota fiscal`. Confira os [casos mais comuns](https://help.vtex.com/pt/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm) para que o pedido permaneça nesse status. Vale lembrar que se o pedido estiver parcialmente faturado, ele poderá voltar para o status `Pagamento aprovado` até que o lojista [inclua as notas fiscais](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido-manualmente-beta--7p1h852V5t54KyscpgxE2v), que somadas devem corresponder ao valor total do pedido.
7. O último status do fluxo é o `Faturado`, após o qual o seller deve concluir o envio do pedido.

> ❗ Note que: <ul> <li>O **cancelamento do pedido** pode ser iniciado em vários estágios do fluxo do pedido, seja por parte do cliente ou da loja. Nesse caso, após solicitado, o cancelamento o processo se dá de forma automática, incluindo o ressarcimento do valor pago ao cliente. O processo de cancelamento é finalizado quando chega ao estágio *Cancelado*.</li> <li>Sellers têm autonomia para forçar manualmente a movimentação de pedido durante o status *Aguardando autorização para despachar*. Isso implica em realizar a entrega sem que o marketplace tenha confirmado a liberação e sem o recebimento do pagamento do pedido. Em caso de movimentação manual, é dever do seller conferir se o pedido está apto a ser manuseado, inclusive se o pagamento foi confirmado.</li> </ul>

### Fluxo completo

![pedido_fluxo_completo_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/fluxo-e-status-de-pedidos_3.png)

O fluxo completo do pedido é visto pela loja que realiza a venda e entrega do pedido. Ele é composto pelo fluxo de marketplace e o fluxo do seller de forma sequencial.

1. A etapa inicial de um pedido no fluxo é o status `Aguardando confirmação do seller`, que representa o recebimento do pedido.
2. O pedido automaticamente passa para o status `Pagamento pendente`. 
3. O sistema espera a confirmação do pagamento, e há duas formas de continuação no fluxo:
    * **O pagamento do pedido é aprovado:** o status do pedido passa para `Pagamento aprovado` e começa o status `Janela para cancelamento`. Esse status delimita o tempo que o cliente tem para cancelar a compra sem a aprovação da loja. O pedido permanece nesse status até o [limite de tempo que foi configurado](https://help.vtex.com/pt/tutorial/configuracoes-gerais/#pedidos).
    * **O pagamento do pedido não é aprovado:** a plataforma inicia o processo de cancelamento. Isso acontece automaticamente com o status do pedido passando por `Pagamento negado` e `Cancelando`. O pedido permanece nesse status até que a plataforma finalize o cancelamento, e o status mude para `Cancelado`. Depois de o pedido ser cancelado, o fluxo é finalizado.
4. Com o pagamento aprovado e o tempo de cancelamento expirado, o status do pedido passa para `Pronto para manuseio`. Esse status sinaliza para o lojista que o pagamento foi confirmado e que agora deve ser feito o manuseio do pedido. A loja deve confirmar para a plataforma que iniciou o manuseio para o pedido progredir no fluxo. A confirmação pode ser feita manualmente pelo Admin ou via [API](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) com um ERP, por exemplo, utilizando a rota [Start handling order](https://developers.vtex.com/docs/api-reference/orders-api#post-/api/oms/pvt/orders/-orderId-/start-handling).
> ❗ Ao confirmar o início do manuseio, o seller assume a responsabilidade da reserva dos itens do pedido. A partir desse momento, se houver qualquer atualização no inventário, a plataforma VTEX desconsidera a reserva destes SKUs. Portanto, atualize o inventário para SKUs de um dado pedido apenas quando este for faturado. Dessa forma, evita-se divergência de inventário dependendo da interação com a [integração de backoffice](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide) da sua loja.

5. Com o manuseio iniciado, o status do pedido passa para `Preparando entrega` e a próxima etapa é faturar o pedido. O sistema espera a nota fiscal com o status  `Verificando nota fiscal`. É preciso [incluir a Nota Fiscal](https://help.vtex.com/pt/tutorial/como-faturar-um-pedido-manualmente-beta--7p1h852V5t54KyscpgxE2v) que corresponda ao valor total do pedido. 
6. Com as notas fiscais incluídas, o status do pedido passa para o último status do fluxo: `Faturado`. A loja deve então concluir o envio do pedido.

O cancelamento do pedido pela loja pode ser feito até o status `Faturado`. Depois de faturado, o pedido pode ter itens devolvidos, mas não pode ser alterado. Confira os artigos [Cancelar pedido](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) e [Cancelamento de pedido solicitado pelo cliente](https://help.vtex.com/pt/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo) para saber mais sobre o cancelamento de pedidos na perspectiva da loja e do cliente.

### Cancelamento de pedido

O cancelamento de um pedido pode ser iniciado por diversos motivos. Para cada tipo de cancelamento, há um resultado no fluxo do pedido:

- **[Pedidos incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294):** quando o pedido está incompleto, o fluxo de pedido não é iniciado. Isso ocorre para que o seller não realize seu manuseio e não haja reserva do inventário.
- **[Solicitação de cancelamento por parte do cliente](https://help.vtex.com/pt/tutorial/como-funciona-o-cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo):** o cliente realiza o cancelamento durante a janela para cancelamento ou solicita o cancelamento para a loja. Quando o cancelamento ocorre dentro dessa período, os itens do pedido não são reservados. No entanto, se o cancelamento ocorrer após o manuseio do pedido (após o status `Iniciar manuseio`), os itens são reservados.
- **[Cancelamento por parte da loja](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/4ts2ItvjYo8wm5gg76miS3):** quando o seller ou marketplace desiste da venda e cancela o pedido.

Quando é feita a solicitação de cancelamento de um pedido, a plataforma processa automaticamente o cancelamento do pedido. O ressarcimento do pagamento ao cliente depende do estágio em que o pagamento está e do meio de pagamento utilizado.

Não é possível [cancelar pedidos](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) que já tenham sido [faturados parcialmente](https://help.vtex.com/pt/tracks/pedidos--2xkTisx4SXOWXQel8Jg8sa/q9GPspTb9cHlMeAZfdEUe). Caso o cliente deseje substituir ou remover itens do pedido, é possível [alterar o pedido](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).

> ℹ️ Saiba mais sobre cancelamento e reembolso nos artigos [Por que meu pedido cancelado foi cobrado na fatura do cliente](https://help.vtex.com/pt/faq/por-que-meu-pedido-cancelado-foi-cobrado-na-fatura-do-cliente), [Reembolso ou cancelamento](https://help.vtex.com/pt/tutorial/payment-provider-protocol--RdsT2spdq80MMwwOeEq0m#reembolsocancelamento).

Enquanto o cancelamento está sendo processado, o status do pedido permanece em `Cancelando`. Depois que o cancelamento é concluído, o status do pedido passa para `Cancelado`. 

> ❗ Observe que quando o cancelamento ocorre antes da loja iniciar o manuseio do pedido (status *Preparando manuseio*), os itens têm a [reserva cancelada](https://help.vtex.com/pt/tutorial/how-does-reservation-work--tutorials_92) no inventário.  No entanto, se o cancelamento é feito após esse status, os itens já terão a [reserva reconhecida](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-reconhecida) no inventário e a loja deve atualizar a quantidade de itens do inventário para que os SKUs de um pedido cancelado tenham também a sua reserva cancelada.

Para saber mais sobre cancelamento de pedidos, confira o artigo [Por que meu pedido foi cancelado](https://help.vtex.com/pt/faq/por-que-meu-pedido-foi-cancelado--frequentlyAskedQuestions_493).

### Fluxo chain

![pedido_fluxo_chain_pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pedidos/todos-os-pedidos/fluxo-e-status-de-pedidos_4.png)

O fluxo de pedidos visto pela loja da camada intermediária de uma venda em[ Multilevel Omnichannel Inventory](https://help.vtex.com/pt/tutorial/multilevel-omnichannel-inventory--7M1xyCZWUyCB7PcjNtOyw4) é semelhante ao fluxo de pedidos do marketplace, exceto pelo recebimento do pagamento de pedidos. No estágio de `Pagamento pendente`, ao invés do chain receber o pagamento diretamente do Gateway, o que ocorre é que o marketplace informa ao chain que recebeu a confirmação do pagamento. 

## Observações

- [Pedidos incompletos](https://help.vtex.com/pt/tutorial/entendendo-os-pedidos-incompletos--tutorials_294): todos os pedidos começam na plataforma como incompletos. Os pedidos são completados durante o processo de finalização da compra. Se o pedido não seguir para a finalização, é possível que haja problemas durante o pagamento (externo a VTEX) ou falta de dados.
- Os pedidos podem ter itens alterados até que comecem a ser faturados. Saiba mais sobre alteração e substituição de itens nos artigos [Substituição de pedidos](https://help.vtex.com/pt/tutorial/substituicao-de-pedidos--2IK9mwQjBKseQmE8K8saO8) e [Alteração de itens de um pedido finalizado](https://help.vtex.com/pt/tutorial/alteracao-de-itens-de-um-pedido-finalizado--tutorials_190).
- Se um cancelamento é solicitado pelo cliente e essa solicitação é negada pelo lojista, o pedido pode seguir para status de `Pagamento pendente`.
- Nos fluxos de pedidos com o status `Pronto para manuseio`, a loja deve realizar uma confirmação. É preciso de uma autorização ativa da loja para confirmar esse status e dar prosseguimento ao fluxo do pedido.
- A baixa no estoque acontece automaticamente, quando a loja atualiza a quantidade de itens do inventário. Para saber mais sobre a reserva e a baixa no estoque, confira o artigo [Como a reserva funciona](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92). 

## Tabela de status de pedidos

Veja abaixo a tabela com os status de pedido. As informações da tabela estão dividas nas seguintes colunas:

- **Status (Gerenciamento de pedidos):** identificação do status pelo Admin.
- **Status (API):** identificação do status via API.
- **Visto por:** em qual fluxo o status fica visível (marketplace, seller, chain e completo).
- **Significado:** significado detalhado do status.  

> ⚠️ Observe que os status do fluxo completo do pedido (fluxo visto pelas lojas responsáveis pela venda e entrega dos pedidos) coincidem com os status de marketplace e seller. Alguns status podem ser vistos via API, mas não ficam visíveis no fluxo do pedido visto no Admin no módulo **Todos os pedidos**.

<style type="text/css">
.tg  {border-collapse:collapse;border-color:#ccc;border-spacing:0;}
.tg td{background-color:#fff;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Fabriga, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{background-color:#f0f0f0;border-color:#ccc;border-style:solid;border-width:1px;color:#333;
  font-family:Fabriga, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-cly1{text-align:left;vertical-align:middle}
.tg .tg-9p9e{background-color:#FFF;color:#F71963;text-align:left;text-decoration:underline;vertical-align:top}
.tg .tg-36r3{background-color:#727273;color:#FFF;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-zr06{background-color:#FFF;text-align:left;vertical-align:middle}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-36r3"><span style="font-weight:700">Status Admin</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Status API</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Status Minha conta</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Visto por</span></th>
    <th class="tg-36r3"><span style="font-weight:700">Significado</span></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">null</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Pedidos criados e incompletos. O fluxo ainda pode ser iniciado pelo sistema ou o status do pedido consta como</span> <span style="font-weight:400;color:#3F3F40;background-color:#E3E4E6">CancellationData</span><span style="font-weight:400">, informando que ocorreu uma falha ao tentar completá-lo.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">order-created*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Pedido criado. O processamento dos dados do pedido é iniciado. Este é o primeiro estágio de um pedido, e significa que o sistema reuniu as informações básicas para processá-lo.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pagamento negado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Cancelado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O pagamento foi negado.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pedido aceito</span></td>
    <td class="tg-zr06"><span style="font-weight:400">order-accepted</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller recebe o pedido.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelando</span></td>
    <td class="tg-zr06"><span style="font-weight:400">canceling*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Momento em que o pedido vai para o cancelamento. Nesse estágio, o módulo de</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">Pagamentos</span>](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) <span style="font-weight:400">é notificado sobre o cancelamento. O pedido ficará nesse status até que o módulo de Pagamentos conclua o processo de cancelamento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">on-order-completed</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">A compra foi processada no checkout. Os dados do pedido estão completos.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">on-order-completed-ffm</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">A compra foi processada no checkout. Os dados do pedido estão completos.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pagamento aprovado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">payment-approved</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Pagamento aprovado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O pagamento do pedido foi aprovado.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pagamento pendente</span></td>
    <td class="tg-zr06"><span style="font-weight:400">payment-pending</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Aprovando pagamento</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status de espera pela confirmação do pagamento, no módulo de</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">Pagamentos</span>](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG)<span style="font-weight:400">. Independentemente de o pagamento ter sido ou não confirmado, esse passo é obrigatório.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelamento solicitado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">request-cancel</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace e fluxo completo</span></td>
    <td class="tg-9p9e">[<span style="font-weight:400;color:#F71963;background-color:transparent">Cliente solicita o cancelamento do pedido</span>](https://help.vtex.com/pt/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo)<span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">canceled</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Cancelado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O pedido é finalizado sem sucesso. A transação de pagamento no módulo de</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">Pagamentos</span>](https://help.vtex.com/pt/tracks/pagamentos--6GAS7ZzGAm7AGoEAwDbwJG) <span style="font-weight:400">é cancelada neste momento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Janela para mudança de pagamento</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-change-payment</span></td>\
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Período de tempo para mudança de pagamento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Janela para mudança de seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-change-seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Período de tempo para</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">mudança de seller</span>](https://help.vtex.com/pt/tutorial/veja-como-utilizar-o-change-seller--5TBAwO2kOAMw44uyaaQMQO)<span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Aguardando confirmação do seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Pedido confirmado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, fluxo completo e chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Aguardando liberação do seller para prosseguir com o fluxo do pedido.</span></td>
  </tr>
    <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-fulfillment</span></td>
      <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Espera pelo fulfillment do pedido. Status exclusivo para lojas que utilizam um Warehouse Management System (WMS).</span></td>
  </tr>
    <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-ffmt-authorization</span></td>
      <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Aguardando a autorização do marketplace.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Aguardando autorização para despachar</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-manual-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">É um status de espera, no qual o seller aguarda o marketplace autorizar a continuação dos processos do pedido.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Autorizar despacho</span></td>
    <td class="tg-zr06"><span style="font-weight:400">authorize-fulfillment</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller, fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Processo interno de liberação para manuseio. Aqui ocorre a</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">confirmação da reserva</span>](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92#reserva-confirmada)<span style="font-weight:400">. Quando o marketplace não autoriza o seller a despachar o pedido em até 30 dias, o pedido é automaticamente cancelado pela plataforma.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Janela para cancelamento</span></td>
    <td class="tg-zr06"><span style="font-weight:400">window-to-cancel</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Preparando pedido</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status do tempo de cancelamento do cliente. Após a aprovação do pagamento, o cliente tem 30 minutos (definido como padrão nas</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">Configurações Gerais</span>](https://help.vtex.com/pt/tutorial/configuracoes-gerais/) <span style="font-weight:400">do módulo de</span> <span style="font-weight:700">Gerenciamento de Pedidos</span><span style="font-weight:400">) para realizar seu cancelamento. Nesse período, o estorno do pedido é realizado automaticamente.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">ready-for-invoicing</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O pedido está pronto para ser faturado em lojas que tem picking e packing no processo de fulfillment.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Verificando nota fiscal</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoice*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Preparando pedido</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, chain e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">A plataforma está verificando a nota fiscal incluída. Se esse status permanecer, é possível ter ocorrido problemas na liquidação do pagamento ou na inclusão da fatura. Saiba mais em</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">Por que o pedido está no status "Verificando fatura"</span>](https://help.vtex.com/pt/tutorial/por-que-o-pedido-esta-no-status-verificando-fatura--5VJjxRjeH6SimiG0Wkk2gm)<span style="font-weight:400">.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Faturado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoiced</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Entregando à transportadora</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O fluxo foi finalizado com sucesso e o pedido foi entregue à transportadora. Se a transação foi feita via cartão de crédito, a liquidação do valor é realizada neste momento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Faturado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoiced (após usar o endpoint [Update order tracking](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-/tracking))</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Enviando pedido</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O fluxo foi finalizado com sucesso e o pedido está sendo enviado. Se a transação foi feita via cartão de crédito, a liquidação do valor é realizada neste momento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Faturado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">invoiced (após enviar `true` no campo `isDelivered` do endpoint [Update order tracking](https://developers.vtex.com/docs/api-reference/orders-api#put-/api/oms/pvt/orders/-orderId-/invoice/-invoiceNumber-/tracking))</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Pedido enviado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace, seller, chain e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O fluxo foi finalizado com sucesso e o pedido enviado. Se a transação foi feita via cartão de crédito, a liquidação do valor é realizada neste momento.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Pronto para manuseio</span></td>
    <td class="tg-zr06"><span style="font-weight:400">ready-for-handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Preparando pedido</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status que indica que é preciso iniciar o manuseio, preparar a nota fiscal e o rastreamento do pedido. Nesse status, ocorre a confirmação da</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">reserva</span>](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92) <span style="font-weight:400">do item. Em geral, essa ação é realizada por uma</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">integração de ERP</span>](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide#send-order-cancelations)<span style="font-weight:400">, mas é possível fazê-la manualmente pelo gerenciamento de pedidos. O pedido só seguirá o fluxo após a confirmação.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Iniciar manuseio</span></td>
    <td class="tg-zr06"><span style="font-weight:400">start-handling*</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller, fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status de autorização para o fluxo do manuseio continuar. É utilizado quando a autorização é feita manualmente. Caso haja</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">integração com ERP</span>](https://developers.vtex.com/vtex-rest-api/docs/erp-integration-guide#send-order-cancelations)<span style="font-weight:400">, esse status espera a confirmação do ERP para que o fluxo do pedido continue.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Cancelamento solicitado</span></td>
    <td class="tg-zr06"><span style="font-weight:400">cancellation-requested</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Cancelamento solicitado.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-for-mkt-authorization</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Chain</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Esperando autorização do marketplace para enviar a autorização para o seller.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">waiting-seller-handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace da conta principal esperando o início do processo de manuseio, quando se trata de um pedido de Multilevel Omnichannel Inventory. Para o seller white label, aparece o status authorize-fulfillment.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Preparando entrega</span></td>
    <td class="tg-zr06"><span style="font-weight:400">handling</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Preparando pedido</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Seller, fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Status no qual os itens do pedido são</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">reservados</span>](https://help.vtex.com/pt/tutorial/como-a-reserva-funciona--tutorials_92)<span style="font-weight:400">. O pedido fica em manuseio aguardando notificações de fatura, geralmente vindas do ERP.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Aprovar pagamento</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Ação do sistema. O fluxo não para nesse status a não ser que tenha erro.</span></td>
  </tr>
  <tr>
    <td class="tg-zr06"><span style="font-weight:400">Aguardando decisão do seller</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">-</span></td>
    <td class="tg-zr06"><span style="font-weight:400">Marketplace e fluxo completo</span></td>
    <td class="tg-zr06"><span style="font-weight:400">O pedido aguarda a confirmação do seller de que o pedido será cancelado.</span></td>
  </tr>
  <tr>
    <td class="tg-cly1"><span style="font-weight:400">Solicitar cancelamento</span></td>
    <td class="tg-cly1"><span style="font-weight:400">-</span></td>
    <td class="tg-cly1"><span style="font-weight:400">-</span></td>
    <td class="tg-cly1"><span style="font-weight:400">Marketplace e fluxo completo</span></td>
    <td class="tg-cly1"><span style="font-weight:400">Status que dá início ao fluxo de cancelamento. Há dois tipos de cancelamento possíveis: pela</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">loja</span>](https://help.vtex.com/pt/tutorial/como-cancelar-pedido--tutorials_186) <span style="font-weight:400"> e pelo</span> [<span style="font-weight:400;color:#F71963;background-color:transparent">cliente</span>](https://help.vtex.com/pt/tutorial/cancelamento-de-pedido-por-parte-do-cliente--3wEI6DUNtecooG2Ki4Akqo)<span style="font-weight:400">.</span></td>
  </tr>
</tbody>
</table>

<br></br>

> ℹ️ Os status assinalados com asteriscos (*) na tabela não permitem modificação ou cancelamento, pois estão sob ação da plataforma.
