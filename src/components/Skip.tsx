import { useEffect, useState } from 'react';
import axios from 'axios';
import Continue from './Continue';
import SubHeader from './SubHeader';
import type {ISkip} from '../lib/constants'
import Item from './Item';
import { IoReloadOutline } from "react-icons/io5";

// Dynamically import all images from the assets folder
const images = Object.fromEntries(
    Object.entries(
        import.meta.glob('../assets/*.{jpg,png,jpeg,gif,svg}', { eager: true, as: 'url' })
    ).map(([path, url]) => [path.split('/').pop(), url])
);

const Skip = () => {
    const [skips, setSkips] = useState<ISkip[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedSkip, setSelectedSkip] = useState<number | null>(null);

    useEffect(() => {
        const storedSkip= localStorage.getItem('storedSkip');
        if(storedSkip){
            setSelectedSkip(()=> Number(storedSkip))
        }
        
        const fetchSkips = async () => {
            try {
                const response = await axios.get(
                    'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
                );
                //map the response data by adding a correponsing image_url
                const skipsWithImages = response.data.map((skip: ISkip) => {
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
    const handleSkipSelect = (skip: ISkip) => {
       
        setSelectedSkip((prevSelected) => {
            if(prevSelected===skip.id){
                localStorage.removeItem('storedSkip')
            }
            return prevSelected === skip.id ? null : skip.id
        });
        localStorage.setItem('storedSkip',skip.id.toString())
    };

    if (loading) {
        return <div className="text-center text-white text-lg min-h-[80vh] min-w-[70vw] flex  justify-center items-center">
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
            {selectedSkip && (
                    <div className="sticky bottom-0 bg-black border border-white rounded-md w-full left-0 z-50 flex items-center justify-center gap-6">
                    <Continue skip={skips.find(skip => skip.id === selectedSkip) || {
                        id: 0,
                        size: 0,
                        hire_period_days: 0,
                        transport_cost: null,
                        per_tonne_cost: null,
                        price_before_vat: 0,
                        vat: 0,
                        postcode: '',
                        area: '',
                        forbidden: false,
                        created_at: '',
                        updated_at: '',
                        allowed_on_road: false,
                        allows_heavy_waste: false,
                    }} />
                </div>
                )}
        </div>
    );
};

export default Skip;
