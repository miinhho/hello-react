// ✅ ❌
function TodoItem({ content, isCompleted }) {
  return <li>{content}</li>;
}

export default function TodoList() {
  return (
    <section>
      <h1>Todo List</h1>
      <ul>
        <TodoItem content="Nest.js CRUD 해보기" isCompleted={false} />
        <TodoItem content="React 컴포넌트 만들어보기" isCompleted={true} />
        <TodoItem content="Docker 써보기" isCompleted={true} />
      </ul>
    </section>
  );
}
