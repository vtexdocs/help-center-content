---
title: 'Configurar pagamento com Itaú Rede'
id: 77BYOKxVzONWulAf8dTVSX
status: PUBLISHED
createdAt: 2024-04-18T15:03:32.890Z
updatedAt: 2024-12-13T22:40:46.028Z
publishedAt: 2024-12-13T22:40:46.028Z
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

<div class="alert alert-warning">
As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta no Itaú Rede para informações atualizadas.
</div>

## Obter credenciais no portal Rede

Para iniciar o processo de integração de sua loja no ambiente Userede, envie um e-mail para ecommerce@userede.com.br solicitando o credenciamento das soluções de e-commerce Rede. O prazo estimado para retorno é de até 1 dia útil.

<div class="alert alert-info">
Assim que o credenciamento for concluído, você receberá por email o número de filiação (PV) e as orientações de acesso ao Portal Rede.
</div>

Após receber as informações de acesso, você ou outro pessoa com perfil de administrador em sua conta Rede (__usuário master__) deve gerar a chave de integração conforme os passos abaixo:

<blockquote><ui>1. Acesse o <a href="https://meu.userede.com.br/login">Portal Rede</a> com as informações de sua conta na Itaú Rede.</ui>

<blockquote><ui>2. Selecione a conta na qual deseja transacionar pagamentos na VTEX e clique em <b>Aplicar</b>. Guarde o número da conta, pois ele deve ser utilizado no campo <b>Chave de aplicação</b> na seção <a href="#configurar-itau-rede-na-vtex">Configurar Itaú Rede na VTEX</a>.</ui> 

![Itaú Rede_1](//images.ctfassets.net/alneenqid6w5/gooU2CGrEsArx16vHLBAw/33d5debbfd4286e0a61bfde428d5ba51/Ita__Rede_1.png)

<blockquote><ui>3. Após a tela atualizar para a conta desejada, no menu <b>para vender</b>, selecione a opção <b>e-commerce</b>.</ui>

![Itaú Rede_2](//images.ctfassets.net/alneenqid6w5/3VB0bwzReQKt2zjXnLHltx/11bfb6b935d77828b0a243dc90ea55fd/Itau_Rede_2.PNG)

<blockquote><ui>4. Na página <b>e-commerce</b>, clique no card <b>chave de integração</b>.</ui>

![Itaú Rede_3](//images.ctfassets.net/alneenqid6w5/AxbQNB9snirJxN4zOV7qT/b8441d7cc910a99448ea9f4c9724612e/Itau_Rede_3.png)

<blockquote><ui>5. Após ler as informações da chave de integração, clique em <b>li, estou ciente</b>.</ui>

![Itaú Rede_4](//images.ctfassets.net/alneenqid6w5/BU5ydvg5BxaY9KRPHevzv/73a8d3ed6e2bf9e9625b69430f8ae2d6/Itau_Rede_4.png)

<blockquote><ui>6. Clique no botão <b>gerar nova chave</b>.</ui>

![Itaú Rede_5](//images.ctfassets.net/alneenqid6w5/kZGFItLuWLgm6lc9Twrhb/266384a3037afaeed2b8b04a5efb9a87/Itau_Rede_5.png)

<blockquote><ui>7. Verifique as informações descritas na janela <b>gerar nova chave de integração</b> e clique em <b>gerar nova chave</b>.</ui>

![Itaú Rede_6](//images.ctfassets.net/alneenqid6w5/diZYL8GRAhwcL5sX7IQtn/24789d56142d14bc756ecd8c02616135/Itau_Rede_6.png)

<blockquote><ui>8. Após a criação da nova chave, clique em <b>copiar</b> e preserve a informação em um local seguro. Esta chave deverá ser utilizada no campo <b>Token de aplicação</b> na seção <a href="#configurar-itau-rede-na-vtex">Configurar Itaú Rede na VTEX</a>.</ui>

<blockquote><ui><div class="alert alert-warning">
Caso você perca o acesso à informação da chave de integração, será necessário repetir os passos anteriores para gerar uma nova chave. Após obter a nova chave para o mesmo número de filiação (PV), também será necessário atualizar a informação em todas as integrações associadas ao PV. Integrações que não forem atualizadas com a nova chave podem ser sofrer impactos nas operações.
  </div></ui></blockquote>

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
    	<li><b>Usar comportamento recomendado pelo processador de pagamentos</b>: a captura não é automática, mas agendada de acordo com o prazo especificado pela adquirente que, além de indicar se o pagamento foi autorizado, pode especificar ou recomendar um número de dias para a captura no momento da resposta à autorização do pagamento (este é o comportamento padrão da plataforma).</li>
    	<li><b>Liquidação automática imediatamente após a autorização do pagamento</b>: a captura é automática e acontece logo após a autorização, mesmo que a transação possua uma análise antifraude.</li>
   		<li><b>Liquidação automática imediatamente após a análise antifraude</b>: a captura é automática e acontece logo após a autorização e análise antifraude (Caso você selecione este comportamento e não possua análise antifraude, a captura do pagamento acontecerá da mesma forma que no comportamento "Liquidação automática imediatamente após a autorização do pagamento").</li>      
   		<li><b>Desativado</b>: a captura acontece somente quando o pedido for faturado. Caso escolha esse comportamento de captura, é importante atentar-se quanto ao tempo do faturamento. Isso porque o faturamento pode ultrapassar o tempo de captura acordado com o provedor de pagamentos e levar à perda da transação.</li>
</ul>

<blockquote><ui>8. Em <b>merchantName</b>, insira o nome de sua loja.</ui>

<blockquote><ui>9. Em <b>SoftDescriptor</b>, descreva a mensagem de identificação a ser exibida na fatura do cartão do seu cliente. Você deve utilizar a mesma informação cadastrada no Soft Descriptor no Portal da Rede.</ui>

<blockquote><div class="alert alert-info">
  Caso ainda não tenha habilitado o <b>Soft Descriptor</b>, acesse o Portal Rede para habilitá-lo ou se preferir não utilizar esta funcionalidade, apenas não preencha este campo.
  </div>

<blockquote><ui>10. No campo <b>delayToAutoSettle</b>, informe o período para que o pedido seja liquidado. Lembre-se que o valor deste campo deve estar de acordo com a regra determinada no campo de <b>Liquidação automática</b>.</ui>

<blockquote><ui>11. Clique em `Salvar`.</ui></blockquote>

## Configurar condição de pagamento para cartão

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre o nome da bandeira do cartão de crédito desejado.
4. Ative a condição no campo __Status__.
5. Em __Processar com provedor__, selecione a opção __ItauRede__.  
6. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).
8. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Itaú Rede pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 

## Pagamentos com PIX

Por meio da integração Rede e VTEX, você também pode oferecer o PIX em sua loja, permitindo que receba pagamentos via QR Code PIX, efetue operações de devolução total ou parcial de valores, e receba notificações de status das transações.

Antes de realizar os passos abaixos, certifique-se que você já tenha [obtido as credenciais no portal Rede](#obter-credenciais-no-portal-rede) e [configurado o Itaú Rede na VTEX](#configurar-itau-rede-na-vtex).

### Habilitar PIX na Rede

<div class="alert alert-info">
  Apenas usuários com perfil de administrador (<b>usuário master</b>) podem habilitar o Pix na Rede.
  </div>

Para habilitar a chave Pix, acesse o Portal Rede e siga o passo a passo:  

<blockquote><ui>1. Acesse o <a href="https://meu.userede.com.br/login">Portal Rede</a> com as informações de sua conta na Itaú Rede.</ui>

<blockquote><ui>2. Selecione a conta na qual deseja transacionar pagamentos na VTEX e clique em <b>Aplicar</b>.</ui> 

![Itaú Rede_1](//images.ctfassets.net/alneenqid6w5/gooU2CGrEsArx16vHLBAw/33d5debbfd4286e0a61bfde428d5ba51/Ita__Rede_1.png)

<blockquote><ui>3. Após a tela atualizar para a conta desejada, no menu <b>para vender</b>, selecione a opção <b>pix</b>.</ui>

![Itaú Rede_7_pt](//images.ctfassets.net/alneenqid6w5/4eoo6CA1ZIZNQ1RBEv4yUm/b2dd566d7e53251cf556b73138a46ae8/Ita__Rede_7.png)  

<blockquote><ui>4. Clique em <b>Habilitar Pix na Rede</b>.</ui>  

![Itaú Rede_8_pt](//images.ctfassets.net/alneenqid6w5/5eczd25Lmic550HChvQ8WG/0b55e0be2d2452c831c7f6fa06f071af/Ita__Rede_8.png)

<blockquote><ui>5. Selecione a conta Itaú onde deseja receber suas vendas com Pix e clique em <b>Escolher conta</b>.</ui></blockquote>    

![Itaú Rede_9_pt](//images.ctfassets.net/alneenqid6w5/1FqQQFuB8M6iGaTXJDo0CT/5cae8e0b6f10e665417ac142f82933d5/Ita__Rede_9.png)

### Configurar condição de pagamento para PIX

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Em __Pagamento instantâneo__, clique em __Pix__.
4. Ative a condição no campo __Status__.
5. Em __Processar com provedor__, selecione a opção __ItauRede__.
6. Clique em `Salvar`.

Depois de seguir os passos indicados, a opção PIX com o provedor Itaú Rede pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento.   
