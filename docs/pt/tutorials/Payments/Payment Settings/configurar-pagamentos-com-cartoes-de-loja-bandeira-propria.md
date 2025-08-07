---
title: 'Configurar pagamentos com Cartões de Loja (bandeira própria)'
id: 428FgVdSGQUeAOoogkaIw4
status: PUBLISHED
createdAt: 2018-06-28T21:20:09.875Z
updatedAt: 2023-03-26T21:19:26.897Z
publishedAt: 2023-03-26T21:19:26.897Z
firstPublishedAt: 2018-07-02T18:04:41.389Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slugEN: setting-up-private-label-payments
locale: pt
legacySlug: configurar-pagamentos-com-cartoes-de-loja-bandeira-propria
subcategoryId: 3tDGibM2tqMyqIyukqmmMw
---

Na VTEX, sua loja pode receber pagamentos com __cartão de loja (bandeira própria)__. Para isso, você vai precisar primeiro cadastrar uma [afiliação de gateway](/pt/tutorial/afiliacoes-de-gateway--tutorials_444#) capaz de processar esse meio de pagamento. 

Em seguida, deverão ser realizadas duas etapas de configuração. 

## Configurar Cartão de Loja (bandeira própria)
Com uma das afiliações de gateway acima cadastrada com sucesso, você deverá configurar o pagamento customizado __cartão de loja (bandeira própria)__.

1. No Admin VTEX, acesse **Configurações da loja** > **Pagamentos** > **Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na tela principal, acesse a aba __Pagamentos Customizados__.
3. Cada tipo de pagamento customizado permite até 5 configurações diferentes. Na parte reservada aos __cartões de loja (bandeira própria)__, clique em uma das caixas de configuração.
4. Você será redirecionado para um formulário. No campo __Nome da Private Label__, preencha o nome do cartão.
5. Em __Descrição da Private Label__, escreva o texto que vai dar mais detalhes sobre a condição de pagamento.
6. No campo __Faixas de Bin{min}-{max},{min}-{max},{bin1},{bin2} (obrigatorio)__, informe os códigos BIN dos cartões para que eles sejam validados pelo sistema. Você pode inserir uma faixa de BINs (inserindo o primeiro e o último código da sequência, separados por hífen) ou várias (separando cada faixa por vírgula e sem espaços).
7. Em __Código de Pagamento em Adquirente (opcional)__, indique o código para ser enviado e processado pelo adquirente contratado por você.
8. No campo __Usa Nome do Portador__, defina se o usuário vai precisar informar o nome que está impresso no cartão no momento da compra.
9. Em __CVV__, diga quantos números do CVV usuário vai precisar preencher no momento da compra (no Brasil, o mais comum são códigos com 3 dígitos). Você também pode escolher não pedir essa informação.
10. No campo __Usa Data de Expiração__, informe se o usuário vai precisar preencher a data de validade do cartão no momento da compra (o formato de preenchimento é MM/AA).
11. Em __Usa Endereço de Cobrança__, defina se o usuário vai precisar preencher um endereço de cobrança no momento da compra.
12. No campo __Máscara de Cartão__, escolha os símbolos que vão representar os 16 dígitos do cartão no momento da compra. Essa é uma configuração para proteger o número do cartão do seu cliente. Você pode escolher os caracteres que preferir, separando-os em quatro grupos de quatro e usando espaços.
13. Em __Validade do pagamento__, informe o período máximo (quantidade de dias) que o pagamento pode ser efetuado. Após este tempo, em caso de não pagamento, o pedido será cancelado.
14. No campo __Autorizar automaticamente (somente aplica se o Integrador é Default)__, diga se deseja autorizar os pagamentos de forma automática.
15. No campo __Ativar split de pagamento (caso o provider de processamento do pagamento suporte esta função)__, informe se deseja ativar a solução de split de recebíveis. Em caso positivo, quando a venda envolver pedidos com múltiplos merchants, os recebíveis da promissória serão divididos entre os sellers e o marketplace. Para maiores informações, veja [Split de Pagamento](/pt/tutorial/split-de-pagamento).
16. Clique em __Salvar__.

## Configurar condição de pagamento
Depois de clicar no botão __Salvar__, você será redirecionado para a página de configuração da condição de pagamento.

1. Clique no botão __Status__ para ativar essa condição de pagamento.
2. Em __Processar com a afiliação__, escolha o conector que vai processar os pagamentos com cartão de loja de bandeira própria (uma das afiliações de gateway cadastradas na primeira etapa deste passo a passo).
3. Se houver um antifraude configurado na sua loja, você pode ativá-lo para essa condição de pagamento marcando a caixa Usar Antifraude.
4. Escolha se os pagamentos vão ser à vista ou parcelados.
5. Você também pode configurar [condições especiais de pagamento](/pt/tutorial/condicoes-especiais).
5. Clique em __Salvar__.

Depois de seguir os passos indicados, o __cartão de loja (bandeira própria)__ vai aparecer no checkout da sua loja como uma opção de pagamento.
