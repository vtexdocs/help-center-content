---
title: 'Facebook Business Extension'
id: 434Z1iWnaa0zbOMDyr6oi
status: PUBLISHED
createdAt: 2021-09-30T13:58:09.872Z
updatedAt: 2023-04-10T13:52:16.703Z
publishedAt: 2023-04-10T13:52:16.703Z
firstPublishedAt: 2021-09-30T18:46:40.188Z
contentType: trackArticle
productTeam: Channels
slugEN: facebook-business-extension
locale: pt
trackId: 2hS3ANSZ7vlHCcba4h7k8D
trackSlugEN: integracao-com-o-facebook-business-extension
---

O [Facebook Business Extension (FBE)](https://developers.facebook.com/products/business-apps/?locale=pt_BR) é uma plataforma que oferece uma maneira simplificada de integrar com serviços e funcionalidades do Facebook.

A VTEX desenvolveu a app _Facebook Business Extension e Conversions API_, que facilita a integração com o FBE. Após concluir a integração, será possível gerenciar novos ativos do Facebook através da plataforma VTEX. Além disso, a integração instala automaticamente as seguintes funcionalidades:

- [Pixel do Facebook](https://developers.facebook.com/docs/meta-pixel)
- [API de Conversões](https://www.facebook.com/business/help/2041148702652965?locale=pt_BR)
- [Catálogo](https://developers.facebook.com/docs/marketing-api/catalog?locale=pt_BR)
- Botão 'Compre Agora' do Facebook
- Botão 'Compre Agora' do Instagram

## Compatibilidade

A app _Facebook Business Extension e Conversions API_ tem compatibilidade total com lojas que operam com VTEX IO, compatibilidade parcial com as lojas que são CMS Legado ou [Headless](https://vtex.com/en/blog/strategy/headless-commerce-what-it-is-and-why-its-growing-so-fast/). Para identificar em qual modelo sua loja opera, acesse [Edition App](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-edition-app). 

Saiba mais sobre a configuração necessária para cada uma em nosso guia [Facebook Business Extension](https://developers.vtex.com/docs/guides/vtex-facebook-fbe#compatibility) no Developer Portal.

> ⚠️ Na VTEX, existe um [guia de integração com Facebook](https://help.vtex.com/pt/tracks/integracao-com-o-facebook--7h8KvIC4DbRRc8VlyJ8PFc). No entanto, a integração com a app *Facebook Business Extension e Conversions API* deve ser sua escolha padrão, pois o FBE é a solução mais completa do Facebook. Independente de ter a outra integração configurada, você deve prosseguir normalmente com a configuração desta integração.

## Pixel do Facebook

O Pixel do Facebook permite medir a eficácia da publicidade do seu negócio, por meio da análise das ações que os usuários realizam no seu site. Com a integração com a app _Facebook Business Extension e Conversions API_, isso pode ser feito de forma nativa.

Atualmente, o Pixel do Facebook é obtido pela integração da [app Facebook Business Extension](https://apps.vtex.com/vtex-facebook-fbe/p) e Conversions API e está disponível para as lojas VTEX IO e Legacy CMS Portal. Se a sua loja utiliza o sistema Legacy CMS, é necessário fazer uma configuração manual no sistema. Saiba mais lendo o artigo [Facebook Business Extension](https://developers.vtex.com/vtex-developer-docs/docs/vtex-facebook-fbe#facebook-pixel-for-legacy-cms-portal-frontend).

Entretanto, se sua loja já utiliza o antigo app Facebook Pixel da App Store, você deve checar se o app foi desinstalado corretamente. Porque se o app ainda estiver instalado, ele pode duplicar os eventos do Facebook. 

Para visualizar se o app foi desinstalado, acesse no Admin VTEX *Configurações da Conta > Meus aplicativos*. 

## API de Conversões

A API de Conversões foi desenvolvida para criar uma conexão direta entre os seus dados de marketing e o sistema do Facebook. Alguns dos principais benefícios dessa funcionalidade são:

- Redução do custo por ação, como resultado da conexão aprimorada.
- Otimização de anúncios para ações que acontecem no final da jornada do cliente.
- Aprimoração da mensuração de dados de marketing.
- Aumento do controle de dados.

> ℹ️ Saiba mais na documentação do Facebook <a href= "https://www.facebook.com/business/help/2041148702652965?locale=pt_BR">Sobre a API de Conversões</a>.
