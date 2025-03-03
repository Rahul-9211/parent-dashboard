import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import DeviceInfoTable from "@/components/Tables/DeviceInfoTable";

export const metadata: Metadata = {
  title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const DeviceInfo = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Device Info" />

      <div className="flex flex-col gap-10">
        <DeviceInfoTable/>
              </div>
    </DefaultLayout>
  );
};

export default DeviceInfo;
