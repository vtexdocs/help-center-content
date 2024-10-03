---
title: 'Ativar nova CDN da VTEX'
id: 400JfRm4VGgsKgqgOw4WWA
status: ARCHIVED
createdAt: 2017-10-02T23:12:05.096Z
updatedAt: 2023-08-09T20:43:20.267Z
publishedAt: 
firstPublishedAt: 2017-10-03T02:09:58.361Z
contentType: tutorial
productTeam: Reliability
author: authors_4
slugEN: activating-new-vtex-cdn
locale: pt
legacySlug: ativar-nova-cdn-da-vtex
subcategoryId: 2Za4fjGfxYOo6oqykukgyy
---

>⚠️ Em um compromisso de constante evolução do nosso produto, a VTEX está disponibilizando às suas lojas uma nova CDN (Content Delivery Network). Neste novo modelo, **todas as páginas do site serão entregues a partir dessa nova CDN especializada**, não se limitando aos arquivos estáticos.

Uma Rede de Entrega de Conteúdo (tradução livre de seu acrônimo) foca em segurança, baixa latência e altas velocidades de transferência, trabalhando com as melhores tecnologias para este fim, inclusive sendo geograficamente próxima do cliente que acessa a loja virtual.

Um dos maiores ganhos que a CDN traz é o uso de HTTP/2 para entregar toda a loja VTEX. Trata-se de uma atualização recente para um protocolo que não era atualizado há vários anos e que promove uma série de melhorias. Este artigo traz mais informações sobre o HTTP/2 de maneira bastante didática: [Tecnoblog - Como funciona o HTTP/2 e o que ele muda na sua vida](https://tecnoblog.net/173920/http-2-como-funciona/).

__Todas as lojas VTEX devem migrar para a nova CDN.__

<div class="alert alert-success">
  <strong>Não há riscos</strong> ou contraindicações para aderir ao novo modelo.
</div>

Cumpridos os requisitos deste artigo, deve ser feito o preenchimento [deste formulário](https://docs.google.com/forms/d/e/1FAIpQLSdI2FBXGmlSOXEtWxrYfVveln7xOJcmYotqrKfgFgmHn771Fg/viewform) para solicitar a ativação do novo serviço.


## Requisitos

### Ativar HTTPS em todo o site

>ℹ️ Um dos requisitos para a nova CDN é que o site seja disponibilizado totalmente em HTTPS.

Isto porque, com a nova CDN, qualquer página HTTP será automaticamente redirecionada para HTTPS. Mas antes é importante configurar sua loja na VTEX para que ela aceite o tráfego neste protocolo. Em caso contrário, ela será redirecionada novamente para HTTP - criando um loop de redirecionamento, o que quebrará a navegação destas páginas.

Para fazer essa configuração, siga os passos indicados no artigo [Ativar HTTPS em todo o site](/pt/tutorial/ativar-https-em-todo-o-site).

### Atualizar CNAME no DNS

Com a nova CDN, as lojas devem atualizar a entrada CNAME em seu DNS. Se a sua loja foi ao ar recentemente, provavelmente ela já usa esse CNAME, mas não deixe de verificar!

O novo CNAME para apontar o endereço de seu site (hostname) para os servidores da VTEX é: 

`{hostname}.cdn.vtex.com`

Considere que {hostname} é o endereço __completo__ de sua loja.

<div class="alert alert-success">
  Essa alteração <strong>não provoca indisponibilidade</strong> do site nem depende de propagação.
</div>

Exemplos:
```
Endereço da loja: www.site.com
  - Entrada (subdomínio): www
  - Tipo: CNAME
  - Destino: www.site.com.cdn.vtex.com
```
```
Endereço da loja: www.site.com.br
  - Entrada (subdomínio): www
  - Tipo: CNAME
  - Destino: www.site.com.br.cdn.vtex.com
```
```
Endereço da loja: loja.minhaempresa.com
  - Entrada (subdomínio): loja
  - Tipo: CNAME
  - Destino: loja.minhaempresa.com.cdn.vtex.com
```
```
Endereço da loja: www.loja.minhaempresa.com.br
  - Entrada (subdomínio): www.loja
  - Tipo: CNAME
  - Destino: www.loja.minhaempresa.com.br.cdn.vtex.com
```

Atente-se que o início do domínio ("loja", "www", "www.loja" ou qualquer outro) e a terminação (".com", ".com.br", ".com.ar" ou qualquer outro) fazem parte do `{hostname}`, e devem estar no CNAME de destino.

Apontamentos antigos usam endereços como:
- ssl.vtexcommerce.com.br
- ssl9.vtexcommerce.com.br (ou outro número)
- www.nomedaloja.vtexcommerce.com.br
- hodor.vtex.com

Independentemente de qual for o caso da sua loja, você deverá fazer a atualização para o novo padrão.

>❗ **Importante:** o CNAME antigo **deve ser removido**. A existência de duas entradas em seu DNS provavelmente vão ocasionar em problemas. Deve ser mantida somente a nova entrada CNAME.

Não se esqueça de solicitar a ativação final pelo [formulário](https://docs.google.com/forms/d/e/1FAIpQLSdI2FBXGmlSOXEtWxrYfVveln7xOJcmYotqrKfgFgmHn771Fg/viewform). A loja vai funcionar somente com o CNAME e HTTPS, mas o seu preenchimento nos ajuda a ativar de forma antecipada a CDN para sua loja, para que sua loja possa desfrutar dos novos recursos.

## Leitura de dados do Master Data

Lojas que possuem implementações no front-end que fazem leitura de dados do Master Data devem realizar uma pequena atualização na rota utilizada para se comunicar com a API.

Exemplo:

- Rota antiga: `https://www.site.com/accountname/dataentities/CL/search?email=my@email.com`
- Rota atualizada: `https://www.site.com/api/dataentities/CL/search?email=my@email.com`

A nova rota apenas substitui o `/accountname` do início por `/api`, e segue funcionando como a anterior. Isso é fundamental para evitar o cache dessa API na nova CDN, mantendo somente o cache gerenciado pelo Master Data.

A alteração é relevante apenas na leitura de dados, ou seja, para o método GET. A gravação de dados (feita por métodos como POST, PUT e PATCH) não é afetada por cache.
