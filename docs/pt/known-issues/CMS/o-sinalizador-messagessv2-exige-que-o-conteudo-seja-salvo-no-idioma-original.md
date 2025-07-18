---
title: "O sinalizador MessagessV2 exige que o conteúdo seja salvo no idioma original"
id: 4mQuhUYT5zcMddid8mcWMl
status: PUBLISHED
createdAt: 2025-07-18T12:52:26.344Z
updatedAt: 2025-07-18T12:52:27.187Z
publishedAt: 2025-07-18T12:52:27.187Z
firstPublishedAt: 2025-07-18T12:52:27.187Z
contentType: knownIssue
productTeam: CMS
author: 2mXZkbi0oi061KicTExNjo
tag: CMS
slugEN: o-sinalizador-messagessv2-exige-que-o-conteudo-seja-salvo-no-idioma-original
locale: pt
kiStatus: Backlog
internalReference: 1260018
---

## Sumário

<div class="alert alert-info">
  <p>Este problema conhecido foi traduzido automaticamente do inglês.</p>
</div>



Quando uma loja multilíngue tem o sinalizador MessagesV2 Enable New Page Translation Configuration, ocorre um problema no editor do site. Se o cliente tentar salvar o conteúdo em uma das localidades que não seja a principal, ele poderá receber um erro de: Something Went Wrong.
 ![](https://vtexhelp.zendesk.com/attachments/token/QOndCdSMiZtiGHYTBf0sYstQd/?name=image.png)
Esse erro está relacionado à mensagem: "Original content not found" (Conteúdo original não encontrado).

Mas com esse sinalizador ativo, esse conteúdo não precisa ser salvo na localidade original para ser usado. Portanto, não deve ser necessário salvar o conteúdo.

## Simulação



- Ter uma loja com várias localidades sob a mesma vinculação
- Tente salvar um conteúdo em uma localidade que não seja a principal.
- Se você abrir a guia Rede nas Ferramentas de desenvolvimento, ela mostrará a mensagem "Conteúdo original não encontrado" em uma solicitação

## Workaround


Temos uma versão beta do pages-graphQL, abra um tíquete para solicitar sua instalação.





