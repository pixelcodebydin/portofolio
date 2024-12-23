import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { readPhotographyActive } from '../api/Photography';

function Photography() {
    const [photography, setPhotography] = useState([]);
    useEffect(() => {
        document.title = 'Photography - Admin Panel';
        const getPhotography = async () => {
            try {
                const data = await readPhotographyActive();
                setPhotography(data);
            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };
        getPhotography();
    }, []);

    return (
        <div className="container px-5">
            <div className=" text-center py-5">
                <h1 className="text-center pt-3">Photography</h1>
                <p className="text-center">I focus on capturing meaningful moments that leave a lasting impression. From event documentation to creative photography, I ensure each shot reflects a perfect blend of storytelling and artistic vision.</p>
                <a href="https://drive.google.com/drive/folders/1tYo-SqdJLj4Y2oAyNVVaCRDYB56dW8uA?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
            </div>

            <hr id="line" className="mb-3"></hr>

            <div className="row pt-4 pb-5">
                {photography.map((item, index) => (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                        <img src={`/image/photography/${item.file_photography}`} className="d-block" style={{height: '15rem', width: '15rem', maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5rem', objectFit: 'cover'}} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Photography;
