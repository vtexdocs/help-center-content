---
title: 'Configurar PayPal Plus (PayPal Transparente)'
id: 2akxq3I92k8A4kymIYOiWy
status: ARCHIVED
createdAt: 2018-02-20T20:15:36.950Z
updatedAt: 2024-03-18T20:30:56.156Z
publishedAt: 
firstPublishedAt: 2018-02-20T22:56:13.192Z
contentType: tutorial
productTeam: Financial
author: authors_59
slug: configurar-paypal-plus-paypal-transparente
locale: pt
legacySlug: configurar-paypal-plus-paypal-transparente
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

>❗ Essa integração de pagamento não pode ser mais configurada na plataforma devido ao [processo de remoção de provedores legados](https://help.vtex.com/pt/announcements/conectores-legados-de-pagamentos-serao-descontinuados-em-2024--4R5YIjUu1IWkiOHzXtQU14) e o artigo será removido em breve do Help Center. Verifique com o seu provedor maiores informações sobre o desenvolvimento da nova integração de pagamento e os passos necessários para a migração das configurações em sua loja.

No gateway da VTEX, é possível configurar o subadquirente PayPal Plus, o checkout transparente da PayPal. Nesta modalidade, basta o cliente inserir as informações do cartão de crédito e finalizar a compra normalmente. O pagamento é feito diretamente em seu site, sem redirecionar seus clientes. 

Para fazer as configurações, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __PayPalPlus__ na barra de busca e clique sobre o nome do provedor.
4. Caso deseje modificar o nome de identificação a ser exibido para o PayPal Plus na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
5. Em __Controle de pagamento__, selecione se deseja ativar o PayPal Plus em ambiente de teste clicando em __Ativar modo de teste__.
6. Preencha os campos abaixo conforme dados fornecidos pela PayPal:
    - Em __ID do cliente__ insira o _clientId_.
    - Em __Segredo__ insira o _secret_.
    - Em __Nome do usuário__ insira o _userName_.
    - Em __Senha__ insira o _password_.
    - Em __Assinatura__ insira o _signature_.

<blockquote><ui>  7. Em <b>Salvar cartões</b>, selecione <b>Sim</b> para que o cliente possa selecionar a opção de salvar o cartão no momento do checkout. Caso não deseje habilitar esta opção, selecione <b>Não</b>.</ui>

<blockquote><ui>  8. Em <b>Moeda</b>, escolha a moeda da transação.</ui>

<blockquote><ui>  9. Em <b>Local de transação</b>, selecione o país da transação.</ui>

<blockquote><ui>  10. Em <b>Ativar API de risco (STC</b>, selecione a opção de acordo com as suas configurações na PayPal.</ui>

<blockquote><ui>  11. Clique em <b>Salvar</b>.</ui>

## Configurar condição de pagamento PayPal Plus

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique em __PayPalPlus__.
4. Preencha o campo __Nome da condição__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Selecione se deseja utilizar um sistema antifraude selecionando a opção __Usar solução antifraude__.
7. Indique se os pagamentos com cartão de crédito devem ser realizados [à vista ou parcelados (com e sem juros)](https://help.vtex.com/pt/tutorial/condicoes-de-pagamento--tutorials_455#a-vista).
8. Se desejar, você também poderá configurar [condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condicoes-especiais--tutorials_456).
9. Clique em `Salvar`.

Depois de seguir os passos indicados, o PayPal Plus pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento.
