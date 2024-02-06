import { news } from "../js/news";

export default function News() {
  return (
    <section className="mx-auto mt-14 w-full max-w-sm bg-veryDarkBlue px-8 py-6 text-white lg:order-2 lg:col-[3/4] lg:row-[3/-3] lg:m-0 lg:max-w-[18rem] lg:px-5">
      <h2 className="text-2xl font-black text-softOrange lg:text-3xl">New</h2>
      <div className="mt-5 flex flex-col gap-4 lg:gap-10">
        {news.map((news, index) => {
          return (
            <div
              className="space-y-2 border-b border-grayishBlue/30 pb-6 last:border-0 last:pb-0"
              key={index}
            >
              <a href={news.link} className="font-bold hover:text-softOrange">
                {news.title}
              </a>
              <p className="max-w-[15rem] text-xs leading-relaxed text-grayishBlue/70">
                {news.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
