---
title: 'Configuração da regra de Divergência de valores'
id: awAKP0sS5J8jgLs2g7pPe
status: PUBLISHED
createdAt: 2021-12-03T01:24:41.194Z
updatedAt: 2024-08-13T20:39:38.157Z
publishedAt: 2024-08-13T20:39:38.157Z
firstPublishedAt: 2021-12-03T01:31:08.666Z
contentType: tutorial
productTeam: Channels
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: configuring-price-divergence-rule
legacySlug: configuracao-da-regra-de-divergencia-de-valores
locale: pt
subcategoryId: 1qvm3kIrt6KA6IeGc4EQ6k
---

Quando o preço definido por um seller é diferente do preço oferecido pelo marketplace, pedidos realizados em marketplaces podem não ser processados corretamente. Na VTEX, o fluxo de Autorização de pedidos permite o controle e a aprovação automática desses pedidos, a partir da configuração de uma [regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW). Este artigo explica como o seller pode criar e editar uma regra de Divergência de valores, e autorizar pedidos manualmente.

Quando nenhuma regra de Divergência de preços for criada, a plataforma VTEX terá um comportamento específico para cada uma das situações abaixo:

- **Pedidos criados pela interface de Marketplace:** Serão negados automaticamente.
- **Pedidos criados via API:** Serão negados automaticamente, caso o campo `isCreatedAsync` não seja enviado.
- **Pedidos com Divergência de preço relacionado a descontos manuais:** Serão aprovados automaticamente.

Para utilizar o fluxo de Autorização de pedidos, em casos de divergência de preços é necessário enviar o campo `isCreatedAsync`  na API de [Place Fulfillment order](https://developers.vtex.com/docs/api-reference/marketplace-protocol-external-marketplace-orders#post-/api/fulfillment/pvt/orders) , independentemente do tipo de conector utilizado. Esse cenário é válido para marketplaces VTEX, marketplaces externos, [conectores certificados](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-certificado-parceiro) (parceiros), ou [conectores nativos](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402#integrado-a-conector-nativo-vtex)

Quando um seller está integrado a um conector nativo, como o Mercado Livre ou a B2W, mas não configurou uma regra de Divergência de valores, pedidos com erro por diferença de preço ficam pendentes até a criação da regra. É possível acompanhá-los no seu Admin VTEX, em **MARKETPLACE > Conexões > Pedidos**.

É aconselhável que o seller crie a regra de Divergência de valores antes de configurar a integração com um conector nativo. Descumprir essa recomendação não impede que a integração seja concluída, no entanto, pedidos com divergência de valores ficam represados até a criação da regra de Divergência de valores.

## Criar regra de Divergência de valores

A [regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW) é composta de uma ou múltiplas regras de autorização de pedidos, que correspondem a intervalos entre 0% a 100% do preço do pedido. A configuração é feita de forma que cada intervalo é associado a uma ação automática de processamento.

> ℹ️ Para criar uma regra de Divergência de valores, o usuário precisa ter o [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) de Admin Super (Owner) ou OMS Full. Garanta a segurança na gestão das suas operações e confira as [melhores práticas de segurança para gestão de usuários](https://help.vtex.com/pt/faq/metodos-de-seguranca-para-criacao-de-perfis-de-usuarios-em-uma-loja--15YDwC9jGgqWi3rvcDaiGM).

Para criar uma regra de Divergência de valores, siga os passos abaixo:

1. No Admin VTEX, acesse **Configurações da loja > Pedidos > Autorização de pedidos**, ou digite *Autorização de pedidos* na barra de busca no topo da página.
2. Na seção _Divergência de valores_, clique em `CRIAR REGRAS`.
3. Na nova página, clique em `CRIAR REGRAS`.

Você verá a seguinte tela:

![print_01_PT](//images.ctfassets.net/alneenqid6w5/6lp2IKdU8VvaFgOUhHv5GA/97a35d8b97cc9bd3a9ccd7c9db67b87a/print_01_PT.png)

A aba **Todas** apresenta todas as regras de autorização configuradas.

Para criar a 1ª regra de autorização, clique em **CRIAR REGRAS**. A partir disso, será possível identificar uma nova aba, chamada **1ª regra**. Clique sobre ela e opções de configuração vão aparecer.

![print_02_PT](//images.ctfassets.net/alneenqid6w5/Q8TwzIWNwQPg13tcaALd6/a8a96047fce4c061362d5a22ada0d2c0/print_02_PT.png)

Para configurar a **1ª regra**, você pode aumentar ou diminuir o percentual de divergência, arrastando as extremidades da barra, sendo o sinal > para definir o início do intervalo, e < para determinar até onde ele vai. O intervalo percentual escolhido pode variar de 0% a 100%.

Se você criar uma única regra de autorização e ela for inferior a 100%, um pedido com variação de preço fora do limite configurado não será integrado.

Uma vez definido o intervalo da regra de autorização, selecione uma das seguintes opções para caracterizá-la:

- **Autorizar automaticamente:** pedidos com diferença de preço até a porcentagem definida são integrados de forma automática.
- **Negar automaticamente:** pedidos com diferença de preço até a porcentagem definida são automaticamente recusados, e não são integrados.
- **Criar uma tarefa no VTEX DO para aprovação:** para o intervalo configurado, o pedido é integrado, mas fica pendente, aguardando a autorização de um usuário habilitado. No campo **Pessoas autorizadas**, é necessário inserir o(s) email(s) de usuários que podem [autorizar manualmente esses pedidos](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedidos-manualmente).

Para configurar uma hierarquia de usuários responsáveis por aprovações de pedidos, é preciso inserir mais de um email e escolher a ordenação dos usuários cadastrados. É possível alterar esses usuários a qualquer momento, ao editar a regra de autorização de pedidos. Vale ressaltar que somente um usuário com [perfil de acesso](https://help.vtex.com/pt/tutorial/perfis-de-acesso--7HKK5Uau2H6wxE1rH5oRbc) Admin Super (_Owner_) ou OMS Full pode editar a regra.

Para criar a **2ª regra**, clique no <i class="fas fa-plus" aria-hidden="true"></i> sinal de adição. Esse mesmo procedimento vale para criar uma terceira ou quarta regra, e assim por diante. Após clicar no ícone, aparece a seguinte interface:

![print_03_PT](//images.ctfassets.net/alneenqid6w5/6Yxvh93ja2V69Yywn3CyWt/15b1a362d2184c3e8a09f65796ea9db2/print_03_PT.png)

Configure a nova regra de autorização e, após definir todas as regras desejadas, clique no botão **SALVAR REGRAS**. Você verá a seguinte mensagem: _Após salvar, você ainda poderá editá-las ou excluí-las quando quiser_. Clique em **OK** para  confirmar. Feito isso, você terá concluído a criação da regra de Divergência de valores.

> ⚠️ Uma vez que você configure a regra de Divergência de valores, ela passa a valer para todos os marketplaces nos quais você seja seller.

## Editar regra de Divergência de valores

A edição da regra de Divergência de valores pode ser feita a qualquer momento. Para isso, acesse o Admin VTEX, em **Configurações da loja > Pedidos > Autorização de pedidos > Divergência de valores**, e clique em **EDITAR REGRAS**.

Na página de edição de regras, existe a opção de deletar a regra de Divergência de valores, clicando em **EXCLUIR REGRAS**. Isso faz com que todas as regras de autorização configuradas sejam permanentemente deletadas.

> ℹ️ Caso você exclua a regra de Divergência de valores, essa ação não pode ser desfeita. Para voltar a valer, será necessário configurá-la novamente. Isso se aplica também às regras de autorização que compõem a regra de Divergência de valores.

Na mesma página, na aba **Todas**, é possível identificar a lista de todas as regras de autorização de pedidos criadas. Para excluir uma regra de autorização, você pode clicar no botão **EXCLUIR REGRA** ao lado da regra que deseja deletar.

Se quiser editar uma regra de autorização, clique na aba correspondente à regra que você deseja alterar. O processo para editar uma regra é o mesmo da etapa de [criação da regra de Divergência de valores](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#criar-regra-de-divergencia-de-valores).

Uma vez concluídas as alterações desejadas, clique no botão **SALVAR REGRAS** e, em seguida, clique em **OK** para confirmar.

## Autorizar pedidos manualmente

Quando uma regra de autorização de pedido é configurada para _Criar uma tarefa no VTEX DO para aprovação_, isso significa que ao menos um usuário foi designado para autorizar manualmente o pedido. O [gerenciamento de pedidos com Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW#gerenciamento-de-pedidos-com-divergencia-de-valores) é similar ao de outros canais de venda, como loja física ou ecommerce.

> ⚠️ É importante acompanhar regularmente os pedidos pelo módulo **Pedidos**, em **Pedidos > Todos os pedidos**. Caso exijam aprovação manual, os pedidos com erro de divergência de valores permanecem pendentes, aguardando a autorização de um usuário habilitado, definido na criação da regra de autorização. Uma boa prática é ter ao menos dois usuários habilitados a autorizar a aprovação manual.

Existem duas maneiras de um usuário habilitado autorizar manualmente um pedido com divergência de preço:

- [Autorizar pedido pelo OMS](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedido-pelo-gerenciamento-de-pedidos)
- [Autorizar pedido pelo VTEX DO](https://help.vtex.com/pt/tutorial/configuracao-da-regra-de-divergencia-de-valores--awAKP0sS5J8jgLs2g7pPe#autorizar-pedido-pelo-vtex-do)

### Autorizar pedido pelo módulo Pedidos

Esta forma de aprovação é feita na página [Todos os pedidos](https://help.vtex.com/pt/tutorial/lista-de-pedidos-interface--2QTduKHAJMFIZ3BAsi6Pi). Para realizá-la, siga os passos abaixo:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. Clique no pedido com status `Aguardando autorização manual`.
3. Clique em `Confirmar pedido`.

### Autorizar pedido pelo VTEX DO

O VTEX DO é um gerenciador das tarefas produzidas pelos módulos da plataforma VTEX. Ele permite que usuários habilitados realizem manualmente tarefas como autorizar ou cancelar pedidos, entre outras. Saiba mais no artigo [VTEX DO](https://help.vtex.com/pt/tutorial/vtex-do--tutorials_203).

Para autorizar um pedido com Divergência de valores pelo VTEX DO, realize os seguintes passos:

1. No Admin VTEX, acesse **Pedidos > Todos os pedidos**, ou digite **Todos os pedidos** na barra de busca no topo da página.
2. No canto inferior direito da tela, clique sobre o componente do VTEX DO.
3. Clique sobre o pedido com autorização pendente.
4. Clique em `Fechar`.
5. A seguir, clique na opção `Authorize`.

### Saiba mais

- [Regra de Divergência de valores](https://help.vtex.com/pt/tutorial/regra-de-divergencia-de-valores--6RlFLhD1rIRRshl83KnCjW)
- [Todos os pedidos](https://help.vtex.com/pt/tutorial/todos-os-pedidos--2QTduKHAJMFIZ3BAsi6Pi)
- [Estratégias de marketplace na VTEX](https://help.vtex.com/pt/tutorial/estrategias-de-marketplace-na-vtex--tutorials_402)

