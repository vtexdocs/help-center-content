---
title: 'O que é o VTEX Payment?'
id: 1lZWKCGdy7xpYjukTLfFJL
status: DRAFT
createdAt: 2020-05-28T17:29:51.035Z
updatedAt: 2023-10-05T14:12:50.764Z
publishedAt: 
firstPublishedAt: 2020-05-29T17:47:57.806Z
contentType: trackArticle
productTeam: Financial
slug: o-que-e-o-vtex-payment
locale: pt
trackId: 7iCCIoIZFmd9OabU6QlmXu
trackSlugPT: vtex-payment
---

O VTEX Payment é uma solução de pagamentos corporativa para clientes VTEX. Criado para permitir que o lojista tenha uma visão completa do seu negócio, o VTEX Payment integra funcionalidades de quatro serviços financeiros: adquirência, operações bancárias,  plataforma de e-commerce e conciliação financeira. 

Para gerir suas operações, o cliente tem acesso a uma conta digital.

<div class = "alert alert-info">
O VTEX Payment é um gateway opcional de pagamentos para uso dos clientes VTEX. Sua ativação pode ser solicitada e implementada de maneira rápida (plug and play), pois é nativamente integrada ao sistema VTEX.
</div>

## Antifraude

Além disso, o VTEX Payment conta com um serviço de Antifraude opcional. No momento da contratação, o lojista pode integrar o Antifraude ao funcionamento sua loja. Entretanto, essa decisão não é definitiva. O serviço de Antifraude pode ser adquirido posteriormente.

Essa adaptação faz com que todas as transações sejam verificadas por uma camada de análise de risco antes da captura em si, o que aumenta a segurança da operação. 

Por exemplo, em casos de golpes com múltiplas compras por um mesmo fraudador, a funcionalidade detecta a inconsistência nas primeiras transações e barra os próximos lançamentos. 

Ainda sobre o Antifraude, caso a solução esse serviço seja contratada, é importante lembrar que não tem garantia de chargeback. 

Tudo isso pode ser operado no próprio Admin VTEX, tão logo o lojista tenha assinado o serviço.

## Configure o VTEX Payment

Ao contratar o VTEX Payment, nossa equipe realizará as configurações necessárias para utilizar a solução. Contudo, existem campos que podem ser preenchidos após a criação do perfil de acesso e instalação do conector.

Siga o passo a passo abaixo para realizar o preenchimento destes campos:

1. Acesse o __Admin__ VTEX.
2. No módulo __Pagamentos__, clique em __Configurações__.
3. Em __Afiliações de gateway__, selecione a opção __VTEX Payment__.
4. Em __Captura automática de pagamento__, caso ainda não esteja configurada selecione uma das opções:<br>
<ul>
<li><b>Application Key e Application Token</b>: insira as informações que foram fornecidas pela Pagar.me.</li>
<li><b>Captura automática de pagamento</b>: selecione uma das seguintes opções:<br><br>
    <ul>
    	<li><b>Use O Comportamento Recomendado Pelo Processador de Pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Imediatamente: Captura Automática Ao Autorizar O Pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Imediatamente: Captura Automática Ao Passar A Análise De Risco De Fraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento <i>– Imediatamente: Captura Automática Ao Autorizar O Pagamento</i>).</li>
   		<li><b>Desativado: Não Capturado Automaticamente</b>:  a captura acontece somente quando o pedido for faturado. O cliente deve ter atenção ao escolher esse comportamento de captura, pois a demora no faturamento pode extrapolar o tempo de captura acordado com o provedor de pagamentos e levar à perda do pagamento.</li>
    </ul>
  </li>
</ul>

5. Em __Ativar split e enviar recebedores?__, caso queira utilizar a solução de split de pagamentos, selecione __Sim__ e preencha as informações solicitadas de acordo com o que foi negociado junto à VTEX.<br>
<ul>
  <li><b>Responsabilidade pelas tarifas de pagamento</b>: escolha entre Marketplace, Markeplace + Sellers ou Sellers.</li>
  <li><b>Responsabilidade pelos chargebacks</b>: escolha entre Marketplace, Markeplace + Sellers ou Sellers.</li>
</ul>

6. Clique em __Salvar__.

O VTEX Payment permite configurar cartão de crédito e boleto bancário como formas de pagamento. Para maiores informações, veja como [configurar condições de pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455?&utm_source=autocomplete).

<div class="alert alert-warning">
No VTEX Payment, o prazo padrão para vencimento de boletos bancários é de 3 dias. Caso deseje alterar este prazo, entre em contato com o atendimento da VTEX.
</div>

<div class="alert alert-warning">
  Caso o VTEX Payment não esteja disponível no Admin da sua loja, entre em contato com a VTEX para que o seu perfil de acesso seja criado e o conector disponibilizado para instalação e configuração.
  </div>

