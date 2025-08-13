function BaseButton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

function HelloButton() {
  return (
    <BaseButton onClick={() => alert('Hello World!')}>
      Hello World!
    </BaseButton>
  )
}