---
title: 'Configurar pagamento com Paguelofacil'
createdAt: 2026-07-09T00:00:00.000Z
updatedAt: 2026-07-09T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-paguelofacil
locale: pt
hidden: false
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Paguelofacil. Por meio deste provedor, sua loja pode oferecer diversos meios de pagamento, como Visa, Mastercard e Paguelofacil.

Para configurar Paguelofacil, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Paguelofacil** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Paguelofacil.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Paguelofacil na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. No campo **Liquidação automática**, selecione uma das seguintes opções:
- **Use o comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Em **Campos do provedor**, preencha o campo **WEB_CODE** conforme orientações do provedor.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pelo Paguelofacil, acesse [Configurar condições de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais).

Depois de seguir os passos indicados, Paguelofacil pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

