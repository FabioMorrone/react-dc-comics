
export default function Card({ thumb, series }) {


    return (
        <div className="col">
            <div className='Card'>
                <img src={thumb} alt={series} />
                <div>{series}</div>
            </div>
        </div>
    )
}