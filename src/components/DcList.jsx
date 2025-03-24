
import comics from '../data/comics';
import Card from './Card';



export default function DcList() {

    return (
        <div className='containerDc'>
            <div className='row'>
                {
                    comics.map(comic => (

                        <Card key={comic.id} thumb={comic.thumb} series={comic.series} />
                    ))
                }
            </div>
        </div>
    )
}