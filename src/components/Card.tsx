export type CardProps = {
  Icon: React.FC<{ className: string }>
  title: React.ReactNode
  body: React.ReactNode
}

export const Card = ({ Icon, title, body }: CardProps) => (
  <div className="card">
    <h5 className="card-title">
      <Icon className="text-brand-primary" />
      {title}
    </h5>
    <div className="card-body">
      <p>{body}</p>
    </div>
  </div>
)
