---
title: 'Configurar a afiliação de gateway Tuna'
id: 5Db0j4pE76ma9pUvYuAhfF
status: PUBLISHED
createdAt: 2021-07-07T14:47:34.162Z
updatedAt: 2024-01-23T21:47:01.684Z
publishedAt: 2024-01-23T21:47:01.684Z
firstPublishedAt: 2021-07-07T14:57:45.358Z
contentType: tutorial
productTeam: Financial
author: 13Ue4MX9WNiX9f3SVCUZZW
slugEN: configuring-tuna-gateway-affiliation
legacySlug: configurar-a-afiliacao-de-gateway-tuna
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, você pode configurar a sua loja com o gateway Tuna para receber pagamentos por meio de boletos, cartões de débito, crédito, PIX, Bitcoin, Privatelabels, Google Pay, Apple Pay, OXXO e opções Pagaleve.

> ⚠️ A integração da sua loja com a Tuna é feita por meio de uma **Chave de aplicação** e o **Token de aplicação**. Os dados de acesso para obter essas informações e permitir as configurações na VTEX serão enviados após a criação da sua conta. Para isso, preencha [este formulário](https://docs.google.com/forms/d/e/1FAIpQLScWk5fsmkIfGaW2Z6qhdGH-JJ5iU6Fv5TGghUR1Pod5dY5Z2Q/viewform) e aguarde o retorno da Tuna com mais detalhes.

Após ter criado sua conta e obtido a **Chave de aplicação** e o **Token de aplicação**, siga as etapas abaixo para configurar a Tuna na sua loja:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **Tuna** na barra de busca e clique sobre o nome do provedor.
4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Tuna.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Tuna na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.
6. No campo **Liquidação automática**, selecione uma das seguintes opções:
- **Use o comportamento recomendado pelo processador de pagamentos:** a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento:** a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude:** a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado:** a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

7. Caso deseje utilizar o split de pagamento em sua loja, selecione a opção **Ativar split de recebíveis e enviar recebedores de pagamento** e indique o **Responsável pelas tarifas de processamento de pagamentos** e **Responsável pelos estornos** (marketplace, sellers ou marketplaces e sellers).
8. Clique em `Salvar`.


Após finalizar as configurações na VTEX, é preciso acessar o [Console](https://dev.tuna.uy/console?utm_medium=docs&utm_source=vtex&utm_content=console&utm_campaign=docs) da Tuna com os seus dados e criar ao menos um fluxo de pagamento. Somente dessa forma será possível processar pagamentos por meio da solução.

Para mais detalhes sobre esta configuração, acesse a [documentação](https://dev.tuna.uy/docs/console/) da Tuna.

## Configurar condição de pagamento

Ao concluir as etapas indicadas, a Tuna estará configurada na sua loja. Assim, quando você for cadastrar uma condição de pagamento, ela vai estar disponível no campo **Processar com o provedor** (desde que o meio de pagamento seja compatível com a **Tuna**).

Para saber como definir condições de pagamento, acesse o artigo [Configurar condições de pagamento](/pt/docs/tutorials/condicoes-de-pagamento).
