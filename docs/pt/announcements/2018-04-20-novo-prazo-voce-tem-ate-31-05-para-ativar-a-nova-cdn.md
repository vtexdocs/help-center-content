---
title: 'NOVO PRAZO: você tem até 31/05 para ativar a nova CDN'
id: 1NHO2lx3tyWaqcwMG6u62q
status: PUBLISHED
createdAt: 2018-04-20T21:14:47.734Z
updatedAt: 2019-12-31T15:13:46.401Z
publishedAt: 2019-12-31T15:13:46.401Z
contentType: updates
productTeam: Reliability
author: authors_24
slugEN: 2018-04-20-new-deadline-activate-the-new-cdn-until-may-31
locale: pt
legacySlug: novo-prazo-voce-tem-ate-31-05-para-ativar-a-nova-cdn
announcementImageID: ''
announcementSynopsisPT: 'Ative o HTTPS, atualize o CNAME e solicite a nova CDN antes do prazo final. Assim, você evita quebras na sua loja.'
---

Devido à grande quantidade de lojas que não se prepararam para ativação do HTTPS e da nova CDN, decidimos prorrogar o prazo final de migração para __31 de maio__.

## O que é a nova CDN?
CDN é a rede usada para entregar todo o conteúdo do seu site (texto, imagens, vídeos). A nova CDN é melhor e mais segura, mas sua loja precisa realizar algumas ações para usá-la. Para mais detalhes, leia abaixo ou acesse [este artigo do Help](/pt/tutorial/ativar-nova-cdn-da-vtex). 

## Porque essa mudança é crítica?
__Se a sua loja não fizer as mudanças necessárias, ela vai sair do ar.__

## O que deve ser feito?
Você precisa realizar apenas 3 ações para deixar sua loja pronta para a mudança:
- Ativar HTTPS em todo o site
- Atualizar o CNAME
- Preencher este formulário: [Atualização para a nova CDN](https://docs.google.com/forms/d/e/1FAIpQLSdI2FBXGmlSOXEtWxrYfVveln7xOJcmYotqrKfgFgmHn771Fg/viewform)

__Cumprindo essas etapas, sua loja não terá problemas__. Para mais detalhes, siga o passo a passo descrito abaixo ou acesse [este artigo](/pt/tutorial/ativar-nova-cdn-da-vtex). Se você não tiver certeza como realizar essas mudanças ou não sabe se sua loja já está adequada, __encaminhe este comunicado para seu time de suporte TI ou agência parceira. É fundamental que sua loja realize essas ações para continuar a vender.__

## Informações complementares
Apesar do prazo, algumas medidas já foram implementadas para todas as lojas:
- No Portal V2 (páginas do checkout) já não é mais permitido HTTP. Todas as lojas agora trafegam por HTTPS nestas páginas.
- No Portal CMS, todas as pastas que forem criadas ou alteradas serão forçadas para HTTPS.
- Contas inativas ou que não estavam em produção foram atualizadas automaticamente para HTTPS.

É importante lembrar que, para completar a migração para nova CDN, __é fundamental ativar o HTTPS em todo o seu site__. Os detalhes de como fazer isso estão [neste artigo do Help](/pt/tutorial/ativar-https-em-todo-o-site).

Depois de ativar o HTTPS, você deverá:
- Atualizar seu DNS para o novo CNAME da VTEX.
- Solicitar ativação da CDN.

Se o domínio da sua loja aponta para algo que contenha `vtexcommerce.com.br` ou `hodor.vtex.com`, isso significa que ela ainda usa o CNAME antigo. A atualização é necessária porque só vai ser possível ter conteúdo no domínio `{hostname}.cdn.vtex.com`.

>⚠️ Após **31 de maio**, todos os CNAMEs antigos deixarão de entregar as lojas. Se a sua estiver usando um CNAME antigo, **ela vai ficar fora do ar**.

Depois de ativar o HTTPS e atualizar para o novo CNAME da VTEX, você precisará solicitar a ativação da nova CDN. Se isso não for feito até __31 de maio__, a ativação será feita de maneira automática. Por isso, é fundamental que você realize todas as ações já comunicadas anteriormente e reforçadas neste anúncio. Assim, você evita quebras na loja que poderiam ser evitadas.

Para o passo a passo completo de como ativar a nova CDN (incluindo a atualização do CNAME), [acesse este artigo do Help](/pt/tutorial/ativar-nova-cdn-da-vtex).
