---
title: Lista de cupons
id: 5z5ya3IonsC2W4B5h4JrsZ
status: PUBLISHED
createdAt: 2022-04-28T20:47:44.779Z
updatedAt: 2023-04-20T19:11:14.509Z
publishedAt: 2023-04-20T19:11:14.509Z
firstPublishedAt: 2022-04-28T21:03:11.698Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 1malnhMX0vPThsaJaZMYm2
slug: lista-de-cupons-beta
legacySlug: lista-de-cupons-beta
subcategory: 1TXh7VjDSIGA2eSI0CmUsi
---

A página **Cupons** possibilita que você visualize todos os [cupons](https://help.vtex.com/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL) cadastrados na sua loja, gerencie seus respectivos dados e analise quantas vezes e em quais pedidos eles foram utilizados.

A partir desta página, você pode:

* Buscar cupons.
* Exportar cupons.
* Visualizar dados de uso dos cupons.
* Filtrar cupons.
* Visualizar a lista de cupons ativos.
* Acessar a lista de cupons arquivados.
* Criar cupons.
* Editar cupons.
* Arquivar cupons.

Para acessá-la no Admin VTEX, clique em **Promoções > Cupons**.

![lista-cupons](https://images.ctfassets.net/alneenqid6w5/3KpOX5OW4oM5dBUNxkc0YP/74d61d0b59d9b69728c62b5e1dc5bae7/screencapture-coupons-pricingqa-myvtex-admin-coupons-2022-04-28-18_42_26.png)

A seguir, confira a descrição dos componentes e ações incluídos na página.

## Barra superior

A barra superior da página de **Cupons** apresenta uma barra de busca, filtros e botões para exportar cupons, ver dados de uso de cupons e acessar a lista de cupons arquivados. Veja mais detalhes sobre cada uma dessas possibilidades nas seções a seguir.

### Buscar cupons

É possível encontrar cupons específicos utilizando a barra de busca. Ela permite buscar pelo código do cupom, pela [UTM source](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) ou pela [UTM campaign](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii).

### Filtrar cupons

Você pode utilizar os filtros para visualizar apenas os cupons que atendem a critérios específicos. Para aplicar filtros, siga os passos abaixo.

1. No Admin VTEX, acesse *Promoções > Cupons*, ou digite *Cupons* na barra de busca no topo da página.
2. Clique no filtro que você deseja utilizar:
   * **Última edição:** indica a data da última vez em que o cupom foi alterado.
   * **Tipo de cupom:** indica se o cupom é único ou um grupo de cupons. Para entender os diferentes tipos de cupons, leia [Cupons](https://help.vtex.com/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL).
3. Marque a opção desejada.
4. Clique em `Aplicar`.
5. Repita o processo caso queira aplicar outro filtro.

Para limpar os filtros, ou seja, desativar os filtros aplicados, existem duas opções:

* Clique no <i class="fas fa-times"></i> ao lado de um filtro para desativar um filtro específico.
* Clique em `Limpar filtros` para desativar todos os filtros.

### Exportar cupons

Você pode fazer download de um arquivo CSV com os seus cupons e suas respectivas informações.

Para exportar os cupons, clique no botão <i class="fas fa-download"></i> `Exportar`, ao lado da barra de busca. A exportação leva em consideração os [filtros](#filtrar-cupons) aplicados na lista.

O arquivo gerado contém as informações descritas a seguir.

| Coluna | Descrição |
|---|---|
| `code` | Código do cupom. No caso de grupos de cupons, indica o prefixo dos códigos gerados. |
| `type` | Indica se o cupom é único (`single`) ou um grupo de cupons (`multiple`). Para mais detalhes sobre cada tipo de cupom, leia [Cupons](https://help.vtex.com/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL). Para saber como exportar os códigos gerados por um grupo de cupons, leia [Exportar códigos de um grupo de cupons](#exportar-codigos-de-um-grupo-de-cupons). |
| `quantity` | Quantidade de códigos do cupom. Para cupons únicos, o valor é sempre `1`. Para grupos de cupons, indica a quantidade de códigos para aquele cupom grupo. |
| `archived` | Indica se o cupom está arquivado (`true`) ou ativo (`false`). |
| `utmSource` | Indica a UTM source associada ao cupom, se houver. |
| `utmCampaign` | Indica a UTM campaign associada ao cupom, se houver. |
| `maxUsage` | Quantidade máxima de vezes que o cupom poderá ser utilizado. |
| `maxItemsPerClient` | Determina a quantidade máxima de produtos em que o cupom poderá ser aplicado. A quantidade definida vale para uma ou mais compras pelo mesmo cliente. Essa opção é preenchida apenas em cupons já existentes configurados com essa limitação em versões anteriores do módulo de Cupons. |
| `expirationIntervalPerUse` | Intervalo de tempo mínimo para reutilização do cupom. |
| `lastModified` | Data em que o cupom foi alterado pela última vez. |

Veja um exemplo de arquivo CSV exportado a seguir:

![cupons-exportados](https://images.ctfassets.net/alneenqid6w5/3BiCzXoNpaMM1ZpkBoa3Nr/921b74b837ae69f974aef332dc8d816a/image3.png)

#### Exportar códigos de um grupo de cupons

O arquivo CSV exportado exibe apenas uma linha para um um grupo de cupons, ou seja, não apresenta todos os códigos do grupo, apenas o prefixo.

Para visualizar ou exportar todos os códigos de um grupo, é necessário seguir os passos abaixo:

1. Encontre o grupo de cupons na [lista de cupons](#lista-de-cupons).
2. Clique em <i class="fas fa-ellipsis-v"></i> na linha do grupo de cupons para exibir um menu com mais opções.
3. Clique em <i class="fas fa-download"></i> **Exportar**.

    Você verá uma tela com duas opções:

    * <i class="far fa-clone"></i> **Copiar tudo:** permite copiar os códigos gerados para a sua área de transferência. Também é possível copiar cada código clicando sobre ele.
    * **Exportar:** permite exportar os códigos gerados para um arquivo CSV. O arquivo exportado contém uma coluna, com um código por linha.

![exportar-cupons](https://images.ctfassets.net/alneenqid6w5/P8bIJHkyTTi2jVZ325rko/27a207fd3f7adc0ebe4493cd5ea15f0f/exportarcupons.PNG)

### Ver uso dos cupons

Para visualizar o total de cupons ativos e a cota de espaço restante para novos cupons, clique em <i class="fas fa-chart-line"></i> `Uso dos cupons`.

![uso-dos-cupons](https://images.ctfassets.net/alneenqid6w5/CaNOtLMQXu26MGYfaAe4o/7c4529a241f54d4e3203ce5c1237bdfc/usodoscupons.PNG)

O número máximo de cupons ativos que você pode ter é 5 mil. Para liberar espaço, você pode arquivar cupons a partir da [Lista de cupons](#lista-de-cupons). Caso precise aumentar o limite de cupons ativos, entre em contato com [nosso Suporte](https://support.vtex.com/hc/pt-br/requests).

### Acessar cupons arquivados

Para acessar a lista de cupons arquivados, siga os passos abaixo.

1. No canto superior direito da página **Cupons**, clique em <i class="fas fa-ellipsis-v"></i> `Mais`.
2. Clique em <i class="fas fa-archive"></i> `Cupons arquivados`.

A lista de cupons arquivados apresenta as mesmas informações descritas na seção [Lista de cupons](#lista-de-cupons), com exceção das opções disponíveis no menu <i class="fas fa-ellipsis-v"></i> na linha de cada cupom. As opções disponíveis para cupons arquivados são:

* <i class="fas fa-search"></i> **Visualizar:** permite ver os detalhes do cupom arquivado em uma versão não editável do [formulário de criação e edição do cupom](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU).
* <i class="fas fa-archive"></i> **Desarquivar:** permite disponibilizar o cupom para uso e edição.

## Criar cupom

O botão `Criar cupom`, no canto superior direito da página, permite acessar o formulário de criação de um novo cupom. Para mais informações sobre esse processo, leia [Criar cupom](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU).

## Lista de cupons

A lista de cupons apresenta todos os cupons ativos na sua loja, listados a partir do mais recente. Ao clicar em um cupom da lista, você será redirecionado para a página de [edição do cupom](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU).

Confira a seguir mais detalhes sobre cada coluna da lista:

* **Código:** apresenta o código do cupom.
* **Tipo de cupom:** indica se o cupom é [único ou um grupo de cupons](https://help.vtex.com/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL).
* **UTM source:** indica a [UTM source](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) associada ao cupom, se houver.
* **UTM campaign:** indica a [UTM campaign](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) associada ao cupom, se houver.
* **Última edição:** apresenta a data em que o cupom foi alterado pela última vez.
*  **Botão**  <i class="fas fa-ellipsis-v"></i>: exibe um menu com mais opções, descritas a seguir.
   * <i class="fas fa-pencil"></i> **Editar:** permite acessar o formulário de edição do cupom para visualizar ou alterar as informações cadastradas. Leia [Criar cupom](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU) para mais detalhes sobre o formulário. Opção disponível apenas para cupons ativos.
   * <i class="fas fa-archive"></i> **Arquivar:** permite arquivar o cupom, ou seja, desativar o seu uso na loja. Opção disponível apenas para cupons ativos.
   * <i class="fas fa-download"></i> **Exportar:** abre um modal com os códigos do grupo de cupons, onde é possível copiar os códigos ou exportá-los para um arquivo CSV. Opção disponível apenas para grupos de cupons.
   * <i class="fas fa-signal"></i> **Ver detalhes de uso:** abre um modal com informações de uso do cupom. Para mais detalhes, leia a seção [Ver detalhes de uso](#ver-detalhes-de-uso). Opção disponível apenas para cupons ativos.

### Ver detalhes de uso

O modal **Ver detalhes de uso** apresenta os dados de utilização de cada cupom, descritos a seguir:

* **Promoções vinculadas:** exibe o nome das promoções vinculadas ao cupom, se houver alguma. Ao clicar no nome de uma promoção, você será direcionado para a página de edição da promoção.

    O cupom só se torna disponível para uso quando está vinculado a pelo menos uma promoção. Para estabelecer esse vínculo, é necessário usar a mesma [utm_source ou utm_campaign](https://help.vtex.com/pt/tutorial/o-que-sao-utm_source-utm_campaign-e-utm_medium--2wTz7QJ8KUG6skGAoAQuii) no cadastro do cupom e no cadastro da promoção. Leia [Vincular o cupom a uma promoção](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU#vincular-o-cupom-a-uma-promocao) para saber mais sobre essa configuração.

* **Uso** (cupons únicos): exibe a quantidade de usos do cupom e a quantidade de usos restantes, caso você tenha limitado a quantidade de usos.

    Esta seção também apresenta a lista de pedidos em que o código foi utilizado e permite buscar pelo número de um pedido. Ao clicar no número de um pedido, você será conduzido para a página de detalhes do pedido no **Gerenciamento de pedidos**.

![ver-detalhes-uso](https://images.ctfassets.net/alneenqid6w5/4dVuN6fKsu3WRsMSQbZT4e/648e8a2216470558beddea7e9fb0087b/Group_1__4_.png)

* **Uso geral dos códigos de cupom** (grupos de cupons): exibe a quantidade total de usos dos códigos de um grupo de cupons e a quantidade de usos restantes, caso você tenha limitado a quantidade de usos.

    Esta seção também apresenta a lista de códigos do grupo de cupons e permite buscar por um código específico. Ao clicar em um código, você tem acesso à lista de pedidos em que o código foi utilizado e pode buscar pelo número de um pedido. Ao clicar no número de um pedido, você será conduzido para a página de detalhes do pedido no **Gerenciamento de pedidos**.

![selecione-o-codigo-grupo-cupons](https://images.ctfassets.net/alneenqid6w5/25yE4tmkHYDm4MISaz9upH/87b9f4e806c8d2c0b4399d64524658b4/Group_2__4_.png)

## Saiba mais

* [Cupons](https://help.vtex.com/pt/tutorial/cupons-beta--1aAEN3ADpz19ss5JCIEBdL)
* [Criar cupom](https://help.vtex.com/pt/tutorial/criar-cupom-beta--7lMk3MmhNp2IEccyGApxU)
