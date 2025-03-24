import DcList from "./DcList";

export default function Main() {
    return (
        <main>
            <section className="banner_up">
            </section>
            <DcList />
            <section className="banner">
                <div className="container d-flex">

                    <ul className="unstile-list">
                        <li className="info-icon">
                            <img src="/buy-comics-digital-comics.png" alt="" />
                            <span>DIGITAL COMICS</span>
                        </li>
                        <li className="info-icon" >
                            <img src="/buy-comics-merchandise.png" alt="" />
                            <span>DC MERCHANDISE</span>
                        </li>
                        <li className="info-icon">
                            <img src="/buy-comics-subscriptions.png" alt="" />
                            <span>SUBSCRIPTION</span>
                        </li>
                        <li className="info-icon">
                            <img src="/buy-comics-shop-locator.png" alt="" />
                            <span>COMIC SHOP LOCATOR</span>
                        </li>
                        <li className="info-icon">
                            <img src="/buy-dc-power-visa.svg" alt="" />
                            <span>DC POWER VISA</span>
                        </li>
                    </ul>

                </div>
            </section>
        </main>
    )
}

