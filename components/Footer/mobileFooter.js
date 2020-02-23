import React from 'react';

export default function() {
    return (
        <div className="bottom-nav-bar d-lg-none">
            <nav className="mobile-bottom">
                <ul>
                <li>
                    <a href="/tour-barca.html">
                    <div className="bottom-nav-icon">
                        <img src="../img/icon/boat.svg" />
                    </div>
                    <p>Tour in Barca</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <div className="bottom-nav-icon">
                        <img src="../img/icon/bus.svg" />
                    </div>
                    <p>Tour in Bus</p>
                    </a>
                </li>
                <li>
                    <a href="/esperienze.html">
                    <div className="bottom-nav-icon">
                        <img src="../img/icon/experience.svg" />
                    </div>
                    <p>Esperienze</p>
                    </a>
                </li>
                <li>
                    <a href="/discover.html">
                    <div className="bottom-nav-icon">
                        <img src="../img/icon/discover.svg" />
                    </div>
                    <p>Luoghi</p>
                    </a>
                </li>
                </ul>
            </nav>
            </div>

    )
}