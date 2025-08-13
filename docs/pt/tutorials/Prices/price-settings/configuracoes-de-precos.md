---
title: 'Configurações de preços'
id: 3hbBtCzNUBrj8GaWgCtSWN
status: PUBLISHED
createdAt: 2020-10-14T18:43:49.750Z
updatedAt: 2024-10-14T19:01:25.144Z
publishedAt: 2024-10-14T19:01:25.144Z
firstPublishedAt: 2020-10-22T19:38:48.506Z
contentType: tutorial
productTeam: Marketing & Merchandising
author: 2o8pvz6z9hvxvhSoKAiZzg
slugEN: prices-settings
legacySlug: configuracao-de-precos
locale: pt
subcategoryId: 3O1NvPgBPqE0qU88MSQaie
---

A página **Configuração de loja > Produto > Configuração de preços** no Admin VTEX permite alterar configurações gerais de precificação forma prática e rápida.

Você pode definir o markup padrão e o limite de variação de preço da sua loja. Aqui também é possível herdar preços da conta-pai e sobrescrever os preços de sellers com os da sua conta.

Veja as configurações disponíveis a seguir:

- **Markup padrão para novos preços:** percentagem de lucro padrão sobre um novo preço cadastrado em um produto ou um serviço.
- **Usar limite de variação de preço:** garante que os preços dos SKUs não sejam alterados para valores indesejados.
  - **Decréscimo máximo:** maior decréscimo no preço de um SKU.
  - **Acréscimo máximo:** maior acréscimo no preço de um SKU.
- **Herdar preços da conta-pai:** opção que permite que a conta atual herde preços de uma conta-pai. A herança de preços é feita nas seguintes situações:
  - **Sempre:** a conta sempre vai herdar todos os preços da conta-pai.
  - **Apenas para preços inexistentes:** os preços da conta-pai serão herdados apenas se forem inexistentes na conta atual.

  <div class = "alet alert-info">
    A configuração **Herdar preços da conta-pai** é disponível apenas para contas-filhas. A definição da conta-pai ocorre durante a criação da conta-filha. Verificar se a conta-pai associada está correta evita problemas relacionados a preços ou à disponibilidade de estoque.
  </div>

- **Sobrescrever preços de sellers:** permite sobrescrever todos os preços de sellers com os da conta atual.

  > ℹ️ A configuração **Sobrescrever preços de sellers** não é disponível para sellers white label.

## Consultar a Conta-Pai associada
Para consultar a conta-pai vinculada a uma conta-filha, utilize a URL abaixo, substituindo `{AccountName}` pelo nome da conta-filha que deseja consultar:

```
http://{AccountName}.myvtex.com/api/vlm/account
```

Ao acessar essa URL, a API retornará um resultado com várias informações sobre a conta. Para identificar a conta-pai associada, localize o campo `accountName` no retorno da API. Esse campo contém o nome da conta-pai vinculada à conta-filha consultada.
