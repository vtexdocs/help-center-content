---
title: 'Configurar pagamento com PagBankV3'
id: 5Noi1mUbBQ6CyqdeDQtWfw
status: PUBLISHED
createdAt: 2021-12-02T12:14:58.698Z
updatedAt: 2025-08-18T13:11:08.593Z
publishedAt: 2025-08-18T13:11:08.593Z
firstPublishedAt: 2021-12-02T19:18:21.251Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-pagseguro-v3
legacySlug: configurar-o-pagseguro-v3
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PagBankV3. Por meio deste provedor, sua loja pode realizar vendas por meio de boleto, PIX, Pagar com PagBank, cartões de débito e crédito.

Para configurar o PagBankV3, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **PagBankV3** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, clique em **Autorizar via OAuth**. Neste momento, você será redirecionado para a página do PagBank, onde deverá acessar a sua conta, e autorizar a conexão da VTEX na sua conta do PagBank. Após o processo de autorização, você retornará automaticamente para o Admin VTEX.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PagBank na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Caso deseje utilizar o [split de pagamento](/pt/docs/tutorials/split-de-pagamento) em sua loja, selecione a opção **Ativar split de recebíveis e enviar recebedores de pagamento** e indique o **Responsável pelas tarifas de processamento de pagamentos** e **Responsável pelos estornos** (marketplace, sellers ou marketplaces e sellers).
9. Em **Campos do provedor**, selecione os campos **Prazo para captura do pagamento**, **Gostaria de ativar o repasse do liable das transações para o seller com maior valor a receber?**, **Prazo de expiração do QR Code PIX**, **Ativar 3DS** e **Nome da Loja - Descrição na fatura do comprador** conforme as instruções do provedor.
10. Clique em **Salvar**.

> ⚠️ O PagBank também oferece a opção de captura automática programada para até 5 dias. Caso deseje utilizá-la em sua loja, siga os passos indicados nesta [documentação](/pt/known-issues/a-captura-automatica-programada-nao-e-exibida--1cuvGbgUvd1ATeHEG6Il98).

Para configurar os métodos de pagamento a serem processados pela PagBankV3, acesse [Condições de Pagamento](/pt/docs/tutorials/condicoes-de-pagamento).

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, PagBankV3 pode demorar até 10 minutos para aparecer no checkout da sua loja como opção de pagamento.
