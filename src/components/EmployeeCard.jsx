import "./EmployeeCard.css";

const employees = [

{
name:"Praveen",
role:"Frontend Developer",
image:"https://randomuser.me/api/portraits/men/32.jpg"
},

{
name:"Vinay",
role:"Backend Developer",
image:"https://randomuser.me/api/portraits/men/44.jpg"
},

{
name:"Girish",
role:"UI Designer",
image:"https://randomuser.me/api/portraits/men/75.jpg"
}

];

function EmployeeCard(){

return(

<section>

<h2 className="heading">
Employees
</h2>

<div className="employee-grid">

{employees.map((employee,index)=>(

<div className="employee-card" key={index}>

<img
src={employee.image}
alt={employee.name}
/>

<h3>{employee.name}</h3>

<p>{employee.role}</p>

<button>
View Profile
</button>

</div>

))}

</div>

</section>

);

}

export default EmployeeCard;