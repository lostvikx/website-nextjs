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
      <div key={i}>
        <Link href={!fullPath ? "/" : fullPath}>
          <a>
            {
              (route.length - 1 === i) 
                ? endpointTitle
                : (crumb.length) 
                  ? crumb[0].toUpperCase() + crumb.slice(1,)
                : "Home"
            }
          </a>
        </Link>
        <span>/</span>
      </div>
    );
  });

  console.log(Crumbs);

  return (
    <div className="breadcrums flex-row">
      { Crumbs }
    </div>
  );
}