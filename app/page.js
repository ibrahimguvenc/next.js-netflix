import Link from "next/link";

// ? app folder içinceki "page.js" "/" dir

//? next.js'de tüm componentler default olarak server componenttir. client component kullanmak için "use-Client" direktifini kullanmamız gerekir
export default function Home() {
  return (
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full bg-opacity-50">
        <div className="text-white text-center relative top-2/4 m-auto">
          <h1 className="text-5xl font-[900] text-center mb-3">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl font-[400] ">
            Watch anywhere. Cancel anytime.
          </p>
          {/* //? next/link arka planda sayfayı önceden fetch edilir. Bu, client tarafı gezintilerin performansını iyileştirmek için kullanışlıdır. Görünüm alanındaki herhangi bir <Link />  önceden yüklenecektir. */}
          <Link href="register">
            <button className="btn-danger w-[205px]">Register Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
