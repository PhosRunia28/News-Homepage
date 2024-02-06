export default function Content() {
  return (
    <div className="mx-auto mt-2 flex w-full max-w-sm flex-col gap-5 lg:order-4 lg:mx-0 lg:justify-between">
      <p className="max-w-xs text-sm leading-relaxed text-gray-600 lg:max-w-sm lg:text-lg">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button
        type="button"
        className="max-w-fit bg-softRed px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-veryDarkBlue hover:text-white"
      >
        Read More
      </button>
    </div>
  );
}
