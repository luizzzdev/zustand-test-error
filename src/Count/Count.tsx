import { useCountStore } from '../store/store';

export function Count() {
  const { count, add } = useCountStore();

  return (
    <div>
      <h1>Count</h1>
      <h2>{count}</h2>
      <button onClick={add}>add</button>
    </div>
  );
}
