---
title: 'Mercado Livre Kit'
id: 
status: PUBLISHED
createdAt: 2026-05-27T00:00:00.000Z
updatedAt: 2026-05-27T00:00:00.000Z
publishedAt: 2026-05-27T00:00:00.000Z
firstPublishedAt: 2026-05-27T00:00:00.000Z
contentType: tutorial
productTeam: Channels
author: 2p7evLfTcDrhc5qtrzbLWD
slugEN: mercado-libre-kit
legacySlug: mercado-livre-kit
locale: pt
subcategoryId: 4uqMnZjwBO04uWgCom8QiA
---

A funcionalidade de Kits permite que sellers VTEX sincronizem seus kits cadastrados no catálogo VTEX diretamente com o Mercado Livre, garantindo a publicação destes no marketplace. Com essa sincronização o seller pode acompanhar o processamento pelo Admin VTEX.

Para sincronizar os kits do catálogo VTEX com a conta no Mercado Livre, o seller deve atender aos seguintes requisitos:

- A integração com o Mercado Livre configurada.
- Kits préviamente cadastrados no Catálogo VTEX.
- Kits para sincronização devem estar vinculados à Política comercial utilizada na integração com o Mercado Livre.
- Cada kit pode conter no máximo 6 componentes e cada componente do kit pode ter no máximo 10 unidades.

O processo de sincronização de kits segue o fluxo abaixo:

```mermaid

flowchart LR
    A([Sincronizar kits VTEX → Mercado Livre]):::inicio --> B{Possui kits cadastrados<br/>no Catálogo VTEX?}:::decisao

    B -->|Não| C["Seller: criar kit no catálogo VTEX"]:::seller
    C --> D{Kit respeita limites<br/>do Mercado Livre?}:::decisao

    B -->|Sim| E{VTEX: kits vinculados à política<br/>comercial da integração?}:::decisao

    D -->|Não| F[Mercado Livre: não publica o kit]:::meli
    D -->|Sim| G[Seller: vincular kit à política comercial<br/>da integração com Mercado Livre]:::seller

    E -->|Não| G
    E -->|Sim| H["Seller: ativar preferência de<br/>kits na integração com Mercado Livre"]:::seller
    G --> H

    H --> I[VTEX: envia os kits cadastrados ao Mercado Livre]:::vtex
    I --> J{Mercado Livre: kit e componentes elegíveis?}:::decisao

    J -->|Sim| K[Mercado Livre: publica o kit]:::meli
    J -->|Impeditivo em componente| L[VTEX: envia SKU do kit como produto regular]:::vtex
    K ~~~ F

    classDef inicio fill:#FFFFFF,stroke:#142032,color:#727273,stroke-width:2px
    classDef decisao fill:#FFFFFF,stroke:#F71963,color:#727273,stroke-width:2px
    classDef seller fill:#142032,stroke:#142032,color:#FFFFFF,stroke-width:2px
    classDef vtex fill:#F71963,stroke:#F71963,color:#FFFFFF,stroke-width:2px
    classDef meli fill:#FFE600,stroke:#2D3277,color:#2D3277,stroke-width:2px
```


## Inventário e Preço

As regras de inventário e de precificação de um kit no Mercado Livre serão as mesmas utilizadas para os kits cadastrados no catálogo da VTEX.

O inventário do kit é o inventário de seus componentes, não sendo possível inserir um inventário apenas no kit. Para gerenciar esta informação, acesse **Catálogo > Inventário > Gerenciamento de inventário.**

O preço do kit é atualizado automaticamente após alterar o valor unitário de um dos componentes. O preço final será a soma dos valores dos componentes.

Também é possível alterar somente o preço final do kit direto pelo sistema de preços sem atualizar os componentes. Dessa forma, o valor do componente será usado apenas para ratear o valor de venda entre os componentes, determinando o preço de cada componente naquele pedido específico.

## Ativando a sincronização1. Ativar a sincronização de Kits

Após cadastrar os kits no catálogo VTEX seguindo o tutorial [Cadastrar kit](https://help.vtex.com/pt/docs/tutorials/cadastrar-kit) e vinculá-los à Política comercial da integração com o Mercado Livre, o seller deve seguir os passos abaixo para ativar a sincronização:

1. No Admin VTEX, vá a **Marketplace > Conexões > Mercado Livre > Preferências** ou acesse **Preferências** na barra de busca.
2. Na seção **Kits no Mercado Livre,** ative o toggle <label class="toggle-switch">.
3. Clique no botão `Ativar sincronização`.
4. Acompanhe a sincronização dos kits em **Marketplace > Conexões > Produtos**.

