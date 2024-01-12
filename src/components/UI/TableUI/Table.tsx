import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    headings: string[];
}

const Table: React.FC<Props> = ({children, headings}) => {
    return (
        <div className="relative overflow-x-auto shadow-md rounded-lg">
            <table className="w-full text-sm text-white text-center">
                <thead className="text-white uppercase bg-primary text-lg">
                    <tr>
                        {headings.map((heading, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table
