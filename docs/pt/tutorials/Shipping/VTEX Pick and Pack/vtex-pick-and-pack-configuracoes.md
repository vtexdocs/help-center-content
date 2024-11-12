---
title: 'VTEX Pick and Pack: Configurações'
id: 16cs3e7hWk7c4cSZqe10O9
status: PUBLISHED
createdAt: 2024-01-05T20:43:38.480Z
updatedAt: 2024-01-09T18:30:22.578Z
publishedAt: 2024-01-09T18:30:22.578Z
firstPublishedAt: 2024-01-09T16:30:00.192Z
contentType: tutorial
productTeam: Post-purchase
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-settings
locale: pt
legacySlug: vtex-pick-and-pack-configuracoes
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

>ℹ️ Essa funcionalidade está na fase Beta fechado, o que significa que somente clientes selecionados têm acesso a ela no momento. Caso tenha interesse em implementá-la futuramente, preencha nosso [formulário](https://vtex.com/br-pt/contato/) apontando no campo `Comentários` o nome do produto desejado.

**Configurações** é uma página do Admin VTEX que permite selecionar as configurações desejadas para o funcionamento do VTEX Pick and Pack na sua loja. As configurações estão distribuídas nas seguintes abas:

* [Separação](#separacao)
* [Categorias](#categorias)
* [Empacotamento](#empacotamento)
* [Pedidos](#pedidos)
* [Automação](#automacao)
* [Usuários](#usuarios)
* [Catálogo](#catalogo)
* [Instalações](#instalacoes)

## Separação

Nesta aba, você encontrará as configurações relacionadas à etapa de separação de itens do pedido. Nela você consegue definir ações que o separador pode realizar durante o processo de separação, incluindo informar que um item do pedido não estava disponível e sugerir uma substituição.

![pick-and-pack-separacao-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

### Estratégia de separação

Nesta seção, você pode definir o tipo de estratégia de separação que deseja para os seus separadores.

>ℹ️ Apenas a estratégia **Separação por ondas** está disponível no momento.

### Alterações no pedido

Nesta seção, você pode definir ações sobre a alteração de um pedido, por falta de itens, por exemplo.

* **Enviar alterações para o OMS:** permite enviar as alterações feitas pelo separador para o [OMS](https://help.vtex.com/pt/tutorial/gerenciamento-de-pedidos-visao-geral--tutorials_201#) da VTEX. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir alterar os preços dos itens:** permite o separador alterar os preços dos itens de um pedido. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir substituição de itens:** permite o separador substituir itens do pedido que estavam indisponíveis. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir recusar itens:** permite o separador a recusar itens do pedido que estejam indisponíveis. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir alterar a quantidade dos itens:** permite o separador alterar a quantidade de itens do pedido. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir adicionar observações nos pedidos:** permite o separador adicionar observações nos pedidos, como indicando motivo de alteração de preço, por exemplo. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir adicionar observações nos itens:** permite o separador adicionar observações nos itens, como indicando motivo de recusa de um item, por exemplo. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Motivos de recusa:** indica as opções que o separador poderá selecionar como motivo de recusa de itens do pedido. Você pode inserir quantas opções desejar.
* **Motivos de alteração de preços:** indica as opções que o separador poderá selecionar como motivo de alteração de preço de itens do pedido. Você pode inserir quantas opções desejar.
* **Limite de alterações da quantidade de itens dos pedidos:** porcentagem que limita quantos itens podem sofrer alterações em relação à quantidade em cada pedido. 
* **Limite de alterações de preço dos itens dos pedidos:** porcentagem que limita quantos itens podem sofrer alterações em relação ao preço em cada pedido. 
* **Limite total de alterações nos pedidos:** porcentagem que limita a quantidade total de pedidos que podem sofrer alterações. 

### Ordens de serviço

Nesta seção, você pode definir as opções que serão aplicadas às ordens de serviço da sua loja. 

* **Permitir vários pedidos em uma ordem de serviço:** permite adicionar vários pedidos a uma ordem de serviço. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Ativar separação rápida:** permite ativar a separação rápida, realizando a confirmação automática da quantidade e do preço dos produtos, evitando a necessidade da confirmação manual pelo seletor. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Ativar express fulfillment:** ativa a opção de express fulfillment, que permite a separação e o empacotamento do pedido simultaneamente. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir mover os pedidos após a separação ter sido iniciada:** permite editar as ordens de serviço, mesmo depois do processo de separação ter sido iniciado. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir mover pedidos entre ordens de serviço:** permite editar as ordens de serviço, movendo os pedidos adicionados entre elas. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Tags de ordem de serviço:** permite adicionar tags customizadas a fim de automatizar o processo de separação dos pedidos.
* **Ativar códigos EAN dinâmicos:** permite ativar código de barras dinâmicos, os quais podem ser alterados dependendo das características do produto, como peso. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.

### Apresentação

Você pode habilitar o processo de configuração do aplicativo do VTEX Pick and Pack por meio dos passos abaixo:

1. Clique em `Apresentação`.
2. Clique em `Início`.
3. Selecione as opções que serão definidas para o aplicativo. Estas configurações só serão aplicadas na conta principal.
4. Clique em `Próximo`.
5. Selecione as ordens de serviço que serão gerenciadas no aplicativo e o número de separadores que devem ser criados.
6. Clique em `Próximo`.
7. Ative <i class="fas fa-toggle-on"></i> os vendedores aos quais deseja aplicar as configurações.
8. Clique em `Concluído`.
9. Clique em `Fechar`, para finalizar.

Clique em `Salvar` para registrar as alterações feitas na aba.

## Categorias

Nesta aba, você pode configurar a ordem das categorias em que os pedidos serão separados. Dessa forma, o separador consegue organizar o fluxo de coleta dos produtos para a montagem dos pedidos com eficiência.

![pick-pack-categorias-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

* **Configuração rápida:** habilita as configurações em todas as instalações. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Instalação**: determina qual a instalação terá as configurações de categorias aplicadas.

Para adicionar uma categoria na lista, clique na categoria desejada. Para reordenar, arraste a categoria na lista para a posição desejada.

Você pode importar um arquivo CSV ou exportar a lista que já está configurada.

## Empacotamento

Nesta aba, você encontrará as configurações relacionadas à etapa de empacotamento de itens do pedido. 

![pick-pack-empacotamento-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

* **Permitir relatório de pacotes:** habilita a exibição de relatório de pacotes. O relatório será exibido  na tela de **Pedidos**. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.
* **Permitir empacotamento automático:** habilita o empacotamento automático. Você pode ativar <i class="fas fa-toggle-on"></i> ou desativar <i class="fas fa-toggle-off"></i> a opção.

### Configuração de impressão das etiquetas dos pacotes

Nesta seção, você irá configurar as características da etiqueta que será colada ao pacote do pedido. Veja abaixo as características disponíveis: 

* **Configuração de impressão das etiquetas dos pacotes ativa:** ativa ou desativa a possibilidade de editar as características das etiquetas.
* **Formato:** determina o formato da etiqueta.
* **Tamanho da fonte (px):** determina o tamanho da fonte que será impressa na etiqueta, em pixels.

#### Margens

* **Esquerda:** tamanho da margem esquerda da etiqueta em milímetros.
* **Direita:** tamanho da margem direita da etiqueta em milímetros.
* **Superior:** tamanho da margem superior da etiqueta em milímetros.
* **Inferior:** tamanho da margem inferior da etiqueta em milímetros.

#### Dimensões

* **Largura:** largura da etiqueta em milímetros.
* **Altura:** altura da etiqueta em milímetros.

### Configuração de impressão de recibos

Nesta seção, você irá configurar as características da impressão de recibos dos pedidos. Veja abaixo as características disponíveis: 

* **Configuração de impressão de recibos ativa:** ativa ou desativa a possibilidade de editar as características do recibo.
* **Formato:** determina o formato do recibo.
* **Tamanho da fonte (px):** determina o tamanho da fonte que será impressa no recibo, em pixels.

#### Margens

* **Esquerda:** tamanho da margem esquerda do recibo.
* **Direita:** tamanho da margem direita do recibo.
* **Superior:** tamanho da margem superior do recibo.
* **Inferior:** tamanho da margem inferior do recibo.

#### Dimensões

* **Largura:** largura do recibo.
* **Altura:** altura do recibo.

### Envelopes

Nesta seção, você deve cadastrar os tipos de envelopes que serão utilizados pela sua loja para realizar o empacotamento e envio dos pedidos. Para cadastrar um novo envelope, siga os seguintes passos:

1. Clique em `Criar`.
2. Preencha o formulário abaixo:
   * **Nome:** nome que irá identificar o envelope.
   * **Tipo:** tipo do envelope. Os tipos possíveis de envelopes são **Caixa, Sacola, Envelopes, Fita, Papel, Outros**.
   * **Descrição:** descrição do envelope para uso interno.
   * **Código:** código identificador do envelope.
   * **Peso cúbico:** [peso cúbico](https://help.vtex.com/pt/tutorial/como-o-peso-cubado-e-calculado--tutorials_128) do envelope. 
   * **Altura:** altura do envelope em milímetros. 
   * **Comprimento:** comprimento do envelope em milímetros.
   * **Peso:** peso do envelope em milímetros.
   * **Largura:** peso do envelope em milímetros.
3. Clique em `Salvar` para finalizar.

Clique em `Salvar` para registrar as alterações feitas na aba.

## Pedidos

Nesta aba, você encontrará configurações relacionadas aos pedidos processados pelo VTEX Pick and Pack.

![pick-pack-config-pedidos-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

* **Baixar pedidos do OMS:** permite exportar pedidos do OMS.
* **Meios de pagamento:** meios de pagamento utilizados nos pedidos que serão exportados.
* **Métodos de envio:** métodos de envio utilizados nos pedidos que serão exportados.
* **Tipo de envio:** tipos de envio utilizados nos pedidos que serão exportados.
* **Tags de pedidos:** tags utilizadas nos pedidos que serão exportados.

Clique em `Salvar` para registrar as alterações feitas na aba.

## Automação

Nesta aba, você encontrará as configurações de automação de processos do VTEX Pick and Pack.

![pick-pack-automacao-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

Para criar uma nova automação, siga os passos abaixo:

1. Clique em `Criar`.
2. Preencha o campo **Nome** com o nome da automação e **Automação para** com a opção que deseja automatizar.
3. Clique em `Salvar` para finalizar.

## Usuários

Nesta aba, você fará o gerenciamento dos usuários, admins e separadores, da sua operação VTEX Pick and Pack. Usuários com permissão **Admin** terão acesso ao Admin VTEX e poderão realizar alterações na ferramenta. Usuários com permissão **Separador** terão acesso apenas ao aplicativo do VTEX PIck and Pack. 

![pick-pack-usuarios-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

Para criar um novo usuário, siga os seguintes passos:

1. Clique em `Criar`.
2. Selecione o tipo de permissão que deseja para o seu novo usuário: **Admin** ou **Separador**.
3. Realize o cadastro de acordo com a permissão desejada: 
     * Permissão **Admin**
        1. Selecione o usuário listado que deseja cadastrar como **Admin**.
        2. Clique em `Criar`.
![pick-pack-usuarios-2-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)
     * Permissão **Separador**
        1.  Preencha o formulário com as seguintes informações:
           * Nome de usuário
           * Nome
           * Email (campo obrigatório)
           * Senha (campo obrigatório)
           * Instalações
           * Permitir o envio de pacotes
           * Categorias
        2. Clique em `Criar`.
        ![pick-pack-usuarios-3-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)

## Catálogo

Nesta aba, você terá acesso às informações dos itens dos pedidos que estão na etapa de entrega para o cliente.

![pick-pack-catalogo-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)

A página apresenta as seguintes informações em uma tabela: 

| Campos da coluna | Descrição                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Item             | Nome do produto.                                                                                                            |
| ID do produto    | Número identificador do produto.                                                                                            |
| SKU              | Número identificador do SKU do produto.                                                                                     |
| EAN              | Número EAN do produto.                                                                                                      |
| Categorias       | Categorias em que o produto está cadastrado.                                                                                |
| Dimensões        | Dimensões do produto.                                                                                                       |
| Peso             | Peso do produto.                                                                                                            |
| Pesável          | Produtos que precisam ser pesados para fornecer sua unidade de medida em quilogramas ou gramas, dependendo da configuração. |
| Temperatura      | Produtos que devem ser armazenados em uma temperatura mínima para evitar deterioração.                                      |
| Ativo            | Se o produto está disponível para os clientes ou não.                                                                       |

Você pode adicionar SKU IDs e EANs dos seus produtos em massa, por meio de um arquivo CSV. Para isso, siga os passos abaixo:

1. Clique no botão `Carregar códigos SKU/EAN em massa`.
2. Adicione o arquivo que deseja fazer upload.
3. Clique em `Continuar`.

Você também pode indexar o catálogo para atualizar a listagem de produtos. Para isso, clique em `Indexar catálogo` e depois em `Continuar`.

>❗ A indexação do catálogo irá apagar e recriar todo o conteúdo dele, o que significa que você poderá perder todos os códigos EAN e SKU personalizados.

## Instalações

Nesta aba, você terá acesso ao cadastro e consulta das instalações da sua loja.

![pick-pack-instalacoes-pt](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)

Para criar uma nova instalação, siga os seguintes passos:

1. Clique em `Criar`.
2. Preencha o formulário com as informações de localização da sua instalação. É obrigatório preencher os campos **Rua**, **Cidade** e **Estado**.
3. Clique em `Salvar` para finalizar.
