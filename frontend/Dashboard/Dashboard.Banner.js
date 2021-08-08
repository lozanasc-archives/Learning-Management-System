const Banner = (Fullname) => {
    
    const BannerProfilePicture = document.createElement('img');
    BannerProfilePicture.src = '../../assets/user-profile.png'; // Default state

    const BannerHeader = document.createElement('h1');
    BannerHeader.innerHTML = `Good day, ${Fullname}`;

    const BannerContainer = document.createElement('div');
    BannerContainer.className = 'Banner';
    BannerContainer.append(BannerProfilePicture,BannerHeader);
    return BannerContainer;

}

export default Banner;