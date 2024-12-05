---
title: 'Configurar gateway CyberSource IO'
id: 6nhvUTrLxeacsoYG6GkGM
status: PUBLISHED
createdAt: 2018-04-30T17:34:57.517Z
updatedAt: 2024-04-22T14:35:34.191Z
publishedAt: 2024-04-22T14:35:34.191Z
firstPublishedAt: 2018-04-30T20:20:44.704Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-cybersource-gateway
locale: pt
legacySlug: configurar-gateway-cybersource
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A Cybersource é uma empresa que oferece diversas soluções para auxiliar a gestão de pagamentos da sua loja. Entre elas estão um [gateway](https://help.vtex.com/pt/tutorial/o-que-e-um-gateway-de-pagamentos) e um [antifraude](https://help.vtex.com/pt/tutorial/o-que-e-antifraude), ambos com integrações disponíveis na VTEX.

Caso deseje maiores informações sobre como integrar o antifraude da Cybersource em sua loja, acesse [Configurar antifraude Cybersource](https://help.vtex.com/pt/tutorial/configurar-antifraude-cybersource--2Z88QmpRAsWmI0qaCo4aQg).

Para utilizar o gateway da Cybersource IO em sua loja, as seguintes ações são necessárias:

1. [Instalar os aplicativos Cybersource IO (VTEX IO CLI)](#instalando-apps-da-cybersource)
2. [Criar as chaves de autenticação na Cybersource (Cybersource environment)](#criando-chaves-de-autenticacao-na-cybersource)
3. [Realizar as configurações do app Cybersource (Admin VTEX)](#configurando-o-app-cybersource-io)
4. [Configurar o gateway Cybersource (Admin VTEX)](#configurando-o-gateway-cybersource)
5. [Configurar a condição de pagamento (Admin VTEX)](#configurando-condicao-de-pagamento)
6. [Configurar o Device Fingerprint (opcional)](#configurar-cybersource-io-device-fingerprint-opcional)
7. [Configurar campos do merchant (opcional)](#configurar-campos-do-merchant-opcional)

## Instalando apps da Cybersource 

Os seguintes apps da Cybersource devem ser instalados na conta de sua loja:

- __vtex.cybersource-ui__
- __vtex.cybersource__
- __vtex.cybersource-payer-auth__

>⚠️ Caso você pretenda utilizar o sistema de antifraude da Cybersource, mas deseja transacionar os pagamentos em um gateway que não seja o da Cybersource, será necessário instalar o app **vtex.cybersource-fraud**.

Saiba mais como instalar aplicativos em uma conta VTEX em [Installing an app](https://developers.vtex.com/docs/guides/vtex-io-documentation-installing-an-app). 

## Criando chaves de autenticação na Cybersource 

Após a instalação dos apps você deve criar as chaves de autenticação no ambiente da Cybersource. 

>⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta na Cybersource para informações atualizadas.

Siga os passos abaixo:

1. Acesse o [painel EBC](https://businesscenter.cybersource.com/ebc2/) (Enterprise Business Center) da Cybersource com os seus dados.
2. No painel de navegação lateral, selecione __Payment Configuration > Key Management__.
3. Clique em __Generate Key__.
4. Em __REST APIs__, selecione a opção __REST - Shared Secret__.
5. Clique em __Generate Key__.
6. Clique em __Download key__ ou copie as informações das chaves utilizando a função copiar localizada a frente dos campos __Key__ e __Shared Secret__.

## Configurando o app Cybersource IO 

Com as chaves de autenticação disponíveis, é o momento de realizar a configuração do app Cybersource IO no Admin. 

![Cybersource Admin settings PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-gateway-cybersource_1.JPG)

Siga os passos abaixo para configurar o app Cybersource IO:

1. No Admin VTEX, acesse __Aplicativos > Apps Instalados > Cybersource__, ou digite __Cybersource__ na barra de busca no topo da página.
2. Na aba __Admin Settings__, preencha ou selecione os campos abaixo:
<br>
<ul>
<br>
    	<li><b>ID do comerciante</b>: o seu merchant ID na Cybersource.</li>
    	<li><b>Chave do comerciante</b> e <b>Chave secreta compartilhada</b>: as duas chaves obtidas anteriormente no ambiente da Cybersource.</li>
    	<li><b>Processor</b>: selecione a empresa que realizará o processamento do pagamento, ou clique em <b>Other</b> caso ela não esteja na lista.</li>
    	<li><b>Region</b>: selecione uma das regiões, ou clique em <b>Other</b> caso a região desejada não esteja na lista.</li>
    	<li><b>Sufixo de referência (opcional)</b>: por padrão, os pedidos no sistema Cybersource serão associados ao ID do grupo de pedidos VTEX, mas esta configuração pode ser usada para anexar um sufixo como “-01”.</li>
    	<li><b>NSU personalizado (opcional)</b>: substituir NSU padrão por valor personalizado.</li>
    	<li><b>Use o ID do pedido para impressão digital do dispositivo</b>: selecione se deseja utilizar o ID do pedido para impressão digital do dispositivo no lugar do ID da sessão.</li>
    	<li><b>Ativar cálculos de impostos</b>: selecione se deseja utilizar a Cybersource como seu provedor de cálculo de impostos no checkout.</li>
    	<li><b>Ativar lançamento de transações</b>: selecione se deseja ativar o lançamento de transações concluídas para questões de relatórios fiscais.</li>
    	<li><b>Canais de vendas a serem excluídos da Cybersource (opcional)</b>: insira qualquer canal de venda de vendas em que não deseja utilizar as transações na Cybersource.</li>
    	<li><b>Código do produto de envio (opcional)</b>: insira um código de produto para fins de cálculo do imposto de envio.</li>
    	<li><b>Regiões de nexo fiscal (opcional)</b>: insira uma lista de regiões onde os impostos devem ser recolhidos.</li>
</ul>
3. Clique em __Salvar configurações__.

## Configurando o gateway Cybersource

Para configurar o gateway Cybersource, siga os passos abaixo: 

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Cybersource IO__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, não é necessário preencher os campos __Chave de aplicação__ e __Token de aplicação__.
5. Caso deseje modificar o nome de identificação a ser exibido para o gateway Cybersource na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o gateway em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Liquidação automática__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li><b>Usar comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada para ser realizada após 4 dias (ou se o pedido for faturado, o que ocorrer primeiro).</li>
    	<li><b>Liquidação automática imediatamente após a autorização do pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Liquidação automática imediatamente após a análise antifraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li><b>Desativado</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
8. Em __Campos do provedor__, preencha ou selecione os campos abaixo:
<ul>
<br>
    	<li><b>Company Name</b>: nome da empresa.</li>
      <li><b>Company Tax id</b>: CNPJ da empresa.</li>
  <li><b>Capture Setting</b>: selecione <b>Delayed Capture</b> para ocorrer o procedimento padrão da plataforma VTEX (chamadas separadas para autenticação e captura) ou <b>Immediate Capture</b>, onde será enviada uma única chamada de autenticação e captura à Cybersource quando o pedido for realizado.</li>
    	<li><b>Payer Authentication</b>: se desejar ativar esta opção, o <a href="https://www.cybersource.com/en/solutions/fraud-and-risk-management/payer-authentication-for-3d-secure.html">3-D Secure Payer Authentication da Cybersource</a> deverá ser utilizado.</li>
    	<li><b>Capture Delay</b> e <b>Capture Delay Interval</b>: determine o período antes da captura automática.</li>
    	<li><b>Using Decision Manager</b>: selecione se o <a href="https://www.cybersource.com/apac/en/solutions/fraud-and-risk-management/decision-manager.html">CyberSource Decision Manager</a> estará ativo em sua conta.</li>
      <li><b>Authorized Payments Flagged by Decision Manager</b>: quando o status é Authorized, Fraud Reject, selecione as seguintes opções:</li>
      <blockquote><li><b>Treat as Successful Authorizations</b>: para aceitar o pedido.</li></blockquote>
      <blockquote><li><b>Treat as Failed Authorizations</b>: para negar o pedido.</li></blockquote>
      <blockquote><li><b>Treat as Pending Authorizations</b>: mantém o pedido enquanto é aguardada uma decisão final.</li></blockquote>  
</ul>
9. Os campos __Merchant Id__, __Merchant Key__ e __Shared Secret Key__ devem ser deixados em branco, pois serão utilizados os valores definidos no passo 2 da seção [Configurando o app Cybersource IO](#configurando-o-app-cybersource-io). Caso os campos sejam preenchidos com algum valor, estes irão sobrescrever as informações inseridas no passo 2.
10. Cliquem em __Salvar__.

## Configurando condição de pagamento

Para processar pagamentos com cartões de crédito por meio da Cybersource, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão +.
3. Clique sobre o nome do cartão de crédito desejado.
4. Preencha o campo __Nome da condição__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Em __Processar com o provedor__ selecione a opção __Cybersource - IO__.
7. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__ e escolha o provedor de sua preferência.
8. Se desejar, você também poderá configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).
9. Clique em __Salvar__.

>⚠️ Se você criou anteriormente condições de pagamento com cartão de crédito para outros gateways (incluindo o provedor Cybersource legado), poderá definir essas condições como **Inativas**. As transações em andamento iniciadas nesse provedor ainda serão processadas por ele, mesmo que esteja inativo. Apenas novas transações serão processadas pelo novo provedor Cybersource IO. Caso você precise reverter para o provedor anterior por qualquer motivo, basta definir as respectivas condições de pagamento como **Ativas** e as condições de pagamento do Cybersource IO como **Inativas**.

## Configurar Cybersource IO Device Fingerprint (opcional)

Device Fingerprint é um identificador que atua no processamento de um pagamento, tendo como objetivo melhorar a análise do risco de fraude em cada transação. 

Por meio da coleta de dados não sensíveis, o Device Fingerprint identifica e analisa o nível de segurança do dispositivo utilizado para realizar a transação, bem como as transações que anteriormente foram realizadas com este mesmo dispositivo.

>ℹ️ Cada loja deve ter somente um Device Fingerprint cadastrado. Verifique se você já efetuou o cadastro do Device Fingerprint em outro conector, antes de continuar os passos abaixo.

Para configurar o Device Fingerprint da Cybersource IO, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Storefront > Checkout__, ou digite __Checkout__ na barra de busca no topo da página.
2. Clique no ícone <i class="fas fa-cog" alt="engrenagem azul"></i> do site desejado.
3. No menu de opções azul localizado na parte superior da página, clique em __Código__.
4. Em __Arquivos__, clique sobre __checkout5.custom.js__.
5. Insira o código abaixo no campo de texto e clique em `Salvar`.

    function addsDeviceFingerPrint() {
      if (!window.vtex) return;
      if (window.vtex.deviceFingerprint) return;
      $.ajax({
type: 'get',
async: true,
url: rootPath() + '/api/sessions?items=*'
      }).then(function(response) {
var ORG_ID = "{{ORG_ID}}";
var MERCHANT_ID = "{{MERCHANT_ID}}";
console.log('session', response);
window.vtex.deviceFingerprint = response.id;
var sessionId = response.id || "CYBERSOURCE";
var script = document.createElement("script");
script.type = "text/javascript";
script.src = `https://h.online-metrix.net/fp/tags.js?org_id=${ORG_ID}&session_id=${MERCHANT_ID}${sessionId}`;
document.head.appendChild(script);
var noScript = document.createElement("noscript");
var iframe = document.createElement("iframe");
iframe.style = "width: 100px; height: 100px; border: 0; position: absolute; top: -5000px;";
iframe.src = `https://h.online-metrix.net/fp/tags?org_id=${ORG_ID}&session_id=${MERCHANT_ID}${sessionId}`;
noScript.appendChild(iframe);
document.body.appendChild(noScript);
      })
    }

## Configurar campos do merchant (opcional)

Adicionalmente, você pode definir campos customizados que serão incluídos em pedidos encaminhados da VTEX para a Cybersource. 

![Cybersource Admin merchant define fields PT](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Payments/Payment%20Settings/configurar-gateway-cybersource_2.JPG)

Veja abaixo como criar estes campos:

1. No Admin VTEX, acesse __Aplicativos > Apps Instalados > Cybersource__, ou digite __Cybersource__ na barra de busca no topo da página.
2. Na aba __Campos definidos pelo comerciante__, em __Informações definidas pelo comerciante__, você pode inserir os campos seguindo as seguintes regras: 
<ul>
<br>
    	<li>Quaisquer valores fora das chaves <b>{{}}</b> serão considerados como valor direto.</li>
      <li>Quaisquer valores entre <b>{{}}</b> devem estar no seguinte formato <i>Palavra de Referência|Palavra de Modificação|Valores</i>.</li>
      <li>Todas as <b>palavras de referência</b> podem ser encontradas no menu suspenso <b>Mostrar todas as palavras referenciáveis</b>:</li>
      <blockquote><li>As <b>palavras de referência</b> podem ser deixadas em branco se a <b>Palavra de Modificação</b> e os <b>Valores</b> estiverem presentes</b>.</li></blockquote>
      <blockquote><li>A <b>palavra de referência</b> diferencia maiúsculas de minúsculas.</li></blockquote>
    	<li>As <b>palavras de modificação</b> devem ser do tipo <b>Pad</b>, <b>Date</b>, <b>Trim</b>, <b>Age</b>, ou <b>Equals</b>. Veja abaixo as características ao cadastrar cada um deles:</li>
      <blockquote><li><b>Pad</b>: os <b>Valores</b> devem estar no formato de <b>comprimento desejado:caractere preenchido</b>.</li></blockquote>
      <blockquote><blockquote><li>O <b>caractere preenchido</b> deve ser um valor único. Por exemplo, <i>9:x</i> resultará em um comprimento desejado de 9, e irá preencher espaços vazios com x.</li></blockquote></blockquote>
      <blockquote><blockquote><li>Se o valor do campo exceder o comprimento desejado, o campo será cortado.</li></blockquote></blockquote>         
<br>       
      <blockquote><li><b>Date</b>: os <b>Valores</b> devem estar no formato dd/MM/aaaa ou qualquer combinação dele.</li></blockquote>
      <blockquote><blockquote><li><b>M</b> para mês deve ser maiúsculo. Este formato pode ser ordenado conforme desejar, tal como, <b>aaaa/MM</b> ou <b>aaaa</b> ou <b>dd/aaaa/MM</b>.</li></blockquote></blockquote>
      <blockquote><li><b>Trim</b>: limitará o comprimento máximo do valor do campo sem adicionar caracteres de preenchimento.</li></blockquote>
      <blockquote><li><b>Age</b>: retornará a diferença entre a data atual e o valor do campo usando o formato Timespan.</li></blockquote>
      <blockquote><li><b>Equals</b>: retornará o valor booleano de uma comparação de string entre o valor do campo e o valor de comparação.</li></blockquote>
<br>
    	<li>Cada nova linha é um considerada como um novo campo definido pelo comerciante.</li>

Exemplos:

| Valor inserido no Admin em `Informações definidas pelo comerciante`    | Cenário simulado     | Resultado     |
| ---------- | ---------- | ---------- |
| `969{{Reference|PAD|9:0}}`       | Quando `Reference` é 6023       | 969602300000       |
| `{{OrderId}}-01`       | Quando `OrderId` é 124578       | 124578-01       |
| `{{MiniCart.Buyer.LastName}},{{MiniCart.Buyer.FirstName}}`       | Quando o nome do comprador (`Buyer`) é John Doe       | Doe,John       |        

