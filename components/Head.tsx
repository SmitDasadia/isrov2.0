import { FC } from "react";
import Head from "next/head";

interface ReusableHeadProps {
  title: string;
  description?: string;
  // Add more metadata props as needed
}

const ReusableHead: FC<ReusableHeadProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {/* Add more metadata tags here as needed */}
      <link rel="icon" href="/ISROFavicon.svg" sizes="any" />
    </Head>
  );
};

export default ReusableHead;
