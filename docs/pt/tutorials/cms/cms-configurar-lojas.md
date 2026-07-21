---
title: "Configurar lojas"
createdAt: "2026-07-20T17:08:52.219Z"
updatedAt: "2026-07-20T17:08:52.219Z"
contentType: tutorial
productTeam: CMS
slugEN: cms-configuring-stores
locale: pt
---

As lojas definem cada storefront que consumirá conteúdo do CMS (por exemplo, um projeto FastStore) e configuram seu modelo de conteúdo, as configurações e o comportamento de localização. Uma loja:

* Define a relação com um storefront (exemplo: ID da loja "faststore", esquema usado, repositório de loja vinculado).
  * Nome da loja  
  * Configuração de localidade: as localidades cadastradas para essa loja, qual é a padrão e como funcionam as regras de fallback entre localidades (exemplo: fr-CA usando en-CA como fallback).
  * URL de pré-visualização usada para a pré-visualização de conteúdos e branches.

![stores-overview-ui](https://vtexhelp.vtexassets.com/assets/docs/src/cms-stores-overview-ui___47bd3ce39fbc854394fcc934c8c8c0ef.png)

Para acessar a página Lojas, no Admin, acesse **Storefront > Content > Lojas.**

## Criar uma nova loja

Para criar uma nova loja, siga estas etapas:

1. Na página **Lojas**, clique em `Adicionar loja`.  
2. No campo **Nome da loja**, informe um nome para a loja.
3. Em **Storefront**, selecione uma das seguintes opções:  

   * **FastStore:** selecione esta opção se a loja usa FastStore. Em seguida, escolha a versão correspondente: FastStore `v3` ou `v4`.
   * **Headless:** selecione esta opção se a loja usar uma implementação headless personalizada.

4. Na seção **Configuração da localidade padrão**, configure a localidade padrão da loja:  
   * **Nome:** informe um nome para identificar a localidade.
   * **Idioma:** Selecione o idioma padrão.
   * **Região:** selecione a região padrão.
5. Clique em `Criar loja`. A nova loja será exibida na página **Lojas**.

## Gerenciar uma loja

Para gerenciar uma das lojas da sua conta, siga estes passos:

1. Na página **Lojas**, clique no card da loja que deseja gerenciar, por exemplo, **FastStore**.  
2. Na página Lojas, você verá as seguintes opções que pode gerenciar:  [Informações gerais](#informações-gerais), [Localidades](#localidades) e [Configurações de build](#configurações-de-build).

### Informações gerais

Na aba **Geral**, você pode ver e editar as informações básicas de identificação da loja e as configurações de nível superior que definem como o storefront interage com o CMS.

![general-information-tab](https://vtexhelp.vtexassets.com/assets/docs/src/cms-general%20information-overview___2497ce5674751230c817ecffaf98f28c.png)

Para editar o nome da loja, clique em `Editar`. Você pode ver os seguintes campos:

| Campo | Descrição |
| :---- | :---- |
| **Nome** | Nome da loja exibido no CMS. |
| **Storefront** | Implementação de storefront conectada ao CMS, como o FastStore ou uma implementação headless personalizada. |
| **URL** | URL do storefront conectado à loja. |
| **API** | Endpoint de API usado pelo storefront para se comunicar com o CMS. |

### Localidades

A aba **Localidades** define o idioma e as configurações regionais do conteúdo da loja. Para mais informações, consulte o guia [Configurar localidades](https://help.vtex.com/pt/docs/tutorials/configurar-localidades).

![locales-tab](https://vtexhelp.vtexassets.com/assets/docs/src/cms-locales-tab___b0ea3a987998523c52ed26d1133b53cb.png)

### Configurações de build

A aba Configurações de build define como o CMS interage com o storefront durante os fluxos de pré-visualização e publicação. Nesta seção, você configura o endpoint de pré-visualização usado quando os editores clicam em **Pré-visualizar** e o webhook usado para disparar as recompilações do storefront após a publicação do conteúdo.

Nesta aba, você verá os seguintes campos:

| Nome do campo | Descrição | Exemplo de valor |
| :---- | :---- | :---- |
| **Repositório da loja** | A URL do repositório onde o código frontend da store está hospedado. Este repositório é usado para identificar o projeto de storefront relacionado a esta loja. |  |
| **Pré-visualização** | URL do webhook que permite a pré-visualização de páginas no CMS. | `https://{nomedaconta}.vtex.app/api/preview` |
