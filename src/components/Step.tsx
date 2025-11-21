export type StepProps = {
  number: number
  heading: React.ReactNode
  children: React.ReactNode
}

export const Step = ({ number, heading, children }: StepProps) => (
  <div className="step">
    <h4 className="step-heading">
      {`Step ${number}: `}
      <span className="text-muted">{heading}</span>
    </h4>
    {children}
  </div>
)
