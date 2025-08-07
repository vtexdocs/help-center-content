---
title: 'Detalhes de reembolso da PayU Romênia'
id: 29N1K0IzzGs2a6S2OyyqEi
status: PUBLISHED
createdAt: 2018-08-20T18:40:53.455Z
updatedAt: 2019-12-31T15:23:53.456Z
publishedAt: 2019-12-31T15:23:53.456Z
firstPublishedAt: 2018-08-20T18:55:19.400Z
contentType: tutorial
productTeam: Financial
author: authors_24
slugEN: payu-romania-refund-details
legacySlug: detalhes-de-reembolso-da-payu-romênia
locale: pt
subcategoryId: 3Gdgj9qfu8mO0c0S4Ukmsu
---

<div class="alerta alert-warning">
Este artigo se aplica apenas a pagamentos realizados na <b>Romênia</b>.
</div>

Cancelamentos de pagamento (que apenas podem ser feito para o valor total) ou reembolsos (totais ou parciais) não são processados imediatamente, mas sim com um timeout.

Aqui está a lógica do [sistema PayU](/pt/tutorial/configurar-gateway-payu-global):
A PayU aguarda __6 horas__ a partir do momento em que o pedido foi recebido (o que significa desbloquear o dinheiro da conta bancária do cliente) ou a partir do momento em que o pedido de reembolso foi recebido (ou seja, retorno total ou parcial do dinheiro após o pagamento ser concluído). Esta é uma medida de segurança (tanto para a PayU quanto para o cliente) para casos em que a solicitação é feita por acidente ou se o cliente mudar de ideia e não quiser mais um cancelamento ou reembolso.

Se um pedido for concluído hoje e a PayU receber uma solicitação de reembolso total ou parcial agora, a VTEX aguardará 24 horas antes de enviar a solicitação ao banco emissor, a fim de evitar possíveis problemas operacionais.

No histórico da PayU, constam casos em que o banco se confundiu com esse tipo de solicitação. E é por isso que esta medida de segurança foi implementada.

Se estivermos falando de um pedido concluído ontem ou há vários dias, com uma solicitação de reembolso preenchida hoje, aguardaremos as 6 horas especificadas acima antes de nos comunicarmos com o banco emissor.

Todos os itens acima se aplicam a solicitações manuais (colocadas a partir do PayU cPanel) ou a solicitações de servidor para servidor (VTEX), vazios ou reembolsos.

Se precisarmos remover uma solicitação de pagamento do sistema antes que o tempo limite expire, o procedimento é identificar o pagamento no PayP cPanel, clicar no número de referência para abrir a janela com detalhes do pedido, ir para a guia __Referir detalhes__ e clique no botão __Delete__.

Se o botão Excluir não estiver ativo e o tempo limite não tiver expirado, você poderá enviar rapidamente uma solicitação de e-mail para `help@payu.ro` para que a equipe da PayU possa excluir a solicitação de void/refund diretamente do sistema, mas apenas se ainda não tiver sido enviado ao banco emissor.

Se o pedido de reembolso ou de reembolso já tiver sido enviado pelo sistema ao banco emissor, não poderemos mais excluir / interromper o pedido de forma alguma.

![PayU Romania](//images.ctfassets.net/alneenqid6w5/eR53ZeK0Le8UMeQQs2osq/03a5bad4e5f9269dc12159b28fd27dd8/PayU_Romania.png)

Depois que a PayU enviar o pedido de reembolso ou de reembolso ao banco emissor, o status do pedido será atualizado no PayP cPanel como "REVERSE" (para vazios) ou "REEMBOLSO". E a VTEX receberá um webhook do PaymentsOS, portanto, o status do pedido também pode ser atualizado na plataforma (no Pagamentos e, consequentemente, refletido no OMS).

O tempo de desbloqueio ou devolução do dinheiro para a conta do cliente varia de acordo com o sistema e os procedimentos internos de cada banco emissor. Alguns bancos operam tais pedidos dentro de 1 a 2 dias após recebê-los da PayU, enquanto outros podem esperar até 2 semanas.
