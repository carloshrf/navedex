# 🎓NAVEDEX

Aplicação desenvolvida como teste da Nave.rs. 

O objetivo é criar uma aplicação WEB do zero se baseando em um layout fornecido pelo Figma o qual deverá se conectar com uma API publicada.

Basicamente serão algumas telas onde poderá ser possível logar com uma conta padrão e a partir daí realizar os acessos apenas estando autenticado. Será também possível registrar, consultar, editar e remover registros de Navers.

## 📁Tecnologias

📘 ReactJS

📘 Axios

📘 React Hooks

📘 ContextAPI

## Como executar?

É necessário ter instalado o node e o yarn (ou npm que já acompanha na instalação do node). 

Clonar o repositório e em cada pasta (web, server, mobile) executar pelo prompt 
```bash
yarn
```
ou
```bash
npm install 
```
para que então os repositórios necessários sejam baixados. Para executar os projetos web, basta em sua raiz executar 
```bash
yarn start ou npm start
```

## Dificuldades e notas

- Ainda restam algumas configurações, como atualização no texto do modal ao excluir um Naver, ajustes para que a imagem se ajuste no modal de view de Naver como também a organização de parte do código.

- No Readme.md do teste, havia a segunte rota post para registro: "navers/create", porém só consegui criar com 0 "/navers".

- Minha ideia inicial seria desenvolver as estruturas com o styled components, porém a construção com a importação direta do CSS é mais rápido, já que minha meta era de concluí-lo até o final do dia seguinte.

- Ah... claro, datas, resta rever a formatação das datas para números inteiros para os campos tempo de empresa e idade.

Abaixo seguem algumas amostras das telas web.


<p align="center">
<img  src="https://github.com/carloshrf/navedex/blob/master/public/preview-pics/create-naver1.png?raw=true"  width="900"/>
</p>

<p align="center">
<img  src="https://github.com/carloshrf/navedex/blob/master/public/preview-pics/exclusion-modal1.png?raw=true"  width="900"/>
</p>

<p align="center">
<img  src="https://github.com/carloshrf/navedex/blob/master/public/preview-pics/home1.png?raw=true"  width="900"/>
</p>

<p align="center">
<img  src="https://github.com/carloshrf/navedex/blob/master/public/preview-pics/view-naver.png?raw=true"  width="900"/>
</p>
