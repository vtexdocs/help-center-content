---
title: 'Configurar gateway PagarMeV2'
id: 5TugxXNMOs0Ocyg4uqussM
status: PUBLISHED
createdAt: 2018-04-10T18:50:48.932Z
updatedAt: 2024-01-23T19:19:58.174Z
publishedAt: 2024-01-23T19:19:58.174Z
firstPublishedAt: 2018-04-11T21:51:25.333Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-pagarmev2-gateway
legacySlug: configurar-gateway-pagarmev2
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível processar pagamentos com o provedor PagarMe por meio das integrações V2 e V3.

> ⚠️ Caso deseje configurar a versão V3 da Pagarme em sua loja, acesse [Configurar pagamento com PagarMeV3](/pt/docs/tutorials/configurar-pagamento-com-pagarmev3).

Para configurar a PagarMeV2, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagarMeV2__ na barra de busca e clique sobre o nome do provedor.
4. Preencha os campos indicados com as seguintes informações:<br><br>
<ul>
<li>**Chave de aplicação** e **Token de aplicação**: insira as informações que foram fornecidas pela Pagar.me.</li>
<li>**Captura automática de pagamento**: selecione uma das seguintes opções:<br><br>
    <ul>
    	<li>**Use O Comportamento Recomendado Pelo Processador de Pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Imediatamente: Captura Automática Ao Autorizar O Pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li>**Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento *– Imediatamente: Captura Automática Ao Autorizar O Pagamento*).</li>
   		<li>**Desativado: Não Capturado Automaticamente**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
    </ul>
  </li>
</ul>
5. __Nome na fatura__: insira o nome que irá identificar sua loja na fatura do consumidor.
6. __Ativar split e enviar recebedores?__: caso queira utilizar a solução de split de pagamentos, selecione __Sim__ e preencha as informações solicitadas de acordo com o que foi negociado junto à Pagar.me.<br><br>
<ul>
  <li>**Responsabilidade pelas tarifas de pagamento**: escolha entre Marketplace, Markeplace + Sellers ou Sellers.</li>
  <li>**Responsabilidade pelos chargebacks**: escolha entre Marketplace, Markeplace + Sellers ou Sellers.</li>
</ul>
7. Clique em __Salvar__.

## Configurar condição de pagamento

Depois de concluir as etapas indicadas, o __PagarMeV2__ estará configurado na sua loja. 

Caso queira associá-lo à uma condição de pagamento que seja compatível com o PagarMeV2, siga o artigo [Configurar condições de pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

