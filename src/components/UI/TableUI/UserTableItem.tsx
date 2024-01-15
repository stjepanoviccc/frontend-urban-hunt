import { ReactNode } from "react";
import User from "../../../model/User";

interface Props {
    data: User;
    children?: ReactNode;
}

const UserTableItem: React.FC<Props> = ({ data, children }) => {
    return (
        <tr className="bg-secondary border-b border-primary">
            <td className="px-6 py-4">{data.id}</td>
            <td className="px-6 py-4">{data.username}</td>
            <td className="px-6 py-4">{data.email}</td>
            <td className="px-6 py-4">{data.role}</td>
            {children}
        </tr>
    );
};

export default UserTableItem;