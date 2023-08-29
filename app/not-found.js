//? next.js olmayan rootlar için default 404 sayfası sunmaktadır default 404 sayfasının "not-found.js" ile override edebiliriz

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src="/images/404-page-not-found.png" />
    </div>
  );
}
