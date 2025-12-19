---
title: 'Configurar pagamento com Khipu'
id: RcHQjURWDXa0doL15DiUj
status: PUBLISHED
createdAt: 2023-03-24T19:34:06.675Z
updatedAt: 2024-01-24T17:53:53.676Z
publishedAt: 2024-01-24T17:53:53.676Z
firstPublishedAt: 2023-03-30T14:08:54.819Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-khipu
legacySlug: configurar-pagamento-com-khipu
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Khipu. Por meio deste provedor, sua loja pode realizar vendas por meio de promissórias.

Para configurar Khipu, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Khipu** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Khipu.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Khipu na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. No campo **Liquidação automática**, selecione uma das seguintes opções:
- **Use o comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Clique em `Salvar`.

## Configurar Promissória

Caso ainda não tenha configurado a promissória como método de pagamento em outros conectores de sua loja, acesse [Configurar pagamentos com Promissória](/pt/tutorial/configurar-pagamentos-com-promissoria--5pW7avTwtyQcMu4uiW8quQ).

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento Customizado__, clique no botão correspondente ao nome utilizado para o método de pagamento por promissória (configurado na seção anterior).
4. Ative a condição no campo __Status__.
5. Em __Processar com a afiliação__, selecione __srconsultores-khipu-v0__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, Khipu pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

