---
title: 'Documentação de homologação para a AppStore'
id: Y87JaGVk2qOYiiouMSU4G
status: DRAFT
createdAt: 2018-10-23T22:18:45.145Z
updatedAt: 2020-03-13T21:24:57.581Z
publishedAt: 
firstPublishedAt: 2018-10-24T22:16:38.366Z
contentType: tutorial
productTeam: VTEX IO
author: TnXcuQydAAOuwWACo864E
slug: documentacao-de-homologacao-para-a-appstore
locale: pt
legacySlug: documentacao-de-homologacao-para-a-appstore
subcategory: 3e2VLdLao8GGk4sAmMmwmi
---

Criamos esse guia ensinando as melhores praticas e diretrizes para garantir que o seu app seja publicado na AppStore VTEX com sucesso :)

__Permissões__ 
É necessário informar a lista com as APIs da VTEX e eventuais links externos que sua app irá acessar.

O link para as permissões da sua app devem ser cadastradas no arquivo manifest.json, no campo:  “policies”    


__Termos de uso__ 
O link para os termos de uso da sua app devem ser cadastrados no arquivo manifest.json, no campo:  "billingOptions"  →  "termsURL"

__Suporte__ 
É necessário informar pelo menos um contato para suporte, pode ser um email e/ou um link para o suporte da sua empresa. 

Os links devem ser cadastrados no arquivo manifest.json, no campo:  "billingOptions" →  "support"


### Avaliação Técnica
Para o processo de avaliação técnica é necessário informar o link com o repositório do código fonte da sua app no github e um link para alguma loja VTEX (pode ser um ambiente de teste) com a app instalada e funcionando.

Onde eu envio os links para testarem minha app? [Aqui](https://goo.gl/forms/RO39RytBDJFRdRbR2)

Antes de solicitar que sua App seja homologada, cheque se sua App segue as diretrizes a seguir.

### Lint
É necessário que seu projeto esteja propriamente lintado segundo as regras utilizadas na VTEX. Você precisará dos arquivos: .eslintrc, tslint.json e tsconfig.json. Você pode usar este [repo](https://github.com/vtex-apps/store-graphql/tree/master) como exemplo. Para configurar seu ambiente local você precisa:
- Colocar o arquivo .eslintrc em /react
- Colocar tslint.json e tsconfig.json em /node
- Adicionar tslint e tslint-config-vtex ao /node/package.json. Rodar `yarn` ou `npm` em /node
- Adicionar os seguintes pacotes ao /react/package.json:

```
    "devDependencies": {
       "babel-eslint": "^8.2.2",
       "eslint": "^5.2.0",
       "eslint-config-vtex": "^8.0.0",
       "eslint-config-vtex-react": "^3.0.1",
       "eslint-plugin-import": "^2.2.0",
       "eslint-plugin-react": "^7.0.0",
       "prop-types": "^15.5.10",
       "react": "^16.2.0"
     }

```

- Rodar `yarn` ou `npm` em /react
- Caso você use o editor VSCode, recomendamos que você instale as extensões "ESLint" e "TSLint"
- Se preferir, você pode desativar a ordenação de chaves em objetos:

```
    // tslint.json
    {
      "extends": "tslint-config-vtex",
      "rules": {
"object-literal-sort-keys": false
      }
    }
    
```


### Manifest.json
Dependências:
- Verifique se não há dependências repetidas ou que não estão sendo utilizadas
- Dê preferência para as versões mais atualizadas

Policies
- Procure deixar seu path o mais granular possível (evite /*) [Mais informações](http://help.vtex.com/pt/tutorial/autorizando-sua-app)
Errado:

```
{
      "name": "outbound-access",
      "attrs": {
"host": "{{account}}.vtexcommercestable.com.br",
"path": "/*"
      }
    },

```
Correto:
```
{
  "name": "outbound-access",
  "attrs": {
    "host": "{{account}}.vtexcommercestable.com.br",
    "path": "/api/license-manager/users"
  }
},

```
Não utilize o host `vtexcommercebeta`

__Backend__:
Remova tudo o que não estiver sendo utilizado: imports, paths, etc.
Use GraphQl. [Mais informações](https://github.com/vtex/graphql-server/wiki)

__Frontend__:
- Use os componentes do Styleguide da VTEX. Eles foram feitos para tornar sua vida mais fácil
- Sua app deve estar traduzida para português, inglês e espanhol. [Exemplo](https://github.com/vtex-apps/dreamstore/tree/master/react/locales)
- Use [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html) - [Exemplo](https://github.com/vtex-apps/landing-pages/blob/4be8354f3384ad75439caeaf0b0a2b446cdbcad8/react/components/Footer/FooterLink.js)
- Para apps de admin, use [animações de carregamento](http://help.vtex.com/pt/tutorial/admin-app-loading-animacao)
- Não use 100% da largura da tela. Centralize o conteúdo
- Evite fazer "polling" de dados continuamente. Faça o "fetch" apenas quando dados novos estão/deveriam estar disponíveis
- Evite forçar um refresh na página. Caso seja necessário, não utilize paths absolutos ou window.location para refresh/transições entre páginas. Errado: `window.location.href="/admin/myapp"`.
- Lembre-se que uma app com um bom UX é essencial para o sucesso da sua app

