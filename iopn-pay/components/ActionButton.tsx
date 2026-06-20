import Link from "next/link";

export default function ActionButton({
  title,
    href,
    }: {
      title: string;
        href: string;
        }) {
          return (
              <Link href={href}>
                    <div className="bg-green-600 hover:bg-green-500 transition rounded-2xl p-5 text-center font-semibold">
                            {title}
                                  </div>
                                      </Link>
                                        );
                                        }