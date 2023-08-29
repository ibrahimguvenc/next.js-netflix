//? next.js'de tüm componentler default olarak server componenttir. client component kullanmak için "use-Client" direktifini kullanmamız gerekir
export default function Home() {
  return (
    <div>
      <h1>Hello Next.js</h1>
    </div>
  );
}
