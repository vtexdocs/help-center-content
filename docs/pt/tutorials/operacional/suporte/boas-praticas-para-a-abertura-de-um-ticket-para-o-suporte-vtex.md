---
title: 'Boas práticas para a abertura de um ticket para o Suporte VTEX'
id: 6u4ehk6F0ksuDgYuCbFDRX
status: PUBLISHED
createdAt: 2023-03-23T22:00:24.560Z
updatedAt: 2025-02-27T12:14:39.320Z
publishedAt: 2025-02-27T12:14:39.320Z
firstPublishedAt: 2023-03-23T22:57:50.828Z
contentType: tutorial
productTeam: Others
author: 46G4yHIZerH7B9Jo0Iw5KI
slugEN: writing-an-effective-ticket-to-vtex-support
legacySlug: como-escrever-um-ticket-completo-para-o-suporte-vtex
locale: pt
subcategoryId: 1yB08KlKzqJOdc0bn38HaY
---

Todos os clientes e parceiros têm acesso a atendimento fornecido pelo time de especialistas do [Suporte VTEX](/pt/docs/tutorials/como-funciona-o-suporte-da-vtex). Para contatá-los, é necessário abrir um chamado por meio do sistema de tickets. 

Os especialistas estão preparados para proporcionar a melhor experiência possível para a solução dos chamados. Porém, para garantir um atendimento mais rápido e objetivo, existem algumas orientações que devem ser seguidas durante a abertura do ticket. 

Lembre-se que, quanto mais contexto os especialistas tiverem, mais rápido será possível chegar a uma resolução para o problema.

Este artigo orienta clientes e parceiros VTEX a abrirem tickets com informações relevantes para agilizar o processo de investigação dos nossos especialistas e alcançar mais rapidamente a solução do seu problema. Ele está dividido nas seguintes seções:

- [Antes de abrir um ticket](#Antes-de-abrir-um-ticket)
- [Preenchendo um ticket](#preenchendo-um-ticket)

Para saber como abrir um chamado na VTEX, leia o artigo [Abrir chamados para o suporte VTEX](/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex).

## Antes de abrir um ticket

Antes de abrir um ticket, confira se o problema está relacionado às customizações da loja. Se a origem do problema for uma customização, você precisará entrar em contato com a sua equipe responsável pela customização.  

### Carrinho, Checkout e lojas em CMS

É importante validar se o cenário ocorre sem customização da loja. Para realizar este teste, desative as customizações (JS e CSS) e tente reproduzir o erro. Saiba como fazer isso com o artigo [Como bloquear customizações para investigar problemas no front-end da loja](/pt/faq/como-bloquear-customizacoes-para-investigar-problemas-no-front-end-da-loja). 

### Store Framework

Para verificar se o problema está associado ao IO siga os passos abaixo:

1. Abra o prompt de comando e faça login na sua loja, utilizando a [VTEX IO CLI](https://developers.vtex.com/docs/guides/vtex-io-documentation-vtex-io-cli-installation-and-command-reference).
2. Acesse um workspace de desenvolvimento, rodando o seguinte comando:
    ```
    vtex use {workspace}
     ```
3. Se a sua loja possui um tema do Store Framework instalado, desinstale usando o comando abaixo:  
      ```
    vtex uninstall {tema}
     ```
    > ℹ️ Você pode conferir se existe algum tema instalado usando o comando `vtex list`, que lista todos os aplicativos instalados na loja.
4. Clone o tema padrão do Store Framework no seu computador.
5. No prompt de comando, acesse a pasta do tema padrão.
6. Rode o comando:
    ```
    vtex link
    ```
   > ⚠️ Se a sua loja não possui o aplicativo Reviews and Ratings instalado, você pode receber um erro ao tentar linkar. Para evitar isso, remova este app da lista de `peer dependencies` do arquivo `manifest.json` do tema padrão.
7. Acesse a frente de loja relativa ao seu workspace, usando a URL:
    ```
    https://{workspace}--{accountName}.myvtex.com
    ```

8. Tente reproduzir o erro.

Se o erro não acontece após o bloqueio dos arquivos ou no tema padrão do Store Framework, significa que o erro é relacionado às customizações presentes no site e para a resolução, você deve entrar em contato com a equipe responsável pelo frontend da sua loja.

## Preenchendo um ticket
Se, após seguir todas as etapas indicadas anteriormente, o problema persistir, abra um ticket para o [suporte VTEX](https://supporticket.vtex.com/support) seguindo as orientações da tabela abaixo.

| Informações | Orientações |
| ----------- | ----------- |
| Assunto e descrição do problema |  - Resuma o problema ou dúvida em poucas palavras. Preencha o campo **Assunto da solicitação** de forma concisa e direta para ajudar o time de especialistas a entender rapidamente o cenário.   - Preencha o campo **Assunto da solicitação** com a descrição completa do que foi observado, incluindo o quê, como e onde está acontecendo o problema, para que o time de especialistas possa investigar e reproduzir o cenário. Não esqueça de informar caso o passo a passo para reprodução do cenário inclua alguma ação atípica que precisa ser tomada ou permissão de acesso restrita.   |
| Evidências | Inclua qualquer material que o problema possa ser observado, sempre que disponível. Por exemplo, capturas ou gravações da tela, [arquivos HAR](/pt/docs/tutorials/gerar-arquivo-har-para-debugar-problemas-na-loja), logs gerados pela plataforma, respostas do servidor, o texto ou o ID do erro apresentado. |
| Cenário esperado | Forneça detalhes do cenário que era esperado, em comparação ao que está acontecendo. |
| Testes e validações | Se você já tentou solucionar o problema, detalhe as ações já executadas, quais documentações foram consultadas e seus resultados. |
| Escopo do ticket |  - Não enderece mais de um problema no mesmo ticket.   - Não crie mais de um ticket para o mesmo problema.  |
| Prioridade | Verifique a [prioridade](/pt/docs/tutorials/recursos-de-suporte-global-da-vtex#prioridade-de-chamados) correta de acordo com  a natureza do problema, para que o [SLA](/pt/docs/tutorials/recursos-de-suporte-global-da-vtex#disponibilidade-e-sla-de-atendimento) correto seja aplicado. |

### Informações relevantes por cenário

Existem vários cenários que podem levar à abertura de um ticket. Nessa seção, serão elencados os cenários mais comuns com informações básicas necessárias para abertura do ticket em cada cenário.

Você pode adaptar essas informações ao seu cenário específico e também usá-las como guia  em sua própria investigação antes da abertura de ticket.

| Cenários | Informações |
| ----------- | ----------- |
| Pedidos |  - ID do pedido ou do `orderForm `.   - URL do pedido no ** Gerenciamento de pedidos ** ou no ** Bridge ** (em casos de pedidos de marketplaces com integrações nativas).  |
| Checkout |  - URL do carrinho gerado pelo [Cartman](/pt/docs/tutorials/configurar-o-cartman).   - IDs dos SKUs e CEP para reprodução do carrinho.   - [HAR](/pt/docs/tutorials/gerar-arquivo-har-para-debugar-problemas-na-loja). 
| Logística |  - ID do seller.   - URL de estoque, doca ou transportadora do seller.   - Informações para simular entrega, como IDs dos SKUs e CEP. |
| Pagamentos |  - ID da transação.   - Link da transação, acessando no Admin VTEX * Pagamentos > Transações. * 
| VTEX IO |  - Nome e versão do aplicativo utilizado.   - Workspace utilizado.   - Arquivo ZIP com o [store-theme](https://developers.vtex.com/docs/guides/vtex-io-documentation-3-settingyourstoretheme) em caso de tema linkado e não instalado.  |
| Promoções |  - Nome da promoção.   - URL da promoção.   - Produto e CEP aplicáveis à promoção para testes.  |
| Integrações (aplicável aos parceiros de integração) |  - Explicação sobre o produto e o papel dele na VTEX.   - Seu objetivo final antes do problema ocorrer.   - Em caso de chamadas para APIs da VTEX que falharam: endpoint utilizado, request body e response body.   - ID e URL do afiliado (se o problema for na integração com um marketplace externo). 

#### Saiba mais

- [Abrir chamado no suporte VTEX](/pt/docs/tutorials/abrir-chamados-para-o-suporte-vtex)
- [Como funciona o suporte da VTEX?](/pt/docs/tutorials/como-funciona-o-suporte-da-vtex)
- [Suporte VTEX - Brasil](/pt/docs/tutorials/recursos-de-suporte-global-da-vtex)
