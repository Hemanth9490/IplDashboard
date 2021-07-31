const LatestMatch = props => {
  const {latestMatchDetails} = props

  return (
    <div className=" container-fluid">
      <h3 className="mt-2 text-light ml-md-4">Latest Match</h3>
      <div className="row latest-match m-md-3 pt-md-5  p-4 justify-content-around align-items-center">
        <div className="col-8 col-md-4 d-flex flex-column justify-content-around">
          <h5>{latestMatchDetails.competingTeam}</h5>
          <h6 className="text-muted">{latestMatchDetails.date}</h6>
          <p className="text-light"> {latestMatchDetails.venue}</p>
          <p className="text-success">{latestMatchDetails.result}</p>
        </div>
        <div>
          <img
            className="last-match-logo"
            src={latestMatchDetails.competingTeamLogo}
            alt={latestMatchDetails.competingTeam}
          />
        </div>
        <div className="col-12 col-md-4 d-flex flex-column justify-content-around text-md-right">
          <h6>{`First Innings: ${latestMatchDetails.firstInnings}`}</h6>
          <h6>{`Second Innings: ${latestMatchDetails.secondInnings}`}</h6>
          <h6>{`Man of the Match: ${latestMatchDetails.manOfTheMatch}`}</h6>
          <h6>{`umpires: ${latestMatchDetails.umpires}`}</h6>
        </div>
        <h5 className="col-12 text-center text-secondary mt-3 mt-md-0">
          {`${latestMatchDetails.firstInnings} VS ${latestMatchDetails.secondInnings}`}
        </h5>
      </div>
    </div>
  )
}
export default LatestMatch
