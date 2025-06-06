import { useEffect, useState } from 'react';
import axios from 'axios';
import SubHeader from './SubHeader';
import type { SkipType } from '../lib/types'
import Item from './Item';
import { IoReloadOutline } from "react-icons/io5";

// Dynamically import all images from the assets folder
const images = Object.fromEntries(
    Object.entries(
        import.meta.glob('../assets/*.{jpg,png,jpeg,gif,svg}', { eager: true, as: 'url' })
    ).map(([path, url]) => [path.split('/').pop(), url])
);

const Skip = () => {
    const [skips, setSkips] = useState<SkipType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedSkip, setSelectedSkip] = useState<number | null>(null);

    useEffect(() => {
        const storedSkip = localStorage.getItem('storedSkip');
        if (storedSkip) {
            setSelectedSkip(() => Number(storedSkip))
        }

        const fetchSkips = async () => {
            try {
                const response = await axios.get(
                    'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
                );
                //map the response data by adding a correponsing image_url
                const skipsWithImages = response.data.map((skip: SkipType) => {
                    // Build the image filename based on the skip size
                    const imageFileName = `${skip.size}-yarder-skip.jpg`;
                    // Get the full path from the images object
                    const imageUrl = images[imageFileName];
                    return {
                        ...skip,
                        image_url: imageUrl,
                    };
                });
                setSkips(skipsWithImages || []);
            } catch (err) {
                console.error(err);
                setError('Failed to load skips.');
            } finally {
                setLoading(false);
            }
        };

        fetchSkips();
    }, []);

    // toggle the selected skip for only the one clicked
    const handleSkipSelect = (skip: SkipType) => {

        setSelectedSkip((prevSelected) => {
            if (prevSelected === skip.id) {
                localStorage.removeItem('storedSkip')
            }
            return prevSelected === skip.id ? null : skip.id
        });
        localStorage.setItem('storedSkip', skip.id.toString())
    };

    if (loading) {
        return <div className="text-center dark:text-white text-gray text-lg min-h-[80vh] min-w-[70vw] flex  justify-center items-center">
            <IoReloadOutline className='rotate animate-spin h-14 w-14' />
        </div>;
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    return (
        <div className='relative'>
            <SubHeader />
            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pb-32 mt-[4rem]">
                {skips.map((skip) => (
                    <div key={skip.id} className='col-span-1 '>
                        <Item skip={skip} selectedSkip={selectedSkip} handleSkipSelect={handleSkipSelect} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skip;
