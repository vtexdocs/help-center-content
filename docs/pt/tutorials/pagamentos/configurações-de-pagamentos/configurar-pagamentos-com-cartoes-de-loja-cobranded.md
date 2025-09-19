---
title: 'Configurar pagamentos com Cartões de Loja (co-branded)'
id: jrkLK41IjuquUmyKUi86Q
status: PUBLISHED
createdAt: 2018-06-25T15:48:13.031Z
updatedAt: 2023-09-22T21:25:38.666Z
publishedAt: 2023-09-22T21:25:38.666Z
firstPublishedAt: 2018-06-27T20:17:05.882Z
contentType: tutorial
productTeam: Post-purchase
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-payments-with-store-card-cobranded
legacySlug: configurar-pagamentos-com-cartoes-de-loja-cobranded
locale: pt
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, sua loja pode receber pagamentos por meio de um __cartão de loja (co-branded)__. Para isso, você precisa ter cadastrado uma afiliação de gateway capaz de processar esse meio de pagamento e realizar duas etapas de configuração.

## Configurar Cartão de Loja (co-branded)
A primeira estapa de configuração será a de criação do pagamento customizado __cartão de loja (co-branded)__.

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Clique na aba __Pagamentos Customizados__.
3. Em __cartões de loja (co-branded)__, clique em uma das 5 caixas de configuração (Configurar).
4. Em __Nome__, preencha o nome do cartão.
5. Em __Descrição__, escreva o texto que vai dar mais detalhes sobre a condição de pagamento.
6. Em __Bandeira do cartão__, escolha a bandeira à qual o cartão da sua loja está vinculado. Atualmente, as bandeiras possíveis são: American Express, Cabal, Diners, Elo, Mastercard e Visa.
7. Em __Intervalos de BIN (opcional)__, você pode informar uma faixa de BINs (inserindo o primeiro e o último código da sequência, separados por hífen) ou várias (separando cada faixa por vírgula e sem espaços).

> ⚠️ Quando o cliente inserir um número bin fora da faixa especificada neste campo, a seguinte mensagem será exibida "Confira o número do seu cartão. Não conseguimos confirmar se o número digitado está correto". Caso não haja erro no número digitado, ele poderá clicar em "SIM, O NÚMERO ESTÁ CORRETO" para continuar a finalização do pedido.

<blockquote><ui>8. No campo **Código de Pagamento em Adquirente (opcional)**, indique o código para ser enviado e processado pelo adquirente contratado por você.</ui>

<blockquote><ui>9. Em **Ativar divisão de pagamento**, caso opte por utilizar essa opção, quando a venda envolver lojas de marketplace, os valores serão divididos entre os sellers e o marketplace.</ui>

<ui>10. Clique em **Salvar**.</ui>

## Configurar condição de pagamento
Após configurar o cartão, será necessária a configuração da condição de pagamento.

> ⚠️ Caso o conector a ser escolhido (no **Passo 8.**) ainda não estiver cadastrado em sua loja, será exibida a mensagem “(Configurar)” após o nome do conector. Nesta situação, escolha outro conector disponível ou realize o seu cadastro. Para saber mais, acesse [Cadastrar afiliações de gateway](/pt/tutorial/afiliacoes-de-gateway--tutorials_444?&utm_source=autocomplete#).

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba __Condições de Pagamentos__, clique no botão __“+”__.
3. Em __Pagamento Customizado__, selecione o pagamento customizado (co-branded) configurado anteriormente.
4. Descreva a identificação da condição de pagamento em __Nome da Regra__.
5. Clique no botão __Status__ para ativar essa condição de pagamento.
6. Em __Processar com a afiliação__, escolha o conector que irá processar os pagamentos com o cartão de loja co-branded. Somente estarão disponíveis para seleção, os conectores que suportam este método de pagamento.
7. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa __Usar Antifraude__.
8. Escolha se os pagamentos serão à vista ou parcelados.
9. Você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
10. Clique em __Salvar__.

Depois de seguir os passos indicados, o __cartão de loja (co-branded)__ vai aparecer no checkout da sua loja como uma opção de pagamento.

