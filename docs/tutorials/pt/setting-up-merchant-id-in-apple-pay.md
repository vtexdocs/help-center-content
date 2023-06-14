---
title: Configurar Merchant ID no Apple Pay
id: 3pPmMlmexyKwWU6QckGiIC
status: DRAFT
createdAt: 2018-05-21T14:35:20.296Z
updatedAt: 2022-01-27T19:54:36.660Z
publishedAt: 
firstPublishedAt: 2018-05-23T19:25:49.127Z
contentType: tutorial
productTeam: Financial
author: 245tA425AIeioKAk2eaiwS
slug: como-configurar-certificado-para-validar-merchant-do-apple-pay
legacySlug: como-configurar-certificado-para-validar-merchant-do-apple-pay
subcategory: 3tDGibM2tqMyqIyukqmmMw
---

<div class="alert alert-warning">
Este processo será mais simples assim que a Apple validar as integrações com a plataforma VTEX. Este artigo será, então, atualizado para atender ao novo cenário. 
</div>

Para que sua loja receba pagamentos via __Apple Pay__, você precisar configurar o __Merchant ID__ na sua conta de desenvolvedor na Apple (`developer.apple.com`). 

## Criando o Merchant ID

O primeiro passo é criar o próprio Merchant ID - a identificação da sua loja no sistema Apple. 

Esse registro funciona como o seu login na configuração do Apple Pay na VTEX. Mais especificamente, é o Merchant ID que será informado no cadastro da afiliação de gateway que, por sua vez, processará os pagamentos.  

Desse modo, é importante que você escolha um ID de fácil memorização. Recomendamos que seja semelhante a `merchant.nomeSuaLoja.vtexpayments.com.br.apple`.

Além disso, não há riscos do seu Merchant ID ser igual ao de outra loja. O sistema da Apple garante que cada identificação seja única.

Dito isso, confira o passo a passo:

1. Acesse sua __conta de desenvolvedor__ Apple em `https://developer.apple.com/account/#/overview`;
2. Selecione a opção __Certificates, IDs & Profiles__;
![AP1](https://images.ctfassets.net/alneenqid6w5/6LeAGbVL1w66i4QeoUikfC/912141350c1d591a9bb057d791e2f8d5/AP1.PNG)
3. Clique em __Identifiers__;
 ![AP2](https://images.ctfassets.net/alneenqid6w5/23SE1jYWfCN6ZXTgQFYc1o/19fbe5f704aee658dd5a77f8e2f3b161/AP2.PNG)
4. Ao lado de Identifiers, clique no __botão azul +__;
![AP3](https://images.ctfassets.net/alneenqid6w5/4JGlrzDtI0BL3MDChr5gfn/2fb71b0a4dfc498baff3acb0546e5476/AP3.PNG)
5. Selecione a opção __Merchant IDs__; 
6. Clique no botão azul __Continue__;
![AP4](https://images.ctfassets.net/alneenqid6w5/6OyfJq6Eeped4gNItoqD93/19edd37b12bb72d24d55058f5aa265bf/AP4.PNG)
7. Preencha o campo __Description__;
8. Preencha o campo __Identifier__; 
9. Clique no botão __Continue__;
![AP5](https://images.ctfassets.net/alneenqid6w5/7cPYdu8tLJsQWH7FFemIxb/8d710da870e18a5db33e46f29d484882/AP5.PNG) 

Desse modo, o __Merchant ID__ será criado. 

## Criando o certificado para processar pagamentos

Agora que você tem o Merchant ID, você precisa de um certificado para ativá-lo. 

Esse certificado é criado na VTEX. Logo, o lojista precisa [abrir um ticket](https://help.vtex.com/pt/tutorial/abrir-chamados-para-o-suporte-vtex?locale=pt "abrir um ticket") de suporte para que o time responsável pelas integrações lhe encaminhe o arquivo. 

Em seguida, o lojista pode submetê-lo ao sistema do Apple Pay. 

Para iniciar essa etapa, prossiga com as instruções: 

1. No menu do lado esquerdo, selecione __Certificates__;
![AP6](https://images.ctfassets.net/alneenqid6w5/6F1QMQhaeedUplo0gYGaHd/bbc1c07ad0f8541f33a797b09224543a/AP6.PNG)
2. Digite seu __Merchant ID__ recém-criado na barra de busca;
3. Selecione o __Merchant ID__ desejado;
![AP7](https://images.ctfassets.net/alneenqid6w5/6McxWOZA6ZGUtsoxsRoVKb/d0f133d66267606fa998be562b57570b/AP7.PNG)
4. No item __Apple Pay Payment Processing Certificate__, clique no botão __Create Certificate__;
![AP8](https://images.ctfassets.net/alneenqid6w5/3Rp2Dt49HkCwzFHjScLjV/a83399b2270e638f3d480e4f885cc8d6/AP8.PNG)
5. Certifique-se que a pergunta *"Will payments associated with this Merchant ID be processed exclusively in China?"* está marcada com __a opção default (No)__.
![AP9](https://images.ctfassets.net/alneenqid6w5/Sp9juhAMuWRA1vHgk6pZ9/8eda99f583b842bb94a52d729fd4066a/AP9.PNG)

Em seguida, você será direcionado para uma tela com instruções sobre a criação do CSR (Certificate Signing Request). 

Aqui é o momento em que você deve abrir o ticket com a solicitação do certificado. A equipe da VTEX enviará um arquivo `{{merchantID}}.csr.` e, com ele salvo no seu computador, você deverá clicar no botão __Continue__.

Depois disso, o lojista será redirecionado novamente. Dessa vez, para a página de upload.

Com o {{merchantID}}.csr. que você recebeu, finalize:

1. Clique em __Choose File__; 
2. Selecione o __arquivo CSR__ desejado;
3. Clique no botão __Continue__;
![AP10](https://images.ctfassets.net/alneenqid6w5/3hECpP7iFDlIO6PatZCOEY/d38bfb6be71f867c1f3182616a6fcb4b/AP10.PNG)
4. Clique em __Download__; 
![AP11](https://images.ctfassets.net/alneenqid6w5/5LZH1cD0JOe4dHN1noRbUE/2de89d38d2fde3f870c4274d32092c83/AP11.PNG)
5. Clique em __Done__.

## Registrando domínios no Merchant ID
O próximo passo é associar os domínios usados pela sua loja ao Merchant ID que você acabou de criar.

Primeiro, você precisa validar cada uma das URLs desejadas. Uma vez que esse passo seja concluído corretamente, o próprio sistema da Apple criará um arquivo `.txt`  e indicará em qual domínio esse documento deve ser associado.

Por fim, é preciso importar esse arquivo para o sistema da VTEX por meio do Postman - ferramenta de gestão de [APIs](https://help.vtex.com/pt/tutorial/introduction-to-vtex-apis--3SjAqQ0BeUqu2ge8AiIkmW "APIs").

<div class="alert alert-warning">
<strong>Importante:</strong> essa validação só pode ser feita um domínio por vez. Isso significa que, caso sua loja use 10 domínios diferentes, o processo terá que ser repetido 10 vezes. 
</div>

Confira as instruções:

1. Digite pelo __Merchant ID__ recém-criado na barra de busca;
![AP12](https://images.ctfassets.net/alneenqid6w5/4RnNU5b0rsfCpEKkj9dFnj/3ddb803ff21d56c9f54d214d9b8bf56f/AP12.PNG)
2. Clique no __Merchant ID__ desejado;
3. No módulo __Merchant Domains__, clique no botão __Add Domain__;
![AP13](https://images.ctfassets.net/alneenqid6w5/7pPoN1yAltfTpHQVQRzvb9/61da4650bae649475637cf185a228c4f/AP13.PNG)
4. Adicione o domínio no campo __Enter the domain you wish to register__; 
5. Clique em __Save__.

Agora, para fazer o upload do arquivo `.txt` por meio da API, prossiga com as instruções:

1. Clique em __Download__ e não faça nenhuma alteração no arquivo; 
![AP14](https://images.ctfassets.net/alneenqid6w5/20a92ocy0wEVTY6zXqfa5w/56b96dc4d0fe44c322065a10af594980/AP14.PNG)
2. Abra o arquivo `.txt` e __copie__ todo o conteúdo.

Em seguida, inicie uma sessão no Postman. Você realizará uma chamada via POST para a CDN da VTEX:

1. Configure a rota __POST__ `https://{{seudominio}}/.well-known/raw/{token}`; 
2. Certifique-se que __todo__ o conteúdo do arquivo `.txt` está entre __aspas duplas__ e __sem quebra de linhas__; 
3. Adicione no header o __X-VTEX-API-AppKey__ e o __X-VTEX-API-AppToken__.

Ao fazer a chamada *POST*, a resposta deve informar que o certificado estará salvo por 60 minutos. Durante esse período, você deve concluir a validação do domínio. 

Agora, volte ao site da Apple. Na mesma tela em que você fez o download do arquivo `.txt`, clique em __Verify__.
![AP15](https://images.ctfassets.net/alneenqid6w5/2rG0fF8Bvo5TqsDqAHqL4j/92c7bc8601572cd80caf4bea8b101208/AP15.PNG)

Assim, caso o passo a passo seja feito corretamente, o domínio estará registrado com o status __Verified__. Se quiser, você pode repetir todo o processo para registrar mais domínios usando o botão __Add Domain__ na seção __Merchant Domains__.

## Criando um Merchant Identity Certificate

Agora, você deve gerar um certificado do Merchant ID, que será usado toda vez que que a Apple mostrar a tela do Apple Pay aos seus clientes. Para concluir as etapas desse processo, é importante que você tenha um computador Mac disponível. 

Para completar a ação, você vai precisar criar uma senha para proteger os dados exportados. 

<div class="alert alert-info">
Atenção: recomendamos que a senha seja fácil de lembrar, já que ela será informada no campo Apple Merchant Password no momento da configuração da afiliação de gateway na VTEX.
</div>

1. Acesse o módulo __Certificates, Identifiers & Profilers__;
2. No menu do lado esquerdo, clique em __Identifiers__;
3. No canto superior direito, filtre por __Merchant IDs__;    ![AP16](https://images.ctfassets.net/alneenqid6w5/5XBSpBP20NFq5HRQKpxQjS/e8f662462087cd43d0c8a5b7f7bdd4c3/AP16.PNG)
4. Selecione o __Merchant Identifier__ desejado;
5. Clique em __Create Certificate__;    ![AP17](https://images.ctfassets.net/alneenqid6w5/33Mm1jF8PBhIjj7X7LjAxc/181c7490381f754c0580d847da2c120d/AP17.PNG)
6. Siga as __instruções__ expostas na tela para criar um certificado;
7. Clique no botão __Continue__;    ![AP18](https://images.ctfassets.net/alneenqid6w5/zY9tykCxck32wV3c9w1V8/bcacdf765e787fb104b8f7f70677c2df/AP18.PNG)
8. Clique em __Download__.    ![AP19](https://images.ctfassets.net/alneenqid6w5/3VMp9diaN7L7M8dsopkWQo/6fa0b54d0a7310bfb7dd0cd183c2a56e/AP19.PNG)

Agora, quando o arquivo for baixado, clique duas vezes para instalá-lo no Keychain Access.

Em seguida, continue com o passo a passo:

1. Abra o __Keychain Access__; 
2. Localize o __certificado__ criado no passo quatro acima;
3. Com o botão direito do mouse, clique no ícone __Chave__; ![AP20](https://images.ctfassets.net/alneenqid6w5/1PqNUvHOaSVXkc4FfeMIEQ/cc421cbd0e0cfaff6f7763c861d84baf/AP20.PNG) 
4. Clique em __Export__;
5. Nomeie o __certificado__; 
6. Selecione o formato de exportação __.p12__; 
7. Clique no botão __OK__. 

Para finalizar, salve o certificado no seu computador. Esse arquivo deverá ser carregado no campo __Apple Merchant Certificate (.p12)__ da configuração da afiliação de gateway que vai processar Apple Pay na sua loja VTEX.

Depois de realizar todas essas etapas, você terá um Merchant ID configurado no Apple Pay, um certificado .p12 salvo no seu computador e uma senha de acesso. Todos esses dados serão pedidos durante o processo de configuração da afiliação de gateway que processará os pagamentos com Apple Pay. 

Para saber como fazer isso, acesse este [artigo do Help](https://help.vtex.com/pt/tutorial/configurar-adquirente-rede-com-o-erederest?locale=pt "artigo no Help").

### Artigos relacionados
- [Configurar pagamentos com Apple Pay](/pt/tutorial/configurar-pagamentos-com-apple-pay)
- [Configurar adquirente Rede com o ERedeREST](/pt/tutorial/configurar-adquirente-rede-com-o-erederest)
