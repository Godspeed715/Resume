import Icon from '@mdi/react'
import { mdiWhatsapp, mdiGithub, mdiGmail } from '@mdi/js'
;<></>

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
				<a
					href="https://mail.google.com/mail/?view=cm&fs=1&to=chimzagamdaniel@gmail.com&su=Hello&body=This%20is%20a%20"
					target="_blank"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					<div className="contact-divs">
						<div>
							<Icon path={mdiGmail} size={2} />
						</div>
						<div>Gmail</div>
					</div>
				</a>

				<a
					href="https://github.com/Godspeed715"
					target="_blank"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					<div className="contact-divs">
						<div>
							<Icon path={mdiGithub} size={2} />
						</div>
						<div>Github</div>
					</div>
				</a>

				<a
					href="https://wa.me/2347059281620"
					target="_blank"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					<div className="contact-divs">
						<div>
							<Icon path={mdiWhatsapp} size={2} />
						</div>
						<div>Whatsapp</div>
					</div>
				</a>
			</div>
		</div>
	)
}

export default MoreData
