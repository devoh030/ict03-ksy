# Header.js 작성

# boot-strap 복사해서 붙여넣기
# react-bootstrapt 설치
-front-end>npm install react-bootstrap --legacy-peer-deps
- package.json에 자동추가 : "react-bootstrap": "^2.10.4"

# ListProductComponent.js, AddProductComponent.js, EditProductComponent.js 파일생성
- 컴포넌트명 출력

# RouterComponent.js
- ctrl + c > y
- npm install react-router@5 react-router-dim@5
- package.json에 추가됨
    "react-router": "^5.3.4",
    "react-router-dom": "^5.3.4"
- import {BrowserRouter, Route} from 'react-router-dom';    

# App.js 추가
# 실행 - 링크 테스트

# -------------------
# ListProductComponent.js 작성
# 프론트 작성 전 준비
- npm install -f @mui/material
- npm install -f @emotion/react @emotion/styled
- npm install -f @mui/icons-material@^5.11.16
- package.json
    "@emotion/styled": "^11.13.0",
    "@mui/material": "^5.16.6"

# Cross Origin 정책
- 자바스크립트에서의 요청은 기본적으로 서로 다른 도메인(리액트 3000, 부트 8081)에 대한 요청을 보안상 제한한다.
- 브라우저는 기본적으로 하나의 서버 연결만 허용하도록 설정되어 있다.(자신 서버)

# F12 > error message => CORS policy 위반 에러 > 스프링부트에서 해결

localhost/:1 Access to XMLHttpRequest at 'http://localhost:8081/product' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

reloadProductList() Error, Axioserr

# 해결 => 스프링부트에 소스 추가
# 1) filter폴더 > CorsFilter.java
# 2) package react.oracle.ict03.controller 에 추가
>추가>*@CrossOrigin(origins="**", maxAge=3600)
@RestController
@RequestMapping(value="/product")

# 3) 톰캣, 리액트 restart

# -----------------[상품등록]-------------------------

# ListProductComponent.js에 추가
// insert
    addProduct = () => {
        window.localStorage.removeItem("productID"); //SQL에서 자동증가

        // history.push() - 페이지 이동(RouterComponent에서 지정한 해당 path)할 때 props 값 전달
        this.props.history.push("/add-product"); 
    }
# AddProductComponent.js 작성
# 로컬스토리지 -- 
웹 스토리지(web storage)에는 로컬 스토리지(localStorage)와 세션 스토리지(sessionStorage)가 있습니다. 이 두 개의 매커니즘의 차이점은 데이터가 어떤 범위 내에서 얼마나 오래 보존되느냐에 있습니다. 세션 스토리지는 웹페이지의 세션이 끝날 때 저장된 데이터가 지워지는 반면에, 로컬 스토리지는 웹페이지의 세션이 끝나더라도 데이터가 지워지지 않습니다.

다시 말해, 브라우저에서 같은 웹사이트를 여러 탭이나 창에 띄우면, 여러 개의 세션 스토리지에 데이터가 서로 격리되어 저장되며, 각 탭이나 창이 닫힐 때 저장해 둔 데이터도 함께 소멸합니다. 반면에, 로컬 스토리지의 경우 여러 탭이나 창 간에 데이터가 서로 공유되며 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아 있습니다.

// 키에 데이터 쓰기
localStorage.setItem("key", value);

// 키로 부터 데이터 읽기
localStorage.getItem("key");

// 키의 데이터 삭제
localStorage.removeItem("key");

// 모든 키의 데이터 삭제
localStorage.clear();

// 저장된 키/값 쌍의 개수
localStorage.length;

# -----------------[상품수정]-------------------------
