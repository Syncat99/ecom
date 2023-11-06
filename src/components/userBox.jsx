const UserInfo = () => {
        return  (
            <div className="userData">
                <div className="personalInfo">
                    <img className="profilePhoto" src="/images/profilePhoto.png" width={60}/>
                    <div className="textInfos">
                        <h3 className="userName">Mohamed Mourrane</h3>
                        <span className="subscription">Platinum member</span>
                    </div>
                </div>
                <hr/>
                <div className="wallet section">
                    <span>Wallet</span>
                    <div className="balance">
                        <div>
                            <img className="moneyIcon icon" src="/images/moneys.png" width={20}/>
                            <h4>Balance</h4>
                        </div>
                        <p>9,000 $</p>
                    </div>
                    <div className="coins">
                        <div>
                            <img className="moneyIcon icon" src="/images/coin.png" width={20}/>
                            <h4>Coins</h4>
                        </div>
                        <p>0.0290</p>
                    </div>
                </div>
                <hr/>
                <div className="menu section">
                    <span>Menu</span>
                    <div>
                        <img className="receiptIcon icon" src="/images/receipt-item.png" width={20}/>
                        <a href="#"><h4>Purchase</h4></a>
                    </div>
                    <div>
                        <img className="heartIcon icon" src="/images/heart.png" width={20}/>
                        <a href="#"><h4>Wishlist</h4></a>
                    </div>
                    <div>
                        <img className="settingsIcon icon" src="/images/setting-2.png" width={20}/>
                        <a href="#"><h4>Settings</h4></a>
                    </div>
                </div>
                <hr/>
                <div className="logoutSection" >
                    <a href="#"><img className="logoutIcon icon" src="/images/logout.png" width={20}/></a>
                    <a href="#"><h4>Sign Out</h4></a>
                </div>

            </div>
    )}

export default UserInfo;