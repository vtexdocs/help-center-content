---
title: 'Configurar pagamento com Deuna'
id: 5Y4BfCdbQWraZAyoSm0Zzr
status: PUBLISHED
createdAt: 2023-04-06T18:37:58.919Z
updatedAt: 2024-01-23T18:11:08.945Z
publishedAt: 2024-01-23T18:11:08.945Z
firstPublishedAt: 2023-04-06T18:42:52.173Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-deuna
legacySlug: configurar-pagamento-com-deuna
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Deuna. Por meio deste provedor, sua loja pode realizar vendas por meio do Deuna.

Para configurar Deuna, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **DEUNA** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Deuna.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Deuna na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Em **Campos do provedor**, preencha oS campoS **Delay To Cancel** e **Delay To Auto Settle** conforme orientações do provedor.
9. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Selecione a condição de pagamento **DEUNA**.
4. Preencha o campo **Nome da regra** com um nome de sua preferência para identificação.
5. Ative a condição no campo **Status**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar antifraude**.
7. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector Deuna pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

