import { ReactNode } from "react";
import RealEstate from "../../../model/RealEstate";

interface Props {
    data: RealEstate;
    children?: ReactNode;
}

const RealStateTableItem: React.FC<Props> = ({ data, children }) => {
    return (
        <tr className="bg-secondary border-b border-primary">
            <td className="px-6 py-4">{data.location}</td>
            <td className="px-6 py-4">{data.surfaceArea}</td>
            <td className="px-6 py-4">{data.price}</td>
            <td className="px-6 py-4">{data.transactionType}</td>
            <td className="px-6 py-4">{data.realEstateType}</td>
            <td className="px-6 py-4">{data.rating}</td>
            <td className="px-6 py-4">{data.viewCount}</td>
            <td className="px-6 py-4">Number of tours.</td>
            {children}
        </tr>
    );
};

export default RealStateTableItem;