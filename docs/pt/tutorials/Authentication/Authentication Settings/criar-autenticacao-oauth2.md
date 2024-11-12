---
title: 'Criar autenticação OAuth2'
id: 21LbTSTgag4MsuisQsyIm6
status: PUBLISHED
createdAt: 2019-01-24T20:45:47.861Z
updatedAt: 2021-10-14T19:16:15.207Z
publishedAt: 2021-10-14T19:16:15.207Z
firstPublishedAt: 2019-01-24T22:04:05.091Z
contentType: tutorial
productTeam: Identity
author: 2LFh4Ox3XiWIqUMWw4MOGw
slugEN: creating-an-oauth2-authentication
locale: pt
legacySlug: criar-autenticacao-oauth2
subcategoryId: cgsivNN3J6M6gKAYoeIww
---

Para alguns lojistas, existe a necessidade de criar uma autenticação adicional na VTEX com sua base própria de logins. Por exemplo: 
- Um "clube fidelidade" de clientes, com login e senha já criados em sua própria plataforma.
- Login de funcionário para venda em sua "loja de colaboradores".

Por conta disso, a VTEX disponibiliza autenticação OAuth2 integrada ao VTEX ID.

>⚠️ Como este é um assunto com aspectos bastante técnicos, recomendamos o acompanhamento de um parceiro ou equipe de TI.

## O que é OAuth2

O OAuth é um protocolo de autorização muito utilizado em aplicações web escaláveis. A versão atual é a 2.0, que utiliza tokens para acessar seus dados em outro sistema.

## Qual é a utilidade do OAuth2

Para as lojas VTEX, o principal benefício trazido pelo OAuth2 é a possibilidade de reaproveitar login e senhas já criados em sistemas externos integrados à VTEX. Isso agiliza o processo de autenticação quando necessário, sendo a mesma lógica da autenticação via Facebook e Google+, por exemplo.

## Guia oficial de referência

Você pode consultar o guia oficial do protocolo OAuth2 neste endereço: https://tools.ietf.org/html/rfc6749

## Fluxo de integração do OAuth2 com o VTEX ID

Com base na documentação oficial, veja abaixo uma ilustração que explica a integração do OAuth2 com o VTEX ID:
![oauth2](https://images.contentful.com/alneenqid6w5/4Ux3h1bUYMCc6gqaIqo6O6/3e7add68640f1a7f5c6acf74ad4fac36/Fluxo_OAuth2_VTEX_ID.jpg)

A partir dessa ilustração, vamos detalhar os passos a seguir.

Note que qualquer parte do processo só acontece exclusivamente pelo protocolo __HTTPS__.

### 1. URL de autorização (getAuthorizationCode)

O usuário (cliente da loja) verá a tela de login do VTEX ID e irá optar por usar determinado provedor de identidade (externo à VTEX).

O VTEX ID irá redirecionar o usuário para uma URL de autorização do provedor de identidade. Naturalmente, isso será uma requisição com o método GET neste servidor.

Essa URL de autorização é fornecida pelo lojista e terá pelo menos três parâmetros (querystring):
- Client ID: é o identificador do VTEX ID no provedor de identidade; o parâmetro tem nome livre (sugerido `client_id`) e seu valor é determinado pelo provedor (sendo sempre fixo);
- URL de retorno: será usado nos próximos passos do fluxo; seu valor é determinado pelo VTEX ID mas o nome do parâmetro é livre (sugerido `return_url`);
- "state": é usado junto à URL de retorno e tem nome e valor determinados pelo VTEX ID (não deve ser alterado).

Se necessário, o VTEX ID aceita a inclusão de parâmetros adicionais, bastando indicar o nome das chaves e seus valores. Lembrando que chaves e valores são sempre fixos.

A partir da URL de autorização, o usuário irá passar pelo processo de autenticação no provedor de identidade externo. 

Autenticado com sucesso, o provedor deverá redirecionar o usuário de volta para o VTEX ID, de modo que a URL de destino deverá ser:
- a URL de retorno que foi enviada pelo VTEX ID;
- junto do parâmetro "state" (mantendo seu valor original);
- e mais um novo parâmetro, que irá representar o código de autenticação gerado pelo provedor de identidade; seu nome é livre (sugerido `auth_code`).

### 2. URL para troca de código de autorização por código de acesso (getAccessCode)

Quando o usuário voltar para a URL de retorno, o VTEX ID irá capturar o código de autorização para, a partir dos servidores de backend (fora do browser do cliente), obter um código de acesso.

Este código de acesso será utilizado para obter os dados do cliente com segurança e criar os cookies que identificarão o usuário dentro dos serviços da VTEX.

Essa URL será usada necessariamente com o método POST.

O código de autorização deve ser enviado no corpo da requisição (body), que pode ser tanto no formato JSON (content-type `application/json`) ou form-urlencoded (content-type `application/x-www-form-urlencoded`). É necessário nos indicar o método desejado e qual o nome da chave que vai representá-lo.

Parâmetros adicionais podem ser enviados na querystring e/ou no body. Lembrando que chaves e valores são sempre fixos.

Para a segurança do processo o VTEX ID precisa do Client ID e Client Secret (o ID é o mesmo do início do processo, de modo que eles funcionam como appKey e appToken). Eles podem ser enviados com o header "Authorization" ou como parâmetros na URL (chaves de nome livre).

Na resposta esperamos receber o código de acesso no body, que pode ser no formato JSON (content-type `application/json`) ou form-urlencoded (content-type `applicat
ion/x-www-form-urlencoded`); o nome da propriedade é livre, bastando informá-la para mapeamento.

Parâmetros adicionais podem fazer parte da resposta, mas a princípio não são úteis.

### 3. URL para obter os dados do usuario (getUserInfo)

Essa URL será usada necessariamente com o método GET.

O cliente deve ser reconhecido pelo próprio código de acesso, que será enviado como um header Authorization Bearer. Opcionalmente, ele também pode ser enviado como parâmetro (querystring).

Se necessário, o VTEX ID aceita a inclusão de parâmetros adicionais, bastando indicar o nome das chaves e seus valores. As chaves e valores sempre serão fixos. 

Na resposta esperamos receber o e-mail do cliente e seu ID no provedor de identidade. Também é adequado disponibilizar o nome do cliente (embora não seja obrigatório). Os dados podem ser entregues no formato JSON (`content-type application/json`) ou form-urlencoded (`content-type application/x-www-form-urlencoded`).

Informações adicionais podem fazer parte da resposta, mas a princípio não são úteis.

__Importante__: a chave única da plataforma VTEX é o e-mail. Do lado do provedor de identidade pode ser solicitado outro tipo de informação para autenticar a pessoa (CPF, CNPJ, login, telefone etc) mas o que deve ser enviado na integração para a VTEX é o e-mail que foi autenticado. Esse cenário atende B2B, B2C, B2E.

Concluída essa etapa, o usuário vai receber um cookie com o token de autorização que lhe identificará dentro dos serviços da VTEX.

## Exemplo de uso

A seguir exemplificamos o processo usado para uma integração OAuth2 tendo o Google como provedor de identidade:

#### getAuthorizationCode 

Request:
```
GET https://accounts.google.com/o/oauth2/auth?redirect_uri=https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&access_type=offline&response_type=code&client_id={clientId}&state={state}
```

#### getAccessCode 

Request:
```
POST https://accounts.google.com/o/oauth2/token

Body: redirect_uri=https://vtexid.vtex.com.br/VtexIdAuthSiteKnockout/ReceiveAuthorizationCode.ashx&grant_type=authorization_code&client_id={clientId}&client_secret={clientSecret}&code={authorizationCode}
```

Response:
```
{
	"access_token" : {accessToken},
	"expires_in" : 3600,
	"id_token" : {jwt},
	"token_type" : "Bearer"
}
```

#### getUserInfo 

Request:
```
GET https://www.googleapis.com/oauth2/v1/userinfo?access_token={accessToken}
```

Response:
```
{
	"id": {id},
	"email": {email},
	"verified_email": true,
	"name": "Rodrigo Silva de Andrade",
	"given_name": "Rodrigo",
	"family_name": "Silva de Andrade",
	"link": "xxxxxx",
	"picture": "xxxx",
	"gender": "male",
	"locale": "pt-BR"
}
```

## Resumo

Assim que o serviço estiver desenvolvido e público na internet, todos os dados de configuração devem ser encaminhados à VTEX (via ticket de suporte) para que seja configurado o ambiente da loja e integrado ao VTEX ID, disponibilizando mais uma opção de login para seus clientes.

>ℹ️ Se você tiver múltiplas lojas (subcontas) listadas em **Configurações da conta > Gerenciamento da conta > Conta**, cada uma exigirá sua própria configuração de provedor de identidade OAuth2.

Em resumo, são eles:

- todos endpoints habilitados para HTTPS
- credenciais (client ID e client Secret, ou equivalente)
- credenciais (usuário/email e senha) para teste de configuração  
- nome desejado para o provedor de identidade, que no resultado final será apresentado como texto do botão "Entrar como {nome do provedor}"

Para __getAuthorizationCode__:

- URL da requisição (método GET)
- nome do parâmetro para client ID
- nome do parâmetro para URL de retorno
- parâmetros adicionais (se houver, indicando chave e valor)
- chave que contém o código de autorização (na resposta)

Para __getAccessCode__:

- URL da requisição (método POST)
- modo para código de autorização (body em JSON ou form-urlencoded)
- parâmetros adicionais na URL (se houver)
- parâmetros adicionais no body (se houver)
- modo para credenciais (header Authorization)
- formato da resposta (body em JSON ou form-urlencoded)
- chave que contém o código de acesso (na resposta)

Para __getUserInfo__:

- URL da requisição (método GET)
- parâmetros adicionais (se houver)
- chave que contém o ID do usuário (na resposta)
- chave que contém o e-mail (na resposta)
- chave que contém o nome (na resposta, se houver)
