---
title: 'Configurar pagamento com Braintree'
id: 3Is3N2MmTldXPa2FtiV8xy
status: PUBLISHED
createdAt: 2022-08-11T12:01:04.231Z
updatedAt: 2024-03-18T11:55:35.217Z
publishedAt: 2024-03-18T11:55:35.217Z
firstPublishedAt: 2022-08-11T12:27:01.656Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-braintree
locale: pt
legacySlug: configurar-pagamento-com-braintree
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Braintree.
Por meio deste provedor, sua loja pode realizar vendas or cartões de crédito e débito.

Para configurar Braintree-DCC, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Braintree-DCC__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos de cadastro __Chave de aplicação__ e __Token de aplicação__ com os dados fornecidos pelo Braintree.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Braintree na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
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
8. Em __Campos do provedor__, selecione ou preencha os campos abaixo com as informações da sua conta Braintree:
   - __Change Order Single Charge__
   - __PayPal Secret (opcional)__
   - __PayPal Client ID (opcional)__
   - __PayPal Merchant ID (opcional)__
   - __Merchant Account Id (opcional)__
   - __Merchant Id (Braintree)__
9. Clique em `Salvar`.

Para configurar as condições de pagamento, acesse [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento#).

Depois de seguir os passos indicados, Braintree-DCC pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

