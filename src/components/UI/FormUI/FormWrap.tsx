import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    label: string;
    className?: string;
}

const FormWrap: React.FC<Props> = ({children, label, className}) => {
  return (
    <div className={`flex flex-col gap-y-2 ` + className}>
      <label className="block">{label}</label>
      {children}
    </div>
  )
}

export default FormWrap
