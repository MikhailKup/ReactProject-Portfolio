import { useState, useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import navIcon1 from '../assets/img/github-icon.svg'
import navIcon2 from '../assets/img/telegram-icon.svg'
import navIcon3 from '../assets/img/vk-icon.svg'

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			return window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
		}
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (link) => {
		setActiveLink(link)
	};

	return (
		<Navbar expand='lg' className={scrolled ? 'scrolled' : ''}>
			<Container>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#home' className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
						onClick={() => onUpdateActiveLink('home')}
						>
							Home
						</Nav.Link>
						<Nav.Link href='#skills' className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
						onClick={() => onUpdateActiveLink('skills')}
						>
							Skills
						</Nav.Link>
						<Nav.Link href='#projects' className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
						onClick={() => onUpdateActiveLink('projects')}
						>
							Projects
						</Nav.Link>
					</Nav>
					<span className='navbar__text'>
						<div className='social-icon'>
							<a href='https://github.com/MikhailKup' target='_blank' rel="noreferrer">
								<img src={navIcon1} alt='navIcon1' />
							</a>
							<a href='https://t.me/MikhailKuplinov' target='_blank' rel="noreferrer">
								<img src={navIcon2} alt='navIcon2' />
							</a>
							<a href='https://vk.com/mikhailkuplinov' target='_blank' rel="noreferrer">
								<img src={navIcon3} alt='navIcon3' />
							</a>
						</div>
						<button className='navbar__btn'>
							<a href="#connect">Let's connect</a>
						</button>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
