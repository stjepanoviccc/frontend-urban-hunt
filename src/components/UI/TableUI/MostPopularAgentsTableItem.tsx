import { ReactNode } from "react";
import User from "../../../model/User";

interface Props {
    data: User;
    children?: ReactNode;
}

const MostPopularAgentsTableItem: React.FC<Props> = ({ data, children }) => {

    return (
        <tr className="bg-secondary border-b border-primary">
            <td className="px-6 py-4">Agent {data.id}</td>
            <td className="px-6 py-4">{data.username}</td>
            <td className="px-6 py-4">{data.averageRating ? data.averageRating : "Not rated yet"}</td>
            {children}
        </tr>
    );
};

export default MostPopularAgentsTableItem;