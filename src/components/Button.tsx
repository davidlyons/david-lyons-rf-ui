type ButtonProps = {
  children: React.ReactNode
  level: 'primary' | 'secondary' | string
}

export const Button = ({ children, level }: ButtonProps) => {
  return <button className={`btn btn-${level}`}>{children}</button>
}
