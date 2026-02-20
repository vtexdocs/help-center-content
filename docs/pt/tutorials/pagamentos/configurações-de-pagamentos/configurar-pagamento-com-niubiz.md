---
title: 'Configurar pagamento com Niubiz'
id: 6rtGmpkdZUw4AjlRcOePRu
status: PUBLISHED
createdAt: 2024-09-19T20:02:58.068Z
updatedAt: 2025-07-02T20:09:44.245Z
publishedAt: 2025-07-02T20:09:44.245Z
firstPublishedAt: 2024-09-19T20:19:58.405Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-niubiz
legacySlug: configurar-pagamento-com-niubiz
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamentos Niubiz. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito e privatelabels, boletos, promissórias e Niubiz.

Para configurar a Niubiz, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **MNiubiz** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Niubiz.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Niubiz na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. No campo **Liquidação automática**, selecione uma das seguintes opções:
- **Use o comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Em **Campos do provedor**, selecione ou preencha os campos **tipoFlujoNiubiz** e **logoComercio**.
9. Clique em `Salvar`.

Para configurar os métodos de pagamento a serem processados pela Niubiz, acesse [Configurar condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, Niubiz pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.
