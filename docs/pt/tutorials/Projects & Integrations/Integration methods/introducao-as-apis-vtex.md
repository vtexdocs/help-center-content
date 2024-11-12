---
title: 'Introdução às APIs VTEX'
id: 3SjAqQ0BeUqu2ge8AiIkmW
status: ARCHIVED
createdAt: 2017-06-08T20:46:13.393Z
updatedAt: 2020-04-08T16:15:23.801Z
publishedAt: 
firstPublishedAt: 2017-06-08T21:03:38.350Z
contentType: tutorial
productTeam: Others
author: authors_24
slugEN: introduction-to-vtex-apis
locale: pt
legacySlug: introducao-as-apis-vtex
subcategoryId: 1vwB9FtTSQmcSewQw02QoW
---

Uma API (Application Programming Interface) é um conjunto de rotinas e padrões de programação para acesso a aplicativos de software ou plataformas baseado na Web.

A VTEX disponibiliza uma série de APIs abertas para que os lojistas e parceiros realizem integrações altamente customizáveis com nossos sistemas. 

Se você não tem experiência com programação mas deseja lidar com esse tipo de integração, é importante saber o básico sobre como funcionam as trocas de dados via API.

Alguns programas nos ajudam a lidar com APIs e construir requests rapidamente. Um dos mais utilizados é o **Postman**, que usamos aqui como referência.

No entanto, uma API pública que não precisa de autenticação pode ser executada até mesmo no seu browser, como se fosse uma URL normal.

### O conceito de API
 
Quando um site ou aplicativo precisa se comunicar com outro sistema, ele normalmente faz isso por meio de uma API.
 
Na VTEX, por exemplo, toda vez que a sua loja insere um novo valor de frete para uma transportadora ou sempre que o sistema de um parceiro faz uma consulta do número de produtos em seu estoque, essa comunicação se dá por uma API específica para cada um desses determinados fins.
 
Para que o sistema 1 se comunique com o sistema 2, ele precisa ter acesso a um código disponibilizado pelo sistema 2. 

Além disso, se a API que ele deseja usar for privada, ele vai precisar de uma **AppKey** e um **AppToken** (que funcionam mais ou menos como senha e login). Já no caso de APIs públicas, isto não é necessário.
 
### Enviando requests
 
O **request** é a solicitação que um sistema faz ao outro (“delete isso”, “consulte aquilo” etc.). Para saber como sua loja está interagindo por meio das APIs e que resultados estão sendo retornados, é importante saber simular requests. É aí que entra o [Postman](https://www.getpostman.com/docs/requests).
 
As quatro partes principais de um request HTTP são: 
- URL.
- Método.
- Headers.
- Body.

Vamos entender melhor cada uma delas.

****

#### URL

É onde está contida a rota que o seu request deve percorrer para obter, publicar ou deletar a informação desejada.

Por exemplo, a URL para obter as informações sobre determinado SKU em uma loja VTEX é: `http://{{AccountName}}.{{environment}}.com.br/api/catalog_system/pvt/sku/stockkeepingunitbyid/{{skuId}}`

Nela devem ser incluídos:
- O nome da loja: `{{AccountName}}`.
- O ambiente, ou seja, vtexcommercestable ou vtexcommercebeta: `{{environment}}`.
- O ID do SKU: `{{skuId}}`.
 
No Postman, a URL deve ser inserida no campo destacado abaixo:

![APIs1](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

****

#### Método

Para interagirem, as APIs usam determinados métodos, que, no protocolo HTTP, funcionam por meio de **verbos**. Cada um deles determina um tipo de ação. Os mais comuns são:
- __GET__: lê ou recupera informações.
- __POST__: cria um novo recurso.
- __PUT__: atualiza um recurso.
- __DELETE__: remove um recurso.
 
No caso da URL do exemplo acima, como o que desejamos é ler informações de um SKU, o verbo usado é o GET.
 
Mas você não precisa deduzir isso sozinho. Ao disponibilizar uma API, a VTEX informa o método que deve ser usado com ela.
 
No Postman, o método é selecionado à esquerda do campo de URL.

![APIs2](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

****

#### Headers
 
Como as informações da sua loja são particulares, todas as APIs da VTEX são privadas. Para ter acesso a elas e simular um request, é necessário ter a AppKey e o AppToken.
 
Quando um novo usuário é criado para a sua loja, atribui-se a ele determinado perfil de acesso no módulo [License Manager](/pt/tutorial/visao-geral-do-modulo-license-manager/). E, para cada um desses perfis, é permitido o acesso a determinadas APIs. Por exemplo, embora um usuário com o perfil de televendas tenha acesso ao módulo OMS do seu admin, ele não consegue acessar informações da sua loja via API.
 
No postman, a AppKey e o AppToken devem ser inseridos na aba **Headers**. No primeiro header, insira `X-VTEX-API-AppKey` e então sua AppKey. Na segunda linha, insira `X-VTEX-API-AppToken` e então seu AppToken. Para saber como gerar sua AppKey e seu ApToken, leia o artigo [Criar appKey e appToken para autenticar integrações](/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes).

![APIs3](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

****

#### Body
 
É no campo de Body que aparece o corpo da resposta à requisição. 
 
No exemplo do GET que mostramos anteriormente, o que queríamos eram informações sobre determinado SKU. Estas virão provavelmente em um JSON com diversos dados sobre o nome do SKU, suas dimensões, sua imagem etc. Todas elas aparecerão no Body da resposta.
 
Além disso, alguns requests (especificamente aqueles em que uma informação está sendo enviada, e não solicitada) exigem um código no corpo da requisição. Neste caso, você usará o Body não apenas para ler a resposta, mas como campo onde inserir os dados necessários à solicitação. Este é, portanto, o Body do Request.

### Onde encontrar as APIs da VTEX
 
As APIs da VTEX estão disponíveis em nosso Help Center, na seção [Developer Docs](/pt/developer-docs).
 
Elas ficam divididas por módulo ou funcionalidade. Entrando em um destes, você encontra as APIs correspondentes, cada uma delas acompanhada da indicação do método correto, URL e Headers. Algumas APIs têm também o código que deve ser passado no Body.
 
![APIs4](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)
 
À direita dessas indicações, o Postman exibe, para cada API, um Sample Request. De acordo com a linguagem escolhida na caixa de seleção acima dele, o Sample Request mostra como seria a aplicação da requisição no código.

![sample request](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)
 
Para algumas APIs, há também uma Sample Response, que é um exemplo de resposta àquele request.

>⚠️ Todo conteúdo que aparece entre chaves (**{{conteúdo}}**) é uma variável, e deve ser substituído pelo dado correto antes de se realizar o request. É o caso, por exemplo, do nome da sua loja, do ambiente desejado e dos valores de AppKey e AppToken.

Veja como criar o seu appKey e appToken no artigo [Criar appKey e appToken para autenticar integrações](/pt/tutorial/criar-appkey-e-apptoken-para-autenticar-integracoes).
