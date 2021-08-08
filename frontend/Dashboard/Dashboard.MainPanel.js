
const Main = () => {
    
    const ContentPanel = document.createElement('div');
    ContentPanel.className = 'ContentPanel';

    const MainPanel = document.createElement('div');
    MainPanel.className = 'MainPanel';
    MainPanel.append(ContentPanel);

    return MainPanel;
}

export default Main;