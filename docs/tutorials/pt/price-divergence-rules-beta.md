---
title: 'Regra de divergência de valores (Beta)'
id: 3CKxNtngadl7WA9fRDDhsl
status: DRAFT
createdAt: 2021-07-16T20:31:14.633Z
updatedAt: 2021-12-25T20:50:19.890Z
publishedAt: 
firstPublishedAt: 2021-07-19T15:29:43.169Z
contentType: tutorial
productTeam: Channels
author: 46G4yHIZerH7B9Jo0Iw5KI
slug: regra-em-divergencias-de-preco-para-sellers
locale: pt
legacySlug: regra-de-alcada-em-divergencias-de-preco-para-sellers
subcategory: 4ZBiXqnPntLbsijZ0djFcD
---

>ℹ️ Essa funcionalidade está em fase Beta, o que significa que estamos trabalhando para aprimorá-la. Em caso de dúvidas, entre em contato com <a href = "https://support.vtex.com/hc/pt-br/requests">nosso Suporte</a>.

Integrações entre sellers VTEX e [conectores nativos](https://help.vtex.com/pt/tutorial/integrando-com-marketplace--tutorials_402#integrado-a-conector-nativo-vtex) podem apresentar divergências nos preços configurados na VTEX e o que aparece na vitrine do marketplace, o que pode gerar erros no OMS.

Os pedidos que apresentam erros por divergência de preço maior que os valores configurados na integração, não sobem automaticamente no OMS. Isso faz com que os pedidos permaneçam com status de erro na seção de `Pedidos` no módulo *INTEGRAÇÕES* do Admin.

Os pedidos apresentam um status de erro no módulo de *INTEGRAÇÕES* e ficam aguardando serem reprocessados manualmente.

![Início (6)](https://images.contentful.com/alneenqid6w5/3ew5jbEQLOWq35gB0H0rLx/1fa45e6308ecc1906fcff908df9ba0c2/In__cio__6_.gif)

Para que os pedidos com divergência de preço subam para o OMS, foi criada a regra de divergência de valores (Beta). Nessa regra, todos os pedidos com divergência de preço são enviados ao OMS e devem ser aprovados manualmente pelo responsável da loja, com e-mail cadastrado em *Gerenciamento de contas > Contas*. É possível ter mais de um e-mail cadastrado.

Através dessa regra, os pedidos com divergência de preço são criados no OMS, garantindo a reserva de estoque e ficando pendentes de autorização com status `Aguardando autorização manual`.

Pedidos devem ser gerenciados e aprovados manualmente pelo OMS ou pelo [VTEX DO](https://help.vtex.com/pt/tutorial/vtex-do--tutorials_203) e somente os usuários com autorização podem aprovar os pedidos. 

Uma regra é configurada automaticamente com percentual de divergência entre 0% a 30% para `Negar automaticamente` os pedidos em seu Admin VTEX, e é possível alterá-la ou até mesmo criar mais de uma regra ao fazer a configuração.

>ℹ️ Depois de configurar o mecanismo de regra de divergência de valores (Beta), não será mais necessário configurar o campo Divergência de Preço dentro da integração do marketplace. Caso você já tenha configurado o campo dentro da integração, a configuração realizada não será mais válida.

## Configuração de regra de divergência de valores (Beta)

Na configuração da regra de divergência de valores, temos duas possibilidades:
- [Criar regras](#criar-regras)
- [Editar regras](#editar-regras)

### Criar regras

![barra regradivergencia](https://images.contentful.com/alneenqid6w5/6JNnSQFFrel5aIEWZPPQGs/98dd2567f3a1c178dc0ea1c150895ee0/barra_regradivergencia.JPG)

Para criar as regras, siga os passos abaixo:

1. Acesse o Admin.
2. No módulo *PEDIDOS*, selecione a opção `Gerenciamento de Pedidos`.
3. Clique em `Autorização de pedidos`.
   * Caso essa opção não apareça no seu Admin, acesse a URL  `https://{accountname}.myvtex.com/admin/order-auth`. Substituindo {accountname} pelo nome da sua loja.
4. Em *DIVERGÊNCIA DE VALORES*, clique em `CRIAR REGRAS`.
5. Na página que abriu, clique no botão `CRIAR REGRAS`.
   * É criada uma regra configurada automaticamente com percentual de divergência entre 0% a 30%, correspondente à barra azul claro.
6. Para aumentar ou diminuir o percentual de divergência, clique na barra e arraste-a pelas extremidades, menos “<” ou para mais “>”.
7. Escolha entre as seguintes ações de regras para pedidos: `Autorizar automaticamente`, `Negar automaticamente` ou `Criar Uma Tarefa no VTEX DO para Aprovação`.
8. Para criar a 2ª regra, clique no ícone <img class="shadow-4" src="https:////images.ctfassets.net/alneenqid6w5/7E2BhdEapQ5Lmm4fLRKxpp/2770eaaa5af9653a71416c2f9677eb37/__cone_regras.JPG" /> e repita os passos 6 e 7.
11. Clique em `Salvar Regras`.

Durante o processo de criação de regras, são apresentadas as seguintes abas:
   * **Todas**: Se você não acrescentar mais regras, somente essa aba estará presente na página. A medida que criar mais regras, elas serão agrupadas nessa aba.
   * **1ª regra**: Quando você criar uma regra adicional, é possível configurá-la nessa aba.
   * **2ª regra**: Configuração da 2ª regra ou subsequente, que só aparecem depois que uma regra anterior é configurada.

### Editar regras

Para editar as regras já existentes, siga os passos abaixo:

1. Acesse o Admin.
2. No módulo *PEDIDOS*, selecione a opção `Gerenciamento de Pedidos`.
3. Clique em `Autorização de pedidos`.
   * Caso essa opção não apareça no seu Admin, acesse a URL  `https://{accountname}.myvtex.com/admin/order-auth`. Substituindo {accountname} pelo nome da sua loja.
4. Em *DIVERGÊNCIA DE VALORES*, clique em `Editar Regras`.
5. Edite a regra que deseja alterando a barra de porcentagem.
6. Clique em `Salvar Regras`.

![Início (7)](https://images.contentful.com/alneenqid6w5/78PxO7B0deTXnm48YPRlew/0b46e4637bfe89bfb373a679b4afadac/In__cio__7_.gif)

## Autorização de pedidos

Você tem duas formas de autorizar os pedidos com status `Aguardando autorização manual`:
- [Autorizar manualmente no OMS](#autorizacao-de-pedidos)
- [Autorizar pelo VTEX DO](#autorizacao-pelo-vtex-do)

>⚠️ Você precisa ter permissão do owner da conta para autorizar os pedidos, caso contrário, a seguinte mensagem aparecerá na tela: 
> “Você ainda não possui regras de autorização. Então todos os casos de divergências são negados automaticamente."

### Autorização manual no OMS

Para autorizar manualmente os pedidos, siga os passos a seguir:

1. Acesse o Admin.
2. No módulo *PEDIDOS*, selecione a opção `Gerenciamento de Pedidos`.
3. Clique em `Todos os pedidos`.
4. Selecione o pedido com status `Aguardando autorização manual` que deseja autorizar. 
5. Clique em `Confirmar pedido`.

![Início (8)](https://images.contentful.com/alneenqid6w5/4cDra6L7aNwPbmTxZJVNPJ/8f232c924f02fa9377bccb8f1e42d698/In__cio__8_.gif)

### Autorização pelo VTEX DO

O [VTEX DO](https://help.vtex.com/pt/tutorial/vtex-do--tutorials_203?&utm_source=autocomplete) é um gerenciador de tarefas geradas pelos módulos da plataforma para serem realizadas manualmente. Para autorizar os pedidos pelo VTEX DO, siga os passos a seguir: 

1. Acesse o Admin.
2. No módulo *PEDIDOS*, selecione a opção `Gerenciamento de Pedidos`.
3. Clique em `Todos os pedidos`.
4. Clique no VTEX DO, o ícone de caixa de entrada localizada no canto inferior direito da tela.
5. Selecione o pedido que deseja autorizar. 
6. Clique em `Fechar`.
7. Clique em `Autorizar`.

![Início (9)](https://images.contentful.com/alneenqid6w5/6WCfZf454PzSeJ2ZZASERn/f1fd489741a19979544bcc80f8686598/In__cio__9_.gif)
