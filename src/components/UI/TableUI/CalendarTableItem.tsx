import { ReactNode } from "react";

interface Props {
    data: any
    children?: ReactNode;
}

const UserTableItem: React.FC<Props> = ({ data, children }) => {
    return (
        <tr className="bg-secondary border-b border-primary">
            <td className="px-6 py-4">Tour id</td>
            <td className="px-6 py-4">Real Estate ID</td>
            <td className="px-6 py-4">User ID</td>
            <td className="px-6 py-4">Tour Date</td>
            {children}
        </tr>
    );
};

export default UserTableItem;