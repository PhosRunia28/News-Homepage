import { cards } from "../js/cards";
export default function Cards() {
  return (
    <section className="mt-14 grid grid-cols-1 grid-rows-1 gap-8 lg:grid-cols-3 lg:grid-rows-1">
      {cards.map((card, index) => {
        return (
          <div
            className="mx-auto flex max-w-sm items-center gap-4 lg:mx-0 lg:max-w-[22rem]"
            key={index}
          >
            <img
              src={card.image}
              alt="card image"
              className="h-36 w-36 bg-cover bg-center"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl font-bold text-grayishBlue">{card.no}</h3>
              <a
                href={card.link}
                className="text-lg font-black hover:text-softRed"
              >
                {card.title}
              </a>
              <p className="text-sm  leading-relaxed text-gray-500">
                {card.desc}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
