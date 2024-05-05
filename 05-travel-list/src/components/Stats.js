export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentPacked === 100 ? (
        <em>You are ready to go!!! ✈</em>
      ) : (
        <em>
          You have {numItems} items on your list and you have already packed{" "}
          {numPacked} ({percentPacked}%).
        </em>
      )}
    </footer>
  );
}
