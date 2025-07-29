```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML to JSX 변환 예시</title>
    <style>
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      .highlight {
        background-color: yellow;
      }
      .form-group {
        margin-bottom: 15px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>HTML to JSX 변환 연습</h1>

      <!-- 주석: 이 부분들을 JSX로 변환해보세요 -->

      <section class="content">
        <h2>기본 요소들</h2>
        <p class="highlight">이 문단은 노란색 배경을 가집니다.</p>

        <img src="https://picsum.photos/200" alt="예시 이미지" width="300" height="200">

        <br>
        <hr>
        
        <label for="username">사용자명:</label>
        <input type="text" id="username" name="username" placeholder="이름을 입력하세요">
        
        <div class="form-group">
            <label for="message">메시지:</label>
            <textarea id="message" name="message" rows="4" cols="50"></textarea>
        </div>
        
        <button type="button" onclick="alert('클릭됨!')">클릭하기</button>
      </section>

      <footer>
        <p>&copy; 2024 JSX 변환 연습</p>
      </footer>
    </div>
  </body>
</html>

```