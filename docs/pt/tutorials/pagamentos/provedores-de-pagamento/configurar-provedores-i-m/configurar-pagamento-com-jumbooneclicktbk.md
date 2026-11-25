---
title: 'Configurar pagamento com JumboOneClickTBK'
createdAt: 2026-11-18T00:00:00.000Z
updatedAt: 2026-11-18T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-jumbooneclicktbk
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos JumboOneClickTBK. Por meio deste provedor, sua loja pode oferecer pagamentos com Promissories.

Para configurar JumboOneClickTBK, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **JumboOneClickTBK** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta JumboOneClickTBK.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor JumboOneClickTBK na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

7. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela JumboOneClickTBK, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, o provedor JumboOneClickTBK pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
