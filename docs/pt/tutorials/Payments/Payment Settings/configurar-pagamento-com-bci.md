---
title: 'Configurar pagamento com BCI'
id: 2NKGrIdRBiFev1446eWbzF
status: PUBLISHED
createdAt: 2024-12-10T20:34:33.999Z
updatedAt: 2024-12-10T20:43:28.887Z
publishedAt: 2024-12-10T20:43:28.887Z
firstPublishedAt: 2024-12-10T20:43:28.887Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-bci
locale: pt
legacySlug: configurar-pagamento-com-bci
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento BCI.

Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como BCI.

Para configurar BCI, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **BCI** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta BCI.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor BCI na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li><b>Usar comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Liquidação automática imediatamente após a autorização do pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
    	<li><b>Liquidação automática imediatamente após a análise antifraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>
    	<li><b>Desativado</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

8. Em **Campos do provedor**, selecione ou preencha o campo **Ingrese su API key** conforme orientações do provedor.
9. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **BCI**.
4. Ative a condição no campo **Status**.
5. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
6. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor BCI pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
