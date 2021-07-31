import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsData: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedTeamsData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsData: updatedTeamsData, isLoader: false})
  }

  render() {
    const {teamsData, isLoader} = this.state
    return (
      <div className="home-page-container">
        <div className="main-heading d-flex flex-row align-items-center justify-content-center pt-5">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="ipl-main-heading ml-2">IPL Dashboard</h1>
        </div>
        <div className="container-fluid mt-5">
          <div className="row justify-content-around">
            {isLoader ? (
              <div testid="loader">
                <Loader type="Oval" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              teamsData.map(eachTeam => (
                <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
