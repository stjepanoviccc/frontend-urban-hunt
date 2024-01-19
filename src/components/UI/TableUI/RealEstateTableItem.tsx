import { ReactNode } from "react";
import RealEstate from "../../../model/RealEstate";

interface Props {
    data: RealEstate;
    children?: ReactNode;
}

const RealEstateTableItem: React.FC<Props> = ({ data, children }) => {
    return (
        <tr className="bg-secondary border-b border-primary">
            <td className="px-6 py-4">{data.id}</td>
            <td className="px-6 py-4">{data.location}</td>
            <td className="px-6 py-4">{data.surfaceArea}</td>
            <td className="px-6 py-4">{data.price}</td>
            <td className="px-6 py-4">{data.transactionType}</td>
            <td className="px-6 py-4">{data.realEstateType}</td>
            {children}
        </tr>
    );
};

export default RealEstateTableItem;