---
title: 'Configurar pagamento com TiendaCrypto'
id: 7qC52v2j7q7B0YUtLnW2I9
status: PUBLISHED
createdAt: 2023-05-26T18:19:21.462Z
updatedAt: 2024-01-24T13:32:40.359Z
publishedAt: 2024-01-24T13:32:40.359Z
firstPublishedAt: 2023-05-26T18:43:41.573Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-tyendacrypto
legacySlug: configurar-pagamento-com-tyendacrypto
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento TiendaCrypto. Por meio deste provedor, sua loja pode realizar vendas por meio do criptomoedas.

Para configurar TiendaCrypto, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __TiendaCrypto__ na barra de busca e clique sobre o nome do provedor.
4. Clique em __Autorizar__. Você será redirecionado para o ambiente do TiendaCrypto.
5. Em **Liquidação automática**, selecione uma das seguintes opções:
- **Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).
- **Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.
- **Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").
- **Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.

6. Caso seja exibida uma mensagem de alerta indicando a necessidade de instalação do app, clique no botão **Instalar app** e siga as instruções de instalação.
7. Clique em **Salvar**.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique no método de pagamento __TiendaCrypto API Commerce__.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456#).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o conector TiendaCrypto pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

