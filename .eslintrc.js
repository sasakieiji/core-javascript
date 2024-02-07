module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    /* 아래함수가 현재 파일에 없어도 오류를 출력하지 않음 global에 선언해놓은것으로 인식하게 함 */ 
    "globals": {
        getNode:true,
        getNodes:true,
        attr: true,
        insertLast:true
    }
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars":"off"
    }
}
