---
title: 'Lead time: tempo de envio a nível de SKU'
id: 16yv5Mkj6bTyWR1hCN2f4B
status: PUBLISHED
createdAt: 2023-09-22T00:32:26.416Z
updatedAt: 2024-11-04T21:12:54.681Z
publishedAt: 2024-11-04T21:12:54.681Z
firstPublishedAt: 2023-09-22T01:35:53.577Z
contentType: tutorial
productTeam: Post-purchase
author: 5l9ZQjiivHzkEVjafL4O6v
slugEN: lead-time-shipping-time-at-sku-level
locale: pt
legacySlug: lead-time-tempo-de-envio-a-nivel-de-sku
subcategoryId: 3PQwnyOcNyYgawy06oe6gE
---

Lead time é a configuração opcional do tempo de envio a nível de SKU. Isso significa que você pode definir um período de envio para o SKU de um [estoque](https://help.vtex.com/pt/tutorial/estoque--6oIxvsVDTtGpO7y6zwhGpb) e este tempo será adicionado ao prazo total de envio do pedido.

A configuração do lead time é feita no contexto da [gestão do seu inventário](https://help.vtex.com/pt/tutorial/gerenciar-inventario--tutorials_139), pois se relaciona a itens em estoque e disponíveis para venda.

Este artigo aborda os seguintes aspectos:

- [Tempo total de envio:](#tempo-total-de-envio) como o lead time compõe o prazo de envio do pedido.
- [Principais casos de uso:](#principais-casos-de-uso) cenários especialmente beneficiados com o lead time.
- [Inventário do SKU:](#inventario-do-sku) forma como a plataforma se comporta quando o SKU está ou não disponível para venda.
- [Configurar lead time:](#configurar-lead-time) como realizar a configuração pelo Admin VTEX.
- [Configurar a contagem do lead time em dias do calendário:](#configurar-a-contagem-do-lead-time-em-dias-do-calendario-opcional) etapa opcional para que a contagem do lead time seja em dias corridos, e não dias úteis, que é o padrão.

>ℹ️ Para configurar o lead time por API, acesse [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-).

## Tempo total de envio

Quando configurado, o lead time é um tempo adicional que compõe o prazo de envio do pedido apresentado ao cliente no checkout. A imagem abaixo apresenta como esse prazo total é composto:

![lead_time_image_total_time_PT](https://images.ctfassets.net/alneenqid6w5/WDlW2CzaAKl3KtzzsgGwc/7aae98aad97be4947233c9ef489f266a/lead_time_image_total_time_PT.png)

* **Lead time:** quantidade de tempo configurável para o SKU de um estoque. Este período pode corresponder ao tempo de manipulação ou fabricação do item, por exemplo. Essa configuração é opcional e, por padrão, está definida como zero dias.
* [Tempo de estoque:](https://help.vtex.com/pt/tutorial/gerenciar-estoque--tutorials_137) tempo que o SKU leva para sair de um estoque para uma [doca](https://help.vtex.com/pt/tutorial/doca--5DY8xHEjOLYDVL41Urd5qj). Essa configuração é obrigatória, mas você pode definir o tempo igual a zero.
* [Tempo de doca:](https://help.vtex.com/pt/tutorial/gerenciar-doca--7K3FultD8I2cuuA6iyGEiW) tempo que o SKU leva para sair da doca, ponto intermediário entre o estoque e a [transportadora](https://help.vtex.com/pt/tutorial/transportadoras-na-vtex--7u9duMD5UQa2QQwukAWMcE), para ser enviado para o cliente. Essa configuração é obrigatória, mas você pode definir o tempo igual a zero.
* [Política de envio:](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140) agrupa as regras e condições apresentadas aos clientes no checkout, incluindo:
    * [Taxas de envio](https://help.vtex.com/pt/tutorial/planilha-de-frete--tutorials_127)
    * Horário de funcionamento da transportadora
    * Janelas de entrega
    * Capacidade de entrega
    * Tipos de produtos entregáveis (modais)

## Principais casos de uso

Confira a seguir alguns casos de uso em que a configuração do lead time é especialmente útil.

### Fornecedores externos

Gerenciar com mais facilidade o tempo que um fornecedor externo, tal como uma fábrica ou fabricante, leva para produzir, manipular, despachar ou entregar um produto.

### Produtos grandes e personalizáveis

Para operações que vendem produtos de grandes dimensões, como móveis, ou produtos personalizáveis, o lead time facilita administrar o tempo de manipulação do produto, contribuindo para a eficiência da gestão de estoques e docas.

### Dropshipping

Em _dropshipping_ — quando o fornecedor envia o produto diretamente para o cliente —, configurar tempo de envio a nível de SKU significa ter mais flexibilidade para definir prazos de manipulação e envio do produto por terceiros.

## Inventário do SKU

A plataforma VTEX vai apresentar comportamentos diferentes a depender da disponibilidade do SKU para vendas, e as situações possíveis são as seguintes:

- <i class="far fa-check-circle"></i> **Inventário com SKU:** você configura o lead time do SKU, o período é considerado no cálculo de envio do pedido e o prazo total é apresentado para o cliente na etapa do checkout.
- <i class="fas fa-times"></i> **Inventário sem SKU:** você configura o lead time do SKU, mas o SKU não é considerado válido, pois não existem unidades disponíveis para venda.
- <i class="far fa-check-circle"></i> **Inventário infinito:** você configura o lead time do SKU, o período é considerado no cálculo de envio do pedido e o prazo total é apresentado para o cliente na etapa do checkout. Enquanto o inventário estiver habilitado como infinito, o SKU será sempre válido para vendas.

## Configurar lead time

O lead time vem configurado como zero dias, e o seu limite máximo é de 365 dias. Por padrão, a contagem é feita em dias úteis, considerando feriados e demais condições da sua [política de envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140), mas você pode [configurar a contagem para ser em dias corridos](#configurar-a-contagem-do-lead-time-em-dias-do-calendario-opcional).

Para configurar o lead time de um SKU, siga os passos abaixo:

1. No Admin VTEX, acesse **Catálogo > Estoque > Gerenciamento de inventário**, ou digite **Gerenciamento de inventário** na barra de busca no topo da página.
2. Selecione o SKU do estoque que você deseja configurar. Você pode usar a barra de pesquisa e os filtros de pesquisa.
3. Na linha do SKU e na coluna **Lead time (dias)**, digite o número de dias desejado.
  ![lead_time_inventory_management_PT](//images.ctfassets.net/alneenqid6w5/mfWUVzj7tgHMQxJTnVjGX/37732ea98f52933cabb401cb6246ab2f/lead_time_inventory_management_PT.png)
4. No canto inferior da página, clique em `Salvar`.

>ℹ️ Pelo Admin VTEX, o lead time é sempre configurado em dias, mas é possível configurar períodos em horas, minutos e segundos usando os endpoints [Update inventory by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#put-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-) e [Update inventory lead time by SKU and warehouse](https://developers.vtex.com/docs/api-reference/logistics-api#patch-/api/logistics/pvt/inventory/skus/-skuId-/warehouses/-warehouseId-/lead-time).

>⚠️ O lead time só funciona com valores positivos, já que é possível adicionar tempo de envio, mas não diminuí-lo. Usar valores negativos pode resultar em comportamentos inesperados.

## Configurar a contagem do lead time em dias do calendário (opcional)

Se você deseja que o tempo do lead time seja contado em dias corridos, siga os passos abaixo:

1. No Admin VTEX, acesse **Envio > Estratégia de envio > Políticas de envio**, ou digite **Políticas de envio** na barra de busca no topo da página.
2. Encontre a política de envio desejada. Você pode utilizar a barra de pesquisa e os filtros.
    > Para criar uma nova política de envio, veja o artigo [Política de Envio](https://help.vtex.com/pt/tutorial/politica-de-envio--tutorials_140).
3. Na linha da política de envio, clique no ícone menu <i class="fas fa-ellipsis-v"></i> e selecione `Editar`.
4. Na seção **Fins de Semana e feriados**, ative os toggles desejados:
    * <i class="fas fa-toggle-on"></i> **Entrega aos sábados**
    * <i class="fas fa-toggle-on"></i> **Entrega aos domingos**
    * <i class="fas fa-toggle-on"></i> **Entrega em feriados**

5. Clique em `Salvar alterações`.

