import Header from '@/components/shared/Header';

export default function About() {
  return (
    <div className="flex flex-col w-full items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center mb-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            About Baggerbachi
          </h1>

          <p className="mt-6 md:text-xl">Der Alltag hat Sie fest im Griff und der Garten wächst Ihnen über den Kopf? Lassen Sie mich das machen! Denn meine Mission ist es, dass sich Ihr Tag im Garten wie ein Tag Urlaub anfühlt!</p>

          <p className="mt-6 md:text-xl">Lorem ipsum baggerbachi was founded in 2023</p>
        </section>
      </div>
    </div>
  );
}
