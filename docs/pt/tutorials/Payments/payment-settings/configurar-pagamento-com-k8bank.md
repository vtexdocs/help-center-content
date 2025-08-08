---
title: 'Configurar pagamento com K8Bank'
id: 1ewZll1fwjClvp5Wl1uES1
status: PUBLISHED
createdAt: 2023-09-18T13:14:17.375Z
updatedAt: 2024-01-23T17:56:32.780Z
publishedAt: 2024-01-23T17:56:32.780Z
firstPublishedAt: 2023-09-18T13:48:29.694Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-k8bank
legacySlug: configurar-pagamento-com-k8bank
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento K8Bank. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito, débito, private labels, cobranded, boletos bancário e PIX.

Para configurar o K8Bank, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __K8Bank__ na barra de busca e clique sobre o nome do provedor.
4. Nos campos __Application Key__, __Application Token__, __cnpj__ e __CobrancasClientId__ insira as informações que foram fornecidas pelo K8Bank.
5. No campo __Captura automática de pagamento__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li><b>Use o comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Imediatamente: captura automática ao autorizar o pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Imediatamente: captura automática ao passar a análise de risco de fraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Imediatamente: Captura Automática Ao Autorizar O Pagamento").</li>
   		<li><b>Agendada: defina quando a captura automática será realizada</b>: ao selecionar esta opção, o campo <b>Prazo agendado em horas para a captura automática</b> estará disponível, e deve ser preenchido com o período no qual a captura automática acontecerá. Este período deve estar em acordo com os limites permitidos pelo provedor de pagamento.</li>        
   		<li><b>Desativado: não capturado automaticamente</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
6. Em __Ativar divisão e enviar recebedores?__, selecione se o split de pagamentos estará disponível para o marketplace e os sellers.

7. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela K8Bank, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o conector K8Bank pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
