export default function BgImage({
  image,
  children,
}: {
  image: string;
  children: React.ReactNode;
}) {
  const bgImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return <div style={bgImage}>{children}</div>;
}
