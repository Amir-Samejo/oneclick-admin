import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "../../components/Layouts/DefaultLaout";
import PartnersData from "../../components/Tables/PartnersData";

const Profile = () => {
    return (
        <DefaultLayout>
            <div className="mx-auto max-w-full">
                <Breadcrumb pageName="Claim" />
                <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    {/* <PartnersData /> */}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Profile;
