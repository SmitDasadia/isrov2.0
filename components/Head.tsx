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
      <link rel="icon" href="/icon-192x192.png" sizes="32x32" />
    </Head>
  );
};

export default ReusableHead;
