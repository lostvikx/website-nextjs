import { useRouter } from "next/router";
import Link from "next/link";

export default function Breadcrums({ endpointTitle }) {
  const endpoint = useRouter().asPath;
  const route = endpoint.split("/");
  // console.log(route);

  let fullPath = "";

  const Crumbs = route.map((crumb, i) => {
    crumb.length ? fullPath += `/${crumb}` : null;
    return (
      <Link href={!fullPath ? "/" : fullPath} key={i}>
        {
          (route.length - 1 === i) 
            ? endpointTitle
            : (crumb.length) 
              ? crumb[0].toUpperCase() + crumb.slice(1,)
            : "Home"
        }
      </Link>
    );
  });

  console.log(Crumbs);

  return (
    <div className="breadcrums">
      {/* <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / <Link href={endpoint}>{endpointTitle}</Link> */}
      {Crumbs}
    </div>
  );
}