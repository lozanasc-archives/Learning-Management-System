import Banner from './Dashboard.Banner.js';
import SidePanel from './Dashboard.SidePanel.js';
import MainPanel from './Dashboard.MainPanel.js';

const Dashboard = (Fullname) => {

    const RightPanelContainer = document.createElement('div');
    RightPanelContainer.className = 'RightPanelContainer';
    RightPanelContainer.append(Banner(Fullname), MainPanel());

    const DashboardContainer = document.createElement('div');
    DashboardContainer.className = 'DashboardContainer';
    DashboardContainer.append(SidePanel(), RightPanelContainer);

    return DashboardContainer;
}

export default Dashboard;