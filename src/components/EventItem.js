const EventItem = ({ item }) => {

  let badgeColour = "";

  switch (item.division) {
    
    case "england-and-wales":
      badgeColour = "bg-info text-dark";
      break;
    case "scotland":
      badgeColour = "bg-primary";
      break;
    case "northern-ireland":
      badgeColour = "bg-success";
      break;

  }

  return (

    <div className="col-sm-4">
      <div className="card border-dark my-2">
        <div className="card-header">
          {item.title}
        </div>
        <div className="card-body">
          <span className={`badge rounded-pill ${badgeColour}`}>{item.division}</span>
          <p className="card-text">Date: {item.date}</p>
          <p className="card-text">Bunting: {item.bunting ? "Yes" : "No"}</p>
          <p className="card-text">{item.notes}</p>
        </div>
      </div>
    </div>
    
  );
};

export default EventItem;