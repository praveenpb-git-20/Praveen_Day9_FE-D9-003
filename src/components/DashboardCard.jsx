import "./DashboardCard.css";

function DashboardCard(){

const data=[

{
title:"Employees",
count:"250",
icon:"👨‍💼"
},

{
title:"Projects",
count:"45",
icon:"📁"
},

{
title:"Revenue",
count:"₹12M",
icon:"💰"
},

{
title:"Clients",
count:"80",
icon:"🤝"
}

];

return(

<section>

<h2 className="heading">
Dashboard
</h2>

<div className="dashboard-grid">

{data.map((item,index)=>(

<div className="dashboard-card" key={index}>

<h1>{item.icon}</h1>

<h2>{item.count}</h2>

<p>{item.title}</p>

</div>

))}

</div>

</section>

);

}

export default DashboardCard;