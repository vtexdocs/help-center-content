---
title: 'Configurar pagamento com Itaú Rede'
id: 77BYOKxVzONWulAf8dTVSX
status: PUBLISHED
createdAt: 2024-04-18T15:03:32.890Z
updatedAt: 2025-09-24T18:12:19.059Z
publishedAt: 2025-09-24T18:12:19.059Z
firstPublishedAt: 2024-04-25T14:54:53.085Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-itau-rede
legacySlug: configurar-pagamento-com-itau-rede
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Itaú Rede. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito ou débito, como Mastercard, Visa, Hiper, Elo, Diners, Sorocred, American Express, Hipercard, JCB, Banescard, Cabal, Mais, Credz, além de cartões co-branded e PIX.

As seguintes ações necessárias de acordo com o meio de pagamento que deseja oferecer em sua loja:

- __Cartões de crédito, débito ou co-branded__

   1. [Obter credenciais no portal Rede](#obter-credenciais-no-portal-rede)
   2. [Configurar Itaú Rede na VTEX](#configurar-itau-rede-na-vtex)
   3. [Configurar condição de pagamento para cartão](#configurar-condicao-de-pagamento-para-cartao)

- __PIX__

   1. [Obter credenciais no portal Rede](#obter-credenciais-no-portal-rede)
   2. [Configurar Itaú Rede na VTEX](#configurar-itau-rede-na-vtex)
   3. [Habilitar PIX na Rede](#habilitar-pix-na-rede)
   4. [Configurar condição de pagamento para PIX](#configurar-condicao-de-pagamento-para-pix)  

> ⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta no Itaú Rede para informações atualizadas.

## Obter credenciais no portal Rede

Para iniciar o processo de integração de sua loja no ambiente Userede, envie um e-mail para ecommerce@userede.com.br solicitando o credenciamento das soluções de e-commerce Rede. O prazo estimado para retorno é de até 1 dia útil.

> ℹ️ Assim que o credenciamento for concluído, você receberá por email o número de filiação (PV) e as orientações de acesso ao Portal Rede.

Após receber as informações de acesso, você ou outro pessoa com perfil de administrador em sua conta Rede (__usuário master__) deve gerar a chave de integração conforme os passos abaixo:

<blockquote><ui>1. Acesse o [Portal Rede](https://meu.userede.com.br/login) com as informações de sua conta na Itaú Rede.</ui>

<blockquote><ui>2. Selecione a conta na qual deseja transacionar pagamentos na VTEX e clique em **Aplicar**. Guarde o número da conta, pois ele deve ser utilizado no campo **Chave de aplicação** na seção [Configurar Itaú Rede na VTEX](#configurar-itau-rede-na-vtex).</ui> 

![Itaú Rede_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_1.png)

<blockquote><ui>3. Após a tela atualizar para a conta desejada, no menu **para vender**, selecione a opção **e-commerce**.</ui>

![Itaú Rede_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_2.PNG)

<blockquote><ui>4. Na página **e-commerce**, clique no card **chave de integração**.</ui>

![Itaú Rede_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_3.png)

<blockquote><ui>5. Após ler as informações da chave de integração, clique em **li, estou ciente**.</ui>

![Itaú Rede_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_4.png)

<blockquote><ui>6. Clique no botão **gerar nova chave**.</ui>

![Itaú Rede_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_5.png)

<blockquote><ui>7. Verifique as informações descritas na janela **gerar nova chave de integração** e clique em **gerar nova chave**.</ui>

![Itaú Rede_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_6.png)

<blockquote><ui>8. Após a criação da nova chave, clique em **copiar** e preserve a informação em um local seguro. Esta chave deverá ser utilizada no campo **Token de aplicação** na seção [Configurar Itaú Rede na VTEX](#configurar-itau-rede-na-vtex).</ui>

<blockquote><ui>> ⚠️ Caso você perca o acesso à informação da chave de integração, será necessário repetir os passos anteriores para gerar uma nova chave. Após obter a nova chave para o mesmo número de filiação (PV), também será necessário atualizar a informação em todas as integrações associadas ao PV. Integrações que não forem atualizadas com a nova chave podem ser sofrer impactos nas operações.</ui></blockquote>

## Configurar Itaú Rede na VTEX

Para configurar o Itaú Rede, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __ItauRede__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha o campo __Chave de aplicação__ com o seu número de filiação (PV) e o campo __Token de aplicação__ com a chave de integração.
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Itaú Rede na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__. No momento esta opção não está disponível para este provedor.
7. Em __Liquidação automática__, selecione uma das seguintes opções:
<br>
<ul>
<br>
    	<li>**Usar comportamento recomendado pelo processador de pagamentos**: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li>**Liquidação automática imediatamente após a autorização do pagamento**: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li>**Liquidação automática imediatamente após a análise antifraude**: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li>**Desativado**: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

<blockquote><ui>8. Em **merchantName**, insira o nome de sua loja.</ui>

<blockquote><ui>9. Em **SoftDescriptor**, descreva a mensagem de identificação a ser exibida na fatura do cartão do seu cliente. Você deve utilizar a mesma informação cadastrada no Soft Descriptor no Portal da Rede.</ui>

<blockquote>> ℹ️ Caso ainda não tenha habilitado o **Soft Descriptor**, acesse o Portal Rede para habilitá-lo ou se preferir não utilizar esta funcionalidade, apenas não preencha este campo.

<blockquote><ui>10. No campo **delayToAutoSettle**, informe o período para que o pedido seja liquidado. Lembre-se que o valor deste campo deve estar de acordo com a regra determinada no campo de **Liquidação automática**.</ui>

<blockquote><ui>11. No campo **pixExpiration**, informe o tempo de validade que um QR Code PIX deve ter em sua loja.</ui>  

<blockquote><ui>12. Clique em `Salvar`.</ui></blockquote>

## Configurar condição de pagamento para cartão

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre o nome da bandeira do cartão de crédito desejado.
4. Ative a condição no campo __Status__.
5. Em __Processar com provedor__, selecione a opção __ItauRede__.  
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
7. Se desejar, você também pode [configurar condições especiais de pagamento](/pt/tutorial/condicoes-especiais--tutorials_456).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Itaú Rede pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 

## Pagamentos com PIX

Por meio da integração Rede e VTEX, você também pode oferecer o PIX em sua loja, permitindo que receba pagamentos via QR Code PIX, efetue operações de devolução total ou parcial de valores, e receba notificações de status das transações.

Antes de realizar os passos abaixos, certifique-se que você já tenha [obtido as credenciais no portal Rede](#obter-credenciais-no-portal-rede) e [configurado o Itaú Rede na VTEX](#configurar-itau-rede-na-vtex).

### Habilitar PIX na Rede

> ℹ️ Apenas usuários com perfil de administrador (**usuário master**) podem habilitar o Pix na Rede.

Para habilitar a chave Pix, acesse o Portal Rede e siga o passo a passo:  

<blockquote><ui>1. Acesse o [Portal Rede](https://meu.userede.com.br/login) com as informações de sua conta na Itaú Rede.</ui>

<blockquote><ui>2. Selecione a conta na qual deseja transacionar pagamentos na VTEX e clique em **Aplicar**.</ui> 

![Itaú Rede_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_7.png)

<blockquote><ui>3. Após a tela atualizar para a conta desejada, no menu **para vender**, selecione a opção **pix**.</ui>

![Itaú Rede_7_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_8.png)  

<blockquote><ui>4. Clique em **Habilitar Pix na Rede**.</ui>  

![Itaú Rede_8_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_9.png)

<blockquote><ui>5. Selecione a conta Itaú onde deseja receber suas vendas com Pix e clique em **Escolher conta**.</ui></blockquote>    

![Itaú Rede_9_pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/pagamentos/configura%C3%A7%C3%B5es-de-pagamentos/configurar-pagamento-com-itau-rede_10.png)

### Configurar condição de pagamento para PIX

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento instantâneo__, clique em __Pix__.
4. Ative a condição no campo __Status__.
5. Em __Processar com provedor__, selecione a opção __ItauRede__.
6. Clique em `Salvar`.

Depois de seguir os passos indicados, a opção PIX com o provedor Itaú Rede pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento.   
