import Card from "../components/card";
import Link from "next/link";
// import '../styles/Home.module.css'


export default function Court({court}) {
    // console.table(judges);
    // console.table(court);
    return (
        <div className="container">
			<div className="row">
			<Card
				title = {<Link href = "http://localhost:3000/judgesPage">Courthouse</Link>}
				// title={<a href = "http://localhost:3000/api/judges">Courthouse Offices</a>}
				images="images/courthouse.png"
				alt="courthouse"
				
				/>
			<Card
				//"Job Opportunities"
				title={<Link href="https://county.milwaukee.gov/EN/Human-Resources">Job Opportunities</Link>}
				images="../images/Job-Free-PNG.png"
				alt="Jobs"
				// link = "https://county.milwaukee.gov/EN/Human-Resources"
				/>
			<Card
				title={<Link href="https://county.milwaukee.gov/EN/News--Events/Events">Events</Link>}
				images="../images/EVENTS.png"
				alt="events"
			/>
			<Card
				title={<Link href="http://localhost:3000/courtPage">COUNTY SERVICES</Link>}
				images="../images/MilwaukeeCountyLogo.png"
				alt="county"
				
			/>
			</div>
		</div>            
		
    )
}

