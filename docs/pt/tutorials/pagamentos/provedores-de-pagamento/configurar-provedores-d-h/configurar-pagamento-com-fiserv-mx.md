---
title: 'Configurar pagamento com Fiserv MX'
id: 3vcYUO1y0Zp9DWVI1AcvfK
status: PUBLISHED
createdAt: 2024-10-07T20:39:42.430Z
updatedAt: 2025-02-04T16:29:57.587Z
publishedAt: 2025-02-04T16:20:46.056Z
firstPublishedAt: 2024-10-07T20:47:15.111Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-fiserv-mx
legacySlug: configurar-pagamento-com-fiserv-mx
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Fiserv MX. Com este provedor, sua loja pode realizar vendas por meio de cartões de crédito, débito, cobranded, private labels, boletos e Fiserv.

Para configurar a Fiserv MX, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __FiservMX__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ com as informações da sua conta Fiserv.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Fiserv na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __Liquidação automática__, selecione uma das seguintes opções:
<ul>
    	<li>**Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
    	<li>**Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>
    	<li>**Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

8. Em __Campos do provedor__, preencha os campos __Ingrese su Api Key Pública__, __Ingrese su Api Key Privada__ e __Ingrese su Store Id__ com as informações da sua conta Fiserv.
9. Em __Activar protocolo 3D-Secure__ e __Habilitar autorización y captura en 2 pasos__ selecione as opções desejadas.
10. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Fiserv MX, acesse [Configurar condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Fiserv MX pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
