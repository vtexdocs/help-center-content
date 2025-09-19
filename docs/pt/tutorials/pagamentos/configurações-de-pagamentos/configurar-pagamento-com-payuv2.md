---
title: 'Configurar pagamento com PayUv2'
id: 7twMgKUZZtJGmR72wS1k3n
status: PUBLISHED
createdAt: 2024-03-08T18:30:40.587Z
updatedAt: 2024-03-13T15:35:06.533Z
publishedAt: 2024-03-13T15:35:06.533Z
firstPublishedAt: 2024-03-08T18:47:05.125Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-payuv2
legacySlug: configurar-pagamento-com-payuv2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PayUv2. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito, débito, private label, co-branded, promissórias e boleto bancário. 

Para configurar o PayUv2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PayUv2__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta PayUv2.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PayUv2 na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
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
8. Caso deseje utilizar o [split de pagamento](/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
9. Em __Campos do provedor__, no campo __Tipo Autorizacion__, selecione se suas transações de pagamento são executadas em fluxos de uma ou duas etapas. Para fluxos de uma etapa, selecione __Autorizacion y Captura__. Para fluxos de duas etapas, selecione __Pre-Autorizacion__.
10. Em __Public Key__, informe a sua chave API da PayU.
11. Em __Idioma__, selecione qual linguagem deve ser utilizada no sistema da PayU.
12. Em __Expiración pago (días)__, selecione o período em que deseja configurar o vencimento de pagamentos realizados por promissórias.
13. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela PayUv2, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor PayUv2 pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
