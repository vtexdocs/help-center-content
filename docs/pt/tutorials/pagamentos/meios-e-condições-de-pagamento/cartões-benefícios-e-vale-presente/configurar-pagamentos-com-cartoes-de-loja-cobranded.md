---
title: 'Configurar pagamentos com cartões de loja (co-branded)'
createdAt: 2018-06-25T15:48:13.031Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-payments-with-store-card-cobranded
locale: pt
hidden: false
---

Na VTEX, sua loja pode receber pagamentos por meio de um __cartão de loja (co-branded)__, que é um cartão da loja vinculado a uma bandeira de cartão, como Visa ou Mastercard. Antes de começar, [cadastre um provedor de pagamento](/pt/docs/tutorials/afiliacoes-de-gateway) capaz de processar esse meio de pagamento. Para saber se um provedor processa cartões de loja co-branded, consulte o tutorial de configuração dele na [Lista de provedores de pagamento por país](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais).

Com o provedor cadastrado, a configuração tem duas etapas:

- [Configurar cartão de loja (bandeira própria)](#configurar-cartao-de-loja-co-branded): criar o pagamento customizado com os dados do cartão.
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento): ativar o cartão como opção de pagamento e escolher o provedor que vai processá-lo.

## Configurar cartão de loja (co-branded)

Nesta etapa, você cria o pagamento customizado __cartão de loja (co-branded)__. Cada categoria de [pagamento customizado](/pt/docs/tutorials/como-configurar-pagamento-customizado) aceita até 20 configurações, e cada uma é preenchida em um formulário próprio.

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na tela principal, acesse a aba __Pagamentos customizados__.
3. Na parte reservada aos __cartões de loja (co-branded)__, clique em uma das caixas de configuração.
4. Em __Nome__, preencha o nome do cartão.
5. Em __Descrição__, escreva o texto que vai dar mais detalhes sobre a condição de pagamento.
6. Em __Bandeira do cartão__, escolha a bandeira à qual o cartão da sua loja está vinculado. As bandeiras disponíveis são: American Express, Cabal, Diners, Elo, Mastercard e Visa.
7. Em __Intervalos de BIN (opcional)__, você pode informar uma faixa de BINs (inserindo o primeiro e o último código da sequência, separados por hífen) ou várias (separando cada faixa por vírgula e sem espaços).

   > ⚠️ Quando o cliente insere um cartão com BIN fora das faixas informadas nesse campo, o checkout exibe a mensagem "Confira o número do seu cartão. Não conseguimos confirmar se o número digitado está correto". Se o número estiver correto, o cliente pode clicar em `Sim, o número está correto` para continuar a finalização do pedido.

8. No campo __Código de Pagamento em Adquirente (opcional)__, indique o código para ser enviado e processado pelo adquirente contratado por você.
9. Em __Ativar divisão de pagamento__, defina se, nas vendas que envolvem lojas de marketplace, os valores serão divididos entre os sellers e o marketplace.
10. Clique em `Salvar`.

## Configurar condição de pagamento

Após clicar em `Salvar`, o Admin abre a página de configuração da condição de pagamento.

1. Ative a condição no campo __Status__.
2. Em __Processar com o provedor__, escolha o provedor que vai processar os pagamentos com o cartão de loja (um dos provedores que você cadastrou antes de começar).
3. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
4. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
5. Clique em `Salvar`.

Depois de seguir os passos indicados, o __cartão de loja (co-branded)__ vai aparecer no checkout da sua loja como uma opção de pagamento. Para confirmar, faça uma compra de teste com um cartão da bandeira escolhida na primeira etapa e, se você informou faixas de BIN, com um BIN dentro delas. Se o cartão de loja não aparecer entre as opções de pagamento, verifique se a condição de pagamento está ativa em `Status`.
