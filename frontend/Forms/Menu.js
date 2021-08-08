import Form from './Form.js';


export default function Menu()
{
    
    const Logo = document.createElement('img');
    Logo.src = '../../assets/norsu-logo.ico';

    const Header = document.createElement('h1');
    Header.innerHTML = 'Our Pride, Our Hope, Our Future';

    const Hero = document.createElement('div');
    Hero.className = 'Hero';
    Hero.style = 'margin: auto; display: flex; flex-flow: column;';
    Hero.append(Logo, Header);

    const HeroContainer = document.createElement('div');
    HeroContainer.className = 'HeroContainer';
    HeroContainer.appendChild(Hero);

    const MenuContainer = document.createElement('div');
    MenuContainer.className = 'MenuContainer'
    MenuContainer.append(
                        HeroContainer,
                        Form()
                        );

    return MenuContainer;
}