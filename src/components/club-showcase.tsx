import {Carousel} from 'react-bootstrap'
import './club-showcase.css'

export default function FeaturedClubs(props: any) {
    return (
        <>
            <Carousel className="showcase-carousel" variant={props.appearance} fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="holder.js/800x400?text=Club cover photo&bg=6b2e2e"
                        alt="Club name cover photo"
                    />
                    {/* Each image has a source (src) and alternate text when the mouse hovers over it. */}
                    <Carousel.Caption>
                        {/* Each carousel section has a header and caption */}
                        <h3>Featured Club 1</h3>
                        <p>This club's mini description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="holder.js/800x400?text=Club cover photo&bg=306b2e"
                        alt="Club name cover photo"
                    />

                    <Carousel.Caption>
                        <h3>Featured Club 2</h3>
                        <p>This club's mini description</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src="holder.js/800x400?text=Club cover photo&bg=2e416b"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Featured Club 3</h3>
                        <p>This club's mini description</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}