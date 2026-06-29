import "./TeamCard.css";

function TeamCard(){

return(

<section>

<h2 className="heading">
Development Team
</h2>

<div className="team-card">

<img
src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
alt="team"
/>

<div className="team-content">

<h2>FlowTrack 360 Team</h2>

<p>

We are a creative software developers developing
modern web applications using React,
Node.js and Cloud Technologies.

</p>

<div className="team-stats">

<div>

<h3>25+</h3>

<span>Developers</span>

</div>

<div>

<h3>50+</h3>

<span>Projects</span>

</div>

<div>

<h3>10+</h3>

<span>Countries</span>

</div>

</div>

</div>

</div>

</section>

);

}

export default TeamCard;