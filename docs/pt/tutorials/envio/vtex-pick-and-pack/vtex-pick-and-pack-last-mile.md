---
title: 'VTEX Pick and Pack: Last Mile'
createdAt: 2023-04-10T16:01:14.613Z
updatedAt: 2026-08-21T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-last-mile
locale: pt
hidden: false
---

> ℹ️ Caso tenha interesse em adotar essa funcionalidade no seu negócio, preencha nosso [formulário](https://vtex.com/pt-br/contato/) apontando no campo `Comentários` o nome do produto desejado.

**Last Mile** é a página do Admin VTEX que acompanha a etapa final do fulfillment dos pedidos processados pelo [VTEX Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack): a entrega ao cliente pelas transportadoras integradas e a retirada dos pedidos na loja.

Cada movimentação é representada por um **serviço**, o registro que reúne a origem, o destino, os pacotes e o histórico de status de um ou mais pedidos. A página está organizada em duas abas, uma para cada tipo de serviço:

* [Entregas](#entregas)
* [Retirada na loja](#retirada-na-loja)

Nessas abas, você pode realizar as seguintes ações:

* [Criar serviço](#criar-servico)
* [Consultar detalhes do serviço](#consultar-detalhes-do-servico)
* [Confirmar a retirada em loja](#confirmar-a-retirada-em-loja)

O módulo também tem as seguintes áreas de configuração:

* [Integrações](#integracoes)
* [Configurações do Last Mile](#configuracoes-do-last-mile)

## Entregas

A aba **Entregas** lista os serviços atribuídos a transportadoras, com as atualizações de status que elas retornam até a entrega ao cliente.

![vtex-pick-and-pack-last-mile_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_1.png)

A tabela apresenta as seguintes informações:

| Campo da tabela | Descrição |
| --------------- | --------- |
| Transportadora | [Transportadora](/pt/docs/tutorials/transportadoras-na-vtex) responsável pela entrega, com o respectivo logotipo e o identificador do serviço na transportadora. |
| ID do serviço | Número identificador do serviço no Last Mile. |
| Tags | Tags associadas ao serviço. |
| Origem/Destino | Localidade de origem e localidade de destino da entrega. |
| Data de entrega | Data prevista para a entrega do pedido. |
| Status | Etapa atual do serviço. |

Para localizar um serviço específico, utilize a barra de busca no topo da página. Você também pode refinar a visualização com os seguintes filtros:

* **Data de entrega:** intervalo de datas previstas para a entrega.
* **Transportadora:** transportadora responsável pela entrega.
* **Status:** etapa atual do serviço. É possível selecionar mais de um status.
* **Instalações:** loja ou centro de distribuição de origem do serviço.
* **Meios de pagamento:** [meio de pagamento](/pt/docs/tutorials/diferenca-entre-meios-de-pagamento-e-condicoes-de-pagamento) utilizado no pedido.

Para desfazer uma seleção, abra o filtro e clique em `Limpar`.

### Status do serviço

Os status a seguir se aplicam aos serviços das duas abas:

| Status | Descrição |
| ------ | --------- |
| Criado | Status interno de validação dos dados, atribuído no momento em que o serviço é criado. |
| Pendente | O sistema enviou as informações para a transportadora e o serviço foi criado do lado dela. |
| Alocado | A transportadora designou um entregador para o serviço. |
| Separado | A transportadora coletou os pacotes na origem. |
| A caminho | Os pacotes estão em trânsito para o destino. |
| Entregue | O pedido foi entregue ao cliente, no endereço informado, em um [ponto de retirada](/pt/docs/tutorials/pontos-de-retirada) ou na loja, no caso da retirada em loja. |
| Incidente | A transportadora reportou um problema durante o percurso. |
| Em espera | A transportadora interrompeu temporariamente o serviço, por exemplo, por uma falha no veículo. |
| Devolvido | O pedido retornou à origem, por exemplo, porque o cliente não foi localizado ou recusou o recebimento. |
| Transferência | O serviço corresponde a uma transferência de itens entre instalações da operação. |
| Cancelado | O serviço foi cancelado. |

> ℹ️ Nos serviços de entrega, os status são atualizados pela transportadora por meio da [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api). Nos serviços de retirada, o status é atualizado pelo operador da loja no Admin VTEX.

## Retirada na loja

A aba **Retirada na loja** lista os pedidos que o cliente vai buscar na loja e é onde a retirada é confirmada.

![vtex-pick-and-pack-last-mile_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_2.png)

A tabela apresenta as seguintes informações:

| Campo da tabela | Descrição |
| --------------- | --------- |
| Order ID | Número identificador do pedido. |
| Cliente | Nome do cliente que fez o pedido. |
| Data da coleta | Data e hora previstas para o cliente retirar o pedido. |
| Loja | Loja onde o pedido será retirado. |
| Status | Etapa atual do serviço, conforme a tabela de [status do serviço](#status-do-servico). |

Para localizar um pedido específico, utilize a barra de busca no topo da página. Você também pode refinar a visualização com os filtros **Data da coleta**, **Status** e **Instalações**.

## Criar serviço

Os serviços podem ser criados automaticamente ou manualmente:

* **Automaticamente:** configure uma regra na aba **Automação > Serviços de envio** das [Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes) para que o serviço seja criado quando as condições definidas forem atendidas.
* **Manualmente:** crie o serviço na página **Last Mile**, conforme os passos abaixo.

Para criar um serviço manualmente, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Last Mile > Serviços de envio**.
2. Clique em `Criar serviço`.
3. Em **Select a service type**, selecione o tipo de serviço:
    * **Entrega:** o pedido será entregue por uma transportadora no endereço do cliente ou em um [ponto de retirada](/pt/docs/tutorials/pontos-de-retirada).
    * **Coleta:** o pedido será retirado pelo cliente na loja.
4. Clique em `Continuar`.

    ![vtex-pick-and-pack-last-mile_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_3.png)

5. Selecione os pedidos que farão parte do serviço. A lista exibe apenas os pedidos elegíveis ao tipo de serviço escolhido, com as seguintes informações:
    * **ID do pedido:** identificador e data de criação do pedido.
    * **Item(ns):** quantidade de itens e de unidades do pedido.
    * **Envio:** tipo de envio do pedido, `Entrega ao cliente` ou `Retirada na loja`.
    * **Status:** etapa do pedido no fluxo do VTEX Pick and Pack.
    * **Instalação:** loja ou centro de distribuição responsável pelo pedido.

    Os pedidos escolhidos aparecem em **Pedidos selecionados**, e o bloco **Resumo** consolida a quantidade de pedidos, de itens e as instalações envolvidas. Para localizar um pedido, utilize a barra de busca ou os filtros **Status**, **Instalações** e de data, que corresponde a **Data de entrega** nos serviços de entrega e a **Data da coleta** nos serviços de coleta.

    ![vtex-pick-and-pack-last-mile_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_4.png)

6. Clique em `Continuar`.
7. Confira os pacotes de cada pedido, com os itens, a quantidade e as dimensões de cada volume.

    ![vtex-pick-and-pack-last-mile_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_5.png)

8. Clique em `Continuar`.
9. Defina as informações de origem e destino do serviço. Essa etapa varia conforme o tipo de serviço escolhido, como descrito em [Serviços de coleta](#servicos-de-coleta) e [Serviços de entrega](#servicos-de-entrega).
10. Clique em `Criar serviço`.

Em qualquer etapa, você pode clicar em `Voltar` para revisar as informações já preenchidas. Durante todo o processo, o resumo lateral acumula os dados já definidos, como os pedidos selecionados, os pacotes, os endereços e a transportadora.

### Serviços de coleta

Nos serviços de coleta, a janela **Create pickup service** apresenta a **Instalação** onde o pedido ficará disponível, o endereço correspondente e a **Data estimada de retirada**. O endereço também aparece no resumo lateral, em **Retirada**.

![vtex-pick-and-pack-last-mile_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_6.png)

> ⚠️ A retirada em loja não utiliza transportadoras externas nem sistemas de gerenciamento de transporte (TMS), já que o cliente busca o pedido diretamente na loja. Esses serviços utilizam a integração `Manual`, que registra a movimentação sem acionar uma transportadora. Se a integração `Manual` não estiver ativa, não é possível concluir a criação de um serviço de coleta.

### Serviços de entrega

Nos serviços de entrega, essa etapa é dividida em três telas.

Em **Informações de retirada**, você define onde a transportadora vai coletar os pacotes. A opção `Criar a partir do pedido` utiliza os dados do próprio pedido para preencher a origem. Selecione a **Instalação** desejada e informe a **Data prevista para coleta**.

![vtex-pick-and-pack-last-mile_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_7.png)

Em **Informações de entrega**, você define o destino dos pacotes, também a partir dos dados do pedido, e informa a **Data prevista para entrega**. O endereço de destino aparece no resumo lateral, em **Enviar para**.

![vtex-pick-and-pack-last-mile_8](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_8.png)

Por fim, selecione a **Transportadora** responsável pela entrega entre as integrações ativas. A transportadora escolhida aparece no resumo lateral e recebe o serviço quando você clica em `Criar serviço`.

## Consultar detalhes do serviço

Para ver mais informações sobre um serviço, clique na linha correspondente na tabela. Os detalhes são exibidos em um painel lateral, organizado nas abas **Detalhes** e **Observações**.

![vtex-pick-and-pack-last-mile_9](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_9.png)

No topo do painel, aparecem o identificador do pedido e o status atual do serviço. A aba **Detalhes** reúne as seguintes informações:

* **Order ID:** número identificador do pedido.
* **Buyer information:** nome, telefone e email do cliente.
* **Pickup details:** intervalo de data e hora previsto para a retirada, nos serviços de coleta.
* **Store:** loja de retirada, com o endereço completo.
* **Pacote(s):** volumes do serviço, com o tipo de embalagem e a quantidade de itens. Clique no pacote para ver os itens que ele contém.
* **Linha do tempo:** histórico do serviço, com data, hora e autor de cada evento, desde a criação até a última atualização de status.

A aba **Observações** reúne as notas registradas no serviço.

## Confirmar a retirada em loja

Nos pedidos com retirada em loja, o Last Mile gera um código de seis dígitos que autentica a entrega ao cliente. O fluxo funciona da seguinte forma:

1. A separação e o empacotamento do pedido são concluídos e o serviço de coleta é criado.
2. O VTEX Pick and Pack envia ao cliente um email com o código de retirada.
3. O cliente vai à loja e informa o código.
4. O operador da loja valida o código no serviço e conclui a retirada.
5. O serviço passa ao status `Entregue`, com o registro da data de confirmação. A partir desse evento, o faturamento do pedido pode ser acionado automaticamente, conforme a integração configurada.

O email é enviado pelo [Message Center](/pt/docs/tutorials/conhecendo-o-message-center), a estrutura de emails transacionais da VTEX, a partir de um modelo dedicado ao código de retirada. Além do código, a mensagem apresenta a identificação do pedido, a loja de retirada e a data prevista para a retirada.

> ℹ️ O modelo e o remetente do email são configurados por conta. Em operações com várias contas, como as de sellers white label, é necessário configurar o modelo em cada uma delas. Para saber como personalizar o conteúdo e o layout da mensagem, consulte [Templates de emails transacionais](/pt/docs/tutorials/templates-de-emails-transacionais).

### Enviar um novo código por email

Se o cliente não recebeu o email ou não tem mais acesso a ele, você pode enviar um novo código a partir do serviço.

Para enviar um novo código, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Last Mile > Serviços de evnio**.
2. Clique na aba **Retirada na loja**.
3. Clique no pedido desejado.
4. No rodapé do painel de detalhes, clique em `Send new code via email`.

A mensagem `New code sent to customer's email` confirma que o novo código foi enviado ao email do cliente.

![vtex-pick-and-pack-last-mile_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_10.png)

Há um intervalo mínimo entre envios. Enquanto ele não termina, a opção fica indisponível e o rodapé exibe a contagem em segundos até o próximo envio permitido, no formato `Retry in {segundos}s`. Essa restrição não pode ser contornada e existe para evitar o envio excessivo de mensagens ao cliente.

![vtex-pick-and-pack-last-mile_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_11.png)

### Validar o código e concluir a retirada

Para confirmar a retirada do pedido, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Last Mile > Serviços de envio**.
2. Clique na aba **Retirada na loja**.
3. Clique no pedido desejado.
4. No rodapé do painel de detalhes, clique em `Start handoff`.
5. Na tela **Enter pickup code**, insira o código de seis dígitos informado pelo cliente.

    ![vtex-pick-and-pack-last-mile_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_12.png)

6. Clique em `Complete handoff`.

Para voltar ao painel de detalhes sem confirmar a retirada, clique em `Back to details`.

Se o código estiver incorreto, a tela indica o erro e permite uma nova tentativa. Após a confirmação, o painel exibe a mensagem `Pickup completed`, o serviço passa ao status `Entregue` e a data de confirmação fica registrada na **Linha do tempo**.

![vtex-pick-and-pack-last-mile_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_13.png)

> ❗ O código de retirada é um dado sensível: ele é a garantia de que o pedido foi entregue à pessoa correta. Compartilhe o código apenas com o cliente que fez o pedido.

## Integrações

Em **Envio > Last Mile > Integrações**, você cadastra e ativa as empresas que podem receber os serviços do Last Mile. As integrações estão organizadas em dois grupos:

* **Transportadoras:** empresas que realizam a entrega diretamente. Esse grupo inclui a integração `Manual`, utilizada nos serviços de retirada em loja.
* **Agentes:** brokers que reúnem várias transportadoras, permitindo acessar todas elas com uma única integração.

Cada cartão apresenta o nome da empresa, os países atendidos e o status da integração, que pode ser `Ativo` ou `Desabilitado`. Somente integrações ativas podem ser selecionadas na criação de um serviço.

![vtex-pick-and-pack-last-mile_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_14.png)

Para adicionar uma integração, siga os passos abaixo:

1. Clique em `Adicionar Integração`.
2. Na janela **Add Integration**, selecione a empresa desejada. As empresas já integradas na conta aparecem indisponíveis para seleção.

    ![vtex-pick-and-pack-last-mile_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_15.png)

3. Clique em `Continuar`.
4. Ative a opção **Ativo** e preencha os campos de configuração.

    > ℹ️ Cada empresa tem seus próprios campos de configuração, e algumas informações precisam ser obtidas diretamente com ela. Se necessário, entre em contato com o suporte da transportadora.

    ![vtex-pick-and-pack-last-mile_16](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_16.png)

5. Clique em `Criar`.

Para editar uma integração existente, clique no cartão correspondente, faça as alterações desejadas e clique em `Atualizar`.

> ℹ️ Para integrar uma transportadora que não está na lista, consulte a [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api) e o guia [VTEX Pick and Pack Carriers Integration Protocol](https://developers.vtex.com/docs/guides/vtex-pick-and-pack-carriers-integration-protocol).

## Configurações do Last Mile

Em **Envio > Last Mile > Configurações**, na seção **Informações > Geral**, você define a localização da loja e os dados de contato utilizados nos serviços de envio.

![vtex-pick-and-pack-last-mile_17](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-last-mile_17.png)

Em **Localização da loja**, preencha o país, o estado, a cidade, o CEP, a rua e o fuso horário da loja. Você também pode utilizar o campo **Encontrar um endereço** para localizar o endereço e preencher os campos automaticamente, incluindo a latitude e a longitude. Em **Informações de contato**, preencha o nome e o telefone da pessoa responsável. Para salvar as alterações, clique em `Salvar`.

> ⚠️ O aplicativo móvel do Last Mile, destinado aos entregadores da frota própria da loja, foi descontinuado em 2024. As configurações relacionadas à frota própria não estão mais em uso, e o acompanhamento das entregas depende das transportadoras integradas.

## Saiba mais

* [VTEX Pick and Pack](/pt/docs/tutorials/vtex-pick-and-pack)
* [VTEX Pick and Pack: Pedidos](/pt/docs/tutorials/vtex-pick-and-pack-pedidos)
* [VTEX Pick and Pack: Ordens de serviço](/pt/docs/tutorials/vtex-pick-and-pack-ordens-de-servico)
* [VTEX Pick and Pack: Configurações](/pt/docs/tutorials/vtex-pick-and-pack-configuracoes)
* [VTEX Pick and Pack: Insights](/pt/docs/tutorials/vtex-pick-and-pack-insights)
* [Fluxo e status de pedidos](/pt/docs/tutorials/fluxo-e-status-de-pedidos)


