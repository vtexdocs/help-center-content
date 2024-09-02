---
title: 'Por que um cliente conseguiu cadastrar um CPF num campo de CNPJ?'
id: 6FBJ2envYAI82eQQGMKQcm
status: DRAFT
createdAt: 2018-07-25T17:42:33.984Z
updatedAt: 2022-10-17T20:09:26.554Z
publishedAt: 
firstPublishedAt: 2018-07-25T18:21:00.959Z
contentType: frequentlyAskedQuestion
productTeam: Master Data
author: authors_59
slug: por-que-um-cliente-conseguiu-cadastrar-um-cpf-num-campo-de-cnpj
locale: pt
legacySlug: por-que-um-cliente-conseguiu-cadastrar-um-cpf-num-campo-de-cnpj
---

Este cenário costuma ocorrer por conta de uma inconsistência nos campos de cadastro do usuário. Para verificarmos o cenário, precisamos acessar os dados deste cliente no __Profile System__ da sua loja. 

Siga os passos abaixo para validar as informações:

1. Acesse o admin da sua loja: `https://{AccountName}.myvtex.com/admin`.
2. No menu lateral do admin, clique em __Master Data__.
3. Na caixa __Profile System__, clique em __Clientes__.
4. Selecione a opção __E-mail__ e busque pelo e-mail do cliente.![e-mail - Master Data](https://images.ctfassets.net/alneenqid6w5/cjpYKSZ1i8USYqs8Yga4E/df2c4793391483458ffcf8209a222f69/e-mail_-_Master_Data.png)
5. Clique no registro do cliente para acessar os detalhes do perfil.

Na seção __Contato__, você verá que a opção `É Empresa?` está preenchida com o valor `Não`. Ao mesmo tempo, na seção __Dados da empresa__, você verá que o campo `Tipo documento` está preenchido com o valor `cnpj`. 

Isso significa que são carregados os dados de cliente para o tipo pessoa física, por conta do campo `É Empresa?: Não`. Porém, o `Tipo documento` está com valor `cnpj`, criando a inconsistência.  

Para solucionar a questão, você deve alterar o campo `Tipo documento` para `cpf`.
