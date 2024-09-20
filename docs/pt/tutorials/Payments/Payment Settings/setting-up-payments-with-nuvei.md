---
title: 'Configurar pagamento com Nuvei'
id: 67DjdrpIaZZmhXv9Iwa6Ev
status: PUBLISHED
createdAt: 2024-03-27T12:55:27.016Z
updatedAt: 2024-09-13T17:39:52.427Z
publishedAt: 2024-09-13T17:39:52.427Z
firstPublishedAt: 2024-09-13T17:39:52.427Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slug: configurar-pagamento-com-nuvei
locale: pt
legacySlug: configurar-pagamento-com-nuvei
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o Nuvei. Por meio deste provedor, sua loja pode realizar vendas com cartões de crédito e débito.

Para utilizar o Nuvei, siga os passos abaixo:

- [Configurar Nuvei na VTEX](#configurar-provedor-nuvei-na-vtex)
- [Configurar o DMN Url na Nuvei](#configurar-dmn-url-na-nuvei)

## Configurar provedor Nuvei na VTEX

<blockquote><ui>1. No Admin VTEX, acesse <b>Configurações da loja > Pagamentos > Provedores</b>, ou digite <b>Provedores</b> na barra de busca no topo da página.</ui>

<blockquote><ui>2. Na tela de provedores, clique no botão <b>Novo provedor</b>.</ui>

<blockquote><ui>3. Digite o nome <b>nuvei-payment-provider</b> na barra de busca e clique sobre o nome do provedor.</ui>

<blockquote><ui>4. Em <b>Autorização do provedor</b>, preencha os campos <b>Chave de aplicação</b> e <b>Token de aplicação</b> com as informações da sua conta Nuvei.</ui>  

<blockquote><ui>5. Caso deseje modificar o nome de identificação a ser exibido para o provedor CieloEcommerce na tela do Admin VTEX, insira a informação no campo <b>Nome</b> em <b>Informações básicas</b>.</ui>

<blockquote><ui>6. Em <b>Controle de pagamento</b>, selecione se deseja ativar o provedor em ambiente de teste clicando em <b>Ativar modo de teste</b>.</ui>

<blockquote><ui>7. Para preencher os campos <b>Merchant Id</b>, <b>Merchant Site Id</b> e <b>Client Secret</b> (Secret Key), acesse as informações disponíveis em <b>Settings > My Integration Settings</b> dentro do painel de controle de sua conta no ambiente Nuvei.</ui>

<blockquote><ui>>⚠️ A Nuvei possui credenciais (Merchant Id, Merchant Site Id e Client Secret) específicas para cada tipo de ambiente. Acesse os ambientes de teste [(Integration)](sandbox.nuvei.com) e [Live](cpanel.nuvei.com) para identificar as informações relativas a cada um deles.</blockquote>
<br>  
<blockquote><ui>8. Em <b>Environment</b>, selecione se deseja configurar o provedor Nuvei no ambiente <b>Integration</b> ou <b>Live</b>.</ui>

<blockquote><ui>9. Em <b>Test 3ds challenge Integration only</b>, caso você tenha selecionado o ambiente de teste (<b>Integration</b>) é possível realizar testes de segurança 3DS por meio das opções <b>Force 3ds Challenge</b>, <b>Force 3ds Frictionless</b> ou <b>User cardHolder name</b>. Para mais informações sobre os testes, acesse a documentação <a href="https://docs.nuvei.com/documentation/integration/testing/testing-cards/?highlight=test%20cards#3d-secure-v2-test-scenarios">Nuvei</a>.</ui>

 <blockquote><ui>>⚠️ Sempre que o **Environment** do provedor for configurado como **Live**, a opção selecionada para o campo **Test 3ds challenge Integration only** deve ser **User cardHolder name**.</blockquote>
<br>  
<blockquote><ui>10. Clique em <b>Salvar</b>.</ui>

## Configurar DMN Url na Nuvei

Para configurar a informação DMN Url na Nuvei, siga os passos abaixo:

1. Acesse o seu ambiente Nuvei de teste ([Integration](sandbox.nuvei.com)) ou [Live](cpanel.nuvei.com).
2. No menu __Settings__, clique em __My Integration settings__.
3. Em __DMN URL__, substitua o campo __{account-name}__ com o nome de sua conta VTEX.

`https://master--{account-name}.myvtex.com/_v/api/nuvei-payment-provider/v0/dmn`

Para configurar os métodos de pagamento a serem processados pela Nuvei, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Nuvei pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
