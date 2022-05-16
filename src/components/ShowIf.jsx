export default function ShowIf({ children, isTrue }) {
  return isTrue ? children : null
}
