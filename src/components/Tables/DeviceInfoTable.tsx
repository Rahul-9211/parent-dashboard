import { getDeviceInfo } from "@/services/api/service";
import { useToken } from '@/hooks/useLocalStorage';

const DeviceInfoTable = async () => {
    const packageData = await getDeviceInfo();
    console.log("🚀 ~ DeviceInfoTable ~ packageData:", packageData);
    
    return (
      <>
        {packageData.map((packageItem, key) => (
          <div key={key} className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                      Property
                    </th>
                    <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Device ID</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.deviceId}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Device Name</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.deviceName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Device Type</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.deviceType}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">OS Version</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.osVersion}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Manufacturer</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.manufacturer}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Last Connected</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        {new Date(packageItem?.lastConnected ?? '').toLocaleString()}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Status</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                        packageItem?.status === "active" 
                          ? "bg-success text-success"
                          : "bg-danger text-danger"
                      }`}>
                        {packageItem?.status}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Battery Level</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.batteryLevel}%</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Screen Time Limit</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.settings?.screenTimeLimit} minutes</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">Geofence Radius</h5>
                    </td>
                    <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                      <p className="text-black dark:text-white">{packageItem?.settings?.geofenceRadius} meters</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </>
    );
};

export default DeviceInfoTable;
