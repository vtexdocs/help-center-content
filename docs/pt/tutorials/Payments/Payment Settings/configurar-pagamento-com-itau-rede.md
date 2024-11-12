---
title: 'Configurar pagamento com Itaú Rede'
id: 77BYOKxVzONWulAf8dTVSX
status: PUBLISHED
createdAt: 2024-04-18T15:03:32.890Z
updatedAt: 2024-04-25T15:26:44.454Z
publishedAt: 2024-04-25T15:26:44.454Z
firstPublishedAt: 2024-04-25T14:54:53.085Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-itau-rede
locale: pt
legacySlug: configurar-pagamento-com-itau-rede
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o provedor de pagamento Itaú Rede. Por meio deste provedor, sua loja pode realizar vendas por meio de cartões de crédito.

Para utilizar o Itaú Rede, é necessário:

- [Obter credenciais no ambiente Userede](#obter-credenciais-no-ambiente-userede)
- [Configurar Itaú Rede na VTEX](#configurar-itau-rede-na-vtex)
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento) 

## Obter credenciais no ambiente Userede

>⚠️ As configurações realizadas em um ambiente externo à VTEX podem ser descontinuadas ou modificadas sem aviso prévio. Consulte sua conta no Itaú Rede para informações atualizadas.

Para obter as credenciais __Chave de aplicação__ e __Token de aplicação__ necessárias para configurar o Itaú Rede na VTEX, siga os passos abaixo:

<blockquote><ui>1. Acesse o <a href="https://meu.userede.com.br/login">Portal Userede</a> com as informações de sua conta na Itaú Rede.</ui>

<blockquote><ui>2. Selecione a conta na qual deseja transacionar pagamentos na VTEX e clique em <b>Aplicar</b>. Guarde o número da conta, pois ele deve ser utilizado no campo <b>Chave de aplicação</b> na seção <a href="#configurar-itau-rede-na-vtex">Configurar Itaú Rede na VTEX</a>.</ui> 

![Itaú Rede_1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.PNG)

<blockquote><ui>3. Após a tela atualizar para a conta desejada, no menu <b>para vender</b>, selecione a opção <b>e-commerce</b>.</ui>

![Itaú Rede_2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.PNG)

<blockquote><ui>4. Na página <b>e-commerce</b>, clique no card <b>chave de integração</b>.</ui>

![Itaú Rede_3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

<blockquote><ui>5. Após ler as informações da chave de integração, clique em <b>li, estou ciente</b>.</ui>

![Itaú Rede_4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

<blockquote><ui>6. Clique no botão <b>gerar nova chave</b>.</ui>

![Itaú Rede_5](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

<blockquote><ui>7. Verifique as informações descritas na janela <b>gerar nova chave de integração</b> e clique em <b>gerar nova chave</b>.</ui>

![Itaú Rede_6](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

<blockquote><ui>8. Após a criação da nova chave, clique em <b>copiar</b> e preserve a informação em um local seguro. Esta chave deverá ser utilizada no campo <b>Token de aplicação</b> na seção <a href="#configurar-itau-rede-na-vtex">Configurar Itaú Rede na VTEX</a>.</ui>

<blockquote><ui>>⚠️ Após uma chave de integração ser criada no ambiente Rede, não é possível acessá-la novamente em outros locais. Registre a informação da chave em um local protegido, e em caso de perda, repita o processo para gerar uma nova chave.</ui></blockquote>

## Configurar Itaú Rede na VTEX

Para configurar o Itaú Rede, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __ItauRede__ na barra de busca e clique sobre o nome do provedor.
4. Em __Autorização do provedor__, preencha os campos __Chave de aplicação__ e __Token de aplicação__ obtidos nos passos 2 e 8 da seção [Obter credenciais no ambiente Userede](#obter-credenciais-no-ambiente-userede).
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor Itaú Rede na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Em __merchantName__, insira o nome de sua loja.
8. Em __SoftDescriptor__, descreva a mensagem de identificação a ser exibida na transação realizada na sua loja.
9. No campo __delayToAutoSettle__, escolha em quanto tempo você deseja que a captura seja realizada (depois da aprovação da transação e da análise do antifraude).
10. Clique em `Salvar`.

## Configurar condição de pagamento

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre o nome da bandeira do cartão de crédito desejado.
4. Ative a condição no campo __Status__.
5. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
6. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).
7. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor Itaú Rede pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento. 
