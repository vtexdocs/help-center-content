---
title: 'Configurar pagamento com MSC Payment'
id: 6hPTXSe57DSCuo7i2r3cjV
status: ARCHIVED
createdAt: 2023-09-11T14:04:54.926Z
updatedAt: 2024-10-03T15:22:05.758Z
publishedAt: 
firstPublishedAt: 2023-09-11T14:17:31.484Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-msc-payment
locale: pt
legacySlug: configurar-pagamento-com-msc-payment
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento MSC Payment. Por meio deste provedor, sua loja pode realizar vendas por meio do MSC Payment.

Para configurar MSC Payment, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __MSC-Payment__ na barra de busca e clique sobre o nome do provedor.
4. Nos campos __Application Key__, __Application Token__ e __tasaCambio__ insira as informações que foram fornecidas pela MSC Payment.
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

6. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão `Instalar` app e siga as instruções de instalação.

7. Clique em __Salvar__.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja__ > __Pagamentos__ > __Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __+__.
3. Selecione a condição de pagamento __MSC Payment__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
7. Clique em __Salvar__.

Depois de seguir os passos indicados, MSC Payment pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
