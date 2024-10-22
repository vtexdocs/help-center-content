---
title: 'Por que um cliente conseguiu cadastrar um CPF num campo de CNPJ?'
id: K6zJn8JFOKk5ON1XFB6ZJ
status: ARCHIVED
createdAt: 2022-10-17T19:22:31.749Z
updatedAt: 2024-07-11T19:21:58.380Z
publishedAt: 
firstPublishedAt: 2022-10-17T19:43:17.176Z
contentType: tutorial
productTeam: Master Data
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: why-was-a-customer-able-to-register-a-cpf-in-a-cnpj-field
locale: pt
legacySlug: por-que-um-cliente-conseguiu-cadastrar-um-cpf-num-campo-de-cnpj
subcategoryId: 42hDtnYXHw5ExG6l19RP1l
---

Este cenário costuma ocorrer por conta de uma inconsistência nos campos de cadastro do usuário. Para verificarmos o cenário, precisamos acessar os dados deste cliente no __Profile System__ da sua loja.

>⚠️ Este artigo diz respeito ao funcionamento do Master Data v1. É importante avaliar qual versão do Master Data atende as necessidades ou está em uso na sua operação. Saiba mais:
>
> *<a href="https://help.vtex.com/tutorial/master-data--4otjBnR27u4WUIciQsmkAw#versions-available">
> Características das versões do Master Data
> </a>
>
> *<a href="https://developers.vtex.com/vtex-rest-api/docs/getting-started-1">
> Master Data v2
> </a>
> 

Siga os passos abaixo para validar as informações:

1. No Admin VTEX, acesse **Configurações da loja** > **Storefront** > **Master Data**.
2. Na caixa __Profile System__, clique em __Clientes__.
3. Selecione a opção __E-mail__ e busque pelo e-mail do cliente.![e-mail - Master Data](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/docs/pt/tutorials/Master Data/Customer relations management/por-que-um-cliente-conseguiu-cadastrar-um-cpf-num-campo-de-cnpj_1.png)
4. Clique no registro do cliente para acessar os detalhes do perfil.

Na seção __Contato__, você verá que a opção `É Empresa?` está preenchida com o valor `Não`. Ao mesmo tempo, na seção __Dados da empresa__, você verá que o campo `Tipo documento` está preenchido com o valor `cnpj`. 

Isso significa que são carregados os dados de cliente para o tipo pessoa física, por conta do campo `É Empresa?: Não`. Porém, o `Tipo documento` está com valor `cnpj`, criando a inconsistência.  

Para solucionar a questão, você deve alterar o campo `Tipo documento` para `cpf`.
