import { Link as ScrollLink } from "react-scroll";

function Items({ title, link }) {
  const isAnchor = link.startsWith("#");

  return isAnchor ? (
    <ScrollLink
      to={link.replace("#", "")}
      smooth={true}
      duration={500}
      offset={-70} // adjust for navbar height
      className="cursor-pointer hover:text-cyan-300 transition"
    >
      {title}
    </ScrollLink>
  ) : (
    <Link to={link} className="hover:text-cyan-300 transition">
      {title}
    </Link>
  );
}

export default Items;
