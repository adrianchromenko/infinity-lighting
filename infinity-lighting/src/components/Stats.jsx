import './Stats.css'

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card">
            <h2 className="stat-number">$1.2 Trillion Dollars</h2>
            <p className="stat-description">
              is the cost of wasted energy in US buildings annually
            </p>
          </div>
          
          <div className="stat-info">
            <p className="stat-text">
              Widespread use of LED lighting has the greatest potential impact on energy savings 
              in the United States.
            </p>
            <p className="stat-text">
              By 2027, widespread use of LED's could save about 348,000 Mwh of electricity per year. 
              This is equivalent to the annual electrical output of 44 large electrical power plants 
              and a savings of more than $30 Billion dollars at today's electricity prices.
            </p>
          </div>
        </div>
        
        <div className="upgrade-section">
          <h3 className="upgrade-title">Upgrade Your Office Building Lighting</h3>
        </div>
      </div>
    </section>
  )
}

export default Stats