---
title: 'VTEX Pick and Pack: Pedidos'
id: 3rGbJlyedHdbWjvZ52p95b
status: PUBLISHED
createdAt: 2023-12-14T17:26:02.135Z
updatedAt: 2026-06-26T00:00:00.000Z
publishedAt: 2024-01-05T17:31:16.218Z
firstPublishedAt: 2023-12-19T15:00:12.093Z
contentType: tutorial
productTeam: Shopping
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: vtex-pick-and-pack-orders
legacySlug: vtex-pick-and-pack-pedidos
locale: pt
subcategoryId: 7Kllu6CmeLNV3tYXlCFvOt
---

**Pedidos** é a página que exibe as informações dos pedidos criados e gerenciados pelo [VTEX Pick and Pack](https://help.vtex.com/pt/docs/tutorials/vtex-pick-and-pack). Para acessá-la, no Admin VTEX, vá em **Envio > Pick and Pack > Pedidos**. Nessa área, você pode realizar as seguintes ações:

* [Consultar pedido](#consultar-pedido)
* [Buscar pedido](#buscar-pedido)
* [Filtrar pedidos](#filtrar-pedido)

![pick-and-pack-pedidos-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_1.png)

A página apresenta as seguintes informações em uma tabela:

| Campo da tabela | Descrição                                                                             |
| --------------- | ------------------------------------------------------------------------------------- |
| Status          | Etapa do processo de fulfillment do pedido.            |
| ID do pedido    | Número identificador do pedido. Indica também a data de criação do pedido.            |
| Faturas         | Situação de fatura do pedido, com valores possíveis **Faturados** e **Não faturados**.        |
| Item(ns)        | Quantidade de itens que compõe o pedido.                                              |
| Envio           | Tipo de envio do pedido, com valores possíveis **Entrega ao cliente** e **Retirada na loja**. |
| Pagamento       | Meio de pagamento utilizado para realizar o pedido.                                   |
| Instalações     | Indica a loja ou centro de distribuição responsável pela separação e preparação do pedido.                                              |
| Tags            | Tags relacionadas à venda do pedido, como UTM ou cupons.                              |
| Prazo           | Prazo de entrega ou retirada do pedido.                                               |


## Consultar pedido

Você pode acessar informações mais detalhadas sobre cada pedido clicando no respectivo pedido na tabela.

![pick-and-pack-pedidos-2-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_2.png)

Ao selecionar o pedido desejado, você terá acesso às seguintes informações:

- **Resumo do pedido**: apresenta o ID, a sequência, o status atual, o tempo de preparação e a data prevista de entrega.
- **Itens**: lista de itens que compõem o pedido. Além disso, é possível clicar em **Ordem de serviço** para acessar informações mais detalhadas sobre ele.
Notas: exibe observações registradas no pedido.
- **Fluxo do pedido**: indica visualmente a etapa atual do processo de fulfillment dentro do VTEX Pick and Pack, que possui um fluxo operacional próprio, independente do workflow do pedido no Order Management System (OMS).
- **Pacote(s)**: apresenta as informações relacionadas aos volumes gerados para envio, quando aplicável. No canto superior da janela do pacote, clique em  (<i class="fas fa-ellipsis-v" aria-hidden="true"></i>) , nela é possível realizar as seguintes ações:

  - **Imprimir**: gera a etiqueta do pacote para o processo de envio.
  - **Definir localização**: permite associar uma localização física ao pacote para controle logístico. Ao selecionar essa opção, é exibida a tela de localização do pacote, na qual você pode:
    - Visualizar a **Instalação** responsável pelo pacote.
    - Informar ou escanear o **código de localização (BIN)** no campo disponível.
    - Clicar em `Escanear` para capturar o código utilizando um leitor.
    - Clicar em `Salvar` para registrar a localização do pacote.


## Buscar pedido

Você pode buscar um pedido utilizando a barra de busca. Para isso, digite o ID do pedido na barra de busca, por exemplo `SLR-1341470502250-01`.

## Filtrar pedido

Você pode refinar a busca e a visualização dos pedidos. Filtre os pedidos utilizando as seguintes opções:

* **Data de criação:** selecione a data de criação do pedido.
* **Data de entrega:** selecione a data de entrega.
* **Status do pedido:** selecione um ou mais status operacionais do pedido.
* **Categorias:** selecione a categoria que os itens do pedido estão contidos.
* **Meios de pagamento:** selecione o meio de pagamento utilizado no pedido.
* **Estratégia de envio:** selecione a estratégia de envio utilizada no pedido.
* **Tipo de envio:** selecione o tipo de envio utilizado no pedido.
* **Instalações**: selecione uma ou mais unidades responsáveis pelo processamento do pedido.

## Configurar remoção automática de pedidos faturados

Na seção **Configurações** do Pick and Pack, é possível definir o comportamento dos pedidos que mudam para Faturado no OMS após serem baixados para o aplicativo.

Com essa opção ativada, serão removidos automaticamente do aplicativo os pedidos que:
- Já foram baixados para o Pick and Pack.
- Ainda não foram processados.
- Mudarem para **Faturado** no OMS antes da etapa de manuseio.

Para configurar essa regra, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Pick and Pack > Configurações**, ou digite **Configurações** na barra de busca no topo da página.
2. Na aba **Pedidos**, clique em `Geral`.
3. Na seção **Se um pedido mudar para Faturado no OMS**, ative a opção **Remover do Pick and Pack**.
4. Clique em `Salvar`.


![pick-and-pack-pedidos-3-PT](https://cdn.statically.io/gh/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/envio/vtex-pick-and-pack/vtex-pick-and-pack-pedidos_3.png)