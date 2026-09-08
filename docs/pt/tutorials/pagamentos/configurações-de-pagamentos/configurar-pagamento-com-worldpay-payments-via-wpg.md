---
title: 'Configurar pagamento com Worldpay-Payments-Via-WPG'
createdAt: 2026-08-04T00:00:00.000Z
updatedAt: 2026-08-04T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-worldpay-payments-via-wpg
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Worldpay-Payments-Via-WPG. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Worldpay, Visa, Mastercard, American Express, Discover, JCB, Diners, Elo, Hipercard, Aura, Cabal, Visa Electron, Maestro, Mastercard Debit, Naranja e ApplePay.

Para configurar Worldpay-Payments-Via-WPG, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Worldpay-Payments-Via-WPG** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Worldpay-Payments-Via-WPG.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Worldpay-Payments-Via-WPG na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Worldpay-Payments-Via-WPG, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o provedor Worldpay-Payments-Via-WPG pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
