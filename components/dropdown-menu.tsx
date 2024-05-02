export default function DropDown({
  setSetlectedItem,
}: {
  setSetlectedItem: any;
}) {
  return (
    <select
      className="ml-2 px-4 rounded-lg py-2 bg-zinc-900 text-white text-sm  mb-5"
      onChange={(e) => setSetlectedItem(e.target.value)}
    >
      {["Default", "TC & SC", " Code Explanation"].map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
