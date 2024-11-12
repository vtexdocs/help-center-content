---
title: 'Perfis de acesso'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: PUBLISHED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2024-10-28T19:08:43.136Z
publishedAt: 2024-10-28T19:08:43.136Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slugEN: roles
locale: pt
legacySlug: como-criar-perfil-de-acesso
subcategoryId: 1HSqkejwuYcQSMC400uY84
---

Toda ação na plataforma VTEX, como acessar uma página na interface administrativa, clicar em um botão ou fazer uma chamada em uma de nossas APIs, envolve uma requisição à nossa infraestrutura. Como é comum que as interfaces administrativas sejam compartilhadas pelos diversos colaboradores de uma empresa, é importante conseguir limitar o acesso a ações críticas dentro de uma conta. Dessa forma, minimiza-se a possibilidade de disrupções na operação de uma loja e garante-se que cada usuário tenha acesso apenas ao que lhe compete.

## O que é um perfil de acesso?

Na VTEX, utilizamos um sistema baseado em **recursos** para obter maior precisão no controle de acesso. Um **recurso** é uma entidade associada a uma ação ou informação dentro de nossa infraestrutura. Sempre que nossos sistemas recebem uma requisição, é feita uma análise de segurança para garantir que o usuário responsável pela chamada tem a permissão necessária. Para que a requisição seja bem-sucedida, o usuário precisa ter os recursos associados a essa requisição presentes em sua conta.  

Atualmente, trabalhamos com algumas centenas de recursos diferentes nos produtos VTEX. Para facilitar o gerenciamento de acesso de usuários por parte dos administradores de uma conta, existe o conceito de **Perfil de Acesso**. Para mais detalhes sobre cada recurso disponível, veja [Recursos do License Manager](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3).

Um **Perfil de Acesso** é um conjunto de recursos criado para atender a um tipo comum de usuário. Por exemplo: operadores de call center costumam executar um conjunto bem definido de tarefas. Percebendo isso, um administrador da conta, tendo acesso aos [recursos](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#) necessários, pode criar um **Perfil de Acesso** personalizado com todas as permissões necessárias para aqueles colaboradores e controlar o acesso de todos eles de uma vez.

### Tipos de perfis

Ao criar um novo **perfil de acesso** para sua loja, você tem a opção de criar um perfil customizado, selecionando cada recurso necessário, ou um dos perfis predefinidos disponibilizados pela VTEX. Veja aqui todos os [Perfis predefinidos](https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#) e as respectivas permissões associadas.

Caso deseje criar perfis customizados, confira mais detalhes sobre os [Recursos do License Manager](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

## Criando um perfil de acesso

Os perfis de acesso podem ser gerenciados por meio do painel administrativo da sua conta VTEX. Na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Perfis de acesso**.

![Lista perfis de acesso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_1.png)

Essa tela apresenta uma lista com todos os **perfis de acesso** cadastrados para a conta. Em uma conta recém-criada, apenas o perfil *Owner (Admin Super)* estará listado. Este perfil dá ao usuário acesso irrestrito a todos os **recursos nativos** da plataforma.

>⚠️ Alguns produtos, como o [VTEX Payment](https://help.vtex.com/pt/tracks/vtex-payment--7iCCIoIZFmd9OabU6QlmXu/1lZWKCGdy7xpYjukTLfFJL), são contratados a parte. Recursos associados a esses produtos não vêm inclusos no perfil <i>Owner (Admin Super)</i>. Para habilitar os recursos associados a esses produtos deve-se usar seus perfis de acessos correspondentes.

A quantidade de usuários com o perfil *Owner (Admin Super)* deve ser a menor possível. Além disso, é preciso se certificar que haja visibilidade e controle de quem recebe esse acesso.

>⚠️ O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas por vazamento de credenciais de login.

Para os usuários que não devem ter acesso irrestrito à plataforma, é importante que se criem **perfis de acesso** que limitem os recursos disponíveis a apenas os estritamente necessários para aquele tipo de usuário. Isso é possível clicando em **Novo Perfil**.

![Novo perfil de acesso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_2.png)

Essa tela permite a criação de um novo perfil. Isso pode ser feito baseando-se em formatos já definidos, criados pela equipe VTEX para atender a cenários comuns nas operações, ou de forma customizada, selecionando-se a quais recursos de cada produto devem ter acesso todos aqueles que estiverem com esse perfil associado a seu usuário.

Clicando em **Escolher perfil de acesso**, o menu *dropdown* apresenta uma lista de perfis predefinidos.  

![Menu perfis predefinidos](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_3.png)

Selecionar um dos perfis listados permite inspecionar quais são os recursos incluídos nesse perfil, separados por produto.

>ℹ️ Veja aqui todos os [Perfis predefinidos](https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy) e as respectivas permissões associadas.

![Novo perfil de acesso](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_4.png)

O perfil **Call center operator**, por exemplo, contém um recurso do produto *Catálogo* que permite executar operações numa loja em nome de um cliente e um recurso do *OMS* que permite checar o status de um pedido.

Para criar um perfil customizado, o administrador pode escolher a opção **Custom** do menu dropdown **Escolher perfil de acesso**. Ao clicar no menu dropdown em **Escolha um produto**, listam-se todos os recursos associados a cada produto.

![Configurando produto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_5.png)

É possível adicionar quantos produtos forem necessários ao perfil. Para isso, clique no botão **Configurar outro produto**, ao final da lista de produtos e recursos.

![Configurar outro produto](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_6.png)

Ao finalizar a configuração de produtos e recursos, o administrador pode escolher um nome para o perfil em **Nome do perfil**, caso se trate de uma configuração customizada.

![Nome do perfil](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_7.png)

>⚠️ É importante escolher nomes descritivos para os perfis de acesso, para deixar claro que tipo de usuário deve ter aquele acesso. Idealmente indicando o cargo na empresa ou atividade a ser desempenhada na plataforma.

Boas práticas de gerenciamento dos perfis de acesso aumentam a segurança de uma operação, além de se reforçar a atenção de todos os envolvidos com dados sensíveis de uma loja e de seus clientes. Recomendamos a criação de perfis que sejam análogos às estruturas hierárquicas da organização administradora. Desta forma, todos são responsáveis pelas informações a que podem ter acesso.

Também é possível adicionar usuários ao perfil, customizado ou predefinido, preenchendo o email do usuário a ser inserido em **Adicionar usuários para este perfil de acesso**. Se o usuário não existir, será criado um novo usuário usando o email como nome também (nome e email serão iguais).

![Usuários](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_8.png)

Terminada a configuração do perfil, deve-se salvar o novo perfil clicando no botão azul no rodapé da página.

![Salvar perfil](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_9.png)

Após criado, o novo perfil será listado junto aos demais perfis de acesso. Para vê-lo, na barra superior do Admin VTEX, clique no **avatar do seu perfil**, marcado pela inicial do seu email, e depois em **Configurações da conta** > **Perfis de acesso**.

![image 9](https://raw.githubusercontent.com/vtexdocs/help-center-content/refs/heads/main/_10.png)

