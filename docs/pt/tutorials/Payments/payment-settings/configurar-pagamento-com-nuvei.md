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
slugEN: setting-up-payments-with-nuvei
legacySlug: configurar-pagamento-com-nuvei
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, é possível realizar a integração com o Nuvei. Por meio deste provedor, sua loja pode realizar vendas com cartões de crédito e débito.

Para utilizar o Nuvei, siga os passos abaixo:

- [Configurar Nuvei na VTEX](#configurar-provedor-nuvei-na-vtex)
- [Configurar o DMN Url na Nuvei](#configurar-dmn-url-na-nuvei)

## Configurar provedor Nuvei na VTEX

<blockquote><ui>1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.</ui>

<blockquote><ui>2. Na tela de provedores, clique no botão **Novo provedor**.</ui>

<blockquote><ui>3. Digite o nome **nuvei-payment-provider** na barra de busca e clique sobre o nome do provedor.</ui>

<blockquote><ui>4. Em **Autorização do provedor**, preencha os campos **Chave de aplicação** e **Token de aplicação** com as informações da sua conta Nuvei.</ui>  

<blockquote><ui>5. Caso deseje modificar o nome de identificação a ser exibido para o provedor CieloEcommerce na tela do Admin VTEX, insira a informação no campo **Nome** em **Informações básicas**.</ui>

<blockquote><ui>6. Em **Controle de pagamento**, selecione se deseja ativar o provedor em ambiente de teste clicando em **Ativar modo de teste**.</ui>

<blockquote><ui>7. Para preencher os campos **Merchant Id**, **Merchant Site Id** e **Client Secret** (Secret Key), acesse as informações disponíveis em **Settings > My Integration Settings** dentro do painel de controle de sua conta no ambiente Nuvei.</ui>

<blockquote><ui>> ⚠️ A Nuvei possui credenciais (Merchant Id, Merchant Site Id e Client Secret) específicas para cada tipo de ambiente. Acesse os ambientes de teste [(Integration)](sandbox.nuvei.com) e [Live](cpanel.nuvei.com) para identificar as informações relativas a cada um deles.</blockquote>
<br>  
<blockquote><ui>8. Em **Environment**, selecione se deseja configurar o provedor Nuvei no ambiente **Integration** ou **Live**.</ui>

<blockquote><ui>9. Em **Test 3ds challenge Integration only**, caso você tenha selecionado o ambiente de teste (**Integration**) é possível realizar testes de segurança 3DS por meio das opções **Force 3ds Challenge**, **Force 3ds Frictionless** ou **User cardHolder name**. Para mais informações sobre os testes, acesse a documentação [Nuvei](https://docs.nuvei.com/documentation/integration/testing/testing-cards/?highlight=test%20cards#3d-secure-v2-test-scenarios).</ui>

 <blockquote><ui>> ⚠️ Sempre que o **Environment** do provedor for configurado como **Live**, a opção selecionada para o campo **Test 3ds challenge Integration only** deve ser **User cardHolder name**.</blockquote>
<br>  
<blockquote><ui>10. Clique em **Salvar**.</ui>

## Configurar DMN Url na Nuvei

Para configurar a informação DMN Url na Nuvei, siga os passos abaixo:

1. Acesse o seu ambiente Nuvei de teste ([Integration](sandbox.nuvei.com)) ou [Live](cpanel.nuvei.com).
2. No menu __Settings__, clique em __My Integration settings__.
3. Em __DMN URL__, substitua o campo __{account-name}__ com o nome de sua conta VTEX.

`https://master--{account-name}.myvtex.com/_v/api/nuvei-payment-provider/v0/dmn`

Para configurar os métodos de pagamento a serem processados pela Nuvei, acesse [Condições de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455). 

Para definir condições especiais sobre os métodos de pagamento, acesse [Configurar condições especiais de Pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456#).

Depois de seguir os passos indicados, o provedor Nuvei pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 
