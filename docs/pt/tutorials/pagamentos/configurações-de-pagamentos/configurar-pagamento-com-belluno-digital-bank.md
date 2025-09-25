---
title: 'Configurar pagamento com Belluno Digital Bank'
id: 4UI59HycmHE1CcUuGMgwbF
status: PUBLISHED
createdAt: 2025-09-25T17:47:12.117Z
updatedAt: 2025-09-25T18:12:24.646Z
publishedAt: 2025-09-25T18:12:24.646Z
firstPublishedAt: 2025-09-25T18:12:24.646Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-belluno-digital-bank
legacySlug: configurar-pagamento-com-belluno-digital-bank
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Belluno Digital Bank. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito e PIX.

Para configurar o Belluno Digital Bank, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __BellunoDigitalBank__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, clique em __Autorizar via OAuth__. Neste momento, você será redirecionado para a página do Belluno Digital Bank, onde deverá acessar a sua conta, e autorizar a conexão da VTEX na sua conta do Belluno Digital Bank. Após o processo de autorização, você retornará automaticamente para o Admin VTEX.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Belluno Digital Bank na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Liquidação automática__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li>**Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li>**Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li>**Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

8. Clique em __Salvar__.

Para configurar os métodos de pagamento a serem processados pela Belluno Digital Bank, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Belluno Digital Bank pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento. 
