---
title: 'Configurar pagamento com Transbank Webpay'
id: 3uVwZ1gUx2g5TXGt0CHb44
status: PUBLISHED
createdAt: 2024-10-02T19:33:04.455Z
updatedAt: 2024-10-02T20:02:35.481Z
publishedAt: 2024-10-02T20:02:35.481Z
firstPublishedAt: 2024-10-02T20:02:35.481Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-transbank-webpay
legacySlug: configurar-pagamento-com-transbank-webpay
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Transbank Webpay. Com este provedor, sua loja pode realizar vendas por meio do Webpay.

Para configurar o Transbank Webpay, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __Transbank Webpay__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Transbank Webpay.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Transbank Webpay na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Liquidação automática__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li>**Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li>**Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li>**Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
8. Em __Campos do provedor__, preencha os campos __Codigo-de-Comercio__ e __Api-Key-Secret__ com as informações da sua conta Transbank Webpay.
9. Em __MODO__ e __AMBIENTE__ selecione as opções desejadas.
10. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __Webpay__.
4. Ative a condição no campo __Status__.
5. Em __Processar com o provedor__, selecione a opção __transbank__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, Transbank Webpay pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento. 
