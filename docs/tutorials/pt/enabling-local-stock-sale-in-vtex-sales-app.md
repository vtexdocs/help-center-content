---
title: 'Habilitar Venda de estoque local do VTEX Sales App'
id: 54eQN4rOH5yBYPGG2w8v9q
status: PUBLISHED
createdAt: 2023-05-19T17:30:02.393Z
updatedAt: 2023-05-30T15:49:36.187Z
publishedAt: 2023-05-30T15:49:36.187Z
firstPublishedAt: 2023-05-22T23:31:37.597Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slug: habilitar-venda-de-estoque-local-do-vtex-sales-app
locale: pt
legacySlug: habilitar-venda-em-maos-do-vtex-sales-app
subcategory: 4T6qfa6gNO6g4sAUIa6s2G
---

A Venda de estoque local permite o vendedor de uma loja física realizar vendas a partir do aplicativo VTEX Sales App utilizando um smartphone ou um tablet, sem a necessidade de realizar o checkout em um caixa. Para habilitar a Venda de estoque local na sua loja, é necessário configurar as seguintes etapas:

1. [Criar uma conta franquia](#criar-uma-conta-franquia)
2. [Criar um seller](#criar-um-seller)
3. [Configurar o ponto de retirada](#configurar-o-ponto-de-retirada)
4. [Criar estoque](#criar-estoque)
5. [Atualizar inventário](#atualizar-inventario)
6. [Conectar conta franquia a loja física](#conectar-conta-franquia-a-loja-fisica)
7. [Integração de ponto de venda](#integracao-de-ponto-de-venda)

>ℹ️ A Venda de estoque local só pode ser configurada em lojas que já utilizam o VTEX Sales App. Saiba como contratar e configurar na nossa track [VTEX Sales App - Primeiros passos e configurações](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc).

## Criar uma conta franquia

O primeiro passo é [solicitar a criação de uma conta franquia](https://help.vtex.com/pt/tracks/instore-primeiros-passos-e-configuracoes--zav76TFEZlAjnyBVL5tRc/eujH0id9Y4WJjjmdazUKd) para a sua loja física. A [conta franquia](https://help.vtex.com/pt/tutorial/o-que-e-conta-franquia--kWQC6RkFSCUFGgY5gSjdl) será associada à conta principal da sua loja e herdará o catálogo dela. Caso você já tenha uma conta franquia, passe para a próxima etapa.

## Criar um seller

Após criar uma conta franquia, é necessário [criar um seller](https://help.vtex.com/pt/tutorial/adicionar-seller--tutorials_392) para que ele represente a loja física na conta principal associada à conta franquia. Para verificar se sua loja já utiliza a retirada em loja ou sellers para representar suas lojas físicas, acesse a página [Gerenciamento de Sellers](https://help.vtex.com/pt/tutorial/gerenciamento-de-sellers--6eEiOISwxuAWJ8w6MtK7iv) em seu Admin VTEX e busque pelo nome da loja física. 

## Configurar o ponto de retirada

Após a criação da conta franquia, é preciso cadastrar o seu endereço de loja física como um [ponto de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R) disponível. Para isso, siga o passo a passo descrito no artigo [Como configurar pontos de retirada](https://help.vtex.com/pt/tutorial/pontos-de-retirada--2fljn6wLjn8M4lJHA6HP3R#como-configurar-pontos-de-retirada).

O ponto de retirada criado receberá um ID e ele será necessário na etapa [Criar estoque](#criar-estoque). Caso você perca essa identificação, você pode visualizá-lo na tela **Pontos de retirada** do seu Admin VTEX, na coluna **ID**.

## Criar estoque

Com o ponto de retirada cadastrado, é preciso informar o [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) disponível para a sua loja física em cada seller. Você pode compartilhar um estoque existente no seu ecommerce com a operação do físico, ou criar um estoque exclusivo para o uso das vendas das lojas físicas. Para habilitar que um estoque esteja disponível para o VTEX Sales App, siga os passos a seguir:

1. No Admin VTEX, acesse **Envio > Estratégias de Envio **> **Estoques**, ou digite **Estratégias de Envio** na barra de busca no topo da página.
2. Clique em `+ Criar Estoque`. 
3. Preencha os [campos do formulário](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137#campos-de-cadastro), selecionando o ponto de retirada criado no passo anterior.
4. Marque  <i class="fas fa-toggle-on"></i> para `Ativo` para vincular o estoque da loja física com o VTEX Sales App. 
5. Clique em `Salvar`.

## Atualizar inventário

Após habilitar o estoque e o ponto de retirada, é uma boa prática verificar os itens disponíveis no [inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139) e atualizá-lo. É possível verificar o inventário da sua loja de duas formas:

* **Manualmente**: pela página **[Gerenciamento de inventário](https://help.vtex.com/pt/tutorial/gerenciar-itens-em-estoque--tutorials_139)** no Admin VTEX da conta franquia.
* **Integração ERP**: pela [integração via ERP](https://developers.vtex.com/docs/guides/erp-integration-guide), adicionando as contas franquias em sua integração para que o [estoque seja atualizado automaticamente](https://developers.vtex.com/docs/guides/erp-integration-import-inventory#update-sku-inventory) pelo ERP.

Caso todos os seus produtos estejam listados sem quantidade, será necessário adicionar manualmente ou via API valores que você tem no inventário desta loja. 

Você pode [habilitar venda de item sem estoque](#habilitar-venda-de-item-sem-estoque-opcional), caso você queira garantir que o item em mãos estará sempre disponível para o cliente em loja. 

>ℹ️ Caso você tenha criado dois estoques diferentes - um para o ecommerce e outro para o VTEX Sales App -, fique atento para gerenciar corretamente a quantidade de peças para cada um dos estoques.

## Conectar conta franquia a loja física

Para garantir que os vendedores da sua loja física tenham acesso correto ao estoque da loja em que trabalham, é importante conectar a conta franquia ao perfil dos vendedores. Para fazer isso, crie um [registro de loja física](https://help.vtex.com/pt/tutorial/loja-fisica-instore-beta--N4M9njT9xomdWD7mQyPt7) no VTEX Sales App.

Para isso, escolha um vendedor cadastrado na loja em que deseja testar a Venda em Mãos e siga os passos descritos abaixo. 

1. Com [o registro do vendedor escolhido](https://help.vtex.com/pt/tutorial/vendedores-instore-beta--4rzit1pzp28km4HSDEdrEC), acesse a aplicação do VTEX Sales App e faça o login.
![instore-login-pt](https://images.ctfassets.net/alneenqid6w5/5vKzjuYAYKGIVZz5aOyuPV/9049d57cf49ca1e753b69896ea5f348f/image.png)
2. Busque por um item que existe no estoque da conta franquia cadastrado. Este item deverá estar exibindo a quantidade disponível correspondente ao inventário do seller.
![instore-pdp-pt](https://images.ctfassets.net/alneenqid6w5/7CtYO9vUzaunI2qO8onP7B/861791e5b4f8f2304ae1a5a7ae577ad8/image.png)

>ℹ️ Caso você tenha habilitado estoque infinito, o número exibido será uma quantidade acima de 1 milhão de itens e não será alterado ao realizar uma venda.

### Habilitar venda de item sem estoque (opcional)

Você também pode configurar para que a Vendas em Mãos ignore a quantidade do estoque forçando a disponibilidade do item, não precisando assim habilitar o estoque infinito. Para isso é preciso:

1. Acesse as configurações técnicas do VTEX Sales App pela URL abaixo, substituindo `conta_principal` pelo nome da conta principal da sua loja no Admin VTEX: 
```https://{conta_principal}.myvtex.com/admin/portal/#/sites```
2. Clique no botão <i class="fas fa-cog"></i> engrenagem para editar. 
3. Selecione a aba **Código**.
4. Selecione na aba lateral o arquivo `checkout-instore-custom-js`.
![instore-custom-js-pt](https://images.ctfassets.net/alneenqid6w5/5a70caO8nFFF25CrSXPXkx/6521818abb09e4178491f4598f33c9a0/image.png)
5. Na chave `window.INSTORE_CONFIG`, adicione a flag `sellWithoutStockInHands: true`.
![sellWithoutStockInHands-pt](https://images.ctfassets.net/alneenqid6w5/3yfRFSG0QgIwnXvyxwhsLo/14bef6c0a1cbdc5d216b17a49c438c76/image.png)
6. Clique em <i class="fas fa-save"></i> `Salvar`. 

### Habilitar venda de carrinhos mistos (opcional)

A venda de carrinhos mistos é uma venda que contém itens que o cliente vai retirar da loja na hora da compra e itens que serão entregues na casa do cliente. Essa funcionalidade é configurada por padrão nas lojas VTEX. Para saber mais sobre a funcionalidade, leia nosso artigo [Divisão de pedidos e divisão de entregas](https://help.vtex.com/pt/tutorial/divisao-de-pedidos-e-divisao-de-entregas--jQvzA6QgSd51e2p6bthoV).

## Integração de ponto de venda

Por fim, para encerrar uma venda em mãos é preciso que um comprovante fiscal seja emitido. O vendedor também pode querer atualizar o inventário local do seu ponto de venda com as informações desta venda. Para resolver esses pontos será necessário realizar uma integração com seu ponto de venda, para isso você pode utilizar nosso artigo [Integração da Venda de estoque local](https://developers.vtex.com/docs/guides/integration-vtex-sales-app-local-stock-sale).

