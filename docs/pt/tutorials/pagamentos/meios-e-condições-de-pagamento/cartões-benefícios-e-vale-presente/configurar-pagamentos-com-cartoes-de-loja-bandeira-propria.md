---
title: 'Configurar pagamentos com cartões de loja (bandeira própria)'
createdAt: 2018-06-28T21:20:09.875Z
updatedAt: 2026-11-27T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: setting-up-private-label-payments
locale: pt
hidden: false
---

Na VTEX, sua loja pode receber pagamentos com __cartão de loja (bandeira própria)__, também chamado de private label. Antes de começar, [cadastre um provedor de pagamento](/pt/docs/tutorials/afiliacoes-de-gateway) capaz de processar esse meio de pagamento. Para saber se um provedor processa cartões de loja de bandeira própria, consulte o tutorial de configuração dele na [Lista de provedores de pagamento por país](/pt/docs/tutorials/lista-de-provedores-de-pagamento-por-pais).

Com o provedor cadastrado, a configuração tem duas etapas:

- [Configurar cartão de loja (bandeira própria)](#configurar-cartao-de-loja-bandeira-propria): criar o pagamento customizado com os dados do cartão.
- [Configurar condição de pagamento](#configurar-condicao-de-pagamento): ativar o cartão como opção de pagamento e escolher o provedor que vai processá-lo.

## Configurar cartão de loja (bandeira própria)

Nesta etapa, você cria o pagamento customizado __cartão de loja (bandeira própria)__. Cada categoria de [pagamento customizado](/pt/docs/tutorials/como-configurar-pagamento-customizado) aceita até 20 configurações, e cada uma é preenchida em um formulário próprio.

1. No Admin VTEX, acesse __Configurações da loja > Pagamentos > Configurações__, ou digite __Configurações__ na barra de busca no topo da página.
2. Na tela principal, acesse a aba __Pagamentos customizados__.
3. Na parte reservada aos __cartões de loja (bandeira própria)__, clique em uma das caixas de configuração.
4. Em __Nome__, preencha o nome do cartão, como "Cartão Minha Loja".
5. Em __Descrição__, escreva o texto que vai dar mais detalhes sobre a condição de pagamento.
6. Em __Intervalos de BIN__, informe os intervalos de BIN usados para validar o cartão, separando o valor mínimo e o máximo de cada intervalo com hífen, como em `100000-999999`. Para adicionar mais intervalos, separe-os com vírgulas, sem espaços.

   > ⚠️ Quando o cliente insere um cartão com BIN fora das faixas informadas nesse campo, o checkout exibe a mensagem "Confira o número do seu cartão. Não conseguimos confirmar se o número digitado está correto". Se o número estiver correto, o cliente pode clicar em `Sim, o número está correto` para continuar a finalização do pedido.

7. Em __Código de pagamento do adquirente (Opcional)__, indique o código para ser enviado e processado pelo adquirente contratado por você.
8. Em __Usar nome do titular do cartão__, escolha __Sim__ se o cliente não precisar preencher o nome do titular do cartão no momento da compra.
9. Em __Quantidade de dígitos do CVV__, escolha quantos dígitos do CVV o cliente precisa preencher no momento da compra (no Brasil, o mais comum são códigos com 3 dígitos). Você também pode escolher não pedir essa informação.
10. Em __Usar data de validade do cartão?__, defina se o cliente vai precisar preencher a data de validade do cartão no momento da compra (o formato de preenchimento é MM/AA).
11. Em __Usar endereço de cobrança?__, defina se o cliente vai precisar preencher um endereço de cobrança no momento da compra.
12. Em __Máscara do cartão__, use o número 9 e espaços para representar os 16 dígitos do cartão no momento da compra, como em `9999 9999 9999 9999`.
13. Em __Validade do pagamento__, informe o período máximo (quantidade de dias) que o pagamento pode ser efetuado. Após este tempo, em caso de não pagamento, o pedido será cancelado.
14. Em __Autorizar automaticamente__, defina se deseja autorizar os pagamentos de forma automática. Essa opção só se aplica quando o integrador é Default.
15. Em __Ativar divisão de pagamento__, informe se deseja usar o [split de pagamento](/pt/docs/tutorials/split-de-pagamento). Se o provedor oferecer suporte a essa função e você ativá-la, os recebíveis do cartão de loja serão divididos entre os sellers e o marketplace quando a venda envolver lojas do marketplace.
16. Clique em `Salvar`.

## Configurar condição de pagamento

Após clicar em `Salvar`, o Admin abre a página de configuração da condição de pagamento.

1. Ative a condição no campo __Status__.
2. Em __Processar com o provedor__, escolha o provedor que vai processar os pagamentos com o cartão de loja (um dos provedores que você cadastrou antes de começar).
3. Se desejar utilizar um sistema antifraude, selecione a opção __Usar solução antifraude__.
4. Se desejar, você também pode configurar [condições especiais de pagamento](/pt/docs/tutorials/condicoes-especiais).
5. Clique em `Salvar`.

Depois de seguir os passos indicados, o __cartão de loja (bandeira própria)__ vai aparecer no checkout da sua loja como uma opção de pagamento. Para confirmar, faça uma compra de teste com um cartão cujo BIN esteja dentro dos intervalos que você informou na primeira etapa. Se o cartão de loja não aparecer entre as opções de pagamento, verifique se a condição de pagamento está ativa em `Status`. Quando o BIN do cartão está fora desses intervalos, o checkout exibe um aviso ao cliente, mas não bloqueia o cartão.
