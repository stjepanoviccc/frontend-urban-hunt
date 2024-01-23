import { ReactNode } from "react";

interface Props {
    data: any
    children?: ReactNode;
}

const CalendarTableItem: React.FC<Props> = ({ data, children }) => {
    return (
        <tr className="bg-secondary border-b border-primary">
            <td className="px-6 py-4">{data.id}</td>
            <td className="px-6 py-4">{data.realEstateId}</td>
            <td className="px-6 py-4">{data.agentId}</td>
            {children}
        </tr>
    );
};

export default CalendarTableItem;