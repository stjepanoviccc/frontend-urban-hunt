import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }

const Wrap: React.FC<Props> = props => {
  return (
    <div className="mx-auto max-w-7xl px-3">
        {props.children}
    </div>
  )
}

export default Wrap;
