export default function loading() {
  return (
    <div className="mx-auto bg-black w-screen h-screen flex justify-center items-center absolute top-0 left-0">
      <div className="relative w-[150px] h-[150px] rounded-full border-t border-solid border-[#24ecff] animate-spin"></div>
      <div></div>
      <p className="absolute text-amber-50 text-2xl">Loading ... </p>
    </div>
  );
}
