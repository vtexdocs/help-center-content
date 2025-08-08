---
title: 'Configurar pagamento com Worldline Global Online Pay'
id: 5LAfBIreDXYspNC0OScnL9
status: PUBLISHED
createdAt: 2025-07-02T14:54:36.207Z
updatedAt: 2025-07-02T18:05:48.881Z
publishedAt: 2025-07-02T18:05:48.881Z
firstPublishedAt: 2025-07-02T18:05:48.881Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-worldline-global-online-pay
legacySlug: configurar-pagamento-com-worldline-global-online-pay
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Worldline Global Online Pay. Com este provedor, sua loja pode realizar vendas por meio de cartões de crédito, PayPal, Worldline Global Online Pay, MultiBanco, Bizum, Klarna Pay Later, Klarna, e Klarna Pay Now.

Para configurar a Worldline Global Online Pay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Worldline Global Online Pay__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Worldline Global Online Pay.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Worldline Global Online Pay na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
<ul>
    	<li><b>Usar comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Liquidação automática imediatamente após a autorização do pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
    	<li><b>Liquidação automática imediatamente após a análise antifraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>
    	<li><b>Desativado</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

8. Em **Campos do provedor**, selecione ou preencha os campos **Environment, Merchant ID, Webhooks Key, Webhooks Secret, Payment action, Automatic capture, Enable 3-D secure authentication, Request authentication exemption for low-value baskets, Enforce strong customer authentication for every payment, Enable group cards, Template file name, Oney3x4x payment option, Session Timeout, Direct Debit Recurrence Type, Direct Debit Signature Type, Bank transfer by Worldline Instant payment only** conforme orientações do provedor.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Worldline Global Online Pay, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Worldline Global Online Pay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
