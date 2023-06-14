---
title: 'Headless CMS: crie páginas não duplicáveis'
id: 6aSxQhpcb1RCnaWYcUAnoz
status: DRAFT
createdAt: 2023-04-06T15:19:47.475Z
updatedAt: 2023-04-10T15:08:45.599Z
publishedAt: 
contentType: updates
productTeam: VTEX IO
author: 4oTZzwYoyhy1tDBwLuemdG
slug: headless-cms-crie-paginas-nao-duplicaveis
legacySlug: headless-cms-crie-paginas-nao-duplicaveis
announcementImageID: ''
announcementSynopsisPT: 'Conheça o Singleton: tipo de content type no Headless CMS que impede duplicatas e mantém conteúdo consistente na loja.'
---

O Singleton é um novo tipo de content type que permite comerciantes criar e gerenciar uma única página de um content type no Headless CMS. Content types do tipoSingleton não podem ser duplicados. Isto garanteque haja apenas uma página daquele content type e que o conteúdo seja consistente em toda a loja.

![singleton-br](//images.ctfassets.net/alneenqid6w5/6aMWhl66yiP8YLJr5Bzuo5/7030fc9c4424018f377c56ad3c02c25e/singleton-br.gif)

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
O content type Singleton está disponível apenas para lojas usando o <a href="https://help.vtex.com/pt/tutorial/managing-pages-beta--3DO6rBhZ1p3zndnFu5BgRt">VTEX Headless CMS</a> (Atualmente está em fase Beta).
</div>

## O que mudou?
Anteriormente, era possível criar várias páginas diferentes de qualquer content type. Por vezes, isto gerava inconsistências no conteúdo. Por exemplo, levando à criação de diversas páginas com o mesmo nome, mas com conteúdos diferentes.

Agora, com o Singleton, é possível ter content types não duplicáveis. Isto garante a criação de apenas uma página de um determinado content type e que todas as atualizações serão refletidas nessa única página. Essa nova funcionalidade simplifica o gerenciamento do conteúdo e garante consistência na loja.

## Por que fizemos essa mudança?
Nosso objetivo com o novo content type do tipo Singleton é trazer os seguintes benefícios:

- __Páginas não duplicadas__: Evitar a criação de várias páginas do mesmo content type e previnir possíveis conflitos de atualização de página.
- __Consitência do conteúdo__: Ter apenas uma página por content type, garantindo um conteúdo consistente na sua loja.
- __Gerenciamento de conteúdo simplificado__: Tornar o gerenciamento e atualização do conteúdo mais fácil com apenas uma página por content type.

## O que precisa ser feito?
Para mais informações sobre como criar e gerenciar o tipo de conte type Singleton, confira a documentação [Gerenciando content types do tipo Singleton](https://help.vtex.com/pt/tutorial/gerenciando-content-types-do-tipo-singleton--VBibMN1BqV2OFmavUFCdo)

<div style="background-color:#FCF8F2; border-left: 2px solid #F0AD4E; border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 15px; margin-bottom: 10px">
Para criar um content type do tipo Singleton, verifique com o seu time de desenvolvimento se a propriedade <i>isSingleton</i> já está implementada ou peça para que o time siga as intruções em <a href="https://www.faststore.dev/how-to-guides/cms/vtex-headless-cms/Using%20isSingleton%20property%20in%20a%20contenty%20type">Using isSingleton in a content type</a> para adicioná-la ao content type desejado.
</div>
