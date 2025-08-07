---
title: 'Configurar pagamento com Prometeo'
id: 2F5NSqePiOcspY2oVnYOVa
status: PUBLISHED
createdAt: 2024-10-11T13:07:41.938Z
updatedAt: 2024-10-11T13:18:09.151Z
publishedAt: 2024-10-11T13:18:09.151Z
firstPublishedAt: 2024-10-11T13:18:09.151Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-prometeo
locale: pt
legacySlug: configurar-pagamento-com-prometeo
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Prometeo. Com este provedor, sua loja pode realizar vendas por meio do A2A.

Para configurar a Prometeo, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PrometeoA2A__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Prometeo.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Prometeo na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
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
8. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __A2A__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, Prometeo pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
