---
title: 'Boas práticas na utilização de chaves de aplicação'
id: 7b6nD1VMHa49aI5brlOvJm
status: PUBLISHED
createdAt: 2022-10-04T21:36:57.185Z
updatedAt: 2024-10-23T00:04:22.825Z
publishedAt: 2024-10-23T00:04:22.825Z
firstPublishedAt: 2022-10-04T21:41:08.638Z
contentType: tutorial
productTeam: Others
author: 2Gy429C47ie3tL9XUEjeFL
slugEN: best-practices-application-keys
locale: pt
legacySlug: boas-praticas-na-utilizacao-de-chaves-de-aplicacao
subcategoryId: 6uJgdHqWf1Mo0rUfgxseTn
---

A VTEX dispõe de diversas APIs para que clientes e parceiros possam desenvolver integrações altamente personalizáveis com a plataforma.  [Chaves de aplicação](https://help.vtex.com/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) são usadas para fornecer acesso seguro a dados consumidos por integrações, sem expor sua conta a usuários ou aplicativos não autorizados.

>ℹ️ Este tipo de credencial é utilizado para autenticação de identidade via API.

O manuseio inadequado de [chaves de aplicação](https://help.vtex.com/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) pode gerar vazamentos e, consequentemente, situações de acesso indevido. Conheça abaixo boas práticas que recomendamos para o gerenciamento destas credenciais, as quais você pode implementar para aumentar a segurança da sua loja.

## Rotacione chaves periodicamente

É aconselhável que você desative chaves antigas e crie novas ao longo do tempo. Assim você garante que suas [chaves de aplicação](https://help.vtex.com/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) tenham duração determinada.

Essa prática se assemelha a definição de uma política de senha com configurações de trocas de senhas periódicas. 

## Reavalie chaves e acessos periodicamente

Revise as [chaves de aplicação](https://help.vtex.com/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet) existentes periodicamente. Confira se as integrações relativas a cada chave estão ativas e se ainda são necessárias. Um processo proativo de revisão de acesso permite com que cada usuário ou integração tenha acesso apenas aos recursos que sejam realmente necessários, diminuindo as chances de ocorrer qualquer tipo de acesso indevido. 

Se a recomendação anterior é semelhante a definição de trocas de senha periódicas, essa recomendação pode ser comparada ao processo de revisão de acesso com periodicidade definida.

## Crie chaves individuais para cada função e integração

Restrinja o acesso de cada chave a recursos e informações pela respectiva função e necessidade. Ao reduzir a quantidade de informações compartilhadas entre usuários ou integrações, você reduz o risco de vazamento por ameaças internas.

Note que o gerenciamento de permissões para chaves de aplicação é realizado com [perfis de acesso](https://help.vtex.com/tutorial/roles--7HKK5Uau2H6wxE1rH5oRbc) e [recursos do License Manager](https://help.vtex.com/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

## Mantenha um programa de conscientização

A realização de campanhas de conscientização em segurança da informação é uma prática sustentável e eficiente para educar e mudar a relação das pessoas com a tecnologia. Inclua a importância da gestão responsável de acessos na pauta de treinamentos e comunicações, assim como o valor das credenciais de cada membro da companhia.

## Nunca use _código client_ side para fazer integrações

Note que parte do código que compõe a sua loja, é executado no cliente, ou seja, no navegador de usuários. Portanto, é normal que esta parte do código fique exposta a pessoas de fora da sua operação.

Dessa forma, é essencial instruir seu time de desenvolvimento que não utilize este código para fazer integrações, já que este uso costuma incluir no código as [chaves de aplicação](https://help.vtex.com/tutorial/application-keys--2iffYzlvvz4BDMr6WGUtet).

## Não compartilhe tokens de chaves de aplicação

Proteja os seus pares de chaves e tokens de aplicação com o mesmo nível de sigilo que aplicaria a credenciais de login, como nomes de usuário e senhas. Para reduzir riscos, evite compartilhá-los por emails, tickets, chats ou outros canais de comunicação.
