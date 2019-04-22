<h1 align="center">febr-validacao</h1>

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)

O objetivo principal do Repositório Brasileiro Livre para Dados Abertos do Solo é projetar, construir e implantar um tipo completamente novo de repositório de dados de solo e mostrar que este repositório maximiza a capacidade de descoberta e reusabilidade de dados do solo. O febr-validacao é um futuro complemento do Google Sheets escrito na plataforma Google Apps Script que permite aos usuários aplicar validação de dados nas planilhas dos conjuntos de dados do febr. A idéia é fornecer uma solução simples onde os próprios usuários possam verificar se os dados adicionados estão corretos ou não, além de gerar automáticamente relatórios com as inconsistências encontradas e como corrigi-las.

## Motivação

Como esperado em um projeto open-source, qualquer pessoa pode contribuir com o febr. Isso acaba sendo como uma faca de dois gumes: mesmo que o processo de reunir os dados seja acelerado, a correção de inconsistências pode demandar um grande esforço.

A primeira investida nesse sentido foi aplicar manualmente a correção sempre que fosse detectada uma inconsistência. Além de ser um processo longo e custoso, é também pouco produtivo, já que muitas vezes se faz necessário revisar mais de uma vez um mesmo conjunto de dados.

O objetivo da segunda investida foi de automatizar esse processo de correção. Alguns scripts começaram a ser rascunhados de forma que realizassem essa validação a partir dos padrões de codificação e regras do repositório. O princípio da validação baseou-se em:

1. Percorrer todos os campos da planilha e comparar os valores com os padrões do repositório
2. Ao encontrar uma inconsisência:
    1. Salvar os dados da inconsistência
    2. Adicionar uma nota explicativa na célula informando o que houve
3. Continuar percorrendo os campos da planilha até encontrar a próxima inconsistência ou o final da planilha
4. Verificar se há dados de inconsistência salvos, e se houver, enviar por email para os reponsáveis em forma de relatório.

Nos testes iniciais, o script detectou todas as inconsistências para as quais fora programado a encontrar. Entretanto, essa ferramenta só serve para quem possui acesso ao script, e acaba se tornando uma opção pouco viável para os editores dos conjuntos de dados, que muitas vezes não tem familiriade com esse tipo de ferramenta. Para que a validação automática seja amplamente difundida, é necessária uma ferramenta que qualquer pessoa tenha acesso para realizar a validação de seu trabalho.

Pensando nisso, um complemento para Google Sheets está sendo desenvolvido para resolver esse problema. A ideia é continuar usando os scripts que já foram escritos, mas oferecê-los em larga escala através do complemento, permitindo que os dados sejam validados de forma intuitiva e amigável enquanto são editados.

<!-- ## Build status -->

<!-- ## Deployment -->

<!-- ## Começando
### Pré-requisitos
### Como instalar/usar
### Características  -->

<!-- ## Running tests -->

<!-- ## Screenshots -->

<!-- ## Built with
### API Reference -->

## Contribua!
Pull requests são sempre bem vindos! Para maiores mudanças, abra um issue para discutirmos o que deve ser feito e como podemos fazer. :) 

## Créditos
+ Alessandro Samuel-Rosa - Orientador do projeto e criador do febr - [Github](https://github.com/samuel-rosa)
+ Mikael Messias - Programador - [Github](https://github.com/mikaelmessias)

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE.md para detalhes.