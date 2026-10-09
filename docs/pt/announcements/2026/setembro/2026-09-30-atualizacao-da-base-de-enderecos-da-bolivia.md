---
title: 'Atualização da base de endereços da Bolívia'
slug: '2026-09-30-atualizacao-da-base-de-enderecos-da-bolivia'
hidden: false
createdAt: 2026-09-30T00:00:00.000Z
updatedAt: 2026-09-30T00:00:00.000Z
contentType: updates
productTeam: Checkout
slugEN: '2026-09-30-bolivia-address-database-update'
locale: pt
announcementSynopsisPT: 'A base de endereços da Bolívia foi atualizada com os dados oficiais do Censo 2024. Lojas que usam códigos postais bolivianos devem revisar as planilhas de frete e os pontos de retirada.'
tags:
  - Checkout
  - Logística
---

A VTEX atualizou a base de endereços da Bolívia usada no checkout. Agora, departamentos, províncias, municípios e códigos postais seguem os dados oficiais do [Censo 2024 do Instituto Nacional de Estadística (INE) da Bolívia](https://cpv2024.ine.gob.bo/).

## O que mudou?

Desde 30 de setembro de 2026, a base de endereços da Bolívia reconhece os 343 municípios oficiais do país. A atualização trouxe as seguintes mudanças:

| Campo | Atualização | Exemplo |
| :--- | :--- | :--- |
| Códigos postais | Vários municípios passaram a ter um novo código postal. | O código de Sucre passou de `20511` para `10101`, e o de Cochabamba, de `30400` para `30101`. |
| Províncias | Alguns municípios passaram a pertencer a outra província, e províncias duplicadas ou com nomes desatualizados foram renomeadas ou removidas. | Pedro Domingo Murillo passou a ser Murillo. |
| Nomes de municípios | A grafia de alguns municípios foi corrigida. | Machareti passou a ser Macharetí. |
| Localidades | O nível abaixo do município (comunidades, estâncias e distritos) foi removido da base, pois não faz parte dos dados oficiais. | A localidade Paititi (Beni), de código `10000`, foi removida. |

> ⚠️ Alguns códigos postais antigos foram reatribuídos a outros municípios. Nesses casos, uma configuração que ainda usa o código antigo não gera erro, mas passa a corresponder a outra localidade. Por exemplo, o código `20101`, que antes correspondia a Villa Serrano (Chuquisaca), agora corresponde a Nuestra Señora de La Paz (La Paz).

## Por que fizemos essa mudança?

A base de endereços da Bolívia estava desatualizada em relação aos dados oficiais do país. Isso gerava divergências entre o endereço informado pelo cliente e a divisão territorial oficial, afetando o cálculo de frete e a entrega dos pedidos.

## O que precisa ser feito?

Se a sua loja opera na Bolívia, revise as configurações que usam códigos postais bolivianos e atualize-as com os novos códigos:

- **Planilhas de frete:** confira as faixas de códigos postais das [políticas de envio](https://help.vtex.com/pt/docs/tutorials/politica-de-envio) e atualize a [planilha de frete](https://help.vtex.com/pt/docs/tutorials/planilha-de-frete) quando necessário.
- **Pontos de retirada:** confira o código postal cadastrado em cada [ponto de retirada](https://help.vtex.com/pt/docs/tutorials/pontos-de-retirada).

Para identificar os códigos que mudaram, consulte a lista completa de alterações abaixo:

<DataTable
  src="data-tables/bolivia-address-database-changes.json"
  columns={[
    { key: 'changeType', label: 'Alteração', sortable: true, filterable: true },
    { key: 'department', label: 'Departamento', sortable: true, filterable: true },
    { key: 'previousProvince', label: 'Província anterior', sortable: true, filterable: true },
    { key: 'newProvince', label: 'Província atual', sortable: true, filterable: true },
    { key: 'previousLocation', label: 'Município ou localidade anterior', sortable: true, filterable: true },
    { key: 'newMunicipality', label: 'Município atual', sortable: true, filterable: true },
    { key: 'previousCode', label: 'Código postal anterior', type: 'code', sortable: true, filterable: true },
    { key: 'newCode', label: 'Código postal atual', type: 'code', sortable: true, filterable: true },
    { key: 'reassignedTo', label: 'Uso atual do código anterior' },
  ]}
/>

Em caso de dúvidas, entre em contato com o [Suporte VTEX](https://help.vtex.com/pt/support).

## Saiba mais

- [Política de envio](https://help.vtex.com/pt/docs/tutorials/politica-de-envio)
- [Planilha de frete](https://help.vtex.com/pt/docs/tutorials/planilha-de-frete)
- [Pontos de retirada](https://help.vtex.com/pt/docs/tutorials/pontos-de-retirada)
