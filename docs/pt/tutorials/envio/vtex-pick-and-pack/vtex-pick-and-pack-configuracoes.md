---
title: 'VTEX Pick and Pack: Configurações'
createdAt: 2024-01-05T20:43:38.480Z
updatedAt: 2026-10-01T00:00:00.000Z
contentType: tutorial
productTeam: Post-purchase
slugEN: vtex-pick-and-pack-settings
locale: pt
hidden: false
---
> ℹ️ O **VTEX Pick and Pack** não aparece disponível no Admin VTEX por padrão. Para ativar a solução na sua loja, solicite a habilitação ao time de Product Support da VTEX.

**Configurações** é uma página do Admin VTEX que permite selecionar as configurações desejadas para o funcionamento do VTEX Pick and Pack na sua loja. As configurações estão distribuídas nas seguintes abas:

* [Pedidos](#pedidos)
* [Ordens de serviço](#ordens-de-serviço)
* [Itens](#itens)
* [Automação](#automacao)
* [Usuários](#usuarios)
* [Instalações](#instalacoes)
* [Integração](#integracao)

## Pedidos

Nesta aba, você encontrará configurações relacionadas aos pedidos processados pelo VTEX Pick and Pack.

![vtex-pick-and-pack-configuracoes_1](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_1.png)

* **Baixar pedidos do OMS:** permite exportar pedidos do [módulo de Pedidos da VTEX](https://help.vtex.com/pt/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201).

### Remoção automática de pedidos faturados

Na aba **Pedidos**, você pode escolher como o VTEX Pick and Pack deve tratar pedidos que mudam para **Faturado** no sistema de gerenciamento de pedidos (OMS) depois de serem baixados para o aplicativo.

Para remover automaticamente pedidos faturados do VTEX Pick and Pack, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Na aba **Pedidos**, clique em **Geral**.
3. Na seção **Se um pedido mudar para Faturado no OMS**, ative a opção **Remover do Pick and Pack**.
4. Clique em `Salvar`.

Com essa opção ativada, o VTEX Pick and Pack remove automaticamente do aplicativo os pedidos que atendem a todas as seguintes condições:

- O pedido já foi baixado para o VTEX Pick and Pack.
- O pedido ainda não foi processado.
- O pedido mudou para **Faturado** no OMS antes da etapa de manuseio.

> ℹ️ Os filtros abaixo são aplicados somente a novos pedidos feitos após a exportação. Se nenhum filtro for configurado, todos os pedidos serão baixados.

### Filtros

Veja abaixo os filtros disponíveis que determinam quais pedidos serão baixados:

* **Meios de pagamento:** meios de pagamento utilizados nos pedidos que serão exportados.
* **Métodos de envio:** métodos de envio utilizados nos pedidos que serão exportados.
* **Tipo de envio:** tipos de envio utilizados nos pedidos que serão exportados (`SHIP_FROM_STORE`, `PICKUP_IN_STORE` e `DRIVE_THRU`).
* **Tags de pedidos:** restringe os pedidos baixados que apresentem determinadas tags.
* **Políticas comerciais:** [políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) aplicadas nos pedidos que serão exportados.
* **Enviar alterações ao OMS**: permite enviar as alterações \- substituições, rejeições ou ajustes \- realizadas nos pedidos manuseados para o [módulo de Pedidos da VTEX](https://help.vtex.com/pt/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201). Os pedidos precisam ter sua ordem de serviço finalizada e nenhuma pendência de separação ou empacotamento no OMS para serem válidos neste filtro.

Clique em `Salvar` para registrar as alterações feitas na aba.

## Ordens de serviço

Nesta seção, você pode configurar as opções que serão aplicadas às [ordens de serviço](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-ordens-de-servico--7bUwvmTY6eOqxzhyMIIzvz) da sua loja. Uma ordem de serviço consiste em um único ou um conjunto de pedidos que serão processados pelo fluxo do Pick and Pack simultaneamente.

### Geral

Nesta aba, você escolhe como os pedidos são agrupados em ordens de serviço e quais recursos ficam disponíveis para o separador. Veja a seguir as configurações disponíveis.

![vtex-pick-and-pack-configuracoes_2](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_2.png)

* **Pedido único:** opção que limita cada ordem de serviço a um único pedido.
* **Pedido múltiplo:** opção que permite que uma ordem de serviço agrupe mais de um pedido.
* **Tags de ordem de serviço**: tags personalizadas que ajudam na identificação das ordens de serviço. As tags podem ser visualizadas na tela de [ordens de serviço pendentes](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes) no aplicativo móvel do Pick and Pack.
* **Permitir notas de ordem de serviço**: opção que permite que o separador [adicione notas na ordem de serviço](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).
* **Permitir chat de suporte**: opção que habilita o chat entre o separador e o lojista por meio do Admin VTEX.
* **Habilitar lista de separação**: lista com informações necessárias da ordem de serviço para o separador realizar a separação dos itens. Essas informações podem ser impressas em formato de etiqueta.

#### Etiqueta

Aqui você escolhe as informações exibidas na lista de separação, impressas e adicionadas ao pacote do pedido.

* **Tamanho (cm):** formato impresso da etiqueta.
* **Tamanho da fonte (px):** tamanho da fonte que será impressa na etiqueta em pixels.
* **Margem esquerda:** tamanho da margem esquerda da etiqueta em centímetros.
* **Margem direita:** tamanho da margem direita da etiqueta em centímetros.
* **Margem superior:** tamanho da margem superior da etiqueta em centímetros.
* **Margem inferior:** tamanho da margem inferior da etiqueta em centímetros.
* **Mostrar IDs dos pedidos:** opção que exibe os IDs dos pedidos na etiqueta.
* **Separar itens por pedidos:** opção que permite gerar uma etiqueta por pedido.
* **Mostrar informações do cliente:** opção que exibe as informações do cliente na etiqueta.
* **Mostrar código de barras/QR dos pacotes:** opção que exibe o código de barras ou QR code na etiqueta.
* **Código de barras/QR:** caso a opção **Mostrar código de barras/QR dos pacotes** esteja ativada, permite selecionar se o código de barras com o número do pedido, o número da ordem de serviço, ou ambos aparecerão na etiqueta.

Clique em `Salvar` para registrar as alterações feitas na aba.

### Separação

Nesta aba, você determina o que o separador pode ver e fazer durante a separação dos itens, como substituir, recusar ou alterar itens do pedido. Veja a seguir as configurações disponíveis.

![vtex-pick-and-pack-configuracoes_3](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_3.png)

* **Mostrar aba de informações do pedido:** opção que exibe a aba de informações do pedido dentro da ordem de serviço para o separador, tanto no [Admin VTEX](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-ordens-de-servico--7bUwvmTY6eOqxzhyMIIzvz) quanto no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).
* **Mostrar informações do cliente por pedido:** opção que exibe a aba de informações do cliente para o separador.
* **Permitir observações nos itens**: opção que permite que o separador [adicione observações nos itens do pedido durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).
* **Solicitar confirmação para separar itens:** opção que habilita uma validação extra no aplicativo Pick and Pack para o separador confirmar a separação de um item do pedido.
* **Ativar fluxo de aprovações:** opção que obriga aprovações de algum administrador para a separação dos itens.
* **Permitir adicionar itens:** opção que permite que o separador [adicione novos itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#adicionar-novos-produtos-a-um-pedido).
* **Permitir substituição de itens:** opção que permite que o separador [substitua itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens).
* **Motivos de substituição**: motivos de [substituição de itens](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens) que serão selecionados pelo separador no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Os motivos de substituição cadastrados não são traduzidos caso o separador escolha outro idioma no aplicativo móvel do Pick and Pack.
* **Permitir recusar itens:** opção que permite que o separador [recuse itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens).
* **Motivos de recusa:** motivos de [recusa de itens](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens) que serão selecionados pelo separador no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Os motivos de recusa cadastrados não são traduzidos caso o separador escolha outro idioma no aplicativo móvel do Pick and Pack.
* **Permitir alterações no preço dos itens:** opção que permite que o separador altere o preço dos itens durante a separação.
* **Motivos de alteração de preços**:  motivos de alteração de preço que serão selecionados pelo separador no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Os motivos de alteração de preços cadastrados não são traduzidos caso o separador escolha outro idioma no aplicativo móvel do Pick and Pack.
* **Número máximo de alterações de preço nos itens do pedido**: limites de alteração de preço de itens em um pedido. 100% é o valor máximo que pode ser adicionado ao preço original quando modificado e \-100% o valor mínimo, sendo calculados em cima do valor original do item.
* **Permitir alterações na quantidade dos itens**: opção que permite que o separador [altere a quantidade dos itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#alterar-a-quantidade-de-um-produto).
* **Número máximo de alterações na quantidade dos itens do pedido:** limites de alteração de quantidade de itens em um pedido. 100% é o valor máximo que pode ser adicionado à quantidade original quando modificada e \-100% o valor mínimo, sendo calculados em cima da quantidade original do item.
* **Limitar alterações no valor total do pedido:** limites de alteração do valor total do pedido feitas pelo separador. 100% é o valor máximo que pode ser adicionado ao valor final do pedido quando modificado e \-100% o valor mínimo, sendo calculados em cima do valor original do pedido.
* **Número máximo de alterações no pedido:** quantidade máxima de alterações (substituições, recusa e itens novos) que podem ser feitas em um pedido.

Clique em `Salvar` para registrar as alterações feitas na aba.

### Empacotamento

Nesta aba, você encontrará as configurações relacionadas à etapa de empacotamento de itens do pedido.

#### Geral

Nesta aba, você ativa o processo de empacotamento e configura as opções de embalagem e de etiqueta de empacotamento. Veja a seguir as configurações disponíveis.

![vtex-pick-and-pack-configuracoes_4](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_4.png)![vtex-pick-and-pack-configuracoes_5](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_5.png)

* **Ativar o processo de empacotamento:** opção que habilita o [fluxo de empacotamento](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#empacotamento) efetuado pelo separador.
* **Ativar relatório de pacotes**: opção que habilita exibir um relatório sobre os pacotes. Esta opção está desabilitada para uso.
* **Ativar etiquetas de empacotamento**: opção que habilita gerar etiquetas para o empacotamento dos pedidos e exibe as configurações de etiqueta na página.
* **Opções de embalagem:** opções de configuração para as embalagens que serão utilizadas no empacotamento. As opções são as seguintes:
  * **Unidades de medida**: opção de unidade de medida, sistema métrico ou imperial, para medir dimensões e peso da embalagem.
  * **Alterar peso total**: opção que exibe um modal no aplicativo do Pick and Pack para o separador informar o peso total do pacote. Caso desativado, o modal não é exibido e o processo de empacotamento é iniciado.
* **Embalagem personalizada**: opção que exibe no aplicativo do Pick and Pack um formulário para o separador informar as dimensões e o peso da embalagem personalizada.
* **Sem embalagem**: opção que permite o envio do pedido utilizando a própria embalagem dos itens.
  * **Usar dimensões e peso do SKU:** opção que usa as dimensões e o peso do SKU como dimensões e peso da embalagem. Caso o SKU não tenha essas informações cadastradas, o formulário para as dimensões e o peso da embalagem personalizada será exibido.
  * **Informe as dimensões/peso totais:** opção que permite o preenchimento de dimensões e peso do item.
* **Mostrar quantidade de pacotes**: opção que exibe a quantidade de pacotes na etiqueta impressa.
* **Mostrar código de barras/código QR do pacote**: opção que exibe um código de barras ou QR code gerado a partir das informações do campo **Código de barras/código QR**.
* **Mostrar informações do pedido**: opção que exibe dados do pedido na etiqueta impressa. No campo **Pedidos** selecione as informações que deseja exibir.
* **Mostrar informações do cliente**: opção que exibe dados do cliente na etiqueta impressa. No campo **Cliente** selecione as informações que deseja exibir.
* **Mostrar informações de envio**: opção que exibe dados do envio na etiqueta impressa. No campo **Envio** selecione as informações que deseja exibir.
* **Mostrar itens**: opção que exibe dados dos itens do pedido na etiqueta impressa. No campo **Itens** selecione as informações que deseja exibir.
* **Mostrar informações da separação**: opção que exibe dados da separação de itens na etiqueta impressa. No campo **Separação de pedidos** selecione as informações que deseja exibir.
* **Tamanho (cm)**: formato em que a nota será impressa, em centímetros.
* **Tamanho da fonte (px)**: tamanho da fonte em pixels que será utilizada na nota impressa.
* **Margem esquerda**: tamanho da margem esquerda da nota impressa, em centímetros.
* **Margem direita**: tamanho da margem direita da nota impressa, em centímetros.
* **Margem superior**: tamanho da margem superior da nota impressa, em centímetros.
* **Margem inferior**: tamanho da margem inferior da nota impressa, em centímetros.

Clique em `Salvar` para registrar as alterações feitas na aba.

#### Tipos de embalagem

![vtex-pick-and-pack-configuracoes_6](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_6.png)
A página é organizada da seguinte forma:

| Coluna       | Descrição                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| Nome         | Nome da embalagem                                                                         |
| Descrição  | Descrição com detalhes da embalagem                                                     |
| Código      | Código único da embalagem                                                               |
| Tamanho (cm) | Tamanho em centímetros da embalagem                                                      |
| Tipo         | Tipo da embalagem, podendo ser `Caixa`, `Sacola`, `Envelopes`, `Fita` e `Papel` |

Para criar um novo tipo de embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.
3. Clique no botão `Criar tipo de embalagem`.
4. Preencha os seguintes campos:
   * **Nome**: nome do tipo de embalagem.
   * **Tipo**: tipo da embalagem, podendo ser `Caixa`, `Sacola`, `Envelopes`, `Fita` e `Papel`.
   * **Descrição**: descrição com detalhes sobre a embalagem.
   * **Código**: código único da embalagem.
   * **Comprimento**: comprimento da embalagem em centímetros.
   * **Altura**: altura da embalagem em centímetros.
   * **Largura**: largura da embalagem em centímetros.
   * **Peso máximo**: peso máximo suportado pela embalagem.
5. Clique em `Salvar`.

Para editar um tipo de embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.
3. Clique no menu <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> do tipo de embalagem que deseja editar.
4. Clique em `Editar` <i class="fas fa-pencil" aria-hidden="true"></i>.
5. Edite as informações do tipo de embalagem.
6. Clique em `Salvar`.

Para duplicar um tipo de embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.
3. Clique no menu <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> do tipo de embalagem que deseja duplicar.
4. Clique em `Duplicar` <i class="fas fa-copy" aria-hidden="true"></i>.
5. Clique em `Confirmar`.

Para excluir um tipo de embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.
3. Clique no menu <i class="fas-solid fa-ellipsis-vertical" aria-hidden="true"></i> do tipo de embalagem que deseja excluir.
4. Clique em `Excluir` <i class="fas fa-trash" aria-hidden="true"></i>.
5. Clique em `Confirmar`.

## Itens

Nesta seção, você encontrará as configurações dos itens exibidos no aplicativo móvel do **VTEX Pick and Pack**.

### Geral

Nesta seção, você escolhe quais informações dos itens serão exibidas no aplicativo móvel e adiciona dados que ajudem o separador na localização do item.

![vtex-pick-and-pack-configuracoes_17](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_17.png)

* **Dados do cartão dos itens no aplicativo de separação de pedidos:** informações dos produtos que serão exibidas no cartão dos itens no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).
* **Ativar transferência de itens:** opção que permite entregar um item a partir de uma localização diferente da instalação especificada originalmente. Esta funcionalidade está em fase de testes e pode apresentar inconsistências durante o uso.
* **Ativar localização do item:** opção que atribui um código único a cada SKU para localizar os itens mais facilmente na loja ou no estoque. Para mais informações desta configuração, consulte a [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Códigos:** código de localização do item. Para mais informações desta configuração, consulte a [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Exemplo:** campo que permite visualizar como o código de localização será gerado. Para mais informações desta configuração, consulte a [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Separador:** símbolo que irá separar cada seção de informação do código de localização. Para mais informações desta configuração, consulte a [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Alocar marcas de produtos a:** seleção que indica o espaço (BIN, zona, seção ou corredor) que as marcas ocupam. Para mais informações desta configuração, consulte a [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Alocar categorias de produtos a:** seleção que indica o espaço (BIN, zona, seção ou corredor) que as categorias ocupam. Para mais informações desta configuração, consulte a [Pick and Pack Order changes API](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-api).
* **Ativar códigos de barras dinâmicos:** opção que, se ativada <i class="fas fa-toggle-on" aria-hidden="true"></i>, permite gerar EANs baseados no preço ou no peso do item.
* **Tipos de código de barras dinâmico:** seleção que determina se o código de barras dinâmico será baseado em preço, peso ou quantidade do item. Após selecionar o tipo de código, preencha os campos com os valores numéricos do código.

Os EANs dinâmicos baseados em preço e peso seguem os formatos a seguir:

| Tipo  | Formato                          | Conversão                                                        | Exemplo            |
| ----- | -------------------------------- | ---------------------------------------------------------------- | ------------------ |
| Preço | `Dígito-Item-Preço-Verificador` | O preço R$ 12,90 equivale aos dígitos `01290`.                  | `20-01234-01290-1` |
| Peso  | `Dígito-Item-Peso-Verificador`  | O peso de 200 gramas equivale aos dígitos `00200`.              | `20-01234-00200-1` |

### Categorias

Nesta seção, você organiza a hierarquia das categorias de produtos que será exibida no aplicativo móvel. Essa listagem é usada para ordenar itens na separação do aplicativo móvel Pick and Pack.

![vtex-pick-and-pack-configuracoes_13](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_13.png)

* **Todas as instalações**: seleção das instalações que terão as categorias disponíveis. Caso haja diferenças entre as instalações selecionadas, um alerta é exibido indicando que a nova configuração substituirá as já existentes.
* **Categorias disponíveis**: árvore de categorias completa do catálogo. Ao selecionar as instalações, carrega as categorias previamente salvas.

Para configurar as categorias disponíveis de uma instalação, siga os seguintes passos:

1. Clique em `Alterar instalações selecionadas` e selecione as instalações que deseja editar.
2. Na lista de categorias, selecione as que deseja incluir nas instalações. Você pode buscar pelo nome de uma categoria em até três níveis da árvore.
3. Para ordenar a listagem, clique no ícone de arrastar <i class="fas fa-grip-vertical" aria-hidden="true"></i> de uma categoria e arraste-a para a posição desejada.
4. Clique em `Salvar` para finalizar.

Para remover uma categoria selecionada, clique no ícone de exclusão <i class="fas fa-trash" aria-hidden="true"></i>.

Para exportar informações das categorias que serão exibidas no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet), siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Clique na aba **Categorias**.
3. Clique nas categorias que deseja exportar.
4. Após selecioná-las, clique em `Exportar`. Um arquivo CSV será baixado com as seguintes informações:

```csv
category_id,name,priority
6,Food,10
```

* `category_id:` ID da categoria.
* `name:` nome da categoria.
* `priority:` prioridade da categoria em relação à ordenação das categorias exibidas no aplicativo móvel.

Para importar informações das categorias selecionadas que serão exibidas no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet), siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Clique na aba **Categorias**.
3. Clique em `Importar`.
4. Selecione o arquivo CSV do seu computador. É necessário o arquivo CSV ter as colunas `category_id`, `name` e `priority`.
5. Confira se as informações estão corretas.
6. Clique em `Substituir`.

### Catálogo

Nesta aba, você atualiza em massa e indexa o catálogo disponível no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).

> ℹ️ Durante as primeiras configurações do Pick and Pack, faça primeiro a atualização em massa do catálogo e depois indexe-o.

> ⚠️ O catálogo do Pick and Pack é uma cópia do [catálogo da VTEX](/pt/docs/tutorials/catalogo-visao-geral). Alterações de produto, SKU, EAN, categoria, dimensões ou peso no catálogo da VTEX não são aplicadas automaticamente. Para deixar os dois catálogos iguais, acesse **Envio > Pick and Pack > Configurações > Itens > Catálogo** e clique em `Indexar catálogo`. Até essa sincronização, o aplicativo móvel e a separação usam o catálogo do Pick and Pack, que pode estar diferente do catálogo da VTEX.

![vtex-pick-and-pack-configuracoes_15](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_15.png)

A página é organizada da seguinte forma:

| Coluna      | Descrição                                                                                  |
| ---------- | ------------------------------------------------------------------------------------------- |
| Item        | Nome do produto                                                                              |
| ID          | ID do produto                                                                                |
| SKU         | ID do SKU                                                                                    |
| EAN         | Número do EAN                                                                               |
| Categorias  | Categorias às quais o produto pertence                                                       |
| Dimensões  | Dimensões em centímetros do produto                                                        |
| Peso        | Peso do produto                                                                              |
| Pesável    | Se o produto varia de peso, como frutas, ou tem peso fixo                                    |
| Temperatura | Temperatura de conservação do produto. Esta informação é exibida somente no Admin VTEX. |
| Ativo       | Se o produto está ativo ou não no catálogo do aplicativo móvel                           |

A atualização em massa edita campos do catálogo do Pick and Pack por meio de um arquivo CSV. Para trazer alterações feitas no catálogo da VTEX, use `Indexar catálogo`.

Para fazer uma edição em massa dos itens, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Itens**, clique na aba **Catálogo**.
3. Clique em `Atualização em massa`.
4. Clique em `Baixar template`.
5. Preencha o template com as informações dos itens.
6. Clique em `Escolher arquivo` e selecione o template editado com as novas informações.
7. Clique em `Continuar`.
8. Verifique se há algum erro no preenchimento do CSV e, caso tenha, corrija-o e envie o arquivo novamente.
9. Clique em `Continuar`.

Para editar as informações de um item, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Itens**, clique na aba **Catálogo**.
3. Clique no item que deseja editar.
4. Edite as informações do item:

   ![vtex-pick-and-pack-configuracoes_16](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_16.png)

   * Códigos EAN
   * Códigos SKU
   * Temperatura
5. Clique em `Salvar`.

Para sincronizar o catálogo do Pick and Pack com o catálogo da VTEX, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Itens**, clique na aba **Catálogo**.
3. Clique em `Indexar catálogo`.
4. Clique em `Continuar`.
5. Clique em `OK` para finalizar.

## Automação

Nesta seção, você encontrará as configurações de automação de processos do **VTEX Pick and Pack**. As automações são um mecanismo de regras orientado a eventos: você estabelece as condições e o sistema executa as ações automaticamente quando elas são satisfeitas. Essas regras podem ser aplicadas em pedidos, ordens de serviço e serviços de entrega.

### Ordens de serviço

Nesta aba, você pode configurar automações relacionadas a ordens de serviço.

![vtex-pick-and-pack-configuracoes_10](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_10.png)

Para criar uma nova automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Automação**, clique na aba **Ordens de serviço**.
3. Clique em `Novo`.
4. Preencha os campos abaixo:
   * **Ativo**: opção que ativa a automação de ordens de serviço.
   * **Nome da automação**: nome descritivo da automação.
   * **Quando ocorre**: condição que inicia a automação.
   * **Fazer**: consequência da automação.
5. Clique em `+ Adicionar outra ação` para implementar ações adicionais.
6. Clique em `Criar` para finalizar.

Para atualizar ou excluir uma automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Automação**, clique na aba **Ordens de serviço**.
3. Clique na automação que deseja editar.
4. Clique em `Atualizar` para salvar as atualizações ou clique em `Excluir` para excluir a automação.

### Pedidos

Nesta aba, você pode configurar automações relacionadas aos pedidos.

![vtex-pick-and-pack-configuracoes_11](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_11.png)

Para criar uma nova automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Automação**, clique na aba **Pedidos**.
3. Clique em `Novo`.
4. Preencha os campos abaixo:
   * **Ativo**: opção que ativa a automação de pedidos.
   * **Nome da automação**: nome descritivo da automação.
   * **Quando ocorre**: condição que inicia a automação.
   * **Fazer**: consequência da automação.
5. Clique em `+ Adicionar outra ação` para implementar ações adicionais.
6. Clique em `Criar` para finalizar.

Para atualizar ou excluir uma automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Automação**, clique na aba **Pedidos**.
3. Clique na automação que deseja editar.
4. Clique em `Atualizar` para salvar as atualizações ou clique em `Excluir` para excluir a automação.

### Serviços de envio

Nesta aba, você pode configurar automações relacionadas aos envios de pedidos.

![vtex-pick-and-pack-configuracoes_12](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_12.png)

Para criar uma nova automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Automação**, clique na aba **Serviços de envio**.
3. Clique em `Novo`.
4. Preencha os campos abaixo:
   * **Ativo**: opção que ativa a automação de envio.
   * **Nome da automação**: nome descritivo da automação.
   * **Quando ocorre**: condição que inicia a automação.
   * **Fazer**: consequência da automação.
5. Clique em `+ Adicionar outra ação` para implementar ações adicionais.
6. Clique em `Criar` para finalizar.

Para atualizar ou excluir uma automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Automação**, clique na aba **Serviços de envio**.
3. Clique na automação que deseja editar.
4. Clique em `Atualizar` para salvar as atualizações ou clique em `Excluir` para excluir a automação.

## Usuários

Nesta aba, você fará o gerenciamento dos separadores da sua operação VTEX Pick and Pack. Usuários com permissão **Separador** terão acesso apenas ao aplicativo do VTEX Pick and Pack.

![vtex-pick-and-pack-configuracoes_7](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_7.png)

Para criar um novo usuário, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Usuários**, clique na aba **Separadores**.
3. Clique em `Criar usuário`.
4. Preencha os campos do formulário:
   * **Nome de usuário**: nome de usuário do separador.
   * **Nome**: nome do separador.
   * **Email**: email de acesso do separador.
   * **Senha**: senha de acesso do separador.
5. Selecione a [instalação](#instalacoes) do separador.
6. Clique em `Criar usuário`.

Para editar ou excluir um usuário, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Usuários**, clique na aba **Separadores**.
3. Clique no separador que deseja editar ou excluir.
4. Edite as informações que deseja.
5. Clique em `Atualizar` para salvar as atualizações ou em `Excluir` para excluir o usuário.

### Acessar o VTEX Pick and Pack no Admin VTEX

Separadores criados nesta aba só podem acessar o aplicativo móvel. Usuários que precisam acompanhar a operação no Admin VTEX requerem [perfis de acesso](/pt/docs/tutorials/roles) e [recursos do License Manager](/pt/docs/tutorials/license-manager-resources), e não são gerenciados nesta aba.

Recomendamos criar um perfil de acesso dedicado à operação de fulfillment e atribuí-lo aos usuários responsáveis por ela. Para que esses usuários vejam a página [Insights](/pt/docs/tutorials/vtex-pick-and-pack-insights), o perfil deve incluir o recurso **Insights Metrics**, do produto **Insights**.

## Instalações

Uma instalação é o local em que a separação dos pedidos é feita, como uma loja física ou um centro de distribuição. Um [estoque](/pt/docs/tutorials/gerenciar-estoque) é o local logístico da VTEX em que os itens estão armazenados.

No Admin VTEX, acesse **Envio > Pick and Pack > Instalação** para vincular estoques a uma instalação. Uma instalação pode ter mais de um estoque.

> ⚠️ Pedidos só entram no Pick and Pack quando o estoque dos itens está vinculado a uma instalação. Um estoque sem instalação mantém esses pedidos fora do Pick and Pack, mesmo com a opção **Baixar pedidos do OMS** ativada. Se um pedido tiver itens de um estoque sem instalação, a automação que adiciona o pedido à ordem de serviço falha.

Os pedidos de todos os estoques vinculados à mesma instalação são processados nessa instalação. Ordens de serviço, o aplicativo móvel, a página [Insights](/pt/docs/tutorials/vtex-pick-and-pack-insights), a atribuição de separadores, as categorias e os webhooks filtrados por instalação usam essa instalação e, portanto, consideram todos os estoques vinculados a ela.

## Integração

Nesta seção, você irá configurar integrações com o [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).

### Webhook

Nesta aba, você pode configurar webhooks para o aplicativo móvel. O webhook funciona como um aviso automático que o Pick and Pack envia para uma URL sempre que há alguma alteração no fluxo, como o faturamento de um pedido ou mudança de status de uma ordem de serviço.

O sistema reúne as informações do evento, como o identificador do pedido, status atual e anterior, data e outros detalhes, e envia tudo para o endereço configurado. É possível também limitar o envio por [instalações](#instalacoes). Nesse caso, o webhook só dispara para eventos relacionados a essas unidades.

![pick-and-pack-webhook-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/webhook-pt.png)

Para criar um novo webhook, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Integração**, clique na aba **Webhook**.
3. Clique em `Novo`.
4. Preencha os campos do formulário:
   * **Ativo**: opção que ativa o webhook.
   * **Tipo**: método do webhook. Os tipos de eventos que podem gerar avisos:
     * `INVOICING`: faturamento do pedido.
     * `ORDER_STATUS`: mudança no status do pedido.
     * `WORKSHEET_STATUS`: mudança no status da ordem de serviço.
     * `RETURN_STATUS`: atualização no status da devolução.
   * **URL**: URL do webhook.
   * **Cabeçalhos**: cabeçalhos do webhook.
   * **Parâmetros**: parâmetros do webhook.
   * **Onde se aplicará (instalações)**: instalação que o webhook será aplicado.
5. Clique em `Criar`.

Para editar ou excluir um webhook, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações** ou digite **Configurações** na barra de busca.
2. Em **Integração**, clique na aba **Webhook**.
3. Clique no webhook que deseja alterar.
4. Edite as informações do webhook.
5. Clique em `Atualizar` para salvar as atualizações ou em `Excluir` para excluir o webhook.

### Chave de API

Nesta aba, você gera uma chave de API para utilizar os endpoints de autenticação por JSON Web Token (JWT) da [Pick and Pack API](https://developers.vtex.com/docs/api-reference/pick-and-pack-api#post-/token) e da [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api#post-/token).

![vtex-pick-and-pack-configuracoes_14](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_14.png)

Para gerar uma nova chave de API, clique em `Gerar`.
