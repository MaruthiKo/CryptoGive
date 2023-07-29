import Button from "./Button";

export default function Home() {
  return (
    <section className="px-[160px] flex mt-[160px] gap-2">
      <div className="flex flex-col gap-3">
        <h3 className="font-['inter'] font-bold leading-[61px] text-[3.125rem]">
          Empower Change with CryptoGive
        </h3>
        <p className="font-['inter']  font-normal text-xl text-[#050505] mb-4">
          Donate Digital Currencies for a Better World
        </p>
        <Button innerText="Donate Now" width="250" />
      </div>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/840d/6514/fd061b7a3bfb856a05ac4f30267a006e?Expires=1691366400&Signature=DTMKEmTXSnul1GKqeDW2wO7I2VxaAgVUJXFhj9PK2lZzIMWWQeTPMhoRgTbMOZG3u8UovZQRUYPCI~fy6t-B3OCjPU4cTJzLBMREb-Aun7Y6izCxq3znt26bLCIb~vd5ysSWNxtLSxWG1LPBCvOQno3M7fMz9TyMMYvnKSv30pkZabQEo9nqsMbxBhLYQOag0Fj~~A6mPC0ftpeyA~VTPfhb5~-Oq0z1yER4tdMTmdtpRtxsKtz314-1KFjJzuwTmqcK6Kxv6O5EmJL9Ztn7cGvWz3eZ9t29j6Aqc9rBn3fSXdKzOh0s5bhK8BPGNmIi4UMdOcUTHHWPtzwiicbpQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="seated children"
        />
      </div>
    </section>
  );
}
