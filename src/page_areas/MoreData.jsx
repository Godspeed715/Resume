function DisplayDics({ template }) {
	const listItems = template.map((element) => (
		<ul>
			{Object.values(element).map((child) => {
				return <li>{child}</li>
			})}
		</ul>
	))
	console.log(listItems)

	return <div>{listItems}</div>
}

function DisplayLists({ template }) {
	const listItems = template.map((element) => <li>{element}</li>)
	console.log(listItems)

	return (
		<div>
			<ul>{listItems}</ul>
		</div>
	)
}

function MoreData() {
	const Courses = [
		{
			school: 'Covenant University',
			time: '2024 - 2028',
			name: 'Ongoing Bsc. Computer Science',
		},
	]
	const Certifications = [
		{
			name: 'Microsoft Specialist',
			time: '2025',
		},
		{
			name: 'OSINT Mkdit India',
			time: '2025',
		},
	]
	const Skills = [
		'Pyhton',
		'HTML and CSS',
		'Javascipt',
		'Networking Basics',
		'React Basics',
	]
	return (
		<div className="MoreData">
			<div>
				<h1>Courses</h1>
				<DisplayDics template={Courses} />
			</div>
			<div>
				<h1>Certifications</h1>
				<DisplayDics template={Certifications} />
			</div>
			<div className="skills">
				<h1>Skills</h1>
				<DisplayLists template={Skills} />
			</div>
			<div>
				<h1>Contact</h1>
				<div className="contact-divs">
					<div>img</div>
					<div>Whatsapp</div>
				</div>
				<div className="contact-divs">
					<div>img</div>
					<div>Github</div>
				</div>

				<div className="contact-divs">
					<div>img</div>
					<div>Gmail</div>
				</div>
			</div>
		</div>
	)
}

export default MoreData
