---
title: 'Configurar Vale-presente'
id: tutorials_995
status: PUBLISHED
createdAt: 2017-04-27T21:57:54.816Z
updatedAt: 2024-10-22T19:25:17.816Z
publishedAt: 2024-10-22T19:25:17.816Z
firstPublishedAt: 2017-04-27T23:03:42.674Z
contentType: tutorial
productTeam: Financial
author: authors_84
slugEN: gift-card
legacySlug: gift-card
locale: pt
subcategoryId: 3qWeS7abxCyC0G0GMq42gA
---

O gift card ou vale-presente é um dos recursos do módulo de Pagamentos que pode funcionar de duas formas:

- Meio de pagamento para compras;
- Programa de fidelidade que o lojista pode conectar com o sistema VTEX.

Para saber mais detalhes sobre a segunda opção de uso, verifique nossa documentação técnica sobre [como integrar com o gift card](/pt/tutorial/integrando-com-gift-card).

## Como criar o Vale-presente pelo Admin

Por padrão VTEX, o vale-presente é considerado como uma forma de pagamento. Esse produto conta com um valor nominal que pode ser utilizado no ato da compra para abater parte do valor de um pedido.

Para criar um novo vale-presente, confira o passo a passo:

1. No Admin VTEX, acesse **Promoções > Vales-presente**, ou digite **Vales-presente** na barra de busca no topo da página.
2. Clique no botão azul **Criar vale**.

> ℹ️ Na tela de criação do vale, o campo **Vale-presente** é automaticamente preenchido pelo sistema VTEX com o código ID do novo vale. Esse é o código a ser inserido pelo cliente na tela do checkout para aplicar o vale-presente no carrinho e reduzir o valor de pagamento do pedido.

3. Preencha os demais campos apresentados conforme as orientações abaixo:
   - **Valor**: valor nominal que será concedido para o uso do vale.
   - **Código da moeda**: moeda na qual o vale será criado. As opções disponíveis para seleção são apresentadas de acordo com as políticas comerciais de cada loja.
   - **Data de expiração**: trata-se da data de vigência da utilização do vale.
   - **CPF/CNPJ Cliente**: dado que identifica e define o vale para um específico cliente.
   - **Coleção**: determina a coleção de produtos que define os itens em que o vale poderá ser aplicado.

> ⚠️ **Atenção**: o preenchimento dos campos “Valor” e “Data de expiração” é **obrigatório**. Caso o contrário, o vale-presente não será salvo.

> ❗ A funcionalidade de criação de vales-presente limitados por coleções de produtos não está funcionando. Mais informações sobre este problema podem ser encontrados no artigo [Collection functionality doesn't work on Giftcard](https://help.vtex.com/pt/known-issues/collection-functionality-doesnt-work-on-giftcard).

Depois de preencher os campos corretamente, o usuário poderá assinalar até três opções de configuração:
   - **Restrito**: somente o cliente referente ao CPF ou CNPJ informado acima poderá utilizar este vale.
   - **Recarregável**: enquanto esse vale estiver disponível, seu saldo poderá ser alterado.
   - **Reutilizável**: será possível realizar novas compras com este vale até que seu valor seja totalmente utilizado.

4. Por fim, clique no botão **Salvar**.

> ℹ️ Não há limite para a criação de vales, porém apenas 8000 vales podem ser exportados por vez.

## Como criar um lote de Vales-presente pelo Admin

Para criar mais de um vale-presente ao mesmo tempo (um lote), confira o passo a passo:

1. No Admin VTEX, acesse **Promoções > Vales-presente**, ou digite **Vales-presente** na barra de busca no topo da página.
2. Clique no botão azul **Criar vales em massa**.
3. Preencha os campos apresentados conforme as orientações abaixo:
   - **Quantidade de vales-presente**: este é o número de vales que você deseja criar em um mesmo lote. Um número máximo de 500 (quinhentos) vales podem ser criados por lote.
   - **Valor**: valor nominal que será concedido para todos os vales do lote.
   - **Código da moeda**: moeda na qual os vales serão criados em lote. As opções disponíveis para seleção são apresentadas de acordo com as políticas comerciais de cada loja.
   - **Data de expiração**: trata-se da data de vigência da utilização de todos os vales do lote.
   - **Coleção**: determina a coleção de produtos que define os itens em que os vales poderão ser aplicados.

> ⚠️ **Atenção**: o preenchimento dos campos “Quantidade de vales-presente”, “Valor” e “Data de Validade” é **obrigatório**. Caso o contrário, os vales-presente não serão salvos.

> ❗ A funcionalidade de criação de vales-presente limitados por coleções de produtos não está funcionando. Mais informações sobre este problema podem ser encontrados no artigo [Collection functionality doesn't work on Giftcard](https://help.vtex.com/pt/known-issues/collection-functionality-doesnt-work-on-giftcard).

   - **Recarregável**: enquanto estes vales estiverem disponíveis, seus saldos poderão ser alterados.
   -  **Reutilizável**: será possível realizar novas compras com estes vales até que seus valores sejam totalmente utilizados.

4. Clique no botão **Salvar**.

Uma nova tela irá aparecer confirmando que foram gerados o número de vales-presentes solicitados e os respectivos códigos de identificação serão apresentados.

5. Por fim, clique no botão **Voltar**.

> ℹ️ Não há limite para a criação de vales, porém apenas 8000 vales podem ser exportados por vez.


## Como configurar o Vale-presente como meio de pagamento

Após a criação do vale-presente, é necessário configurá-lo como meio de pagamento. Desta forma, seus clientes poderão utilizá-lo no Checkout.

Siga os passos abaixo para configurar o vale-presente:

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
12. Se desejar utilizar um sistema antifraude, selecione a opção **Usar solução antifraude**.
13. Se desejar, você também pode [configurar condições especiais de pagamento](https://help.vtex.com/pt/docs/tutorials/condicoes-especiais).
14. Clique em `Salvar`.

## Como gerenciar o vale

Uma vez que o vale for criado, é possível gerenciá-lo de algumas formas pelo Admin. Desse modo, o usuário pode:

- Adicionar ou remover valor, desde que o vale seja "Recarregável";
- Visualizar o extrato;
- Conferir em qual compra o vale foi utilizado;
- Cancelar um vale.
