import Nav from "./Nav";



export default function header() {
    return (
        <header>
            <div className="container d-flex">

                <div className="logo">
                    <img src="/dc-logo.png" alt="" />
                </div>
                <Nav />


            </div>
        </header >
    )
}