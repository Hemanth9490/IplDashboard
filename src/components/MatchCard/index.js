import './index.css'

const MatchCard = props => {
  const {eachMatchCard} = props

  return (
    <li className="col-12 col-md-6 col-lg-4 ">
      <div className="eachMatchCard text-white m-2 p-3 text-center">
        <img
          className="team-logo"
          src={eachMatchCard.competing_team_logo}
          alt={eachMatchCard.competing_team}
        />
        <h1>{eachMatchCard.competingTeam}</h1>
        <p>{eachMatchCard.result}</p>
        <h1 className={eachMatchCard.matchStatus === 'Won' ? 'green' : 'red'}>
          {eachMatchCard.matchStatus}
        </h1>
      </div>
    </li>
  )
}
export default MatchCard
