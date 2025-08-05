const content = [
  "Components: UI Building Blocks",
  "Defining a Component",
  "Using a Component",
];

function ArticleContent() {
  // 내용을 props 로 바꿀 수 있도록 해주세요
  return (
    <ol>
      <li>Components: UI Building Blocks</li>
      <li>Defining a Component</li>
      <li>Using a Component</li>
    </ol>
  );
}

export default function Article() {
  // 제목을 props 로 바꿀 수 있도록 해주세요
  return (
    <article>
      <h1>My First Component</h1>
      <ArticleContent />
    </article>
  );
}
