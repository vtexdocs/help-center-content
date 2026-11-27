---
title: 'Configurar vale-presente'
createdAt: 2017-04-27T21:57:54.816Z
updatedAt: 2026-11-19T00:00:00.000Z
contentType: tutorial
productTeam: Financial
slugEN: gift-card
locale: pt
hidden: false
---

O gift card ou vale-presente é um dos recursos do módulo de Pagamentos e pode funcionar de duas formas:

- Meio de pagamento para compras
- Programa de fidelidade que o lojista pode conectar com o sistema VTEX

Este artigo trata do uso como meio de pagamento. Para usar o vale-presente como programa de fidelidade, consulte [Como integrar um provedor de Gift Card externo à VTEX](/pt/docs/tutorials/como-integrar-um-provedor-de-gift-card-externo-a-vtex).

## Como configurar o vale-presente como meio de pagamento

Para que seus clientes possam usar vales-presente no checkout, a loja precisa ter um provedor de gift card, como o GiftCard HUB, e uma condição de pagamento **Vale** configurados. Por isso, recomendamos concluir esta configuração antes de criar os vales:

1. No Admin VTEX, acesse **Configurações da loja > Pagamentos > Provedores**, ou digite **Provedores** na barra de busca no topo da página.
2. Na tela de provedores, clique no botão `Novo provedor`.
3. Digite o nome **GiftCard HUB** na barra de busca e clique sobre o nome do provedor.
4. Em **Tipo de estorno** e **Liquidação antecipada**, selecione as opções desejadas.
5. Clique em `Salvar`.
6. Acesse **Configurações da loja > Pagamentos > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
7. Na aba **Condições de pagamento**, clique no botão `+`.
8. Clique no conector **Vale**.
9. No topo da página, crie um **nome** para essa condição de pagamento.
10. Ative a condição no campo **Status**.
11. Em **Processar com o provedor**, selecione o provedor de giftcard desejado.
12. (Opcional) Para usar um sistema antifraude, selecione a opção **Usar solução antifraude**.
13. (Opcional) [Configure condições especiais de pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais).
14. Clique em `Salvar`.

Depois de criar um vale-presente, você pode confirmar que a condição de pagamento funciona fazendo um pedido de teste na loja e inserindo o código do vale no checkout.

## Como criar o vale-presente pelo Admin

Cada vale-presente tem um valor nominal que o cliente pode usar no ato da compra para abater parte do valor de um pedido. Além do Admin, você pode criar vales-presente nativos da VTEX via API, conforme o guia [Managing VTEX gift cards](https://developers.vtex.com/docs/guides/managing-vtex-gift-cards). Nesse caso, o vale é criado sem saldo, que pode ser adicionado depois por uma transação de crédito na API ou pelo Admin.

Para criar um novo vale-presente pelo Admin, confira o passo a passo:

1. No Admin VTEX, acesse **Promoções > Vales-presente**, ou digite **Vales-presente** na barra de busca no topo da página.
2. Clique em `Criar vale`.
3. Preencha os campos do vale. Sem os campos obrigatórios, o vale-presente não é salvo.
   - **Vale-presente**: preenchido automaticamente pelo sistema VTEX com o código ID do novo vale. É esse código que o cliente insere no checkout para aplicar o vale-presente ao carrinho e reduzir o valor de pagamento do pedido.
   - **Valor** (obrigatório): valor nominal que será concedido para o uso do vale.
   - **Código da moeda**: moeda na qual o vale será criado. As opções disponíveis para seleção são apresentadas de acordo com as políticas comerciais de cada loja.
   - **Data de expiração** (obrigatório): trata-se da data de vigência da utilização do vale.
   - **CPF/CNPJ Cliente**: dado que identifica o cliente a quem o vale se destina.
   - **Coleção**: indisponível no momento. Esse campo deveria limitar o vale aos produtos de uma coleção, mas a restrição não é aplicada no checkout, conforme o known issue [Collection functionality doesn't work on Giftcard](https://help.vtex.com/pt/known-issues/collection-functionality-doesnt-work-on-giftcard).
4. (Opcional) Assinale as opções de configuração desejadas:
   - **Restrito**: somente o cliente do CPF ou CNPJ informado no campo **CPF/CNPJ Cliente** poderá utilizar este vale.
   - **Recarregável**: enquanto esse vale estiver disponível, seu saldo poderá ser alterado.
   - **Reutilizável**: será possível realizar novas compras com este vale até que seu valor seja totalmente utilizado.
5. Clique em `Salvar`.

## Como criar um lote de vales-presente pelo Admin

Para criar mais de um vale-presente ao mesmo tempo (um lote), confira o passo a passo:

1. No Admin VTEX, acesse **Promoções > Vales-presente**, ou digite **Vales-presente** na barra de busca no topo da página.
2. Clique em `Criar vales em massa`.
3. Preencha os campos do lote. Sem os campos obrigatórios, os vales-presente não são salvos.
   - **Quantidade de vales-presente** (obrigatório): número de vales que você deseja criar no lote, com máximo de 500 vales por lote.
   - **Valor** (obrigatório): valor nominal que será concedido para todos os vales do lote.
   - **Código da moeda**: moeda na qual os vales serão criados em lote. As opções disponíveis para seleção são apresentadas de acordo com as políticas comerciais de cada loja.
   - **Data de expiração** (obrigatório): trata-se da data de vigência da utilização de todos os vales do lote.
   - **Coleção**: indisponível no momento, pelo mesmo motivo descrito no campo **Coleção** em [Como criar o vale-presente pelo Admin](#como-criar-o-vale-presente-pelo-admin).
4. (Opcional) Assinale as opções de configuração desejadas:
   - **Recarregável**: enquanto estes vales estiverem disponíveis, seus saldos poderão ser alterados.
   - **Reutilizável**: será possível realizar novas compras com estes vales até que seus valores sejam totalmente utilizados.
5. Clique em `Salvar`. Uma nova tela confirma o número de vales-presente gerados e apresenta os respectivos códigos de identificação.
6. Clique em `Voltar`.

> ℹ️ Não há limite para a criação de vales, porém apenas 8000 vales podem ser exportados por vez.

## Como gerenciar o vale

Depois de criar o vale, você pode gerenciá-lo pelo Admin das seguintes formas:

- Adicionar ou remover valor, desde que o vale seja **Recarregável**
- Visualizar o extrato
- Conferir em qual compra o vale foi utilizado
- Cancelar um vale

Via API, também é possível consultar os dados do vale, adicionar ou remover saldo e cancelar transações, conforme o guia [Managing VTEX gift cards](https://developers.vtex.com/docs/guides/managing-vtex-gift-cards).
