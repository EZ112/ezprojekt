/** @jsxImportSource react */
export default function App() {
  return (
    <div className="flex max-w-80 flex-col items-center rounded-lg bg-white px-4 py-8 text-black">
      <img className="rounded-md" src="/images/bonsai.jpg" alt="" />
      <div className="mt-4 text-sm uppercase tracking-wider text-stone-400">
        Decorative Plants
      </div>
      <div className="text-2xl">Outdoor Bonsai Tree</div>
      <button className="mt-4 rounded-full bg-stone-900 px-8 py-2 font-semibold text-white">
        $150
      </button>
    </div>
  );
}
