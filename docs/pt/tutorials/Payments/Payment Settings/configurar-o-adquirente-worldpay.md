---
title: 'Configurar pagamento com Worldpay-Payments-Via-WPG'
id: 7GCtigwhNYMi604UM0KeO6
status: ARCHIVED
createdAt: 2018-02-28T22:09:45.321Z
updatedAt: 2024-10-03T16:17:26.721Z
publishedAt: 
firstPublishedAt: 2018-02-28T22:38:14.737Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-the-worldpay-acquirer
locale: pt
legacySlug: configurar-o-adquirente-worldpay
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A Worldpay é um [adquirente](/pt/tutorial/o-que-e-um-adquirente) de atuação global, capaz de processar pagamentos nos mais diversos tipos de moedas e cartões.

Para configurar o Worldpay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Worldpay-Payments-Via-WPG__ na barra de busca e clique sobre o nome do provedor.
4. Nos campos __Chave de aplicação__ e __Token de aplicação__ insira as informações que foram fornecidas pela Worldpay.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Worldpay na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
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
8. Caso deseje utilizar o [split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).

9. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar app` e siga as instruções de instalação.

10. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Worldpay, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Worldpay pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
