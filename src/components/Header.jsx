import HeaderNav from "../../data/headerNav";

export default function Header() {
  return (
    <header className="container">
      <img src="/img/dc-logo.png" alt="" />
      <ul>
        {HeaderNav.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
