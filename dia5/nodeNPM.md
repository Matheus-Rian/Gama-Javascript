# Node e NPM
**1) Conceitualmente, o que é o Node, o NPM e o NPX?**

Node é a plataforma que executa JavaScript (utilizando V8, motor do Google Chrome) no lado do back-end. NPM é o gerenciador de pacotes do Node, responsável por fazer instalação de pacotes através de comandos, já o NPX é o executor de pacotes do NPM, responsável por facilitar a utilização de alguns pacotes que antes precisavam ser instalados globalmente.

**2) Como iniciar um projeto utilizando NPM?**

npm init
**ou**
npm init -y # já preenche algumas informações

**3) Qual a diferença entre dependências que estão listadas como dependencies e devDependencies em um arquivo package.json?**

Ambas estão relacionadas ao ambiente do projeto: devDependencies são dependências que estão ligadas ao ambiente de desenvolvimento (como ferramentas de teste, análise de código e qualidade) e já as dependencies são ferramentas necessárias para o projeto ser executado em um ambiente final (como produção).

**4) Como criar uma rotina customizada usando npm?**

Criando uma chave dentro do objeto de scripts e executando com npm (para scripts padrões como start, test, install) ou npm run (para scripts customizados).

**5) Crie um projeto vazio utilizando npm.**