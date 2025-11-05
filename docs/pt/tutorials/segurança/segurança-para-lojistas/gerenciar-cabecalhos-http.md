---
title: 'Gerenciar cabeçalhos HTTP'
id: 2cCTvwQR3Z4ENVKMJU6NK3
status: PUBLISHED
createdAt: 2024-06-07T17:58:18.041Z
updatedAt: 2024-06-07T18:40:52.927Z
publishedAt: 2024-06-07T18:40:52.927Z
firstPublishedAt: 2024-06-07T18:40:52.927Z
contentType: tutorial
productTeam: Reliability
author: YRJ73j8mt38D5TUleocQB
slugEN: managing-http-headers
legacySlug: gerenciar-cabecalhos-http
locale: pt
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

O HTTP (Hypertext Transfer Protocol) é um protocolo de comunicação básica usado para transferir dados na World Wide Web (WWW). Ele opera no modelo cliente-servidor, em que clientes, como navegadores, solicitam recursos como páginas da web a servidores da web. Essas requisições são trocadas em formato de mensagem, seguindo um conjunto de regras e padrões definidos pelo protocolo.

Os cabeçalhos desempenham um papel fundamental na comunicação HTTP, fornecendo informações adicionais sobre a operação em andamento. Há dois tipos principais de cabeçalhos:

- **Cabeçalhos de requisição:** Enviados pelo cliente ao servidor. Eles contêm informações sobre a requisição feita, como o tipo de método HTTP usado, o tipo de conteúdo aceito, cookies, entre outros.
- **Cabeçalhos de resposta:** Enviados pelo servidor para o cliente. Fornecem informações sobre a resposta enviada, como o status da resposta, o tipo de conteúdo retornado, cookies, entre outros.

> ℹ️ Para mais informações, leia o guia de MDN [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP) e as documentações relacionadas.

Neste guia, você aprenderá a gerenciar os cabeçalhos de resposta de segurança na sua loja desenvolvida com Store Framework.

## Cabeçalhos de resposta de segurança

Nas lojas do Store Framework, se você precisar adicionar ou alterar o valor de um cabeçalho de resposta de segurança, abra um ticket para o [Suporte da VTEX](https://supporticket.vtex.com/support).

Veja abaixo os cabeçalhos que aceitam edição:

- [**X-Frame-Options**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options): permite o controle de como os sites podem ser incorporados a outros por meio do uso de frames. Esse cabeçalho é uma medida de segurança para proteger o usuário contra ataques de [clickjacking](https://developer.mozilla.org/en-US/docs/Web/Security/Types_of_attacks#click-jacking), que ocorrem quando um hacker induz o usuário a clicar em algo em uma página da web sem o consentimento dele.
- [**X-Content-Type-Options**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options): protege contra vulnerabilidades [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types), que podem ocorrer quando um site permite que os usuários enviem conteúdo para um site.
- [**Content-Security-Policy (CSP)**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy): permite controlar os recursos que o usuário pode carregar em uma determinada página, evitando ataques de [cross-site scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).
- [**Strict-Transport-Security (HSTS)**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security): informa aos navegadores que o site só deve ser acessado usando HTTPS.
- [**X-XSS-Protection**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection): informa os navegadores sobre como lidar com ataques de XSS (cross-site scripting), ativando o filtro integrado para bloquear a execução de scripts maliciosos no navegador do usuário.
- [**Referrer-Policy**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy): determina quais informações da página de origem são compartilhadas com a página de destino em requisições HTTP. Isso é fundamental para proteger a privacidade do usuário e a segurança do site.

## Cabeçalhos personalizados

É possível configurar um cabeçalho personalizado, ou seja, um valor que não padronizado e é específico para os requisitos ou as funcionalidades específicas da loja.

> ⚠️ Cada conta só pode adicionar um único cabeçalho personalizado.

Se você precisar configurar um cabeçalho personalizado, abra um ticket para o Suporte da VTEX, fornecendo as chaves e os valores a serem definidos, pois você será totalmente responsável por essas informações. Consulte a documentação do MDN sobre [cabeçalhos](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) para usar como guia.

Veja abaixo um exemplo de um cabeçalho personalizado:

```json
"customHeader": {
   "key": "Strict-Transport-Security",
   "value": "max-age=31536000; includeSubdomains; preload"
 }
```

O valor `max-age=31536000; includeSubdomains` em um contexto de cabeçalho Strict-Transport-Security (HSTS) representa a duração máxima, em segundos, que a política HSTS deve ser aplicada pelo navegador para um domínio específico e seus subdomínios.

A diretiva `preload` indica que o domínio deve ser incluído na lista de pré-carregamento do HSTS, o que garante que os navegadores compatíveis só se conectarão via HTTPS, mesmo para a requisição inicial.
