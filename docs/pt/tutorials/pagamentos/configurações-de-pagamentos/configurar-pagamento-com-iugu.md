---
title: 'Configurar pagamento com iugu'
id: 2c1nAo5iR6jG1UySzRB89t
status: PUBLISHED
createdAt: 2022-03-31T18:58:08.146Z
updatedAt: 2025-08-15T14:01:20.485Z
publishedAt: 2025-08-15T14:01:20.485Z
firstPublishedAt: 2022-03-31T19:22:31.835Z
contentType: tutorial
productTeam: Financial
author: 6DODK49lJPk3yvcoe6GB6g
slugEN: setting-up-payments-with-iugu
legacySlug: configurar-pagamento-com-iugu
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

A iugu disponibiliza as seguintes opções de pagamentos por meio de [checkout transparente](https://help.vtex.com/pt/docs/tutorials/o-que-e-checkout-transparente): cartão de crédito, pix e boleto bancário. Além disso, é possível realizar [operações de recorrência](https://help.vtex.com/pt/docs/tutorials/configurar-recorrencia-em-condicoes-de-pagamento) e [split de pagamentos](https://help.vtex.com/pt/docs/tutorials/split-de-pagamento) (recebíveis e transação) entre marketplaces.

Para adicionar a iugu em sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome __iugu__ na barra de busca e clique sobre o nome do provedor.
4. Nos campos __Chave de aplicação__ e __Token de aplicação__ insira as informações que foram fornecidas pela iugu ([ID da conta e Chave API](https://dev.iugu.com/docs/configurando-conector-iugu-na-vtex#localizando-id-da-conta-e-chave-api-no-painel-da-iugu)).
5. Caso deseje modificar o nome de identificação a ser exibido para o provedor iugu na tela do Admin VTEX, insira a informação no campo __Nome__ em __Informações básicas__.
6. Em __Controle de pagamento__, selecione se deseja ativar o provedor em ambiente de teste clicando em __Ativar modo de teste__.
7. Caso deseje utilizar o [split de pagamento](https://help.vtex.com/pt/docs/tutorials/split-de-pagamento) em sua loja, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
8. Caso deseje utilizar o boleto bancário como meio de pagamento, em __Campos do provedor__, preencha o campo __Prazo de vencimento do boleto (em dias)__ com o mesmo valor configurado na sua área do cliente no portal da iugu.
9. Em __Tempo limite de validade do Pix (minutos)__, selecione o período disponível para que o cliente realize o pagamento por meio do Pix.
10. Clique em `Salvar`.

## Configurar condições de pagamento

Para processar os meios de pagamento cartão de crédito, pix e boleto bancário com a iugu em sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão `+`.
3. Clique sobre o meio de pagamento desejado (nome da bandeira do cartão de crédito, pix ou boleto bancário).
4. Preencha o campo __Nome da condição__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Em __Processar com provedor__ selecione a opção iugu.
7. Para pagamentos com cartão de crédito, selecione se deseja utilizar um sistema antifraude selecionando a opção __Usar solução antifraude__. Também é possível configurar se os pagamentos com cartão de crédito devem ser realizados [à vista ou parcelados (com e sem juros)](/pt/tutorial/condicoes-de-pagamento--tutorials_455#a-vista).
8. Se desejar, você também poderá configurar [condições especiais de pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-de-pagamento#a-vista).
9. Clique em `Salvar`.

Depois de seguir os passos indicados, o provedor iugu pode demorar até 10 minutos para aparecer no Checkout da sua loja como uma opção de pagamento.

> ⚠️ Antes de realizar transações por cartão de crédito, PIX ou Boleto bancário com a iugu em sua loja, verifique se esses meios de pagamento já estão habilitados em [sua área do cliente no portal da iugu](https://dev.iugu.com/docs/configurando-conector-iugu-na-vtex#configurando-condi%C3%A7%C3%B5es-de-pagamento).

## Configurar split de pagamento no marketplace com iugu

Para processar pagamentos em [marketplace com split de pagamento](https://help.vtex.com/pt/docs/tutorials/pagamentos-em-marketplaces-vtex#split-de-pagamentos) na iugu é necessário cadastrar os sellers de sua loja com o mesmo CNPJ no Admin VTEX e na sua área do cliente no portal da iugu. 

Saiba mais sobre criar sellers na VTEX em [Adicionar seller](/pt/docs/tutorials/adicionar-seller) e acesse as documentações da iugu para criar subcontas (sellers) via [área do cliente](https://support.iugu.com/hc/pt-br/articles/4411276874779-Como-criar-uma-subconta-pelo-painel-iugu-) ou [API](https://dev.iugu.com/docs/configurar-subconta-por-api).

### Habilitar split de recebíveis com iugu

Para habilitar o split de recebíveis com a iugu em sua loja, siga os passos abaixo:

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Provedores__, ou digite __Provedores__ na barra de busca no topo da página.
2. Digite o nome __iugu__ na barra de busca e clique sobre o nome do provedor.
3. Em __Detalhes__, clique sobre o botão `Editar`.
4. Em __Controle de pagamento__, selecione a opção __Ativar split de recebíveis e enviar recebedores de pagamento__ e indique o __Responsável pelas tarifas de processamento de pagamentos__ e __Responsável pelos estornos__ (marketplace, sellers ou marketplaces e sellers).
5. Clique em `Salvar`.

> ⚠️ A opção de split de recebíveis não está disponível para utilização em ambiente de teste.

Depois de seguir os passos indicados, a funcionalidade de split de recebíveis com o provedor iugu pode demorar até 10 minutos para ser ativada em sua loja.

> ⚠️ Para definir as comissões específicas de cada seller em sua loja, acesse **Marketplace > Sellers> Gerenciamento** no Admin VTEX, selecione o seller desejado e insira os valores de comissão em **Comissões**.

## Configurar recorrência com a iugu

Para disponibilizar a [recorrência](https://help.vtex.com/pt/docs/tutorials/configurar-recorrencia-em-condicoes-de-pagamento) como condição especial de pagamento por meio da iugu, é necessário:

- Habilitar o modo recorrência no Admin VTEX.
- Configurar os meios de pagamento cartão de crédito ou boleto bancário no Admin VTEX e na iugu.
- Configurar a funcionalidade [assinaturas](/pt/docs/tutorials/como-configurar-assinaturas) em sua loja.
