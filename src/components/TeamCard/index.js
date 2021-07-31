import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, teamImageUrl, name} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="team-item-link col-10 col-md-5">
      <li className="team-item-link">
        <div className="m-2 p-2 each-team-card d-flex flex-row justify-content-around align-items-center">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <h3 className="team-name text-center">{name}</h3>
        </div>
      </li>
    </Link>
  )
}
export default TeamCard
