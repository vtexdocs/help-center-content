---
title: 'Configurar gateway PagarMeV2'
id: 5TugxXNMOs0Ocyg4uqussM
status: PUBLISHED
createdAt: 2018-04-10T18:50:48.932Z
updatedAt: 2023-03-26T21:04:07.182Z
publishedAt: 2023-03-26T21:04:07.182Z
firstPublishedAt: 2018-04-11T21:51:25.333Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: configurar-gateway-pagarmev2
legacySlug: configurar-gateway-pagarmev2
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O PagarMeV2 é a versão mais recente do conector do [gateway](/pt/tutorial/o-que-e-um-gateway-de-pagamentos) Pagar.me. Para configurá-la, siga os passos abaixo:

## Configurar afiliação de gateway PagarMeV2

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Em __Afiliações de gateway__, clique no botão verde “__+__”.
3. Busque e clique em __PagarMeV2__.
4. Preencha os campos indicados com as seguintes informações:<br><br>
<ul>
<li><b>Application Key</b> e <b>Application Token</b>: insira as informações que foram fornecidas pela Pagar.me.</li>
<li><b>Captura automática de pagamento</b>: selecione uma das seguintes opções:<br><br>
    <ul>
    	<li><b>Use O Comportamento Recomendado Pelo Processador de Pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Imediatamente: Captura Automática Ao Autorizar O Pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento *– Imediatamente: Captura Automática Ao Autorizar O Pagamento*).</li>
   		<li><b>Desativado: Não Capturado Automaticamente</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
    </ul>
  </li>
</ul>
5. __Nome na fatura__: insira o nome que irá identificar sua loja na fatura do consumidor.
6. __Ativar split e enviar recebedores?__: caso queira utilizar a solução de split de pagamentos, selecione __Sim__ e preencha as informações solicitadas de acordo com o que foi negociado junto à Pagar.me.<br><br>
<ul>
  <li><b>Responsabilidade pelas tarifas de pagamento</b>: escolha entre Marketplace, Markeplace + Sellers ou Sellers.</li>
  <li><b>Responsabilidade pelos chargebacks</b>: escolha entre Marketplace, Markeplace + Sellers ou Sellers.</li>
</ul>
7. Clique em __Salvar__.

## Configurar condição de pagamento

Depois de concluir as etapas indicadas, o __PagarMeV2__ estará configurado na sua loja. 

Caso queira associá-lo à uma condição de pagamento que seja compatível com o PagarMeV2, siga o artigo [Configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento).

