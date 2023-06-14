---
title: 'Perfis de acesso'
id: 7HKK5Uau2H6wxE1rH5oRbc
status: PUBLISHED
createdAt: 2020-04-08T15:21:05.110Z
updatedAt: 2022-10-04T19:58:47.622Z
publishedAt: 2022-10-04T19:58:47.622Z
firstPublishedAt: 2020-04-08T20:52:12.334Z
contentType: tutorial
productTeam: Identity
author: 127RQ7SUoFfyTh5gbXUpdM
slug: perfis-de-acesso
locale: pt
legacySlug: como-criar-perfil-de-acesso
subcategory: 1HSqkejwuYcQSMC400uY84
---

Toda ação na plataforma VTEX, como acessar uma página na interface administrativa, clicar em um botão ou fazer uma chamada em uma de nossas APIs, envolve uma requisição à nossa infraestrutura. Como é comum que as interfaces administrativas sejam compartilhadas pelos diversos colaboradores de uma empresa, é importante conseguir limitar o acesso a ações críticas dentro de uma conta. Dessa forma, minimiza-se a possibilidade de disrupções na operação de uma loja e garante-se que cada usuário tenha acesso apenas ao que lhe compete.

## O que é um perfil de acesso?

Na VTEX, utilizamos um sistema baseado em **recursos** para obter maior precisão no controle de acesso. Um **recurso** é uma entidade associada a uma ação ou informação dentro de nossa infraestrutura. Sempre que nossos sistemas recebem uma requisição, é feita uma análise de segurança para garantir que o usuário responsável pela chamada tem a permissão necessária. Para que a requisição seja bem-sucedida, o usuário precisa ter os recursos associados a essa requisição presentes em sua conta.  

Atualmente, trabalhamos com algumas centenas de recursos diferentes nos produtos VTEX. Para facilitar o gerenciamento de acesso de usuários por parte dos administradores de uma conta, existe o conceito de **Perfil de Acesso**. Para mais detalhes sobre cada recurso disponível, veja [Recursos do License Manager](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

Um **Perfil de Acesso** é um conjunto de recursos criado para atender a um tipo comum de usuário. Por exemplo: operadores de call center costumam executar um conjunto bem definido de tarefas. Percebendo isso, um administrador da conta, tendo acesso aos [recursos](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#) necessários, pode criar um **Perfil de Acesso** personalizado com todas as permissões necessárias para aqueles colaboradores e controlar o acesso de todos eles de uma vez.

### Tipos de perfis

Ao criar um novo **perfil de acesso** para sua loja, você tem a opção de criar um perfil customizado, selecionando cada recurso necessário, ou um dos perfis predefinidos disponibilizados pela VTEX. Veja aqui todos os [Perfis predefinidos](https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy#) e as respectivas permissões associadas.

Caso deseje criar perfis customizados, confira mais detalhes sobre os [Recursos do License Manager](https://help.vtex.com/pt/tutorial/license-manager-resources--3q6ztrC8YynQf6rdc6euk3#).

## Criando um perfil de acesso

Os perfis de acesso podem ser gerenciados por meio do painel administrativo da sua conta VTEX. No menu lateral do [Admin](https://help.vtex.com/pt/subcategory/visao-do-geral-do-admin--Se4oi5LroIII2Ei0uGAoE), basta acessar **Configurações da conta > Gerenciamento da conta > Perfis de acesso**.

![Lista perfis de acesso](https://images.ctfassets.net/alneenqid6w5/5SsjVcIztKJQ3yxY1udwOH/af2216756b2b71242cf49647ba5ec08d/image_0.png)

Essa tela apresenta uma lista com todos os **perfis de acesso** cadastrados para a conta. Em uma conta recém-criada, apenas o perfil *Owner (Admin Super)* estará listado. Este perfil dá ao usuário acesso irrestrito a todos os **recursos nativos** da plataforma.

<div class="alert alert-warning">
Alguns produtos, como o <a href="https://help.vtex.com/pt/tracks/vtex-payment--7iCCIoIZFmd9OabU6QlmXu/1lZWKCGdy7xpYjukTLfFJL">VTEX Payment</a>, são contratados a parte. Recursos associados a esses produtos não vêm inclusos no perfil <i>Owner (Admin Super)</i>. Para habilitar os recursos associados a esses produtos deve-se usar seus perfis de acessos correspondentes.
</div>

A quantidade de usuários com o perfil *Owner (Admin Super) *deve ser a menor possível. Além disso, é preciso se certificar que haja visibilidade e controle de quem recebe esse acesso.

<table>
  <tr>
    <td style="border-left: 4px solid #F71963;" bgcolor="#FFE6E6"> <b>Atenção!</b> O uso irrestrito de perfis de acesso muito permissivos aumenta o risco de ataques nas lojas por vazamento de credenciais de login.</td>
  </tr>
</table>

Para os usuários que não devem ter acesso irrestrito à plataforma, é importante que se criem **perfis de acesso** que limitem os recursos disponíveis a apenas os estritamente necessários para aquele tipo de usuário. Isso é possível clicando em **Novo Perfil**.

![Novo perfil de acesso](https://images.ctfassets.net/alneenqid6w5/1UGqU2dlXOZGUhGinBv8IN/893ea05f59d4dd44cdfbe7dccdf9d07f/image_1.png)

Essa tela permite a criação de um novo perfil. Isso pode ser feito baseando-se em formatos já definidos, criados pela equipe VTEX para atender a cenários comuns nas operações, ou de forma customizada, selecionando-se a quais recursos de cada produto devem ter acesso todos aqueles que estiverem com esse perfil associado a seu usuário.

Clicando em **Escolher perfil de acesso**, o menu *dropdown* apresenta uma lista de perfis predefinidos.  

![Menu perfis predefinidos](https://images.ctfassets.net/alneenqid6w5/4XGZb5WvW216z8RfX5Vp3c/5c234cace3cb880eda0771407c4323fb/image_2.png)

Selecionar um dos perfis listados permite inspecionar quais são os recursos incluídos nesse perfil, separados por produto.

<div class="alert alert-info">
  Veja aqui todos os <a href="https://help.vtex.com/pt/tutorial/predefined-roles--jGDurZKJHvHJS13LnO7Dy">Perfis predefinidos</a> e as respectivas permissões associadas.
</div>

![Novo perfil de acesso](https://images.ctfassets.net/alneenqid6w5/5biL3DriciSnHKbgHvV2PE/1fe552a5c15c7c3dee8d54c88a60fafc/image_3.png)

O perfil **Call center operator**, por exemplo, contém um recurso do produto *Catálogo* que permite executar operações numa loja em nome de um cliente e um recurso do *OMS* que permite checar o status de um pedido.

Para criar um perfil customizado, o administrador pode escolher a opção **Custom** do menu dropdown **Escolher perfil de acesso. **Ao clicar no menu dropdown em **Escolha um produto**, listam-se todos os recursos associados a cada produto.

![Configurando produto](https://images.ctfassets.net/alneenqid6w5/1VE4awGJHyrsR2OkYwAzRQ/39bc16eca81b8a13946f081c5a1454d3/image_4.png)

É possível adicionar quantos produtos forem necessários ao perfil. Basta clicar no botão **Configurar outro produto**, ao final da lista de produtos e recursos.

![Configurar outro produto](https://images.ctfassets.net/alneenqid6w5/Dsc2k29SxUDKB8t6VXScn/dea9f7fffd121036e088761fb3971e40/image_5.png)

Ao finalizar a configuração de produtos e recursos, o administrador pode escolher um nome para o perfil em **Nome do perfil**, caso se trate de uma configuração customizada.

![Nome do perfil](https://images.ctfassets.net/alneenqid6w5/gTuv92HFXKn4jklYX0Hzj/6dfa6d1cd17483a854624dfd8b185296/image_6.png)

<table>
  <tr>
    <td style="border-left: 4px solid #F71963;" bgcolor="#FFE6E6"> <b>Atenção!</b> É importante escolher nomes descritivos para os perfis de acesso, para deixar claro que tipo de usuário deve ter aquele acesso. Idealmente indicando o cargo na empresa ou atividade a ser desempenhada na plataforma.</td>
  </tr>
</table>

Boas práticas de gerenciamento dos perfis de acesso aumentam a segurança de uma operação, além de se reforçar a atenção de todos os envolvidos com dados sensíveis de uma loja e de seus clientes. Recomendamos a criação de perfis que sejam análogos às estruturas hierárquicas da organização administradora. Desta forma, todos são responsáveis pelas informações a que podem ter acesso.

Também é possível adicionar usuários ao perfil, customizado ou predefinido, preenchendo o email do usuário a ser inserido em **Adicionar usuários para este perfil de acesso**. Se o usuário não existir, será criado um novo usuário usando o email como nome também (nome e email serão iguais).

![Usuários](https://images.ctfassets.net/alneenqid6w5/1lSnygEawddufMz9IZ45Mj/415e4adaf373fdd4ac3dddc0de9b5c1f/image_7.png)

Terminada a configuração do perfil, deve-se salvar o novo perfil clicando no botão azul no rodapé da página.

![Salvar perfil](https://images.ctfassets.net/alneenqid6w5/68NycUF3T52sg96R6HDIna/0a9d0c8cb67f1247da06fb8867a2b4f3/image_8.png)

Após criado, o novo perfil será listado junto aos demais perfis de acesso. Para vê-lo, acesse **Configurações da conta > Gerenciamento da conta > Perfis de acesso** no menu lateral do Admin.

![image 9](https://images.ctfassets.net/alneenqid6w5/3uQ5SvsqjpFCSJimcg9naY/da7ee311ee12afbf6f432a583105360c/image_9.png)

