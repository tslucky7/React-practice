import * as React from "react"

type Props = {
  onClick: () => void;
  color: "red" | "blue";
}

export const Button = ({ onClick, color, children }: React.PropsWithChildren<Props>) => {
  const style = color === "red" ? "bg-red-400" : "bg-cyan-400";
  return (
    <button className={`border ${style} w-fit px-1 rounded`} onClick={onClick}>
      {children}
    </button>
  )
}