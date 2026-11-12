---
title: 'Configurar pagamento com PoleCMS'
id: 12Wyet40HSrq5ImonyRDRu
status: PUBLISHED
createdAt: 2025-05-30T16:44:23.741Z
updatedAt: 2025-08-18T15:10:32.788Z
publishedAt: 2025-08-18T15:10:32.788Z
firstPublishedAt: 2025-05-30T17:05:56.692Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-polecms
legacySlug: configurar-pagamento-com-polecms
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento PoleCMS. Por meio deste provedor, sua loja pode oferecer pagamento por meio do PayZen.

Para configurar PoleCMS, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **PoleCMS** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta PoleCMS.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor PoleCMS na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.
7. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

8. Em **Campos do provedor**, selecione ou preencha os campos **Clave pública**, **Clave HMAC-SHA-256**, **Pago por token**, **Modo de ingreso de datos de pago**, **Número de intentos de pago con tarjeta**, **Tema** e **Modo compacto** conforme orientações do provedor.
9. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Condições de Pagamentos**, clique no botão `+`.
3. Clique em **PayZen**.
4. Ative a condição no campo **Status**.
5. Em **Processar com o provedor**, selecione a opção **PoleCMS**.
6. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
7. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor PoleCMS pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento.

