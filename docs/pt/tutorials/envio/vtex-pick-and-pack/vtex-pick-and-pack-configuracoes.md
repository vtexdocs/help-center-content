---
title: 'VTEX Pick and Pack: Configurações'
id: 16cs3e7hWk7c4cSZqe10O9
status: PUBLISHED
createdAt: 2024-01-05T20:43:38.480Z
updatedAt: 2025-11-13T00:00:00.000Z
publishedAt: 2024-01-09T18:30:22.578Z
firstPublishedAt: 2024-01-09T16:30:00.192Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-settings
legacySlug: vtex-pick-and-pack-configuracoes
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

> ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, preencha nosso [formulário](https://vtex.com/br-pt/contato/) apontando no campo Comentários o nome do produto desejado.

**Configurações** é uma página do Admin VTEX que permite selecionar as configurações desejadas para o funcionamento do VTEX Pick and Pack na sua loja. As configurações estão distribuídas nas seguintes abas:

* [Pedidos](#pedidos)
* [Ordens de serviço](#ordens-de-serviço)  
* [Itens](#itens)  
* [Automação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9?&utm_source=autocomplete#automacao)  
* [Usuários](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9?&utm_source=autocomplete#usuarios)  
* Integração

## Pedidos

Nesta aba, você encontrará configurações relacionadas aos pedidos processados pelo VTEX Pick and Pack.

![pick-and-pack-pedidos-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_1.png)

* **Baixar pedidos do OMS:** permite exportar pedidos do [módulo de Pedidos da VTEX](https://help.vtex.com/pt/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201).

| Os filtros abaixo são aplicados somente a novos pedidos que sejam feitos após a exportação e, se nenhum filtro for definido, todos os pedidos serão baixados. |
| :---- |

### Filtros

Veja abaixo os filtros disponíveis que determinam quais pedidos serão baixados:

* **Meios de pagamento:** meios de pagamento utilizados nos pedidos que serão exportados.
* **Métodos de envio:** métodos de envio utilizados nos pedidos que serão exportados.
* **Tipo de envio:** tipos de envio utilizados nos pedidos que serão exportados (SHIP\_FROM\_STORE, PICKUP\_IN\_STORE e DRIVE\_THRU).  
* **Tags de pedidos:** restringe os pedidos baixados que apresentem determinadas tags.  
* **Políticas comerciais:** [políticas comerciais](https://help.vtex.com/pt/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV) aplicadas nos pedidos que serão exportados.  
* **Enviar alterações ao OMS**: permite enviar as alterações \- substituições, rejeições ou ajustes \- realizadas nos pedidos manuseados para o [módulo de Pedidos da VTEX](https://help.vtex.com/pt/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201). Os pedidos precisam ter sua ordem de serviço finalizada e nenhuma pendência de separação ou empacotamento no OMS para serem válidos neste filtro.

Clique em Salvar para registrar as alterações feitas na aba.

### Ordens de serviço

Nesta seção, você pode definir as opções que serão aplicadas às [ordens de serviço](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-ordens-de-servico--7bUwvmTY6eOqxzhyMIIzvz) da sua loja. Uma ordem de serviço consiste em um único ou um conjunto de pedidos que serão processados pelo fluxo do Pick and Pack simultaneamente.

### Geral

![pick-and-pack-ordem-geral-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_2.png)

* **Pedido único:** opção que limita cada ordem de serviço a um único pedido.   
* **Pedido múltiplo:** opção que permite que uma ordem de serviço agrupe mais de um pedido.  
* **Tags de ordem de serviço**: tags personalizadas que ajudam na identificação das ordens de serviço. As tags podem ser visualizadas na tela de [ordens de serviço pendentes](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes) no aplicativo móvel do Pick and Pack.  
* **Permitir notas de ordem de serviço**: opção que habilita o separador [adicionar notas na ordem de serviço](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).  
* **Permitir chat de suporte**: opção que habilita o chat entre o separador e o lojista por meio do Admin VTEX.  
* **Habilitar lista de separação**: lista com informações necessárias da ordem de serviço para o separador realizar a separação dos itens. Essas informações podem ser impressas em formato de etiqueta.

#### Etiqueta

Aqui é definida as informações que serão exibidas na lista de separação, impressas e adicionadas ao pacote do pedido.

* **Tamanho (cm):** formato impresso da etiqueta.  
* **Tamanho da fonte (px):** tamanho da fonte que será impressa na etiqueta em pixels.  
* **Margem esquerda:** tamanho da margem esquerda da etiqueta em centímetros.  
* **Margem direita:** tamanho da margem direita da etiqueta em centímetros.  
* **Margem superior:** tamanho da margem superior da etiqueta em centímetros.  
* **Margem inferior:** tamanho da margem inferior da etiqueta em centímetros.  
* **Mostrar IDs dos pedidos:** opção que exibe os IDs dos pedidos na etiqueta.   
* **Separar itens por pedidos:** opção que permite gerar uma etiqueta por pedido.  
* **Mostrar informações do cliente:** opção que exibe as informações do cliente na etiqueta.  
* **Mostrar código de barras / qr dos pacotes:** opção que exibe o código de barras ou QR code na etiqueta.  
* **Código de barras / QR:** caso a opção **Mostrar código de barras / qr dos pacotes** estiver ativada, permite selecionar se o código de barras com o número do pedido, ou o número da ordem de serviço, ou ambos aparecerá na etiqueta.

Clique em Salvar para registrar as alterações feitas na aba.

### Separação

![pick-and-pack-ordem-separacao-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_3.png)  

* **Mostrar aba de informações do pedido:** opção que exibe a aba de informações do pedido dentro da ordem de serviço para o separador, tanto no [Admin VTEX](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-ordens-de-servico--7bUwvmTY6eOqxzhyMIIzvz) ou no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).  
* **Mostrar informações do cliente por pedido:** opção que exibe a aba de informações do cliente para o separador.  
* **Permitir observações nos itens**: opção que permite o separador [adicionar observações nos itens do pedido durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#ordens-de-servico-pendentes).

* **Solicitar confirmação para separar itens:** opção que habilita uma validação extra no aplicativo Pick and Pack para o separador confirmar a separação de um item do pedido.

* **Ativar fluxo de aprovações:** opção que obriga aprovações de algum administrador para a separação dos itens.

* **Permitir adicionar itens:** opção que permite o separador [adicionar novos itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#adicionar-novos-produtos-a-um-pedido).

* **Permitir substituição de itens:** opção que permite o separador [substituir itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens).

* **Motivos de substituição**: motivos de [substituição de itens](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#substituir-itens) que serão selecionados pelo separador no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Os motivos de substituição cadastrados não são traduzidos caso o separador escolha outro idioma no aplicativo móvel do Pick and Pack.

* **Permitir recusar itens:** opção que permite o separador [recusar itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens).

* **Motivos de recusa:** motivos de [recusa de itens](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#recusar-itens) que serão selecionados pelo separador no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Os motivos de recusa cadastrados não são traduzidos caso o separador escolha outro idioma no aplicativo móvel do Pick and Pack.

* **Permitir alterações no preço dos itens:** opção que permite o separador alterar o preço dos itens durante a separação.

* **Motivos de alteração de preços**:  motivos de alteração de preço que serão selecionados pelo separador no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet). Os motivos de alteração de preços cadastrados não são traduzidos caso o separador escolha outro idioma no aplicativo móvel do Pick and Pack.  
* **Número máximo de alterações de preço nos itens do pedido**: limites de alteração de preço de itens em um pedido. 100% é o valor máximo que pode ser adicionado ao preço original quando modificado e \-100% o valor mínimo, sendo calculado em cima do valor original do item.  
* **Permitir alterações na quantidade dos itens**: opção que permite o separador [alterar a quantidade dos itens durante a separação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#alterar-a-quantidade-de-um-produto).   
* **Número máximo de alterações na quantidade dos itens do pedido:** limites de alteração de quantidade de itens em um pedido. 100% é o valor máximo que pode ser adicionado à quantidade original quando modificada e \-100% o valor mínimo, sendo calculado em cima da quantidade original do item.  
* **Limitar alterações no valor total do pedido:** limites de alteração do valor total do pedido feitas pelo separador. 100% é o valor máximo que pode ser adicionado ao valor final do pedido quando modificado e \-100% o valor mínimo, sendo calculado em cima do valor original do pedido.  
* **Número máximo de alterações no pedido:** quantidade máxima de alterações (substituições, recusa e itens novos) que podem ser feitas em um pedido.

Clique em `Salvar` para registrar as alterações feitas na aba.

### Empacotamento

Nesta aba, você encontrará as configurações relacionadas à etapa de empacotamento de itens do pedido.

#### Geral

![pick-and-pack-ordem-empacotamento-geral-1-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_4.png)  
![pick-and-pack-ordem-empacotamento-geral-2-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_5.png)

* **Ativar o processo de empacotamento:** opção que habilita o [fluxo de empacotamento](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet#empacotamento) efetuado pelo separador.

* ### Ativar relatório de pacotes: opção que habilita exibir um relatório sobre os pacotes. Está opção está atualmente desabilitada para uso.

* ### Ativar etiquetas de empacotamento: opção que habilita gerar etiquetas para o empacotamento dos pedidos e exibe as configurações de etiqueta na página.

* **Opções de embalagem:** opções de configuração para as embalagens que serão utilizadas no empacotamento. As opções são as seguintes:  
  * **Unidades de medida**: opção de unidade de medida, sistema métrico ou imperial, para medir dimensões e peso da embalagem.  
  * **Alterar peso total**: opção que exibe um modal no aplicativo do Pick and Pack para o separador informar o peso total do pacote. Caso desativado, o modal não é exibido e o processo de empacotamento é iniciado.  
* **Embalagem personalizada**: opção que exibe no aplicativo do Pick and Pack um formulário para o separador informar as dimensões e o peso da embalagem personalizada.  
* **Sem embalagem**: opção que permite o envio do pedido utilizando a própria embalagem dos itens.   
  * **Usar dimensões e peso do SKU:** opção que define que as dimensões e peso do SKU serão utilizadas para definir as dimensões e peso da embalagem. Caso o SKU não tenha essas informações cadastradas, o formulário para as dimensões e o peso da embalagem personalizada será exibido.  
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

Clique em Salvar para registrar as alterações feitas na aba.

#### Tipos de embalagem

![pick-and-pack-embalagem-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_6.png)  
A página é organizada da seguinte forma:

| Coluna | Descrição |
| :---- | :---- |
| Nome | Nome da embalagem. |
| Descrição | Descrição com detalhes da embalagem. |
| Código | Código único da embalagem. |
| Tamanho (cm) | Tamanho em centímetros da embalagem. |
| Tipo | Tipo da embalagem, podendo ser Caixa, Sacola, Envelopes, Fita e Papel. |

Para criar um novo tipo de embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.  
3. Clique no botão Criar tipo de embalagem.  
4. Preencha os seguintes campos:  
   * **Nome**: nome do tipo de embalagem.  
   * **Tipo**: tipo da embalagem, podendo ser Caixa, Sacola, Envelopes, Fita e Papel.  
   * **Descrição**: descrição com detalhes sobre a embalagem.  
   * **Código**: código único da embalagem.  
   * **Comprimento**: comprimento da embalagem em centímetros.  
   * **Altura**: altura da embalagem em centímetros.  
   * **Largura**: largura da embalagem em centímetros.  
   * **Peso máximo**: peso máximo que a embalagem.   
5. Clique em Salvar. 

Para editar um novo tipo de embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.  
3. Clique em \<i class="fas-solid fa-ellipsis-vertical"\>\</i\>  do tipo de embalagem que deseje editar.  
4. Clique em \<i class="fas fa-pencil"\>\</i\> Editar.  
5. Edite as informações do tipo de embalagem.  
6. Clique em Salvar. 

Para duplicar um novo tipo de embalagem, siga os passos abaixo:

* No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
* Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.  
* Clique em \<i class="fas-solid fa-ellipsis-vertical"\>\</i\>  do tipo de embalagem que deseje duplicar.  
* Clique em \<i class="fas fa-copy"\>\</i\> Duplicar.  
* Clique em Confirmar.

Para excluir um novo tipo de embalagem, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Clique na aba **Empacotamento** e, em seguida, na aba **Tipos de embalagem**.  
3. Clique em \<i class="fas-solid fa-ellipsis-vertical"\>\</i\>  do tipo de embalagem que deseje excluir.  
4. Clique em \<i class="fas fa-trash"\>\</i\> Excluir.  
5. Clique m Confirmar. 

## Itens {#itens}

Nesta seção, você encontrará as configurações dos itens do exibidos no aplicativo móvel do  **VTEX Pick and Pack**.

### Geral

Nesta seção, você vai definir quais informações dos itens serão exibidas no aplicativo móvel e adicionar dados adicionais que ajudem o separador na localização do item. 

![]()  
![]()

* **Dados do cartão dos itens no aplicativo de separação de pedidos:** informações dos produtos que serão exibidas no cartão dos itens no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).  
* **Ativar transferência de itens:** opção que permite entregar um item a partir de uma localização diferente da instalação especificada originalmente.  
* **Ativar localização do item:** opção que atribui um código único a cada SKU para localizar os itens mais facilmente na loja ou no estoque. Para mais informações desta configuração, cheque a [Pick and Pack Order changes API.](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-)  
* **Códigos:** código de localização do item. Para mais informações desta configuração, cheque a [Pick and Pack Order changes API.](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-)  
* **Exemplo:** campo que permite visualizar como o código de localização será gerado. Para mais informações desta configuração, cheque a [Pick and Pack Order changes API.](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-)  
* **Separador:** símbolo que irá separar cada seção de informação do código de localização. Para mais informações desta configuração, cheque a [Pick and Pack Order changes API.](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-)  
* **Alocar marcas de produtos a:** seleção que define qual espaço (BIN, zona, seção ou corredor) que marcas irão ocupar. Para mais informações desta configuração, cheque a [Pick and Pack Order changes API.](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-)  
* **Alocar categorias de produtos a:** seleção que define qual espaço (BIN, zona, seção ou corredor) que categorias irá ocupar. Para mais informações desta configuração, cheque a [Pick and Pack Order changes API.](https://developers.vtex.com/docs/api-reference/pick-and-pack-order-changes-)  
* **Ativar códigos de barras dinâmicos:** opção que, se ativada \<i class="fas fa-toggle-on"\>\</i\>, permite gerar EANs baseados em:


| Preço | Peso |
| :---- | :---- |
| Formato: Dígito-Item-Preço-Verificador Os dígitos para o preço são convertidos da seguinte forma: o preço R$12,90 equivale aos dígitos 01290. Exemplo: 20-01234-01290-1 | Formato: Dígito-Item-Peso-Verificador Os dígitos para o peso são convertidos da seguinte forma: o peso de 200 gramas equivale aos dígitos 00200. Exemplo: 20-01234-00200-1 |


* **Tipos de código de barras dinâmico:** seleção que define se o código de barras dinâmico será baseado em preço, peso ou quantidade do item. Após selecionar o tipo de código, preencha os campos com os valores numéricos do código.

### Categorias

Nesta seção, você definirá a hierarquia das categorias de produtos que será exibida no aplicativo móvel. A listagem definida é usada para ordenar itens na separação do aplicativo móvel Pick and Pack.

![]()

* **Todas as instalações**: seleção para definir as instalações que terão as categorias disponíveis. Caso haja diferenças entre as instalações selecionadas, um alerta é exibido indicando que a nova configuração substituirá as já existentes.  
* **Categorias disponíveis**: árvore de categorias completa do catálogo. Ao selecionar as instalações, carrega as categorias previamente salvas.

Para definir as categorias disponíveis de uma instalação, siga os seguintes passos:

1. Clique em Alterar instalações selecionadas selecione as instalações que deseja editar.  
2. Clique na lista de categorias, as que deseja incluir nas instalações. Você pode buscar pelo nome de uma categoria em até três níveis da árvore.  
3. Clique em \<i class="fas fa-grip-vertical"\>\</i\> e arraste uma categoria para ordenar a listagem como deseja.  
4. Clique em Salvar para finalizar.

Para remover uma categoria selecionada, clique em \<i class="fas fa-trash"\>\</i\>.

Para exportar informações das categorias que serão exibidas no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet), siga os seguintes passos:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Clique na aba **Categorias**.  
3. Clique nas categorias que deseja exportar.  
4. Após selecioná-las, clique em \`Exportar\`. Um arquivo CSV será baixado com as seguintes informações:

```css
category_id,name,priority
6,Food,10
```

* `category_id:` ID da categoria.  
* `name:` Nome da categoria.  
* `priority:` Prioridade da categoria em relação à ordenação das categorias exibidas no aplicativo móvel.

Para importar informações das categorias selecionadas que serão exibidas no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet), siga os seguintes passos:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Clique na aba **Categorias**.  
3. Clique em \`Importar\`.  
4. Selecione o arquivo CSV do seu computador. É necessário o arquivo CSV ter as colunas `category_id`, `name` e `priority`.  
5. Confira se as informações estão corretas.  
6. Clique em \`Substituir\`.

### Catálogo

Nesta aba, será possível atualizar em massa e indexar o catálogo que estará disponível no [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).

| Durante as primeiras configurações do Pick and Pack é necessário primeiro realizar a atualização em massa do catálogo e depois indexá-lo. |
| :---- |

![]()  
A página é organizada da seguinte forma:

| Coluna | Descrição |
| :---- | :---- |
| Item | Nome do produto. |
| ID | ID do produto. |
| SKU | ID do SKU. |
| EAN | Número do EAN. |
| Categorias | Categorias que o produto pertence. |
| Dimensões | Dimensões em centímetros do produto. |
| Peso | Peso do produto. |
| Pesável | Se o produto varia de peso, como frutas, ou tem peso fixo. |
| Temperatura | Temperatura de conservação do produto. Esta informação é exibida somente no Admin VTEX. |
| Ativo | Se o produto está ativo no catálogo do aplicativo móvel ou não. |

Para fazer uma edição em massa dos itens, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Itens**, clique na aba **Catálogo**.  
3. Clique em \`Atualização em massa\`.  
4. Clique em \`Baixar template\`.  
5. Preencha o template com as informações dos itens.  
6. Clique em \`Choose file\` e selecione o template editado com as novas informações.  
7. Clique em \`Continuar\`.  
8. Verifique se há algum erro no preenchimento do CSV e, caso tenha, corrige-o e envie o arquivo novamente.  
9. Clique em \`Continuar\`.

Para editar as informações de um item, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Itens**, clique na aba **Catálogo**.  
3. Clique no item que deseja editar.  
4. Edite as informações do item:

   ![]()

* Códigos EAN  
* Códigos SKU  
* Temperatura  
5. Clique em \`Salvar\`.

   

Para indexar as atualizações realizadas nos itens, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Itens**, clique na aba **Catálogo**.  
3. Clique em \`Indexar catálogo\`.  
4. Clique em \`Continuar\`.  
5. Clique em \`OK\` para finalizar.

## [Automação](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9?&utm_source=autocomplete#automacao)

Nesta seção, você encontrará as configurações de automação de processos do VTEX Pick and Pack. As automações são um mecanismo de regras orientado a eventos: são definidas condições e o sistema executa ações automaticamente quando elas são satisfeitas. Essas regras podem ser aplicadas em pedidos, ordens de serviço e serviços de entrega.

### Ordens de serviço

Nesta aba, você pode configurar automações relacionadas a ordens de serviço.

![]()

Para criar uma nova automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Automação**, clique na aba **Ordens de serviço**.  
3. Clique em Novo.  
4. Preencha os campos abaixo:

   ![]()

   * **Ativo**: opção que ativa a automação de ordens de serviço.  
   * **Nome da automação**: nome descritivo da automação.  
   * **Quando ocorre**: condição que inicia a automação.  
   * **Fazer**: consequência da automação.  
5. Clique em \`+ Adicionar outra ação\` para implementar ações adicionais.  
6. Clique em Criar para finalizar.

Para atualizar ou deletar uma automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Automação**, clique na aba **Ordens de serviço**.  
3. Clique na automação que deseja editar.  
4. Clique em \`Atualizar\` para salvar as atualizações ou clique em \`Excluir\` para deletar a automação.

### Pedidos

Nesta aba, você pode configurar automações relacionadas aos pedidos.

![]()

Para criar uma nova automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Automação**, clique na aba **Pedidos**.  
3. Clique em Novo.  
4. Preencha os campos abaixo:

   ![]()

   * **Ativo**: opção que ativa a automação de pedidos.  
   * **Nome da automação**: nome descritivo da automação.  
   * **Quando ocorre**: condição que inicia a automação.  
   * **Fazer**: consequência da automação.  
5. Clique em \`+ Adicionar outra ação\` para implementar ações adicionais.  
6. Clique em Criar para finalizar.

Para atualizar ou deletar uma automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Automação**, clique na aba **Pedidos**.  
3. Clique na automação que deseja editar.  
4. Clique em \`Atualizar\` para salvar as atualizações ou clique em \`Excluir\` para deletar a automação.

### Serviços de envio

Nesta aba, você pode configurar automações relacionadas aos envios de pedidos.

![]()

Para criar uma nova automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Automação**, clique na aba **Serviços de envio**.  
3. Clique em Novo.  
4. Preencha os campos abaixo:

   ![]()

   * **Ativo**: opção que ativa a automação de envio.  
   * **Nome da automação**: nome descritivo da automação.  
   * **Quando ocorre**: condição que inicia a automação.  
   * **Fazer**: consequência da automação.  
5. Clique em \`+ Adicionar outra ação\` para implementar ações adicionais.  
6. Clique em Criar para finalizar.

Para atualizar ou deletar uma automação, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Automação**, clique na aba **Envios**.  
3. Clique na automação que deseja editar.  
4. Clique em \`Atualizar\` para salvar as atualizações ou clique em \`Excluir\` para deletar a automação.

## [Usuários](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-settings--16cs3e7hWk7c4cSZqe10O9?&utm_source=autocomplete#usuarios)

Nesta aba, você fará o gerenciamento dos separadores da sua operação VTEX Pick and Pack. Usuários com permissão **Separador** terão acesso apenas ao aplicativo do VTEX Pick and Pack.

![pick-and-pack-usuarios-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_7.png)

Para criar um novo usuário, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Usuários**, clique na aba **Separadores**.  
3. Clique em \`Criar usuário\`.  
4. Preencha os campos do formulário:  
   * Username: nome de usuário do separador.  
   * Name: nome do separador.  
   * Email: email de acesso do separador.  
   * Password: senha de acesso do separador.  
5. Selecione a instalação que o separador está localizado.  
6. Clique em \`Criar usuário\`.

Para editar ou deletar usuário, siga os seguintes passos:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Usuários**, clique na aba **Separadores**.  
3. Clique no separador que deseja editar ou deletar.  
4. Edite as informações que deseja.  
5. Clique em \`Atualizar\` para salvar as atualizações ou em \`Excluir\` para deletar o usuário.

## Integração

Nesta seção, você irá configurar integrações com o [aplicativo móvel do Pick and Pack](https://help.vtex.com/pt/tutorial/vtex-pick-and-pack-mobile--3i1K01CQlDBFYYp42WFOet).

### Webhook

Nesta aba, você pode configurar webhooks para o aplicativo móvel. O Webhook funciona como um aviso automático que o Pick and Pack envia para uma URL sempre que há alguma alteração no fluxo, como o faturamento de um pedido ou mudança de status de uma ordem de serviço.

Os tipos de eventos que podem gerar avisos:

* INVOICING: faturamento do pedido.  
* ORDER\_STATUS: mudança no status do pedido.  
* WORKSHEET\_STATUS: mudança no status da ordem de serviço.  
* RETURN\_STATUS: atualização no status da devolução.

O sistema reúne as informações do evento — como o identificador do pedido, status atual e anterior, data e outros detalhes — e envia tudo para o endereço configurado. É possível também limitar o envio por instalações. Nesse caso, o Webhook só dispara para eventos relacionados a essas unidades.

![pick-and-pack-webhook-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_8.png)

Para criar um novo webhook, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Integração**, clique na aba **Webhook**.  
3. Clique em \`Novo\`.  
4. Preencha os campos do formulário:  
   * **Ativo**: opção que ativa o webhook.  
   * **Tipo**: método do webhook.  
   * **URL**: URL do webhook.  
   * **Cabeçalhos**: cabeçalhos do webhook.  
   * **Parâmetros**: parâmetros do webhook.  
   * **Onde se aplicará (instalações)**: instalação que o webhook será aplicado.  
5. Clique em \`Criar\`.

Para editar ou deletar webhook, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio \> Pick and Pack \> Configurações**, ou busque por **Configurações** na barra de busca.  
2. Em **Integração**, clique na aba **Webhook**.  
3. Clique no webhook que deseja alterar.  
4. Edite as informações do webhook.  
5. Clique em \`Atualizar\` para salvar as atualizações ou em \`Excluir\` para deletar o webhook.

### Chave de API

Nesta aba, você gera uma chave de API para utilizar os endpoints de autenticação por JWT da [Pick and Pack API](https://developers.vtex.com/docs/api-reference/pick-and-pack-api#post-/token) e da [Pick and Pack Last Mile Protocol API](https://developers.vtex.com/docs/api-reference/pick-and-pack-protocol-api#post-/token) .  

![pick-and-pack-chave-api-pt](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-configuracoes_9.png)  
Para gerar uma nova chave de API, clique em \`Gerar\`.
