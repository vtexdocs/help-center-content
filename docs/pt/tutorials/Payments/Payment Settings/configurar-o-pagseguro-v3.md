---
title: 'Configurar pagamento com PagBankV3'
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2024-03-14T18:59:12.645Z
publishedAt: 2024-03-14T18:59:12.645Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-pagseguro-v3
locale: pt
legacySlug: configurar-o-pagseguro-v3
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PagBankV3. Por meio deste provedor, sua loja pode realizar vendas por meio de boleto, PIX, cartões de débito e crédito.

Para configurar o PagBankV3, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PagBankV3__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, clique em __Autorizar via OAuth__. Neste momento, você será redirecionado para a página do PagBank, onde deverá acessar a sua conta, e autorizar a conexão da VTEX na sua conta do PagBank. Após o processo de autorização, você retornará automaticamente para o Admin VTEX.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PagBank na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, no campo __Liquidação automática__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li><b>Usar comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Liquidação automática imediatamente após a autorização do pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Liquidação automática imediatamente após a análise antifraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li><b>Desativado</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>
7. Caso deseje utilizar o [split de pagamento](https://help.vtex.com/pt/tutorial/split-de-pagamento--6k5JidhYRUxileNolY2VLx) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
8. Em __Campos do provedor__, no campo __Prazo para captura do pagamento__ selecione o período desejado para realizar a captura do pagamento.  
9. Clique em __Salvar__.

Para configurar os métodos de pagamento a serem processados pela PagBankV3, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, PagBankV3 pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento. 
