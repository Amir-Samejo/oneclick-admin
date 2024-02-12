import Link from "next/link";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

const packageData = [
  {
    name: "Free package",
    price: 4120112345670,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
    email: "abc@gmail.com",
  },
  {
    name: "Standard Package",
    price: 4120112345670,
    invoiceDate: `Jan 13,2023`,
    status: "Paid",
    email: "abc@gmail.com",
  },
  {
    name: "Business Package",
    price: 4120112345670,
    invoiceDate: `Jan 13,2023`,
    status: "Unpaid",
    email: "abc@gmail.com",
  },
  {
    name: "Standard Package",
    price: 4120112345670,
    invoiceDate: `Jan 13,2023`,
    status: "Pending",
    email: "abc@gmail.com",
  },
];

const PartnersData = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-bold text-black dark:text-white xl:pl-11">
                Employee ID
              </th>

              <th className="min-w-[150px] px-4 py-4 font-bold text-black dark:text-white">
                Name/CNIC
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                Mobile No
              </th>
              <th className="min-w-[120px] px-4 py-4 font-bold text-black dark:text-white">
                Email
              </th>
              <th className="px-4 py-4 font-bold text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.name}
                    <p className="text-sm">{packageItem.price}</p>

                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.email}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">

                  <div className="flex items-center">
                    <Link href={"/"}>
                      <button
                        className="inline-flex items-center gap-2 rounded border border-indigo-400 px-8 py-2 text-indigo-400 hover:bg-indigo-400 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                      >
                        <span className="text-sm font-medium"> Veiw </span>
                        <RemoveRedEyeOutlinedIcon />
                      </button>
                    </Link>


                    {/* Border - Right */}

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnersData;
