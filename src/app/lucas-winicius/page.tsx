import { Link } from "lucide-react";

export default async function Me() {
  const request = await fetch(
    "https://gravatar.com/73b28fc5e9db0c6186ad66bdfacc9460afcbb21294bdf89e718d2183e3daf821.json",
    { next: { revalidate: 3600 } }
  );

  const json: UserProfile = await request.json();
  const data = json.entry[0];

  return (
    <div className="flex flex-col text-green-950 gap-7 items-center my-10 mx-7 md:max-w-prose text-xl">
      <img src={data.thumbnailUrl} alt={data.displayName} className="rounded-full" />
      <p>
        {data.aboutMe} <span className="font-bold">({data.pronouns})</span>
      </p>
      <div className="flex flex-col gap-4">
        {data.accounts.map((account) => (
          <a
            href={account.url}
            target="_blank"
            key={account.url}
            className="flex gap-1"
          >
            <img src={account.iconUrl} alt={account.name} />
            <p>/</p>
            <p>{account.username}</p>
          </a>
        ))}
        {data.urls.map((url) => (
          <a
            href={url.value}
            target="_blank"
            key={url.value}
            className="flex gap-1"
          >
            <Link />
            <p>/</p>
            <p>{url.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
