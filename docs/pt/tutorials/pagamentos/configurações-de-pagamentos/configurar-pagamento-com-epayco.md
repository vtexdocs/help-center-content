---
title: 'Configurar pagamento com ePayco'
id: 10YSD8qlJJmkX8rCgOYSEC
status: PUBLISHED
createdAt: 2024-12-10T20:09:18.746Z
updatedAt: 2025-07-02T20:17:06.460Z
publishedAt: 2025-07-02T20:17:06.460Z
firstPublishedAt: 2024-12-10T20:24:14.348Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-epayco
legacySlug: configurar-pagamento-com-epayco
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento ePayco.

Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Mastercard, Visa, American Express, Diners, Promissories, PSE, Efecty, Sured, Discover, JCB, Daviplata, Red Servi, Punto Red, Gana, EpaycoRedirect e EpaycoTransparent.

Para configurar ePayco, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **epayco** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta ePayco.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor ePayco na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li>**Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
    	<li>**Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>
    	<li>**Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

8. Em **Campos do provedor**, preencha os campos **PUBLIC_KEY** e **PRIVATE_KEY** conforme orientações do provedor.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela ePayco, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor ePayco pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

