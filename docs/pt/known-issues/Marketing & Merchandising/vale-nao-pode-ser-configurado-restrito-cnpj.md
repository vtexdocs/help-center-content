---
title: 'Vale não pode ser configurado para uso restrito no caso de CNPJ'
id: 4k3FdaYP3WUqYsAeUSGY22
status: PUBLISHED
createdAt: 2017-04-11T21:26:42.491Z
updatedAt: 2022-12-22T20:54:14.031Z
publishedAt: 2022-12-22T20:54:14.031Z
firstPublishedAt: 2017-04-11T21:40:39.506Z
contentType: knownIssue
productTeam: Marketing & Merchandising
author: authors_35
tag: Portal (CMS)
slugEN: voucher-cannot-be-configured-for-restricted-use-in-the-case-of-a-cnpj
locale: pt
kiStatus: Backlog
internalReference: 
---

## Sumário

Uma loja tem a necessidade de compartilhar um vale com os membros de um grupo específico, por exemplo, uma empresa. Contudo, a opção de restringir não há como ser aplciada para CNPJ.

Logo, quando o vale tem a configuração do campo __Restrito__ setada como `Sim`, a restrição ocorre apenas para CPF.

Nos casos em que um CNPJ tem apenas um CPF associado, o vale irá funcionar.

## Simulação

1. Entrar no módulo __Catalog__.
2. Clicar em __Controles de Campanha__.
3. Clicar em __Vale__.
4. Criar ou alterar um vale.
5. Inserir CNPJ.
6. Marcar como Restrito.
7. Marcar como Reutilizável.

Ao usar vale com usuários cadastrados na loja que possuem no seu cadastro a informação desse CNPJ, o vale não terá efeito.

## Workaround

O workaround seria manter a restrição por CPF.

Esse sistema, incluído no Portal, está sendo substituído. Já é possível usar o novo Giftcard Hub por meio de APIs.

Veja nossa documentação sobre [integração com gift card](/pt/tutorial/integrando-com-gift-card/).

E também nossa [documentação técnica sobre APIs](/pt/developer-docs/).

