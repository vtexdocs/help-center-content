---
title: Configurar Pix como meio de pagamento
id: 5sbNavMSJY4jyLmLKRHiOf
status: PUBLISHED
createdAt: 2020-11-10T19:51:24.848Z
updatedAt: 2023-03-26T21:45:19.252Z
publishedAt: 2023-03-26T21:45:19.252Z
firstPublishedAt: 2020-11-11T12:32:03.317Z
contentType: tutorial
productTeam: Financial
author: 7qy2DBsUp8U5P9lqV0JHfR
slug: configurar-pix-como-meio-de-pagamento
legacySlug: configurar-pix-como-meio-de-pagamento
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

O [Pix](https://vtex.com/pt-br/blog/produto/pix-no-e-commerce/ "Pix") é um meio de pagamento eletrônico específico do Brasil. Por meio dele, é possível o envio e o recebimento instantâneo de pagamentos entre diferentes bancos e instituições financeiras, 24h por dia, sete dias por semana.

<div class="alert alert-warning">
O Pix <strong>não é</strong> um meio de pagamento suportado por clientes marketplace que realizem split de transação.
</div>

Para maiores informações sobre o PIX, acesse o [PIX FAQ](https://help.vtex.com/pt/tutorial/pix-faq--3lx7zCU2lQroTEBCYKYbo3 "o FAQ sobre as principais dúvidas relacionadas ao Pix"). 

## Configurar o Pix

Para receber pagamentos por meio do PIX na VTEX, você precisa ter cadastrado uma afiliação de gateway capaz de processar esse meio de pagamento e realizar a configuração descrita abaixo:

<div class="alert alert-warning">
  Caso o conector a ser escolhido (no <b>Passo 8.</b>) ainda não estiver cadastrado em sua loja, será exibida a mensagem “(Configurar)” após o nome do conector. Nesta situação, escolha outro conector disponível ou realize o seu cadastro. Para saber mais, acesse <a href="https://help.vtex.com/pt/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete#">Cadastrar afiliações de gateway</a>.
</div>

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de pagamento__, clique no botão __+__.
3. Em __Pagamento Instantâneo__, selecione a opção __Pix__.
4. Preencha o campo __Nome da regra__ com um nome de sua preferência para identificação.
5. Ative a condição no campo __Status__.
6. Em __Processar com a afiliação__, escolha o conector que irá processar os pagamentos com o PIX. Somente estarão disponíveis para seleção, os conectores que suportam este meio de pagamento.
7. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/tutorial/condiciones-especiales--tutorials_456?&utm_source=autocomplete#).
8. Clique em __Salvar__.

Depois de seguir os passos indicados, o PIX pode demorar até 10 minutos para aparecer no checkout da sua loja como uma opção de pagamento. 

