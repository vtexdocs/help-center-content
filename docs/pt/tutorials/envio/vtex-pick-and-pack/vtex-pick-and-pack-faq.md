---
title: 'VTEX Pick and Pack: FAQ'
createdAt: 2025-05-16T16:11:28.033Z
updatedAt: 2026-09-16T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-faq
locale: pt
hidden: false
---
Este guia tem como objetivo responder as perguntas mais frequentes sobre o VTEX Pick and Pack. O artigo está dividido nas seguintes seções:

- [Configuração geral](#configuracao-geral)
  - [O VTEX Pick and Pack é habilitado por padrão em minha loja?](#o-vtex-pick-and-pack-e-habilitado-por-padrao-em-minha-loja)
  - [Quem pode acessar o VTEX Pick and Pack no Admin VTEX?](#quem-pode-acessar-o-vtex-pick-and-pack-no-admin-vtex)
  - [Todos os pedidos da sua loja passarão pelo VTEX Pick and Pack?](#todos-os-pedidos-da-sua-loja-passarao-pelo-vtex-pick-and-pack)
  - [Os separadores irão lidar com um pedido por vez ou com vários pedidos simultaneamente?](#os-separadores-irao-lidar-com-um-pedido-por-vez-ou-com-varios-pedidos-simultaneamente)
- [Separação](#separacao)
  - [O separador poderá alterar o pedido durante a separação?](#o-separador-podera-alterar-o-pedido-durante-a-separacao)
  - [Se o separador puder adicionar, substituir ou remover itens, essas ações precisarão de aprovação de um administrador?](#se-o-separador-puder-adicionar-substituir-ou-remover-itens-essas-acoes-precisarao-de-aprovacao-de-um-administrador)
  - [Se forem permitidas alterações nos pedidos, haverá um limite de alterações a serem realizadas?](#se-forem-permitidas-alteracoes-nos-pedidos-havera-um-limite-de-alteracoes-a-serem-realizadas)
  - [Como o separador localiza os itens para a separação?](#como-o-separador-localiza-os-itens-para-a-separacao)
- [Empacotamento](#empacotamento)
  - [Quais são os tamanhos e tipos de embalagens que podem ser utilizados?](#quais-sao-os-tamanhos-e-tipos-de-embalagens-que-podem-ser-utilizados)
  - [Quem é responsável por imprimir as etiquetas do pacote?](#quem-e-responsavel-por-imprimir-as-etiquetas-do-pacote)
- [Entrega e retirada](#entrega-e-retirada)
  - [Como o cliente confirma a retirada do pedido na loja?](#como-o-cliente-confirma-a-retirada-do-pedido-na-loja)
  - [É possível cadastrar novas transportadoras no Last Mile?](#e-possivel-cadastrar-novas-transportadoras-no-last-mile)
  - [É possível utilizar o módulo Last Mile sem o Pick and Pack?](#e-possivel-utilizar-o-modulo-last-mile-sem-o-pick-and-pack)
- [Integrações](#integracoes)
  - [É possível automatizar o processo de faturamento com o Pick and Pack?](#e-possivel-automatizar-o-processo-de-faturamento-com-o-pick-and-pack)
  - [Posso informar ao cliente mais detalhes sobre o preparo do pedido?](#posso-informar-ao-cliente-mais-detalhes-sobre-o-preparo-do-pedido)

## Configuração geral

### O VTEX Pick and Pack é habilitado por padrão em minha loja?

Não. O **VTEX Pick and Pack** não é habilitado automaticamente no Admin VTEX. Para utilizá-lo em sua loja, entre em contato com o [Suporte VTEX](https://support.vtex.com/hc/pt-br/), que fará a ativação da funcionalidade e orientará os próximos passos de configuração.

Para conhecer as páginas e os recursos da solução antes de solicitar a habilitação, consulte o artigo [VTEX Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack).

### Quem pode acessar o VTEX Pick and Pack no Admin VTEX?

Os separadores cadastrados na aba **Usuários** da página **Configurações** têm acesso apenas ao [aplicativo móvel do Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack-mobile). Os usuários que acompanham a operação no Admin VTEX dependem de [perfis de acesso](/pt/docs/tutorials/perfis-de-acesso) e [recursos do License Manager](/pt/docs/tutorials/recursos-do-license-manager), e não são gerenciados nessa aba.

Recomendamos criar um perfil de acesso dedicado à operação de fulfillment e atribuí-lo aos usuários responsáveis por ela. Para que esses usuários visualizem a página [Insights](/pt/docs/tutorials/vtex-pick-and-pack-insights), o perfil deve incluir o recurso **Insights Metrics**, do produto **Insights**. Para mais informações, consulte [Acessar o VTEX Pick and Pack no VTEX Admin](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#acessar-o-vtex-pick-and-pack-no-vtex-admin).

### Todos os pedidos da sua loja passarão pelo VTEX Pick and Pack?

Não. Por ser uma solução nativa da VTEX, o VTEX Pick and Pack recebe os pedidos diretamente da plataforma, sem necessidade de integrações externas. No entanto, depois que ele é habilitado na sua loja, apenas os pedidos que atendem aos filtros configurados são enviados para ele. Para definir esses filtros, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Pedidos > Geral**.
3. Preencha os [filtros](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#filtros) disponíveis.
4. Clique em `Salvar`.

### Os separadores irão lidar com um pedido por vez ou com vários pedidos simultaneamente?

É possível definir se o fluxo da ordem de serviço será realizado como um pedido de cada vez ou múltiplos pedidos. Para configurar como será o manuseio de pedidos, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Ordens de serviço > Geral**.
3. Escolha a opção que deseja configurar:
   * **Pedido único:** manuseio individual de cada pedido.
   * **Pedido múltiplo:** manuseio de vários pedidos ao mesmo tempo, de forma mais eficiente e conveniente.
4. Clique em `Salvar`.

## Separação

### O separador poderá alterar o pedido durante a separação?

O separador pode adicionar, substituir e recusar itens no pedido, além de poder aumentar a quantidade ou ajustar o preço de um item. Contudo, é necessário ativar as permissões para que o separador realize essas ações. Para configurar as permissões na aba [Separação](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#separacao), siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Ordens de serviço > Separação**.
3. Selecione as ações que o separador poderá executar:
   * **Permitir observações nos itens**
   * **Solicitar confirmação para separar itens**
   * **Permitir adicionar itens**
   * **Permitir substituição de itens**
   * **Permitir recusar itens**
   * **Permitir alterações no preço dos itens**
   * **Permitir alterações na quantidade dos itens**
4. Clique em `Salvar`.

### Se o separador puder adicionar, substituir ou remover itens, essas ações precisarão de aprovação de um administrador?

A aprovação de um administrador não é obrigatória durante a alteração de um pedido, porém, pode ser habilitada na aba [Separação](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#separacao). Para isso, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Ordens de serviço > Separação**.
3. Habilite a opção **Ativar fluxo de aprovação**.
4. Clique em `Salvar`.

Com o fluxo de aprovações habilitado, as solicitações dos separadores que dependem de autorização são exibidas na aba **Aprovações** dos [detalhes da ordem de serviço](/pt/docs/tutorials/vtex-pick-and-pack-ordens-de-servico#aprovacoes).

### Se forem permitidas alterações nos pedidos, haverá um limite de alterações a serem realizadas?

Sim. Na aba [Separação](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#separacao), cada tipo de alteração tem um limite percentual próprio, definido em um controle deslizante de −100% a 100%, calculado sobre o preço original do item, a quantidade original do item ou o valor original do pedido, conforme o tipo. O controle só é exibido quando a opção correspondente está ativada:

* **Limite de alterações de preço dos itens dos pedidos:** percentual máximo de variação no preço de um item. Exibido quando a opção **Permitir alterações no preço dos itens** está ativada.
* **Limite de alterações na quantidade de itens dos pedidos:** percentual máximo de variação na quantidade de unidades ou no peso do item, conforme aplicável. O mesmo limite define quanto o separador pode aumentar ou reduzir as unidades ou o peso do item. Exibido quando a opção **Permitir alterações na quantidade dos itens** está ativada.
* **Limite de alterações nos pedidos:** percentual de variação permitido no valor total do pedido, que define os limites mínimo e máximo para o valor final. O separador pode realizar várias alterações, desde que o valor total do pedido permaneça dentro desses limites. Exibido quando a opção **Limitar total de alterações nos pedidos** está ativada.

Para definir um limite, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Ordens de serviço > Separação**.
3. Ative a opção correspondente ao limite que deseja aplicar.
4. Arraste o controle deslizante até o percentual desejado.
5. Clique em `Salvar`.

### Como o separador localiza os itens para a separação?

A localização de itens refere-se à especificação onde cada item está armazenado no estoque, facilitando e simplificando o processo de separação. Para habilitar a localização dos itens, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Itens > Geral**.
3. Habilite a opção **Ativar localização do item**.
4. Clique em `Salvar`.

Depois de ativar a opção, cadastre a localização de cada SKU por estoque usando o endpoint [Create bin location](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api#post-/-skuId-/warehouses/-warehouseId-) da API Pick and Pack Order Changes.

## Empacotamento

### Quais são os tamanhos e tipos de embalagens que podem ser utilizados?

Os tipos e tamanhos de embalagens utilizados pela loja devem ser cadastrados na aba [Empacotamento](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#empacotamento) da página **Configurações**. Para adicionar uma embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Ordens de serviço > Empacotamento > Tipos de embalagem**.
3. Clique em `Criar tipo de embalagem`.
4. Preencha o formulário com as informações da embalagem, como nome, tipo, descrição, código, dimensões e peso máximo.
5. Clique em `Salvar`.

> ℹ️ As opções de tipos de embalagem disponíveis são `Caixa`, `Sacola`, `Envelopes`, `Fita`, `Papel` e `Outros`.

### Quem é responsável por imprimir as etiquetas do pacote?

A impressão das etiquetas do pacote é feita pelo separador no [aplicativo móvel do Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack-mobile#empacotamento), e não pelo lojista ou operador do Admin VTEX. Durante o empacotamento, o separador acessa a aba **Itens empacotados**, clica no menu <i class="fas fa-ellipsis-v"></i> do pacote desejado e seleciona `Imprimir etiquetas`.

Para que a etiqueta esteja disponível para o separador, é necessário habilitá-la na aba [Empacotamento](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#empacotamento) e definir as informações que serão exibidas nela. Para isso, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca no topo da página.
2. Acesse **Ordens de serviço > Empacotamento > Geral**.
3. Habilite a opção **Ativar etiquetas de empacotamento**.
4. Na guia **Impressão**, selecione e preencha todas as informações que deseja exibir na etiqueta.
5. Clique em `Salvar`.

> ℹ️ A etiqueta de empacotamento é diferente da etiqueta de rastreio, que é gerada pelo Last Mile e baixada pelo lojista no [painel de detalhes do serviço](/pt/docs/tutorials/vtex-pick-and-pack-last-mile#consultar-detalhes-do-servico). O modelo da etiqueta de rastreio não pode ser personalizado no Admin VTEX. Por meio de uma integração, é possível receber uma etiqueta com o template da transportadora.

## Entrega e retirada

### Como o cliente confirma a retirada do pedido na loja?

Nos pedidos com retirada em loja, o [Last Mile](/pt/docs/tutorials/vtex-pick-and-pack-last-mile#confirmar-a-retirada-em-loja) gera um código de seis dígitos que autentica a entrega ao cliente. O fluxo funciona da seguinte forma:

1. A separação e o empacotamento do pedido são concluídos e o serviço de coleta é criado.
2. O VTEX Pick and Pack envia ao cliente um email com o código de retirada.
3. O cliente vai à loja e informa o código.
4. O operador da loja valida o código no serviço e conclui a retirada.
5. O serviço passa ao status `Entregue`, com o registro da data de confirmação. A partir desse evento, o faturamento do pedido pode ser acionado automaticamente, conforme a integração configurada.

O email é enviado pelo [Message Center](/pt/docs/tutorials/conhecendo-o-message-center), a partir de um modelo dedicado ao código de retirada. Caso o cliente não tenha recebido a mensagem, é possível [enviar um novo código por email](/pt/docs/tutorials/vtex-pick-and-pack-last-mile#enviar-um-novo-codigo-por-email) pelo painel de detalhes do serviço.

### É possível cadastrar novas transportadoras no Last Mile?

Sim. Para cadastrar uma nova transportadora, abra um chamado pelo [Suporte VTEX](https://support.vtex.com/hc/pt-br/) para solicitar o cadastro das credenciais e fornecer os detalhes da integração. Não há custo adicional para esse cadastro.

### É possível utilizar o módulo Last Mile sem o Pick and Pack?

No momento, não é possível utilizar o módulo Last Mile sem o Pick and Pack. Estamos mapeando o interesse nessa possibilidade. Para enviar seu feedback, abra um chamado pelo [Suporte VTEX](https://support.vtex.com/hc/pt-br/).

## Integrações

### É possível automatizar o processo de faturamento com o Pick and Pack?

Sim. É possível usar o [webhook](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#webhook) do Pick and Pack para identificar a finalização do processo no aplicativo e integrá-la a uma automação existente. A implementação dessa automação deve ser feita pelo lojista.

### Posso informar ao cliente mais detalhes sobre o preparo do pedido?

Sim. O [webhook](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes#webhook) retorna atualizações de status do pedido durante as etapas de separação, empacotamento e entrega. Quando o Last Mile está ativo, o nível de detalhamento das informações de entrega depende do sistema da transportadora. O lojista pode usar esses dados para criar fluxos de notificação para o cliente.

## Saiba mais

* [VTEX Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack)
* [VTEX Pick and Pack: Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes)
* [VTEX Pick and Pack: Ordens de serviço](/pt/docs/tutorials/vtex-pick-and-pack-ordens-de-servico)
* [VTEX Pick and Pack: Last Mile](/pt/docs/tutorials/vtex-pick-and-pack-last-mile)
* [VTEX Pick and Pack Mobile](/pt/docs/tutorials/vtex-pick-and-pack-mobile)
