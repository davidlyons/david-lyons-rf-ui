import PersonPortal from '@/icons/person-portal.svg?react'
import LogicArrow from '@/icons/logic-arrow.svg?react'
import Computer from '@/icons/computer.svg?react'
import AddCircleOutline from '@/icons/add-circle-outline.svg?react'
import { Step } from '@/components/Step'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'

export const Event = () => (
  <div className="event-container">
    {/* header */}
    <header className="event-header">
      <img className="event-logo" src="/logo-summit.png" alt="RainFocus Summit" />

      <div className="event-info">
        <h1 className="event-title">RainFocus Summit</h1>
        <div>December 15th</div>
        <div>Lehi, Utah</div>
      </div>

      <div className="event-action">
        <Button level="primary">Edit event</Button>
      </div>
    </header>

    {/* section 1 */}
    <section>
      <h2 className="event-subheading">Event setup guide</h2>
      <p className="event-lead">
        See the available list of modules below. We suggest that you start with the attendee module.
      </p>
    </section>

    {/* accordion */}
    <section>
      <div className="accordion">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <PersonPortal /> Attendee
          </h3>

          <Step number={1} heading="Base settings.">
            <div className="grid-card md:grid-cols-2 lg:grid-cols-4">
              <div>
                <h5 className="card-title">General</h5>
                <p className="card-body">Define Attendee types & attributes</p>
              </div>
              {[...Array(2)].map((_, index) => (
                <div key={index}>
                  <h5 className="card-title">Title</h5>
                  <p className="card-body">
                    Description that explains the value goes here. Description that explains the
                    value goes here.
                  </p>
                </div>
              ))}
            </div>
          </Step>

          <Step number={2} heading="Build registration workflows.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, index) => (
                <Card
                  Icon={LogicArrow}
                  title="Attendee Registration"
                  body="Start by creating a general registration workflow"
                  key={index}
                />
              ))}
              <button className="card">
                <AddCircleOutline className="text-brand-primary" />
                Add Registration Workflow
              </button>
            </div>
          </Step>

          <Step number={3} heading="Design post-registration experiences.">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              <Card
                Icon={Computer}
                title="Attendee Portal"
                body="Manage the portal that attendees will see after they've register for your event."
              />
            </div>
          </Step>
        </div>
      </div>
    </section>
  </div>
)
