---
title: 'Criar Audiência de campanha'
id: 6cnuDZJzIkIeocewAQQK4K
status: PUBLISHED
createdAt: 2018-12-02T18:34:21.663Z
updatedAt: 2025-04-10T17:52:25.441Z
publishedAt: 2025-04-10T17:52:25.441Z
firstPublishedAt: 2018-12-03T16:51:36.457Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slugEN: creating-a-campaign-audience
legacySlug: como-criar-campanhas
locale: pt
subcategoryId: 2cI57eZ3ZiWSeaQs26Gwys
---

O recurso de Audiências de campanha permite segmentar as promoções da sua loja a partir da definição de [públicos-alvo](/pt/tutorial/audiencias-de-campanhas--3o7lhpNseXY2WmjZO0gQ6m#publico-alvo) que atendem a critérios específicos. Para mais informações sobre essa funcionalidade, confira [Audiências de campanhas](/pt/docs/tutorials/audiencias-de-campanhas).

Siga os passos abaixo para criar uma nova audiência de campanha:

1. No Admin VTEX, acesse *Promoções > Audiências de campanhas*, ou digite *Audiências de campanhas* na barra de busca no topo da página..
2. Clique em `Nova Audiência de Campanha`.
3. Preencha os campos dos dados gerais da audiência de campanha, conforme descrito na seção [Dados gerais](#dados-gerais).
4. Em **Público-alvo**, clique em `Criar novo público-alvo`.
5. Preencha os campos descritos na seção [Criar novo público-alvo](#criar-novo-publico-alvo).
6. Clique em `Salvar`.

> ⚠️ Após criar uma audiência de campanha, é preciso associá-la a uma promoção de campanha para ter efeito. Siga os passos indicados no guia [Criar promoção de campanha](/pt/docs/tutorials/promocao-de-campanha).

## Dados gerais

Ao criar uma nova audiência de campanha, em **Quais os dados gerais desta audiência de campanha?**, você precisa inserir as seguintes informações:

* **Status:** estado atual da audiência de campanha.
    * **Ativa:** disponível para uso nas promoções de campanha da sua loja.
    * **Inativa:** indisponível para uso nas promoções de campanha da sua loja.
* **Nome:** nome da audiência de campanha.
* **Descrição:** descrição interna da audiência de campanha.
* **Validade:** período em que a audiência de campanha é válida na loja.
    * **Data Início:** data de início do agendamento da audiência de campanha, a partir da qual a audiência de campanha será válida.
    * **Hora Início:** horário de início do agendamento da audiência de campanha, a partir do qual a audiência de campanha será válida.
    * **Data Fim:** data de fim do agendamento da audiência de campanha, a partir da qual a audiência de campanha será válida.
    * **Hora Fim:** horário de fim do agendamento da audiência de campanha, a partir do qual audiência de campanha será válida.

> ⚠️ Para agendar uma audiência de campanha, você precisa inserir **Data Início** ou **Hora Início** posteriores à data ou horário atual. O fuso horário considerado pelo sistema é o mesmo do dispositivo do usuário que criou a audiência de campanha – não há ajuste em relação a fusos horários diferentes.

## Criar novo público-alvo

A configuração de público-alvo possibilita segmentar os usuários a partir de determinadas condições. Para mais informações sobre público alvo para audiências de campanha, leia [Audiências de campanhas](/pt/docs/tutorials/audiencias-de-campanhas).

Após clicar em `Criar novo público-alvo`, você precisa seguir as instruções abaixo:

1. Preencha os campos referentes ao público-alvo. Confira as seções listadas a seguir para detalhes sobre o significado de cada campo:
    * [Defina seu público-alvo](#defina-seu-publico-alvo): nomear o público-alvo.
    * [Itens a serem usados neste público-alvo](#itens-a-serem-usados-neste-publico-alvo):  restringir os itens que serão associados ao público-alvo.
    * [Condições para seu público-alvo ser aplicado](#condicoes-para-o-publico-alvo-ser-aplicado): preencher os critérios para que os clientes sejam incluídos no público-alvo definido.
2. No final da seção de configuração do público-alvo, clique em `Atualizar`.
    O público criado será listado na seção **Público-alvo**.
    Se quiser editá-lo, clique nele e altere os campos que desejar.
    Caso queira excluí-lo, clique no ícone de lixeira <i class="fas fa-trash-alt"></i>.
3. Se desejar criar mais públicos-alvo para a audiência de campanha, clique novamente em `Criar novo público-alvo` e repita os passos 1 e 2. Caso contrário, prossiga para o passo 4.
4. Se você criar mais de um público-alvo, é preciso escolher qual será a relação entre eles na audiência de campanha:
    * **ou:** a audiência de campanha será composta por clientes que se encaixarem em qualquer um dos públicos-alvo.
    * **e:** a audiência de campanha será composta por clientes que se encaixarem em todos os públicos-alvos, somando seus critérios.

![publico-alvo-e-ou-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/audiência-de-campanhas/criar-audiencia-de-campanha_1.gif)

### Defina seu público-alvo

* **Nome**: nome do público-alvo.

### Itens a serem usados neste público-alvo

* **Categorias, Marcas, Coleções** e **SKUs:** permite incluir ou excluir uma ou mais categorias, marcas, coleções, produtos e SKUs do público-alvo, utilizando os critérios **Iguais a** ou **Diferentes de**.

    Os itens precisam atender a todas condições cadastradas para que o cliente faça parte do público-alvo.

* **Pelo menos _ produtos se enquadram nos critérios acima:** determina quantos itens correspondentes aos critérios definidos precisam estar no carrinho para o cliente fazer parte do público-alvo. Todos os critérios anteriores devem ser **Iguais a** para habilitar esta configuração.

Exemplo: participam do público-alvo os itens cuja marca é __Nike__, conforme ilustrado a seguir. A configuração também indica que pelo menos 3 itens precisam se enquadrar nesses critérios. Portanto, um cliente precisa ter no carrinho pelo menos 3 itens que se encaixam nesse cenário para participar do público-alvo.

![exemplo-marca-publico-alvo-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/promoções-e-taxas/audiência-de-campanhas/criar-audiencia-de-campanha_2.png)

### Condições para seu público-alvo ser aplicado

* **Valor mínimo do pedido:** valor mínimo que o total de itens no carrinho do cliente precisa ter. Este total considera a soma do preço dos produtos no carrinho que atendem aos critérios da audiência de campanha.
* **Valor máximo do pedido:** valor máximo que o total de itens no carrinho do cliente pode ter. Este total considera a soma dos preços dos produtos no carrinho que atendem aos critérios da audiência de campanha.
* **Valor do item entre __ e __:** preço mínimo e máximo que cada item no carrinho pode ter. A audiência de campanha será ativada se o valor do item atender ao intervalo de valores preenchidos.
* **Restrição de Promoção por BIN:** a audiência de campanha será ativada caso o _Bank Identification Number_ (BIN) do cartão de crédito esteja entre os caracteres preenchidos. O BIN corresponde aos 6 ou 8 números iniciais de um cartão e serve para identificar o banco e a bandeira do cartão.
* **Marketing Tags:** campo utilizado para restringir a ativação da audiência de campanha caso a compra seja realizada pelo [módulo de Assinaturas da VTEX](/pt/tutorial/como-funciona-a-assinatura--frequentlyAskedQuestions_4453#).
* **Cluster de clientes:** o cliente fará parte do público-alvo caso esteja cadastrado no cluster selecionado. É importante destacar que o nome do cluster deve ser exatamente como cadastrado, qualquer erro de grafia impedirá o funcionamento correto da configuração.
* **Número máximo de parcelas:** a audiência de campanha será ativada se o número de parcelas selecionado pelo cliente for menor ou igual ao número máximo cadastrado.
* **Apenas na primeira compra:** a audiência de campanha só será ativada caso seja a primeira compra do cliente na sua loja.
* **Aplicar o desconto mesmo se o usuário não estiver logado?: **este campo é disponibilizado quando o campo** Apenas na primeira compra é selecionado**. Se o campo atual for marcado, o cliente fará parte do público-alvo mesmo que não tenha inserido email e senha. Quando o campo for desmarcado, o cliente só fará parte do público-alvo se tiver acessado a loja com email e senha previamente cadastrados.
* **Preço "de" e "por" são iguais** ou **Preço "de" e "por" são diferentes:** diz respeito aos valores do [preço de lista](/pt/tracks/precos-101--6f8pwCns3PJHqMvQSugNfP/3XcXp0r5WrJvogB8KIX4Kx#preco-de-lista) no cadastro do produto. Somente uma das duas opções pode ser selecionada.
* **O CEP de entrega deve Incluir / Excluir de __ até __:** permite incluir ou excluir intervalos de CEPs para envio de pedidos. A audiência de campanha será ativada caso o CEP atenda à regra configurada no público-alvo.
* **Afiliados:** permite selecionar [afiliados](/pt/docs/tutorials/o-que-e-afiliado) a partir de uma lista. A audiência de campanha será ativada se a compra for realizada em um marketplace dos afiliados selecionados.

  > ⚠️ A opção **Afiliados** se aplica somente se o afiliado for uma loja VTEX.
* **Sellers:** permite definir se a campanha deve considerar sellers que sejam iguais ou diferentes dos selecionados, com base nos sellers cadastrados na sua conta.
* **utm_source:** permite selecionar a [utm_source](/pt/docs/tutorials/o-que-sao-utm-source-utm-campaign-e-utm-medium) desejada ou criar uma nova para vincular à audiência de campanha. A audiência de campanha será ativada caso a navegação do cliente seja realizada com a utm_source correspondente a qualquer um dos valores cadastrados. É importante destacar que o cliente pode inserir apenas uma utm_source no checkout.
* **utm_campaign:** permite selecionar a [utm_campaign](/pt/docs/tutorials/o-que-sao-utm-source-utm-campaign-e-utm-medium) desejada ou criar uma nova para vincular à audiência de campanha. O desconto será concedido caso a navegação seja realizada com a utm_campaign com o valor cadastrado.
* **Tipo de frete:** permite selecionar os [tipos de entrega](/pt/docs/tutorials/como-funciona-o-tipo-de-envio) que serão incluídos no público-alvo. Exemplos: normal ou expressa. A audiência de campanha será ativada se um dos tipos de entrega definidos for selecionado pelo cliente ao fechar um pedido.
* **Aplicar o desconto somente quando uma das transportadoras acima for selecionada pelo cliente:** a audiência de campanha será ativada somente após o cliente selecionar a forma de envio do pedido.
* **Meio de pagamento:** permite selecionar os meios de pagamento que serão incluídos no público-alvo. A audiência de campanha será ativada se a forma de pagamento escolhida pelo cliente for a mesma cadastrada. 

  > ⚠️ Audiências de campanhas definidas por **Meio de pagamento** ou** Número máximo de parcelas** não atendem a pedidos pagos com dois cartões ou vale-compras.

## Saiba mais

* [Audiências de campanhas](/pt/docs/tutorials/audiencias-de-campanhas)
* [Criar promoção de campanha](/pt/docs/tutorials/promocao-de-campanha)
* [Lista de Audiências de campanhas](/pt/docs/tutorials/lista-de-audiencias-de-campanhas)
