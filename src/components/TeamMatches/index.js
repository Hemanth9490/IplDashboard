import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    eachTeamDetails: {},
    latestMatchDetails: {},
    recentMatches: [],
    backgroundColor: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getEachMatchDetails()
  }

  getEachMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches} = updatedData
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatchDetails = recentMatches.map(eachRecentMatch => ({
      competingTeam: eachRecentMatch.competing_team,
      competingTeamLogo: eachRecentMatch.competing_team_logo,
      date: eachRecentMatch.date,
      firstInnings: eachRecentMatch.first_innings,
      id: eachRecentMatch.id,
      manOfTheMatch: eachRecentMatch.man_of_the_match,
      matchStatus: eachRecentMatch.match_status,
      result: eachRecentMatch.result,
      secondInnings: eachRecentMatch.second_innings,
      umpires: eachRecentMatch.umpires,
      venue: eachRecentMatch.venue,
    }))

    this.setState({
      eachTeamDetails: updatedData,
      latestMatchDetails: updatedLatestMatchDetails,
      backgroundColor: id,
      recentMatches: updatedRecentMatchDetails,
      isLoading: false,
    })
  }

  render() {
    const {
      eachTeamDetails,
      backgroundColor,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    const {teamBannerUrl} = eachTeamDetails
    recentMatches.map(eachCard => console.log(eachCard))
    return (
      <div className={`${backgroundColor} team-matches-container p-3`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>
            <img
              className="team-banner w-100"
              src={teamBannerUrl}
              alt="team banner"
            />
            <LatestMatch
              latestMatchDetails={latestMatchDetails}
              backgroundColor={backgroundColor}
            />
            <div className="container-fluid">
              <div className="row">
                <h3 className="col-12 mt-2 text-light ml-md-4">
                  Recent Matchs
                </h3>

                {recentMatches.map(eachMatchCard => (
                  <MatchCard
                    eachMatchCard={eachMatchCard}
                    key={eachMatchCard.id}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
