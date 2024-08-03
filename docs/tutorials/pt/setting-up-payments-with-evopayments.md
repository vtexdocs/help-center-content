---
title: 'Configurar pagamento com EvoPayments'
id: 7CxSgoftps0DHsfR8otQMf
status: PUBLISHED
createdAt: 2024-03-11T17:36:12.910Z
updatedAt: 2024-03-14T16:37:46.611Z
publishedAt: 2024-03-14T16:37:46.611Z
firstPublishedAt: 2024-03-11T18:19:00.757Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-evopayments
locale: pt
legacySlug: configurar-pagamento-com-evopayments
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento EVO Payments. Por meio deste provedor, sua loja pode realizar vendas por meio do cartões de crédito, débito, private labels, cobranded e boletos.

Para configurar a EVO Payments, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __EvoPayments__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta EVO Payments.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor EVO Payments na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Liquidação automática__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li><b>Usar comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Liquidação automática imediatamente após a autorização do pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Liquidação automática imediatamente após a análise antifraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li><b>Desativado</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
8. Em __Habilitar autenticación 3DS__, selecione se deseja ativar a validação de segurança do 3DS.
9. Em __Habilitar autorización y captura__, selecione se deseja ativar esta função.
10. Em __Habilitar plan Iphone For Life__, selecione se deseja ativar esta opção.
11. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela EVO Payments, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, EVO Payments pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
