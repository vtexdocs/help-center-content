---
title: 'Configurar pagamento com Culqi'
id: 6LUOpYBpg48XSL8X0Le6e3
status: PUBLISHED
createdAt: 2023-11-16T13:31:38.132Z
updatedAt: 2024-01-25T19:01:02.616Z
publishedAt: 2024-01-25T19:01:02.616Z
firstPublishedAt: 2023-11-16T14:54:41.647Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-culqi
legacySlug: configurar-pagamento-com-culqi
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Culqi. Por meio deste provedor, sua loja pode realizar vendas por meio do Culqi.

Para configurar Culqi, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Culqi__ na barra de busca e clique sobre o nome do provedor.
4. Nos campos __Application Key__, __Application Token__ e __Public Key__, insira as informações que foram fornecidas pela Culqi.
5. No campo __Captura automática de pagamento__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li>**Use o comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Imediatamente: captura automática ao autorizar o pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li>**Imediatamente: captura automática ao passar a análise de risco de fraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Imediatamente: Captura Automática Ao Autorizar O Pagamento").</li>
   		<li>**Agendada: defina quando a captura automática será realizada**: ao selecionar esta opção, o campo **Prazo agendado em horas para a captura automática** estará disponível, e deve ser preenchido com o período no qual a captura automática acontecerá. Este período deve estar em acordo com os limites permitidos pelo provedor de pagamento.</li>        
   		<li>**Desativado: não capturado automaticamente**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
6. Em __Aceptar tarjetas de crédito__, selecione se deseja aceitar cartões de crédito como meio de pagamento.
7. Em __Aceptar YAPE__, selecione se deseja aceitar [YAPE](https://www.yape.com.pe/) como meio de pagamento.
8. Em __Aceptar billeteras móviles__, selecione se deseja aceitar carteiras digitais como meio de pagamento.
9. Em __Aceptar banca móvil o internet__, selecione se deseja aceitar pagamentos via dispositivos móveis e internet banking.
10. Em __Aceptar agentes y bodegas__, selecione se deseja aceitar pagamentos via agentes e bodegas (armazéns).
11. Em __Aceptar cuotéalo BCP__, selecione se deseja aceitar pagamentos parcelados via [cuotéalo BCP](https://www.viabcp.com/cuotealo).
12. Em __Tiempo de expiración de pago__, selecione o período (em dias) para expirar os pagamentos.
13. Nos campos __URL de logo__, __Tema elegido__, __RSA Id__, __Llave pública RSA__, __Usuario Webhook__ e __Password Webhook__, insira as informações que foram fornecidas pela Culqi.
14. Em __Ativar divisão e enviar recebedores?__, selecione se o split de pagamentos estará disponível para o marketplace e os sellers.
15. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja__ > __Pagamentos__ > __Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Selecione a condição de pagamento __Culqi__.
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, Culqi pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
