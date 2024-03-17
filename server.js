/* 임시서버 NodeJs + Express */ 
const express = require('express');
const path = require('path');

const app = express();

app.listen(8080, function(){
    console.log('listening on 8080');
});


// 이 구문이 있어야 특정 폴더의 파일들 전송가능
app.use(express.static(path.join(__dirname, 'nodereact/build')));

// 누가 내 사이트 접속 시 리엑트로 만든 html 보내주기
// 이 코드는 가장 하단에 놓아야 잘된다.
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'nodereact/build/index.html'));
})

/*

진짜로 서버는 별거 아니고 어떤 고객이 codingapple.com으로 접속하면 거기맞는 html을 보내주는 기계일 뿐입니다.
임시 서버를 Nodejs + Express로 쉽게 만들어봅시다. 
 
1. 구글검색해서 nodejs 설치
2. 작업폴더만들고 에디터로 오픈
3. server.js 파일을 만들고 아래 코드 작성
4. 터미널을 열어서 npm init -y 입력 
5. npm install express 이것도 입력 


개발 끝나면 build 해야함
npm run build  컴파일 작업이라고도 함

index.html 만들어지는데 메인파일이라고 생각하면됨

React 프로젝트 폴더를 서버프로젝트폴더 안에 대충 넣어본다

누가 내 사이트 접속 시 리엑트로 만든 html 보내주면 끝


nodemon 설치
npm i nodemon --save-dev
*/


/*
리액트에서 라우팅을 담당하는 경우?

서버에서도 라우팅을 담당해줄 수 있고 

리액트에서도 라우팅을 담당해줄 수 있습니다. 리액트는 react-router-dom을 설치하면 됩니다.

그럼 리액트상에서 누가 /list 로 접속하면 글목록 보여주고 /mypage 접속하면 마이페이지도 보여줄 수 있습니다. 

근데 리액트 라우터로 /list 페이지를 개발해놨는데 실제 localhost:8080/list 로 직접 URL 입력해서 접속하면 아무것도 안뜹니다. 

왜냐면 브라우저 URL창에 때려박는건 서버에게 요청하는거지 리액트 라우터에게 라우팅 요청하는게 아니기 때문입니다. 

이걸 리액트가 라우팅하게 전권을 넘기고 싶다면 server.js 에 다음과 같은 코드를 밑에 추가하십시오. 

app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});


별표 * 라는 것은 모든 문자라는 뜻입니다. 
"고객이 URL란에 아무거나 입력하면 걍 리액트 프로젝트나 보내주셈"이라는 뜻인데 이렇게 하면 리액트 라우팅 잘됩니다. 
이 코드는 항상 가장 하단에 놓아야 잘됩니다. 

*/ 


/*
예를 들어서 DB에서 글목록 데이터를 꺼내서 HTML로 보여주고 싶은 경우

server-side rendering / client-side rendering 둘 중 하나 선택하면 됩니다. 

server-side rendering은 html을 서버가 만들어서 보내주는 겁니다. 

nodejs 강의처럼
1. DB에서 데이터 뽑아서
2. 글목록.html 파일에 꽂아넣고
3. 그 html 파일을 서버에서 보내주는 것임 



client-side rendering은 html을 리액트가 브라우저안에서 만드는 겁니다.

1. 리액트가 서버에 GET요청으로 DB데이터를 가져와서

2. 그걸 html로 만들어서 보여주는 것임 

*/ 

/*

리액트에서 DB데이터 보여주고 싶으면? 

리액트를 쓰는 경우 보통 client-side rendering을 합니다.

그래서 DB에 있는 상품목록을 가져와서 리액트에서 보여주고 싶으면 

이런 식으로 코드를 짭니다. 

1. 서버는 누군가 /product로 GET요청을 하면 DB에서 데이터 꺼내서 보내주라고 API를 짜놓습니다. 

2. 리액트는 상품목록을 보여주고 싶을 때 서버 /product 주소로 GET요청 날리면 됩니다.

3. 그럼 데이터 받아오겠죠? 그걸 가지고 html에 집어넣든 맘대로 개발하면 됩니다. 

 

그래서 리액트는 서버와의 통신은 거의 ajax로 진행합니다.

POST요청, 로그인해서 세션만들기 이런것도 ajax로 잘됩니다. 


근데 nodejs 서버파일 상단엔

app.use(express.json());
var cors = require('cors');
app.use(cors());


이 코드 넣고 시작하셔야 리액트와 nodejs 서버간 ajax 요청 잘됩니다. 
이거 쓰려면 서버프로젝트 터미널에서 npm install cors 설치해야합니다. 
express.json() 은 유저가 보낸 array/object 데이터를 출력해보기 위해 필요하고
cors는 다른 도메인주소끼리 ajax 요청 주고받을 때 필요합니다. 

 
*/ 


/*

html을 서버가 만들면 server-side rendering
html을 리엑트(js)가 만들면 client-side rendering
*/ 