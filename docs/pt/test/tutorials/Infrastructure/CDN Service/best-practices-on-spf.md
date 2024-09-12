---
title: 'Boas práticas de SPF (Sender Policy Framework)'
id: 42t0lkl2VyC6Yewc4wA6wI
status: PUBLISHED
createdAt: 2017-08-09T16:58:00.716Z
updatedAt: 2024-02-22T18:11:49.023Z
publishedAt: 2024-02-22T18:11:49.023Z
firstPublishedAt: 2017-08-10T00:04:19.239Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slug: configuracao-de-spf
locale: pt
legacySlug: configuracao-de-spf
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

O [SPF](http://www.open-spf.org/Introduction/) (Sender Policy Framework) é um sistema que evita que servidores não autorizados enviem emails em nome de um domínio. Esse sistema verifica se o servidor apresenta as políticas determinadas pelo administrador desse domínio. Essa configuração é essencial para evitar problemas de entregabilidade dos emails transacionais.

Se você está tentando melhorar a entregabilidade de emails transacionais da sua loja, considere também fazer a [configuração de DKIM](https://developers.vtex.com/docs/guides/setting-up-dkim-for-transactional-emails).

## Entendendo a sintaxe

Para mais detalhes da sintaxe, recomendamos a documentação [Sender Policy Framework SPF Record Syntax](http://www.open-spf.org/SPF_Record_Syntax/).

No gerenciador de DNS, o SPF será uma entrada TXT na raíz do domínio (ex: site.com), com o seguinte formato:

`site.com. IN TXT “v=spf1 a mx ip4:192.0.2.32/27 include:provedor.com ~all”`

Podemos dividir a política acima nas seguintes seções:

- `v=spf1`: prefixo obrigatório.
- `a mx ip4:192.0.2.32/27 include:provedor.com`: remetentes permitidos.
- `~all`: condição de inclusão ou exclusão de remetentes fora dos declarados anteriormente.

Dentro do elemento de remetentes permitidos, as regras acima significam que um servidor pode enviar mensagens em nome do domínio em questão (site.com) quando:

- `a`: seu endereço IP seja encontrado na entrada tipo A do domínio.
- `mx`: seja designado como MX do domínio.
- `ip4`: pertence ao bloco de endereços IP `192.0.2.32/27`.
- `include`: satisfaz as regras de SPF presentes no domínio referenciado (provedor.com).

A condição de inclusão ou exclusão pode apresentar os seguintes valores:

- `+all`: será permitido qualquer remetente fora dos declarados.
- `-all`: será recusado qualquer remetente fora dos declarados.
- `~all`: será necessária outra etapa de verificação para recusar os remetentes não autorizados. (Recomendado)
- `?all`: será desconsiderada a verificação dos remetentes não autorizados.

Recomendamos a utilização de `~all`, que apresenta melhor taxa de entregabilidade. Se houver um remetente não autorizado, essa opção não trava o envio do email, mas informa que a validação do SPF falhou.

## SPF no contexto VTEX

A VTEX faz uso do SPF `include:amazonses.com`. É o serviço de envio de emails transacionais da Amazon, utilizado no remetente padrão (tipo VTEX) do Message Center.

Veja nosso artigo de [configuração do SPF](https://developers.vtex.com/vtex-rest-api/docs/setting-up-the-spf) para mais detalhes.
