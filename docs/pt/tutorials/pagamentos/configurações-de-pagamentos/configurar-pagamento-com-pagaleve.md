---
title: 'Configurar pagamento com Pagaleve'
id: 3ro5eb99noG7T4QpoQaJI5
status: PUBLISHED
createdAt: 2022-06-22T16:26:18.290Z
updatedAt: 2025-09-24T15:21:19.022Z
publishedAt: 2025-09-24T15:21:19.022Z
firstPublishedAt: 2022-06-22T16:33:24.266Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-pagaleve
legacySlug: configurar-pagamento-com-pagaleve
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Pagaleve. Por meio deste provedor, sua loja pode oferecer pagamento por meio do Pagaleve,Pagaleve Transparente,Pix,Pagaleve Pix A Vista,Pagaleve Pix A Vista Transparente,Pagaleve Pix Mensal,e Pagaleve Pix Mensal Transparente.

Para configurar Pagaleve, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Pagaleve** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Pagaleve.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Pagaleve na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
<ul>
    	<li>**Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
    	<li>**Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>
    	<li>**Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

8. Em **Campos do provedor**, preencha o campo **Pagaleve** conforme orientações do provedor.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Pagaleve, acesse [Condições de Pagamento](/pt/tutorial/condicoes-de-pagamento). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Pagaleve pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 

