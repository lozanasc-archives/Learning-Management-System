import Button from '../components/Button.js';

const SidePanel = () => {

    const SystemInfoGroup = () => {

        const Logo = document.createElement('img');
        Logo.src = '../../assets/norsu-logo.ico';
        Logo.style = 'height:120px; width:120px;margin:10px auto;'
        const Header = document.createElement('h4');
        Header.innerHTML = 'NORSU LMS';
        Header.style = 'margin:auto;filter:drop-shadow(0 2px 0.10rem black)';
        const Group = document.createElement('div');
        Group.style = 'display: flex; flex-flow: column; margin: 10px auto;';
        Group.append(Logo,Header);
        return Group;
    }
    const PanelHeader = document.createElement('h1');
    PanelHeader.innerHTML = 'Dashboard';

    const MainDashboard = Button('', () => {/* Code goes here */}, 'click');
    const MainDashboardIcon = document.createElement('img');
    MainDashboardIcon.src = '../../assets/dashboard.png';
    MainDashboard.append(MainDashboardIcon);

    const Settings = Button('', () => {/* Code goes here */}, 'click');
    const SettingsIcon = document.createElement('img');
    SettingsIcon.src = '../../assets/settings.png';    
    Settings.append(SettingsIcon);

    const Logout = Button('', () => {
        window.open('http://localhost:7000','_self');
    },'click');
    const LogoutIcon = document.createElement('img');
    LogoutIcon.src = '../../assets/sign-out.png';
    Logout.append(LogoutIcon);


    const PanelContainer = document.createElement('div');
    PanelContainer.className = 'SidePanel';
    PanelContainer.append(SystemInfoGroup(),PanelHeader, MainDashboard, Settings, Logout);

    return PanelContainer;
}

export default SidePanel;