
import Nav from '../data/nav'



export default function Nav() {

    return (
        <nav>
            <ul className="menu">
                {
                    menuList.map(link => (
                        <li key={link.id}>
                            <a href={link.url}>{link.Name}</a>
                        </li>
                    ))

                }

            </ul>
        </nav>
    )
}