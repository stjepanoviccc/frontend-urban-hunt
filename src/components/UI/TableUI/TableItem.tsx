import { ReactNode } from "react";

interface Props {
    data: string[];
    children?: ReactNode;
}

const TableItem: React.FC<Props> = ({ data, children }) => {
    return (
        <tr className="bg-secondary border-b border-primary">
            {data.map((dataItem, index) => (
                <td className="px-6 py-4" key={index}>{dataItem}</td>
            ))}
            {children}
        </tr>
    )
}

export default TableItem
