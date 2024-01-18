import { ReactNode } from "react";
import User from "../../../model/User";

interface Props {
    data: User;
    children?: ReactNode;
}

const UserTableItem: React.FC<Props> = ({ data, children }) => {
    return (
        <tr className="bg-secondary border-b border-primary">
            <td className="px-6 py-4">{data.username}</td>
            <td className="px-6 py-4">ratings</td>
            <td className="px-6 py-4">views</td>
            <td className="px-6 py-4">tours</td>
            {children}
        </tr>
    );
};

export default UserTableItem;