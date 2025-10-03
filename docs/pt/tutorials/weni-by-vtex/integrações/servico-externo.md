---
title: 'Serviço Externo'
id: 26X76IsTismURqqELr6R2v
status: PUBLISHED
createdAt: 2025-09-15T15:46:29.264Z
updatedAt: 2025-10-03T14:20:32.210Z
publishedAt: 2025-10-03T14:20:32.210Z
firstPublishedAt: 2025-10-03T14:20:32.210Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: external-service
legacySlug: servico-externo
locale: pt
subcategoryId: 7e9LaCixVcvflzgWkxlftd
---

# Configuração de Canal Externo

Esta documentação descreve como configurar e integrar um **canal externo** para que a plataforma receba e envie mensagens usando um serviço externo. Ela complementa o material existente e detalha os campos e opções disponíveis para que a conexão funcione corretamente.

## Visão geral

Um **canal externo** é uma integração que permite que o sistema de atendimento se conecte a serviços de mensageria de terceiros (ex.: telefones, redes sociais, bots, etc.). Para cada canal é preciso configurar alguns campos básicos e opções, como o tipo de identificador (URN Type), endereço, método HTTP, codificação e tipo de conteúdo. Este documento explica o propósito de cada campo, quando usá-los e quais são os valores disponíveis.

## Tipo de URN (URN Type)

O campo **Tipo de URN** indica qual forma de identificador será usada para enviar ou receber mensagens. Cada tipo corresponde à forma como o contato do usuário é representado no canal externo (por exemplo, número de telefone, identificador do WhatsApp, handle do Twitter, etc.). A lista completa de opções é exibida na interface e inclui diversos canais suportados.

O valor **Identificador Externo** (destacado na lista) é o mais indicado quando você quer centralizar diferentes canais em uma mesma integração. Ele permite trabalhar com canais que não correspondem a um tipo específico da lista.

### Principais tipos disponíveis

| Tipo de URN | Exemplo de uso |
|-------------|----------------|
| **Número de telefone** | Mensagens SMS ou ligações |
| **Identificador do Facebook** | Messenger/Chat do Facebook |
| **Instagram identifier** | Instagram Direct |
| **Twitter handle / ID** | Contas no Twitter |
| **Identificador Viber / LINE** | Apps de mensagens variados |
| **Identificador do Telegram** | Bots/usuários do Telegram |
| **Email** | Contato via correio eletrônico |
| **Identificador do WhatsApp** | Integrações via WhatsApp |
| **Identificador do Discord / Slack / Teams** | Plataformas de chat corporativo |
| **Identificador Freshchat, VK, Rocket.Chat, JioChat, WeChat, Firebase Cloud Messaging, WeniWebChat, etc.** | Outros serviços suportados |

> **Recomendação:** se você não tiver certeza de qual tipo escolher ou se o canal não se enquadrar em nenhuma categoria específica, selecione **Identificador Externo**. Esse tipo é genérico e permite identificar contatos de diferentes origens.

## Endereço (address)

O campo **Endereço** ou **address** deve ser preenchido **apenas com um nome ou rótulo** que identifique de forma legível o contato ou canal que está sendo recebido. Este campo não deve conter o número de telefone real nem o identificador completo do usuário; seu objetivo é facilitar a identificação interna do endereço quando houver diversas integrações configuradas.

## Método HTTP

O campo **HTTP Method** define como as mensagens serão enviadas ao serviço externo. Estão disponíveis três métodos:

- **GET** – envia dados como parâmetros de URL. Use apenas quando o serviço externo aceitar parâmetros em uma chamada GET.
- **POST** – envia dados no corpo da requisição. Este é o método mais comum para integrações de mensagens.
- **PUT** – semelhante ao POST, mas usado quando o serviço externo espera atualizações de recursos existentes.

> **Nota:** ao escolher **POST** ou **PUT** você deve definir também o **Content-Type** (veja a seção 5). Para **GET** o campo Content-Type não é obrigatório.

## Codificação (Encoding)

O campo **Codificação** controla como os caracteres da mensagem são processados antes do envio. Isso é útil para evitar erros em plataformas que têm limitações de caracteres ou de texto. As opções são:

| Codificação | Quando utilizar |
|-------------|-----------------|
| **Codificação Padrão** | Envia o texto sem alterações ou codificações extras. Indicado para a maioria dos canais. |
| **Codificação Inteligente** | Efetua substituições e remoção de símbolos potencialmente problemáticos (por exemplo, convertendo emojis em textos). Útil quando o canal externo possui limitações de caracteres ou não suporta certos símbolos. |
| **Codificação Unicode** | Converte a mensagem para a forma unicode, preservando todos os caracteres especiais. Use quando o canal exige envio de caracteres em formato unicode |

## Content-Type

O campo **Content type** informa ao serviço externo em qual formato os dados estão sendo enviados. Ele **só é obrigatório** quando o método HTTP selecionado é **POST** ou **PUT**. Para requisições **GET** o campo pode ficar em branco. As opções disponíveis são:

| Content-Type | Descrição |
|--------------|-----------|
| **URL codificado – application/x-www-form-urlencoded** | Envia os dados no corpo da requisição usando pares chave=valor, codificados como formulário. É o formato padrão de formulários HTML. |
| **JSON – application/json** | Formato JSON, recomendável para APIs modernas. |
| **XML – text/xml; charset=utf-8** | Formato XML, utilizado em algumas integrações legadas. |

> **Dica:** sempre verifique a documentação do serviço externo para saber qual Content-Type ele espera. Para APIs REST é comum utilizar application/json.

## Limite de caracteres (max_length)

O campo max_length (ou Maximum length) define a quantidade máxima de caracteres permitida por mensagem enviada. Se o conteúdo da mensagem exceder esse limite, ele será automaticamente dividido em duas ou mais mensagens.

Por exemplo, se o canal externo só permite mensagens com até 1000 caracteres e o texto enviado possui 1500 caracteres, defina max_length = 1000. Nessa configuração a plataforma enviará uma primeira mensagem com 1000 caracteres e uma segunda mensagem com os 500 restantes.

**Observação:** é importante conhecer o limite de caracteres do serviço que você está integrando. Definir max_length com um valor maior do que o suportado pelo canal pode fazer com que as mensagens sejam cortadas ou rejeitadas.

## Exemplo de body e retorno

Abaixo está um exemplo de corpo de requisição (request body) enviado para o canal externo. As variáveis entre chaves ({{...}}) serão substituídas dinamicamente pelo sistema quando a mensagem for enviada:

```json
{
  "id": {{id}},
  "text": {{text}},
  "to": {{to}},
  "to_no_plus": {{to_no_plus}},
  "from": {{from}},
  "from_no_plus": {{from_no_plus}},
  "channel": {{channel}},
  "quick_replies": {{quick_replies}}
}
```

Esses campos significam:

| Campo | Descrição |
|-------|-----------|
| ID | identificador único da mensagem ou interação |
| text | conteúdo da mensagem que está sendo enviada ao serviço externo |
| to / to_no_plus | identificador do destinatário, podendo incluir (to) ou não (to_no_plus) o sinal +. O formato depende do tipo de URN escolhido |
| from / from_no_plus | identificador do remetente, no mesmo padrão de to |
| quick_replies | estrutura de botões rápidos caso o canal suporte respostas pré-definidas |

## Cabeçalho de autorização (Authorization)

Alguns serviços externos exigem um token ou chave para autenticação. Se este for o caso, utilize o campo **Valor de Autorização do Cabeçalho** para informar o valor do token. Esse valor será enviado no cabeçalho HTTP com a chave Authorization em todas as requisições originadas do canal.

Por exemplo, se seu serviço exigir um token Bearer 12345, preencha o campo com o valor `Bearer 12345`. A plataforma adicionará automaticamente o cabeçalho:

```
Authorization: Bearer 12345
```

Deixe este campo em branco caso o serviço externo não exija autenticação via cabeçalho.

## URLs de envio e métodos HTTP

A forma de construção da requisição varia de acordo com o método HTTP selecionado:

### GET (somente Enviar URL)

Se o método escolhido for **GET**, somente o campo **Enviar URL** estará disponível.

Você deve preencher esse campo com a URL do seu serviço (endpoint), incluindo os parâmetros desejados em formato de query string. Os valores entre {{...}} serão substituídos dinamicamente pela plataforma.

**Por exemplo**, para enviar as variáveis from, text, to e quick_replies via GET, a URL pode ser:

```
https://send.weni.ai/api/v2?from={{from}}&text={{text}}&to={{to}}{{quick_replies}}
```

Na chamada acima, a plataforma realizará um GET para a URL informada sempre que houver uma mensagem de saída, substituindo as variáveis pelos valores reais. Não existe corpo de solicitação no método GET e, portanto, o Content-Type é ignorado.

### POST ou PUT (Enviar URL + Corpo da solicitação)

Quando o método selecionado for **POST** ou **PUT**, além do campo **Enviar URL** surge o campo **Corpo da solicitação**.

Nesses métodos o envio das variáveis ocorre no corpo da requisição, respeitando o Content-Type selecionado. O **Content-Type** deve sempre corresponder ao formato utilizado no corpo:

- **application/x-www-form-urlencoded** – o corpo deverá conter pares chave=valor separados por &.
- **application/json** – o corpo deverá ser um objeto JSON válido.
- **text/xml; charset=utf-8** – o corpo deverá estar em formato XML.

Para um serviço que aceita JSON, a configuração pode ser:

- Method: HTTP POST
- Content-type: JSON – application/json
- Enviar URL: https://send.weni.ai/api/v2
- Corpo da solicitação:

```json
{
  "id": {{id}},
  "text": {{text}},
  "to": {{to}},
  "to_no_plus": {{to_no_plus}},
  "from": {{from}},
  "from_no_plus": {{from_no_plus}},
  "channel": {{channel}},
  "quick_replies": {{quick_replies}}
}
```

Com essa configuração a plataforma fará um POST para https://send.weni.ai/api/v2 enviando o JSON acima.

Se você optar por application/x-www-form-urlencoded, o corpo poderá ser:

```
id={{id}}&text={{text}}&to={{to}}&to_no_plus={{to_no_plus}}&from={{from}}&from_no_plus={{from_no_plus}}&channel={{channel}}&quick_replies={{quick_replies}}
```

## Checagem de resposta (mt)

O campo **Checagem de resposta** (por vezes exibido como **MT** ou *match text*) permite definir uma string ou expressão que será procurada na resposta do serviço externo para determinar se a requisição foi bem-sucedida.

Por exemplo, se o serviço externo retorna `{"status":"OK"}` ao receber uma mensagem com sucesso, você pode preencher o campo com OK. Assim, a plataforma considerará a requisição bem-sucedida quando a resposta conter esse texto.

Caso o campo seja deixado em branco, a plataforma validará o sucesso apenas pelo status HTTP 200.

## URLs de retorno (callbacks) da plataforma

Após configurar o canal externo, a plataforma gera um conjunto de URLs que devem ser utilizadas pelo seu serviço para garantir o ciclo completo de mensagens. Essas URLs estão disponíveis na seção **External API Configuration** e correspondem a pontos de retorno (callbacks) que o seu serviço deve chamar quando determinados eventos ocorrerem.

As principais URLs são:

### Enviar URL (send)

A URL utilizada para enviar mensagens **será exatamente aquela definida por você no campo Enviar URL** na etapa 9. Ou seja, quando a plataforma precisar encaminhar uma mensagem de saída ao canal externo, ela executará um GET/POST/PUT para a URL que você configurou, incluindo os parâmetros e/ou o corpo definidos.

Por exemplo, se na etapa 9 você configurou a URL https://send.weni.ai/api/v2 com o método POST e escolheu o formato JSON, a chamada de envio terá a seguinte estrutura:

```
POST https://send.weni.ai/api/v2
{
  "id": "1241244",
  "text": "Love is patient. Love is kind.",
  "to": "+2520788123123",
  "to_no_plus": "2520788123123",
  "from": "weni",
  "from_no_plus": "weni",
  "channel": "15292",
  "quick_replies": ["One", "Two", "Three"]
}
```

Se o método configurado for **GET**, a plataforma chamará a URL com os parâmetros na query string conforme exemplificado na seção 9.1.

### URL recebidas (receive)

Esta é a URL que **seu serviço** deve chamar quando receber uma mensagem de um usuário. Sempre que uma nova mensagem chegar ao seu canal externo, envie um POST para esse endpoint com os parâmetros:

- from – URN do usuário (identificador único definido por você)
- text – conteúdo da mensagem enviada pelo usuário
- date (opcional) – data e hora em formato ISO-8601 (AAAA-MM-DDThh:mm:ssZ) indicando quando a mensagem foi recebida

Por exemplo:

```
POST https://flows.weni.ai/c/ex/<ID>/receive
from=%2B2520788123123&text=Love+is+patient.+Love+is+kind.&date=2012-04-23T18:25:43.511Z
```

Ao receber esta requisição, a plataforma processará a mensagem e enviará uma resposta através da URL configurada anteriormente, fechando o ciclo.

### URL enviadas (sent) – opcional

Seu serviço pode notificar a plataforma sempre que uma mensagem for **enviada** com sucesso para o usuário. Para isso, faça um POST para essa URL, passando o identificador da mensagem no body:

```
POST https://flows.weni.ai/c/ex/<ID>/sent?id=1234
```

### URL entregues (delivered) – opcional

Caso deseje informar à plataforma que uma mensagem foi **entregue** ao destinatário final, faça um POST para essa URL com o parâmetro id igual ao identificador da mensagem:

```
POST https://flows.weni.ai/c/ex/<ID>/delivered?id=234
```

### URL de desativação / parada do contato (stopped)

Se o seu canal fornecer uma maneira de os usuários optarem por **parar de receber mensagens**, você deve notificar a plataforma. Quando um usuário se descadastrar, seu serviço deve enviar um POST para essa URL com o parâmetro from contendo o URN do usuário que pediu a desativação:

```
POST https://flows.weni.ai/c/ex/<ID>/stopped?from=%2B2520788123123
```

Esta notificação é opcional, mas recomenda-se enviá-la para que o usuário seja marcado como opt-out e não receba novas mensagens.

---

Em caso de dúvida, procure o suporte técnico ou consulte a documentação oficial do serviço que está integrando.
