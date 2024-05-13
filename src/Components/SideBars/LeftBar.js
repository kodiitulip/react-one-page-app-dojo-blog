const LeftBar = () => {
    return (
        <div className="leftbar">
            <div className="leftbar__container">
                <div className="leftbar__profile">
                    <img src="MiniMe.png" alt="pfp" className="profile-img" />
                    <div className="profile-desc">
                        <p>Profile Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LeftBar;