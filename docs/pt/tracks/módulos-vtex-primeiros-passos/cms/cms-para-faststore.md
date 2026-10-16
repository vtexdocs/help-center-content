---
title: 'CMS para FastStore'
createdAt: 2026-09-11T20:00:00.000Z
updatedAt: 2026-09-11T20:00:00.000Z
contentType: trackArticle
productTeam: CMS
slugEN: cms-for-faststore
locale: pt
trackSlugEN: cms
order: 4
---

Para lojas desenvolvidas com [FastStore](https://developers.vtex.com/docs/guides/faststore) (v3 ou superior) ou uma implementação headless personalizada, o gerenciamento de conteúdo é feito por meio do [CMS](https://help.vtex.com/pt/docs/tutorials/cms-visao-geral), um sistema de gerenciamento de conteúdo que permite que as equipes de negócio criem, colaborem e publiquem conteúdo do storefront de forma independente do código do frontend.

O CMS está organizado com base nas seguintes funcionalidades:

- [Todos os conteúdos](#todos-os-conteudos)
- [Lojas](#lojas)
- [Branches e versionamento](#branches-e-versionamento)
- [Localidades](#localidades)
- [Mídia](#midia)
- [Perfis de acesso e permissões](#perfis-de-acesso-e-permissoes)

## Todos os conteúdos

**Todos os conteúdos** é o dashboard principal do CMS. Ele lista e centraliza o gerenciamento de todo o conteúdo digital da sua loja, incluindo páginas, layouts, templates e seções globais, a partir de um único hub no Admin VTEX. Para acessá-lo, abra o Admin VTEX e clique em **Storefront > Conteúdo > Todos os conteúdos**.

![cms-overview](https://vtexhelp.vtexassets.com/assets/docs/src/cms-overview___4da66fe4346083e5056bc43f9c49db1a.png)

## Lojas

As **[lojas](https://help.vtex.com/pt/docs/tutorials/cms-configurar-lojas)** definem cada storefront que consome conteúdo do CMS, como um projeto FastStore. Nesta página, você pode vincular storefronts ao CMS e configurar as URLs de pré-visualização e build, a integração com o repositório e as localidades padrão e de fallback para a entrega de conteúdo de cada loja.

![cms-stores](https://vtexhelp.vtexassets.com/assets/docs/src/cms-stores___6a92351517b7672eb34b4427765cbd2e.png)

## Branches e versionamento

As **[branches](https://help.vtex.com/pt/docs/tutorials/gerenciando-versoes-e-branches)** fornecem um workspace colaborativo onde as equipes podem fazer alterações de conteúdo em um ambiente isolado antes de fazer merge na branch Main, sem impactar no storefront em produção.

Cada branch é uma versão isolada do seu conteúdo, permitindo que vários editores criem, atualizem e refinem páginas, layouts e seções simultaneamente. Todas as alterações são rastreadas por item de conteúdo por meio do [histórico de versões](https://help.vtex.com/docs/tutorials/cms-version-history), facilitando ver quem fez uma alteração, o que foi alterado e quando.

![cms-branches](https://vtexhelp.vtexassets.com/assets/docs/src/cms-branches___d4cbb256190ee104d3794e2c812b4c8f.png)

## Localidades

As **[localidades](https://help.vtex.com/pt/docs/tutorials/configurar-localidades)** definem o idioma e as configurações regionais do conteúdo da loja, possibilitando experiências de compra em múltiplos idiomas. Em vez de duplicar páginas ou manter lojas separadas para cada região, você pode definir as localidades da loja (por exemplo, `en-US` ou `pt-BR`) e criar versões localizadas da mesma entrada de conteúdo, com regras de fallback para localidades sem conteúdo localizado próprio.

## Mídia

A página **Mídia** permite gerenciar os arquivos de mídia da loja, como imagens e vídeos. Para imagens, você pode fazer upload e organizar arquivos de até 5 MB nos formatos PNG, JPG, GIF, SVG e WebP. Para vídeos, você pode adicionar a URL de um provedor de hospedagem externo, como o YouTube.

## Perfis de acesso e permissões

Os **[perfis de acesso e permissões](https://help.vtex.com/pt/docs/tutorials/cms-perfis-de-acesso-e-permissoes)** controlam o que cada membro da equipe pode criar, editar e publicar no CMS. Os três perfis de acesso predefinidos — Content Producer, Content Editor e Content Administrator — seguem o modelo de branches do CMS, semelhante ao do Git, que separa a criação de conteúdo da sua publicação.

## Saiba mais

- **[CMS - Visão geral](https://help.vtex.com/pt/docs/tutorials/cms-visao-geral):** conheça as principais partes do CMS.

- **[Configurar lojas](https://help.vtex.com/pt/docs/tutorials/cms-configurar-lojas):** vincule storefronts ao CMS e configure suas configurações.

- **[Versões e branches](https://help.vtex.com/pt/docs/tutorials/gerenciando-versoes-e-branches):** saiba como criar, pré-visualizar e fazer merge de branches para publicar conteúdo.

- **[Configurar localidades](https://help.vtex.com/pt/docs/tutorials/configurar-localidades):** defina idiomas e regiões para o conteúdo da sua loja.

- **[CMS perfis de acesso e permissões](https://help.vtex.com/pt/docs/tutorials/cms-perfis-de-acesso-e-permissoes):** entenda os perfis de acesso predefinidos do CMS e o que cada um pode fazer.
