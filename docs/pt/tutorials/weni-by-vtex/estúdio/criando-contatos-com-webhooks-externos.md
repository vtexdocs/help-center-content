---
title: 'Criando contatos com Webhooks externos'
id: 2uiciJ2WsW6G9tfSDpvE12
status: PUBLISHED
createdAt: 2025-09-12T16:55:38.856Z
updatedAt: 2025-10-03T14:21:49.419Z
publishedAt: 2025-10-03T14:21:49.419Z
firstPublishedAt: 2025-10-03T14:21:49.419Z
contentType: tutorial
productTeam: Post-purchase
author: 4JJllZ4I71DHhIOaLOE3nz
slugEN: creating-contact-from-an-external-webhook
legacySlug: criando-contatos-com-webhooks-externos
locale: pt
subcategoryId: 2kZMtDveyKwicJ6Hs8s2yN
---

Neste artigo, mostraremos de forma simples como trazer contatos da sua plataforma externa para a Plataforma Weni.

A Plataforma Weni possui dezenas de [APIs](https://dash.weni.ai/api/flows/api/v2/explorer) que podem ser consumidas para diversas funcionalidades. Neste artigo, focaremos estritamente na integração de contatos para automatizar sua comunicação.

Contatos são os registros de cada pessoa dentro de um determinado canal de comunicação. Neles, podem ser salvos campos padrão, como nome, e-mail, telefone e WhatsApp, assim como diversos campos personalizados que podem ser criados e utilizados livremente na comunicação.

Normalmente, os webhooks são disparados a partir de um determinado evento dentro do software parceiro, como, por exemplo:

- Ao criar, atualizar e deletar um registro de cliente;- Ao mudar o status de um registro de lead em uma plataforma CRM.Quando tais eventos ocorrem, devem ser disparadas requisições para a Plataforma Weni atualizar os registros de contatos, permitindo que toda a automação de comunicação seja modificada em tempo real.

#### **Adicionando Contatos**

Você pode adicionar um novo contato enviando uma requisição **POST** para essa URL com os seguintes dados:

- **Name** - o nome completo do contato (string, opcional)
- **Language** - o idioma preferido do contato (ISO Code de 3 dígitos, opcional)
- **Urns** - uma lista de URNs que você quer associar a esse contato (array de até 100 strings, opcional). Dentro das URNs é usado um prefixo com o canal no qual a comunicação com esse contato pode ser iniciada, segue alguns exemplos abaixo:tel: Telefone para envios de SMS e Ligações;- whatsapp: Telefone de WhatsApp para comunicação por esse canal, veja que nesse caso devem ser utilizados 8 ou 9 dígitos para o telefone, dependendo de como esse número está no WhatsApp;- mailto: E-mail não é um canal de comunicação para recebimento, apenas para envio;
- **Ext:** - Identificador externo que pode ser utilizado para o canal externo ou para facilitar a busca de um contato por meio de um identificador qualquer.
- **Groups** - uma lista de UUIDs de grupos que esse contato faz parte, grupos são explicados abaixo (array de até 100 strings, opcional)
- **Fields** - os campos de contato que você quer configurar ou atualizar para esse contato, os campos precisam estar previamente criados (dicionário com até 100 itens, opcional). Exemplo:

```
POST /api/v2/contacts.json
​{​
​""name""​:​ ​""John Cordeiro""​,​
​""language""​:​ ​""por""​,​
​""urns""​:​ ​[
""tel:+558299331122""​,​
""whatsapp:​558299331122""​,
""mailto:​john.dalton@ilhasoft.com.br​"",
""ext:123456""
],​
​""groups""​:​ ​[​""6685e933-26e1-4363-a468-8f7268ab63a9""​],​
​""fields""​:​ ​{​
​""nickname""​:​ ​""Macklemore""​,​
​""side_kick""​:​ ​""Ryan Lewis""​
​}
}
```

#### **Atualizando Contatos**

Uma requisição **POST** também pode ser usada para atualizar um contato existente se você especificar pela URL tanto o seu UUID quanto uma de suas URNs. Apenas aqueles campos incluídos no corpo serão atualizados no contato, os demais permanecerão intactos.

Se estiver passando uma URN na URL, então não inclua ela no corpo. Também note que nós criaremos um novo contato caso não exista nenhum com essa URN, você receberá uma resposta 201 caso isso aconteça.

Exemplo:

```
​POST ​/​api​/​v2​/​contacts​.​json​?​uuid​=​09d23a05​-​47fe​-​11e4​-​bfe9​-​b8f6b119e9ab
​{​
​""name""​:​ ​""John Cordeiro""​,​
​""language""​:​ ​""por""​,​
​""urns""​:​ ​[​""tel:+558299331122""​,​ ​""whatsapp:558299331122""​],​
​""groups""​:​ ​[
{​
""name""​:​ ​""Devs""​,​
​ ""uuid""​:​ ​""6685e933-26e1-4363-a468-8f7268ab63a9""​
}
],​
​""fields""​:​ ​{}​
}​

POST ​/​api​/​v2​/​contacts​.​json​?​urn​=​tel​%​3A​%​2B250783835665​
{​
​""fields""​:​ ​{​""nickname""​:​ ​""Ben""​}​
}
```

#### **Deletando Contatos**

Uma requisição **DELETE** também pode ser usada para deletar um contato existente se você especificar na URL tanto o seu UUID quanto uma de suas URNs.

Exemplo:

```
DELETE /api/v2/contacts.json?uuid=27fb583b-3087-4778-a2b3-8af489bf4a93

DELETE /api/v2/contacts.json?urn=tel%3A%2B250783835665
```

Você receberá uma resposta 204 se seu contato for deletado, ou uma resposta 404 se nenhum contato for encontrado com os parâmetros passados.

#### **Adicionando campos personalizados**

Uma requisição **POST** pode ser usada para criar um novo campo de contato. Você não precisa especificar uma chave, nós geraremos uma para você.

- **label** - A label de exibição (string)
- **value_type** - um dos tipos de dados aceitos (string)
- **text:** Campos do tipo texto
- **datetime:** Campos com informação de data e hora (exemplo do formato: 2020-01-31T09:27:39.071299-03:00)
- **numeric:** Campos numéricos. 

Exemplo:

```
​POST ​/​api​/​v2​/​fields​.​json
​{​
​""label""​:​ ​""Nick name""​,​
​""value_type""​:​ ​""text""
}
```

Você receberá um objeto (com a nova chave do campo) se a resposta for bem sucedida:

```
​{​
​""key""​:​ ​""nick_name""​,​
​""label""​:​ ​""Nick name""​,​
​""value_type""​:​ ​""text""
}
```

#### Adicionando um Grupo de Contato

Uma requisição **POST** pode ser usada para criar um novo grupo de contato. Não especifique um UUID, nós geraremos um pra você.

- **name** - o nome do grupo (string)Example:

```
POST /api/v2/groups.json
​{​
​""name""​:​ ​""""​
}
```

Você receberá um objeto de grupo se a resposta for bem sucedida:

```
​{​
​""uuid""​:​ ​""5f05311e-8f81-4a67-a5b5-1501b6d6496a""​,​
​""name""​:​ ​""Reporters""​,​
​""count""​:​ ​0​,​
​""query""​:​ ​null
}
```

#### **Atualizando um grupo**

Uma requisição **POST** pode ser usada para atualizar um grupo de contatos existente se você especificar na URL o seu UUID.

Exemplo:

```
​POST ​/​api​/​v2​/​groups​.​json​?​uuid​=​5f05311e-8f81​-​4a67​-​a5b5​-​1501b6d6496a​
{​
​""name""​:​ ​""Checked""​
}
```

Você receberá um objeto de grupo atualizado se a resposta for bem sucedida:

```
​{​
​""uuid""​:​ ​""5f05311e-8f81-4a67-a5b5-1501b6d6496a""​,​
​""name""​:​ ​""Checked""​,​
​""count""​:​ ​0​,​
​""query""​:​ ​null
}
```

#### Deletando um Grupo

Uma requisição **DELETE** pode ser usada para deletar um grupo de contato se você especificar na URL o seu UUID.

Notas: - Você não pode deletar grupos que estão associados à campanhas, fluxos ou triggers. Você deve primeiro deletar objetos relacionados através da interface web.

Exemplo:

```
​DELETE ​/​api​/​v2​/​groups​.​json​?​uuid​=​5f05311e-8f81​-​4a67​-​a5b5​-​1501b6d6496a
```

Você receberá uma resposta 204 se o grupo for deletado, ou uma resposta 404 caso nenhum grupo seja encontrado.

#### **Conclusão**

Ao final, a sua plataforma estará apta para sincronizar em tempo real os dados com a nossa plataforma, permitindo assim que o usuário use o poder das automações e da Inteligência Artificial para se comunicar de forma mais próxima e contínua com o seu público.
