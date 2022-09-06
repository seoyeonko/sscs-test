# SCSS-TEST

node에서 scss 사용하기

1. `sass` 설치

   ```html
   npm i sass -g # 전역 설치
   ```

2. `live sass compiler` extention 설치

   해당 확장 프로그램은 scss → css 컴파일을 버튼 클릭으로 가능하게 함 (Watch Sass → Watching Sass)

3. vscode `settings.json` 설정값 추가

   ```json
   "liveSassCompile.settings.formats": [
       // This is Default.
       {
         "format": "expanded",
         "extensionName": ".css",
         "savePath": "저장_경로" // null: .scss 파일이 있는 곳에 컴파일된 .css 파일을 저장
       }
     ]
   ```
